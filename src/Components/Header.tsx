import React from "react";

interface HeaderProps {
  mainTitle: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({
  mainTitle,
  subtitle,
}) => {
  return (
    <div className="text-xs text-center font-serif pb-1">
      <div className="flex justify-between font-medium">
        <span>May, 25 2025</span>
        <span>BREAKING NEWS</span>
        <span>G&M</span>
      </div>
      <h1 className="abril-fatface text-lg font-bold mt-2 border-y py-3 border-black">
        {mainTitle}
      </h1>
      <p className="text-[10px] font-semibold uppercase mt-3">{subtitle}</p>
    </div>
  );
};

export default Header;
