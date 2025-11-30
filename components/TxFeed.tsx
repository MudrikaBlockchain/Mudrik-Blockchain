'use client'
import { useStore } from '../store/useStore'

export default function TxFeed(){
  const txs = useStore((s) => s.txs)
  return (
    <div className="glass p-4">
      <h3 className="font-semibold mb-3">Live Transactions</h3>
      <div className="space-y-3 max-h-80 overflow-auto">
        {txs.length === 0 && <div className="text-sm text-muted">No transactions yet</div>}
        {txs.map((t: any, i: number) => (
          <div key={i} className="p-3 rounded border border-white/4 flex justify-between items-center">
            <div>
              <div className="text-sm font-medium">{t.from?.slice?.(0,8)} → {t.to?.slice?.(0,8)}</div>
              <div className="text-xs text-muted">Amount: {t.amount} • {t.timestamp ? new Date(t.timestamp*1000).toLocaleTimeString() : '—'}</div>
            </div>
            <div className="px-2 py-1 rounded bg-black/30 border border-white/6 text-xs neon-tag">{t.type || 'transfer'}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
