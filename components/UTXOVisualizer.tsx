'use client'
import React from 'react'
import { ResponsiveContainer, Treemap, Tooltip } from 'recharts'
import { useStore } from '../store/useStore'

export default function UTXOVisualizer(){
  const utxos = useStore((s) => s.utxos)
  const data = (utxos || []).map((u:any) => ({ name: u.address, size: Number(u.amount) || 0 }))
  return (
    <div className="glass p-4 h-96">
      <h3 className="font-semibold mb-2">UTXO Visualizer</h3>
      {data.length === 0 ? <div className="text-sm text-muted">No UTXO data</div> :
        <ResponsiveContainer width="100%" height={320}>
          <Treemap data={data} dataKey="size" ratio={4/3} stroke="#fff">
            <Tooltip />
          </Treemap>
        </ResponsiveContainer>
      }
    </div>
  )
}
