// import React from "react";
import routes from "../Utils/Route";
import { Link } from "react-router-dom";
import FloatButton from "./ActionButton";

const MenuBar = () => {
  return (
    <>
      <FloatButton />
      <div className="bg-[#8b4e1f] max-w-[500px] mx-auto fixed bottom-0 right-auto py-3 overflow-x-auto z-50">
        <div className="flex flex-nowrap w-[100%] mr-20 items-center px-2 gap-4 text-white">
          {routes.map((route, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center min-w-[80px]"
            >
              <Link to={route.path} className="flex flex-col items-center">
                <div className="text-lg">{route.icon}</div>
                <span className="text-[12px] mt-1">{route.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuBar;
