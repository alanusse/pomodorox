import { useState } from 'react'

// helpers
import parseToSeconds from '../helpers/parseToSeconds'
import numberToString from '../helpers/numberToString'

const ONE_MINUTE_IN_SECONDS = 60

const useTimeSelector = ({ minutes = 0, seconds = 0 }) => {
  const [time, setTime] = useState(() => parseToSeconds(minutes, seconds))

  const formattedMinutes = numberToString(Math.floor(time / 60))
  const formattedSeconds = numberToString(time % 60)

  const increase = () => setTime(time + ONE_MINUTE_IN_SECONDS)
  const decrease = () => {
    const newTime = time - ONE_MINUTE_IN_SECONDS
    if (newTime < 0) return setTime(0)
    setTime(time - ONE_MINUTE_IN_SECONDS)
  }

  return {
    minutes: formattedMinutes,
    seconds: formattedSeconds,
    increase,
    decrease
  }
}

export default useTimeSelector
