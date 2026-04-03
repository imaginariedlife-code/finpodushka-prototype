import { useState } from 'react'
import MiniAppHeader from '../components/MiniAppHeader'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import { colors } from '../theme'

const RATE_MONTHLY = 0.155 / 12

function calcFV(amount, months) {
  return Math.round(amount * ((Math.pow(1 + RATE_MONTHLY, months) - 1) / RATE_MONTHLY))
}

const HORIZONS = [
  { label: '1 год', months: 12 },
  { label: '2 года', months: 24 },
  { label: '5 лет', months: 60 },
]

export default function S04_QuizResult({ onNext, onBack, userData, goTo }) {
  const [selectedHorizon, setSelectedHorizon] = useState(
    HORIZONS.find(h => h.months === userData.months) || HORIZONS[1]
  )

  const amount = userData.amount || 5000
  const months = selectedHorizon.months
  const fv = calcFV(amount, months)
  const contributions = amount * months
  const income = fv - contributions

  function fmt(n) {
    return n.toLocaleString('ru-RU')
  }

  return (
    <div style={{ background: colors.bg, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <MiniAppHeader showBack onBack={onBack} />
      <ProgressBar step={3} total={3} />

      <div style={{ flex: 1, padding: '20px 20px 32px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: colors.textPrimary, fontSize: 18, fontWeight: 800, marginBottom: 20, lineHeight: 1.3 }}>
          Ваш капитал через {selectedHorizon.label}
        </div>

        {/* Horizon switcher */}
        <div style={{
          display: 'flex', gap: 6, marginBottom: 24,
          background: colors.card, borderRadius: 12, padding: 4,
          border: `1px solid ${colors.cardBorder}`,
        }}>
          {HORIZONS.map(h => (
            <button
              key={h.months}
              onClick={() => {
                setSelectedHorizon(h)
              }}
              style={{
                flex: 1, padding: '8px 4px', borderRadius: 9, border: 'none',
                background: selectedHorizon.months === h.months ? colors.purple : 'transparent',
                color: selectedHorizon.months === h.months ? '#fff' : colors.textMuted,
                fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              {h.label}
            </button>
          ))}
        </div>

        {/* Big number */}
        <div style={{
          background: colors.card, borderRadius: 16, padding: '24px 20px',
          marginBottom: 16, border: `1px solid ${colors.cardBorder}`, textAlign: 'center',
        }}>
          <div style={{ color: colors.textMuted, fontSize: 12, marginBottom: 8 }}>итоговый капитал</div>
          <div style={{ color: colors.textPrimary, fontSize: 36, fontWeight: 800, marginBottom: 16 }}>
            {fmt(fv)} ₽
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '10px 8px' }}>
              <div style={{ color: colors.textMuted, fontSize: 11, marginBottom: 3 }}>ваши взносы</div>
              <div style={{ color: colors.textSecondary, fontSize: 15, fontWeight: 700 }}>{fmt(contributions)} ₽</div>
            </div>
            <div style={{ flex: 1, background: 'rgba(16,185,129,0.08)', borderRadius: 10, padding: '10px 8px' }}>
              <div style={{ color: colors.textMuted, fontSize: 11, marginBottom: 3 }}>доход фонда</div>
              <div style={{ color: colors.green, fontSize: 15, fontWeight: 700 }}>+{fmt(income)} ₽</div>
            </div>
          </div>
        </div>

        <div style={{ color: colors.textMuted, fontSize: 12, textAlign: 'center', marginBottom: 16 }}>
          Средняя доходность фонда за 3 года: 14–17% годовых
        </div>

        {/* Compare link */}
        <button
          onClick={() => goTo('s04b')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: colors.purpleLight, fontSize: 14, marginBottom: 24,
            textDecoration: 'underline', textAlign: 'center',
          }}
        >
          Почему Финподушка выгоднее вклада? →
        </button>

        <div style={{ flex: 1 }} />

        <Button onClick={() => onNext({ months: selectedHorizon.months })}>
          Создать мою Финподушку
        </Button>
      </div>
    </div>
  )
}
