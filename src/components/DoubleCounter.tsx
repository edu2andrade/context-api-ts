import { useContext } from "react"
import { CounterContext } from "../contexts/CounterContexts"

export function DoubleCounter() {
  const { doubleCounter } = useContext(CounterContext);

  return (
    <h4>Double: {doubleCounter}</h4>
  )
}