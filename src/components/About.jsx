import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn , textVariant } from '../utils/motion';


const ServiceCard = ({index, title, skill}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          options={{
          max: 25,
          scale: 1.02,
          speed: 400,
          }} 
          className="bg-primary rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col ring-1 ring-gray-500"
        >
          {/* <img src={icon} alt={title} className="w-16 h-16 object-contain" /> */}
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          <h3 className='blue-text-gradient text-[14px] font-semibold text-center'>{skill}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-outline`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-outline`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-outline"
      >
        My specialties include 3D modeling, geometry optimization, automation integration, fabrication, robotics, perception, 
        and user interface design, all combined with full-stack software development expertise.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")