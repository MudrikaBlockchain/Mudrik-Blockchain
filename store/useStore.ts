import create from 'zustand'

type State = {
  blocks: any[]
  setBlocks: (b: any[]) => void
  txs: any[]
  setTxs: (t: any[]) => void
  utxos: any[]
  setUtxos: (u: any[]) => void
}

export const useStore = create<State>((set) => ({
  blocks: [],
  setBlocks: (b) => set(() => ({ blocks: b })),
  txs: [],
  setTxs: (t) => set(() => ({ txs: t })),
  utxos: [],
  setUtxos: (u) => set(() => ({ utxos: u }))
}))
