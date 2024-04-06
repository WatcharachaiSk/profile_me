// import React from 'react'

import { FaReact } from 'react-icons/fa6';
import IntoMe from '../../constants/intoMe';
import { HiArrowNarrowRight } from 'react-icons/hi';
import ReactLottie from '../react-lottie/ReactLottie';

function SubCoop(props: any) {
  const setModalOpen = () => {
    props.setOpenModalPdfCoop(true);
  };
  return (
    <div className="text-slate-950">
      <h1>สหกิจศึกษา</h1>
      <p style={{ fontSize: 28 }}>บริษัท: {IntoMe.titleTimeOneComp}</p>
      <div className="flex items-center">
        <div>
          <p style={{ fontSize: 26 }}>
            ตำแหน่ง: <b> {IntoMe.titleTimeOneRank}</b>
          </p>
        </div>
        <div>
          <ReactLottie w={40} h={40} />
        </div>
      </div>

      <div style={{ fontSize: 22 }}>
        <p className="indent-5">- {IntoMe.delTimeTreeComp}</p>
        <p className="indent-5">
          - เข้าร่วมการประกวดโครงงานสหกิจศึกษา ประจำภาคการศึกษา 2/2565 <b>(ด้านวิทยาศาสตร์และเทคโนโลยี)</b>
        </p>
        <p>
          ชื่อผลงาน: <b>แอปพลิเคชันตรวจสอบสถานะครุภัณฑ์ผ่านการสแกนคิวอาร์โค้ด </b>
        </p>
        <p>
          ผลการประกวด: <b>รางวัลชมเชย </b>
        </p>
        <button
          onClick={() => {
            setModalOpen();
          }}
          className="px-2 py-1 mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded"
        >
          ดูผลงานเล่ม Report PDF <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

export default SubCoop;
