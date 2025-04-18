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

      <div className="flex flex-col items-center p-5 min-h-screen gap-6">
        <div className="text-center max-w-xl">
          <p className="text-md font-semibold leading-relaxed">
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