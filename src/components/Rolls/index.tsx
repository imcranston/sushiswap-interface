import React, { FC, useCallback, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import More from './More'
import { Popover } from '@headlessui/react'
import QuestionHelper from '../QuestionHelper'
import { t } from '@lingui/macro'
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'
import { useETHBalances } from '../../state/wallet/hooks'
import { useLingui } from '@lingui/react'
import Typography from '../Typography'
import { i18n } from '@lingui/core'
import { classNames } from '../../functions'
import { Search as SearchIcon } from 'react-feather'
import { useFuse } from '../../hooks'
import Card from '../../components/Card'
import Checkbox from '../Checkbox'
import NeonSelect, { NeonSelectItem } from '../Select'
import { check } from 'prettier'

interface Bounty {
  title?: string
  description?: string
  project?: string
  tags: 'Design' | 'User Interface' | 'Mobile'
  skill: string
  skillLevel?: 'Beginner' | 'Intermediate' | 'Advanced'
  reward: number
  estimatedTime: any
  startDate: any
  numOfApplicants: number
  isFavorite: boolean
  createdAt: any
}

const Section: React.FC<{ className?: string }> = ({ className, children }) => {
  return <div className={`flex w-full ${className}`}>{children}</div>
}

const RollsCheckbox: React.FC<{ title; color; check; setCheck; help }> = ({
  title,
  color,
  check,
  setCheck,
  help,
}: any) => {
  // const allowedSlippage = useSwapSlippageTolerance(trade)
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center justify-between">
        <Checkbox color={color} checked={check} set={setCheck} />
        <span className="ml-2 mr-1 text-primary">{title}</span>
        <QuestionHelper text={help} />
      </div>
      {/* {swap && <Settings placeholderSlippage={allowedSlippage} />} */}
    </div>
  )
}

const Dropdown: FC = () => {
  const { i18n } = useLingui()

  const handler = useCallback((e, item) => {}, [])

  return (
    <>
      <div className="flex items-center gap-3 cursor-pointer text-secondary">
        <div className="flex flex-row items-center">
          <span className="text-sm">{i18n._(t`Sort By`)}:</span>
          {/* <QuestionHelper text={i18n._(t`Bounties will be sorted`)} /> */}
        </div>
        <NeonSelect value={'Most Recent'}>
          {Object.entries([]).map(([k, v]) => (
            <NeonSelectItem key={k} value={k} onClick={handler}>
              {v}
            </NeonSelectItem>
          ))}
        </NeonSelect>
      </div>
    </>
  )
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

const BountyCardLite: React.FC<Bounty> = ({ skill, project, createdAt, numOfApplicants, tags, reward, isFavorite }) => {
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
            {project}
          </h1>
          <div>{`${createdAt} | ${numOfApplicants} Applicants`}</div>
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
}): JSX.Element => (
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

const ContentHeader: React.FC<{ bounties: any }> = ({ bounties = [] }): JSX.Element => {
  const { options, data } = useMemo(() => {
    return {
      options: {
        keys: [
          'key',
          'project',
          'description',
          'tags',
          'team',
          'budget',
          'estimatedTime',
          'startDate',
          'difficulty',
          'createdAt',
          'applicants',
        ],
        threshold: 0.4,
      },
      data: bounties,
    }
  }, [bounties])

  const {
    result: searched,
    term,
    search,
  } = useFuse({
    options,
    data,
  })
  console.log({ searched })

  return (
    <div className="flex flex-row mt-4 ml-2 mr-2 space-x-5 overflow-x-auto">
      <div className="flex flex-col justify-around w-full">
        <div>
          <Typography variant="h2" className={'text-primary'}>
            {i18n._(t`Bounties`)}
          </Typography>
          <Typography variant="sm" className={'text-low-emphesis'}>
            {i18n._(t`Apply for jobs and projects to help improve Sushi `)}
          </Typography>
        </div>

        <SearchBounties
          term={term}
          search={search}
          inputProps={{ className: 'placeholder-primary bg-opacity-50 w-full py-3 pl-4 pr-14 rounded bg-dark-900' }}
          className="border shadow-2xl border-dark-800"
        />
      </div>
      <div className="flex flex-row mt-4 ml-2 mr-2 space-x-5 overflow-x-auto">
        {bounties?.map((bounty, index) => (
          <BountyCardLite
            description={bounty.description}
            key={index}
            reward={bounty.reward}
            tags={bounty.tags}
            skill={bounty.skill}
            skillLevel={bounty.skillLevel}
            project={bounty.project}
            startDate={bounty.startDate}
            estimatedTime={bounty.estimatedTime}
            createdAt={bounty.createdAt}
            numOfApplicants={bounty.numOfApplicants}
            isFavorite={bounty.isFavorite}
          />
        ))}
      </div>
    </div>
  )
}

const BreadCrumbBar: React.FC = (): JSX.Element => {
  const { i18n } = useLingui()
  const { account, chainId, library } = useActiveWeb3React()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

  return (
    //     // <header className="flex flex-row justify-between w-screen flex-nowrap">
    <div className="flex-shrink-0 w-full">
      <Popover.Panel className="sm:hidden">
        <div className="flex flex-col px-4 pt-2 pb-3 space-y-1">
          <Link href={'/'}>
            <a
              id={`swap-nav-link`}
              className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
            >
              {i18n._(t`Swap`)}
            </a>
          </Link>

          <Link href={'/pool'}>
            <a
              id={`pool-nav-link`}
              className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
            >
              {i18n._(t`Pool`)}
            </a>
          </Link>
        </div>
      </Popover.Panel>
    </div>
  )
}

const SearchBounties: React.FC<{ term; search; className: any; inputProps: any }> = ({
  term,
  search,
  className = 'bg-dark-900',
  inputProps = {
    className:
      'text-baseline bg-transparent w-full py-3 pl-4 pr-14 rounded w-full bg-transparent focus:outline-none bg-dark-700 rounded focus:ring focus:ring-blue',
  },
  ...rest
}: {
  term: string
  search: (value: string) => void
  inputProps?: any
  className?: string
}) => {
  return (
    <div className={classNames('relative w-full rounded', className)} {...rest}>
      <input
        className={classNames(
          inputProps.className || 'text-baseline py-3 pl-4 pr-14 rounded w-full bg-transparent focus:outline-none'
        )}
        onChange={(e) => search(e.target.value)}
        value={term}
        placeholder="Search by Bounty, Team, or Role"
        {...inputProps}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
        <SearchIcon size={16} />
      </div>
    </div>
  )
}

const SideBar: React.FC = (): JSX.Element => {
  return (
    <div className="sticky top-0 hidden lg:block md:col-span-2 3xl:col-start-1 3xl:col-span-2">
      <div className="flex flex-row items-center justify-between">
        <Typography variant="h3" className={'text-primary'}>
          {'X'} Filters
        </Typography>
        <Button className="pl-2 pr-2">Reset</Button>
      </div>
      <Typography variant="h3" className={'text-primary'}>
        Status
      </Typography>
      <RollsCheckbox
        color="blue"
        check={false}
        setCheck={() => {
          return true
        }}
        title="Ready to Work"
        help={i18n._(t`Bounties that are ready to work on right away`)}
      />
      <RollsCheckbox
        color="blue"
        check={false}
        setCheck={() => {
          return true
        }}
        title="In Progress"
        help={i18n._(t`Bounties already in progress`)}
      />
      <RollsCheckbox
        color="blue"
        check={false}
        setCheck={() => {
          return true
        }}
        title="Closed"
        help={i18n._(t`Bounties already finished`)}
      />
      <RollsCheckbox
        color="blue"
        check={false}
        setCheck={() => {
          return true
        }}
        title="Cancelled"
        help={i18n._(t`Bounties that were cancelled`)}
      />
      <Typography variant="h3" className={'text-primary'}>
        Skills
      </Typography>
      <RollsCheckbox
        color="blue"
        check={false}
        setCheck={() => {
          return true
        }}
        title="Development"
        help={i18n._(t`Bounties needing developers`)}
      />
      <RollsCheckbox
        color="blue"
        check={false}
        setCheck={() => {
          return true
        }}
        title="Project Management"
        help={i18n._(t`Bounties needing Project Management help`)}
      />
      <RollsCheckbox
        color="blue"
        check={false}
        setCheck={() => {
          return true
        }}
        title="UI/UX Design"
        help={i18n._(t`Bounties needing User Interface or User Experience Designers`)}
      />
      <RollsCheckbox
        color="blue"
        check={false}
        setCheck={() => {
          return true
        }}
        title="User Research"
        help={i18n._(t`Bounties needing User Experience Researchers`)}
      />
      <Typography variant="h3" className={'text-primary'}>
        Skill Level
      </Typography>
      <Typography variant="h3" className={'text-primary'}>
        Entry Requirement
      </Typography>
      <Typography variant="h3" className={'text-primary'}>
        Bounty Amount
      </Typography>
    </div>
  )
}

const BountyCard: React.FC<{
  title
  description
  tags
  project
  createdAt
  startDate
  estimatedTime
  skill
  skillLevel
  reward
  numOfApplicants
  isFavorite
}> = ({
  title,
  description,
  tags,
  project,
  createdAt,
  startDate,
  estimatedTime,
  skill,
  skillLevel,
  reward,
  numOfApplicants,
  isFavorite,
}): JSX.Element => {
  return (
    <div className="flex flex-col justify-center w-full h-64 pl-8 pr-8 mt-4 mb-4 rounded min-w-max bg-dark-900 gap-y-6">
      <div className="flex flex-row items-center w-full">
        <div className="mr-2">
          <svg height={100} width={100}>
            <circle cx="50" cy="50" r="35" fill="black" />
          </svg>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center gap-x-4">
            <h1 className="text-xl font-extrabold text-white">
              {/* <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue to-pink"> */}
              {title}
            </h1>
            <h4 className="text-lg text-white">{project}</h4>
          </div>
          <div className="flex flex-row items-center gap-x-4">
            <div className="text-lg text-pink">{`${reward} DAI / ${reward} USD`}</div>
            <div className="text-lg text-white">{estimatedTime}</div>
          </div>

          <div className="flex flex-row items-center w-full gap-x-4">
            <div className="text-lg text-pink">{startDate}</div>
            <div className="text-lg text-white">{skillLevel}</div>
            <div>{`${createdAt} | ${numOfApplicants} Applicants`}</div>
          </div>
        </div>
        <div className="p-1 pl-4 pr-4 -mt-16 text-sm text-white border border-transparent rounded-2xl bg-dark-500 border-gradient-r-blue-pink-v2-dark-900">
          {skill}
        </div>
      </div>
      <div className="flex flex-row items-center flex-start">
        <div className="text-white text-md">{description}</div>
      </div>
      <div className="flex flex-row items-center flex-start gap-x-5">
        {tags?.map((tag, index) => (
          <button
            key={index}
            className="p-1 pl-4 pr-4 text-sm text-white border border-transparent rounded-2xl bg-dark-500 border-gradient-r-blue-pink-v2-dark-900"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
const BountyList: React.FC<{ bounties: any; totalBounties: number }> = ({ children, bounties, totalBounties }) => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between w-full">
        <Typography variant="h3" className={'text-primary'}>
          {totalBounties} Bounties
        </Typography>
        <Dropdown />
      </div>
      <div className="w-full">
        {bounties?.map((bounty, index) => {
          const {
            title,
            description,
            project,
            tags,
            skill,
            reward,
            estimatedTime,
            startDate,
            skillLevel,
            createdAt,
            numOfApplicants,
            isFavorite,
          } = bounty
          return (
            <BountyCard
              key={index}
              title={title}
              description={description}
              project={project}
              tags={tags}
              skill={skill}
              skillLevel={skillLevel}
              reward={reward}
              estimatedTime={estimatedTime}
              startDate={startDate}
              createdAt={createdAt}
              numOfApplicants={numOfApplicants}
              isFavorite={isFavorite}
            />
          )
        })}
      </div>
    </div>
  )
}
export {
  Dropdown,
  SideBar,
  ContentHeader,
  BreadCrumbBar,
  BountyCard,
  BountyCardLite,
  BountyList,
  BlockCard,
  UserPreview,
  Button,
  Section,
  SmallCard,
  SmallCardTwo,
  RollsCheckbox,
}
