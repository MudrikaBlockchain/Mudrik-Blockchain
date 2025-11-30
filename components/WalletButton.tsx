'use client'
import React from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function WalletButton(){
  const { address, isConnected } = useAccount()
  const connect = useConnect()
  const disconnect = useDisconnect()

  if(isConnected){
    return (
      <div className="flex items-center gap-3">
        <div className="text-sm">{address?.slice(0,6)}...{address?.slice(-4)}</div>
        <button onClick={() => disconnect.disconnect()} className="px-3 py-1 bg-red-600 rounded text-sm">Disconnect</button>
      </div>
    )
  }

  return <button onClick={() => connect.connect({ connector: new InjectedConnector() })} className="px-4 py-2 bg-mudrika-500 text-black rounded">Connect Wallet</button>
}
