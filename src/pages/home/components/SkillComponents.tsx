// import React from "react";

import SubTitleText from '../../../components/text/SubTitleText';
import TitleText from '../../../components/text/TitleText';
import { IMG } from '../../../configs/img-index';
import IntoMe from '../../../constants/intoMe';

function SkillComponents() {
  return (
    <div className="flex flex-col bg-gray-600 w-full h-full p-2 overscroll-contain">
      {/* Skill */}
      <div className="flex flex-row justify-center">
        <img className="object-contain h-40 w-42" src={IMG.photome} />
      </div>
      {/*  */}
      <TitleText title={'ข้อมูลส่วนตัว'} />

      <div className="text-white text-lg text-center">
        <p>
          {IntoMe.titleName} {IntoMe.fName} {IntoMe.lName} ชื่อเล่น {IntoMe.nName} <br /> {IntoMe.birthday}
        </p>
      </div>

      <TitleText title={'ทักษะ และ ความสามารถ'} />
      <SubTitleText title={'Computer Languages'} />

      <div className="text-white text-sm">
        <ul className="list-disc">
          <li> - {IntoMe.js}</li>
          <li> - {IntoMe.basic}</li>
        </ul>
      </div>

      <TitleText title={'Software Packages & Framework'} />
      <SubTitleText title={'Frontend'} />
      <div className="text-white text-sm">
        <ul className="list-disc">
          <li> - {IntoMe.feReact}</li>
          <li> - {IntoMe.feVue}</li>
        </ul>
      </div>
      <SubTitleText title={'Backend'} />
      <div className="text-white text-sm">
        <ul className="list-disc">
          <li> - {IntoMe.beNode}</li>
          <li> - {IntoMe.beSocket}</li>
          <li> - {IntoMe.beDocker}</li>
        </ul>
      </div>
      <SubTitleText title={'Database'} />
      <div className="text-white text-sm">
        <ul className="list-disc">
          <li> - {IntoMe.db}</li>
        </ul>
      </div>
      <SubTitleText title={'Tools'} />
      <div className="text-white text-sm">
        <ul className="list-disc">
          <li> - {IntoMe.tVs}</li>
          <li> - {IntoMe.tDocker}</li>
          <li> - {IntoMe.tAS}</li>
          <li> - {IntoMe.tGit}</li>
          <li> - {IntoMe.tPost}</li>
          <li> - {IntoMe.tDB}</li>
        </ul>
      </div>
    </div>
  );
}

export default SkillComponents;
