'use client'
import { useStore } from '../store/useStore'

export default function BlocksFeed(){
  const blocks = useStore((s) => s.blocks)
  return (
    <div className="glass p-4">
      <h3 className="font-semibold mb-3">Live Blocks</h3>
      <div className="space-y-3 max-h-80 overflow-auto">
        {blocks.length === 0 && <div className="text-sm text-muted">No blocks yet</div>}
        {blocks.map((b: any, i: number) => (
          <div key={i} className="p-3 rounded border border-white/4">
            <div className="text-xs text-muted">#{b.blockNumber} • {b.timestamp ? new Date(b.timestamp*1000).toLocaleTimeString() : '—'}</div>
            <div className="font-medium">Miner: {b.miner}</div>
            <div className="text-sm text-muted">Reward: {b.reward}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
