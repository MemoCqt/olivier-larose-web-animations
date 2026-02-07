import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import Card from "./Card";
import { projects } from "./data";
import styles from "./cardsparallax.module.scss";

const CardsParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect( () => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  });

  return (
    <main ref={container} className={styles.main}>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
};

export default CardsParallax;