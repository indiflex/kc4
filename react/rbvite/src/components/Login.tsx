import { FormEvent, useEffect, useRef, useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import { LoginUser } from '../App';

type Props = {
  login: (user: LoginUser) => void;
};

export default function Login({ login }: Props) {
  const idRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Number(idRef.current?.value);
    if (!id || isNaN(id) || !name) {
      return alert('Input the id and name, plz..');
    }
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
          <Input
            id='loginId'
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
            value={name}
          />
        </div>

        <Button type='submit'>Sign In</Button>
      </form>
    </>
  );
}
