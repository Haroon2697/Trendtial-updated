import React from 'react';
import HeroBg from "../assets/hero-bg.png";
import HeroBg2 from "../assets/hero-bg-2.png";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center lg:h-[100vh] sm:h-[50vh] pt-20 pb-28">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-radial from-red-500/30 via-transparent to-transparent opacity-50" />
      </div>
      <img
        src={HeroBg}
        alt="Background decoration"
        style={{
          transform: "translateX(-50%)",
        }}
        className="absolute opacity-60 -top-[80%] left-[50%]"
      />
      <img
        src={HeroBg2}
        alt="Background decoration"
        style={{
          transform: "translateX(-50%)",
        }}
        className="absolute opacity-40 left-[50%] -bottom-[15%]"
      />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 pt-12">
          Your go-to <br />
          <span className="text-gray-400">Marketing Expert</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Supercharge your digital presence with Trendtial{"'"}s cutting-edge
          strategies.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            onClick={() =>
              (window.location.href =
                "mailto:trendtial@gmail.com?subject=Hi Trendtial")
            }
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition-colors"
          >
            Book a call
          </button>
          <button
            onClick={() => (document.location.href = "/projects")}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg text-lg transition-colors"
          >
            See our work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

