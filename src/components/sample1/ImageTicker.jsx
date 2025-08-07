import { motion } from "framer-motion";
import sample1Model1 from "../../assets/sample1/sample1-model1.jpg";
import sample1Model2 from "../../assets/sample1/sample1-model2.jpg";
import sample1Model3 from "../../assets/sample1/sample1-model3.jpg";

const images = [sample1Model1, sample1Model2, sample1Model3, sample1Model2];

const ImageTicker = () => {
  return (
    <div className="overflow-hidden w-full py-10 z-10 relative">
      <motion.div
        className="flex gap-2 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Gandakan isi agar bisa seamless looping */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Ticker"
            className="w-25 h-25 object-cover rounded-full"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageTicker;
