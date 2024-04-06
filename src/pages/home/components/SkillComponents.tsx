// import React from "react";

import ChevLottie from '../../../components/react-lottie/ChevLottie';
import SubTitleText from '../../../components/text/SubTitleText';
import TitleText from '../../../components/text/TitleText';
import { IMG } from '../../../configs/img-index';
import IntoMe from '../../../constants/intoMe';

interface propsType {
  handleButtonClick?: void | any;
}

function SkillComponents(props: propsType) {
  return (
    <div className="flex flex-col bg-gray-600 w-full h-full p-2 overscroll-contain">
      {/* Skill */}
      <div className="flex flex-row justify-center">
        <img className="object-contain h-40 w-42" src={IMG.photome} />
      </div>
      {/*  */}

      <TitleText title={'ข้อมูลส่วนตัว'} />

      <div className="text-white text-2xl text-start indent-5">
        <p>
          {IntoMe.titleName} {IntoMe.fName} {IntoMe.lName} ชื่อเล่น {IntoMe.nName}
        </p>
        <p> {IntoMe.birthday}</p>
      </div>

      <TitleText title={'ทักษะ และ ความสามารถ'} />
      <SubTitleText title={'Computer Languages'} />

      <div className="text-white text-xl">
        <ul className="list-disc indent-8">
          <li> - {IntoMe.js}</li>
          <li> - {IntoMe.basic}</li>
        </ul>
      </div>

      <TitleText title={'Software Packages & Framework'} />
      <SubTitleText title={'Frontend'} />
      <div className="text-white text-xl">
        <ul className="list-disc indent-8">
          <li> - {IntoMe.feReact}</li>
          <li> - {IntoMe.feVue}</li>
        </ul>
      </div>
      <SubTitleText title={'Backend'} />
      <div className="text-white text-xl">
        <ul className="list-disc indent-8">
          <li> - {IntoMe.beNode}</li>
          <li> - {IntoMe.beSocket}</li>
          <li> - {IntoMe.beDocker}</li>
        </ul>
      </div>
      <SubTitleText title={'Database'} />
      <div className="text-white text-xl">
        <ul className="list-disc indent-8">
          <li> - {IntoMe.db}</li>
        </ul>
      </div>
      <SubTitleText title={'Tools'} />
      <div className="flex flex-0 text-white text-xl justify-center">
        {/* <li> - {IntoMe.tVs}</li>
          <li> - {IntoMe.tDocker}</li>
          <li> - {IntoMe.tAS}</li>
          <li> - {IntoMe.tGit}</li>
          <li> - {IntoMe.tPost}</li>
          <li> - {IntoMe.tDB}</li> */}
        <button
          onClick={() => {
            props.handleButtonClick('tools');
          }}
          className="flex mt-2 h-10 w-52 justify-between items-center bg-white hover:bg-slate-500 text-slate-700 hover:text-white"
        >
          <div className="flex basis-1/2 w-full justify-center">
            <h3>Tools</h3>
          </div>
          <div className="flex">
            <ChevLottie w={50} h={30} />
          </div>
        </button>
      </div>
    </div>
  );
}

export default SkillComponents;
