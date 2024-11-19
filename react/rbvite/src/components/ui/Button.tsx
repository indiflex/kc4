import { ReactNode } from 'react';

type Props = {
  onClick: () => void;
  className: string;
  children: ReactNode;
};
export default function Button({
  children,
  onClick = () => {},
  className = '',
}: Props) {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
}
