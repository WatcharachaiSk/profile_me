import React from 'react';
import IntoMe from '../../constants/intoMe';
import ReactLottie from '../react-lottie/ReactLottie';
import { HiArrowNarrowRight } from 'react-icons/hi';
import NodeLottie from '../react-lottie/NodeLottie';
import { BsFolderSymlink } from 'react-icons/bs';
function SubProj(props: any) {
  const setModalOpen = () => {
    props.setOpenModalPdfProj(true);
  };
  return (
    <div>
      <h1>ปริญญานิพนธ์</h1>
      <h3>หัวข้อ: {IntoMe.titleTimeTwoProj}</h3>
      <div className="flex items-center">
        <div>
          <p className="text-slate-950">
            ตำแหน่ง: <b> {IntoMe.titleTimeTwoRank}</b>
          </p>
        </div>
        <div className="flex mx-5">
          <NodeLottie w={50} h={50} />
          <div className="mx-3"></div>
          <ReactLottie w={40} h={40} />
        </div>
      </div>
      <p className="">
        เป็นระบบจัดการและติดตามสถานะครุภัณฑ์ ผ่านการ สแกนคิวอาร์โค้ดผ่านทางมือถือ
        โดยสามารถออกคิวอาร์โค้ดได้ผ่านทางเว็บไซต์{' '}
      </p>
      <p className="indent-5">
        - ออกแบบพัฒนา API และ Database, NodeJS(Express), MySQL [
        <span
          onClick={() => {
            window.open('https://github.com/WatcharachaiSk/BE_Qr');
          }}
        >
          <BsFolderSymlink color={'#bf0705'} size={20} />
        </span>
        ]
      </p>
      <p className="indent-10">- Deploy on Ubuntu20.04, Nginx, PM2</p>
      <p className="indent-5">
        - Front End (Web) ระบบจัดการข้อมูลพื้นฐาน คิวอาร์โค้ดครุภัณฑ์ และ ข้อมูลผู้ใช้งาน [
        <span
          onClick={() => {
            window.open('https://github.com/WatcharachaiSk/AssetsKKCWeb');
          }}
        >
          <BsFolderSymlink color={'#7eccec'} size={20} />
        </span>
        ]
      </p>
      <p className="indent-5">
        - Front End (Mobile Application) ระบบสแกนคิวอาร์โค้ดครุภัณฑ์เพื่อตรวจสอบสถานะ [{' '}
        <span
          onClick={() => {
            window.open('https://github.com/WatcharachaiSk/AssetsKKC');
          }}
        >
          <BsFolderSymlink color={'#244388'} size={20} />
        </span>
        ]
      </p>

      <button
        onClick={() => {
          setModalOpen();
        }}
        className="mt-2 mr-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
      >
        ดูผลงานเล่ม Report PDF <HiArrowNarrowRight className="ml-2 h-3 w-3" />
      </button>
      <button
        onClick={() => {
          setModalOpen();
        }}
        className="mt-2 bg-transparent hover:bg-emerald-500 text-emerald-700 font-semibold hover:text-white py-1 px-2 border border-emerald-500 hover:border-transparent rounded"
      >
        ดูผลงานเล่ม Manual PDF <HiArrowNarrowRight className="ml-2 h-3 w-3" />
      </button>
    </div>
  );
}

export default SubProj;
