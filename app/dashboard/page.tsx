'use client'
import BlocksFeed from '../../components/BlocksFeed'
import TxFeed from '../../components/TxFeed'
import UTXOVisualizer from '../../components/UTXOVisualizer'
import MinerPanel from '../../components/MinerPanel'
import FaucetForm from '../../components/FaucetForm'
import { useBlocks } from '../../hooks/useBlocks'
import { useTxs } from '../../hooks/useTxs'

export default function DashboardPage(){
  useBlocks()
  useTxs()

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Overview</h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <BlocksFeed />
          <TxFeed />
        </div>

        <UTXOVisualizer />
      </div>

      <aside className="space-y-6">
        <div className="glass p-4">
          <h3 className="font-semibold mb-2">Faucet</h3>
          <FaucetForm />
        </div>

        <div className="glass p-4">
          <h3 className="font-semibold mb-2">Miner</h3>
          <MinerPanel />
        </div>

        <div className="glass p-4">
          <h3 className="font-semibold mb-2">Network Stats</h3>
          <div className="text-sm text-muted">Blocks: — • TPS: — • Validators: —</div>
        </div>
      </aside>
    </div>
  )
}
