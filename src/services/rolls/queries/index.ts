import gql from 'graphql-tag'

export const bountiesQuery = gql`
  query bountiesQuery(
    $status: [String]
    $skills: [String]
    $skillLevels: [String]
    $entryRequirements: [String]
    $bountyRange: [Int]
    $sortBy: BountySortBy
  ) {
    bounties(
      status: $status
      skills: $skills
      skillLevels: $skillLevels
      entryRequirements: $entryRequirements
      bountyRange: $bountyRange
      sortBy: $sortBy
    ) {
      title
      reward
      project
      numOfApplicants
      tags
      createdAt
      startedAt
    }
  }
`

export const bountyQuery = gql`
  query bountyQuery($id: Int!) {
    bounty(id: $id) {
      id
      title
    }
  }
`

export const ProfilesQuery = gql`
  query profilesQuery($tags: [String], $completedBounties: Int) {
    profiles(tags: $tags, completedBounties: $completedBounties) {
      id
      name
      bio
      title
      previousBounties
      skillTags
    }
  }
`

export const ProfileQuery = gql`
  query bountyQuery($id: Int!) {
    profile(id: $id) {
      id
      name
      title
    }
  }
`
