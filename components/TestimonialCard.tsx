
import React from 'react';
import { Feedback } from '../types';

interface TestimonialCardProps {
    feedback: Feedback;
}

const QuoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="27" viewBox="0 0 42 27" fill="none">
        <path d="M37.3333 26.3333C39.4667 26.3333 41.2 24.6 41.2 22.4667C41.2 20.3333 39.4667 18.6 37.3333 18.6C35.2 18.6 33.4667 20.3333 33.4667 22.4667V26.3333H37.3333ZM25.6 26.3333C27.7333 26.3333 29.4667 24.6 29.4667 22.4667C29.4667 20.3333 27.7333 18.6 25.6 18.6C23.4667 18.6 21.7333 20.3333 21.7333 22.4667V26.3333H25.6ZM0 26.3333L11.7333 0H17.6L7.73333 26.3333H0ZM19.5333 26.3333L31.2667 0H37.1333L27.2667 26.3333H19.5333Z" fill="url(#paint0_linear_1_27)"/>
        <defs>
            <linearGradient id="paint0_linear_1_27" x1="2.72481" y1="21.7925" x2="35.3308" y2="-12.3392" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4285F4"/>
                <stop offset="1" stopColor="#34A853"/>
            </linearGradient>
        </defs>
    </svg>
);


const TestimonialCard: React.FC<TestimonialCardProps> = ({ feedback }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 cursor-pointer bg-white border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <QuoteIcon />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-gray-800 my-10">
      {feedback.content}
    </p>

    <div className="flex flex-row">
      <img src={feedback.img} alt={feedback.name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-gray-900">
          {feedback.name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-gray-600">
          {feedback.title}
        </p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;