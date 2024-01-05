import "./App.css";
import Toggle from "react-toggle";
import { useState, useEffect } from "react"; // Import useEffect
import "react-toggle/style.css";
import { CheckedIcon, UncheckedIcon } from "./helpers/Icons";
import gsap from "gsap";
import { useRef } from "react";

import Preloader from "./Sections/Preloader";
//import About from "./Sections/About";
import Hero from "./Sections/Hero";


function App() {
  const [isDark, setIsDark] = useState(true);
  const heroCont = useRef(null);
  const cvBtn = useRef(null);
  const toggleCont = useRef(null);
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  //change the time of the preloader
  const PreLoaderDuration = 3;

  const openCV = () => {
    const cvFilePath = '../ManuelYemoh_CV_2024-Senior_Front_End Contract_Freelance.pdf';
    
    // Open the CV file in a new browser window.
    window.open(cvFilePath, '_blank');
  }

  useEffect(() => {
    const tl = gsap.timeline();

    setTimeout(() => {
      setPreloaderComplete(true);
      
      if (heroCont.current) {
        tl.to([heroCont.current,toggleCont.current,cvBtn.current], {
          opacity: 1,
          duration: 1.5, // Adjust the duration as needed
        });
      } else {
        console.error("Target element not found:", heroCont.current);
      }
    }, PreLoaderDuration * 1000);
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
      <button ref={cvBtn} onClick={openCV} className={`font-Roboto py-1 px-3 rounded-xl text-[0.7rem] font-black top-4 left-4 ${isDark ? "bg-[#ffffff] text-[#000000] hover:bg-[#505050] hover:text-[#ffffff]" :  "bg-[#000000] text-[#ffffff] hover:bg-[#cccccc] hover:text-[#000000]"} fixed z-30 transition-all duration-200 opacity-0`} target="_blank" href="#">DOWNLOAD CV</button>
      <div ref={heroCont} className="opacity-0"><Hero isDark={isDark} preloaderComplete={preloaderComplete} /></div>
      {/* <About/> */}
      {!preloaderComplete && <Preloader PreLoaderDuration={PreLoaderDuration} />}
    </div>
  );
}

export default App;
