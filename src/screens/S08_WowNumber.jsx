import { useState } from 'react'
import MiniAppHeader from '../components/MiniAppHeader'
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

function Sparkline({ amount }) {
  const points = [12, 24, 36, 48, 60].map(m => calcFV(amount, m))
  const max = points[points.length - 1]
  const w = 280, h = 80
  const xs = points.map((_, i) => Math.round((i / (points.length - 1)) * w))
  const ys = points.map(v => Math.round(h - (v / max) * (h - 8) - 4))
  const d = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x},${ys[i]}`).join(' ')
  const area = d + ` L${xs[xs.length - 1]},${h} L0,${h} Z`

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={colors.purple} stopOpacity="0.35" />
          <stop offset="100%" stopColor={colors.purple} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sg)" />
      <path d={d} fill="none" stroke={colors.purple} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={xs[xs.length-1]} cy={ys[ys.length-1]} r="4" fill={colors.purpleLight} />
    </svg>
  )
}

export default function S08_WowNumber({ onNext, userData }) {
  const [horizon, setHorizon] = useState(
    HORIZONS.find(h => h.months === userData.months) || HORIZONS[1]
  )

  const amount = userData.amount || 5000
  const fv = calcFV(amount, horizon.months)
  const contributions = amount * horizon.months
  const income = fv - contributions

  function fmt(n) { return n.toLocaleString('ru-RU') }

  return (
    <div style={{ background: colors.bg, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <MiniAppHeader />

      <div style={{ flex: 1, padding: '20px 20px 32px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: colors.textPrimary, fontSize: 18, fontWeight: 800, marginBottom: 20 }}>
          Будущее ваших денег
        </div>

        {/* Horizon switcher */}
        <div style={{
          display: 'flex', gap: 6, marginBottom: 20,
          background: colors.card, borderRadius: 12, padding: 4,
          border: `1px solid ${colors.cardBorder}`,
        }}>
          {HORIZONS.map(h => (
            <button
              key={h.months}
              onClick={() => setHorizon(h)}
              style={{
                flex: 1, padding: '8px 4px', borderRadius: 9, border: 'none',
                background: horizon.months === h.months ? colors.purple : 'transparent',
                color: horizon.months === h.months ? '#fff' : colors.textMuted,
                fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              {h.label}
            </button>
          ))}
        </div>

        {/* Big number */}
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <div style={{ color: colors.textMuted, fontSize: 12, marginBottom: 4 }}>ваш капитал</div>
          <div style={{ color: colors.textPrimary, fontSize: 40, fontWeight: 800 }}>
            {fmt(fv)} ₽
          </div>
        </div>

        {/* Breakdown */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <div style={{ flex: 1, background: colors.card, borderRadius: 10, padding: '10px 12px' }}>
            <div style={{ color: colors.textMuted, fontSize: 11, marginBottom: 3 }}>взносы</div>
            <div style={{ color: colors.textSecondary, fontSize: 14, fontWeight: 700 }}>{fmt(contributions)} ₽</div>
          </div>
          <div style={{ flex: 1, background: 'rgba(16,185,129,0.08)', borderRadius: 10, padding: '10px 12px' }}>
            <div style={{ color: colors.textMuted, fontSize: 11, marginBottom: 3 }}>доход фонда</div>
            <div style={{ color: colors.green, fontSize: 14, fontWeight: 700 }}>+{fmt(income)} ₽</div>
          </div>
        </div>

        {/* Sparkline */}
        <div style={{
          background: colors.card, borderRadius: 14, padding: '16px 12px 10px',
          marginBottom: 12, border: `1px solid ${colors.cardBorder}`,
          overflow: 'hidden',
        }}>
          <div style={{ color: colors.textMuted, fontSize: 11, marginBottom: 10 }}>рост капитала за 5 лет</div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Sparkline amount={amount} />
          </div>
        </div>

        <div style={{ color: colors.textMuted, fontSize: 12, textAlign: 'center', marginBottom: 16 }}>
          Средняя доходность фонда за 3 года: 14–17% годовых
        </div>

        {/* Regular contribution tip */}
        <div style={{
          background: 'rgba(124,58,237,0.08)', border: `1px solid rgba(124,58,237,0.2)`,
          borderRadius: 12, padding: '12px 14px', marginBottom: 16,
        }}>
          <div style={{ color: colors.purpleLight, fontSize: 13, lineHeight: 1.5 }}>
            💡 Регулярные пополнения работают в разы сильнее — те, кто докладывает каждый месяц, накапливают на 34% больше за счёт сложного процента
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <Button onClick={() => onNext()}>Дальше</Button>
      </div>
    </div>
  )
}
