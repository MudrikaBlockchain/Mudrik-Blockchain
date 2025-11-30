import { createPublicClient, http } from 'viem'
import { custom } from 'viem/chains'

export const mudrikaChain = custom({
  id: 12051998,
  name: 'Mudrika Testnet',
  network: 'mudrika-testnet',
  nativeCurrency: { name: 'Mudrikā', symbol: 'MDK', decimals: 18 },
  rpcUrls: { default: { http: ['https://rpc.mudrika.test'] } },
  blockExplorers: { default: { name: 'Mudrika Explorer', url: 'https://explorer.mudrika.test' } }
})

const RPC = process.env.NEXT_PUBLIC_RPC_URL || 'https://rpc.mudrika.test'

export const publicClient = createPublicClient({
  chain: mudrikaChain,
  transport: http(RPC),
})
