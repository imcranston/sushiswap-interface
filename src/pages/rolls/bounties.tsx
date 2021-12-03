import React from 'react'
import Head from 'next/head'

import Container from '../../components/Container'
import { ContentHeader, SideBar, BountyList } from '../../components/Rolls'
import { useBounties } from 'src/services/rolls'

const BountiesPage = () => {
  const bounties = useBounties()

  return (
    <Container id="Bounties-page" className="py-4 space-y-6 md:py-8 lg:py-12" maxWidth="6xl">
      <Head>
        <title>Rolls | Sushi</title>
        <meta key="description" name="description" content="Roles..." />
      </Head>
      <div className="w-full max-w-6xl mx-auto">
        <ContentHeader bounties={bounties} />
        <div className="flex flex-row mt-4 ml-2 mr-2 space-x-2 overflow-x-auto">
          <SideBar />
          <BountyList bounties={bounties} />
        </div>
      </div>
    </Container>
  )
}

export default BountiesPage
