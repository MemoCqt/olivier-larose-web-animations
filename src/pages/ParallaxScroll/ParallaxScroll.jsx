import { useEffect } from 'react';
import Lenis from "lenis";
import GSAP from "./GSAP";
import FramerMotion from "./FramerMotion";
import styles from "./parallaxscroll.module.scss";

const Home = () => {

    useEffect( () => {
        const lenis = new Lenis()
        
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])

    return (
        <main className={styles.main}>
            <GSAP />
            <FramerMotion />
        </main>
    )
};

export default Home;