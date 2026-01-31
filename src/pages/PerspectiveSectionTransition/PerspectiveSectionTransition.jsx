import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import Pic1 from "../PerspectiveSectionTransition/1.jpg";
import Pic2 from "../PerspectiveSectionTransition/2.jpeg";

const PerspectiveSectionTransition = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  }) 

  useEffect( () => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress}/>
      <Section2 scrollYProgress={scrollYProgress}/>
    </main>
  );
}

const Section1 = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.div style={{scale, rotate}} className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <img 
            src={Pic1}
            alt="img"
            placeholder="blur"
            fill="true"
          />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  )
};

const Section2 = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])
  return (
    <motion.div style={{scale, rotate}} className="relative h-screen">
      <img 
        src={Pic2}
        alt="img"
        placeholder="blur"
        fill="true"
      />
    </motion.div>
  )
};

export default PerspectiveSectionTransition;