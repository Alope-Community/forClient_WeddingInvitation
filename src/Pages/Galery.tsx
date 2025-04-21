import React from "react";
import Header from "../Components/Header";
import MenuBar from "../Components/MenuBar";

const Galery = () => {
  const images = [
    "/img/Prewed.png",
    "/img/Prewed.png",
    "/img/Prewed.png",
    "/img/Prewed.png",
    "/img/Prewed.png",
    "/img/Prewed.png",
    "/img/Prewed.png",
    "/img/Prewed.png",
    "/img/Prewed.png",
    "/img/Prewed.png",
  ];

  const layoutClasses = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
    "col-span-2 row-span-1",
  ];

  return (
    <>
      <Header mainTitle="A JOURNEY OF US" subtitle="May 25, 2025" />

      <div className="min-h-screen font-serif text-center px-4 pb-24 text-neutral-900 pt-6">
        <div className="grid grid-cols-3 auto-rows-[120px] gap-2 max-w-4xl mx-auto">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              data-aos="fade-up"
              alt={`Foto ${index + 1}`}
              className={`w-full h-full object-cover ${
                layoutClasses[index % layoutClasses.length]
              }`}
            />
          ))}
        </div>
      </div>

      <MenuBar />
    </>
  );
};

export default Galery;
