import './App.css';
import Button from './components/ui/Button';
import { useCounter } from './hooks/counter-context';
import My from './components/My';
import { SessionProvider } from './hooks/session-context';

function App() {
  // const [count, setCount] = useState(0);
  const { count, plusCount } = useCounter();

  return (
    <>
      <SessionProvider>
        <My />
      </SessionProvider>

      <div className='card'>
        <Button onClick={plusCount} className='btn-primary'>
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
