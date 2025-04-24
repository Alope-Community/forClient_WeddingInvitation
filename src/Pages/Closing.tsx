// import React from "react";
import Header from "../Components/Header";

const Closing = () => {
  return (
    <>
      <Header mainTitle="THE FINAL PAGE" subtitle="" />

      <div className=" abhaya libre medium pb-28 pt-30 flex flex-col items-center justify-center font-serif text-center px-4 text-neutral-900">
        <p className="max-w-md text-sm pb-10 leading-relaxed mb-10" data-aos="fade-up">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
          Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do’a restu kepada
          kedua mempelai.
        </p>

        <div className="flex justify-center text-sm gap-10">
          <div data-aos="fade-left">
            <p className="underline">Keluarga</p>
            <p className="font-semibold pt-3">Bapak Saefulloh (Alm)</p>
            <p className="font-semibold">dan Ibu Artinah</p>
          </div>
          <div data-aos="fade-right">
            <p className="underline">Keluarga</p>
            <p className="font-semibold pt-3">Bapak Dodo Juanda (Alm)</p>
            <p className="font-semibold">dan Ibu Neni Kurniasih (Almh)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Closing;
