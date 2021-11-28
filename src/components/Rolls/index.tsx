import { ChainId, Currency, NATIVE, SUSHI_ADDRESS } from '@sushiswap/sdk'
import { Feature, featureEnabled } from '../../functions/feature'
import React, { useEffect, useMemo, useState } from 'react'

import { ANALYTICS_URL } from '../../constants'
import Buy from '../../features/on-ramp/ramp'
import ExternalLink from '../ExternalLink'
import Image from 'next/image'
import LanguageSwitch from '../LanguageSwitch'
import Link from 'next/link'
// import More from './More'
import NavLink from '../NavLink'
import { Popover } from '@headlessui/react'
import QuestionHelper from '../QuestionHelper'
import Web3Network from '../Web3Network'
import Web3Status from '../Web3Status'
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
import Input from '../../components/Input'

// import { ExternalLink, NavLink } from "./Link";
// import { ReactComponent as Burger } from "../assets/images/burger.svg";
// text-low-emphesis
function ContentHeader({ bounties = [] }): JSX.Element {
  const { options, data } = useMemo(() => {
    return {
      options: {
        keys: [
          'key',
          'title',
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
    <div>
      <Typography variant="h2" className={'text-primary'}>
        {i18n._(t`Bounties`)}
      </Typography>
      <Typography variant="sm" className={'text-low-emphesis'}>
        {i18n._(t`Apply for jobs and projects to help improve Sushi `)}
      </Typography>

      <SearchBounties
        term={term}
        search={search}
        inputProps={{ className: 'placeholder-primary bg-opacity-50 w-full py-3 pl-4 pr-14 rounded bg-dark-900' }}
        className="border shadow-2xl border-dark-800"
      />
      {bounties?.map((bounty, index) => (
        <BountyCardLite
          key={index}
          reward={bounty.reward}
          tags={bounty.tags}
          skill={bounty.skill}
          skillLevel={bounty.skillLevel}
          title={bounty.title}
          project={bounty.project}
          createdAt={bounty.createdAt}
          numOfApplicants={bounty.numOfApplicants}
          isFavorite={bounty.isFavorite}
        />
      ))}
    </div>
  )
}

function BreadCrumbBar(): JSX.Element {
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

function SearchBounties({
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
}) {
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

function SideBar(): JSX.Element {
  return <div></div>
}

function BountyCard({
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
}): JSX.Element {
  return (
    <div>
      <Typography variant="h3" className={'text-primary'}>
        {title}
      </Typography>
      <Typography variant="h3" className={'text-low-emphesis'}>
        {skill}
      </Typography>
      <Typography variant="h3" className={'text-low-emphesis'}>
        {skillLevel}
      </Typography>
      <Typography variant="xs" className={'text-low-emphesis'}>
        {reward}
      </Typography>
      <Typography variant="xs" className={'text-low-emphesis'}>
        {estimatedTime}
      </Typography>
      <Typography variant="xs" className={'text-low-emphesis'}>
        {startDate}
      </Typography>
      <Typography variant="xs" className={'text-low-emphesis'}>
        {project}
      </Typography>
      <Typography variant="xs" className={'text-low-emphesis'}>
        {createdAt}
      </Typography>
      <Typography variant="xs" className={'text-low-emphesis'}>
        {numOfApplicants}
      </Typography>
      <Typography variant="sm" className={'text-primary'}>
        {description}
      </Typography>
      {tags.map((tag, index) => (
        <Typography key={index} variant="xs" className={'text-low-emphesis'}>
          {tag}
        </Typography>
      ))}
    </div>
  )
}

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

const BountyList: React.FC<{ bounties: Bounty[] }> = ({ children, bounties }) => {
  return (
    <div>
      {bounties?.map((bounty, index) => {
        const {
          title,
          description,
          tags,
          skill,
          reward,
          estimatedTime,
          startDate,
          difficulty,
          createdAt,
          applicants,
          isFavorite,
        } = bounty
        return (
          <BountyCard
            key={index}
            title={title}
            description={description}
            tags={tags}
            skill={skill}
            reward={reward}
            estimatedTime={estimatedTime}
            startDate={startDate}
            difficulty={difficulty}
            createdAt={createdAt}
            applicants={applicants}
            isFavorite={isFavorite}
          />
        )
      })}
    </div>
  )
}

interface Bounty {
  skill: 'Frontend' | 'Solidity'
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced'
  title: string
  project: string
  numOfApplicants: number
  tags: 'Design' | 'Development'
  reward: number
  isFavorite: boolean
  createdAt: any
}

const BountyCardLite: React.FC<Bounty> = ({
  skill,
  skillLevel,
  title,
  project,
  numOfApplicants,
  createdAt,
  tags,
  reward,
  isFavorite,
}) => {
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
          <div>{`${project} | ${numOfApplicants} Applicants`}</div>
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

export {
  SideBar,
  ContentHeader,
  BreadCrumbBar,
  BountyCard,
  BountyCardLite,
  BountyList,
  BlockCard,
  UserPreview,
  SmallCard,
  SmallCardTwo,
  Button,
  Section,
}
