import gql from 'graphql-tag'

export const bountiesQuery = gql`
  query bountiesQuery(
  ) {
    bounties() {
      title
      reward
    }
  }
`

export const bountyQuery = gql`
  query bountyQuery($id: String!) {
    bounty(id: $id) {
      id
      title
    }
  }
`
