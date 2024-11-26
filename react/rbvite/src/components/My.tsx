import { useSession } from '../hooks/session-context';
import Login from './Login';
import Profile from './Profile';
import { useInterval, useTimeout } from '../hooks/timer-hooks';

export default function My() {
  const { session } = useSession();

  useTimeout(() => console.log('X'), 1000);
  useInterval((name) => console.log(`Hello, ${name}!!!`), 1000, ['Hong']);

  return <>{session.loginUser?.id ? <Profile /> : <Login />}</>;
}
