import MiniAppHeader from '../components/MiniAppHeader'
import Button from '../components/Button'
import { colors } from '../theme'

export default function S04b_Comparison({ onNext, goTo }) {
  return (
    <div style={{ background: colors.bg, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <MiniAppHeader showBack onBack={() => goTo('s04')} />

      <div style={{ flex: 1, padding: '20px 20px 32px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 800, marginBottom: 4 }}>
          Почему Финподушка?
        </div>
        <div style={{ color: colors.textMuted, fontSize: 14, marginBottom: 20 }}>
          Честное сравнение трёх способов хранить деньги
        </div>

        {/* Finpodushka */}
        <div style={{
          background: colors.card, border: `1.5px solid ${colors.purple}`,
          borderRadius: 14, padding: 14, marginBottom: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ color: colors.purpleLight, fontWeight: 700, fontSize: 15 }}>💜 Финподушка</div>
            <div style={{
              background: colors.purpleBg, color: colors.purpleLight,
              padding: '2px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600,
            }}>~15,5% / год</div>
          </div>
          {[
            { icon: '✓', color: colors.green, text: 'Доходность определяет рынок — всегда справедливая ставка' },
            { icon: '✓', color: colors.green, text: 'Фонд денежного рынка — отрицательной доходности не бывает' },
            { icon: '✓', color: colors.green, text: 'Вывести в любой момент без потери дохода' },
            { icon: '!', color: colors.warning, text: 'Не застрахована АСВ — но капитал в фонде, а не на счёте банка' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <span style={{ color: item.color, fontSize: 13, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
              <span style={{ color: colors.textSecondary, fontSize: 13, lineHeight: 1.4 }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Deposit */}
        <div style={{
          background: colors.card, border: `1px solid ${colors.cardBorder}`,
          borderRadius: 14, padding: 14, marginBottom: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ color: colors.textMuted, fontWeight: 700, fontSize: 15 }}>🏦 Вклад</div>
            <div style={{
              background: 'rgba(255,255,255,0.05)', color: colors.textMuted,
              padding: '2px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600,
            }}>16–18% / год</div>
          </div>
          {[
            { icon: '✓', color: colors.green, text: 'Застрахован АСВ до 1,4 млн ₽' },
            { icon: '✗', color: colors.danger, text: 'Ставку устанавливает банк — не рынок' },
            { icon: '✗', color: colors.danger, text: 'Досрочный вывод = потеря накопленных процентов' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <span style={{ color: item.color, fontSize: 13, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
              <span style={{ color: colors.textSecondary, fontSize: 13, lineHeight: 1.4 }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Savings account */}
        <div style={{
          background: colors.card, border: `1px solid ${colors.cardBorder}`,
          borderRadius: 14, padding: 14, marginBottom: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ color: colors.textMuted, fontWeight: 700, fontSize: 15 }}>💳 Накопительный счёт</div>
            <div style={{
              background: 'rgba(255,255,255,0.05)', color: colors.textMuted,
              padding: '2px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600,
            }}>7–10% / год</div>
          </div>
          {[
            { icon: '✓', color: colors.green, text: 'Застрахован АСВ до 1,4 млн ₽' },
            { icon: '✓', color: colors.green, text: 'Вывести в любой момент' },
            { icon: '✗', color: colors.danger, text: 'Банк меняет ставку когда хочет — без предупреждения' },
            { icon: '✗', color: colors.danger, text: 'Обычно ниже инфляции в долгосрок' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <span style={{ color: item.color, fontSize: 13, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
              <span style={{ color: colors.textSecondary, fontSize: 13, lineHeight: 1.4 }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div style={{
          background: colors.purpleBg, border: `1px solid rgba(124,58,237,0.3)`,
          borderRadius: 12, padding: 12, marginBottom: 20,
        }}>
          <div style={{ color: colors.purpleLight, fontSize: 12, fontWeight: 600, marginBottom: 4 }}>💡 Вывод</div>
          <div style={{ color: colors.textSecondary, fontSize: 13, lineHeight: 1.5 }}>
            Финподушка — фонд денежного рынка: доходность определяет рынок, снять можно всегда, а уйти в минус невозможно по природе инструмента.
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={() => goTo('s04')}
            style={{
              flex: 1, padding: '14px', background: colors.card,
              border: `1px solid ${colors.cardBorder}`, borderRadius: 12,
              color: colors.textMuted, fontSize: 15, fontWeight: 600, cursor: 'pointer',
            }}
          >
            Пропустить
          </button>
          <button
            onClick={() => onNext()}
            style={{
              flex: 2, padding: '14px', background: colors.purple,
              border: 'none', borderRadius: 12,
              color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer',
            }}
          >
            Открыть Финподушку →
          </button>
        </div>
      </div>
    </div>
  )
}
