import {
  FormEvent,
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import { LoginUser } from '../App';

type Props = {
  login: (user: LoginUser) => void;
};

export type LoginHandler = {
  focusInput: () => void;
};

function Login({ login }: Props, ref: ForwardedRef<LoginHandler>) {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handler: LoginHandler = {
    focusInput: () => {
      alert('Input the id and name, plz..');
      idRef.current?.focus();
    },
  };
  useImperativeHandle(ref, () => handler);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Number(idRef.current?.value);
    const name = nameRef.current?.value || '';

    login({ id, name });
  };

  useEffect(() => {
    idRef.current?.focus();
  }, []);

  return (
    <>
      <form onSubmit={submitHandler} className='flex gap-2 border p-3'>
        <div>
          <label htmlFor='loginId'>ID:</label>
          <input type='number' id='loginId' ref={idRef} />
        </div>

        <div>
          <label htmlFor='loginId'>Name:</label>
          <Input id='loginId' ref={nameRef} />
        </div>

        <Button type='submit'>Sign In</Button>
      </form>
    </>
  );
}

const LoginImpl = forwardRef(Login);
export default LoginImpl;
