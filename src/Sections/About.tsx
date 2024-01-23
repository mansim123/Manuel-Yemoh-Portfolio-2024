import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AmongUsBackground from "../helpers/amongUs";
gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  isDark: boolean;
  isHidden: string;
  toggleIsHiddenTrue: () => void;
  toggleIsHiddenFalse: () => void;
}

const About: React.FC<AboutProps> = (props) => {
  const aboutContInside = useRef<HTMLDivElement>(null);
  const susImage = useRef<HTMLImageElement>(null);
  const aboutHeader = useRef<HTMLImageElement>(null);
  const aboutLine = useRef<HTMLImageElement>(null);
  const profileHeader = useRef<HTMLImageElement>(null);
  const profileMainCopy = useRef<HTMLImageElement>(null);
  const profileSubCopy = useRef<HTMLImageElement>(null);
  const technologiesHeader = useRef<HTMLImageElement>(null);
  const technologiesBoxes = useRef<HTMLImageElement>(null);

  const dotRefs = useRef<HTMLDivElement[]>([]);
  const dotsAnimation = useRef<TweenLite[]>([]);
  // const [dotsAnimation, setDotsAnimation] = useState<TweenLite[]>([]);

  const imageSwapArray = [
    "../manuelImage1.jpg",
    "../manuelImage2.jpg",
    "../manuelImage3.jpg",
  ];

  let currentImage = 0;
  const [susImageRef, setSusImageRef] = useState<string>(
    imageSwapArray[currentImage]
  );
  const [previousWidth, setPreviousWidth] = useState<number>(window.innerWidth);
  const amongUsBackgroundRef = useRef<any>(null); // Create a ref

  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "NextJs",
    "GatsbyJs",
    "ES6",
    "TDD",
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

  const handleResize = () => {
    // This function will be called whenever the window resizes

    const currentWidth = window.innerWidth;
    if (currentWidth !== previousWidth) {
      resetAnimationSus();
    }
    setPreviousWidth(currentWidth);
  };

  const handleImageSwap = () => {
    if (currentImage < 2) {
      currentImage = currentImage + 1;
    } else if (currentImage === 2) {
      currentImage = 0;
    }
    setSusImageRef(imageSwapArray[currentImage]);
  };

  const resetAnimationSus = () => {
    // Reset the animation to its start position

    gsap.killTweensOf(susImage.current);
    gsap.to(susImage.current, {
      duration: 0,
      x: -150,
      rotate: 0,
      onComplete: () => {
        playAnimation();
      },
    });
  };

  const playAnimation = () => {
    gsap.to(susImage.current, {
      duration: 15,
      x: window.innerWidth + 200,
      rotate: 360,
      ease: "linear",
      onComplete: () => {
        resetAnimationSus();
        handleImageSwap();
      },
    });
  };

  useEffect(() => {

    let tl = gsap.timeline({ paused: true });

    const animateAboutSection = () => {

      tl = gsap.timeline({ paused: true });

      tl.to(aboutHeader.current, {opacity:1, duration: 1, ease: "sine.inOut" });
      tl.to(aboutLine.current, { width: 150, opacity:1, duration: 1, ease: "sine.inOut" },"-=0.75");
      tl.to(profileHeader.current, { x: 0, opacity:1, duration: 1, ease: "sine.inOut" },"-=0.75");
      tl.to(profileMainCopy.current, { x: 0, opacity:1, duration: 1, ease: "sine.inOut" },"-=0.5");
      tl.to(profileSubCopy.current, { x: 0, opacity:1, duration: 1, ease: "sine.inOut" },"-=0.25");
      tl.to(technologiesHeader.current, { x: 0, opacity:1, duration: 1, ease: "sine.inOut" },"-=0.75");
      tl.to(technologiesBoxes.current, { x: 0, opacity:1, duration: 1, ease: "sine.inOut" },"-=0.75");

      tl.play();

    }

    const resetAnimation = () => {
      tl.pause();
      // tl.pause(); // Pause the timeline
      // tl.progress(0); // Reset the timeline progress to the beginning
      gsap.to(aboutHeader.current, {opacity:0,duration: 0.2, });
      gsap.to(aboutLine.current, { width: 0, opacity:0,duration: 0.2, });
      gsap.to(profileHeader.current, { x: -50, opacity:0,duration: 0.2, });
      gsap.to(profileMainCopy.current, { x: -50, opacity:0,duration: 0.2, });
      gsap.to(profileSubCopy.current, { x: -50, opacity:0,duration: 0.2, });
      gsap.to(technologiesHeader.current, { x: 50, opacity:0,duration: 0.2, });
      gsap.to(technologiesBoxes.current, { x: 50, opacity:0,duration: 0.2, onComplete:() =>{
        tl.progress(0)
      } });
      
    }

    if (aboutContInside.current) {
      const aboutTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: aboutContInside.current,
          onEnter: () => {
            if (amongUsBackgroundRef.current) {
              amongUsBackgroundRef.current.callInitAnimation();
              playAnimation();
              animateAboutSection();
            }
          },
          onEnterBack: () => {
            
            props.toggleIsHiddenFalse();
            
          },
          onLeave: () => {
            props.toggleIsHiddenTrue();
          },
          onLeaveBack: () => {
            if (amongUsBackgroundRef.current) {
              amongUsBackgroundRef.
              current.callStopAnimation();
              resetAnimation();
              resetAnimationSus();
            }
          },
          start: "top 50%",
          end: "50% 50%",
          toggleActions: "play none none reverse",
        },
      });

    }

    window.addEventListener("resize", handleResize);
    //resetAnimation();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <section
        ref={aboutContInside}
        className={`relative w-full py-10 min-h-screen overflow-hidden ${
          props.isDark ? "bg-[#101131]" : "bg-[#c6cbdb]"
        } transition-all duration-200`}
      >
        <img
          ref={susImage}
          alt="manuelImage1"
          className="w-[150px] h-[150px] z-[1] rounded-full left-[-150px] absolute xs:top-[15rem] sm:top-[15rem]  md:top-[12rem] xxl:top-[11.5rem]"
          src={susImageRef}
        ></img>
        <div
          className={`flex justify-center xs:w-100 md:w-[95%] lg:w-[90%] xxl:w-[75%] h-auto m-[auto] flex-wrap transition-all duration-200 ${
            props.isDark ? "bg-[#101131]" : "bg-[#c6cbdb]"
          }`}
        >
          <div className="w-full flex items-center justify-center z-[2] pb-[10rem]">
            <h2
            ref={aboutHeader}
              className={`font-Roboto lg:px-10 xs:pt-20 xs:pb-5 md:pb-0 md:pt-[0rem] font-black xs:text-[3rem] md:text-[4rem]  ${
                props.isDark ? "text-[#ffffff]" : "text-[#000000]"
              } text-center `}
            >
              ABOUT ME<br></br>
              <span
                ref={aboutLine}
                className={`w-[150px] h-[3px] realtive inline-block relative top-[-3rem] ${
                  props.isDark ? "bg-[#ffffff]" : "bg-[#000000]"
                } text-center `}
              ></span>
            </h2>
          </div>
          <div className={`w-full md:w-1/2 px-10 z-10 relative`}>
            <h3
              ref={profileHeader}
              className={`font-Roboto lg:px-10 pb-10 font-bold xs:text-[1.2rem] xl:text-[1.4rem] ${
                props.isDark ? "text-[#ffffff]" : "text-[#000000]"
              } `}
            >
              My profile:
            </h3>
            <p
              ref={profileMainCopy}
              className={`font-Roboto lg:px-10 font-normal  lg:text-[1.2rem] xl:text-[1.4rem] ${
                props.isDark ? "text-[#ffffff]" : "text-[#000000]"
              } `}
            >
              BSc in Computer Game Design, with over 13 years of professional
              digital development experience and 4 years running a successful
              production studio. Working with some of the biggest agencies in
              London, specializing in <b>React</b> and JavaScript technologies,
              HTML5 digital development, banner advertisements, HTML Emails and
              consultation.<br className="xs:hidden md:show"></br> Based in
              London and available for remote work.
            </p>
            <p
            ref={profileSubCopy}
              className={`font-Roboto lg:px-10 pt-10 font-normal lg:text-[1.2rem] xl:text-[1.4rem] ${
                props.isDark ? "text-[#ffffff]" : "text-[#000000]"
              } `}
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
          <div
            className={`w-full md:w-1/2 px-10 xs:py-10 md:py-0 relative top-0`}
          >
            <h3
              ref={technologiesHeader}
              className={`font-Roboto pb-10 font-bold xs:text-[1.2rem] xl:text-[1.4rem] ${
                props.isDark ? "text-[#ffffff]" : "text-[#000000]"
              }`}
            >
              My technologies:
            </h3>
            <div ref={technologiesBoxes} className="flex flex-wrap gap-4 justify-start">
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
                    } `}
                  >
                    {tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <AmongUsBackground dotRefs={dotRefs} dotsAnimation={dotsAnimation} amongUsBackgroundRef={amongUsBackgroundRef} />
      </section>
    </>
  );
};

export default About;
