
"use client";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function RocketLaunch() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (inView && !isClicked) {
      controls.start("visible");
    }
  }, [controls, inView, isClicked]);

  useEffect(() => {
    if (isClicked) {
      controls.start("visible").then(() => {
        setTimeout(() => {
          controls.start("hidden").then(() => setIsClicked(false));
        }, 8000); // Duration of the animation
      });
    }
  }, [controls, isClicked]);

  const handleRocketClick = useCallback(() => {
    if (!isClicked) {
      setIsClicked(true);
    }
  }, [isClicked]);

  const rocketVariants = {
    hidden: { opacity: 1, y: 0 }, // Initial state where the rocket is visible
    visible: {
      opacity: 1,
      y: -2000,
      transition: { duration: 8, ease: "easeOut", delay: 1 },
    },
  };

  return (
    <div className="-mt-16 flex justify-center items-end relative">
      <div className="mb-80">
        <Image src={'/cloud.svg'} width={500} height={1000} alt="background" className="" />
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={rocketVariants}
        className="cursor-pointer"
        onClick={handleRocketClick}
      >
        <Image src={'/rocket.svg'} width={400} height={500} alt="rocket" />
      </motion.div>
      <div className="mb-80">
        <Image src={'/right-cloud.svg'} width={500} height={1000} alt="background" className="" />
      </div>
    </div>
  );
}
