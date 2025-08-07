import sample1Model2 from "../../assets/sample1/sample1-model2.jpg";
import sample1Model3 from "../../assets/sample1/sample1-model3.jpg";
import wave1 from "../../assets/sample1/sample1-wave1.svg";
import LeafOrnament from "./LeafOrnament";
import { motion } from "framer-motion";
import ImageTicker from "./ImageTicker";
import bcaLogo from "../../assets/atm/bca-logo.png";
import SayingInput from "./SayingInput";
import SayingList from "./SayingList";
import Sample1Footer from "./Sample1Footer";
import Sample1WeddingEvent from "./Sample1WeddingEvent";
import Sample1Gallery from "./Sample1Gallery";
import Sample1BridalProfile from "./Sample1BridalProfile";
import Sample1ConfirmAttendance from "./Sample1ConfirmAttendance";
import Sample1WeddingGift from "./Sample1WeddingGift";
import Sample1HeroSection from "./Sample1HeroSection";
import BtnSound from "./BtnSound";
import ScrollAnimate from "../framer-motion/ScrollAnimate";
import Sample1Navbar from "./Sample1Navbar";

const slides = [
  {
    id: 1,
    image: sample1Model2,
  },
  {
    id: 2,
    image: sample1Model3,
  },
];

const weddingEventData = {
  weddingDate: new Date("2025-09-20"),
  weddingTime: "08:00 - 11:00",
  receptionDate: new Date("2025-09-20"),
  receptionTime: "11:00 - 15:00",
};

const galleries = [
  {
    id: 1,
    image: sample1Model2,
    className: "col-span-12 w-full h-72",
  },
  {
    id: 2,
    image: sample1Model3,
    className: "col-span-12 md:col-span-8 row-start-2 w-full h-72 md:h-60",
  },
  {
    id: 3,
    image: sample1Model2,
    className:
      "col-span-6 md:col-span-4 md:row-start-2 row-start-3 w-full h-72 md:h-60",
  },
  {
    id: 4,
    image: sample1Model3,
    className:
      "col-span-6 md:col-span-4 col-start-7 row-start-3 w-full h-72 md:h-60",
  },
  {
    id: 5,
    image: sample1Model2,
    className:
      "col-span-6 md:col-span-4 row-start-4 md:row-start-3 w-full h-72 md:h-60",
  },
  {
    id: 6,
    image: sample1Model3,
    className:
      "col-span-6 md:col-span-4 col-start-7 row-start-4 md:row-start-3 w-full h-72 md:h-60",
  },
  {
    id: 7,
    image: sample1Model2,
    className: "col-span-6 row-start-5 md:row-start-4 w-full h-72",
  },
  {
    id: 8,
    image: sample1Model3,
    className: "col-span-6 col-start-7 row-start-5 md:row-start-4 w-full h-72",
  },
  {
    id: 9,
    image: sample1Model2,
    className:
      "col-span-12 md:col-span-8 row-start-6 md:row-start-5 w-full h-72 md:h-60",
  },
  {
    id: 10,
    image: sample1Model3,
    className:
      "col-span-6 md:col-span-4 row-start-7 md:row-start-5 w-full h-72 md:h-60",
  },
  {
    id: 11,
    image: sample1Model2,
    className:
      "col-span-6 md:col-span-4 col-start-7 row-start-7 md:row-start-6 w-full h-72 md:h-60",
  },
  {
    id: 12,
    image: sample1Model3,
    className:
      "col-span-6 md:col-span-4 row-start-8 md:row-start-6 w-full h-72 md:h-60",
  },
  {
    id: 13,
    image: sample1Model2,
    className:
      "col-span-6 md:col-span-4 col-start-7 row-start-8 md:row-start-6 w-full h-72 md:h-60",
  },
  {
    id: 14,
    image: sample1Model3,
    className: "col-span-12 row-start-9 md:row-start-7 w-full h-72",
  },
];

const bankAccounts = [
  {
    accountNumber: "1234567890",
    name: "Hamda Allah",
    bankLogo: bcaLogo,
  },
  {
    accountNumber: "1234567890",
    name: "Hamda Allah",
    bankLogo: bcaLogo,
  },
];

const Sample1MainInvitation = ({ isOpen, togglePlayPause, isPlaying }) => {
  return (
    <>
      {/* start button sound music */}
      <BtnSound togglePlayPause={togglePlayPause} isPlaying={isPlaying} />
      {/* endbutton sound music */}

      <Sample1HeroSection
        isOpen={isOpen}
        slides={slides}
        weddingEventData={weddingEventData}
      />

      {/* start do'a  */}
      <section className="bg-[#94A2B8] pt-0.5 pb-20 px-5 relative">
        <hr className="w-full h-0.5 bg-[#465871]" />
        <ScrollAnimate type="slide-up" delay={0.3} duration={1}>
          <div className="mt-8">
            <p className="md:px-5 text-white font-poppins text-center italic">
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang.
            </p>
            <p className="text-white font-poppins text-center italic">
              (QS. Ar-Rum: 21)
            </p>
          </div>
        </ScrollAnimate>
        <ImageTicker />
        <LeafOrnament
          className="w-40 md:w-44 absolute top-[28%] -left-5 rotate-180"
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
        <img
          src={wave1}
          alt="sample1-wave1"
          className="absolute w-full bottom-0 left-0"
        />
      </section>
      {/* end do'a  */}

      {/* start bridal profile */}
      <Sample1BridalProfile />
      {/* end bridal profile */}

      {/* start wedding event */}
      <Sample1WeddingEvent weddingEventData={weddingEventData} />
      {/* end wedding event */}

      {/* start gallery */}
      <Sample1Gallery galleries={galleries} />
      {/* end gallery */}

      {/* start confirm attendance */}
      <Sample1ConfirmAttendance />
      {/* end confirm attendance */}

      {/* start wedding gift */}
      <Sample1WeddingGift bankAccounts={bankAccounts} />
      {/* end wedding gift */}

      {/* start friends wishes */}
      <section id="wishes" className="py-10 bg-[#EAEFEF] opacity-70">
        <div className="mx-7 py-14 px-5 md:px-8 shadow-xl border-2 border-white rounded-xl">
          <h2 className="mb-8 text-center font-cardo text-4xl text-stone-700">
            Friends Wishes
          </h2>

          <div className="space-y-14">
            <SayingInput />
            <SayingList />
          </div>
        </div>
      </section>
      {/* end friends wishes */}
      {/* start footer */}
      <Sample1Footer />
      {/* end footer */}

      {/* start navbar */}
      <Sample1Navbar />
      {/* end navbar */}
    </>
  );
};

export default Sample1MainInvitation;
