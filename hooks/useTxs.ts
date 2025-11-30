import { useEffect } from 'react'
import { io } from 'socket.io-client'
import { useStore } from '../store/useStore'

export function useTxs(wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:4000') {
  const setTxs = useStore((s) => s.setTxs)

  useEffect(() => {
    const socket = io(wsUrl, { transports: ['websocket'] })
    socket.on('Transaction', (tx: any) => setTxs((prev: any) => [tx, ...prev].slice(0, 400)))
    return () => socket.disconnect()
  }, [setTxs, wsUrl])
}
