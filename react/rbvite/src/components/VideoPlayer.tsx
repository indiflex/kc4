import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from 'react';

type Props = {
  url: string;
};

export type VideoPlayerHandler = {
  stop: () => void;
  start: () => void;
  volumnUp: (flag: number) => void;
};

function Player({ url }: Props, ref: ForwardedRef<VideoPlayerHandler>) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handler: VideoPlayerHandler = {
    stop() {
      videoRef.current?.pause();
    },
    start() {
      videoRef.current?.play();
    },
    volumnUp(flag: number) {
      if (videoRef.current) {
        try {
          videoRef.current.volume += flag;
        } catch (err) {
          console.error(err);
        }
      }
    },
  };
  useImperativeHandle(ref, () => handler);

  return (
    <div>
      <video ref={videoRef} width='100%' height='240' controls>
        <source src={url} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

const VideoPlayer = forwardRef(Player);
export default VideoPlayer;
