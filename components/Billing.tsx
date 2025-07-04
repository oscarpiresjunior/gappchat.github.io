
import React from 'react';

const AppleLogo = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M19.333 12.333c0-1.28-1.049-2.321-2.329-2.321s-2.329 1.041-2.329 2.321c0 1.28 1.049 2.329 2.329 2.329s2.329-1.049 2.329-2.329zm-6.146-8.232c-.513-.541-1.428-.541-2.029.042-.833.824-1.533 2.146-1.533 3.417 0 .341.042.683.125 1.025.292 1.333 1.25 2.75 2.458 2.75s1.792-.875 2.5-2C15.833 7.542 14.25 5.25 13.187 4.101zM12 0c-2.917 0-4.333 1.708-5.25 3.333-1.083 1.958-1.25 4.583.5 6.583.958 1.083 2.167 1.75 3.417 1.75s2.208-.542 3.208-1.542c.958-1.042 1.5-2.25 1.583-3.583.042-.5-.125-.958-.333-1.417C14.042.833 13.208 0 12 0z"/></svg>;

const GooglePlayLogo = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-3" viewBox="0 0 512 512" fill="currentColor"><path d="M325.26,256,51.48,451.2,325.26,256Zm-2.52-152.63L76.24,4.8,223.1,173.34,322.74,103.37ZM49.88,60.8,222.1,239.52,49.88,451.2V60.8Zm274.52,347L223.1,338.66,324.4,408.8Z"/></svg>;

const Billing: React.FC = () => (
  <section id="product" className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
    <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
      <img src="https://storage.googleapis.com/gweb-aip.appspot.com/dev-assets/bill.png" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
    </div>

    <div className="flex-1 flex justify-center items-start flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-gray-900 xs:leading-[76.8px] leading-[66.8px] w-full">
        Controle facilmente <br className="sm:block hidden" /> suas cobranças e faturamento.
      </h2>
      <p className="font-poppins font-normal text-gray-600 text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <button className="flex items-center justify-center bg-white border border-gray-300 rounded-lg px-5 py-3 mr-5 mb-4 hover:bg-gray-100 text-gray-800 transition-colors duration-300 shadow-sm">
            <AppleLogo/>
            <div>
                <p className="text-xs">Baixar na</p>
                <p className="text-lg font-semibold">Apple Store</p>
            </div>
        </button>
        <button className="flex items-center justify-center bg-white border border-gray-300 rounded-lg px-5 py-3 mb-4 hover:bg-gray-100 text-gray-800 transition-colors duration-300 shadow-sm">
            <GooglePlayLogo/>
            <div>
                <p className="text-xs">DISPONÍVEL NO</p>
                <p className="text-lg font-semibold">Google Play</p>
            </div>
        </button>
      </div>
    </div>
  </section>
);

export default Billing;