// import React from 'react'

import IntoMe from '../../constants/intoMe';
import NodeLottie from '../react-lottie/NodeLottie';
import ReactLottie from '../react-lottie/ReactLottie';

function SubWork() {
  return (
    <div>
      <h1>Developer</h1>
      <h3>บริษัท: อิเลคทรอนิกส์ เชลล์ จำกัด Eectronic Shell Co.,Ltd.</h3>
      <div className="flex items-center">
        <div>
          <p className="text-slate-950">
            ตำแหน่ง: <b>{IntoMe.titleTimeTreeRank}</b>{' '}
          </p>
        </div>
        <div className="flex mx-5">
          <NodeLottie w={50} h={50} />
          <div className="mx-3"></div>
          {/* <ReactLottie w={40} h={40} /> */}
        </div>
      </div>
      <p className="mt-1 indent-2">
        พัฒนาเว็บไซต์ ออกแบบ UX/UI, API และ Database รวมไปถึงการ Deploy โดยใช้ Docker และดูแลน้องฝึกงาน, สหกิจศึกษา
      </p>
      <p className="mt-1 indent-5">
        ออกแบบพัฒนา API ด้วย <b>[ NestJs ]</b>
      </p>
      <p className="mt-1 indent-8">- [ JWT, TypeORM, SSE, Socket.io ]</p>
      <p className="mt-1 indent-5">
        Database <b>[ PostgresSQL ]</b>
      </p>
      <p className="mt-1 indent-5">
        Docker <b>[ dockerfile, docker compose ]</b>
      </p>
      <p className="mt-1 indent-5">
        Front End (Web) <b>[ Vue, React ]</b>
      </p>
      <p className="mt-1 indent-8">- Vue [ Vuex, Vuetify ]</p>
      <p className="mt-1 indent-8">- React [ ReduxToolkit, Mui ]</p>
      <p className="mt-1 indent-5"> Tools Libs</p>
      <p className="mt-1 indent-8">- [ Vite, Tailwindcss, Bootstrap, Lodash, Lottie, Axios, Moment, Dotenv ]</p>
    </div>
  );
}

export default SubWork;
