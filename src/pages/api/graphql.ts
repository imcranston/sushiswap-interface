import { ApolloServer, gql } from 'apollo-server-micro'
import { PageConfig } from 'next'

const typeDefs = gql`
  type Account {
    address: String
    nonce: Int
    provider: String
    providerAccountId: String
    user: User
  }

  type User {
    id: String
    name: String
    email: String
    emailVerified: Int
    account: Account
  }

  enum SkillLevel {
    Beginner
    Intermediate
    Advanced
  }

  enum AcceptedRewards {
    ETH
    SUSHI
    USDC
    DAI
  }

  type Query {
    bounties: [Bounty]!
  }

  type Bounty {
    id: Int!
    title: String!
    description: String!
    project: String
    skill: String
    skillLevel: SkillLevel
    reward: Int
    rewardDenomination: AcceptedRewards
    numOfApplicants: Int
    createdAt: Int
    tags: [String]
  }
`

const resolvers = {
  Query: {
    bounties(parent, args, context) {
      return [
        {
          title: 'Miso Redesign',
          description: 'designer needed for redesign starting soon',
          tags: ['design', 'miso'],
          project: 'Miso',
          //   createdAt: 'created 2 days ago',
          //   startDate: '12/02/2021',
          //   estimatedTime: '30 hours',
          skill: 'Design',
          skillLevel: 'Midlevel',
          reward: '3000 Sushi',
          numOfApplicants: 2,
          //   isFavorite: true,
        },
      ]
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

const startServer = apolloServer.start()

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', 'https://studio.apollographql.com')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

// // Apollo Server Micro takes care of body parsing
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}
