
import React from 'react';
import { features } from '../constants';
import { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card cursor-pointer transition-all duration-300 hover:bg-gray-50 hover:shadow-lg`}>
    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-blue-100">
      {feature.icon}
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className="font-poppins font-semibold text-gray-800 text-[18px] leading-[23px] mb-1">
        {feature.title}
      </h4>
      <p className="font-poppins font-normal text-gray-600 text-[16px] leading-[24px] mb-1">
        {feature.content}
      </p>
    </div>
  </div>
);

const Button: React.FC<{ styles?: string }> = ({ styles }) => (
  <a href="#" className={`py-4 px-6 bg-blue-500 text-white font-poppins font-medium text-[18px] outline-none ${styles} rounded-[10px] hover:bg-blue-600 transition-colors shadow-md`}>
    Começar
  </a>
);


const Business: React.FC = () => (
  <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6">
    <div className="flex-1 flex justify-center items-start flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-gray-900 xs:leading-[76.8px] leading-[66.8px] w-full">
        Você cuida do negócio, <br className="sm:block hidden" /> nós cuidamos do dinheiro.
      </h2>
      <p className="font-poppins font-normal text-gray-600 text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Com o cartão de crédito certo, você pode melhorar sua vida financeira construindo crédito, ganhando recompensas e economizando dinheiro. Mas com centenas de cartões de crédito no mercado.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} feature={feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;