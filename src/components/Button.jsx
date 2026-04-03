import { colors } from '../theme'

export default function Button({ children, onClick, variant = 'primary', disabled = false }) {
  const base = {
    width: '100%', padding: '14px 16px', borderRadius: 12,
    fontWeight: 700, fontSize: 16, border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1, transition: 'opacity 0.15s',
  }
  const variants = {
    primary:   { background: colors.purple, color: '#fff' },
    secondary: { background: colors.card, color: colors.textMuted, border: `1px solid ${colors.cardBorder}` },
    ghost:     { background: 'transparent', color: colors.purpleLight, border: `1px solid ${colors.purple}` },
  }
  return (
    <button onClick={disabled ? undefined : onClick} style={{ ...base, ...variants[variant] }}>
      {children}
    </button>
  )
}
