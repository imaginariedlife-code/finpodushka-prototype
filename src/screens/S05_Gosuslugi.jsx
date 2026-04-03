import { useState } from 'react'
import MiniAppHeader from '../components/MiniAppHeader'
import Button from '../components/Button'
import { colors } from '../theme'

export default function S05_Gosuslugi({ onNext, onBack }) {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  function handleAuth() {
    setLoading(true)
    setTimeout(() => {
      setDone(true)
      setLoading(false)
      setTimeout(() => onNext(), 800)
    }, 1500)
  }

  return (
    <div style={{ background: colors.bg, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <MiniAppHeader showBack onBack={onBack} />

      <div style={{ flex: 1, padding: '32px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Icon */}
        <div style={{
          width: 72, height: 72, background: 'rgba(59,130,246,0.1)', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32,
          marginBottom: 24,
        }}>
          🔑
        </div>

        <div style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 800, marginBottom: 10, textAlign: 'center' }}>
          Подтвердите личность через Госуслуги
        </div>
        <div style={{ color: colors.textMuted, fontSize: 14, textAlign: 'center', lineHeight: 1.5, marginBottom: 32 }}>
          Обязательный шаг по закону. Ваш пароль не передаётся — мы получаем только подтверждение личности.
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 32, justifyContent: 'center' }}>
          {[
            { icon: '🔒', label: 'Безопасно' },
            { icon: '🛡', label: 'Данные защищены' },
            { icon: '🏛', label: 'Официально' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, marginBottom: 4 }}>{item.icon}</div>
              <div style={{ color: colors.textMuted, fontSize: 11 }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Hint */}
        <div style={{
          background: colors.card, borderRadius: 12, padding: '12px 16px',
          border: `1px solid ${colors.cardBorder}`, marginBottom: 32, width: '100%',
        }}>
          <div style={{ color: colors.textMuted, fontSize: 13, lineHeight: 1.5, textAlign: 'center' }}>
            💡 Займёт ~30 секунд. Так же, как вход на сайт налоговой.
          </div>
        </div>

        <div style={{ flex: 1 }} />

        {done ? (
          <div style={{
            width: '100%', padding: '14px', background: colors.green,
            borderRadius: 12, textAlign: 'center', color: '#fff', fontWeight: 700, fontSize: 16,
          }}>
            ✓ Личность подтверждена
          </div>
        ) : (
          <Button onClick={handleAuth} disabled={loading}>
            {loading ? 'Подключаемся...' : 'Войти через Госуслуги'}
          </Button>
        )}
      </div>
    </div>
  )
}
