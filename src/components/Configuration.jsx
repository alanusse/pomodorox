/* eslint-disable react/prop-types */
import { useState } from 'react'
import useTimeSelector from '../hooks/useTimeSelector'
import Container from './Container'
import TimeSelector from './TimeSelector'

const ConfigHeader = () => {
  return (
    <div>
      <span>Configuration</span>
    </div>
  )
}

const Configuration = ({
  timesList,
  saveChanges
}) => {
  const [isOpened, setIsOpened] = useState(false)
  const focusTimeSelector = useTimeSelector({ minutes: timesList.focusTime.minutes, seconds: timesList.focusTime.seconds })
  const shortBreakTimeSelector = useTimeSelector({ minutes: timesList.shortBreakTime.minutes, seconds: timesList.shortBreakTime.seconds })
  const longBreakTimeSelector = useTimeSelector({ minutes: timesList.longBreakTime.minutes, seconds: timesList.longBreakTime.seconds })

  const handleSaveChanges = () => {
    saveChanges({
      focusTime: focusTimeSelector,
      shortBreakTime: shortBreakTimeSelector,
      longBreakTime: longBreakTimeSelector
    })
  }

  return (
    <>
      <button onClick={() => setIsOpened(!isOpened)}>*</button>
      {isOpened && (
        <Container header={<ConfigHeader />}>
          <p>Set up your custom config</p>
          <ul>
            <li>
              <span>Focus time:</span>
              <TimeSelector {...focusTimeSelector} />
            </li>
            <li>
              <span>Short break time:</span>
              <TimeSelector {...shortBreakTimeSelector} />
            </li>
            <li>
              <span>Long break time:</span>
              <TimeSelector {...longBreakTimeSelector} />
            </li>
          </ul>
          <button onClick={handleSaveChanges}>Save changes</button>
        </Container>
      )}
    </>
  )
}

export default Configuration
