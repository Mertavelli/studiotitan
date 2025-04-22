'use client'
import { useEffect, useState } from "react"

const breakpoints = [
  { name: "xs", min: 0 },
  { name: "sm", min: 640 },
  { name: "md", min: 768 },
  { name: "lg", min: 1024 },
  { name: "xl", min: 1280 },
  { name: "2xl", min: 1536 },
  { name: "3xl", min: 1920 },
  { name: "4xl", min: 2560 },
]

function getActiveBreakpoint(width) {
  return breakpoints
    .filter((bp) => width >= bp.min)
    .slice(-1)[0]?.name || "unknown"
}

export default function BreakpointOverlay() {
  const [breakpoint, setBreakpoint] = useState("")

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth
      setBreakpoint(getActiveBreakpoint(width))
    }
    window.addEventListener("resize", update)
    update()
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <div className="fixed bottom-2 left-2 z-[9999] text-2xl px-2 py-1 bg-black/80 text-white rounded-lg font-mono pointer-events-none select-none">
      Breakpoint: <span className="text-green-400">{breakpoint}</span>
    </div>
  )
}
