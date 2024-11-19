import { Session } from '../App';

type Props = {
  session: Session;
  logout: () => void;
};

export default function My({ session, logout }: Props) {
  return (
    <>
      <h3 className='text-lg font-bold'>My - {session.loginUser?.name}</h3>
      <button onClick={logout}>SignOut</button>
      <ul style={{ border: '1px solid green' }}>
        {session.cart.map((item) => (
          <li key={item.id}>
            {item.name} <small>{item.price.toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </>
  );
}
