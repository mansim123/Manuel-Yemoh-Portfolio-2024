import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useEffect, useState, useRef } from "react";
import Lottie from "react-lottie";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  isDark: boolean; // Replace with the actual type of isDark
  isHidden: string;
  preloaderComplete: boolean;
  toggleIsHiddenTrue: () => void;
  toggleIsHiddenFalse: () => void;
}

const Hero: React.FC<HeroProps> = ({
  isDark,
  isHidden,
  preloaderComplete,
  toggleIsHiddenTrue,
  toggleIsHiddenFalse,
}) => {
  const heroSectionRef = useRef<HTMLDivElement>(null);

  //Lottie code
  const defaultOptionsWhite = {
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true to autoplay the animation
    animationData: require("../scrollDownWhite.json"), // Reference the JSON file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  //Lottie code
  const defaultOptionsBlack = {
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true to autoplay the animation
    animationData: require("../scrollDownBlack.json"), // Reference the JSON file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  //Lottie code
  const defaultOptionsWhiteMobile = {
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true to autoplay the animation
    animationData: require("../scrollUpMobileWhite.json"), // Reference the JSON file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  //Lottie code
  const defaultOptionsBlackMobile = {
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true to autoplay the animation
    animationData: require("../scrollUpMobileBlack.json"), // Reference the JSON file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  //Check when the Light/Dark mode is toggled
  const [isToggled, setIsToggled] = useState("opacity-0 duration-0");

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef.current,
        onEnterBack: () => {
          toggleIsHiddenFalse();
        },
        onLeave: () => {
          toggleIsHiddenTrue();
        },
        start: "top 50%",
        end: "bottom 0%",
        // markers:true,
        toggleActions: "play none none reverse",
      },
    });

    if (isDark) {
      setIsToggled("opacity-0 duration-0");
    } else {
      setIsToggled("opacity-0 duration-0");
    }
  }, [isDark, toggleIsHiddenFalse, toggleIsHiddenTrue]);

  const particlesLoaded = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsToggled("opacity-100 duration-200");
        resolve();
      }, 50);
    });
  };

  const particlesInit = async (main: HTMLElement | any) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <>
      <section
        ref={heroSectionRef}
        id="particles-js"
        className="w-auto h-screen relative"
      >
        {/* Centered Text */}
        <div className="absolute inset-0 flex justify-center items-center top-[-4rem]">
          <div>
            <h1
              className={`font-Roboto px-2 font-black xs:leading-[1.2] xs:text-[4rem] md:text-[6rem] lg:text-[8rem] xxl:text-[11rem] text-center ${
                isDark ? "text-[#ffffff]" : "text-[#000000]"
              } transition-all duration-200`}
            >
              MANUEL YEMOH
            </h1>
            <h2
              className={`font-Roboto px-2 font-black xs:text-[2rem] md:text-[3.5rem] lg:text-[5rem] xxl:text-[7rem] text-center ${
                isDark ? "text-[#ffffff]" : "text-[#000000]"
              } transition-all duration-200`}
            >
              Front End Developer
            </h2>
          </div>
        </div>

        {/* Centered Lottie Animation */}
        <div className="absolute inset-0 flex justify-center items-center xs:top-[28rem] sm:top-[28rem] md:top-[23rem] lg:top-[30rem] xxl:top-[35rem] transition-all duration-200">
          <div className="xs:w-[80px] xs:h-[225px] lg:w-[75px] lg:h-[250px] xxl:w-[100px] xxl:h-[300px] transition-all duration-200">
            {isDark ? (
              <>
                <div className="xs:hidden md:block">
                  <Lottie options={defaultOptionsWhite} />
                </div>
                <div className="xs:block md:hidden">
                  <Lottie options={defaultOptionsWhiteMobile} />
                </div>
              </>
            ) : (
              <>
                <div className="xs:hidden md:block">
                  <Lottie options={defaultOptionsBlack} />
                </div>
                <div className="xs:block md:hidden">
                  <Lottie options={defaultOptionsBlackMobile} />
                </div>
              </>
            )}
          </div>
        </div>

        {preloaderComplete && (
          <Particles
            className={`${isToggled} transition-all ${isHidden}`}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 60,
              pauseOnOutsideViewport: true,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 150,
                    duration: 10,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 250,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: true,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 1400,
                  },
                  value: 150,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "triangle",
                },
                size: {
                  value: { min: 1, max: 6 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </section>
    </>
  );
};

export default Hero;
