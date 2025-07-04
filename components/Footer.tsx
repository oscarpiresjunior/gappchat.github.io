
import React from 'react';
import { footerLinks, socialMedia } from '../constants';

const Logo = () => (
    <a href="#" className="text-3xl font-bold tracking-tight">
        <span style={{color: '#34A853'}}>G</span>
        <span style={{color: '#FBBC05'}}>A</span>
        <span style={{color: '#FF6D00'}}>P</span>
        <span style={{color: '#EA4335'}}>P</span>
        <span style={{color: '#4285F4'}}>CHAT</span>
    </a>
);

const Footer: React.FC = () => (
  <section className="flex justify-center items-center sm:py-16 py-6 flex-col">
    <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
      <div className="flex-1 flex flex-col justify-start mr-10">
        <Logo />
        <p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] mt-4 max-w-[310px]">
          Uma nova maneira de tornar os pagamentos fáceis, confiáveis e seguros.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-400 hover:text-white cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2024 GAPPCHAT. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
                <a 
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white hover:text-blue-400 transition-colors ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    </div>

  </section>
);

export default Footer;