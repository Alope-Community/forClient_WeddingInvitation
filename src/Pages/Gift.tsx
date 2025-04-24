import React from "react"
import GiftInfoCard from "../Components/GiftInfoCard"
import Header from "../Components/Header"

const Gift: React.FC = () => {
  return (
    <>
      <Header
        mainTitle="GIFT FOR THE NEWLYWEDS"
        subtitle="GIFT OF LOVE"
      />

      <div className="flex flex-col border-t mt-3 mx-5 items-center py-5 min-h-screen gap-6 pb-25 font-serif text-neutral-900">
        <div className="text-center max-w-xl">
          <p className="text-sm leading-relaxed" data-aos-once="true" data-aos="fade-up">
            Kehadiran Anda sudah menjadi hadiah terindah bagi kami.<br />
            Namun jika berkenan untuk berbagi tanda kasih, berikut informasi yang dapat digunakan.
          </p>
        </div>

        <GiftInfoCard
          bank="BRI"
          accountNumber="427001049929539"
          name="Gugun Guntara"
        />

        <GiftInfoCard
          bank="BRI"
          accountNumber="427001049929539"
          name="Mila Padhilatunnisa"
        />
      </div>
    </>
  )
}

export default Gift