import { useState, useEffect } from 'react'

// helpers
import parseToSeconds from '../helpers/parseToSeconds'
import numberToString from '../helpers/numberToString'

const useTimer = ({ minutes = 0, seconds = 0 }) => {
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(() => parseToSeconds(minutes, seconds))

  useEffect(() => {
    setTime(parseToSeconds(minutes, seconds))
  }, [minutes, seconds])

  useEffect(() => {
    const ONE_SECOND = 1000
    let intervalId = null

    if (isActive) {
      intervalId = setInterval(() => {
        if (time <= 0) {
          setTime(0)
          setIsActive(false)
        } else {
          setTime(time - 1)
        }
      }, ONE_SECOND)
    }

    return () => clearInterval(intervalId)
  }, [isActive, time])

  const formattedMinutes = Math.floor(time / 60)
  const formattedSeconds = time - (formattedMinutes * 60)
  const start = () => setIsActive(true)
  const pause = () => setIsActive(false)
  const stop = () => {
    setIsActive(false)
    setTime(parseToSeconds(minutes, seconds)) // reset time to initial value obtained from params
  }
  const replace = (mins, secs) => {
    pause()
    setTime(parseToSeconds(mins, secs))
  }

  return {
    isActive,
    start,
    pause,
    stop,
    replace,
    minutes: numberToString(formattedMinutes),
    seconds: numberToString(formattedSeconds)
  }
}

export default useTimer
