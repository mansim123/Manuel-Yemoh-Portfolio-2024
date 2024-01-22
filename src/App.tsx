import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { CheckedIcon, UncheckedIcon } from "./helpers/Icons";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

import Preloader from "./Sections/Preloader";
import About from "./Sections/About";
import Hero from "./Sections/Hero";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isDark, setIsDark] = useState(true);
  const heroCont = useRef(null);
  const cvBtn = useRef(null);
  const aboutCont = useRef(null);
  const toggleCont = useRef(null);
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [isHidden, setIsHidden] = useState("block");
  const PreLoaderDuration = 1;

  const openCV = () => {
    const cvFilePath =
      "../ManuelYemoh_CV_2024-Senior_Front_End_Contract_Freelance.pdf";
    window.open(cvFilePath, "_blank");
  };

  useEffect(() => {

    // ScrollTrigger.refresh();
     const tl = gsap.timeline();

    setTimeout(() => {
      setPreloaderComplete(true);
      setIsHidden("block");
      if (heroCont.current) {
        tl.to([heroCont.current, toggleCont.current, cvBtn.current], {
          opacity: 1,
          duration: 1.5,
        });
      } else {
        console.error("Target element not found:", heroCont.current);
      }

      if (aboutCont.current) {
        const aboutTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: aboutCont.current,
            onEnter: function () {
              console.log("entered");
            },
            onLeave: () => {
              setIsHidden("hidden")
            },
            onEnterBack: () => {
              setIsHidden("block")
            },
            scrub: 1, // Scrub animation
            start: "top 50%", // Trigger starts at the top of the viewport
            end: "50% 50%", // Trigger ends when the element is at the top of the viewport
            markers: true,
            toggleActions: "play none none reverse", // Play animation when entering, reverse when leaving
          },
        });
  
        aboutTimeline.to(aboutCont.current, {
          opacity: 1, // You can set other properties for the animation here
        });
      }

    }, PreLoaderDuration * 1000);
  }, [heroCont]);

  return (
    <>
      <section
        className={`bg-${
          isDark ? "[#000000]" : "[#ffffff]"
        } h-screen transition-all duration-200 overflow-x-hidden`}
      >
        <div ref={toggleCont} className="fixed top-4 right-8 z-10 opacity-0">
          <Toggle
            checked={isDark}
            onChange={({ target }) => setIsDark(target.checked)}
            icons={{ checked: <CheckedIcon />, unchecked: <UncheckedIcon /> }}
            aria-label="Dark mode toggle"
          />
        </div>
        <button
          ref={cvBtn}
          onClick={openCV}
          className={`font-Roboto py-1 px-3 rounded-xl text-[0.7rem] font-black top-4 left-4 ${
            isDark
              ? "bg-[#ffffff] text-[#000000] hover:bg-[#505050] hover:text-[#ffffff]"
              : "bg-[#000000] text-[#ffffff] hover:bg-[#cccccc] hover:text-[#000000]"
          } fixed z-30 transition-all duration-200 opacity-0`}
        >
          DOWNLOAD CV
        </button>
        <div ref={heroCont} className="opacity-0">
          <Hero
            isDark={isDark}
            isHidden={isHidden}
            preloaderComplete={preloaderComplete}
          />
        </div>
        {preloaderComplete && (
          <div ref={aboutCont} className={`block opacity-100 transition-all duration-200 absolute top-[100vh]`}>
            <About isDark={isDark} isHidden={isHidden} />
          </div>
        )}
        {!preloaderComplete && (
          <Preloader PreLoaderDuration={PreLoaderDuration} />
        )}
      </section>
    </>
  );
}

export default App;
