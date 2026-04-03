import { colors } from '../theme'

export default function PhoneFrame({ children }) {
  const isMobile = window.innerWidth <= 480

  if (isMobile) {
    return (
      <div style={{
        width: '100%', minHeight: '100vh',
        background: colors.bg, overflowY: 'auto',
      }}>
        {children}
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh', background: '#111',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        width: 390, height: '85vh', maxHeight: 844,
        background: colors.bg, borderRadius: 40,
        overflow: 'hidden', overflowY: 'auto',
        boxShadow: '0 0 0 10px #222, 0 30px 80px rgba(0,0,0,0.8)',
        position: 'relative',
      }}>
        {children}
      </div>
    </div>
  )
}
