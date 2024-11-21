import { FaTrashCan } from 'react-icons/fa6';
import { CartItem, Session } from '../App';
import Button from './ui/Button';
import Hello from './Hello';
import Input from './ui/Input';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';

type Props = {
  session: Session;
  logout: () => void;
  removeCartItem: (id: number) => void;
  saveCartItem: (cartItem: CartItem) => void;
  plusCount: () => void;
};

export default function My({
  session,
  logout,
  removeCartItem,
  saveCartItem,
  plusCount,
}: Props) {
  const { id, name } = session.loginUser || { id: 0, name: '' };
  const [isEditing, setEditing] = useState(false);

  const idRef = useRef<HTMLInputElement>(null);
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const addFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = itemNameRef.current?.value;
    console.log('🚀  name:', name);
    const price = Number(itemPriceRef.current?.value);
    console.log('🚀  price:', price);
    if (!name || !price) {
      return alert('Input the name & price, plz');
    }

    const id = Number(idRef.current?.value) || 0;
    saveCartItem({ id, name, price });
    setEditing(false);
  };

  const setItem = (item: CartItem) => {
    console.log('🚀  item:', item);
    setEditing(true);

    if (!idRef.current || !itemNameRef.current || !itemPriceRef.current) {
      return;
    }

    console.log('item>>', item);
    idRef.current.value = item.id.toString();
    itemNameRef.current.value = item.name;
    itemPriceRef.current.value = item.price.toString();
  };

  useEffect(() => {
    if (isEditing) {
      itemNameRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <>
      <Hello name={name} age={id} plusCount={plusCount} />

      <button onClick={logout} className='btn mb-3'>
        SignOut
      </button>
      <ul className='space-y-2 border border-green-300 p-2'>
        {session.cart.map((item) => (
          <li key={item.id} className='grid grid-cols-3 justify-around'>
            {item.name}
            <small>{item.price.toLocaleString()}</small>
            <div className='grid grid-cols-2 gap-3'>
              <Button
                onClick={() => removeCartItem(item.id)}
                className='btn-danger py-0'
              >
                <FaTrashCan className='text-white' />
              </Button>
              <Button onClick={() => setItem(item)} className='group'>
                <FaPencilAlt className='text-slate-700 group-hover:text-white' />
              </Button>
            </div>
          </li>
        ))}
        <li className='grid grid-cols-3 justify-around'>
          {isEditing ? (
            <form onSubmit={addFormHandler} className='flex gap-2'>
              <Input type='hidden' ref={idRef} />
              <Input ref={itemNameRef} placeholder='상품명...' />
              <Input type='number' ref={itemPriceRef} placeholder='가격...' />
              <Button type='submit'>Save</Button>
            </form>
          ) : (
            <Button onClick={() => setEditing(true)} className='col-span-3'>
              + Add
            </Button>
          )}
        </li>
      </ul>
    </>
  );
}
