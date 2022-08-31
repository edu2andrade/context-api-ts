import './App.css'
import { Counter } from './components/Counter'
import { DoubleCounter } from './components/DoubleCounter'
import { CounterContextProvider } from './contexts/CounterContexts'

export function App() {

  return (
    <CounterContextProvider>
      <Counter />
      <DoubleCounter />
    </CounterContextProvider>
  )
}
