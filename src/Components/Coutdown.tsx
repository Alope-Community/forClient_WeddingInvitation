import React, { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-05-25T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-around pt-4 pb-25 text-[#BE1D1D] font-bold" data-aos-once="true" data-aos="fade-up">
      <div>
        <p className="text-2xl">{String(timeLeft.days).padStart(2, "0")}</p>
        <p className="text-xs">Days</p>
      </div>
      <div>
        <p className="text-2xl">{String(timeLeft.hours).padStart(2, "0")}</p>
        <p className="text-xs">Hours</p>
      </div>
      <div>
        <p className="text-2xl">{String(timeLeft.minutes).padStart(2, "0")}</p>
        <p className="text-xs">Minutes</p>
      </div>
      <div>
        <p className="text-2xl">{String(timeLeft.seconds).padStart(2, "0")}</p>
        <p className="text-xs">Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
