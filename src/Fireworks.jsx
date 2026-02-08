import { useEffect, useRef } from 'react'

const COLORS = ['#ffffff', '#e31e47', '#c91a3d', '#2563eb', '#3b82f6', '#fbbf24', '#facc15', '#fcd34d', '#22c55e', '#16a34a', '#4ade80']

function Particle(x, y, vx, vy, color) {
  this.x = x
  this.y = y
  this.vx = vx
  this.vy = vy
  this.color = color
  this.alpha = 1
  this.decay = 0.015 + Math.random() * 0.02
}

Particle.prototype.update = function (gravity) {
  this.vx *= 0.98
  this.vy *= 0.98
  this.vy += gravity
  this.x += this.vx
  this.y += this.vy
  this.alpha -= this.decay
  return this.alpha > 0
}

Particle.prototype.draw = function (ctx) {
  ctx.save()
  ctx.globalAlpha = this.alpha
  ctx.fillStyle = this.color
  ctx.beginPath()
  ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

function createBurst(x, y, particles) {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)]
  const count = 60 + Math.floor(Math.random() * 40)
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5
    const speed = 3 + Math.random() * 6
    const vx = Math.cos(angle) * speed
    const vy = Math.sin(angle) * speed
    particles.push(new Particle(x, y, vx, vy, color))
  }
}

export function Fireworks() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []
    let nextBurst = 0
    let rafId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const loop = (t) => {
      if (!canvas.width || !canvas.height) {
        rafId = requestAnimationFrame(loop)
        return
      }
      ctx.fillStyle = 'rgba(0,0,0,0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (t > nextBurst) {
        const x = canvas.width * 0.2 + Math.random() * canvas.width * 0.6
        const y = canvas.height * 0.2 + Math.random() * canvas.height * 0.5
        createBurst(x, y, particles)
        nextBurst = t + 400 + Math.random() * 600
      }

      particles = particles.filter((p) => p.update(0.08))
      particles.forEach((p) => p.draw(ctx))

      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fireworks-canvas" aria-hidden="true" />
}

export default Fireworks
