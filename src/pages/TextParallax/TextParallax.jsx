import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Picture1 from "../TextParallax/1.jpg";
import Picture2 from "../TextParallax/2.jpg";
import Picture3 from "../TextParallax/3.jpg";
import Lenis from "lenis";

const TextParallax = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
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
    <main className="overflow-hidden">
      <div className="h-screen"/>
      <div ref={container}>
        <Slide src={Picture1} direction={"left"} left={"-40%"} progress={scrollYProgress} />
        <Slide src={Picture2} direction={"right"} left={"-25%"} progress={scrollYProgress} />
        <Slide src={Picture3} direction={"left"}  left={"-75%"} progress={scrollYProgress} />
      </div>
      <div className="h-screen" />
    </main>
  );
};

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
      <Phrase src={props.src}/>
      <Phrase src={props.src}/>
      <Phrase src={props.src}/>
    </motion.div>
  )
};

const Phrase = ({src}) => {
  return (
    <div className={'px-5 flex gap-5 items-center'}>
      <p className='text-[7.5vw]'>Front End Developer</p>
      <span className="relative h-[7.5vw] aspect-4/2 rounded-full overflow-hidden">
        <img style={{objectFit: "cover"}} src={src} alt="image" fill="true" />
      </span>
    </div>
  )
};

export default TextParallax;