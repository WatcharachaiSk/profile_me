// import React from 'react'

import { TitleTextProps } from '../../types/title-text-props';

function SubTitleText(props: TitleTextProps) {
  return (
    <div className="flex justify-center text-base">
      <div>
        <p className="text-white">{props.title}</p>
      </div>
    </div>
  );
}

export default SubTitleText;
