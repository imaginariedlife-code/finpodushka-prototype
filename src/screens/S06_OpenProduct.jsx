import { useState } from 'react'
import MiniAppHeader from '../components/MiniAppHeader'
import Button from '../components/Button'
import { colors } from '../theme'

const AMOUNTS = [1000, 3000, 5000, 10000]

const GOAL_NAMES = {
  freedom:  'Моя свобода',
  safety:   'Подушка безопасности',
  choice:   'Фонд выбора',
}

export default function S06_OpenProduct({ onNext, onBack, userData }) {
  const [name, setName] = useState(GOAL_NAMES[userData.goal] || 'Моя Финподушка')
  const [amount, setAmount] = useState(userData.amount || 5000)
  const [loading, setLoading] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  const monthlyIncome = Math.round(amount * 0.155 / 12)

  function handlePay() {
    setLoading(true)
    setTimeout(() => onNext({ amount }), 1200)
  }

  return (
    <div style={{ background: colors.bg, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <MiniAppHeader showBack onBack={onBack} />

      <div style={{ flex: 1, padding: '20px 20px 32px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 800, marginBottom: 20 }}>
          Ваша Финподушка
        </div>

        {/* Name field */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ color: colors.textMuted, fontSize: 12, marginBottom: 6 }}>Название</div>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            style={{
              width: '100%', background: colors.card, border: `1px solid ${colors.cardBorder}`,
              borderRadius: 12, padding: '12px 14px', color: colors.textPrimary,
              fontSize: 16, fontWeight: 600, outline: 'none',
            }}
          />
        </div>

        {/* Amount */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ color: colors.textMuted, fontSize: 12, marginBottom: 8 }}>Сумма первого пополнения</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {AMOUNTS.map(a => (
              <button
                key={a}
                onClick={() => setAmount(a)}
                style={{
                  background: amount === a ? colors.purple : colors.card,
                  border: amount === a ? `1.5px solid ${colors.purple}` : `1px solid ${colors.cardBorder}`,
                  borderRadius: 12, padding: '14px 8px',
                  color: amount === a ? '#fff' : colors.textPrimary,
                  fontSize: 15, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                {a === 10000 ? '10 000+' : a.toLocaleString('ru-RU')} ₽
              </button>
            ))}
          </div>
        </div>

        {/* Monthly income hint */}
        <div style={{
          background: 'rgba(16,185,129,0.08)', borderRadius: 10, padding: '10px 14px',
          marginBottom: 16, border: `1px solid rgba(16,185,129,0.2)`,
          color: colors.green, fontSize: 13, fontWeight: 600, textAlign: 'center',
        }}>
          +{monthlyIncome} ₽ дохода уже в первый месяц
        </div>

        {/* Terms toggle */}
        <button
          onClick={() => setShowTerms(!showTerms)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: colors.textMuted, fontSize: 13, textAlign: 'left',
            marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6,
          }}
        >
          <span style={{ transform: showTerms ? 'rotate(90deg)' : 'none', display: 'inline-block', transition: 'transform 0.2s' }}>›</span>
          Условия
        </button>

        {showTerms && (
          <div style={{
            background: colors.card, borderRadius: 12, padding: 14,
            border: `1px solid ${colors.cardBorder}`, marginBottom: 16,
          }}>
            {[
              'Фонд денежного рынка — ликвидные инструменты',
              'Доход начисляется ежедневно',
              'Вывод без комиссий в любой момент',
              'Управляющая компания лицензирована ЦБ РФ',
            ].map((t, i) => (
              <div key={i} style={{ color: colors.textMuted, fontSize: 13, marginBottom: 6, lineHeight: 1.4 }}>
                · {t}
              </div>
            ))}
          </div>
        )}

        <div style={{ flex: 1 }} />

        <Button onClick={handlePay} disabled={loading}>
          {loading ? 'Обрабатываем...' : 'Пополнить Финподушку'}
        </Button>
      </div>
    </div>
  )
}
