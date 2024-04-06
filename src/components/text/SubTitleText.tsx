// import React from 'react'

import { TitleTextProps } from '../../types/title-text-props';

function SubTitleText(props: TitleTextProps) {
  return (
    <div className="flex justify-start indent-5" style={{ fontFamily: 'THSarabunNew-Bold', fontSize: 25 }}>
      <div>
        <b className="text-white">{props.title}</b>
      </div>
    </div>
  );
}

export default SubTitleText;
