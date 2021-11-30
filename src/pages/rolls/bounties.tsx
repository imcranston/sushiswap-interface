import React, { ReactElement } from 'react'
import Card from '../../components/Card'
import {
  BlockCard,
  BountyCard,
  BountyCardLite,
  BreadCrumbBar,
  Button,
  ContentHeader,
  Section,
  SideBar,
  BountyList,
} from '../../components/Rolls'
import Container from '../../components/Container'
import Head from 'next/head'
import Typography from '../../components/Typography'
import useSWR from 'swr'

const mockBounties = [
  {
    title: 'Miso Redesign',
    description: 'designer needed for redesign starting soon',
    tags: ['design', 'miso'],
    project: 'Miso',
    createdAt: 'created 2 days ago',
    startDate: '12/02/2021',
    estimatedTime: '30 hours',
    skill: 'Design',
    skillLevel: 'Midlevel',
    reward: '3000 Sushi',
    numOfApplicants: 2,
    isFavorite: true,
  },
  {
    title: 'Miso Redesign',
    description: 'designer needed for redesign starting soon',
    tags: ['design', 'miso'],
    project: 'Miso',
    createdAt: 'created 2 days ago',
    startDate: '12/02/2021',
    estimatedTime: '30 hours',
    skill: 'Design',
    skillLevel: 'Midlevel',
    reward: '3000 Sushi',
    numOfApplicants: 2,
    isFavorite: true,
  },
  {
    title: 'Miso Redesign',
    description: 'designer needed for redesign starting soon',
    tags: ['design', 'miso'],
    project: 'Miso',
    createdAt: 'created 2 days ago',
    startDate: '12/02/2021',
    estimatedTime: '30 hours',
    skill: 'Design',
    skillLevel: 'Midlevel',
    reward: '3000 Sushi',
    numOfApplicants: 2,
    isFavorite: true,
  },
  {
    title: 'Miso Redesign',
    description: 'designer needed for redesign starting soon',
    tags: ['design', 'miso'],
    project: 'Miso',
    createdAt: 'created 2 days ago',
    startDate: '12/02/2021',
    estimatedTime: '30 hours',
    skill: 'Design',
    skillLevel: 'Midlevel',
    reward: '3000 Sushi',
    numOfApplicants: 2,
    isFavorite: true,
  },
  {
    title: 'Miso Redesign',
    description: 'designer needed for redesign starting soon',
    tags: ['design', 'miso'],
    project: 'Miso',
    createdAt: 'created 2 days ago',
    startDate: '12/02/2021',
    estimatedTime: '30 hours',
    skill: 'Design',
    skillLevel: 'Midlevel',
    reward: '3000 Sushi',
    numOfApplicants: 2,
    isFavorite: true,
  },
]

const getChains = (url = 'https://chainid.network/Roles.json') => fetch(url).then((res) => res.json()) // ?

export default function BountiesPage({ fallbackData }) {
  // const res = useSWR('https://chainid.network/Roles.json', getChains, { fallbackData })
  // const { data } = res
  return (
    <Container id="Bounties-page" className="py-4 space-y-6 md:py-8 lg:py-12" maxWidth="6xl">
      <Head>
        <title>Rolls | Sushi</title>
        <meta key="description" name="description" content="Roles..." />
      </Head>
      <div className="w-full max-w-6xl mx-auto">
        {/* <Typography component="h1" variant="h1" className="w-full mb-4">
          Sushi Rolls
        </Typography>
        <div className="grid items-start justify-start grid-cols-2 gap-3 mx-auto ">
          {mockRoles.map((chain, key) => {
            return (
              <div key={key} className="h-full p-1 rounded bg-dark-900 text-primary">
                <pre className="h-full p-4 rounded bg-dark-1000">
                  <code>{JSON.stringify(chain, null, 2)}</code>
                </pre>
              </div>
            )
          })}
        </div> */}
        {/* <BreadCrumbBar /> */}
        <ContentHeader bounties={mockBounties} />
        <div className="flex flex-row mt-4 ml-2 mr-2 space-x-2 overflow-x-auto">
          <SideBar />
          <BountyList bounties={mockBounties} totalBounties={30} />
        </div>
      </div>
    </Container>
  )
}

// export async function getStaticProps() {
//   return { props: { fallbackData: await getChains() } }
// }

// export default BountiesPage
