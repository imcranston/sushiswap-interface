// Derived from gql schema in /services/rolls/constants/typeDefs

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
    application?: string
  }
  pointOfContacts?: string
  links?: string
  timeline?: string
}

export interface ProfileFilterParams {
  skillTags: [String]
  completedBounties: number
}

interface Contact {
  email?: string
  discord?: string
  twitter?: string
  medium?: string
  github?: string
  emailVerified?: boolean
}
interface Wallet {
  provider?: string
  providerAccountId?: number
}
export interface Profile {
  id: number
  address: string
  name: string
  title: string
  contact?: Contact
  wallet: Wallet
  bio?: string
  skillTags: string[]
  previousBounties: Bounty[]
}
