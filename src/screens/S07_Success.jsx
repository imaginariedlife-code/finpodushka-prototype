import { useEffect } from 'react'
import { colors } from '../theme'

export default function S07_Success({ onNext, userData }) {
  useEffect(() => {
    const t = setTimeout(() => onNext(), 2500)
    return () => clearTimeout(t)
  }, [])

  const amount = userData.amount || 5000

  return (
    <div style={{
      background: colors.bg, minHeight: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '32px 24px',
    }}>
      {/* Big checkmark */}
      <div style={{
        width: 88, height: 88, background: 'rgba(16,185,129,0.12)', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 40, marginBottom: 24,
        border: `2px solid ${colors.green}`,
        animation: 'pulse 1s ease-out',
      }}>
        ✓
      </div>

      <div style={{
        color: colors.textPrimary, fontSize: 22, fontWeight: 800,
        textAlign: 'center', lineHeight: 1.3, marginBottom: 12,
      }}>
        Первый шаг к финансовой независимости сделан
      </div>

      {/* Balance */}
      <div style={{
        background: colors.card, borderRadius: 16, padding: '16px 24px',
        textAlign: 'center', marginBottom: 20,
        border: `1px solid ${colors.cardBorder}`,
      }}>
        <div style={{ color: colors.textMuted, fontSize: 12, marginBottom: 4 }}>баланс Финподушки</div>
        <div style={{ color: colors.green, fontSize: 28, fontWeight: 800 }}>
          {amount.toLocaleString('ru-RU')} ₽
        </div>
      </div>

      <div style={{
        color: colors.textMuted, fontSize: 14, textAlign: 'center',
        lineHeight: 1.5, marginBottom: 32, maxWidth: 280,
      }}>
        Вы уже впереди 70% людей, которые только собираются начать
      </div>

      <button
        onClick={() => onNext()}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: colors.purpleLight, fontSize: 15, fontWeight: 600,
        }}
      >
        Смотреть результат →
      </button>
    </div>
  )
}
