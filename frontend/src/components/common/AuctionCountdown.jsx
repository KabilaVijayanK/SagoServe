import React, { useEffect, useState } from 'react'

export default function AuctionCountdown({ iso }) {
  const [left, setLeft] = useState(null)

  useEffect(() => {
    function tick() {
      const diff = new Date(iso) - new Date()
      if (diff <= 0) { setLeft(null); return }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24))
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const m = Math.floor((diff / (1000 * 60)) % 60)
      const s = Math.floor((diff / 1000) % 60)
      setLeft({ d, h, m, s })
    }
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [iso])

  if (!left) return <span className="text-sm text-red-600">Ended</span>
  return <div className="text-sm text-gray-700">{left.d}d {left.h}h {left.m}m {left.s}s</div>
}
