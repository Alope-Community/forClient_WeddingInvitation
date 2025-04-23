// import React from "react";
import routes from "../Utils/Route";
import { Link, useLocation } from "react-router-dom";
import FloatButton from "./ActionButton";

const MenuBar = () => {
  const location = useLocation();
  return (
    <>
      <FloatButton />
      <div className="bg-[#8b4e1f] max-w-[500px] mx-auto fixed bottom-0 right-auto py-3 overflow-x-hidden z-50">
        <div className="flex flex-nowrap w-[100%] items-center px-2 gap-4 overflow-x-auto text-white">
          {routes.map((route, index) => {
            const isActive = location.pathname === route.path;
            return (
              <div
                key={index}
                className={`flex flex-col justify-center items-center min-w-[80px] ${
                  index === 6 && "mr-44 sm:mr-0"
                } sm:mr-auto` }
              >
                <Link to={route.path} className={`flex flex-col items-center`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                      isActive ? "scale-125 text-white drop-shadow-md" : "text-white opacity-70"
                    }`}
                  >
                    <div className="text-lg">{route.icon}</div>
                  </div>
                  <span
                    className={`text-[12px] mt-1 transition-all duration-300 ${isActive ? "text-white bg-[#8b4e1f] rounded-full" : ""
                      }`}
                  >
                    {route.label}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuBar;
