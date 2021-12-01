export type Status = 'Open' | 'In Progress' | 'Closed' | 'Cancelled' | 'Hold'

export type Skill = 'Art' | 'Design' | 'Engineering' | 'Marketing' | 'Business'

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export type EntryRequirement = 'Anyone' | 'Restricted'

export type BountyRange = [0, 500] | [500, 3000] | [3000, 100000]

type Project = 'Interface' | 'MISO' | 'Trident' | 'Bento'

type RewardDenomination = 'USDC' | 'DAI' | 'SUSHI'

export interface BountyFilterParams {
  status?: Status[]
  skills?: Skill[]
  skillLevels?: SkillLevel[]
  entryRequirements?: EntryRequirement[]
  bountyRange?: BountyRange
}

export interface Bounty {
  id: number
  project: Project
  skill: Skill
  skillLevel: SkillLevel
  reward: number
  rewardDenomination: RewardDenomination
  createdAt: number
  tags: string[]
  entryRequirements: EntryRequirement

  title?: string
  summary?: string
  tasks?: string
  links?: string
  timeline?: string
  pointOfContacts?: string
  applicationRequirements?: string

  numOfApplicants: number
  application: Application[]
}

interface Application {
  id: number
  userId: number
  reason: string
  status: string

  // Work
  workUrl: string
  workDescription: string
  hoursWorked: number
}

export interface ProfileFilterParams {
  skillTags: [String]
  completedBounties: number
}

export interface Profile {
  id: number
  address: string
  name: string

  title?: string
  bio?: string
  skillTags?: string[]

  email?: string
  discord?: string
  twitter?: string
  medium?: string
  github?: string
  emailVerified?: boolean

  previousBounties: Bounty[]
  previousApplications: Application[]
}

export const mockBounties = [
  {
    id: 1,
    title: 'Miso Redesign',
    summary: 'designer needed for redesign starting soon',
    tags: ['design', 'miso'],
    project: 'MISO',
    createdAt: new Date().getTime(),
    skill: 'Design',
    skillLevel: 'Intermediate',
    reward: 3000,
    numOfApplicants: 2,
    rewardDenomination: 'USDC',
    entryRequirements: 'Anyone',
  },
  {
    id: 2,
    title: 'Miso Redesign',
    summary: 'designer needed for redesign starting soon',
    tags: ['design', 'miso'],
    project: 'MISO',
    createdAt: new Date().getTime(),
    skill: 'Design',
    skillLevel: 'Intermediate',
    reward: 3000,
    numOfApplicants: 2,
    rewardDenomination: 'USDC',
    entryRequirements: 'Anyone',
  },
  {
    id: 3,
    title: 'Miso Redesign',
    summary: 'designer needed for redesign starting soon',
    tags: ['design', 'miso'],
    project: 'MISO',
    createdAt: new Date().getTime(),
    skill: 'Design',
    skillLevel: 'Intermediate',
    reward: 3000,
    numOfApplicants: 2,
    rewardDenomination: 'USDC',
    entryRequirements: 'Anyone',
  },
  {
    id: 4,
    title: 'Miso Redesign',
    summary: 'designer needed for redesign starting soon',
    tags: ['design', 'miso'],
    project: 'MISO',
    createdAt: new Date().getTime(),
    skill: 'Design',
    skillLevel: 'Intermediate',
    reward: 3000,
    numOfApplicants: 2,
    rewardDenomination: 'USDC',
    entryRequirements: 'Anyone',
  },
  {
    id: 5,
    title: 'Miso Redesign',
    summary: 'designer needed for redesign starting soon',
    tags: ['design', 'miso'],
    project: 'MISO',
    createdAt: new Date().getTime(),
    skill: 'Design',
    skillLevel: 'Intermediate',
    reward: 3000,
    numOfApplicants: 2,
    rewardDenomination: 'USDC',
    entryRequirements: 'Anyone',
  },
  {
    id: 6,
    title: 'Miso Redesign',
    summary: 'designer needed for redesign starting soon',
    tags: ['design', 'miso'],
    project: 'MISO',
    createdAt: new Date().getTime(),
    skill: 'Design',
    skillLevel: 'Intermediate',
    reward: 3000,
    numOfApplicants: 2,
    rewardDenomination: 'USDC',
    entryRequirements: 'Anyone',
  },
] as Bounty[]

export const mockProfiles = [
  {
    id: 1,
    address: '0x0',
    name: 'xashd',
    title: 'Software Engineer',
    twitter: '0xashd',
    bio: 'I code',
    skillTags: ['Engineering', 'React', 'Typescript'],
    previousBounties: [],
    previousApplications: [],
  },
  {
    id: 2,
    address: '0x0',
    name: 'imcranston',
    title: 'Software Engineer',
    github: 'imcranston',
    bio: 'I code',
    skillTags: ['Engineering', 'React', 'Typescript'],
    previousBounties: [],
    previousApplications: [],
  },
] as Profile[]
