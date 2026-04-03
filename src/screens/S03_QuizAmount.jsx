import { useState } from 'react'
import MiniAppHeader from '../components/MiniAppHeader'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import { colors } from '../theme'

const AMOUNTS = [1000, 3000, 5000, 10000]

export default function S03_QuizAmount({ onNext, onBack, userData }) {
  const [selected, setSelected] = useState(userData.amount || 5000)

  return (
    <div style={{ background: colors.bg, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <MiniAppHeader showBack onBack={onBack} />
      <ProgressBar step={2} total={3} />

      <div style={{ flex: 1, padding: '24px 20px 32px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 800, marginBottom: 8, lineHeight: 1.3 }}>
          Первый шаг к свободе —<br/>любая сумма
        </div>
        <div style={{ color: colors.textMuted, fontSize: 14, marginBottom: 28 }}>
          Сколько готов вложить прямо сейчас?
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
          {AMOUNTS.map(amount => (
            <button
              key={amount}
              onClick={() => setSelected(amount)}
              style={{
                background: selected === amount ? colors.purple : colors.card,
                border: selected === amount ? `1.5px solid ${colors.purple}` : `1px solid ${colors.cardBorder}`,
                borderRadius: 14, padding: '18px 12px',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              <div style={{
                color: selected === amount ? '#fff' : colors.textPrimary,
                fontSize: 18, fontWeight: 700,
              }}>
                {amount === 10000 ? '10 000+' : amount.toLocaleString('ru-RU')} ₽
              </div>
              {amount === 5000 && (
                <div style={{
                  color: selected === amount ? 'rgba(255,255,255,0.7)' : colors.textMuted,
                  fontSize: 11, marginTop: 3,
                }}>популярный выбор</div>
              )}
            </button>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        <Button onClick={() => onNext({ amount: selected })}>
          Дальше
        </Button>
      </div>
    </div>
  )
}
