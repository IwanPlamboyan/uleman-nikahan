import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const InformationDate = ({ date }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <div className="w-full h-16 md:h-20 space-x-2 md:space-x-3 flex justify-center">
      <motion.div
        ref={ref1}
        initial={{ x: 120, opacity: 0 }}
        animate={isInView1 ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.3, delay: 0.5, ease: "easeOut" }}
        className="w-full h-full flex flex-5 flex-col justify-center items-center z-10"
      >
        <span className="w-full h-0.5 bg-[#C4A17E]" />
        <p className="text-white font-cardo text-md md:text-xl uppercase">
          {date.toLocaleDateString("id-ID", { month: "long" })}
        </p>
        <span className="w-full h-0.5 bg-[#C4A17E]" />
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ y: -50 }}
        animate={isInView2 ? { y: 0 } : {}}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="w-full h-full flex-3 md:flex-5 bg-[#C4A17E] rounded-sm flex justify-center items-center text-4xl md:text-6xl font-cardo font-bold text-white z-20"
      >
        {date.getDate()}
      </motion.div>
      <motion.div
        ref={ref3}
        initial={{ x: -120, opacity: 0 }}
        animate={isInView3 ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.3, delay: 0.5, ease: "easeOut" }}
        className="w-full h-full flex flex-5 flex-col justify-center items-center z-30"
      >
        <span className="w-full h-0.5 bg-[#C4A17E]" />
        <p className="text-white font-cardo text-md md:text-xl uppercase">
          {date.getFullYear()}
        </p>
        <span className="w-full h-0.5 bg-[#C4A17E]" />
      </motion.div>
    </div>
  );
};

export default InformationDate;
