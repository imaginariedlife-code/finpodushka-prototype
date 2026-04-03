import { colors } from '../theme'

export default function MiniAppHeader({ onBack, showBack = false }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 16px', background: colors.bg,
      position: 'sticky', top: 0, zIndex: 10,
      borderBottom: `1px solid ${colors.cardBorder}`,
    }}>
      <button onClick={showBack ? onBack : undefined} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        color: colors.textMuted, fontSize: 18, width: 32, textAlign: 'left',
      }}>
        {showBack ? '‹' : '✕'}
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{
          width: 24, height: 24, background: colors.redBrand,
          borderRadius: 6, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 7, color: 'white',
          fontWeight: 800, lineHeight: 1.1, textAlign: 'center',
        }}>
          ФИН<br/>УСЛ
        </div>
        <span style={{ color: colors.textPrimary, fontSize: 14, fontWeight: 600 }}>
          Финуслуги
        </span>
        <span style={{ color: '#3b82f6', fontSize: 13 }}>✓</span>
      </div>

      <button style={{
        background: 'none', border: 'none', cursor: 'pointer',
        color: colors.textMuted, fontSize: 18, width: 32, textAlign: 'right',
      }}>
        ···
      </button>
    </div>
  )
}
