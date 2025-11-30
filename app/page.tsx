import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-[72vh] flex items-center justify-center">
      <div className="text-center">
        <img src="/logo.svg" alt="Mudrikā" className="mx-auto h-28 w-28 mb-6 drop-shadow-lg" />
        <h1 className="text-4xl font-bold mb-3">MUDRIKĀ BLOCKCHAIN</h1>
        <p className="text-md text-muted mb-6">Intelligent Blockchain for a Smarter Decentralized World</p>
        <div className="flex gap-3 justify-center">
          <Link href="/dashboard" className="px-6 py-3 glass neon-border font-semibold">Open Dashboard</Link>
          <Link href="/faucet" className="px-6 py-3 bg-mudrika-500 text-black rounded font-semibold">Claim Test Tokens</Link>
        </div>
      </div>
    </div>
  )
}
