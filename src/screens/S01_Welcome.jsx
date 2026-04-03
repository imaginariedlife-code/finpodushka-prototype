import MiniAppHeader from '../components/MiniAppHeader'
import Button from '../components/Button'
import { colors } from '../theme'

export default function S01_Welcome({ onNext }) {
  return (
    <div style={{ background: colors.bg, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <MiniAppHeader />

      <div style={{ flex: 1, padding: '24px 20px 32px', display: 'flex', flexDirection: 'column' }}>

        {/* Logo + tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <div style={{
            width: 44, height: 44, background: colors.redBrand, borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 9, color: 'white', fontWeight: 800, lineHeight: 1.2, textAlign: 'center',
          }}>
            ФИН<br/>УСЛ
          </div>
          <div>
            <div style={{ color: colors.textPrimary, fontSize: 15, fontWeight: 700 }}>Финподушка</div>
            <div style={{
              display: 'inline-block', background: colors.purpleBg,
              color: colors.purpleLight, fontSize: 11, fontWeight: 600,
              padding: '2px 8px', borderRadius: 20, marginTop: 2,
            }}>
              Фонд денежного рынка
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ color: colors.textPrimary, fontSize: 24, fontWeight: 800, lineHeight: 1.25 }}>
            Инвестиционная копилка,
          </div>
          <div style={{ color: colors.purpleLight, fontSize: 24, fontWeight: 800, lineHeight: 1.25 }}>
            которая работает
          </div>
          <div style={{ color: colors.textPrimary, fontSize: 24, fontWeight: 800, lineHeight: 1.25, marginBottom: 6 }}>
            пока ты живёшь
          </div>
          <div style={{ color: colors.textMuted, fontSize: 14, lineHeight: 1.5 }}>
            Финансовая независимость начинается с одного шага
          </div>
        </div>

        {/* Big yield block */}
        <div style={{
          background: colors.card, borderRadius: 16, padding: '18px 20px',
          marginBottom: 20, border: `1px solid ${colors.cardBorder}`,
          textAlign: 'center',
        }}>
          <div style={{ color: colors.textMuted, fontSize: 12, marginBottom: 4 }}>доходность</div>
          <div style={{ color: colors.purpleLight, fontSize: 36, fontWeight: 800 }}>~15,5%</div>
          <div style={{ color: colors.textMuted, fontSize: 12 }}>годовых · начисляется каждый день</div>
        </div>

        {/* Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
          {[
            'Вывести в любой момент',
            'Доходность определяет рынок, не банк',
            'Отрицательной доходности не бывает',
          ].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 20, height: 20, background: colors.green, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, fontSize: 11, color: 'white', fontWeight: 700,
              }}>✓</div>
              <span style={{ color: colors.textSecondary, fontSize: 14 }}>{item}</span>
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        {/* Trust line */}
        <div style={{ textAlign: 'center', color: colors.textHint, fontSize: 11, marginBottom: 16 }}>
          Финуслуги — маркетплейс Московской Биржи
        </div>

        <Button onClick={() => onNext()}>Открыть Финподушку</Button>
      </div>
    </div>
  )
}
