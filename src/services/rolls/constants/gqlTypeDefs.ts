import { gql } from 'graphql-tag'

const typeDefs = gql`
  type Profile {
    id: String!
    address: String!
    name: String!

    title: String
    bio: String
    skillTags: [String]

    email: String
    discord: String
    twitter: String
    github: String
    medium: String
    emailVerified: Boolean!

    previousBounties: [Bounty]!
    previousApplications: [Application]!
  }

  type Application {
    id: Int!
    userId: Int!
    reason: String
    status: String!

    # Work
    workUrl: String
    workDescription: String
    hoursWorked: Int
  }

  type Bounty {
    id: Int!
    project: String!
    skill: String!
    skillLevel: String!
    reward: Int!
    rewardDenomination: String!
    createdAt: String # unix timestamp
    startedAt: String # unix timestamp
    estimatedTime: Int # hours
    tags: [String]!

    title: String
    summary: String
    tasks: String
    links: String
    timeline: String
    pointOfContacts: String

    numOfApplicants: Int
    applications: [Application]
  }

  enum BountySortBy {
    CreationDate
    RewardSize
  }

  type Query {
    applications(bountyId: Int): [Application]

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
    profiles(tags: [String], completedBounties: Int): [Profile]!
  }
`

export default typeDefs
