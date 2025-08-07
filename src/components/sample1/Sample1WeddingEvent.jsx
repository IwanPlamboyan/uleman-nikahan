import { Clock8, MapPin, MapPinned } from "lucide-react";
import InformationDate from "./InformationDate";
import LeafOrnament from "./LeafOrnament";
import { motion } from "framer-motion";
import ScrollAnimate from "../framer-motion/ScrollAnimate";

const Sample1WeddingEvent = ({ weddingEventData }) => {
  const { weddingDate, weddingTime, receptionDate, receptionTime } =
    weddingEventData;

  return (
    <section id="event" className="py-14 px-5 relative">
      <div className="flex items-center space-x-5">
        <h1 className="font-cardo text-5xl text-[#997857]">Wedding</h1>
        <hr className="w-full border border-[#997857]" />
        <LeafOrnament
          className="w-40 md:w-44 absolute top-8 right-0 z-10"
          initial={{ x: 200, opacity: 0, rotate: 0, scale: 1 }}
          animate={{
            x: 0,
            opacity: 1,
            rotate: [0, -10, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
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
          }}
        />
      </div>
      <p className="font-cardo text-4xl font-semibold text-[#997857]">Event</p>

      <div className="bg-[#45576F] px-5 pt-20 pb-12 rounded-t-full text-center text-neutral-200">
        <ScrollAnimate type="slide-up" delay={0.3} duration={1}>
          <p className="font-tangerine text-5xl mb-8">Akad Pernikahan</p>

          <p className="font-cardo font-semibold text-xl mb-1 uppercase">
            {weddingDate.toLocaleDateString("id-ID", { weekday: "long" })}
          </p>
        </ScrollAnimate>

        <InformationDate date={weddingDate} />

        <ScrollAnimate type="slide-up" delay={0.5} duration={1}>
          <p className="flex justify-center items-center gap-1 text-xl font-poppins my-2">
            <Clock8 strokeWidth={2.5} />
            {weddingTime}
          </p>
          <MapPinned className="mx-auto mt-6 mb-3" size={32} />
          <p className="font-bold font-poppins mb-1">
            Geding Serba ada Bpk Hj. Umuh
          </p>
          <p className="uppercase font-poppins text-sm mx-5">
            Jl. Sekehonje RT/02/RW.13 DESA.GIRIMEKAR KEC.CILENGKRANG,
            KAB.BANDUNG
          </p>
          <button className="flex justify-center items-center mx-auto mt-6 py-2 px-4 bg-neutral-300 text-[#45576F] rounded-full text-sm font-poppins font-semibold cursor-pointer shadow hover:bg-neutral-400">
            <MapPin />
            GOOGLE MAPS
          </button>
        </ScrollAnimate>
      </div>

      <div className="bg-[#45576F] mt-5 px-5 py-15 text-center text-neutral-200 relative z-10">
        <ScrollAnimate type="slide-up" delay={0.3} duration={1}>
          <p className="font-tangerine text-5xl mb-8">Resepsi Pernikahan</p>

          <p className="font-cardo font-semibold text-xl mb-1 uppercase">
            {receptionDate.toLocaleDateString("id-ID", { weekday: "long" })}
          </p>
        </ScrollAnimate>

        <InformationDate date={receptionDate} />

        <ScrollAnimate type="slide-up" delay={0.5} duration={1}>
          <p className="flex justify-center items-center gap-1 text-xl font-poppins my-2">
            <Clock8 strokeWidth={2.5} />
            {receptionTime}
          </p>
          <MapPinned className="mx-auto mt-6 mb-3" size={32} />
          <p className="font-bold font-poppins mb-1">
            Geding Serba ada Bpk Hj. Umuh
          </p>
          <p className="uppercase font-poppins text-sm mx-5">
            Jl. Sekehonje RT/02/RW.13 DESA.GIRIMEKAR KEC.CILENGKRANG,
            KAB.BANDUNG
          </p>
          <button className="flex justify-center items-center mx-auto mt-6 py-2 px-4 bg-neutral-300 text-[#45576F] rounded-full text-sm font-poppins font-semibold cursor-pointer shadow hover:bg-neutral-400">
            <MapPin />
            GOOGLE MAPS
          </button>
        </ScrollAnimate>
      </div>

      <LeafOrnament
        className="w-40 md:w-44 absolute bottom-0 left-0 rotate-180"
        initial={{ x: 200, opacity: 0, rotate: 0, scale: 1 }}
        animate={{
          x: 0,
          opacity: 1,
          rotate: [0, -10, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
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
        }}
      />
    </section>
  );
};

export default Sample1WeddingEvent;
