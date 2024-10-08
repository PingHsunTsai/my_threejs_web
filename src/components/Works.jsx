import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { click } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, skill}) => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    const isInternalLink = source_code_link.startsWith('/');

    if (isInternalLink) {
      navigate(source_code_link);
    } else {
      window.open(source_code_link, '_blank', 'noopener,noreferrer');
    }
  };

  return(
    <motion.div
      variants={fadeIn("up", "spring", index*0.5, 0.75)}
    > 
      <Tilt
        options={{ 
          max: 25,
          scale: 1,
          speed: 450, 
        }}
        className="bg-primary p-5 rounded-2xl sm:w-[350px] w-full ring-1 ring-gray-500"
      >
        <div className="relative w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={handleNavigation}
              className="bg-secondary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={click} alt="click" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <h4 className="blue-text-gradient font-bold text-[18px]">#{tags}</h4>
          <p className="mt-2 blue-text-gradient text-[14px]">{skill}</p>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

      </Tilt>
    </motion.div>
  )
}

const Work = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-outline`}>My project</p>
        <h2 className={`${styles.sectionHeadText} text-outline`}>Project.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px] mt-3 text-outline"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 container">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Work, "work")