import { useSearchParams } from "react-router-dom";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import LeafOrnament from "./LeafOrnament";

const Sample1Cover = ({ isOpen, handleOpenInvitation }) => {
  const [searchParam] = useSearchParams();
  const guest = searchParam.get("untuk") || "Tamu";

  return (
    <section
      className={`h-screen bg-[url(/src/assets/sample1/sample1-model1.jpg)] bg-center bg-origin-border bg-cover bg-black/40 bg-blend-overlay relative transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* start leaf ornament */}
      <LeafOrnament
        className="w-40 md:w-44 absolute top-0 right-0"
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
      {/* end leaf ornament */}

      <div className="w-full h-full flex justify-center items-center z-10">
        <div className="w-[calc(100%-50px)] h-[calc(100%-50px)] border-2 border-dashed border-[#C4A17E] py-11 flex flex-col justify-between z-10">
          <div>
            <motion.h3
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-center text-white font-poppins text-xs"
            >
              THE WEDDING OF
            </motion.h3>
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 1,
                ease: "easeOut",
              }}
              className="mt-4 text-center text-[#C4A17E] font-carattere text-[4.1rem] -rotate-10 text-shadow-lg"
            >
              Fulan
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="-mt-8 text-center text-[#C4A17E] font-carattere text-[4.1rem] text-shadow-lg"
            >
              &
            </motion.p>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 1,
                ease: "easeOut",
              }}
              className="-mt-8 text-center text-[#C4A17E] font-carattere text-[4.1rem] -rotate-10 text-shadow-lg"
            >
              Fulanah
            </motion.p>
          </div>

          <div className="mx-7 break-words">
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-center text-white text-md font-poppins"
            >
              Kepada Yth. <br /> Bapak/Ibu/Saudara/i
            </motion.p>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                y: { duration: 1, delay: 1.6, ease: "easeIn" },
                opacity: { duration: 2, delay: 1.7 },
              }}
              className="text-center text-white text-4xl my-2"
            >
              {guest}
            </motion.p>
            <motion.button
              initial={{ y: 30, opacity: 0, scale: 1 }}
              animate={{ y: 0, opacity: 1, scale: [1, 1.1, 1] }}
              transition={{
                y: { duration: 1, delay: 1.6, ease: "easeIn" },
                opacity: { duration: 2, delay: 1.7 },
                scale: {
                  delay: 1.9,
                  duration: 1.8,
                  ease: "easeIn",
                  repeat: Infinity,
                },
              }}
              onClick={handleOpenInvitation}
              className="bg-[#C4A17E] text-white px-4 py-2 flex mt-5 mb:mb-5 mb-8 mx-auto text-sm font-semibold rounded-xs items-center shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <Mail size={15} className="font-bold mr-1" strokeWidth={3} />
              Buka Undangan
            </motion.button>
          </div>
        </div>
      </div>

      {/* start overlay */}
      <div className="w-full h-1/4 absolute bottom-0 left-0 bg-linear-to-t from-[#465871] to-transparent -z-10" />
      {/* end overlay */}

      {/* start leaf ornament */}
      <LeafOrnament
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
        className="w-40 md:w-44 absolute bottom-0 left-0 rotate-180 z-10"
      />
      {/* end leaf ornament */}
    </section>
  );
};

export default Sample1Cover;
