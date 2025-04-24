import React from "react";
import Button from "../../Components/Button/Button";

export default function AboutUs() {
  return (
    <div className="about mt-10 flex flex-col items-center w-full">
      <h1 className="text-2xl sm:text-4xl font-black text-center">Real Estate-Focused Digital Mastery</h1>
      <div className="grid-cols-2 justify-items-center sm:flex sm:mt-10 mt-7 w-full">
        <div className="sm:w-1/2 flex justify-center">
        <img src="src\assets\cuate.png" alt="" className=""/>
        </div>
        <div className="flex flex-col sm:justify-between gap-5 sm:w-1/2 px-5">
          <h1 className="text-2xl mt-5 font-black sm:text-3xl ">Unlock the Potential of Digital Real Estate Excellence</h1>
          <p className="sm:text-lg">
            At Osumare, we understand that the real estate landscape demands a
            digital presence that aligns with the intricacies of property
            marketing. Our range of specialized services is meticulously
            designed to catapult your brand's success in the ever-evolving
            digital property market.
          </p>
          <Button style={`bg-[#0078FF] h-12 sm:w-50 text-white hover:bg-transparent`}>Get Started</Button>
        </div>
      </div>
    </div>
  );
}
