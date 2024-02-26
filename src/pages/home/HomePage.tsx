// import NavBar from '../../components/navber/NavBar';
import { useSpring, animated } from '@react-spring/web';
import ExperienceComponents from './components/ExperienceComponents';
import SkillComponents from './components/SkillComponents';
import { useRef, useState } from 'react';
import CarouselImg from '../../components/card/CarouselImg';
import SubCoop from '../../components/text/SubCoop';
import PdfViewer from '../../components/preview/PdfViewer';
import { PDF } from '../../configs/pdf-index';
import HorizontalParallax from '../../components/react-spring/HorizontalParallax';
import RightDoubleTapLottie from '../../components/react-lottie/RightDoubleTapLottie';
import VerticalParallax from '../../components/react-spring/VerticalParallax';
import SubProj from '../../components/text/SubProj';
import ReactPlayer from 'react-player';
import SubWork from '../../components/text/SubWork';
import DevLottie from '../../components/react-lottie/DevLottie';
import ChevLottie from '../../components/react-lottie/ChevLottie';

// import React from "react";

function HomePage() {
  const [openModalPdfCoop, setOpenModalPdfCoop] = useState(false);
  const [openModalPdfProj, setOpenModalPdfProj] = useState(false);
  const [openModalPdfProjMa, setOpenModalPdfProjMa] = useState(false);

  // สร้าง ref เพื่ออ้างอิงไปยัง element ที่ต้องการ scroll ไป
  const scrollCoopRef = useRef<any>(null);
  const scrollProjRef = useRef<any>(null);
  const scrollWorkRef = useRef<any>(null);
  const scrollParallaxRef = useRef<any>(null);

  // ฟังก์ชันที่จะถูกเรียกเมื่อกดปุ่ม
  const handleButtonClick = (isScroll: string) => {
    // ให้ใช้ method scrollIntoView() บน ref.current
    console.log('isScroll is ', isScroll);

    if (isScroll == 'coop') {
      scrollCoopRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (isScroll == 'proj') {
      scrollProjRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (isScroll == 'work') {
      scrollWorkRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (isScroll == 'tools') {
      scrollParallaxRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [showAnimation, setShowAnimation] = useState(false);
  const propsSpring = useSpring({
    flex: true,
    opacity: showAnimation ? 1 : 0.2,
    transform: `translateX(${showAnimation ? 0 : 0}px)`,
    from: { opacity: 0.5, transform: 'translateX(0px)' },
  });
  const handleScrollCoop = () => {
    if (scrollCoopRef.current) {
      // ตรวจสอบว่า scroll อยู่ภายใน div หรือไม่
      // console.log('window.scrollY is', window.scrollY);
      // console.log('scrollCoopRef.current.offsetTop is', scrollCoopRef.current.offsetTop);

      const isInsideDiv =
        window.scrollY >= scrollCoopRef.current.offsetTop - 200 &&
        window.scrollY <= scrollCoopRef.current.offsetTop + scrollCoopRef.current.offsetHeight;

      // ถ้า scroll อยู่ภายใน div ให้แสดง animation
      setShowAnimation(isInsideDiv);
    }
  };
  // ตั้งค่าให้ handleScroll ทำงานเมื่อมี scroll
  window.addEventListener('scroll', handleScrollCoop);
  return (
    <div className="bg-white flex flex-row w-full h-fit flex-wrap">
      <PdfViewer pdfUrl={PDF.pdfCoop} openModal={openModalPdfCoop} setOpenModal={setOpenModalPdfCoop} />
      <PdfViewer pdfUrl={PDF.pdfPrApp} openModal={openModalPdfProj} setOpenModal={setOpenModalPdfProj} />
      <PdfViewer pdfUrl={PDF.pdfPrMa} openModal={openModalPdfProjMa} setOpenModal={setOpenModalPdfProjMa} />

      <div className="flex xl:basis-1/4 md:basis-2/4 sm-flex-1 w-full h-full overscroll-contain">
        <SkillComponents />
      </div>
      <div className="flex xl:basis-3/4 md:basis-2/4 sm-flex-1  w-full h-fit">
        <ExperienceComponents handleButtonClick={handleButtonClick} />
      </div>
      {/*  */}
      <div className="flex mt-10 flex-col w-full">
        {/* ตำแหน่งที่ต้องการ scroll ไป */}
        <div ref={scrollCoopRef} className="felx h-screen w-full flex-wrap" style={{ overflow: 'auto' }}>
          {/* เนื้อหาที่ต้องการให้แสดงอนิเมชัน */}
          <animated.div className="flex flex-1 xl:flex-row md:flex-col flex-col  w-full h-full p-2" style={propsSpring}>
            <div className="flex xl:basis-1/2 md:basis-2/2 sm:flex-1 flex-1 h-full w-full p-5 items-center justify-center">
              <SubCoop setOpenModalPdfCoop={setOpenModalPdfCoop} />
            </div>
            <div className="flex xl:basis-1/2 md:basis-2/2 sm:flex-1 flex-1 h-full w-full ">
              <HorizontalParallax />
              {/* <CarouselImg /> */}
            </div>
          </animated.div>
        </div>

        {/* */}
        <div ref={scrollProjRef} className="felx h-screen w-full flex-wrap">
          <div className="flex flex-1 xl:flex-row md:flex-col flex-col  w-full h-full p-2">
            <div className="flex xl:basis-1/2 md:basis-2/2 sm:flex-1 flex-1 h-full w-full p-5 items-center justify-center">
              <SubProj setOpenModalPdfProj={setOpenModalPdfProjMa} />
            </div>
            <div className="flex xl:basis-1/2 md:basis-2/2 sm:flex-1 flex-1 h-full w-full items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <h3>สาธิตการใช้งาน</h3>
                <ReactPlayer controls={true} url="https://www.youtube.com/watch?v=cCGkwXezHSg" />
              </div>
            </div>
          </div>
        </div>

        {/* */}
        <div ref={scrollWorkRef} className="felx h-screen w-full flex-wrap">
          <div className="flex flex-1 xl:flex-row md:flex-col flex-col  w-full h-full p-2 ">
            <div className="flex xl:basis-1/2 md:basis-2/2 sm:flex-1 flex-1 h-full w-full p-5 items-center justify-center ">
              <SubWork />
            </div>
            <div className="flex xl:basis-1/2 md:basis-2/2 sm:flex-1 flex-1 h-full w-full items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                {/* <h3>Dev</h3> */}
                <DevLottie h={350} w={350} />
                <button
                  onClick={() => {
                    handleButtonClick('tools');
                  }}
                  className="flex mt-2 h-10 w-52 justify-between items-center bg-transparent hover:bg-slate-500 text-slate-700 font-semibold hover:text-white border border-slate-500 hover:border-transparent rounded"
                >
                  <div className="flex basis-1/2 w-full justify-center">
                    <h3>Tools</h3>
                  </div>
                  <div className="flex ">
                    <ChevLottie w={50} h={30} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={scrollParallaxRef} className="flex flex-1 w-full h-screen mx-1 mt-40 xl:mt-5 md:mt-5">
        <VerticalParallax offset={0} />
      </div>
    </div>
  );
}

export default HomePage;
