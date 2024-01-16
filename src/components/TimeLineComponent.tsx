import { Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import IntoMe from '../constants/intoMe';
import { IoLogoVue } from 'react-icons/io5';
import { FaReact, FaNode } from 'react-icons/fa';
import { IMG } from '../configs/img-index';

function TimeLineComponent(props: any) {
  const handleButtonClick = (isState: string) => {
    props.handleButtonClick(isState);
  };
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point className="bg-red-700" icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>{IntoMe.titleTimeOne}</Timeline.Time>
          <Timeline.Title>{IntoMe.titleTimeOneTitle}</Timeline.Title>
          <Timeline.Body className="text-slate-950">
            <p>บริษัท: {IntoMe.titleTimeOneComp}</p>
            <p className="text-slate-950">
              ตำแหน่ง: {IntoMe.titleTimeOneRank}
              <span>
                <FaReact size={25} color={'#3498DB '} />
              </span>
            </p>
            <p>ผลงาน: {IntoMe.titleTimeOneProj}</p>
            <button
              onClick={() => {
                handleButtonClick('coop');
              }}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
            >
              ดูผลงาน <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </button>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>{IntoMe.titleTimeTwo}</Timeline.Time>
          <Timeline.Title>{IntoMe.titleTimeTwoComp}</Timeline.Title>
          <Timeline.Body className="text-slate-950">
            <p>
              ตำแหน่ง: {IntoMe.titleTimeTwoRank}
              <span>
                <FaReact size={25} color={'#3498DB '} />
                <FaNode size={25} color={'#27AE60'} />
              </span>
            </p>
            <p>ผลงาน: {IntoMe.titleTimeTwoProj}</p>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
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
          <Timeline.Time>{IntoMe.titleTimeTree}</Timeline.Time>
          <Timeline.Title>{IntoMe.titleTimeTreeTitle}</Timeline.Title>
          <Timeline.Body className="text-slate-950">
            <p>บริษัท: {IntoMe.titleTimeTreeComp}</p>
            <p>
              ตำแหน่ง: {IntoMe.titleTimeTreeRank}{' '}
              <span>
                <IoLogoVue size={25} color={'#27AE60'} />
                <FaReact size={25} color={'#3498DB '} />
                <img className="object-contain h-5 w-5" src={IMG.nestJS} />
              </span>
            </p>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
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
