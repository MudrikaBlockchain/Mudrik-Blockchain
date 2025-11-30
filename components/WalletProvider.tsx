'use client'
import React from 'react'
import { WagmiConfig } from 'wagmi'
import { wagmiConfig } from '../lib/wagmiClient'

export default function WalletProvider({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}
