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

  type POAP {
    id: String!
    image: String
  }

  type Profile {
    id: String
    address: string
    name: String
    bio: String
    contact: Contact
    ens: ENS
    skillTags: [String]
    previousBounties: [Bounty]
    poaps: [POAP]
  }

  type Bounty {
    id: Int!
    title: String!
    summary: String!
    tasks: String
    requirements: {
      entry: String
      applications: String
    }
    project: String
    skill: String
    skillLevel: SkillLevel
    reward: Int
    rewardDenomination: String
    numOfApplicants: Int
    createdAt: Int
    tags: [String]
    timeline: String
    links: String
    pointOfContacts: String
  }

  type Query {
    bounty: Bounty
    bounties: [Bounty]

    user: Profile
    users: [Profile]
  }
`

export default typeDefs
