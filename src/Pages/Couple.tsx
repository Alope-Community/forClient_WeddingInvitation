// import React from 'react'

import Header from "../Components/Header";
import MenuBar from "../Components/MenuBar";

const Couple = () => {
  return (
    <>
      <Header
        mainTitle="INFFOCUS: THE COUPLE"
        subtitle="THEY ARE NOT JUST THE HEADLINE — THEY ARE THE WHOLE STORY"
      />
      <div className="w-full flex justify-center my-3">
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gugun and Mila"
          className="w-full h-[250px] max-w-xs object-cover mb-3 border border-black"
        />
      </div>
      <div className="text-center font-serif">
        <h2 className="text-2xl font-bold text-red-700 border-y py-3 border-black">
          GUGUN <span className="charm-reguler text-black ">And</span> MILA
        </h2>
      </div>

      <div className="text-sm font-serif text-justify leading-relaxed my-5">
        <p>
          Their story began with a simple meeting and blossomed into something
          extraordinary — a bond built on love, trust, and shared dreams. They
          are not just the headline — they are the whole story. Today, Gugun and
          Mila step into the spotlight as partners in a lifetime journey that
          tells the best chapters ever written, where love speaks, joy sparkles,
          and together stays home.
        </p>
      </div>

      <div className="text-[10px] text-center border-y py-3 border-black pt-2 font-serif">
        Published by The Eternal Love of Gugun & Mila
      </div>

      <MenuBar />
    </>
  );
};

export default Couple;
