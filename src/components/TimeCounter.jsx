/* eslint-disable react/prop-types */
import Configuration from './Configuration'
import Container from './Container'
import ContainerHeader from './ContainerHeader'
import Button from './Button'
import './TimeCounter.css'

const TimeCounter = ({
  timesList,
  saveChanges,
  currentStep,
  isActive,
  minutes,
  seconds,
  start,
  pause,
  stop
}) => {
  return (
    <Container header={<ContainerHeader />}>
      <Configuration
        timesList={timesList}
        saveChanges={saveChanges}
      />
      <div>
        <span>
          {currentStep === 1
            ? 'focusTime'
            : currentStep === 2
              ? 'shortBreak'
              : 'longBreak'}
        </span>
      </div>
      <div>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className='time-counter__action-buttons'>
        {isActive
          ? <Button onClick={pause}>Pause</Button>
          : <Button onClick={start}>Start</Button>}
        <Button onClick={stop}>Stop</Button>
      </div>
    </Container>
  )
}

export default TimeCounter
