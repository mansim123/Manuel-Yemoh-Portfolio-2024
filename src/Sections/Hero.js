import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useEffect, useState } from "react";
import Lottie from 'react-lottie';

function Hero(props) {

  //Lottie code
  const defaultOptionsWhite = {
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true to autoplay the animation
    animationData: require('../scrollDownWhite.json'), // Reference the JSON file
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  //Lottie code
  const defaultOptionsBlack = {
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true to autoplay the animation
    animationData: require('../scrollDownBlack.json'), // Reference the JSON file
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  //Check when the Light/Dark mode is toggled
  const [isToggled, setIsToggled] = useState("opacity-0 duration-0");

  useEffect(() => {

    if (props.isDark) {
      setIsToggled("opacity-0 duration-0");
    } else {
      setIsToggled("opacity-0 duration-0");
    }
  }, [props.isDark]);

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
    setTimeout(() => {
      setIsToggled("opacity-100 duration-200");
    }, 50);
  };

  return (
    <>
      <div id="particles-js" className="w-screen h-screen fixed">
      {/* Centered Text */}
      <div className="absolute inset-0 flex justify-center items-center top-[-4rem]">
        <div>
          <h1 className={`font-Roboto px-2 font-black xs:leading-[1.2] xs:text-[4rem] md:text-[6rem] lg:text-[8rem] xxl:text-[11rem] text-center ${props.isDark ? 'text-[#ffffff]' : 'text-[#000000]'} transition-all duration-200`}>MANUEL YEMOH</h1>
          <h2 className={`font-Roboto px-2 font-black xs:text-[2rem] md:text-[3.5rem] lg:text-[5rem] xxl:text-[7rem] text-center ${props.isDark ? 'text-[#ffffff]' : 'text-[#000000]'} transition-all duration-200`}>Front End Developer</h2>
        </div>
      </div>

      {/* Centered Lottie Animation */}
      <div className="absolute inset-0 flex justify-center items-center xs:top-[18rem] sm:top-[18rem] md:top-[23rem] lg:top-[30rem] xxl:top-[35rem] transition-all duration-200">
        <div className="md:w-[60px] md:h-[225px] lg:w-[75px] lg:h-[250px] xxl:w-[100px] xxl:h-[300px] transition-all duration-200">
        {props.isDark ? <Lottie options={defaultOptionsWhite} className="w-full h-full" /> : <Lottie options={defaultOptionsBlack} className="w-full h-full" />}
          
        </div>
      </div>

      {props.preloaderComplete && ( 
        <Particles
          className={`${isToggled} transition-all`}
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
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
      </div>
    </>
  );
}

export default Hero;
