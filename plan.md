# Help V1talik — Implementation Plan

## Stack
- **Vite + React 18** — fast dev, no config overhead
- **Wagmi v2** — wallet connection hooks
- **RainbowKit** — pre-built Connect Wallet UI (pairs with wagmi v2)
- **TanStack Query** — required wagmi v2 peer dep
- **Tailwind CSS** — utility styling
- **Telegram Bot API** — send wallet address on final submit

---

## Project Structure

```
Help_Vitalik/
├── src/
│   ├── main.jsx            # providers: WagmiProvider + QueryClientProvider + RainbowKitProvider
│   ├── App.jsx             # routing between hero / challenges / submit
│   ├── wagmi.config.js     # createConfig() with chains + connectors
│   ├── config.js           # TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID
│   ├── components/
│   │   ├── Hero.jsx        # H1 + characters + ConnectButton
│   │   ├── Characters.jsx  # Vitalik SVG anime + CAWE bot + Claude bot
│   │   ├── Challenges.jsx  # list of 5 challenge cards
│   │   ├── Challenge.jsx   # single challenge: bg image + quiz
│   │   └── SubmitForm.jsx  # wallet address + telegram submit
│   └── data/
│       └── challenges.js   # 5 quiz definitions
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## App Flow

```
Landing (Hero)
  └─ ConnectButton (RainbowKit)
       └─ wallet connected → scroll to Challenges
            └─ complete challenge 1 → 2 → 3 → 4 → 5
                 └─ all done → SubmitForm appears
                      └─ submit → POST to Telegram Bot API
```

---

## 5 Challenges

| # | Title | CSS Background | Question | Answer |
|---|-------|---------------|----------|--------|
| 1 | Genesis Block | Deep space stars (radial gradients + CSS stars) | "What year was Ethereum mainnet launched?" | 2015 |
| 2 | The Merge | Green energy waves (animated gradient) | "What consensus did Ethereum switch to in 2022?" | Proof of Stake |
| 3 | Smart Contracts | Matrix green code rain (CSS animation) | "Who wrote the Ethereum whitepaper?" | Vitalik Buterin |
| 4 | DeFi Frontier | Gold liquidity pools (shimmer gradient) | "What does TVL stand for in DeFi?" | Total Value Locked |
| 5 | Endgame | Purple sharding light (ray burst gradient) | "What is Ethereum's primary L2 scaling solution?" | Rollups |

Each challenge: 4 options, 1 correct, wrong = shake animation, correct = unlock next.

---

## Wallet Connection

```jsx
// wagmi.config.js
import { createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { injected, metaMask } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet],
  connectors: [injected(), metaMask()],
  transports: { [mainnet.id]: http() },
})
```

RainbowKit `<ConnectButton />` handles the UI button.
`useAccount()` → check `isConnected` to gate challenges.

---

## Telegram Submit

```js
// config.js
export const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN'
export const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID'
```

```js
// on submit
await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chat_id: CHAT_ID,
    text: `🎉 New V1talik helper!\nWallet: ${address}`,
  }),
})
```

---

## Visual Design

- **Theme**: dark cyberpunk — `#0a0010` bg, neon purple/pink accents
- **Characters** (CSS/SVG art):
  - CAWE bot — left, slightly behind, blue robot silhouette
  - Claude bot — right, slightly behind, orange/amber robot silhouette
  - Vitalik — center, front, anime-style SVG character, ETH logo shirt
- **H1**: large gradient text "help V1talik"
- **Challenge cards**: full-width with unique CSS animated backgrounds

---

## Install Commands

```bash
npm create vite@latest . -- --template react
npm install wagmi @rainbow-me/rainbowkit @tanstack/react-query viem
npm install -D tailwindcss @tailwindcss/vite
```

---

## Verification

1. `npm run dev` → opens in browser
2. Click Connect Wallet → MetaMask/RainbowKit modal
3. Connect → hero fades, challenges unlock
4. Answer all 5 quizzes correctly → submit form appears
5. Click Submit → check Telegram chat for wallet message
