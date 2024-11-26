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

// eslint-disable-next-line react-refresh/only-export-components
export const useCounter = () => {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error('CounterContext is null!!');
  return ctx;
};
