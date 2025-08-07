import { memo, useState } from "react";
import LeafOrnament from "./LeafOrnament";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import wave1 from "../../assets/sample1/sample1-wave1.svg";
import wave2 from "../../assets/sample1/sample1-wave2.svg";
import InformationDate from "./InformationDate";
import Sample1Countdown from "./Sample1Countdown";
import ScrollAnimate from "../framer-motion/ScrollAnimate";
import "swiper/css";

const Sample1HeroSection = ({ isOpen, slides, weddingEventData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const animate = {
    x: 0,
    opacity: 1,
    rotate: [0, -10, 0],
    scale: [1, 1.08, 1],
  };

  const transition = {
    x: { duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.2 },
    opacity: { duration: 1.8, delay: 0.2 },
    rotate: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
    scale: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  return (
    <section
      id="hero"
      className={`transition-all duration-500 ease-in-out w-full ${
        isOpen
          ? "opacity-100 scale-100"
          : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      <div className="relative">
        {/* leaf ornament */}
        <LeafOrnament
          className="w-40 md:w-44 absolute top-[20%] -right-25 z-10"
          initial={{ x: 200, opacity: 0, rotate: 0, scale: 1 }}
          animate={animate}
          transition={transition}
        />
        <LeafOrnament
          className="w-40 md:w-44 absolute bottom-[20%] -left-25 rotate-180 z-10"
          initial={{ x: 200, opacity: 0, rotate: 0, scale: 1 }}
          animate={animate}
          transition={transition}
        />
        {/* end leaf ornament */}

        {/* start swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          dir="rtl"
          speed={1200}
          autoplay={{ delay: 9000 }}
          modules={[Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              {index === activeIndex ? (
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, duration: 4, ease: "easeOut" }}
                  className="h-[70vh] bg-contain bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              ) : (
                <div
                  className="h-[70vh] bg-contain bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        {/* end swiper */}

        {/* start overlay swiper */}
        <div className="w-full h-1/4 absolute -bottom-1 left-0 bg-linear-to-t from-[#465871] to-transparent z-10" />
        {/* end overlay swiper */}
      </div>

      {/* start information */}
      <div className="bg-[#465871] pt-10 px-7 md:px-10 pb-32 relative">
        <motion.h3
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-white font-poppins text-xs"
        >
          THE WEDDING OF
        </motion.h3>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.3,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="text-center text-[#C4A17E] font-carattere text-5xl mt-2"
        >
          <h1>
            Fulan <span className="mx-3">&</span> Fulanah
          </h1>
          <h1 className="-z-10 opacity-15 -mt-8">
            Fulan <span className="mx-3">&</span> Fulanah
          </h1>
        </motion.div>

        <InformationDate date={weddingEventData.weddingDate} />

        <ScrollAnimate type="slide-up" delay={0.3} duration={1}>
          <h3 className="text-center text-white text-poppins italic font-normal text-xl my-4">
            SAVE THE DATE
          </h3>
          <Sample1Countdown weddingDate={weddingEventData.weddingDate} />
        </ScrollAnimate>
        <img
          src={wave1}
          alt="sample1-wave1"
          className="absolute w-full bottom-0 left-0"
        />
        <img
          src={wave2}
          alt="sample1-wave2"
          className="absolute w-full -bottom-4 left-0"
        />
      </div>
      {/* end information */}
    </section>
  );
};

export default memo(Sample1HeroSection);
