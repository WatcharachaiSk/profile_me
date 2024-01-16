// import React from 'react'

import { TitleTextProps } from '../../types/title-text-props';

function TitleText(props: TitleTextProps) {
  return (
    <div className="flex justify-center mt-1 text-lg">
      <div>
        <p className="text-white">{props.title}</p>
      </div>
    </div>
  );
}

export default TitleText;
