import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col grid justify-items-center text-slate-300 text-[12px] sm:text-[14px] md:text-[14px] pt-5 ps-5 pe-5 pb-7">
        <p>
          Designed & built by Mahsa Keshavarz.{" "}
          <a
            href="https://github.com/Mahsssa/portfolio-website-v1"
            target="_blank"
            className="text-secondary hover:fill-current hover:text-cyan transition ease-in-out duration-300"
          >
            Opens-sourced
          </a>{" "}
          under MIT license.
        </p>
        <p>
          The earth planet & envelope-mail were created by
          <a
            href="https://www.cgtrader.com/free-3d-models/space/planet/human-planet"
            target="_blank"
            className="text-secondary hover:fill-current hover:text-cyan transition ease-in-out duration-300"
          >
            {""} nicmacanimations {""}
          </a>
          &
          <a
            href="https://iconscout.com/3d-illustrations/envelope-mail"
            target="_blank"
            className="text-secondary hover:fill-current hover:text-cyan transition ease-in-out duration-300"
          >
            {""} Morzilah {""}
          </a>
          respectively.
        </p>
      </div>
    </>
  );
};

export default Footer;
