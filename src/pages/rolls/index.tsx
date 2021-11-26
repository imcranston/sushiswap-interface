import React, { ReactElement } from 'react'
import Card from '../../components/Card'
import Image from 'next/image'
import Input from '../../components/Input'

const Section: React.FC<{ className?: string }> = ({ className, children }) => {
  return <div className={`flex w-full ${className}`}>{children}</div>
}

const Button: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children }) => {
  return (
    <button
      className={`w-max flex flex-row items-center border border-transparent rounded-lg max-h-12 bg-dark-900 text-white border-gradient-r-blue-pink-v2-dark-900 ${className}`}
    >
      {children}
    </button>
  )
}

const StatsCard: React.FC<{ title: string; value: string } & React.HTMLAttributes<HTMLDivElement>> = ({
  title,
  value,
}) => {
  return (
    <Card className="flex flex-col justify-center p-4 m-2 text-center sm:p-0 bg-dark-900">
      <div className="mb-1 font-bold text-white">{value}</div>
      <div className="">{title}</div>
    </Card>
  )
}

const BlockCard: React.FC<{ title: string; sub: string }> = ({ title, sub }) => {
  return (
    <Card className="flex flex-col-reverse w-full h-56 p-4 sm:p-0 md:w-80 flex-grow-1 bg-dark-900 ">
      <div>
        <div className="text-2xl font-bold">{title}</div>
        <div>{sub}</div>
      </div>
    </Card>
  )
}

interface Bounty {
  skill: 'Beginner' | 'Intermediate' | 'Advanced'
  title: string
  creation: string
  numOfApplicants: number
  tag: 'Frontend' | 'Solidity'
  reward: number
  isFavorite: boolean
}

const BountyCard: React.FC<Bounty> = ({ skill, title, creation, numOfApplicants, tag, reward, isFavorite }) => {
  return (
    <div className="flex flex-col justify-center p-4 rounded min-w-max w-max bg-dark-900 h-36">
      <div className="flex flex-row items-center">
        <div className="mr-2">
          <svg height={100} width={100}>
            <circle cx="50" cy="50" r="35" fill="black" />
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="text-lg text-white">{skill}</div>
          <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue to-pink">
            {title}
          </h1>
          <div>{`${creation} | ${numOfApplicants} Applicants`}</div>
        </div>
        <div className="p-1 pl-4 pr-4 -mt-16 text-sm text-white border border-transparent rounded-2xl bg-dark-500 border-gradient-r-blue-pink-v2-dark-900">
          Design
        </div>
      </div>
      <div className="flex flex-row items-center flex-start">
        <div className="text-lg text-pink">{`${reward} DAI / ${reward} USD`}</div>
      </div>
    </div>
  )
}

const SmallCard: React.FC<{ title: string; sub: string }> = ({ title, sub }) => (
  <div className="w-48 h-32 p-4 m-2 text-center border border-transparent rounded-lg bg-dark-900">
    <div className="mt-3 mb-1 text-lg font-bold text-white">{title}</div>
    <div className="text-white text-md">{sub}</div>
  </div>
)

const SmallCardTwo: React.FC<{ title: string; sub: string }> = ({ title, sub }) => (
  <div className="w-56 h-24 pt-2 pb-2 m-2 text-center border border-transparent rounded-lg bg-dark-900">
    <div className="mt-3 mb-1 text-lg font-bold text-white">{title}</div>
    <div className="text-white text-md">{sub}</div>
  </div>
)

const UserPreview: React.FC<{ name: string; title: string; twitterHandle?: string }> = ({
  name,
  title,
  twitterHandle,
}) => (
  <div className="flex flex-col items-center m-4">
    <svg height={150} width={150}>
      <circle cx="50%" cy="50%" r="75" fill="black" />
    </svg>
    <div className="mt-2 text-lg font-bold">{name}</div>
    <div className="mt-1 text-md">{title}</div>
    <a href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noreferrer noopener" className="mt-2">
      <Image src="/images/miso/trident/trident_twitter.svg" width={16} height={16} alt="twitter_logo" />
    </a>
  </div>
)

const Rolls = () => {
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
          <BountyCard
            reward={500}
            tag="Frontend"
            skill="Intermediate"
            title="Mobile MISO UI"
            creation="19 hours ago"
            numOfApplicants={12}
            isFavorite={false}
          />
          <BountyCard
            reward={500}
            tag="Frontend"
            skill="Intermediate"
            title="Mobile MISO UI"
            creation="19 hours ago"
            numOfApplicants={12}
            isFavorite={false}
          />
          <BountyCard
            reward={500}
            tag="Frontend"
            skill="Intermediate"
            title="Mobile MISO UI"
            creation="19 hours ago"
            numOfApplicants={12}
            isFavorite={false}
          />
          <BountyCard
            reward={500}
            tag="Frontend"
            skill="Intermediate"
            title="Mobile MISO UI"
            creation="19 hours ago"
            numOfApplicants={12}
            isFavorite={false}
          />
          <BountyCard
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
          <BountyCard
            reward={500}
            tag="Frontend"
            skill="Intermediate"
            title="Mobile MISO UI"
            creation="19 hours ago"
            numOfApplicants={12}
            isFavorite={false}
          />
          <BountyCard
            reward={500}
            tag="Frontend"
            skill="Intermediate"
            title="Mobile MISO UI"
            creation="19 hours ago"
            numOfApplicants={12}
            isFavorite={false}
          />
          <BountyCard
            reward={500}
            tag="Frontend"
            skill="Intermediate"
            title="Mobile MISO UI"
            creation="19 hours ago"
            numOfApplicants={12}
            isFavorite={false}
          />
          <BountyCard
            reward={500}
            tag="Frontend"
            skill="Intermediate"
            title="Mobile MISO UI"
            creation="19 hours ago"
            numOfApplicants={12}
            isFavorite={false}
          />
          <BountyCard
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

export default Rolls
