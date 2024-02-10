import Lottie from 'react-lottie';
import { JSONS } from '../../configs/json-index';

interface PageProps {
  w: number;
  h: number;
}
function ReactLottie(props: PageProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSONS.ReactJson,
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

export default ReactLottie;
