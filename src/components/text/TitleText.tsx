// import React from 'react'

import { TitleTextProps } from '../../types/title-text-props';

function TitleText(props: TitleTextProps) {
  return (
    <div className="flex justify-start mt-1 " style={{ fontFamily: 'THSarabunNew-Bold', fontSize: 30 }}>
      <div>
        <b className="text-white">{props.title}</b>
      </div>
    </div>
  );
}

export default TitleText;
