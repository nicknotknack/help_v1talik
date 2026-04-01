import { useState, useEffect } from 'react'
import Challenge from './Challenge'
import SubmitForm from './SubmitForm'
import { challenges } from '../data/challenges'

export default function Challenges({ address }) {
  const [completed, setCompleted] = useState(new Set())

  function handleComplete(id) {
    setCompleted(prev => new Set([...prev, id]))
  }

  const allDone = completed.size === challenges.length
  const progress = (completed.size / challenges.length) * 100

  return (
    <section className="px-4 py-16 w-full flex flex-col items-center">
      <div className="w-full max-w-2xl">
      {/* Section header */}
      <div className="text-center mb-10">
        <p className="text-xs font-mono tracking-widest mb-2" style={{ color: '#b44fff', opacity: 0.7 }}>
          — KNOWLEDGE CHALLENGES —
        </p>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, monospace', color: '#fff' }}>
          Prove Your ETH IQ
        </h2>
        <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Complete all 5 challenges to submit your wallet
        </p>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex justify-between text-xs font-mono mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <span>PROGRESS</span>
            <span>{completed.size} / {challenges.length}</span>
          </div>
          <div className="w-full h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div className="progress-fill rounded-full" style={{ width: `${progress}%` }}/>
          </div>
        </div>
      </div>

      {/* Challenge cards */}
      <div className="flex flex-col gap-6">
        {challenges.map((c, i) => (
          <Challenge
            key={c.id}
            challenge={c}
            index={i}
            onComplete={handleComplete}
            isCompleted={completed.has(c.id)}
            isLocked={i > 0 && !completed.has(challenges[i - 1].id)}
          />
        ))}
      </div>

      {/* Submit form */}
      {allDone && (
        <div className="mt-10">
          <SubmitForm address={address} />
        </div>
      )}
      </div>
    </section>
  )
}
