import { FormEvent, useEffect, useRef, useState } from 'react';
import { CartItem } from '../hooks/session-context';
import Input from './ui/Input';
import Button from './ui/Button';

type Props = {
  cartItem: CartItem | null;
  saveCartItem: (cartItem: CartItem) => void;
  toggleEditing: () => void;
};

export default function CartItemEditor({
  cartItem,
  saveCartItem,
  toggleEditing,
}: Props) {
  const idRef = useRef<HTMLInputElement>(null);
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const [hasDirty, setDirty] = useState(false);

  const checkDirty = () => {
    console.log('xx=', itemPriceRef.current?.value, cartItem?.price);
    setDirty(
      itemNameRef.current?.value !== cartItem?.name ||
        itemPriceRef.current?.value != cartItem?.price
    );
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = itemNameRef.current?.value;
    // console.log('🚀  name:', name);
    const price = Number(itemPriceRef.current?.value);
    // console.log('🚀  price:', price);
    if (!name || !price) {
      return alert('Input the name & price, plz');
    }

    const id = Number(idRef.current?.value) || 0;
    saveCartItem({ id, name, price });
    toggleEditing();
  };

  useEffect(() => {
    // console.log('item>>', cartItem);
    itemNameRef.current?.focus();

    if (
      !cartItem ||
      !idRef.current ||
      !itemNameRef.current ||
      !itemPriceRef.current
    ) {
      return;
    }

    idRef.current.value = cartItem.id.toString();
    itemNameRef.current.value = cartItem.name;
    itemPriceRef.current.value = cartItem.price.toString();
  }, [cartItem]);

  return (
    <>
      <form onSubmit={submitHandler} className='flex gap-2'>
        <Input type='hidden' ref={idRef} />
        <Input
          ref={itemNameRef}
          onChange={checkDirty}
          placeholder='상품명...'
        />
        <Input
          type='number'
          onChange={checkDirty}
          ref={itemPriceRef}
          placeholder='가격...'
        />
        {hasDirty && (
          <div className='flex gap-3'>
            <Button type='reset' onClick={toggleEditing}>
              Cancel
            </Button>
            <Button type='submit'>Save</Button>
          </div>
        )}
      </form>
    </>
  );
}
