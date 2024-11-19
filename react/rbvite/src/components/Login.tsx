import { ChangeEvent, FormEvent, useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import { LoginUser } from '../App';

type Props = {
  login: (user: LoginUser) => void;
};

export default function Login({ login }: Props) {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');

  console.log('******', id, name);

  const changeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(+e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !name) {
      return alert('Input the id and name, plz..');
    }
    login({ id, name });
  };

  return (
    <>
      <form onSubmit={submitHandler} className='flex gap-2 border p-3'>
        <div>
          <label htmlFor='loginId'>ID:</label>
          <Input type='number' id='loginId' onChange={changeId} value={id} />
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
