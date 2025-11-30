'use client'
import { useForm } from 'react-hook-form'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { MDK98_ABI } from '../lib/contracts/mdk98'

type Form = { contract: string; to: string; amount: string }

export default function TransferForm(){
  const { register, handleSubmit } = useForm<Form>()

  const onSubmit = async (data: Form) => {
    // This form demonstrates integration; in production use parseUnits and prepareContractWrite properly
    try {
      alert('Please implement prepareContractWrite with proper parseUnits and writeAsync calls.')
    } catch(e) {
      console.error(e)
      alert('Transfer failed: '+e.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <input {...register('contract')} placeholder="Contract address" className="w-full p-2 rounded border bg-transparent"/>
      <input {...register('to')} placeholder="Recipient" className="w-full p-2 rounded border bg-transparent"/>
      <input {...register('amount')} placeholder="Amount (in wei)" className="w-full p-2 rounded border bg-transparent"/>
      <button className="px-3 py-2 rounded bg-mudrika-500 font-semibold">Send</button>
    </form>
  )
}
