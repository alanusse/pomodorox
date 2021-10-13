import { useState, useEffect } from 'react'
import useTimer from './hooks/useTimer'
import BellSound from './utils/bellSound'

// components
import TimeCounter from './components/TimeCounter'

/* Steps:
  1 - focus time
  2 - break time
  3 - long break time
*/

const App = () => {
  const [currentPomodoros, setCurrentPomodoros] = useState(0)
  const [currentStep, setCurrentStep] = useState(1)
  const [focusTime, setFocusTime] = useState({ minutes: 25, seconds: 0 })
  const [shortBreakTime, setShortBreakTime] = useState({ minutes: 5, seconds: 0 })
  const [longBreakTime, setLongBreakTime] = useState({ minutes: 15, seconds: 0 })

  const timer = useTimer({ minutes: focusTime.minutes, seconds: focusTime.seconds })

  const timesList = {
    focusTime,
    shortBreakTime,
    longBreakTime
  }

  const saveChanges = ({ focusTime, shortBreakTime, longBreakTime }) => {
    setFocusTime({ minutes: focusTime.minutes, seconds: focusTime.seconds })
    setShortBreakTime({ minutes: shortBreakTime.minutes, seconds: shortBreakTime.seconds })
    setLongBreakTime({ minutes: longBreakTime.minutes, seconds: longBreakTime.seconds })
  }

  useEffect(() => {
    if (timer.minutes === '00' && timer.seconds === '00') {
      BellSound.play()
      // add a finished pomodoro when user finish a focus time
      if (currentStep === 1) {
        const pomodoros = currentPomodoros + 1
        setCurrentPomodoros(pomodoros)

        // set long break every 4 finished pomodoros, else set a short break
        if (pomodoros > 0 && pomodoros % 4 === 0) {
          timer.replace(longBreakTime.minutes, longBreakTime.seconds)
          return setCurrentStep(3)
        } else {
          timer.replace(shortBreakTime.minutes, shortBreakTime.seconds)
          return setCurrentStep(2)
        }
      }

      // end a break if it is active
      if (currentStep === 2 || currentStep === 3) {
        timer.replace(focusTime.minutes, focusTime.seconds)
        return setCurrentStep(1)
      }
    }
  }, [timer.seconds])

  return (
    <>
      <TimeCounter
        timesList={timesList}
        saveChanges={saveChanges}
        currentStep={currentStep}
        {...timer}
      />
    </>
  )
}

export default App
