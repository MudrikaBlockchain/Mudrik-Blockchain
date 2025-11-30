'use client'
import { useState } from 'react'

export default function DAOProposalCard({ title, desc }: { title: string; desc: string }){
  const [forVotes, setForVotes] = useState(0)
  const [against, setAgainst] = useState(0)
  return (
    <div className="glass p-3 rounded">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-muted mb-3">{desc}</div>
      <div className="flex gap-2">
        <button onClick={() => setForVotes(v => v+1)} className="px-3 py-1 bg-green-500 rounded">For ({forVotes})</button>
        <button onClick={() => setAgainst(v => v+1)} className="px-3 py-1 bg-red-500 rounded">Against ({against})</button>
      </div>
    </div>
  )
}
