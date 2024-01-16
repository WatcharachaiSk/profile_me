// import React from "react";
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { FaGitAlt } from 'react-icons/fa6';
import IntoMe from '../../../constants/intoMe';
import TimeLineComponent from '../../../components/TimeLineComponent';
import Education from '../../../components/Education';

function ExperienceComponents(props: any) {
  return (
    <div className="flex flex-1 flex-col bg-white w-full h-full">
      <div className="flex w-full justify-between basis-0/12  text-3xl text-gray-600">
        <div></div>
        <div>WATCHARACHAI SAMKHAN</div>
        <div></div>
      </div>
      {/* ติดต่อ */}
      <div className="flex basis-3/12  w-full">
        <div className="flex flex-1 flex-col">
          <div className="flex text-3xl text-white">
            <div className="flex flex-1">
              <div className="flex-0 bg-slate-600">
                <p className="p-1 px-5 line-clamp-1">ข้อมูลการติดต่อ</p>
              </div>
              <div className="flex flex-1 items-end">
                <div className="flex-1 h-1 bg-slate-600"></div>
              </div>
            </div>
          </div>
          <div className="flex basis-1/4 bg-white">
            <div className="flex items-center basis-1/2 bg-white">
              <AiOutlineHome size={25} />
              <div className="mx-2"> </div>
              <div className="text-base">
                <p> {IntoMe.add}</p>
                <p> {IntoMe.addP}</p>
              </div>
            </div>
          </div>
          <div className="flex basis-1/4 bg-white">
            <div className="flex items-center basis-1/2 bg-white">
              <AiOutlineMail size={25} />
              <div className="mx-2"> </div>
              <div className="text-base">
                <p> {IntoMe.email}</p>
              </div>
            </div>
          </div>
          <div className="flex basis-1/4 bg-white">
            <div className="flex items-center basis-1/2 bg-white">
              <FiPhone size={25} />
              <div className="mx-2"> </div>
              <div className="text-base">
                <p> {IntoMe.tol}</p>
              </div>
            </div>
          </div>
          <div className="flex basis-1/4 bg-white">
            <div className="flex items-center basis-1/2 bg-white">
              <FaGitAlt size={25} />
              <div className="mx-2"> </div>
              <div className="text-base">
                <a href={IntoMe.git}> {IntoMe.git}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ประสบการณ์ */}
      <div className="flex basis-9/12 w-full flex-wrap">
        <div className="flex flex-row w-full">
          {/*  */}
          <div className="flex basis-4/6 flex-col w-full">
            <div className="flex text-3xl text-white">
              <div className="flex flex-1">
                <div className="flex-0 bg-slate-600">
                  <p className="p-1 px-5 line-clamp-1">ประสบการณ์</p>
                </div>
                <div className="flex flex-1 items-end">
                  <div className="flex-1 h-1 bg-slate-600"></div>
                </div>
              </div>
            </div>
            <div className="flex  pt-5 xl:pl-0 md:pl-0 sm:pl-5">
              <TimeLineComponent handleButtonClick={props.handleButtonClick} />
            </div>
          </div>
          {/*  */}
          <div className="flex basis-3/6 flex-col w-full">
            <div className="flex flex-col">
              <div className="flex text-3xl text-white">
                <div className="flex flex-1">
                  <div className="flex-0 bg-slate-600">
                    <p className="p-1 px-5 line-clamp-1">การศึกษา</p>
                  </div>
                  <div className="flex flex-1 items-end">
                    <div className="flex-1 h-1 bg-slate-600"></div>
                  </div>
                </div>
              </div>
              <div className="flex pt-5 xl:pl-0 md:pl-0 sm:pl-5">
                <Education />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponents;
