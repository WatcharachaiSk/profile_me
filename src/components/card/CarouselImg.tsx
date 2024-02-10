// import React from 'react'

import { Carousel } from 'flowbite-react';
import { ImgCoppArr } from '../../configs/img-coop';
import _ from 'lodash';
import {} from 'react-icons/bs';

// ImgCoppArr;

function CarouselImg() {
  return (
    <div className="h-full w-full p-5">
      <Carousel slideInterval={5000}>
        {_.map(ImgCoppArr, (item, idx) => {
          return <img key={idx} className="w-full h-full object-contain" src={item} alt="..." />;
        })}
      </Carousel>
    </div>
  );
}

export default CarouselImg;
