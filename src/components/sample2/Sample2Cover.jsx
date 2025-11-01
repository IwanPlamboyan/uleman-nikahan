import borderLine from "../../assets/sample2/border-line.png";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

const Sample2Cover = ({ isOpen, handleOpenInvitation }) => {
  const [searchParam] = useSearchParams();
  const guest = searchParam.get("untuk") || "Tamu";

  return (
    <header
      className={`h-screen bg-[url(/src/assets/sample2/bg-1.jpg)] bg-center bg-origin-border bg-cover bg-white/30 bg-blend-overlay relative transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      <div className="w-full h-full bg-[url(/src/assets/sample2/ornbg-1.png)] bg-bottom bg-origin-border bg-contain bg-no-repeat flex justify-center items-center flex-col text-center text-zinc-700 bg-white/10 bg-blend-overlay">
        <div className="font-cinzelDecorative text-7xl">
          <span className="block -translate-x-6 translate-y-6">R</span>
          <span className="block translate-x-6 -translate-y-6">S</span>
        </div>
        <img
          src={borderLine}
          alt="border Line"
          className="h-auto w-48 object-contain"
        />
        <p className="font-ebGaramond mt-5 text-slate-800">
          UNDANGAN PERNIKAHAN
        </p>
        <h4 className="text-6xl font-tangerine my-4 font-bold">Rizky & Siti</h4>
        <div className="font-ebGaramond text-slate-800">
          <p>Kepada Yth.</p>
          <p>Bpk/Ibu/Saudara/i</p>
        </div>
        <div className="bg-white/40 rounded border border-gray-200/80 px-7 py-2">
          <h6 className="font-poppins font-semibold text-2xl my-2">{guest}</h6>
        </div>
        <motion.button
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
          className="bg-[#C4A17E] text-white px-5 py-2 flex mt-4 mb:mb-5 mb-8 mx-auto text-sm font-semibold rounded-xs items-center shadow-md hover:shadow-lg transition cursor-pointer"
        >
          <Mail size={15} className="font-bold mr-1" strokeWidth={3} />
          Buka Undangan
        </motion.button>
      </div>
    </header>
  );
};

export default Sample2Cover;
