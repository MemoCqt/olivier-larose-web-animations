import { useEffect } from "react";
import Lenis from "lenis";
import Component from "./Component";
import styles from "./zoomparallax.module.scss";

const ZoomParallax = () => {

    useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

    return (
        <main className={styles.main}>
            <Component />
        </main>
    )
};

export default ZoomParallax;