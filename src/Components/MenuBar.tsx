import React from 'react'
import routes from '../Utils/Route'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-[#8b4e1f] py-3 overflow-x-auto z-50">
        <div className="flex flex-nowrap w-max px-2 gap-4 text-white">
          {routes.map((route, index) => (
            <div key={index} className="flex flex-col items-center min-w-[90px]">
              <Link to={route.path} className="flex flex-col items-center">
                <div className="text-lg">{route.icon}</div>
                <span className="text-[12px] mt-1">{route.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default MenuBar