import { colors } from '../theme'

export default function Card({ children, style = {}, highlight = false }) {
  return (
    <div style={{
      background: colors.card,
      borderRadius: 12, padding: '14px 16px',
      border: highlight ? `1.5px solid ${colors.purple}` : `1px solid ${colors.cardBorder}`,
      ...style,
    }}>
      {children}
    </div>
  )
}
