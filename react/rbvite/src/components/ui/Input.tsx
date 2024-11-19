import { ChangeEvent } from 'react';

type Props = {
  type?: string;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: number | string;
};
export default function Input({ type = 'text', id, onChange, value }: Props) {
  return (
    <input
      type={type}
      id={id}
      onChange={onChange}
      value={value}
      className='ring-1x rounded-md border px-2'
    />
  );
}
