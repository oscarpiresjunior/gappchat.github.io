
import React from 'react';
import { stats } from '../constants';

const Stats: React.FC = () => (
  <section className="flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6">
    {stats.map((stat, index) => (
      <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-gray-900">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-blue-500 uppercase ml-3">
          {stat.title}
        </p>
        {index !== stats.length - 1 && <div className="hidden lg:block self-center h-8 w-px bg-gray-300 mx-8"></div>}
      </div>
    ))}
  </section>
);

export default Stats;