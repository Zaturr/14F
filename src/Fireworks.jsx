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

// Puntos de un corazón (ecuación paramétrica), escalados
function getHeartPoints(cx, cy, scale = 1) {
  const points = []
  const n = 100
  for (let i = 0; i <= n; i++) {
    const t = (i / n) * Math.PI * 2
    const x = 16 * Math.pow(Math.sin(t), 3)
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))
    points.push({ x: cx + x * scale, y: cy + y * scale })
  }
  return points
}

function createHeartBurst(cx, cy, particles) {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)]
  const scale = 8 + Math.random() * 6
  const points = getHeartPoints(cx, cy, scale)
  for (const pt of points) {
    const vx = (Math.random() - 0.5) * 2
    const vy = (Math.random() - 0.5) * 2 - 1
    particles.push(new Particle(pt.x, pt.y, vx, vy, color))
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
    let nextHeartBurst = 4000
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

      if (t > nextHeartBurst) {
        const cx = canvas.width * 0.25 + Math.random() * canvas.width * 0.5
        const cy = canvas.height * 0.25 + Math.random() * canvas.height * 0.4
        createHeartBurst(cx, cy, particles)
        nextHeartBurst = t + 4000
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
