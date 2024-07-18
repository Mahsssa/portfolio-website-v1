import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Alert = ({ message, duration }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev - 100 / duration);
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);
  return (
    <div className="fixed bottom-12 right-4 bg-[#33313a] text-slate-300 text-[14px] sm:text-[15px] md:text-[17px] font-medium px-5 py-3 sm:py-4 rounded-xl shadow-md z-1000">
      <div>{message}</div>
      <div className="bg-primary h-1 mt-1 rounded-3xl">
        <div
          className="bg-[#33313a] h-full"
          style={{
            width: `${progress}%`,
            transition: "width 2s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const _copyEmailAddress = () => {
    const email = "mahsa.kez@gmail.com";
    navigator.clipboard.writeText(email);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3500);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row h-[30rem] xs:h-[27rem] md:h-[28rem]">
        <div className="justify-center">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Contact me</h2>{" "}
          </motion.div>
          <div className="w-full flex">
            <motion.div
              variants={fadeIn("", "", 0.1, 1)}
              className={`${styles.sectionSubText} mt-5 max-w-3xl`}
            >
              {" "}
              Whether you have a question or an idea for a project, feel free to
              send me an email. I’ll try my best to get back to you!
              <div className="flex flex-col xs:flex-row mt-2 xs:mt-4 max-w-3xl">
                <div className="flex m-auto m-0 flex-col mt-6 sm:mt-7 xs:ms-0 lg:ms-10 md:mt-10 w-fit ">
                  <div>
                    <button
                      className="flex flex-row rounded-xl border border-slate-800 bg-tertiary px-5 py-2 md:px-6 md:py-3 text-slate-300 text-[16px] sm:text-[17px] font-medium"
                      onClick={() => _copyEmailAddress()}
                    >
                      mahsa.kez@gmail.com
                      <div className="h-3 w-3 ms-3 sm:ms-4 mt-2 sm:mt-2.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="#53CED0"
                        >
                          <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" />
                        </svg>
                      </div>
                    </button>
                  </div>

                  <div>
                    {showAlert && (
                      <Alert
                        message="Email copied to clipboard!"
                        duration={1}
                      />
                    )}
                  </div>
                </div>
                <div className="flex m-auto m-0 mt-5 sm:mt-5 md:mt-10 w-fit">
                  <div className="mt-[0.8rem] sm:mt-[1.2rem] me-[0.65rem] xs:me-3 md:me-3">
                    <a href="https://github.com/Mahsssa" target="_blank">
                      <svg
                        className="h-[1.75rem] w-[1.8rem] sm:h-[1.8rem] sm:w-[1.9rem] hover:fill-current hover:text-cyan transition ease-in-out duration-300"
                        stroke="currentColor"
                        aria-labelledby="socialGithub"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#aaa6c3"
                        viewBox="0 0 26 26"
                      >
                        <title id="socialGithub">Github</title>

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0.01"
                          d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="mt-[0.9rem] sm:mt-[1.25rem] me-[0.65rem] xs:me-3  md:me-3">
                    <a
                      href="https://linkedin.com/in/mahsaakeshavarz"
                      target="_blank"
                    >
                      <svg
                        className="h-[1.6rem] w-[1.6rem] sm:h-[1.75rem] sm:w-[1.75rem] hover:fill-current hover:text-cyan transition ease-in-out duration-300"
                        stroke="currentColor"
                        aria-labelledby="socialLinkedin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#aaa6c3"
                        viewBox="0 0 26 26"
                      >
                        <title id="socialLinkedin">Linkedin</title>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0.01"
                          d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="mt-[0.85rem] sm:mt-[1.2rem]">
                    <a href="https://twitter.com/mahsa_ke" target="_blank">
                      <svg
                        className="h-[1.5rem] w-[1.5rem] sm:h-[1.6rem] sm:w-[1.6rem] hover:fill-current hover:text-cyan transition ease-in-out duration-300"
                        stroke="currentColor"
                        aria-labelledby="socialX"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#aaa6c3"
                        viewBox="0 0 487.43 456.19"
                      >
                        <title id="socialX">Twitter</title>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0.01"
                          d="M7.48,21.9,195.66,273.57,6.29,478.1H48.91L214.71,299l134,179.11h145L294.93,212.33,471.2,21.9H428.58L275.89,186.82,152.51,21.9ZM70.16,53.3h66.63L431,446.7H364.39Z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center mt-[2.5rem] xs:mt-[3rem] md:mt-[6rem] lg:ms-[7rem]">
          <img
            src="./mail.png"
            alt="envelop-mail picture"
            className="pic-border rounded-xl h-[160px] lg:h-[190px]"
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "Contact");
