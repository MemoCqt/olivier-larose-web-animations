import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";

const Paragraph = ({paragraph}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.p 
      ref={container}         
      className={styles.paragraph}
      style={{opacity}}
    >
      {paragraph}
    </motion.p>
  )
};

export default Paragraph;