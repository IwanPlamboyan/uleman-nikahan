import leafOrnament from "../../assets/sample1/sample1-leaf-ornament.png";
import { motion } from "framer-motion";

const LeafOrnament = ({ className, initial, animate, transition }) => {
  return (
    <motion.img
      src={leafOrnament}
      className={`pointer-events-none ${className}`}
      initial={initial}
      animate={animate}
      transition={transition}
    />
  );
};

export default LeafOrnament;
