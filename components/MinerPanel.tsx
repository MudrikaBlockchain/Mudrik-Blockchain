'use client'
import { useState } from 'react'

export default function MinerPanel(){
  const [status, setStatus] = useState<string | null>(null)
  const mine = async () => {
    setStatus('mining...')
    try {
      const r = await fetch('/api/mine', { method: 'POST' })
      const j = await r.json()
      setStatus(JSON.stringify(j))
    } catch(e) { setStatus('error: '+e.message) }
  }

  return (
    <div>
      <div className="h-36 flex items-center justify-center mb-3">
        <div className="w-24 h-24 rounded-lg neon-border flex items-center justify-center"> {/* placeholder for cube animation */} <div className="text-sm">Cube</div></div>
      </div>
      <button onClick={mine} className="w-full px-3 py-2 bg-mudrika-500 rounded font-semibold">Mine Block</button>
      {status && <pre className="mt-2 text-sm bg-black/20 p-2 rounded">{status}</pre>}
    </div>
  )
}
