import React from 'react'
import { useBounties } from 'src/services/rolls'
import Card from '../../components/Card'
import {
  BlockCard,
  BountyCardLite,
  Button,
  Section,
  SmallCard,
  SmallCardTwo,
  UserPreview,
} from '../../components/Rolls'

const RollsLanding = () => {
  const bounties = useBounties()

  return (
    <>
      <Section className="flex-col items-center pl-8 pr-8 bg-gray-500 h-80">
        <div className="max-w-3xl mt-12 text-4xl font-bold text-center text-black break-words">Sushi Rolls</div>
        <div className="max-w-3xl mt-4 text-lg text-center text-black break-words">
          SUSHI has pride ourselves of being community first from day one. Explore how you can get connected to the
          community, contribute with your skills and get earn
        </div>
        <Button className="p-4 mt-6">Get Involved</Button>
      </Section>

      <Section className="flex flex-row flex-wrap justify-center mt-4 md:-mt-16">
        <div className="flex flex-row">
          <SmallCardTwo title="$420,000" sub="Protocol Treasury" />
          <SmallCardTwo title="42" sub="Funded Bounties" />
        </div>
        <div className="flex flex-row">
          <SmallCardTwo title="20" sub="Contributors" />
          <SmallCardTwo title="$60,000" sub="Total Rewards" />
        </div>
      </Section>

      <Section className="flex-col items-center pl-8 pr-8 mt-8 space-y-4 sm:space-y-0 sm:ml-4 sm:mr-4 sm:justify-center sm:space-x-2 md:space-x-8 sm:flex-row bg-dark-1000">
        <BlockCard title="Bounties" sub="jobs or projects with Sushi" />
        <BlockCard title="Proposals" sub="community projects for improvement of Sushi" />
        <BlockCard title="Voting" sub="Review & Vote on community projects or ideas" />
        <BlockCard title="Contribute" sub="Create a profile with your skills & apply" />
      </Section>

      <Section className="flex justify-center">
        <Card className="w-full p-8 m-4 mt-8 max-w-screen-2xl bg-dark-900">
          <div className="mb-1 font-bold text-white">Have an idea of fix? Request it!</div>
          <div className="mb-4">Input ideas, request a feature or report a fix!</div>
          <Button className="p-4 bg-dark-1000">Contribute your Ideas</Button>
        </Card>
      </Section>

      <Section className="flex-col pt-8 pb-8 max-w-64">
        <div className="flex flex-row items-center">
          <div className="ml-4 mr-6 text-lg text-white">The latest engineering bounties from Sushi</div>
          <div className="text-sm text-white underline">Apply Today</div>
        </div>

        <div className="flex flex-row mt-4 ml-2 mr-2 space-x-5 overflow-x-auto">
          {bounties.map((bounty) => (
            <div key={`bounty-${bounty.id}`}>
              <BountyCardLite {...bounty} />
            </div>
          ))}
        </div>
      </Section>

      <Section className="flex-col mt-8 text-center">
        <div className="mb-2 text-3xl font-bold text-white">How to Contribute to Sushi</div>
        <div className="mb-4 text-white text-md">
          Not sure how to get started? Here&apos;s some information on the process
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          <SmallCard title="Create a profile" sub="List your skills & strengths" />
          <SmallCard title="Find a Bounty" sub="Search for bounties & match your skills" />
          <SmallCard title="Apply" sub="Share your profile with the Sushi Team" />
          <SmallCard title="Contribute" sub="Complete the bounty tasks" />
          <SmallCard title="Get Paid" sub="Submit work & receive tokens" />
        </div>
      </Section>

      <Section className="flex-col items-center p-8 mt-8">
        <div className="mb-2 text-3xl font-bold text-white">Get Started Today!</div>
        <div className="mb-4 text-white text-md">Create a profile & show off your skills!</div>
        <Button className="p-4">Create your profile</Button>
        <div className="flex flex-row flex-wrap mt-4">
          <UserPreview name="Moses" title="UX Designer" />
          <UserPreview name="Ivy" title="UX Designer" />
          <UserPreview name="Moses" title="UX Designer" />
          <UserPreview name="Moses" title="UX Designer" />
          <UserPreview name="Moses" title="UX Designer" />
        </div>
      </Section>

      <Section className="flex-col pt-8 pb-8 max-w-64">
        <div className="flex flex-row items-center">
          <div className="ml-4 mr-6 text-lg text-white">The latest non-code bounties from Sushi</div>
          <div className="text-sm text-white underline">Apply Today</div>
        </div>

        <div className="flex flex-row mt-4 ml-2 mr-2 space-x-5 overflow-x-auto">
          {bounties.map((bounty) => (
            <div key={`bounty-${bounty.id}`}>
              <BountyCardLite {...bounty} />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-row flex-wrap items-center w-full p-8 m-2 bg-dark-900 rounded-xl">
          <div className="w-1/2 mr-auto">
            <div className="mb-2 text-3xl font-bold text-white w-96">Don&apos;t miss a beat</div>
            <div className="text-white w-96 text-md">
              Sign up to receive emails when there&apos;s a new hiring opportunities, active bounties, and proposals.
            </div>
          </div>

          <div className="flex flex-row flex-grow mt-4 w-96">
            <input type="text" className="flex-grow pl-2 pr-2 mr-2 text-black rounded" />

            <Button className="p-2 text-sm">Sign up</Button>
          </div>
        </div>
      </Section>

      <Section className="flex-row flex-wrap justify-center mt-4">
        <Card className="flex flex-col p-4 m-2 w-max bg-dark-900 h-96">
          <div className="mt-12 mb-4 text-white">For Sushi Core Teams & Partners</div>
          <div className="mb-4 text-3xl font-bold text-white">Post a Bounty</div>
          <div className="mb-4 text-white w-96">
            Post new challenges and projects for our community members to tackle
          </div>
          <Button className="p-4">Start here</Button>
        </Card>

        <Card className="flex flex-col p-4 m-2 w-max bg-dark-900 h-96">
          <div className="mt-12 mb-2 text-white">For community members</div>
          <div className="mb-4 text-3xl font-bold text-white">Find Project Contributors</div>
          <div className="mb-4 text-white w-96">
            Looking for other team members with skillsets you need to tackle a problem?
          </div>
          <Button className="p-4">Start here</Button>
        </Card>
      </Section>
    </>
  )
}

export default RollsLanding
