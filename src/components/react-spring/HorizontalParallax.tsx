import { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import styles from './styles.module.css';
import { ImgCoppArr } from '../../configs/img-coop';
import _ from 'lodash';
import RightDoubleTapLottie from '../react-lottie/RightDoubleTapLottie';

interface PageProps {
  offset: number;
  gradient: string;
  onClick: () => void;
  img?: any;
}

const Page = ({ offset, gradient, onClick, img }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin}></div>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>
    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
      <div className="flex flex-1 h-full items-center">
        {/* <div className="flex basis-0">{offset}</div> */}
        <div className="flex flex-1 m-1">
          <div className="flex basis-1/2 items-center ">
            <div className="flex bottom-3/4">
              <img className="object-contain" style={{ width: '600px', height: '600px' }} src={img} alt="..." />
            </div>
            <div className="flex bottom-1/4 w-full">
              <RightDoubleTapLottie />
            </div>
          </div>
          <div className="flex basis-1/2"></div>
        </div>
      </div>
    </ParallaxLayer>
  </>
);

function HorizontalParallax() {
  const parallax = useRef<IParallax>(null);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <div style={{ background: '#dfdfdf' }}>
      <Parallax className={styles.container} ref={parallax} pages={ImgCoppArr.length} horizontal>
        {_.map(ImgCoppArr, (item, idx) => {
          return (
            <Page
              key={idx}
              offset={idx}
              gradient="react"
              img={item}
              onClick={() => {
                if (idx != ImgCoppArr.length - 1) {
                  scroll(idx + 1);
                } else {
                  scroll(0);
                }
              }}
            />
          );
        })}
        {/* <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} /> */}
      </Parallax>
    </div>
  );
}

export default HorizontalParallax;
