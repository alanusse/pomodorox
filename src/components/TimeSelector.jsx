/* eslint-disable react/prop-types */
import './TimeSelector.css'

const TimeSelector = ({ minutes, seconds, increase, decrease }) => {
  return (
    <div className='time-selector'>
      <button onClick={decrease}><i className='fas fa-minus' /></button>
      <span className='time-selector__timer'>{minutes}:{seconds}</span>
      <button onClick={increase}><i className='fas fa-plus' /></button>
    </div>
  )
}

export default TimeSelector
