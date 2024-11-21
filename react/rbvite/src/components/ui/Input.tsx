import { ChangeEvent, ForwardedRef, forwardRef, RefObject } from 'react';

type Props = {
  type?: string;
  id?: string;
  ref?: RefObject<HTMLInputElement>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: number | string;
  placeholder?: string;
};
const Input = forwardRef(
  (
    { type = 'text', id, onChange, value, placeholder }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        type={type}
        id={id}
        ref={ref}
        onChange={onChange}
        value={value}
        className='ring-1x rounded-md border px-2'
        placeholder={placeholder}
      />
    );
  }
);

Input.displayName = 'Input';
export default Input;
