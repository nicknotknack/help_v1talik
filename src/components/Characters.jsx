export default function Characters() {
  return (
    <div className="flex flex-col items-center">
      <div className="vitalik-glow character-scene">
        <VitalikAnime />
        <p className="text-center text-xs mt-2 font-mono" style={{ color: '#b44fff', letterSpacing: '0.15em' }}>V1TALIK</p>
      </div>
    </div>
  )
}

function VitalikAnime() {
  return (
    <svg width="160" height="260" viewBox="0 0 160 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body / hoodie */}
      <rect x="28" y="148" width="104" height="100" rx="10" fill="#1a0a2e" stroke="#b44fff" strokeWidth="1.5"/>
      {/* Hoodie pocket */}
      <rect x="55" y="185" width="50" height="30" rx="6" fill="#120820" stroke="#8833cc" strokeWidth="1"/>
      {/* ETH Diamond on chest */}
      <g transform="translate(80, 170)">
        <polygon points="0,-14 12,0 0,7 -12,0" fill="#b44fff" opacity="0.9"/>
        <polygon points="0,7 12,0 0,22 -12,0" fill="#7722bb" opacity="0.9"/>
        <line x1="-12" y1="0" x2="12" y2="0" stroke="#d088ff" strokeWidth="0.8"/>
      </g>
      {/* Arms */}
      <rect x="6" y="148" width="26" height="70" rx="10" fill="#1a0a2e" stroke="#b44fff" strokeWidth="1.5"/>
      <rect x="128" y="148" width="26" height="70" rx="10" fill="#1a0a2e" stroke="#b44fff" strokeWidth="1.5"/>
      {/* Hands */}
      <ellipse cx="19" cy="222" rx="13" ry="10" fill="#f5d0a0"/>
      <ellipse cx="141" cy="222" rx="13" ry="10" fill="#f5d0a0"/>
      {/* Neck */}
      <rect x="66" y="130" width="28" height="24" rx="6" fill="#f5d0a0"/>
      {/* Head */}
      <ellipse cx="80" cy="108" rx="44" ry="46" fill="#f5d0a0"/>
      {/* Hair - dark, slightly messy anime style */}
      <path d="M36 100 Q38 58 80 54 Q122 58 124 100 Q118 72 108 66 Q96 52 80 50 Q64 52 52 66 Q42 72 36 100Z" fill="#2a1a0a"/>
      <path d="M36 100 Q32 84 36 72 Q44 58 52 66 Q44 74 40 86Z" fill="#2a1a0a"/>
      <path d="M124 100 Q128 84 124 72 Q116 58 108 66 Q116 74 120 86Z" fill="#2a1a0a"/>
      {/* Anime eyes - big */}
      <ellipse cx="60" cy="112" rx="12" ry="14" fill="white"/>
      <ellipse cx="100" cy="112" rx="12" ry="14" fill="white"/>
      <ellipse cx="60" cy="114" rx="8" ry="10" fill="#1a1a6e"/>
      <ellipse cx="100" cy="114" rx="8" ry="10" fill="#1a1a6e"/>
      <ellipse cx="61" cy="113" rx="4" ry="5" fill="#3333cc"/>
      <ellipse cx="101" cy="113" rx="4" ry="5" fill="#3333cc"/>
      <circle cx="64" cy="110" r="2.5" fill="white"/>
      <circle cx="104" cy="110" r="2.5" fill="white"/>
      {/* Eyebrows */}
      <path d="M48 96 Q60 92 72 96" stroke="#2a1a0a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M88 96 Q100 92 112 96" stroke="#2a1a0a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Nose */}
      <path d="M78 122 Q80 126 82 122" stroke="#c4a080" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* Smile */}
      <path d="M68 136 Q80 144 92 136" stroke="#c08060" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      {/* Ear */}
      <ellipse cx="36" cy="112" rx="5" ry="8" fill="#f5d0a0"/>
      <ellipse cx="124" cy="112" rx="5" ry="8" fill="#f5d0a0"/>
      {/* Glasses */}
      <rect x="46" y="104" width="26" height="18" rx="5" fill="none" stroke="#b44fff" strokeWidth="1.8" opacity="0.7"/>
      <rect x="88" y="104" width="26" height="18" rx="5" fill="none" stroke="#b44fff" strokeWidth="1.8" opacity="0.7"/>
      <line x1="72" y1="113" x2="88" y2="113" stroke="#b44fff" strokeWidth="1.5" opacity="0.7"/>
    </svg>
  )
}
