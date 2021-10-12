/* eslint-disable react/prop-types */
import './Counter.css'

const Counter = ({ minutes, seconds }) => {
  return (
    <div className='counter'>
      <span className='counter__minutes'>{minutes}</span>
      <span className='counter__separator'>:</span>
      <span className='counter__seconds'>{seconds}</span>
    </div>
  )
}

export default Counter
