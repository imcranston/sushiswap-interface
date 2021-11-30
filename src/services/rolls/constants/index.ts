// Derived from gql schema in /services/rolls/constants/typeDefs

export type Status = 'Ready to Work' | 'In Progress' | 'Closed' | 'Cancelled'

export type Skill = 'Art' | 'Design' | 'Engineering'

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export type EntryRequirement = 'Anyone' | 'Restricted'

export type BountyRange = [0, 500] | [500, 3000] | [3000, 10000]

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
  title: string
  description?: string
  project: Project
  skill: Skill
  skillLevel: SkillLevel
  reward: number
  rewardDenomination: RewardDenomination
  numOfApplicants: number
  createdAt: number
  tags: string[]
  requirements: {
    entry: EntryRequirement
    application: string
  }
  pointOfContacts: string
  links: string
  timeline: string
}

export interface ProfileFilterParams {}

interface Contact {
  email?: string
  discord?: string
  twitter?: string
  medium?: string
  emailVerified?: boolean
}

interface ENS {
  domain?: string
  image?: string
}

interface Wallet {
  provider?: string
  providerAccountId?: number
}

interface POAP {}

export interface Profile {
  id: number
  address: string
  name: string
  contact?: Contact
  ens?: ENS
  wallet: Wallet
  bio?: string
  skillTags: string[]
  previousBounties: Bounty[]
  poaps: POAP[]
}
