/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useContext, useState } from 'react';

type ContextProps = {
  count: number;
  plusCount: () => void;
};

const CounterContext = createContext<ContextProps | null>(null);

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  const plusCount = () => setCount((pre) => pre + 1);

  return (
    <CounterContext.Provider value={{ count, plusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error('CounterContext is null!!');
  return ctx;
};

export const useCount = () => {
  const [count, setCount] = useState(0);
  const plusCount = () => setCount((count) => count + 1);
  const minusCount = () => setCount((count) => count - 1);

  return [count, plusCount, minusCount];
};
