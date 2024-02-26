import Lottie from 'react-lottie';
import { JSONS } from '../../configs/json-index';

interface PageProps {
  w: number;
  h: number;
}
function DevLottie(props: PageProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSONS.DevJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={props.h} width={props.w} />
    </>
  );
}

export default DevLottie;
