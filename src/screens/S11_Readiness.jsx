import { useState } from 'react'
import MiniAppHeader from '../components/MiniAppHeader'
import Button from '../components/Button'
import { colors } from '../theme'

const GAUGE_PCT = 42

function GaugeSVG({ pct }) {
  const r = 70
  const cx = 100, cy = 90
  const circumference = Math.PI * r // half circle
  const filled = (pct / 100) * circumference
  const startX = cx - r, startY = cy
  const endX = cx + r, endY = cy

  // arc path for filled portion
  const angle = (pct / 100) * 180 - 180 // -180 to 0
  const rad = (angle * Math.PI) / 180
  const x = cx + r * Math.cos(rad)
  const y = cy + r * Math.sin(rad)
  const large = pct > 50 ? 1 : 0

  return (
    <svg width="200" height="100" viewBox="0 0 200 100">
      {/* Background arc */}
      <path
        d={`M ${startX} ${cy} A ${r} ${r} 0 0 1 ${endX} ${cy}`}
        fill="none" stroke={colors.cardBorder} strokeWidth="12" strokeLinecap="round"
      />
      {/* Filled arc */}
      {pct > 0 && (
        <path
          d={`M ${startX} ${cy} A ${r} ${r} 0 ${large} 1 ${x.toFixed(1)} ${y.toFixed(1)}`}
          fill="none" stroke={colors.purple} strokeWidth="12" strokeLinecap="round"
        />
      )}
      {/* Text */}
      <text x={cx} y={cy - 6} textAnchor="middle" fill={colors.textPrimary} fontSize="22" fontWeight="800">
        {pct}%
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill={colors.textMuted} fontSize="10">
        финансовая готовность
      </text>
    </svg>
  )
}

const ROADMAP = [
  { done: true,  label: 'Финподушка открыта', bonus: '' },
  { done: true,  label: 'Первое пополнение', bonus: '' },
  { done: false, label: 'Автопополнение', bonus: '+15%' },
  { done: false, label: 'Вклад 17,5%', bonus: '+10%' },
  { done: false, label: 'Урок «Деньги без стресса»', bonus: '+8%' },
]

export default function S11_Readiness({ onNext }) {
  const [autoRefill, setAutoRefill] = useState(false)
  const [notifications, setNotifications] = useState(false)

  return (
    <div style={{ background: colors.bg, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <MiniAppHeader />

      <div style={{ flex: 1, padding: '20px 20px 32px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: colors.textPrimary, fontSize: 18, fontWeight: 800, marginBottom: 16 }}>
          Финансовая готовность
        </div>

        {/* Gauge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          <GaugeSVG pct={GAUGE_PCT} />
        </div>

        {/* Roadmap checklist */}
        <div style={{
          background: colors.card, borderRadius: 16, padding: '14px 16px',
          border: `1px solid ${colors.cardBorder}`, marginBottom: 16,
        }}>
          <div style={{ color: colors.textPrimary, fontSize: 13, fontWeight: 700, marginBottom: 12 }}>
            28-дневный финансовый месяц
          </div>
          {ROADMAP.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10,
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                background: item.done ? colors.green : 'transparent',
                border: item.done ? 'none' : `2px solid ${colors.cardBorder}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, color: 'white', fontWeight: 700,
              }}>
                {item.done ? '✓' : ''}
              </div>
              <span style={{
                color: item.done ? colors.textPrimary : colors.textMuted,
                fontSize: 13, flex: 1,
              }}>
                {item.label}
              </span>
              {item.bonus && (
                <span style={{
                  background: colors.purpleBg, color: colors.purpleLight,
                  padding: '2px 8px', borderRadius: 20, fontSize: 11, fontWeight: 600,
                }}>
                  {item.bonus}
                </span>
              )}
            </div>
          ))}

          {/* Progress 1/28 */}
          <div style={{ marginTop: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ color: colors.textMuted, fontSize: 11 }}>Прогресс</span>
              <span style={{ color: colors.textMuted, fontSize: 11 }}>1 / 28 дней</span>
            </div>
            <div style={{ height: 4, background: colors.cardBorder, borderRadius: 2, overflow: 'hidden' }}>
              <div style={{
                height: '100%', width: `${(1/28)*100}%`,
                background: colors.purple, borderRadius: 2,
              }} />
            </div>
          </div>
        </div>

        {/* Toggles */}
        {[
          { label: 'Автопополнение', sub: 'Каждый месяц автоматически', val: autoRefill, set: setAutoRefill },
          { label: 'Уведомления', sub: 'Ежедневный доход на счёт', val: notifications, set: setNotifications },
        ].map(item => (
          <div key={item.label} style={{
            background: colors.card, borderRadius: 12, padding: '12px 16px',
            border: `1px solid ${colors.cardBorder}`, marginBottom: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ color: colors.textPrimary, fontSize: 14, fontWeight: 600 }}>{item.label}</div>
              <div style={{ color: colors.textMuted, fontSize: 12 }}>{item.sub}</div>
            </div>
            <button
              onClick={() => item.set(!item.val)}
              style={{
                width: 46, height: 26, borderRadius: 13, border: 'none',
                background: item.val ? colors.purple : colors.cardBorder,
                cursor: 'pointer', position: 'relative', transition: 'background 0.2s',
                flexShrink: 0,
              }}
            >
              <div style={{
                width: 20, height: 20, background: '#fff', borderRadius: '50%',
                position: 'absolute', top: 3,
                left: item.val ? 23 : 3, transition: 'left 0.2s',
              }} />
            </button>
          </div>
        ))}

        <div style={{ flex: 1 }} />

        <Button onClick={() => onNext()}>Готово</Button>
      </div>
    </div>
  )
}
