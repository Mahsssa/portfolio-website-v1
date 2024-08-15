import React from "react";
import { styles } from "../styles";
import { github, demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.6, 1)}>
      <div className="bg-tertiary p-4 sm:p-6 rounded-xl w-full sm:w-[550px]  border border-slate-800">
        <div className="relative w-full h-[260px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-xl"
          />
          {source_code_link !== "" && (
            <div className="github absolute inset-0 flex justify-end m-1 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-tertiary w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-5/6 h-5/6 object-contain"
                />
              </div>
            </div>
          )}

          {demo_link !== "" && (
            <div className="live-demo absolute inset-1 flex justify-end me-11 card-img_hover">
              <div
                onClick={() => window.open(demo_link, "_blank")}
                className="bg-tertiary w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={demo}
                  alt="source code"
                  className="w-5/6 h-5/6 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 mb-4">
          <h3 className="text-cyan font-bold text-[20px] sm:text-[22px] md:text-[24px]">
            {name}
          </h3>
          <p className={`${styles.cardSubText} mt-2 text-slate-300`}>
            {description}
          </p>
        </div>

        <div className="mb-2 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className="text-[14px] text-cyan">
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const MyProjects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Projects</h2>{" "}
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.3, 1)}
          className={`${styles.sectionSubText} mt-5 max-w-3xl`}
        >
          The following projects demonstrate my skills and experience. Each
          project includes a brief description, along with links to the code
          repositories and live demos.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-9">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(MyProjects, "Projects");
