import { createContext, ReactNode, useEffect, useState } from "react";

type CounterContextType = {
  counter: number;
  doubleCounter: number;
  setCounter: (newState: number) => void;
  incrementCounter: () => void;
}

const initialValue = {
  counter: 0,
  doubleCounter: 0,
  setCounter: () => { },
  incrementCounter: () => { }
}

interface CounterContextProps {
  children: ReactNode;
}

export const CounterContext = createContext<CounterContextType>(initialValue);

export const CounterContextProvider = ({ children }: CounterContextProps) => {
  const [counter, setCounter] = useState(initialValue.counter)
  const [doubleCounter, setDoubleCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter + 1)
  }

  useEffect(() => {
    setDoubleCounter(counter * 2)
  }, [counter])

  return (
    <CounterContext.Provider value={{
      counter,
      setCounter,
      doubleCounter,
      incrementCounter
    }}>
      {children}
    </CounterContext.Provider>
  )
}