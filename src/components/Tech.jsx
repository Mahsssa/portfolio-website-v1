import React from "react";
import { techs } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const SkillCard = ({ index, title, skills }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.6, 0.75)}>
      <div className="bg-tertiary p-3 sm:p-5 sm:w-[365px] w-full rounded-xl border border-slate-800">
        <div className="mt-1 ms-2">
          <h3 className="text-cyan font-semibold text-[20px] sm:text-[24px]">
            {title}
          </h3>
        </div>
        <div className="SkillsContainer w-full flex flex-wrap mt-5 gap-1 justify-center xs:justify-start ">
          {skills.map((skill) => (
            <div className="flex justify-center flex-wrap gap-3">
              <div className="flex items-center justify-center p-2 ">
                <img className="w-[25px] h-[25px]" src={skill.image} />
                <div className=" text-[13px] xs:text-[14px] text-slate-300 ps-1 ">
                  {skill.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Techs</h2>{" "}
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.3, 1)}
          className={`${styles.sectionSubText} mt-5 max-w-3xl`}
        >
          I’ve worked with these technologies recently. I’m also experienced
          with QGIS and ArcGIS.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-7">
        {techs.map((tech, index, image) => (
          <SkillCard key={`tech-${index}`} index={index} {...tech} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
