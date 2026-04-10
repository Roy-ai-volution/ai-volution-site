import { useRef, useEffect } from 'react'

export interface RibbonBundle {
  r: number; g: number; b: number
  lines: number; spread: number; baseY: number
  speed: number; amp: number; freq: number
  twist?: number; opacity: number; lineWidth: number
}

interface RibbonCanvasProps {
  bundles: RibbonBundle[]
}

export default function RibbonCanvas({ bundles }: RibbonCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w: number, h: number, time = 0
    let isVisible = true
    let lastFrame = 0
    const FPS_INTERVAL = 1000 / 45
    let animId: number

    const visObs = new IntersectionObserver(entries => {
      isVisible = entries[0].isIntersecting
    }, { threshold: 0 })
    visObs.observe(canvas)

    const visHandler = () => { isVisible = !document.hidden }
    document.addEventListener('visibilitychange', visHandler)

    function resize() {
      const wrapper = canvas!.parentElement
      if (!wrapper) return
      w = canvas!.width = wrapper.offsetWidth
      h = canvas!.height = wrapper.offsetHeight
    }

    function drawBundle(b: RibbonBundle, t: number) {
      const baseY = h * b.baseY
      for (let i = 0; i < b.lines; i++) {
        const lineOffset = (i - b.lines / 2) * (b.spread / b.lines)
        const twistPhase = i * 0.3
        const distFromCenter = Math.abs(i - b.lines / 2) / (b.lines / 2)
        const lineOpacity = b.opacity * (1 - distFromCenter * 0.6)
        ctx!.beginPath()
        ctx!.strokeStyle = 'rgba(' + b.r + ',' + b.g + ',' + b.b + ',' + lineOpacity + ')'
        ctx!.lineWidth = b.lineWidth
        for (let x = -50; x <= w + 50; x += 3) {
          const wave1 = Math.sin(x * b.freq + t * b.speed) * b.amp
          const wave2 = Math.sin(x * b.freq * 1.7 + t * b.speed * 0.6 + twistPhase) * (b.amp * 0.35)
          const wave3 = Math.cos(x * b.freq * 0.6 + t * b.speed * 1.2) * (b.amp * 0.2)
          const twist = Math.sin(x * (b.twist || 0.005) + t * b.speed * 0.4) * lineOffset * 2.5
          const y = baseY + wave1 + wave2 + wave3 + lineOffset + twist
          if (x === -50) ctx!.moveTo(x, y); else ctx!.lineTo(x, y)
        }
        ctx!.stroke()
      }
    }

    function animate(now: number) {
      animId = requestAnimationFrame(animate)
      if (!isVisible) return
      if (now - lastFrame < FPS_INTERVAL) return
      lastFrame = now
      ctx!.clearRect(0, 0, w, h)
      time += 0.014
      bundles.forEach(function(b) { drawBundle(b, time) })
    }

    window.addEventListener('resize', resize)
    resize()
    animId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', visHandler)
      visObs.disconnect()
    }
  }, [bundles])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  )
}
