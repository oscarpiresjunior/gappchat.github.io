
import React from 'react';

const Button: React.FC<{ styles?: string }> = ({ styles }) => (
  <a href="#" className={`py-4 px-6 bg-blue-500 text-white font-poppins font-medium text-[18px] outline-none ${styles} rounded-[10px] hover:bg-blue-600 transition-colors shadow-md`}>
    Começar Agora
  </a>
);

const CTA: React.FC = () => (
  <section className="flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-gradient-to-r from-gray-100 to-blue-50 rounded-[20px] box-shadow">
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-gray-900 xs:leading-[76.8px] leading-[66.8px] w-full">Experimente nosso serviço agora!</h2>
      <p className="font-poppins font-normal text-gray-600 text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Tudo o que você precisa para aceitar pagamentos com cartão e expandir seus negócios em qualquer lugar do planeta.
      </p>
    </div>
    <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
      <Button />
    </div>
  </section>
);

export default CTA;