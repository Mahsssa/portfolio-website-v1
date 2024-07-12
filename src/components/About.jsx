import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex flex-col lg:flex-row"
      >
        <div className="lg:w-2/3">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>About me</h2>
          </motion.div>
          <motion.div variants={fadeIn("", "", 0.5, 1)}>
            <div
              className={`${styles.sectionSubText} about mt-5 md:pe-5 max-w-7xl`}
            >
              <p className="mb-3">
                Hello! My name is Mahsa, and I’m passionate about building
                Web-based GIS applications that address real-world challenges. I
                have a master’s in Remote Sensing & Geographic Information
                Systems (RS & GIS) from the University of Tehran. My coding
                journey began with geospatial data analysis while I was a
                master's student. It was a challenging yet rewarding experience,
                motivating me to explore more, so I pursued web development.
              </p>
              <p className="mb-3">
                I’m based in Mashhad, Iran. I have experience with both Web GIS
                back-end and front-end development. I consider work an ongoing
                education, and as a lifelong learner, I always seek
                opportunities to work with those willing to share their
                knowledge.
              </p>
              <p>
                When I’m not at the computer, I enjoy practicing yoga, reading,
                writing, or spending time with family and friends.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <motion.div
            variants={fadeIn("", "", 0.5, 1)}
            className="picture relative mt-[3rem] w-[12rem] sm:w-[14rem] md:w-[15rem] md:mt-[6.5rem] md:ms-[1rem] md:h-min"
          >
            <img
              src="./Mahsa.png"
              alt="my picture"
              className="pic-border rounded-xl"
            />
            <div className="absolute h-full w-full top-2 left-2 rounded-xl border border-solid border-slate-800 -z-10">
              {" "}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "About");
