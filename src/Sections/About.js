import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About(props) {
  const aboutCont = useRef(null);

  console.log(props.isDark);

  const technologies = [
    "JavaScript",
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
    // Add more technologies as needed
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: aboutCont.current,
        start: "top top",
        end: "bottom bottom",
      },
      onComplete: () => {
        // Your onComplete code here
        console.log("Animation completed!"); // Example code
      },
    });

    tl.fromTo(
      aboutCont.current,
      { y: "100%" }, // Initial state
      { y: "100%" } // End state
    );
  }, []);

  return (
    <>
      <div ref={aboutCont} className={`w-full h-full ${props.isDark ? 'bg-[#1f1f1f]' : 'bg-[#dbdbdb]'}`}>
        <div className="flex justify-center xl:w-[1200px] xxl:w-[1600px] h-screen m-[auto] flex-wrap transition-all duration-200">
          <div className="w-full flex items-center justify-center">
            <h2 className={`font-Roboto px-10 pt-[0rem] font-black xs:leading-[1.2] xs:text-[4rem] ${props.isDark ? 'text-[#ffffff]' : 'text-[#000000]'} text-center`}>
              ABOUT ME
            </h2>
          </div>
          <div className="w-full md:w-1/2 px-10 relative">
            <h3 className="font-Roboto px-10 pb-10 font-bold xs:leading-[1.2] xs:text-[1.4rem] text-[#000000]">
              My profile:
            </h3>
            <p className="font-Roboto px-10 font-normal xs:leading-[1.2] xs:text-[1.4rem] text-[#000000]">
              BSc in Computer Game Design, with over 13 years of professional
              digital development experience and 4 years running a successful
              production studio. Working with some of the biggest agencies in
              London, specialising in <b>React</b> and JavaScript technologies,
              HTML5 digital development, banner advertisements, HTML Emails and
              consultation.<br></br> Based in London and available for remote
              work.
            </p>
            <p className="font-Roboto px-10 pt-10 font-normal xs:leading-[1.2] xs:text-[1.4rem] text-[#000000]">
              Phone number:{" "}
              <a
                href="tel:07525003188"
                className="text-blue-800"
                rel="noreferrer"
                target="_blank"
              >
                07525003188
              </a>
              <br></br>
              Email:{" "}
              <a
                href="mailto:Manuelyemoh@gmail.com"
                className="text-blue-800"
                rel="noreferrer"
                target="_blank"
              >
                Manuelyemoh@gmail.com
              </a>
              <br></br>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/manuel-yemoh-800a7b37/"
                className="text-blue-800"
                rel="noreferrer"
                target="_blank"
              >
                https://www.linkedin.com/in/manuel-yemoh
              </a>
              <br></br>
              GitHub:{" "}
              <a
                href="https://github.com/mansim123"
                className="text-blue-800"
                rel="noreferrer"
                target="_blank"
              >
                https://github.com/mansim123
              </a>
              <br></br>
            </p>
          </div>
          <div className="w-full md:w-1/2 px-10 relative top-0">
            <h3 className="font-Roboto pb-10 font-bold xs:leading-[1.2] xs:text-[1.4rem] text-[#000000]">
              My technologies:
            </h3>
            <div className="flex flex-wrap gap-4 justify-start">
              {technologies.map((tech, index) => (
                <div key={index} className="rounded-lg flex flex-col items-center justify-start">
                  <div className="bg-white rounded-lg p-4 font-Roboto px-10 font-bold xs:leading-[1.2] xs:text-[1rem] text-[#000000]">
                    {tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
