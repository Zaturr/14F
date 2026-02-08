import React from 'react'

export function AvilaFondo() {
  return (
    <div className="avila-fondo" aria-hidden="true">
      <svg
        className="avila-fondo__svg"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Varios tonos de verde: luz desde la derecha */}
          <linearGradient id="avila-luz" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#052e16" />
            <stop offset="30%" stopColor="#14532d" />
            <stop offset="60%" stopColor="#166534" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="avila-sombra-valle" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#03210c" />
            <stop offset="100%" stopColor="#0d2818" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="avila-sierra-lejos" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#064e3b" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0f766e" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="avila-pico-sol" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="avila-base" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#052e16" />
            <stop offset="100%" stopColor="#14532d" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Sierra lejana - verde esmeralda oscuro */}
        <path
          d="M0 600 Q0 480 100 420 Q200 370 350 350 Q500 335 650 355 Q800 380 950 420 Q1100 460 1200 440 L1200 600 Z"
          fill="url(#avila-sierra-lejos)"
        />

        {/* Valle en sombra - verde muy oscuro */}
        <path
          d="M0 600 Q120 480 280 400 Q380 360 480 380 Q520 390 540 410 L480 420 Q400 430 300 450 Q180 480 80 520 L0 600 Z"
          fill="url(#avila-sombra-valle)"
        />

        {/* Silueta principal - verdes de bosque a verde claro */}
        <path
          d="M0 600 
             Q0 480 80 410 Q160 350 260 310 Q360 275 460 260 Q520 252 580 270 
             Q640 290 700 330 Q760 365 820 350 Q880 330 940 345 Q1000 365 1060 410 
             Q1120 455 1200 420 L1200 600 Z"
          fill="url(#avila-luz)"
        />

        {/* Valle central - verde oscuro */}
        <path
          d="M520 600 L520 400 Q560 350 600 370 Q640 390 620 430 L640 480 L600 520 L520 600 Z"
          fill="#064e3b"
          fillOpacity="0.8"
        />

        {/* Ladera al sol - verde lima / esmeralda claro */}
        <path
          d="M880 600 L860 420 Q900 380 960 400 Q1020 420 1040 460 L1060 520 L1000 580 L880 600 Z"
          fill="url(#avila-pico-sol)"
        />

        {/* Base - verde bosque oscuro */}
        <path
          d="M0 600 L0 560 Q300 535 600 530 Q900 525 1200 545 L1200 600 Z"
          fill="url(#avila-base)"
        />
      </svg>
    </div>
  )
}

export default AvilaFondo
