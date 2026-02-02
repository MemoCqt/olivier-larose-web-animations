import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Background from "../BackgroundImageParallax/2.jpg";

const Intro = () => {
    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end start"]
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
  
    return (
      <div className="h-screen overflow-hidden">
        <motion.div style={{y}} className="relative h-full">
          <img src={Background} fill="true" alt="image" style={{objectFit: "cover"}}/>
        </motion.div>
      </div>
    )
};

export default Intro;