import { useState } from 'react'
import PhoneFrame from './components/PhoneFrame'
import S01_Welcome from './screens/S01_Welcome'
import S02_QuizGoal from './screens/S02_QuizGoal'
import S03_QuizAmount from './screens/S03_QuizAmount'
import S04_QuizResult from './screens/S04_QuizResult'
import S04b_Comparison from './screens/S04b_Comparison'
import S05_Gosuslugi from './screens/S05_Gosuslugi'
import S06_OpenProduct from './screens/S06_OpenProduct'
import S07_Success from './screens/S07_Success'
import S08_WowNumber from './screens/S08_WowNumber'
import S09_PlatformReveal from './screens/S09_PlatformReveal'
import S10_SocialProof from './screens/S10_SocialProof'
import S11_Readiness from './screens/S11_Readiness'
import S12_Dashboard from './screens/S12_Dashboard'

const FLOW = [
  's01','s02','s03','s04','s05','s06',
  's07','s08','s09','s10','s11','s12',
]

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('s01')
  const [userData, setUserData] = useState({
    goal: null,
    amount: 5000,
    months: 24,
  })

  function onNext(partialData = {}) {
    setUserData(prev => ({ ...prev, ...partialData }))
    const idx = FLOW.indexOf(currentScreen)
    if (idx < FLOW.length - 1) setCurrentScreen(FLOW[idx + 1])
  }

  function onBack() {
    const idx = FLOW.indexOf(currentScreen)
    if (idx > 0) setCurrentScreen(FLOW[idx - 1])
  }

  function goTo(screen) { setCurrentScreen(screen) }

  const props = { userData, onNext, onBack, goTo }

  const screens = {
    s01:  <S01_Welcome {...props} />,
    s02:  <S02_QuizGoal {...props} />,
    s03:  <S03_QuizAmount {...props} />,
    s04:  <S04_QuizResult {...props} />,
    s04b: <S04b_Comparison {...props} />,
    s05:  <S05_Gosuslugi {...props} />,
    s06:  <S06_OpenProduct {...props} />,
    s07:  <S07_Success {...props} />,
    s08:  <S08_WowNumber {...props} />,
    s09:  <S09_PlatformReveal {...props} />,
    s10:  <S10_SocialProof {...props} />,
    s11:  <S11_Readiness {...props} />,
    s12:  <S12_Dashboard {...props} />,
  }

  return (
    <PhoneFrame>
      {screens[currentScreen] ?? (
        <div style={{ color: 'white', padding: 32 }}>Screen not found: {currentScreen}</div>
      )}
    </PhoneFrame>
  )
}
