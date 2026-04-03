import MiniAppHeader from '../components/MiniAppHeader'
import Button from '../components/Button'
import { colors } from '../theme'

const PILLARS = [
  {
    icon: '📚',
    title: 'Учись',
    desc: 'Контент, объяснения, советы без занудства — финансовая грамотность в формате жизни',
  },
  {
    icon: '💰',
    title: 'Зарабатывай',
    desc: 'Лучшие продукты от 20+ банков, вклады до 17,5% — всё в одном месте',
  },
  {
    icon: '🛡',
    title: 'Защищён',
    desc: 'Подушка безопасности всегда под рукой — финансовая стабильность как основа свободы',
  },
]

const CROSS_SELL = [
  { bank: 'МКБ', name: 'Вклад', rate: '17,5%', color: '#2563eb' },
  { bank: 'Фонды', name: 'Другие', rate: 'позже', color: colors.purple },
]

export default function S09_PlatformReveal({ onNext }) {
  return (
    <div style={{ background: colors.bg, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <MiniAppHeader />

      <div style={{ flex: 1, padding: '20px 20px 32px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 800, marginBottom: 4 }}>
          Финуслуги — твой финансовый партнёр
        </div>
        <div style={{ color: colors.purpleLight, fontSize: 14, fontWeight: 600, marginBottom: 20 }}>
          Не счёт — экосистема
        </div>

        {/* Three pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
          {PILLARS.map(p => (
            <div key={p.title} style={{
              background: colors.card, borderRadius: 14, padding: '14px 16px',
              border: `1px solid ${colors.cardBorder}`,
              display: 'flex', gap: 14, alignItems: 'flex-start',
            }}>
              <span style={{ fontSize: 26 }}>{p.icon}</span>
              <div>
                <div style={{ color: colors.textPrimary, fontSize: 15, fontWeight: 700, marginBottom: 3 }}>
                  {p.title}
                </div>
                <div style={{ color: colors.textMuted, fontSize: 13, lineHeight: 1.4 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-sell */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ color: colors.textMuted, fontSize: 12, marginBottom: 10 }}>Пока вы здесь — посмотрите</div>
          <div style={{ display: 'flex', gap: 10 }}>
            {CROSS_SELL.map(item => (
              <div key={item.bank} style={{
                flex: 1, background: colors.card, borderRadius: 14, padding: '14px 12px',
                border: `1px solid ${colors.cardBorder}`,
              }}>
                <div style={{
                  display: 'inline-block', background: `${item.color}22`, color: item.color,
                  padding: '2px 8px', borderRadius: 20, fontSize: 11, fontWeight: 700, marginBottom: 6,
                }}>
                  {item.bank}
                </div>
                <div style={{ color: colors.textPrimary, fontSize: 14, fontWeight: 700, marginBottom: 2 }}>
                  {item.name}
                </div>
                <div style={{ color: colors.green, fontSize: 17, fontWeight: 800, marginBottom: 10 }}>
                  {item.rate}
                </div>
                <button style={{
                  width: '100%', padding: '8px', background: 'transparent',
                  border: `1px solid ${colors.cardBorder}`, borderRadius: 8,
                  color: colors.textMuted, fontSize: 12, cursor: 'pointer',
                }}>
                  {item.rate === 'позже' ? 'Позже' : 'Посмотреть'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Trust footer */}
        <div style={{ color: colors.textHint, fontSize: 11, textAlign: 'center', marginBottom: 20 }}>
          Финуслуги — маркетплейс Московской Биржи · Лицензия ЦБ РФ · 3 млн клиентов
        </div>

        <div style={{ flex: 1 }} />

        <Button onClick={() => onNext()}>Перейти в мою Финподушку</Button>
      </div>
    </div>
  )
}
