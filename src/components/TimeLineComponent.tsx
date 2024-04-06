import { Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import IntoMe from '../constants/intoMe';
import { IoLogoVue } from 'react-icons/io5';
import { FaReact, FaNode } from 'react-icons/fa';
import { IMG } from '../configs/img-index';

interface propsType {
  handleButtonClick?: void | any;
}
function TimeLineComponent(props: propsType) {
  const handleButtonClick = (isState: string) => {
    props.handleButtonClick(isState);
  };
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>
            <p style={{ fontSize: 18 }}>{IntoMe.titleTimeOne}</p>
          </Timeline.Time>
          <Timeline.Title>
            <h3 style={{ fontSize: 30 }}>{IntoMe.titleTimeOneTitle}</h3>
          </Timeline.Title>
          <Timeline.Body className="text-slate-950">
            <p className="indent-5" style={{ fontSize: 25 }}>
              บริษัท: {IntoMe.titleTimeOneComp}
            </p>
            <p className="text-slate-950" style={{ fontSize: 22 }}>
              ตำแหน่ง: {IntoMe.titleTimeOneRank}
              <span className="mx-1">
                <FaReact size={25} color={'#3498DB '} />
              </span>
            </p>
            <p style={{ fontSize: 22 }}>ผลงาน: {IntoMe.titleTimeOneProj}</p>
            <button
              onClick={() => {
                handleButtonClick('coop');
              }}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-20 border border-blue-500 hover:border-transparent rounded"
            >
              ดูผลงาน <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </button>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>
            <p style={{ fontSize: 18 }}>{IntoMe.titleTimeTwo}</p>
          </Timeline.Time>
          <Timeline.Title>
            <h3 style={{ fontSize: 30 }}>{IntoMe.titleTimeTwoComp}</h3>
          </Timeline.Title>
          <Timeline.Body className="text-slate-950">
            <p style={{ fontSize: 22 }}>
              ตำแหน่ง: {IntoMe.titleTimeTwoRank}
              <span className="mx-1">
                <FaReact size={25} color={'#3498DB '} />
                <FaNode size={25} color={'#27AE60'} />
              </span>
            </p>
            <p style={{ fontSize: 22 }}>ผลงาน: {IntoMe.titleTimeTwoProj}</p>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-20 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                handleButtonClick('proj');
              }}
            >
              ดูผลงาน <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </button>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>
            <p style={{ fontSize: 18 }}> {IntoMe.titleTimeTree}</p>
          </Timeline.Time>
          <Timeline.Title>
            <h3 style={{ fontSize: 30 }}> {IntoMe.titleTimeTreeTitle}</h3>
          </Timeline.Title>
          <Timeline.Body className="text-slate-950">
            <p className="indent-5" style={{ fontSize: 25 }}>
              บริษัท: {IntoMe.titleTimeTreeComp}
            </p>
            <p style={{ fontSize: 22 }}>
              ตำแหน่ง: {IntoMe.titleTimeTreeRank}{' '}
              <span className="mx-1">
                <IoLogoVue size={25} color={'#27AE60'} />
                <FaReact size={25} color={'#3498DB '} />
                <img className="object-contain h-5 w-5" src={IMG.nestJS} />
              </span>
            </p>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-20 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                handleButtonClick('work');
              }}
            >
              ดูผลงาน <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </button>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}

export default TimeLineComponent;
