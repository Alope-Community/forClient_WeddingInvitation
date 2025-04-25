// import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";

const Home = () => {
  const navigate = useNavigate();

  const { name } = useParams<{ name?: string }>();
  
  const handleOpenInvitation = () => {
    navigate(`/couple/${name}`);
  };
  const formatedName = name
    ? name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  return (
    <>
      <Header mainTitle="THE LOVE ISSUE" subtitle="" />

      <div className="min-h-screen text-neutral-900 font-serif flex flex-col items-center text-center px-4 pt-3 pb-25">
        <p
          className="text-[14px] italic mb-6 max-w-sm"
          data-aos="fade-up"
          data-aos-once="true"
        >
          ONE VOW, TWO HEARTS, AND THE BEGINNING OF A FOREVER STORY
        </p>

        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Couple"
          className="mb-6 shadow-md max-w-[320px] aspect-square object-cover"
          data-aos="zoom-in"
          data-aos-once="true"
        />

        <div className="w-full max-w-md">
          <h2 className="text-lg font-bold border-y border-black py-2 mb-4">
            TOP NEWS
          </h2>
          <p className="text-sm mb-2">Kepada Yth.</p>
          <p className="text-sm font-medium mb-1">Bapak/Ibu/Saudara/i</p>
          <p className="text-sm italic mb-6">{formatedName}</p>

          <button
            onClick={handleOpenInvitation}
            className="bg-[#8A5529] text-white text-sm px-4 py-2 rounded hover:bg-amber-800 transition"
          >
            Open Invitation
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
