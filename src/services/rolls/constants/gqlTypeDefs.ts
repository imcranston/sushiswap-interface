import { gql } from 'apollo-server-core'

const typeDefs = gql`
  type Contact {
    email: String
    discord: String
    twitter: String
    emailVerified: Boolean
  }

  type ENS {
    domain: String
    image: String
  }

  type Profile {
    id: String
    address: String
    name: String
    bio: String
    contact: Contact
    ens: ENS
    skillTags: [String]
    previousBounties: [Bounty]
  }

  type Bounty {
    id: Int!
    title: String!
    summary: String!
    tasks: String
    project: String
    skill: String
    skillLevel: String
    reward: Int
    rewardDenomination: String
    numOfApplicants: Int
    createdAt: Int
    tags: [String]
    timeline: String
    links: String
    pointOfContacts: String
  }

  enum BountySortBy {
    CreationDate
    RewardSize
  }

  type Query {
    bounty(id: Int): Bounty
    bounties(
      status: [String]
      skills: [String]
      skillLevels: [String]
      entryRequirements: [String]
      bountyRange: [Int]
      sortBy: BountySortBy
    ): [Bounty]!

    profile(id: Int): Profile
    profiles: [Profile]!
  }
`

export default typeDefs
