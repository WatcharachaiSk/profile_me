// import React from 'react'

import IntoMe from '../constants/intoMe';

function Education() {
  return (
    <div className="flex flex-col">
      <div className="mb-5">
        <b className="text-lg">
          {IntoMe.titleEducOneTh} ({IntoMe.titleEducOneEn}), {IntoMe.titleEducOneGPA}
        </b>
        <p className="indent-5">
          {IntoMe.subEducOneTh} ({IntoMe.titleEducOneEn})
        </p>
        <p className="indent-5">ระดับ {IntoMe.rankEducOne}</p>
        <p className="indent-5">{IntoMe.yearEducOne}</p>
      </div>
      <div>
        <b className="text-lg">
          {IntoMe.titleEducTwoTh} ({IntoMe.titleEducTwoEn}), {IntoMe.titleEducTwoGPA}
        </b>
        <p className="indent-5">{IntoMe.subEducTwoTh}</p>
        <p className="indent-5">({IntoMe.subEducTwoEn})</p>
        <p className="indent-5">ระดับ {IntoMe.rankEducTwo}</p>
        <p className="indent-5">{IntoMe.yearEducTwo}</p>
      </div>
    </div>
  );
}

export default Education;
