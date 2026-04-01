import { useState } from 'react'
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '../config'

export default function SubmitForm({ address }) {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    const text = [
      '🎉 New V1talik Helper!',
      `💼 Wallet: \`${address}\``,
      message ? `💬 Message: ${message}` : null,
      `⏰ ${new Date().toUTCString()}`,
    ].filter(Boolean).join('\n')

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: 'Markdown',
          }),
        }
      )
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="submit-section text-center py-12">
        <div className="text-6xl mb-4">🚀</div>
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Orbitron, monospace', color: '#44ffaa' }}>
          Mission Complete!
        </h3>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Your wallet has been submitted. Vitalik appreciates your help!
        </p>
        <div className="mt-4 px-4 py-3 rounded-lg inline-block font-mono text-xs"
          style={{ background: 'rgba(68,255,170,0.08)', border: '1px solid rgba(68,255,170,0.25)', color: '#44ffaa' }}>
          {address}
        </div>
      </div>
    )
  }

  return (
    <div className="submit-section">
      {/* Divider */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(68,255,170,0.3))' }}/>
        <span className="text-xs font-mono tracking-widest" style={{ color: '#44ffaa' }}>ALL CHALLENGES COMPLETE</span>
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(68,255,170,0.3), transparent)' }}/>
      </div>

      <div className="rounded-2xl p-8"
        style={{ background: 'rgba(68,255,170,0.03)', border: '1px solid rgba(68,255,170,0.2)' }}>
        <div className="text-center mb-6">
          <p className="text-4xl mb-3">🎉</p>
          <h3 className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, monospace', color: '#fff' }}>
            You're Ready to Help V1talik
          </h3>
          <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Submit your wallet address to join the mission
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Wallet address (read-only) */}
          <div>
            <label className="block text-xs font-mono tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
              WALLET ADDRESS
            </label>
            <div className="px-4 py-3 rounded-lg font-mono text-sm break-all"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#e0e0e0' }}>
              {address}
            </div>
          </div>

          {/* Optional message */}
          <div>
            <label className="block text-xs font-mono tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
              MESSAGE (OPTIONAL)
            </label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={2}
              placeholder="Why do you want to help Vitalik?"
              className="w-full px-4 py-3 rounded-lg text-sm resize-none"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#e0e0e0',
                outline: 'none',
                fontFamily: 'Inter, sans-serif',
              }}
            />
          </div>

          {status === 'error' && (
            <p className="text-sm text-center" style={{ color: '#ff4466' }}>
              Something went wrong. Check your Telegram bot config in config.js.
            </p>
          )}

          <div className="text-center mt-2">
            <button
              type="submit"
              className="submit-btn"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Submitting...' : 'Submit & Join Mission'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
