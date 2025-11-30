'use client'
import { configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet } from 'wagmi/chains'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

export const { publicClient, chains } = configureChains(
  [mainnet],
  [publicProvider()]
)

export const wagmiConfig = createConfig({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: { projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECTID || 'wc_project_id', showQrModal: true }
    })
  ],
  publicClient
})
