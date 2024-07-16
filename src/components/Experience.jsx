import React from "react";
import { useState } from "react";
import ReactSlider from "react-slider";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const steps = [
  "Freelance",
  "University of Tehran",
  "Self-employed",
  "Miniature Park",
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const _handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Experience</h2>{" "}
      </motion.div>
      <motion.div variants={fadeIn("", "", 0.5, 1)}>
        <div className="flex flex-col sm:flex-row sm:grid sm:grid-cols-7 md:grid-cols-10 lg:grid-cols-12 mt-5 sm:mt-8 sm:py-5 max-w-7xl">
          {/* Work places container */}
          <div className="overflow-x-auto sm:overflow-hidden sm:col-span-2 md:col-span-2 lg:col-span-2">
            <div className="w-[520px] sm:w-full flex flex-row sm:flex-col border border-slate-800 border-2 border-t-0 border-l-0 border-r-0 border-b-1 sm:border sm:border-2 sm:border-t-0 sm:border-l-0 sm:border-r-1 sm:border-b-0 hover:cursor-pointer">
              {steps.map((step, index) => {
                let color = currentIndex === index ? "#53CED0" : "#cbd5e1";
                let backgroundColor =
                  currentIndex === index ? "#080b19" : "#050816";
                let borderColor =
                  currentIndex === index ? "#53CED0" : "#050816";

                return (
                  <div
                    className="flex flex-col sm:flex-row justify-between rounded-lg text-[14px] sm:text-[15px]"
                    key={index}
                    onClick={() => _handleIndexChange(index)}
                    style={{
                      backgroundColor: backgroundColor,
                      color: color,
                    }}
                  >
                    <div className="px-4 py-4">{step}</div>
                    <div
                      className="border border-[0.1rem] rounded-2xl me-0.5"
                      style={{
                        borderColor: borderColor,
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* End of work places container */}

          <div className="flex flex-col sm:flex-row sm:col-span-5 md:col-span-8 lg:col-span-10 gap-6 sm:gap-8">
            <div>
              <ReactSlider
                defaultValue={0}
                value={currentIndex}
                min={0}
                max={3}
              />
            </div>

            {/* Job descriptions */}
            <div className="md:h-[265px]">
              <h3 className="text-slate-300 mb-1 sm:mb-2 text-[18px] md:text-[20px] font-semibold">
                {experiences[currentIndex].title}
              </h3>
              <h4 className="mb-1 text-[#cbd5e1]">
                {experiences[currentIndex].date}
              </h4>
              <h5 className="mb-4 text-[#cbd5e1]">
                {experiences[currentIndex].location}
              </h5>

              <div className="text-slate-300 text-[16px] sm:text-[18px] md:text-[18px]">
                <ul className="sm:pl-1">
                  {experiences[currentIndex].points.map((point, index) => (
                    <li key={index} className="mb-1.5">
                      <span className="text-cyan text-xl sm:text-2xl mr-2 sm:mr-3">
                        &#8226;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* End of Job descriptions */}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "Experience");
