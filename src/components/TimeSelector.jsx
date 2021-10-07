// eslint-disable-next-line react/prop-types
const TimeSelector = ({ minutes, seconds, increase, decrease }) => {
  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{minutes}:{seconds}</span>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default TimeSelector
