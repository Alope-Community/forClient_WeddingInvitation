// import React from "react";
import routes from "../Utils/Route";
import { Link } from "react-router-dom";
import FloatButton from "./ActionButton";

const MenuBar = () => {
  return (
    <>
      <FloatButton />
      <div className="bg-[#8b4e1f] w-full  lg:w-[500px] sm:w-full md:w-full fixed bottom-0 o py-3  z-50">
        <div className={`flex flex-nowrap w-[100%] items-center px-2 gap-4 overflow-x-scroll no-scrollbar text-white`}>
          {routes.map((route, index) => {
            const isActive = location.pathname === route.path;
            return (
              <div
                key={index}
                className={`flex flex-col justify-center items-center min-w-[60px] sm:min-w-[80px] ${
                  route.id === 7 && ""
                }` }
              >
                <Link to={route.path} className={`flex flex-col items-center`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                      isActive ? "scale-125 text-white drop-shadow-md" : "text-white opacity-60"
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
