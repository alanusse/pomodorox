/* eslint-disable react/prop-types */
import Configuration from './Configuration'
import Container from './Container'
import ContainerHeader from './ContainerHeader'
import Button from './Button'
import Counter from './Counter'
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
    <Container className='time-counter' header={<ContainerHeader />}>
      <div className='time-counter__info-bar'>
        <Configuration
          timesList={timesList}
          saveChanges={saveChanges}
        />
        <span>
          {currentStep === 1
            ? 'Focus time'
            : currentStep === 2
              ? 'Short break'
              : 'Long break'}
        </span>
      </div>
      <Counter
        minutes={minutes}
        seconds={seconds}
      />
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
