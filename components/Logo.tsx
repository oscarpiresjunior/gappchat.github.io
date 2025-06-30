import React from 'react';

const Logo: React.FC = () => {
  return (
    <a href="#home" className="cursor-pointer" aria-label="GAPPCHAT Home">
      <img
        src="https://www.brasix.com.br/wp-content/uploads/2025/06/logo-trans.png"
        alt="Logo da GAPPCHAT"
        className="h-10 w-auto"
        width="200"
        height="40"
      />
    </a>
  );
};

export default Logo;
