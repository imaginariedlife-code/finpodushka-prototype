import { useState } from 'react'
import { colors } from '../theme'

const MONTHS_LABELS = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн']

function BarChart({ amount }) {
  const RATE = 0.155 / 12
  const bars = MONTHS_LABELS.map((_, i) => {
    return Math.round(amount * Math.pow(1 + RATE, i + 1))
  })
  const max = bars[bars.length - 1]
  const maxH = 60

  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: maxH + 20 }}>
      {bars.map((v, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{
            width: '100%', height: Math.round((v / max) * maxH),
            background: i === bars.length - 1
              ? `linear-gradient(180deg, ${colors.purpleLight}, ${colors.purple})`
              : `linear-gradient(180deg, ${colors.green}, rgba(16,185,129,0.5))`,
            borderRadius: '3px 3px 0 0',
          }} />
          <div style={{ color: colors.textHint, fontSize: 9 }}>{MONTHS_LABELS[i]}</div>
        </div>
      ))}
    </div>
  )
}

const TIP = 'Фонд денежного рынка реинвестирует прибыль ежедневно — ваши деньги работают 24/7, даже в выходные.'

export default function S12_Dashboard({ userData }) {
  const [tab, setTab] = useState('portfolio')
  const amount = userData.amount || 5000
  const dailyIncome = Math.round(amount * 0.155 / 365)
  const monthlyIncome = Math.round(amount * 0.155 / 12)

  return (
    <div style={{ background: colors.bg, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>

      {/* Sticky header */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 10,
        background: colors.bg, padding: '14px 20px',
        borderBottom: `1px solid ${colors.cardBorder}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{
            width: 24, height: 24, background: colors.redBrand, borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 7, color: 'white', fontWeight: 800, lineHeight: 1.1, textAlign: 'center',
          }}>ФИН<br/>УСЛ</div>
          <span style={{ color: colors.textPrimary, fontSize: 15, fontWeight: 700 }}>Финподушка</span>
          <span style={{ color: '#3b82f6', fontSize: 13 }}>✓</span>
        </div>
      </div>

      <div style={{ flex: 1, padding: '20px 20px 80px', display: 'flex', flexDirection: 'column', gap: 14 }}>

        {/* Main balance card */}
        <div style={{
          background: `linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)`,
          borderRadius: 20, padding: '20px 18px',
          border: `1.5px solid ${colors.purple}`,
        }}>
          <div style={{ color: colors.textMuted, fontSize: 12, marginBottom: 4 }}>баланс</div>
          <div style={{ color: colors.textPrimary, fontSize: 34, fontWeight: 800, marginBottom: 2 }}>
            {amount.toLocaleString('ru-RU')} ₽
          </div>
          <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
            <div>
              <div style={{ color: colors.textHint, fontSize: 11 }}>сегодня</div>
              <div style={{ color: colors.green, fontSize: 14, fontWeight: 700 }}>+{dailyIncome} ₽</div>
            </div>
            <div>
              <div style={{ color: colors.textHint, fontSize: 11 }}>в месяц</div>
              <div style={{ color: colors.green, fontSize: 14, fontWeight: 700 }}>+{monthlyIncome} ₽</div>
            </div>
            <div>
              <div style={{ color: colors.textHint, fontSize: 11 }}>доходность</div>
              <div style={{ color: colors.purpleLight, fontSize: 14, fontWeight: 700 }}>~15,5%</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {['Вывести', 'Пополнить'].map((label, i) => (
              <button key={label} style={{
                flex: 1, padding: '10px', borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: 'pointer',
                background: i === 1 ? colors.purple : 'transparent',
                border: i === 1 ? 'none' : `1px solid ${colors.cardBorder}`,
                color: i === 1 ? '#fff' : colors.textSecondary,
              }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Tip of the day */}
        <div style={{
          background: colors.card, borderRadius: 14, padding: '12px 14px',
          border: `1px solid ${colors.cardBorder}`,
        }}>
          <div style={{ color: colors.purpleLight, fontSize: 12, fontWeight: 600, marginBottom: 4 }}>
            💡 Совет дня
          </div>
          <div style={{ color: colors.textSecondary, fontSize: 13, lineHeight: 1.5 }}>{TIP}</div>
        </div>

        {/* Bar chart */}
        <div style={{
          background: colors.card, borderRadius: 14, padding: '14px 16px',
          border: `1px solid ${colors.cardBorder}`,
        }}>
          <div style={{ color: colors.textPrimary, fontSize: 13, fontWeight: 700, marginBottom: 12 }}>
            Рост за 6 месяцев
          </div>
          <BarChart amount={amount} />
        </div>

        {/* Cross-sell deposits */}
        <div>
          <div style={{ color: colors.textMuted, fontSize: 12, marginBottom: 10 }}>Копите с помощью вкладов</div>
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              { bank: 'Яндекс Банк', rate: '22%', color: '#f59e0b' },
              { bank: 'Т-Банк', rate: '16,5%', color: '#fff' },
            ].map(item => (
              <div key={item.bank} style={{
                flex: 1, background: colors.card, borderRadius: 14, padding: '12px',
                border: `1px solid ${colors.cardBorder}`,
              }}>
                <div style={{ color: colors.textMuted, fontSize: 11, marginBottom: 2 }}>{item.bank}</div>
                <div style={{ color: item.color, fontSize: 20, fontWeight: 800, marginBottom: 8 }}>{item.rate}</div>
                <button style={{
                  width: '100%', padding: '7px', background: colors.cardBorder,
                  border: 'none', borderRadius: 8, color: colors.textMuted, fontSize: 11, cursor: 'pointer',
                }}>
                  Подробнее
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom nav */}
      <div style={{
        position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: 390, background: colors.card,
        borderTop: `1px solid ${colors.cardBorder}`,
        display: 'flex', padding: '10px 0 18px',
      }}>
        {[
          { id: 'products', icon: '🏦', label: 'Все продукты' },
          { id: 'portfolio', icon: '💜', label: 'Портфель' },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setTab(item.id)}
            style={{
              flex: 1, background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            }}
          >
            <span style={{ fontSize: 22 }}>{item.icon}</span>
            <span style={{
              fontSize: 10, fontWeight: 600,
              color: tab === item.id ? colors.purpleLight : colors.textMuted,
            }}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
