// Large hero plant — lush tropical with big leaves
export function HeroPlant({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 420 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#4CAF50" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="leaf1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#81C784"/>
          <stop offset="100%" stopColor="#2E7D32"/>
        </linearGradient>
        <linearGradient id="leaf2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#66BB6A"/>
          <stop offset="100%" stopColor="#1B5E20"/>
        </linearGradient>
        <linearGradient id="leaf3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A5D6A7"/>
          <stop offset="100%" stopColor="#388E3C"/>
        </linearGradient>
        <linearGradient id="pot1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5D4037"/>
          <stop offset="100%" stopColor="#3E2723"/>
        </linearGradient>
        <linearGradient id="soil1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4E342E"/>
          <stop offset="100%" stopColor="#3E2723"/>
        </linearGradient>
      </defs>

      {/* Glow behind plant */}
      <ellipse cx="210" cy="300" rx="160" ry="180" fill="url(#glow1)"/>

      {/* Stem */}
      <path d="M210 420 Q208 380 212 340 Q215 310 210 280" stroke="#4CAF50" strokeWidth="6" strokeLinecap="round"/>

      {/* Big back left leaf */}
      <path d="M210 320 Q130 240 80 180 Q110 200 140 230 Q170 260 190 290" fill="url(#leaf2)" opacity="0.85"/>
      <path d="M190 290 Q160 260 140 230 Q130 215 80 180 Q85 190 105 225 Q135 270 190 290" fill="#1B5E20" opacity="0.4"/>
      {/* Leaf vein */}
      <path d="M210 320 Q150 260 80 180" stroke="#A5D6A7" strokeWidth="1.5" opacity="0.5" fill="none"/>

      {/* Big back right leaf */}
      <path d="M210 310 Q290 220 350 155 Q320 175 295 205 Q265 240 220 285" fill="url(#leaf1)" opacity="0.85"/>
      <path d="M220 285 Q260 245 295 205 Q315 180 350 155 Q345 168 325 195 Q290 240 220 285" fill="#2E7D32" opacity="0.4"/>
      <path d="M210 310 Q270 235 350 155" stroke="#A5D6A7" strokeWidth="1.5" opacity="0.5" fill="none"/>

      {/* Front left large leaf */}
      <path d="M205 350 Q110 290 60 210 Q90 250 130 290 Q165 320 200 345" fill="url(#leaf3)"/>
      <path d="M200 345 Q160 315 130 290 Q100 260 60 210 Q70 228 100 265 Q140 310 200 345" fill="#388E3C" opacity="0.45"/>
      <path d="M205 350 Q130 285 60 210" stroke="#C8E6C9" strokeWidth="1.5" opacity="0.6" fill="none"/>

      {/* Front right large leaf */}
      <path d="M215 340 Q310 275 365 195 Q335 235 305 265 Q270 298 220 338" fill="url(#leaf1)"/>
      <path d="M220 338 Q268 295 305 265 Q332 240 365 195 Q360 210 338 245 Q305 285 220 338" fill="#2E7D32" opacity="0.45"/>
      <path d="M215 340 Q305 270 365 195" stroke="#C8E6C9" strokeWidth="1.5" opacity="0.6" fill="none"/>

      {/* Center tall leaves */}
      <path d="M210 370 Q180 300 170 220 Q185 260 200 310 Q205 340 210 370" fill="url(#leaf3)"/>
      <path d="M210 370 Q240 300 250 215 Q235 255 222 308 Q215 340 210 370" fill="url(#leaf1)"/>

      {/* Small accent leaves */}
      <path d="M210 390 Q160 360 120 330 Q155 350 185 375" fill="#66BB6A" opacity="0.7"/>
      <path d="M210 390 Q260 360 300 335 Q265 352 235 375" fill="#4CAF50" opacity="0.7"/>

      {/* Pot body */}
      <path d="M165 435 L175 480 Q210 492 245 480 L255 435 Z" fill="url(#pot1)"/>
      {/* Pot rim */}
      <rect x="158" y="428" width="104" height="14" rx="5" fill="#6D4C41"/>
      {/* Soil */}
      <ellipse cx="210" cy="436" rx="46" ry="9" fill="url(#soil1)"/>
      {/* Pot stripe */}
      <path d="M170 460 Q210 470 250 460" stroke="#8D6E63" strokeWidth="2" fill="none" opacity="0.5"/>
      {/* Pot base */}
      <ellipse cx="210" cy="480" rx="36" ry="6" fill="#4E342E"/>
    </svg>
  )
}

// Small card plant 1 — monstera-like
export function PlantCard1({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pc1l1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#81C784"/><stop offset="100%" stopColor="#2E7D32"/>
        </linearGradient>
        <linearGradient id="pc1pot" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8D6E63"/><stop offset="100%" stopColor="#4E342E"/>
        </linearGradient>
      </defs>
      <path d="M90 160 Q88 140 90 110" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round"/>
      <path d="M90 140 Q50 100 30 60 Q55 90 75 120 Q82 133 88 145" fill="url(#pc1l1)"/>
      <path d="M88 145 Q76 128 55 100 Q42 82 30 60 Q40 78 65 110 Q80 130 88 145" fill="#1B5E20" opacity="0.4"/>
      <path d="M90 135 Q130 95 155 55 Q130 80 112 110 Q100 128 92 142" fill="url(#pc1l1)"/>
      <path d="M92 142 Q105 125 122 108 Q138 86 155 55 Q148 73 128 100 Q110 123 92 142" fill="#1B5E20" opacity="0.4"/>
      <path d="M90 150 Q60 130 40 105 Q62 120 82 140" fill="#66BB6A" opacity="0.8"/>
      <path d="M90 150 Q120 130 142 107 Q118 122 98 140" fill="#66BB6A" opacity="0.8"/>
      <path d="M72 175 L78 200 Q90 207 102 200 L108 175 Z" fill="url(#pc1pot)"/>
      <rect x="68" y="170" width="44" height="10" rx="4" fill="#A1887F"/>
      <ellipse cx="90" cy="176" rx="20" ry="5" fill="#5D4037"/>
    </svg>
  )
}

// Small card plant 2 — cactus
export function PlantCard2({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pc2c" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#66BB6A"/><stop offset="100%" stopColor="#1B5E20"/>
        </linearGradient>
        <linearGradient id="pc2pot" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF8A65"/><stop offset="100%" stopColor="#BF360C"/>
        </linearGradient>
      </defs>
      {/* Main cactus body */}
      <rect x="76" y="100" width="28" height="70" rx="14" fill="url(#pc2c)"/>
      {/* Left arm */}
      <path d="M82 130 Q50 125 45 108 Q45 95 55 92 Q65 90 70 98 L75 115" fill="url(#pc2c)"/>
      {/* Right arm */}
      <path d="M98 125 Q130 120 138 103 Q138 90 126 88 Q115 86 110 95 L105 112" fill="url(#pc2c)"/>
      {/* Spine lines */}
      <line x1="90" y1="105" x2="90" y2="165" stroke="#A5D6A7" strokeWidth="1" opacity="0.5"/>
      <line x1="83" y1="112" x2="97" y2="112" stroke="#A5D6A7" strokeWidth="0.8" opacity="0.4"/>
      <line x1="83" y1="125" x2="97" y2="125" stroke="#A5D6A7" strokeWidth="0.8" opacity="0.4"/>
      <line x1="83" y1="138" x2="97" y2="138" stroke="#A5D6A7" strokeWidth="0.8" opacity="0.4"/>
      <line x1="83" y1="151" x2="97" y2="151" stroke="#A5D6A7" strokeWidth="0.8" opacity="0.4"/>
      {/* Flower on top */}
      <circle cx="90" cy="97" r="5" fill="#FF8A65"/>
      <circle cx="90" cy="97" r="3" fill="#FFCC02"/>
      {/* Pot */}
      <path d="M72 178 L76 200 Q90 208 104 200 L108 178 Z" fill="url(#pc2pot)"/>
      <rect x="68" y="172" width="44" height="10" rx="4" fill="#FF8A65"/>
      <ellipse cx="90" cy="178" rx="20" ry="5" fill="#BF360C" opacity="0.7"/>
    </svg>
  )
}

// Small card plant 3 — big leaf tropical
export function PlantCard3({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pc3l" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A5D6A7"/><stop offset="100%" stopColor="#2E7D32"/>
        </linearGradient>
        <linearGradient id="pc3pot" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#90A4AE"/><stop offset="100%" stopColor="#455A64"/>
        </linearGradient>
      </defs>
      <path d="M90 170 Q88 145 90 100" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round"/>
      {/* Big drooping left leaf */}
      <path d="M90 130 Q40 120 15 80 Q35 100 60 118 Q75 130 88 138" fill="url(#pc3l)"/>
      <path d="M90 130 Q15 80 15 80 Q28 95 55 112 Q72 124 88 138" fill="#1B5E20" opacity="0.35"/>
      <path d="M90 130 Q55 108 15 80" stroke="#E8F5E9" strokeWidth="1.2" opacity="0.5" fill="none"/>
      {/* Big drooping right leaf */}
      <path d="M90 120 Q140 108 168 68 Q148 88 122 110 Q106 122 92 132" fill="url(#pc3l)"/>
      <path d="M92 132 Q118 116 148 90 Q165 74 168 68 Q158 82 132 104 Q112 120 92 132" fill="#1B5E20" opacity="0.35"/>
      <path d="M90 120 Q130 100 168 68" stroke="#E8F5E9" strokeWidth="1.2" opacity="0.5" fill="none"/>
      {/* Center upright leaf */}
      <path d="M90 160 Q72 130 68 95 Q80 118 88 148" fill="#4CAF50" opacity="0.8"/>
      <path d="M90 160 Q108 130 112 92 Q100 115 92 148" fill="#388E3C" opacity="0.8"/>
      {/* Pot */}
      <path d="M72 183 L77 204 Q90 212 103 204 L108 183 Z" fill="url(#pc3pot)"/>
      <rect x="68" y="177" width="44" height="10" rx="4" fill="#B0BEC5"/>
      <ellipse cx="90" cy="183" rx="20" ry="5" fill="#546E7A"/>
    </svg>
  )
}

// Small card plant 4 — aloe vera
export function PlantCard4({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pc4l" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#AED581"/><stop offset="100%" stopColor="#33691E"/>
        </linearGradient>
        <linearGradient id="pc4pot" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#CE93D8"/><stop offset="100%" stopColor="#6A1B9A"/>
        </linearGradient>
      </defs>
      {/* Aloe fronds */}
      <path d="M90 175 Q70 140 62 95 Q74 130 84 168" fill="url(#pc4l)"/>
      <path d="M84 168 Q72 135 62 95 Q68 118 80 155 Q82 162 84 168" fill="#33691E" opacity="0.4"/>
      <path d="M90 175 Q110 138 118 93 Q106 130 96 168" fill="url(#pc4l)"/>
      <path d="M96 168 Q108 132 118 93 Q112 116 100 155 Q98 162 96 168" fill="#33691E" opacity="0.4"/>
      <path d="M90 175 Q78 148 78 110 Q83 138 89 168" fill="#8BC34A" opacity="0.7"/>
      <path d="M90 175 Q102 148 104 107 Q97 138 91 168" fill="#8BC34A" opacity="0.7"/>
      <path d="M90 175 Q60 155 48 125 Q64 148 84 168" fill="url(#pc4l)" opacity="0.7"/>
      <path d="M90 175 Q120 155 134 122 Q116 148 96 168" fill="url(#pc4l)" opacity="0.7"/>
      {/* Spines */}
      {[62,68,74,80,86].map((y,i) => (
        <line key={i} x1={84-i} y1={y} x2={80-i} y2={y-4} stroke="#C8E6C9" strokeWidth="0.8" opacity="0.6"/>
      ))}
      {[62,68,74,80,86].map((y,i) => (
        <line key={i} x1={96+i} y1={y} x2={100+i} y2={y-4} stroke="#C8E6C9" strokeWidth="0.8" opacity="0.6"/>
      ))}
      {/* Pot */}
      <path d="M70 185 L75 206 Q90 214 105 206 L110 185 Z" fill="url(#pc4pot)"/>
      <rect x="66" y="179" width="48" height="10" rx="4" fill="#CE93D8"/>
      <ellipse cx="90" cy="185" rx="22" ry="5" fill="#6A1B9A" opacity="0.7"/>
    </svg>
  )
}

// Large "Our Best O2" feature plant
export function FeaturePlant({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 340 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fp1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A5D6A7"/><stop offset="100%" stopColor="#1B5E20"/>
        </linearGradient>
        <linearGradient id="fp2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#81C784"/><stop offset="100%" stopColor="#2E7D32"/>
        </linearGradient>
        <radialGradient id="fpGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#4CAF50" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="fpPot" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6D4C41"/><stop offset="100%" stopColor="#3E2723"/>
        </linearGradient>
      </defs>
      <ellipse cx="170" cy="220" rx="130" ry="150" fill="url(#fpGlow)"/>
      {/* Stem */}
      <path d="M170 330 Q168 300 172 260 Q174 235 170 205" stroke="#4CAF50" strokeWidth="5" strokeLinecap="round"/>
      {/* Back leaves */}
      <path d="M170 250 Q90 180 50 110 Q80 145 115 185 Q145 218 165 245" fill="url(#fp1)" opacity="0.8"/>
      <path d="M170 240 Q250 170 295 98 Q265 133 232 172 Q205 205 175 238" fill="url(#fp2)" opacity="0.8"/>
      {/* Middle leaves */}
      <path d="M170 275 Q95 230 62 180 Q96 215 148 258" fill="#66BB6A" opacity="0.9"/>
      <path d="M170 268 Q245 222 280 172 Q244 210 192 255" fill="#66BB6A" opacity="0.9"/>
      {/* Front leaves */}
      <path d="M170 295 Q110 265 78 230 Q112 255 162 285" fill="#4CAF50"/>
      <path d="M170 288 Q230 258 265 222 Q228 248 178 282" fill="#4CAF50"/>
      {/* Veins */}
      <path d="M170 250 Q118 192 50 110" stroke="#C8E6C9" strokeWidth="1.2" opacity="0.5" fill="none"/>
      <path d="M170 240 Q228 175 295 98" stroke="#C8E6C9" strokeWidth="1.2" opacity="0.5" fill="none"/>
      {/* Pot */}
      <path d="M138 345 L145 378 Q170 390 195 378 L202 345 Z" fill="url(#fpPot)"/>
      <rect x="132" y="338" width="76" height="12" rx="5" fill="#8D6E63"/>
      <ellipse cx="170" cy="345" rx="34" ry="7" fill="#5D4037"/>
    </svg>
  )
}
