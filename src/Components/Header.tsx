import React from "react";

interface HeaderProps {
  mainTitle: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ mainTitle, subtitle }) => {
  return (
    <div className="text-xs text-center p-5 font-serif pb-1">
      <div className="flex justify-between font-medium">
        <span data-aos-once="true" data-aos="fade-down">May, 25 2025</span>
        <span data-aos-once="true" data-aos="fade-down">BREAKING NEWS</span>
        <span data-aos-once="true" data-aos="fade-down">G&M</span>
      </div>
      <h1 className="abril-fatface text-lg font-bold mt-2 border-y py-3 border-black" data-aos-once="true" data-aos="fade-up">
        {mainTitle}
      </h1>
      {subtitle && (
        <p className="text-[10px] font-semibold uppercase mt-3" data-aos-once="true" data-aos="fade-up">{subtitle}</p>
      )}
    </div>
  );
};

export default Header;
