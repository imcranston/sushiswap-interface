import useSWR, { SWRConfiguration } from 'swr'
import { request } from 'graphql-request'
import { Bounty, BountyFilterParams, Profile, ProfileFilterParams } from '../constants'
import { bountiesQuery, bountyQuery, ProfileQuery, ProfilesQuery } from '../queries'

const fetcher = async <T, K>(query: any, variables: K) => request<T>(`/api/graphql`, query, variables)

export const useBounties = (params: BountyFilterParams, config: SWRConfiguration = {}) => {
  return useSWR<Bounty[]>(
    JSON.stringify(params),
    async () => await fetcher<Bounty[], BountyFilterParams>(bountiesQuery, params),
    config
  )
}

export const useBounty = (params: { id: number }, config: SWRConfiguration = {}) => {
  return useSWR<Bounty>(
    `bounty-${params.id}`,
    async () => await fetcher<Bounty, { id: number }>(bountyQuery, params),
    config
  )
}

export const useProfiles = (params: ProfileFilterParams, config: SWRConfiguration = {}) => {
  return useSWR<Profile[]>(
    JSON.stringify(params),
    async () => await fetcher<Profile[], ProfileFilterParams>(ProfilesQuery, params),
    config
  )
}

export const useProfile = (params: { id: number }, config: SWRConfiguration = {}) => {
  return useSWR<Profile>(
    `profile-${params.id}`,
    async () => await fetcher<Profile, { id: number }>(ProfileQuery, params),
    config
  )
}
