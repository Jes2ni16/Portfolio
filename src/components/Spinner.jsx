import React from "react";
import { RevolvingDot } from "react-loader-spinner";
const Spinner = () => {
  return (
    <div className=" h-screen bg-black flex justify-center items-center ">
      <RevolvingDot
        height="100"
        width="100"
        radius="40"
        color="#fb5607"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
