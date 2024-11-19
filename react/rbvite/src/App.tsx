import { useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import My from './components/My';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

type LoginUser = {
  id: number;
  name: string;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
};

export type Session = {
  loginUser: LoginUser | null;
  cart: CartItem[];
};

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  const plusCount = () => {
    setCount(count + 1);
  };

  const logout = () => setSession({ ...session, loginUser: null });

  return (
    <>
      <Hello name='Jade' age={33} plusCount={plusCount} />
      <My session={session} logout={logout} />
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
