import { useState } from 'react'

const BG_CLASSES = {
  genesis: 'bg-genesis',
  merge: 'bg-merge',
  contracts: 'bg-contracts',
  defi: 'bg-defi',
  endgame: 'bg-endgame',
}

const ICONS = {
  genesis: '🌌',
  merge: '⚡',
  contracts: '📜',
  defi: '💰',
  endgame: '🔮',
}

export default function Challenge({ challenge, index, onComplete, isCompleted, isLocked }) {
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(isCompleted)

  function handleOption(i) {
    if (answered) return
    setSelected(i)
    if (i === challenge.correct) {
      setTimeout(() => {
        setAnswered(true)
        onComplete(challenge.id)
      }, 600)
    } else {
      // Allow retry after wrong answer
      setTimeout(() => setSelected(null), 900)
    }
  }

  const bgClass = BG_CLASSES[challenge.background] || ''

  return (
    <div
      className={`challenge-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Card Header with background */}
      <div
        className={`${bgClass} relative px-6 py-10 text-center`}
        style={{ minHeight: 180 }}
      >
        <div className="relative z-10">
          <span className="text-4xl mb-3 block">{ICONS[challenge.background]}</span>
          <p className="text-xs font-mono tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
            CHALLENGE {challenge.id} / 5
          </p>
          <h3 className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, monospace', color: '#fff' }}>
            {challenge.title}
          </h3>
          <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {challenge.subtitle}
          </p>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }}/>
      </div>

      {/* Quiz body */}
      <div className="p-6" style={{ background: 'rgba(10,4,20,0.95)' }}>
        {isCompleted ? (
          <div className="text-center py-4">
            <p className="text-2xl mb-2">✓</p>
            <p className="font-semibold" style={{ color: '#44ffaa' }}>Challenge Complete!</p>
            <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.4)' }}>{challenge.explanation}</p>
          </div>
        ) : (
          <>
            <p className="text-base mb-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              {challenge.question}
            </p>
            <div className="flex flex-col gap-3">
              {challenge.options.map((opt, i) => {
                let className = 'option-btn'
                if (selected !== null) {
                  if (i === challenge.correct) className += ' correct'
                  else if (i === selected && i !== challenge.correct) className += ' wrong'
                }
                return (
                  <button
                    key={i}
                    className={className}
                    onClick={() => handleOption(i)}
                    disabled={answered}
                  >
                    <span className="font-mono text-xs mr-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      {String.fromCharCode(65 + i)}.
                    </span>
                    {opt}
                  </button>
                )
              })}
            </div>
            {selected !== null && selected !== challenge.correct && (
              <p className="text-sm mt-4 text-center" style={{ color: '#ff6688' }}>
                Wrong answer — try again!
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}
