'use client'
import WalletButton from './WalletButton'

export default function TopNav(){
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent glass border-b border-white/4">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="Mudrika" className="h-8 w-8"/>
        <div className="text-lg font-semibold">MUDRIKĀ BLOCKCHAIN</div>
      </div>
      <div className="flex items-center gap-4">
        <a href="/dashboard" className="text-sm">Dashboard</a>
        <a href="/faucet" className="text-sm">Faucet</a>
        <WalletButton />
      </div>
    </nav>
  )
}
