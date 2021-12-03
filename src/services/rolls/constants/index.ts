const ALL_STATUS = ['Open', 'In Progress', 'Closed', 'Cancelled', 'Hold'] as const
type StatusTuple = typeof ALL_STATUS
type Status = StatusTuple[number]

const ALL_SKILL = ['Art', 'Design', 'Engineering', 'Marketing', 'Business'] as const
type SkillTuple = typeof ALL_SKILL
type Skill = SkillTuple[number]

const ALL_SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced'] as const
type SkillLevelsTuple = typeof ALL_SKILL_LEVELS
type SkillLevel = SkillLevelsTuple[number]

const ALL_ENTRY_REQUIREMENTS = ['Anyone', 'Restricted'] as const
type EntryRequirementsTuple = typeof ALL_ENTRY_REQUIREMENTS
type EntryRequirement = EntryRequirementsTuple[number]

const ALL_BOUNTY_RANGES = [
  [0, 500],
  [500, 3000],
  [3000, 100000],
] as const
type BountyRangesTuple = typeof ALL_BOUNTY_RANGES
type BountyRange = BountyRangesTuple[number]

const ALL_PROJECTS = ['Interface', 'MISO', 'Trident', 'Bento'] as const
type ProjectsTuple = typeof ALL_PROJECTS
type Project = ProjectsTuple[number]

const REWARD_DENOMINATIONS = ['SUSHI', 'DAI', 'USDC'] as const
type RewardDenominationsTuple = typeof REWARD_DENOMINATIONS
type RewardDenomination = RewardDenominationsTuple[number]

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
