
import React from 'react';
import { feedback } from '../constants';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => (
  <section id="clients" className="sm:py-16 py-6 flex justify-center items-center flex-col relative">
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-gray-900 xs:leading-[76.8px] leading-[66.8px] w-full">
        O que as pessoas <br className="sm:block hidden" /> estão dizendo sobre nós
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className="font-poppins font-normal text-gray-600 text-[18px] leading-[30.8px] text-left max-w-[450px]">
          Tudo o que você precisa para aceitar pagamentos com cartão e expandir seus negócios em qualquer lugar do planeta.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
      {feedback.map((card) => (
        <TestimonialCard key={card.id} feedback={card} />
      ))}
    </div>
  </section>
);

export default Testimonials;