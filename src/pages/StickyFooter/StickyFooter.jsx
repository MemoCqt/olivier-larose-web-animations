import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "./Intro";
import Footer from "./Footer";

const StickyFooter = () => {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <Footer />
    </main>
  );
};

export default StickyFooter;