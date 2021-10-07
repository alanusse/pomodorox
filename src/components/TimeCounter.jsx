/* eslint-disable react/prop-types */
import Configuration from './Configuration'
import Container from './Container'
import ContainerHeader from './ContainerHeader'

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
      <div>
        {isActive
          ? <button onClick={pause}>Pause</button>
          : <button onClick={start}>Start</button>}
        <button onClick={stop}>Stop</button>
      </div>
    </Container>
  )
}

export default TimeCounter
