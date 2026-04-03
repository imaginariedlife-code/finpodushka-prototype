import { colors } from '../theme'

export default function ProgressBar({ step, total }) {
  return (
    <div style={{ padding: '8px 16px 0' }}>
      <div style={{ display: 'flex', gap: 4 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 2,
            background: i < step ? colors.purple : colors.cardBorder,
            transition: 'background 0.3s',
          }} />
        ))}
      </div>
      <div style={{ color: colors.textMuted, fontSize: 11, marginTop: 6, textAlign: 'right' }}>
        {step} / {total}
      </div>
    </div>
  )
}
