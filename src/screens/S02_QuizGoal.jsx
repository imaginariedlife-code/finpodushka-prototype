import { useState } from 'react'
import MiniAppHeader from '../components/MiniAppHeader'
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import { colors } from '../theme'

const GOALS = [
  { id: 'freedom', emoji: '🧘', text: 'Не думать о деньгах при каждой трате' },
  { id: 'safety',  emoji: '🛡', text: 'Иметь запас на любую неожиданность' },
  { id: 'choice',  emoji: '🗓', text: 'Позволить себе выбор — уволиться, уехать, сменить курс' },
]

export default function S02_QuizGoal({ onNext, onBack }) {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ background: colors.bg, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <MiniAppHeader showBack onBack={onBack} />
      <ProgressBar step={1} total={3} />

      <div style={{ flex: 1, padding: '24px 20px 32px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: colors.textPrimary, fontSize: 20, fontWeight: 800, marginBottom: 8, lineHeight: 1.3 }}>
          Каким хочешь быть через год?
        </div>
        <div style={{ color: colors.textMuted, fontSize: 14, marginBottom: 24 }}>
          Выбери, что тебе ближе всего
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
          {GOALS.map(goal => (
            <button
              key={goal.id}
              onClick={() => setSelected(goal.id)}
              style={{
                background: selected === goal.id ? colors.purpleBg : colors.card,
                border: selected === goal.id ? `1.5px solid ${colors.purple}` : `1px solid ${colors.cardBorder}`,
                borderRadius: 14, padding: '16px 18px',
                display: 'flex', alignItems: 'center', gap: 14,
                cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
              }}
            >
              <span style={{ fontSize: 28 }}>{goal.emoji}</span>
              <span style={{
                color: selected === goal.id ? colors.textPrimary : colors.textSecondary,
                fontSize: 15, fontWeight: selected === goal.id ? 600 : 400, lineHeight: 1.4,
              }}>
                {goal.text}
              </span>
            </button>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <Button onClick={() => onNext({ goal: selected })} disabled={!selected}>
            Дальше
          </Button>
        </div>
      </div>
    </div>
  )
}
