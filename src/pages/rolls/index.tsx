import React, { ReactElement } from 'react'
import Card from '../../components/Card'
import { BlockCard, BountyCardLite, Button, Section, StatsCard } from '../../components/Rolls'

const RollsLanding = () => {
  return (
    <>
      <Section className="flex-col items-center pl-8 pr-8 bg-gray-500 h-80">
        <div className="max-w-3xl mt-12 text-4xl font-bold text-center text-black break-words">Sushi Rolls</div>
        <div className="max-w-3xl mt-4 text-lg text-center text-black break-words">
          SUSHI has pride ourselves of being community first from day one. Explore how you can get connected to the
          community, contribute with your skills and get earn
        </div>
        <Button className="mt-6">Get Involved</Button>
      </Section>

      <Section className="relative flex-wrap justify-center mt-4 ml-8 mr-8 space-x-4 overflow-x-auto md:space-x-8 md:-mt-14">
        <StatsCard title="Protocol Treasury" value="$420,000" />
        <StatsCard title="Funded Bounties" value="42" />
        <StatsCard title="Contributors" value="20" />
        <StatsCard title="Total Rewards" value="$60,000" />
      </Section>

      <Section className="flex-col items-center pl-8 pr-8 mt-8 space-y-4 sm:space-y-0 sm:ml-4 sm:mr-4 sm:justify-center sm:space-x-2 md:space-x-8 sm:flex-row bg-dark-1000">
        <BlockCard title="Bounties" sub="jobs or projects with Sushi" />
        <BlockCard title="Proposals" sub="community projects for improvement of Sushi" />
        <BlockCard title="Voting" sub="Review & Vote on community projects or ideas" />
        <BlockCard title="Contribute" sub="Create a profile with your skills & apply" />
      </Section>

      <Section className="flex justify-center">
        <Card className="w-full p-8 m-4 mt-8 bg-dark-900 max-w-7xl">
          <div className="mb-1 font-bold text-white">Have an idea of fix? Request it!</div>
          <div className="mb-4">Input ideas, request a feature or report a fix!</div>
          <Button className="bg-dark-1000">Contribute your Ideas</Button>
        </Card>
      </Section>

      <Section className="flex-col p-8 max-w-64">
        <div className="flex flex-row items-center">
          <div className="mr-6 text-lg text-white">The latest engineering bounties from Sushi</div>
          <div className="text-sm text-white underline">Apply Today</div>
        </div>

        <div className="flex flex-row mt-4 space-x-8 overflow-x-auto">
          <BountyCardLite
            reward={500}
            tag="Frontend"
            skill="Intermediate"
            title="Mobile MISO UI"
            creation="19 hours ago"
            numOfApplicants={12}
            isFavorite={false}
          />
          <BountyCardLite
            reward={500}
            tag="Frontend"
            skill="Intermediate"
            title="Mobile MISO UI"
            creation="19 hours ago"
            numOfApplicants={12}
            isFavorite={false}
          />
          <BountyCardLite
            reward={500}
            tag="Frontend"
            skill="Intermediate"
            title="Mobile MISO UI"
            creation="19 hours ago"
            numOfApplicants={12}
            isFavorite={false}
          />
          <BountyCardLite
            reward={500}
            tag="Frontend"
            skill="Intermediate"
            title="Mobile MISO UI"
            creation="19 hours ago"
            numOfApplicants={12}
            isFavorite={false}
          />
          <BountyCardLite
            reward={500}
            tag="Frontend"
            skill="Intermediate"
            title="Mobile MISO UI"
            creation="19 hours ago"
            numOfApplicants={12}
            isFavorite={false}
          />
        </div>
      </Section>
    </>
  )
}

export default RollsLanding
