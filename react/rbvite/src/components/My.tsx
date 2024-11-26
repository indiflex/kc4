import { useSession } from '../hooks/session-context';
import Login from './Login';
import Profile from './Profile';

export default function My() {
  const { session } = useSession();

  return <>{session.loginUser?.id ? <Profile /> : <Login />}</>;
}
