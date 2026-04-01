import { useAccount } from 'wagmi'
import Hero from './components/Hero'
import Challenges from './components/Challenges'

export default function App() {
  const { address, isConnected } = useAccount()

  return (
    <div style={{ minHeight: '100vh', background: '#050010' }}>
      <Hero />
      {isConnected && <Challenges address={address} />}
    </div>
  )
}
