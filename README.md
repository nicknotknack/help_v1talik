# 🧙 Help V1talik

An Ethereum knowledge quiz dApp — connect your wallet, complete 5 challenges about ETH history and ecosystem, and prove you're a true supporter.

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-8-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-4-cyan)

## 🎮 How It Works

1. Land on the hero page with animated Vitalik character
2. Connect your Ethereum wallet (MetaMask / injected)
3. Answer 5 quiz challenges (Genesis Block → The Endgame)
4. Submit your results — completion is reported via Telegram Bot

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Landing section + wallet connect
│   ├── Challenges.jsx    # Quiz flow controller
│   ├── Challenge.jsx     # Single question card
│   ├── Characters.jsx    # Animated Vitalik character
│   └── SubmitForm.jsx    # Completion form → Telegram
├── data/
│   └── challenges.js     # Quiz questions & answers
├── config.js             # Env vars (Telegram creds)
├── wagmi.config.js       # Wallet config (mainnet)
├── App.jsx               # Root component
└── index.css             # Tailwind + custom animations
```

## 🚀 Setup

```bash
# 1. Install dependencies
npm install

# 2. Create .env in project root
cp .env.example .env  # or create manually
```

Add your Telegram credentials to `.env`:

```
VITE_TELEGRAM_BOT_TOKEN=your_bot_token
VITE_TELEGRAM_CHAT_ID=your_chat_id
```

```bash
# 3. Run dev server
npm run dev
```

## 📜 Scripts

| Command             | Description              |
|----------------------|--------------------------|
| `npm run dev`       | Start dev server (Vite)  |
| `npm run build`     | Production build → `dist/` |
| `npm run preview`   | Preview production build |
| `npm run lint`      | Run ESLint               |

## ⚙️ Tech Notes

- **Wallet**: RainbowKit + wagmi, Ethereum mainnet only. WalletConnect is imported but disabled — add a `projectId` in `wagmi.config.js` to enable
- **Styling**: Tailwind v4 + custom CSS classes in `index.css` for branded animations (glow, float, card backgrounds). Extend existing classes rather than adding inline styles
- **State**: No router, no global state lib. Wallet connection state from wagmi gates the quiz section. Quiz progress is local component state
- **Telegram**: On quiz completion, `SubmitForm.jsx` POSTs results to Telegram Bot API using env credentials
- **Quiz data**: All questions live in `src/data/challenges.js` — edit there to add/change challenges
