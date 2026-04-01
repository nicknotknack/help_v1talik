# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite)
npm run build     # production build → dist/
npm run preview   # preview production build
npm run lint      # ESLint
```
## Architecture

Single-page React app. No router — the page has two logical sections gated by wallet connection state:

1. **Hero** (`Hero.jsx`) — always visible. Shows the animated Vitalik character, tagline, and RainbowKit connect-wallet button.
2. **Challenges** (`Challenges.jsx`) — rendered only when `isConnected` (wagmi). Holds quiz state and renders the submit form once all 5 challenges are complete.

**Data flow:**
- `App.jsx` reads `address` + `isConnected` from wagmi's `useAccount` and passes `address` down to `Challenges` → `SubmitForm`.
- Challenge questions/answers live in `src/data/challenges.js`. Each entry has a `correct` index (0-based) into its `options` array, and a `background` key that maps to a CSS class in `index.css`.
- `SubmitForm.jsx` POSTs to the Telegram Bot API on completion using credentials from `src/config.js`, which reads `VITE_TELEGRAM_BOT_TOKEN` and `VITE_TELEGRAM_CHAT_ID` from `.env`.

**Styling:**
- Tailwind v4 (imported via `@import "tailwindcss"` in `index.css`) for utility classes.
- Custom CSS classes for all branded/animated elements are defined in `index.css` (challenge card backgrounds, connect button, progress bar, glow/float animations, etc.). Prefer extending these over adding new inline styles.

**Wallet config** (`wagmi.config.js`): Ethereum mainnet only, injected + MetaMask connectors. WalletConnect is imported but not active — add a `projectId` to enable it.

## Environment

Requires a `.env` file at project root (not committed):
```
VITE_TELEGRAM_BOT_TOKEN=...
VITE_TELEGRAM_CHAT_ID=...
```
