import { useState } from 'react';
import './App.css';
import My from './components/My';
import Button from './components/ui/Button';
import Login from './components/Login';

const SampleSession = {
  // loginUser: { id: 1, name: 'Hong' },
  loginUser: null,
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

export type LoginUser = {
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

  const login = ({ id, name }: LoginUser) => {
    setSession({ ...session, loginUser: { id, name } });
  };

  const logout = () => setSession({ ...session, loginUser: null });

  const removeCartItem = (itemid: number) => {
    setSession({
      ...session,
      cart: session.cart.filter(({ id }) => id !== itemid),
    });
  };

  return (
    <>
      {session.loginUser?.id ? (
        <My
          session={session}
          logout={logout}
          removeCartItem={removeCartItem}
          plusCount={plusCount}
        />
      ) : (
        <Login login={login} />
      )}

      <div className='card'>
        <Button
          onClick={() => setCount((count) => count + 1)}
          className='btn-primary'
        >
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
