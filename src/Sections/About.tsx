import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AmongUsBackground from "../helpers/amongUs";
gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = (props) => {
  const aboutCont = useRef<HTMLDivElement>(null);
  const susImage = useRef<HTMLImageElement>(null);

  const imageSwapArray = [
    "../manuelImage1.jpg",
    "../manuelImage2.jpg",
    "../manuelImage3.jpg"
  ]

  let currentImage = 0;
  const [susImageRef, setSusImageRef] = useState<string>(imageSwapArray[currentImage]);

  console.log(props.isDark);

  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "NextJs",
    "GatsbyJs",
    "ES6",
    "NPM",
    "AWS",
    "XML",
    "JSON",
    "AJAX",
    "Tailwind",
    "CSS2/3",
    "Styled Components",
    "MUI",
    "GSAP",
    "Adobe CC",
  ];

  

  const handleResize = useCallback(() => {
    // This function will be called whenever the window resizes
    resetAnimation();
    console.log('Window resized!');
  }, []);

const handleImageSwap = () => {
  if (currentImage < 2) {
    currentImage = currentImage + 1;
  } else if (currentImage === 2) {
    currentImage = 0; 
  }
  setSusImageRef(imageSwapArray[currentImage]);
}

  const resetAnimation = () => {
    // Reset the animation to its start position

    gsap.killTweensOf(susImage.current);
    gsap.to(susImage.current, {
      duration: 0,
      x: -150,
      rotate: 0,
      onComplete: () => {
        playAnimation();
      }
    });
  };

  const playAnimation = useCallback(() => {
    gsap.to(susImage.current, {
      duration: 25,
      x: window.innerWidth + 200,
      rotate: 360,
      ease: "linear",
      onComplete: () => {
        resetAnimation();
        handleImageSwap();
      },
    });
  }, []);

  useEffect(() => {
   
    playAnimation();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [playAnimation, handleResize]);

  return (
    <>
      <section
        ref={aboutCont}
        className={`relative overflow-x-hidden top-[100vh] w-full h-full ${
          props.isDark ? "bg-[#101131]" : "bg-[#c6cbdb]"
        }`}
      >
        <img
          ref={susImage}
          alt="manuelImage1"
          className="w-[150px] h-[150px] z-[1] rounded-full left-[-150px] absolute xxl:top-[20%]"
          src={susImageRef}
        ></img>
        <div className="flex justify-center xs:w-100 md:w-[95%] lg:w-[90%] xxl:w-[75%] h-screen m-[auto] flex-wrap transition-all duration-200">
          <div className="w-full flex items-center justify-center z-[2] pb-[10rem]">
            <h2
              className={`font-Roboto lg:px-10 xs:pt-20 xs:pb-5 md:pb-0 md:pt-[0rem] font-black xs:text-[3rem] md:text-[4rem]  ${
                props.isDark ? "text-[#ffffff]" : "text-[#000000]"
              } text-center transition-all duration-200`}
            >
              ABOUT ME<br></br>
              <span
                className={`w-[150px] h-[3px] realtive inline-block relative top-[-3rem] ${
                  props.isDark ? "bg-[#ffffff]" : "bg-[#000000]"
                } text-center transition-all duration-200`}
              ></span>
            </h2>
          </div>
          <div className={`w-full md:w-1/2 px-10 z-10 relative`}>
            <h3
              className={`font-Roboto lg:px-10 pb-10 font-bold xs:text-[1.2rem] xl:text-[1.4rem] ${
                props.isDark ? "text-[#ffffff]" : "text-[#000000]"
              } transition-all duration-200`}
            >
              My profile:
            </h3>
            <p
              className={`font-Roboto lg:px-10 font-normal  lg:text-[1.2rem] xl:text-[1.4rem] ${
                props.isDark ? "text-[#ffffff]" : "text-[#000000]"
              } transition-all duration-200`}
            >
              BSc in Computer Game Design, with over 13 years of professional
              digital development experience and 4 years running a successful
              production studio. Working with some of the biggest agencies in
              London, specializing in <b>React</b> and JavaScript technologies,
              HTML5 digital development, banner advertisements, HTML Emails and
              consultation.<br className="xs:hidden md:show"></br> Based in London and available for remote
              work.
            </p>
            <p
              className={`font-Roboto lg:px-10 pt-10 font-normal lg:text-[1.2rem] xl:text-[1.4rem] ${
                props.isDark ? "text-[#ffffff]" : "text-[#000000]"
              } transition-all duration-200`}
            >
              Phone number:{" "}
              <a
                href="tel:07525003188"
                className={` ${
                  props.isDark ? "text-[#4184ff]" : "text-[#5e41ff]"
                } transition-all duration-200`}
                rel="noreferrer"
                target="_blank"
              >
                07525003188
              </a>
              <br></br>
              Email:{" "}
              <a
                href="mailto:Manuelyemoh@gmail.com"
                className={` ${
                  props.isDark ? "text-[#4184ff]" : "text-[#5e41ff]"
                } transition-all duration-200`}
                rel="noreferrer"
                target="_blank"
              >
                Manuelyemoh@gmail.com
              </a>
              <br></br>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/manuel-yemoh-800a7b37/"
                className={` ${
                  props.isDark ? "text-[#4184ff]" : "text-[#5e41ff]"
                } transition-all duration-200`}
                rel="noreferrer"
                target="_blank"
              >
                manuel-yemoh
              </a>
              <br></br>
              GitHub:{" "}
              <a
                href="https://github.com/mansim123"
                className={` ${
                  props.isDark ? "text-[#4184ff]" : "text-[#5e41ff]"
                } transition-all duration-200`}
                rel="noreferrer"
                target="_blank"
              >
                mansim123
              </a>
              <br></br>
            </p>
          </div>
          <div className={`w-full md:w-1/2 px-10 xs:py-10 md:py-0 relative top-0`}>
            <h3
              className={`font-Roboto pb-10 font-bold xs:text-[1.2rem] xl:text-[1.4rem] ${
                props.isDark ? "text-[#ffffff]" : "text-[#000000]"
              } transition-all duration-200`}
            >
              My technologies:
            </h3>
            <div className="flex flex-wrap gap-4 justify-start">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="rounded-lg flex flex-col items-center justify-start"
                >
                  <div
                    className={`rounded-lg xs:p-3 md:p-4 font-Roboto px-10 font-bold xs:text-[0.8rem] lg:text-[1rem] ${
                      props.isDark
                        ? "text-[#000000] bg-[#ffffff]"
                        : "text-[#ffffff] bg-[#000000]"
                    } transition-all duration-200`}
                  >
                    {tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <AmongUsBackground />
      </section>
    </>
  );
};

export default About;
