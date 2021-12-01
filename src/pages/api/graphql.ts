import { CashIcon } from '@heroicons/react/solid'
import { ApolloServer } from 'apollo-server-micro'
import { PageConfig } from 'next'
import { Bounty, BountyFilterParams, Profile, ProfileFilterParams } from 'src/services/rolls'
import typeDefs from '../../services/rolls/constants/gqlTypeDefs'

// cashd: mocking resolvers until prisma client is integrated
const resolvers = {
  Query: {
    bounties(parent, args, context) {
      return [
        {
          id: 1,
          title: 'Miso Redesign',
          description: 'designer needed for redesign starting soon',
          tags: ['design', 'miso'],
          project: 'MISO',
          createdAt: new Date().getTime(),
          skill: 'Design',
          skillLevel: 'Intermediate',
          reward: 3000,
          numOfApplicants: 2,
          rewardDenomination: 'USDC',
          requirements: {
            entry: 'Anyone',
          },
        },
        {
          id: 2,
          title: 'Miso Redesign',
          description: 'designer needed for redesign starting soon',
          tags: ['design', 'miso'],
          project: 'MISO',
          createdAt: new Date().getTime(),
          skill: 'Design',
          skillLevel: 'Intermediate',
          reward: 3000,
          numOfApplicants: 2,
          rewardDenomination: 'USDC',
          requirements: {
            entry: 'Anyone',
          },
        },
        {
          id: 3,
          title: 'Miso Redesign',
          description: 'designer needed for redesign starting soon',
          tags: ['design', 'miso'],
          project: 'MISO',
          createdAt: new Date().getTime(),
          skill: 'Design',
          skillLevel: 'Intermediate',
          reward: 3000,
          numOfApplicants: 2,
          rewardDenomination: 'USDC',
          requirements: {
            entry: 'Anyone',
          },
        },
        {
          id: 4,
          title: 'Miso Redesign',
          description: 'designer needed for redesign starting soon',
          tags: ['design', 'miso'],
          project: 'MISO',
          createdAt: new Date().getTime(),
          skill: 'Design',
          skillLevel: 'Intermediate',
          reward: 3000,
          numOfApplicants: 2,
          rewardDenomination: 'USDC',
          requirements: {
            entry: 'Anyone',
          },
        },
        {
          id: 5,
          title: 'Miso Redesign',
          description: 'designer needed for redesign starting soon',
          tags: ['design', 'miso'],
          project: 'MISO',
          createdAt: new Date().getTime(),
          skill: 'Design',
          skillLevel: 'Intermediate',
          reward: 3000,
          numOfApplicants: 2,
          rewardDenomination: 'USDC',
          requirements: {
            entry: 'Anyone',
          },
        },
        {
          id: 6,
          title: 'Miso Redesign',
          description: 'designer needed for redesign starting soon',
          tags: ['design', 'miso'],
          project: 'MISO',
          createdAt: new Date().getTime(),
          skill: 'Design',
          skillLevel: 'Intermediate',
          reward: 3000,
          numOfApplicants: 2,
          rewardDenomination: 'USDC',
          requirements: {
            entry: 'Anyone',
          },
        },
      ] as Bounty[]
    },
    bounty(parent, args, context) {
      return {
        id: 1,
        title: 'Miso Redesign',
        description: 'designer needed for redesign starting soon',
        tags: ['design', 'miso'],
        project: 'MISO',
        createdAt: new Date().getTime(),
        skill: 'Design',
        skillLevel: 'Intermediate',
        reward: 3000,
        numOfApplicants: 2,
        rewardDenomination: 'USDC',
        requirements: {
          entry: 'Anyone',
        },
      } as Bounty
    },
    profile(parent, args, context) {
      return {
        id: 1,
        name: 'xashd',
        address: '0x0',
        contact: {
          email: 'cash@sushi.com',
          twitter: '0xashd',
          github: 'cashd',
          emailVerified: true,
        },
        previousBounties: [],
        skillTags: ['Engineering', 'React', 'Typescript'],
        title: 'Fullstack Engineer',
        bio: 'sushi boy',
      } as Profile
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

export abstract class PrismaClient {
  constructor() {}

  abstract createBounty(bounty: Bounty): void
  abstract getBounty(id: string): Bounty
  abstract getBounties(filters: BountyFilterParams): Array<Bounty>

  abstract editProfile(profile: Profile): void
  abstract getProfile(id: string): Profile
  abstract getProfiles(filters: ProfileFilterParams): Array<Profile>
}
