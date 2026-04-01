import { ConnectButton } from '@rainbow-me/rainbowkit'
import Characters from './Characters'

// Random stars
const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  dur: `${2 + Math.random() * 4}s`,
  delay: `${Math.random() * 4}s`,
  size: Math.random() > 0.8 ? 3 : 2,
}))

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(40,0,100,0.5) 0%, #050010 65%)' }}
    >
      {/* Stars */}
      {stars.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            '--dur': s.dur,
            '--delay': s.delay,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        <div className="mb-2">
          <p className="text-xs font-mono tracking-widest mb-3" style={{ color: '#b44fff', opacity: 0.8 }}>
            — ETHEREUM SUPPORTER PROGRAM —
          </p>
          <h1 className="hero-title">help V1talik</h1>
          <p className="mt-4 text-base" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 420 }}>
            Prove your ETH knowledge. Complete all 5 challenges to join the mission.
          </p>
        </div>

        <Characters />

        <div className="mt-2">
          <ConnectButton.Custom>
            {({ account, chain, openConnectModal, mounted }) => {
              const ready = mounted
              if (!ready) return null
              if (!account || !chain) {
                return (
                  <button className="connect-btn" onClick={openConnectModal}>
                    Connect Wallet
                  </button>
                )
              }
              return (
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg"
                    style={{ border: '1px solid rgba(68,255,170,0.3)', background: 'rgba(68,255,170,0.05)' }}>
                    <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#44ffaa' }}/>
                    <span className="font-mono text-sm" style={{ color: '#44ffaa' }}>
                      {account.displayName}
                    </span>
                  </div>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    ↓ scroll down to start challenges
                  </p>
                </div>
              )
            }}
          </ConnectButton.Custom>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(transparent, #050010)' }}/>
    </section>
  )
}
