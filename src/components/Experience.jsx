import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { experiences, study_experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#050816', color: '#050816', outline: 'solid 1px'}}
    contentArrowStyle={{ borderRight: '20px solid  color-white' }}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <a href={experience.url} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </a>
    }
  >
    <div>
      <h3 className="text-white text=[24px] font-bold">
        {experience.title}
      </h3>
      <p className="blue-text-gradient text-[16px] font-semibold" style={{margin: 0}}>
        {experience.company_name} -&gt; {experience.date}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className={`text-[14px] pl-1 tracking-wider text-white-100`}
        >
          {point}
        </li>
      ))}

    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <div>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-outline`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-outline`}>Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col container">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
            ))}
        </VerticalTimeline>
      </div>

      <div className="mt-20 flex flex-col container">
        <VerticalTimeline>
          {study_experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
            ))}
        </VerticalTimeline>
      </div>

    </div>
  )
}

export default SectionWrapper(Experience, 'experience')