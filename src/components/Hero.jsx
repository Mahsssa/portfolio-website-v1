import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";

const BeautifulButton = ({ name, onClick, value }) => {
  return (
    <>
      <div>{name}</div>
      <input
        className="rounded-xl border border-slate-800 bg-tertiary px-5 py-2 xs:px-6 xs:py-3 md:px-6 md:py-3 text-slate-300 text-[15px] xs:text-[16px] sm:text-[16px] font-medium transition-all duration-300 hover:border-cyan hover:text-cyan hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[3px_3px_0px_cyan] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
        type={"button"}
        value={value}
        onClick={onClick}
      />
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-primary">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl mx-auto md:grid md:grid-cols-2 md:divide-x md:divide-none md:flex md:flex-row items-start gap-5 md:pt-0 md:mt-11`}
      >
        <div className="hero-text w-full justify-center md:ps-0 md:ms-0 mt-2 xs:mt-4 sm:mt-7 md:mt-[35px] sm:order-1">
          <div className="h-auto w-fit md:mt-[100px]">
            <h1>
              <span className={styles.heroHeadText}>Mahsa Keshavarz</span>
            </h1>
            <div className="md:w-11/12">
              <p className={`${styles.heroSubText} mt-2`}>
                Web GIS Developer
                <br />
                Geospatial Data Analyst
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-row justify-center gap-[3rem] xs:gap-[3rem] sm:gap-[1.5rem] mt-9 xs:mt-9 md:mt-11 sm:ps-1 order-2 sm:order-1">
              <div>
                <BeautifulButton
                  value={"My Projects"}
                  onClick={() => {
                    document
                      .getElementById("Projects")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </div>
              <div>
                <BeautifulButton
                  value={"Contact Me"}
                  onClick={() => {
                    document
                      .getElementById("Contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </div>
            </div>
            <div className="flex justify-start mt-2 sm:mt-7 md:mt-10 ms-1 sm:ms-[6rem] order-1 sm:order-2">
              <div className="mt-[0.6rem] xs:mt-[0.8rem] sm:mt-[1.2rem] me-[1rem] xs:me-3 md:me-3">
                <a href="https://github.com/Mahsssa" target="_blank">
                  <svg
                    className="h-[1.75rem] w-[1.5rem] xs:h-[1.75rem] xs:w-[1.8rem] sm:h-[1.8rem] sm:w-[1.9rem] hover:fill-current hover:text-cyan transition ease-in-out duration-300"
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

              <div className="mt-[0.75rem] xs:mt-[0.9rem] sm:mt-[1.25rem] me-[1rem] xs:me-3  md:me-3">
                <a
                  href="https://linkedin.com/in/mahsaakeshavarz"
                  target="_blank"
                >
                  <svg
                    className="h-[1.5rem] w-[1.4rem]  xs:h-[1.6rem] xs:w-[1.6rem] sm:h-[1.75rem] sm:w-[1.75rem] hover:fill-current hover:text-cyan transition ease-in-out duration-300"
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
                    className="h-[1.2rem] w-[1.2rem] xs:h-[1.5rem] xs:w-[1.5rem] sm:h-[1.6rem] sm:w-[1.6rem] hover:fill-current hover:text-cyan transition ease-in-out duration-300"
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
        </div>

        <div className="hero-globe flex justify-center mt-3 sm:mt-5 sm:order-2">
          <div className="w-full h-[345px] md:h-[565px] rounded-full overflow-hidden cursor-grab">
            <EarthCanvas />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 xs:bottom-10 w-full flex justify-center items-center">
        <a href="#About">
          <div className="w-[30px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
