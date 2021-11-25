import React, { ReactElement } from 'react'
import Card from '../../components/Card'

const Section: React.FC<{ className?: string }> = ({ className, children }) => {
  return <div className={`flex w-full ${className}`}>{children}</div>
}

const Button: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children }) => {
  return (
    <button
      className={`w-max flex flex-row items-center p-6 border border-transparent rounded-lg max-h-12 bg-dark-900 text-white border-gradient-r-blue-pink-v2-dark-900 ${className}`}
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

const Rolls = () => {
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
    </>
  )
}

export default Rolls
