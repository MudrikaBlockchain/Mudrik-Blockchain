'use client'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function FaucetForm(){
  const { register, handleSubmit } = useForm<{address:string}>()
  const [res, setRes] = useState<any>(null)
  const onSubmit = async (data:{address:string}) => {
    try{
      const r = await fetch((process.env.NEXT_PUBLIC_FAUCET_URL || 'http://localhost:5000') + '/claim', {
        method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({address: data.address, secret: process.env.NEXT_PUBLIC_FAUCET_SECRET || 'change_me'})
      })
      setRes(await r.json())
    }catch(e){ setRes({error: e.message}) }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <input {...register('address')} placeholder="0x..." className="w-full p-2 rounded border bg-transparent"/>
      <button type="submit" className="w-full px-3 py-2 bg-mudrika-500 text-black rounded font-semibold">Claim Test Tokens</button>
      {res && <pre className="text-sm mt-2 bg-black/20 p-2 rounded">{JSON.stringify(res, null, 2)}</pre>}
    </form>
  )
}
