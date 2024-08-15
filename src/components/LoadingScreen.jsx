import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-primary z-[9999]">
      <div className="relative w-[85px] h-[85px]">
        <div className="absolute inset-0 rounded-full shadow-[0_0_8px_2px_rgba(0,0,0,0.4)_inset]"></div>
        <div className="absolute inset-0 rounded-full shadow-[0_3px_0_#42a5a7_inset] animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
