import { useRef, useState } from 'react';
import './App.css';
import My from './components/My';
import Button from './components/ui/Button';
import Login, { LoginHandler } from './components/Login';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  // loginUser: null,
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

export type CartItem = {
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

  const loginRef = useRef<LoginHandler>(null);

  const plusCount = () => {
    setCount(count + 1);
  };

  const login = ({ id, name }: LoginUser) => {
    if (!id || isNaN(id) || !name) {
      loginRef.current?.focusInput();
      return;
    }
    setSession({ ...session, loginUser: { id, name } });
  };

  const logout = () => setSession({ ...session, loginUser: null });

  const saveCartItem = (cartItem: CartItem) => {
    const isAdding = !cartItem.id;
    if (isAdding) {
      cartItem.id = Math.max(...session.cart.map(({ id }) => id)) + 1;
      setSession({ ...session, cart: [...session.cart, cartItem] });
    } else {
      setSession({
        ...session,
        cart: [
          ...session.cart.map((item) =>
            item.id === cartItem.id ? cartItem : item
          ),
        ],
      });
    }
  };

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
          saveCartItem={saveCartItem}
          plusCount={plusCount}
        />
      ) : (
        <Login login={login} ref={loginRef} />
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
