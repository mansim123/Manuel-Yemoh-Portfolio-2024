import "./App.css";
import Preloader from "./Sections/Preloader";
import Hero from "./Sections/Hero";
import Toggle from "react-toggle";
import { useState, useEffect } from "react"; // Import useEffect
import "react-toggle/style.css";
import { CheckedIcon, UncheckedIcon } from "./helpers/Icons";
import gsap from "gsap";
import { useRef } from "react";

function App() {
  const [isDark, setIsDark] = useState(true);
  const heroCont = useRef(null);
  const toggleCont = useRef(null);
  const [preloaderComplete, setPreloaderComplete] = useState(false); // Add preloaderComplete state

  useEffect(() => {
    const tl = gsap.timeline();

    setTimeout(() => {
      setPreloaderComplete(true);
      
      if (heroCont.current) {
        tl.to([heroCont.current,toggleCont.current], {
          opacity: 1,
          duration: 1.5, // Adjust the duration as needed
        });
      } else {
        console.error("Target element not found:", heroCont.current);
      }
    }, 3000);
  }, [heroCont]);
  
  

  return (
    <div
      className={`bg-${isDark ? "[#000000]" : "[#ffffff]"} w-screen h-screen transition-all duration-200`}
    > 
      <div ref={toggleCont} className="fixed top-4 right-4 z-10 opacity-0">
        <Toggle
          checked={isDark}
          onChange={({ target }) => setIsDark(target.checked)}
          icons={{ checked: <CheckedIcon />, unchecked: <UncheckedIcon /> }}
          aria-label="Dark mode toggle"
        />
      </div>
      <div className="fixed top-1/2 transform -translate-y-1/2 left-0 hidden opacity-0">
        <div
          className={`w-[50px] h-[7px] ${isDark ? "bg-[#ffffff]" : "bg-[#000000]"}`}
        ></div>
        <div
          className={`w-[25px] h-[7px] mt-3 ${
            isDark ? "bg-[#ffffff] opacity-60" : "bg-[#000000] opacity-60"
          } transition-all duration-200`}
        ></div>
        <div
          className={`w-[25px] h-[7px] mt-3 ${
            isDark ? "bg-[#ffffff] opacity-60" : "bg-[#000000] opacity-60"
          } transition-all duration-200`}
        ></div>
        <div
          className={`w-[25px] h-[7px] mt-3 ${
            isDark ? "bg-[#ffffff] opacity-60" : "bg-[#000000] opacity-60"
          } transition-all duration-200`}
        ></div>
      </div>

      <div ref={heroCont} className="opacity-0"><Hero isDark={isDark} preloaderComplete={preloaderComplete} /></div> 
      {!preloaderComplete && <Preloader />}
    </div>
  );
}

export default App;
