import { ApolloServer } from 'apollo-server-micro'
import { PageConfig } from 'next'
import { BountyFilterParams, mockBounties, mockProfiles, ProfileFilterParams } from 'src/services/rolls'
import typeDefs from '../../services/rolls/constants/gqlTypeDefs'

// cashd: mocking resolvers until prisma client is integrated
const resolvers = {
  Query: {
    bounties: (parent, args: BountyFilterParams, context) => {
      return mockBounties
    },
    bounty: (parent, args: { id: string }, context) => {
      return mockBounties[0]
    },
    profiles: (parent, args: ProfileFilterParams, context) => {
      return mockProfiles
    },
    profile: (parent, args: { id: string }, context) => {
      return mockProfiles[0]
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

// Apollo Server Micro takes care of body parsing
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}
