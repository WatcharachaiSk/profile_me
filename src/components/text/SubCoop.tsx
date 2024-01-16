// import React from 'react'

import { FaReact } from 'react-icons/fa6';
import IntoMe from '../../constants/intoMe';
import { HiArrowNarrowRight } from 'react-icons/hi';

function SubCoop(props: any) {
  const setModalOpen = () => {
    props.setOpenModalPdfCoop(true);
  };
  return (
    <div>
      <h1>สหกิจศึกษา</h1>
      <p>บริษัท: {IntoMe.titleTimeOneComp}</p>
      <p className="text-slate-950">
        ตำแหน่ง: <b> {IntoMe.titleTimeOneRank}</b>
        <span>
          <FaReact size={20} color={'#3498DB '} />
        </span>
      </p>
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
        className="mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
      >
        ดูผลงานเล่ม Report PDF <HiArrowNarrowRight className="ml-2 h-3 w-3" />
      </button>
    </div>
  );
}

export default SubCoop;
