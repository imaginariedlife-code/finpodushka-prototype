import MiniAppHeader from '../components/MiniAppHeader'
import Button from '../components/Button'
import { colors } from '../theme'

export default function S10_SocialProof({ onNext }) {
  const todayFill = 0.78 // 78% of bar

  return (
    <div style={{ background: colors.bg, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <MiniAppHeader />

      <div style={{ flex: 1, padding: '20px 20px 32px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 800, marginBottom: 20, lineHeight: 1.3 }}>
          Вы уже среди тех, кто действует
        </div>

        {/* Active savers */}
        <div style={{
          background: colors.card, borderRadius: 16, padding: '16px 18px',
          border: `1px solid ${colors.cardBorder}`, marginBottom: 16, textAlign: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 4 }}>
            <div style={{ width: 8, height: 8, background: colors.green, borderRadius: '50%' }} />
            <span style={{ color: colors.textPrimary, fontSize: 24, fontWeight: 800 }}>19 847</span>
          </div>
          <div style={{ color: colors.textMuted, fontSize: 13 }}>накопителей на Финуслугах прямо сейчас</div>
        </div>

        {/* Stats */}
        <div style={{
          background: colors.card, borderRadius: 16, padding: '16px 18px',
          border: `1px solid ${colors.cardBorder}`, marginBottom: 16,
        }}>
          <div style={{ color: colors.textPrimary, fontSize: 15, fontWeight: 700, marginBottom: 4 }}>
            Те, кто копит регулярно 12 мес:
          </div>
          <div style={{ color: colors.green, fontSize: 22, fontWeight: 800, marginBottom: 2 }}>
            в среднем 87 000 ₽
          </div>
          <div style={{ color: colors.textMuted, fontSize: 13 }}>
            на 34% больше планируемого за счёт сложного процента
          </div>
        </div>

        {/* Today's bar */}
        <div style={{
          background: colors.card, borderRadius: 16, padding: '16px 18px',
          border: `1px solid ${colors.cardBorder}`, marginBottom: 24,
        }}>
          <div style={{ color: colors.textSecondary, fontSize: 13, marginBottom: 10 }}>
            Сегодня пополнили Финподушку: <strong style={{ color: colors.textPrimary }}>1 247 человек</strong>
          </div>
          <div style={{
            height: 8, background: colors.cardBorder, borderRadius: 4, overflow: 'hidden',
          }}>
            <div style={{
              height: '100%', width: `${todayFill * 100}%`,
              background: `linear-gradient(90deg, ${colors.purple}, ${colors.purpleLight})`,
              borderRadius: 4, transition: 'width 1s ease',
            }} />
          </div>
          <div style={{ color: colors.textHint, fontSize: 11, marginTop: 6, textAlign: 'right' }}>
            78% от вчерашнего рекорда
          </div>
        </div>

        {/* You are in */}
        <div style={{
          background: colors.purpleBg, border: `1px solid rgba(124,58,237,0.3)`,
          borderRadius: 12, padding: '12px 14px', marginBottom: 20, textAlign: 'center',
        }}>
          <div style={{ color: colors.purpleLight, fontSize: 14, fontWeight: 600 }}>
            🎉 Вы только что присоединились к этому числу
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <Button onClick={() => onNext()}>Дальше</Button>
      </div>
    </div>
  )
}
