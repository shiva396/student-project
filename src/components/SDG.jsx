import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { ImgData } from "../data";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, SDGName, desc, img, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[270px] w-full "
      >
        <div className="relative w-full h-[230px]">
          <a href={link} target="_blank" rel="noreferrer">
            <img
              src={img}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </a>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px]">{SDGName}</h3>
          <p className="mt-2 text-secondary text-[13px]">{desc}</p>
          <Link to="/sdg1">
            <button className="mt-3 text-secondary text-[13px]">
              View Details
            </button>
          </Link>
        </div>
      </Tilt>
    </motion.div>
  );
};

const SDG = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} `}>Sustainable Development Goals</p> */}
        <h2 className={`${styles.sectionHeadText}`}>
          Sustainable Development Goals
        </h2>
      </motion.div>

      {/* <div classNamla e="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          College Ignites Student Potential with SkillRack, Incubation Center,
          Clubs, AMCAT, Internships, Industrial Visits, and a Platform for
          Growth!
        </motion.p>
      </div> */}

      <div className="mt-20 flex flex-wrap gap-4">
        {ImgData.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SDG, "sdg");
