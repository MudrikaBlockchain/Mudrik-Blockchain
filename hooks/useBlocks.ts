import { useEffect } from 'react'
import { io } from 'socket.io-client'
import { useStore } from '../store/useStore'

export function useBlocks(wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:4000') {
  const setBlocks = useStore((s) => s.setBlocks)

  useEffect(() => {
    const socket = io(wsUrl, { transports: ['websocket'] })
    socket.on('connect', () => console.log('ws connected'))
    socket.on('BlockMined', (data: any) => {
      setBlocks((prev: any) => [data, ...prev].slice(0, 200))
    })
    return () => socket.disconnect()
  }, [wsUrl, setBlocks])
}
