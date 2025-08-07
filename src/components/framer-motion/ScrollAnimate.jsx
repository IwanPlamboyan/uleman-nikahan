import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const animationVariants = {
  "fade-in": {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  "slide-left": {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  "slide-right": {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  "slide-up": {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  "slide-down": {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  },
  "zoom-in": {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  "rotate-in": {
    initial: { opacity: 0, rotate: -15 },
    animate: { opacity: 1, rotate: 0 },
  },
  "flip-in": {
    initial: { opacity: 0, rotateY: 90, scale: 0.5 },
    animate: { opacity: 1, rotateY: 0, scale: 1 },
    style: { transformStyle: "preserve-3d" },
  },
};

const ScrollAnimate = ({
  children,
  type = "fade-in",
  delay = 0,
  duration = 0.6,
  ease = "easeOut",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { initial, animate, style } =
    animationVariants[type] || animationVariants["fade-in"];

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : {}}
      transition={{ duration, delay, ease }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimate;
