import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from "../utils/timeLineElement";

const Timeline = () => {
  const style = {
    backgroundColor: "rgba(0,0,0,0.4)",
    border: "1px solid rgba(255,255,255,0.2)",
  };
  return (
    <div className=''>
      <VerticalTimeline>
        {timelineElements?.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              lineColor={"#000"}
              contentArrowStyle={style}
              contentStyle={style}
              dateClassName='date  font-[monument] uppercase text-white/80'
            >
              <div className=' text-white/80  flex items-align justify-between font-[archive] text-2xl  font-semibold '>
                <h3 className='vertical-timeline-element-title  '>
                  {element.title}
                </h3>
                <h5 className='vertical-timeline-element-subtitle text-sm '>
                  {element.time}
                </h5>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      ;
    </div>
  );
};
export default Timeline;
