import { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import './animation.css';
import { IMG } from '../../configs/img-index';
import { GIFs } from '../../configs/img-index copy';
import DevBluLottie from '../react-lottie/DevBluLottie';
import ChevLottie from '../react-lottie/ChevLottie';
import ChevWhiteeJsonLottie from '../react-lottie/ChevWhiteeJsonLottie';

interface PageProps {
  offset: number;
}
// Little helpers ...
const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

function VerticalParallax(props: PageProps) {
  const parallax = useRef<IParallax>(null!);
  return (
    <div className="w-full h-screen" style={{ top: 0, left: 0, width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#000000' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#000000' }} />
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        {/* 1 */}
        <ParallaxLayer
          offset={1.1}
          speed={0.9}
          style={{
            pointerEvents: 'none',
          }}
        >
          <img src={IMG.typeOrm} style={{ width: '13%', marginLeft: '71%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.3}
          speed={0.7}
          style={{
            pointerEvents: 'none',
          }}
        >
          <img src={IMG.jwt} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={0.6}
          style={{
            pointerEvents: 'none',
          }}
        >
          <img src={IMG.pg} style={{ width: '7%', marginLeft: '65%' }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          speed={0.6}
          style={{
            pointerEvents: 'none',
          }}
        >
          <img src={IMG.mySQL} style={{ width: '12%', marginLeft: '78%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.7}
          speed={0.7}
          style={{
            pointerEvents: 'none',
          }}
        >
          <img src={IMG.docker} style={{ width: '10%', marginLeft: '65%' }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.7}
          speed={0.9}
          style={{
            pointerEvents: 'none',
          }}
        >
          <img src={IMG.pm2} style={{ width: '12%', marginLeft: '78%', marginTop: '30px' }} />
        </ParallaxLayer>
        {/*  */}
        <ParallaxLayer
          onClick={() => parallax.current.scrollTo(2)}
          offset={1}
          speed={0.3}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={IMG.nestJSLogo} style={{ width: '40%', marginRight: '35%' }} />
        </ParallaxLayer>

        {/* 2 */}

        <ParallaxLayer
          offset={2.15}
          speed={0.2}
          style={{
            pointerEvents: 'none',
          }}
        >
          <img src={IMG.vite} style={{ width: '10%', marginLeft: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.4}
          speed={0.3}
          style={{
            pointerEvents: 'none',
          }}
        >
          <img src={IMG.tailwind} style={{ width: '10%', marginLeft: '12%' }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.4}
          speed={0.3}
          style={{
            pointerEvents: 'none',
          }}
        >
          <img src={IMG.bootstrap} style={{ width: '15%', marginLeft: '28%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={0.4}
          style={{
            pointerEvents: 'none',
          }}
        >
          <img src={IMG.lottieFiles} style={{ width: '12.5%', marginLeft: '12%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.59}
          speed={0.5}
          style={{
            pointerEvents: 'none',
          }}
        >
          <h4 style={{ width: '12.5%', marginLeft: '28%', fontSize: 50 }} className="text-white">
            Moment.js
          </h4>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.75}
          speed={0.3}
          style={{
            pointerEvents: 'none',
          }}
        >
          <img src={IMG.lodash} style={{ width: '9%', marginLeft: '20%' }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <img src={IMG.vueJs} style={{ width: '20%', marginLeft: '35%', marginTop: '-20%' }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <img src={IMG.react} style={{ width: '30%', marginLeft: '35%', marginTop: '20%' }} />
        </ParallaxLayer>

        {/* 0 */}
        <ParallaxLayer
          className="text-white"
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <DevBluLottie w={300} h={300} />
          <h1 className="mt-5">Hello Tools</h1>
          <div className="mt-5">
            <ChevWhiteeJsonLottie w={100} h={100} />
          </div>
        </ParallaxLayer>

        {/*  */}
      </Parallax>
    </div>
  );
}

export default VerticalParallax;
