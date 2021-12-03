import useSWR, { SWRConfiguration } from 'swr'
import { request } from 'graphql-request'
import { Bounty, BountyFilterParams, Profile, ProfileFilterParams } from '../constants'
import { bountiesQuery, bountyQuery, ProfileQuery, ProfilesQuery } from '../queries'

const fetcher = async <T, K>(query: any, variables: K) => request<T>(`/api/graphql`, query, variables)

export const useBounties = (params: BountyFilterParams = {}, config: SWRConfiguration = {}) => {
  const request = useSWR<{ bounties: Bounty[] }>(
    JSON.stringify(params),
    async () => await fetcher<{ bounties: Bounty[] }, BountyFilterParams>(bountiesQuery, params),
    { fallbackData: [], ...config }
  )

  return request.data?.bounties ?? []
}

export const useBounty = (params: { id: number }, config: SWRConfiguration = {}) => {
  return useSWR<Bounty>(
    `bounty-${params.id}`,
    async () => await fetcher<Bounty, { id: number }>(bountyQuery, params),
    config
  )
}

export const useProfiles = (params: ProfileFilterParams, config: SWRConfiguration = {}) => {
  const { data } = useSWR<{ profiles: Profile[] }>(
    JSON.stringify(params),
    async () => await fetcher<{ profiles: Profile[] }, ProfileFilterParams>(ProfilesQuery, params),
    { fallbackData: [], ...config }
  )

  return data?.profiles ?? []
}

export const useProfile = (params: { id: number }, config: SWRConfiguration = {}) => {
  return useSWR<Profile>(
    `profile-${params.id}`,
    async () => await fetcher<Profile, { id: number }>(ProfileQuery, params),
    config
  )
}
