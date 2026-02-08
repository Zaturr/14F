import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ROSAS_ESCRITORIO = [
  'red', 'white', 'red', 'white', 'red', 'white', 'red', 'white',
  'red', 'white', 'red', 'white', 'red', 'white', 'red', 'white',
]
const ROSAS_MOVIL = ['red', 'white', 'red', 'white', 'red', 'white', 'red']
const BREAKPOINT_MOVIL = 768

export function Rosa({ variant = 'red', className = '' }) {
  const isWhite = variant === 'white'
  const id = `rosa-${variant}`

  const gradienteFlor = isWhite
    ? { start: '#fffaf0', end: '#f0f0f0' }
    : { start: '#5e0b1d', end: '#c91a3d' }
  const gradientePetalo = isWhite
    ? { oscuro: '#e8e4e0', claro: '#ffffff' }
    : { oscuro: '#6b111a', claro: '#e31e47' }
  const talloColor = '#2d5a27'
  const hojaColor = '#1e4d1a'

  return (
    <motion.div
      className={`rosa-svg ${className}`.trim()}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.06 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 80 100"
        className="rosa-svg__svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`flor-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradienteFlor.start} />
            <stop offset="100%" stopColor={gradienteFlor.end} />
          </linearGradient>
          <linearGradient id={`petalo-${id}`} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={gradientePetalo.oscuro} />
            <stop offset="100%" stopColor={gradientePetalo.claro} />
          </linearGradient>
        </defs>

        {/* Tallo */}
        <motion.path
          d="M40 98 C38 75 42 55 40 42"
          stroke={talloColor}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Hoja izquierda */}
        <path
          d="M40 65 Q32 68 28 62 Q30 58 36 60 Q40 62 40 65"
          fill={hojaColor}
          stroke={talloColor}
          strokeWidth="0.8"
        />
        {/* Hoja derecha */}
        <path
          d="M40 78 Q48 82 52 76 Q50 72 44 74 Q40 76 40 78"
          fill={hojaColor}
          stroke={talloColor}
          strokeWidth="0.8"
        />

        {/* Capa exterior de pétalos (más abiertos, forma natural) */}
        <path
          d="M40 38 C48 32 58 35 62 42 C60 48 52 50 45 46 C42 44 38 42 40 38 Z"
          fill={`url(#petalo-${id})`}
          opacity={0.95}
        />
        <path
          d="M40 38 C32 34 22 38 18 45 C20 50 28 52 35 48 C38 46 42 44 40 38 Z"
          fill={`url(#petalo-${id})`}
          opacity={0.95}
        />
        <path
          d="M40 35 C44 28 52 30 54 38 C52 44 46 46 40 42 C38 40 38 36 40 35 Z"
          fill={`url(#petalo-${id})`}
          opacity={0.9}
        />
        <path
          d="M40 35 C36 28 28 30 26 38 C28 44 34 46 40 42 C42 40 42 36 40 35 Z"
          fill={`url(#petalo-${id})`}
          opacity={0.9}
        />
        <path
          d="M40 36 C46 32 52 36 50 42 C47 46 42 45 40 42 C38 40 40 36 40 36 Z"
          fill={`url(#petalo-${id})`}
          opacity={0.85}
        />

        {/* Segunda capa de pétalos (más cerrados) */}
        <path
          d="M40 40 C44 36 48 38 48 42 C46 45 42 44 40 42 C39 41 39 40 40 40 Z"
          fill={`url(#flor-${id})`}
          opacity={0.9}
        />
        <path
          d="M40 40 C36 36 32 38 32 42 C34 45 38 44 40 42 C41 41 41 40 40 40 Z"
          fill={`url(#flor-${id})`}
          opacity={0.9}
        />
        <path
          d="M40 39 C43 37 45 39 44 42 C43 44 41 43 40 42 C39 41 40 39 40 39 Z"
          fill={`url(#flor-${id})`}
          opacity={0.9}
        />

        {/* Centro (botón cerrado) */}
        <motion.ellipse
          cx="40"
          cy="41"
          rx="6"
          ry="7"
          fill={isWhite ? '#e0ddd8' : '#4a0818'}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
        />
      </svg>
    </motion.div>
  )
}

export function RosasPie() {
  const [esMovil, setEsMovil] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < BREAKPOINT_MOVIL
  )

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINT_MOVIL}px)`)
    const handle = (e) => setEsMovil(e.matches)
    mql.addEventListener('change', handle)
    setEsMovil(mql.matches)
    return () => mql.removeEventListener('change', handle)
  }, [])

  const rosas = esMovil ? ROSAS_MOVIL : ROSAS_ESCRITORIO

  return (
    <div className="rosas-pie" aria-hidden="true">
      {rosas.map((color, i) => (
        <Rosa key={i} variant={color} />
      ))}
    </div>
  )
}

export default Rosa
