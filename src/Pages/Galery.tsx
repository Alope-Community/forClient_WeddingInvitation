import React from "react";
import Header from "../Components/Header";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Galery = () => {
  const images = [
    "/assets/prewed1.jpg",
    "/assets/prewed2.jpg",
    "/assets/prewed3.jpg",
    "/assets/prewed4.jpg",
    "/assets/prewed5.jpg",
    "/assets/prewed19.jpg",
    "/assets/prewed11.jpg",
    "/assets/prewed12.jpg",
    "/assets/prewed14.jpg",
    "/assets/prewed11.jpg",
  ];

  const layoutClasses = [
    "col-span-2 row-span-2 object-cover",
    "col-span-1 row-span-1 object-cover",
    "col-span-1 row-span-2 object-cover",
    "col-span-2 row-span-1 object-cover",
    "col-span-1 row-span-1 object-cover",
    "col-span-2 row-span-2 object-cover",
    "col-span-1 row-span-1 object-cover",
    "col-span-1 row-span-2 object-cover",
    "col-span-2 row-span-1 object-cover",
    "col-span-2 row-span-1 object-cover",
  ];
  const [open, setOpen] = React.useState(false);
  const [Index, setIndex] = React.useState(0);
  return (
    <>
      <Header mainTitle="A JOURNEY OF US" subtitle="May 25, 2025" />

      <div className="min-h-screen font-serif text-center px-4 pb-24 text-neutral-900 pt-6">
        <div className="grid grid-cols-3 auto-rows-[120px] gap-2 max-w-4xl mx-auto">
          {images.map((src, index) => (
            <img
              onClick={() => {
                setOpen(true), setIndex(index);
              }}
              key={index}
              src={src}
              data-aos-once="true"
              data-aos="fade-up"
              alt={`Weeding ${index + 1}`}
              className={`w-full h-full ${
                layoutClasses[index % layoutClasses.length]
              }`}
            />
          ))}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={Index}
        slides={images.map((image) => ({ src: image }))}
      />
    </>
  );
};

export default Galery;
