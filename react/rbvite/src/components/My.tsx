import { FaCirclePlay, FaCircleStop, FaTrashCan } from 'react-icons/fa6';
import { CartItem, Session } from '../App';
import Button from './ui/Button';
import Hello from './Hello';
import { useRef, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import CartItemEditor from './CartItemEditor';
import VideoPlayer, { VideoPlayerHandler } from './VideoPlayer';
import { ImVolumeDecrease, ImVolumeIncrease } from 'react-icons/im';

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
  const [cartItem, setCartItem] = useState<CartItem | null>(null);

  const videoPlayerRef = useRef<VideoPlayerHandler>(null);

  const toggleEditing = () => setEditing((pre) => !pre);

  const setItem = (item: CartItem) => {
    console.log('🚀  item:', item);
    toggleEditing();
    setCartItem(item);
  };

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
            <CartItemEditor
              cartItem={cartItem}
              saveCartItem={saveCartItem}
              toggleEditing={toggleEditing}
            />
          ) : (
            <Button onClick={() => setEditing(true)} className='col-span-3'>
              + Add
            </Button>
          )}
        </li>
      </ul>

      <div className='mx-auto w-96'>
        <VideoPlayer
          // url='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
          url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
          ref={videoPlayerRef}
        />

        <div className='mt-2 flex w-full justify-center gap-5'>
          <Button
            onClick={() => videoPlayerRef.current?.start()}
            className='px-5 py-2'
          >
            <FaCirclePlay />
          </Button>
          <Button
            onClick={() => videoPlayerRef.current?.stop()}
            className='px-5 py-2'
          >
            <FaCircleStop />
          </Button>
          <Button
            onClick={() => videoPlayerRef.current?.volumnUp(0.1)}
            className='px-5 py-2'
          >
            <ImVolumeIncrease />
          </Button>
          <Button
            onClick={() => videoPlayerRef.current?.volumnUp(-0.1)}
            className='px-5 py-2'
          >
            <ImVolumeDecrease />
          </Button>
        </div>
      </div>
    </>
  );
}
