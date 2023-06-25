import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        // options={{
        //   max: 45,
        //   scale: 1,
        //   speed: 450,
        // }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-22 h-22 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>

        <p className={styles.sectionSubText}>Main focus of this ecosystem</p>

        <h2 className={styles.sectionHeadText}>One Student - One Startup</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Sairam Institutions is revolutionizing engineering education through the implementation of the Sairam Innovation Ecosystem. Building upon positive student feedback, we have decided to extend this transformative model to all four years of our program, with a strong focus on fostering entrepreneurship through the "One Student - One Startup" approach.

With careful planning and a student-centric approach, we are gradually integrating the Sairam Innovation Ecosystem into our curriculum. Our aim is to create an educational environment that nurtures an entrepreneurial mindset, providing students with the necessary resources and support to turn their ideas into successful startups. Join us in shaping the future of engineering education at Sairam Institutions, where we inspire and empower the next generation of engineers to drive innovation, solve real-world problems, and make a lasting impact on society.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (

          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// export default About;
export default SectionWrapper(About, "about");
