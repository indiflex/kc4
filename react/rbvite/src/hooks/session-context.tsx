/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useRef,
  useState,
} from 'react';
import { LoginHandler } from '../components/Login';

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

const SampleSession: Session = {
  loginUser: { id: 1, name: 'Hong' },
  // loginUser: null,
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

type ContextProps = {
  session: Session;
  loginRef: RefObject<LoginHandler>;
  login: ({ id, name }: LoginUser) => void;
  logout: () => void;
  saveCartItem: (cartItem: CartItem) => void;
  removeCartItem: (itemid: number) => void;
};

const SessionContext = createContext<ContextProps | null>(null);

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>(SampleSession);

  const loginRef = useRef<LoginHandler>(null);

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
    <SessionContext.Provider
      value={{ session, loginRef, login, logout, saveCartItem, removeCartItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error('SessionContext is null!');

  return ctx;
};
