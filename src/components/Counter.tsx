import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContexts'

export function Counter() {
  const { counter, incrementCounter } = useContext(CounterContext)

  return (
    <div>
      <h2>Counter with Context API</h2>
      <button onClick={incrementCounter}>
        count is {counter}
      </button>
  </div>
  )
}