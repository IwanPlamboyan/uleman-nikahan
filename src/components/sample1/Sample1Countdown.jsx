import { useEffect, useState } from "react";

const Sample1Countdown = ({ weddingDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // cleanup interval
  }, [weddingDate]);

  return (
    <div className="flex justify-center space-x-4 text-2xl text-white font-poppins text-center">
      <div className="px-4 py-2 bg-[#698698] rounded-sm">
        <p>{timeLeft.hari ?? 0}</p>
        <span className="text-sm block -mt-1">Days</span>
      </div>
      <div className="px-4 py-2 bg-[#698698] rounded-sm">
        <p>{timeLeft.jam ?? 0}</p>
        <span className="text-sm block -mt-1">Jam</span>
      </div>
      <div className="px-4 py-2 bg-[#698698] rounded-sm">
        <p>{timeLeft.menit ?? 0}</p>
        <span className="text-sm block -mt-1">Menit</span>
      </div>
      <div className="px-4 py-2 bg-[#698698] rounded-sm">
        <p>{timeLeft.detik ?? 0}</p>
        <span className="text-sm block -mt-1">Detik</span>
      </div>
    </div>
  );
};

export default Sample1Countdown;
