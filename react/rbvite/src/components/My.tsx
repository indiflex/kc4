import { Session } from '../App';

type Props = {
  session: Session;
  logout: () => void;
};

export default function My({ session, logout }: Props) {
  return (
    <>
      <h3 className='text-lg font-bold'>My - {session.loginUser?.name}</h3>
      <button onClick={logout} className='btn mb-3'>
        SignOut
      </button>
      <ul className='border border-green-300'>
        {session.cart.map((item) => (
          <li key={item.id} className='flex justify-around'>
            {item.name} <small>{item.price.toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </>
  );
}
