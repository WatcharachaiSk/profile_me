import Lottie from 'react-lottie';
import { JSONS } from '../../configs/json-index';


function RightDoubleTapLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSONS.RightDoubleTap,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='w-full h-full'>
      <Lottie options={defaultOptions} speed={0.5} />
    </div>
  );
}

export default RightDoubleTapLottie;
