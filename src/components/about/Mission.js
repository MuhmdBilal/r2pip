import React from 'react';

export default function Mission() {
  return (
    <div data-aos="fade-right" className=" text-white pt-16 px-4 relative flex flex-col md:flex-row items-center justify-normal gap-5">
      <div className="w-[95%] md:w-[50%]">
        <h1 className="text-4xl font-bold text-red1">Mission</h1>
        <p className="text-lg mt-4">
          {`R2PIP’s mission is to create a decentralized and transparent platform that offers financial rewards to
          users for participating in various activities within the ecosystem. The goal is to empower users with
          opportunities for growth and prosperity by offering staking rewards, incentivized tasks, and a
          loyalty program that benefits both early adopters and long-term participants.`}
        </p>
      </div>
      {/* Line with dot */}
      <div className=" flex items-center">
        <div className="w-32 h-0.5 bg-red1"></div>
        <div className="w-4 h-4 bg-red1 rounded-full ml-2"></div>
      </div>
    </div>
  );
}
