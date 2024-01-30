import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface WorkProps {
  isDark: boolean;
}

const Work: React.FC<WorkProps> = (props) => {
  const workCont = useRef<HTMLDivElement | null>(null);

  const [workItemsScale, setWorkItemsScale] = useState<string>("scale-0");

  const workData = [
    {
      client: "CNBC",
      year: "2023",
      type: "Website, Editorial, React",
      imageSrc: "portfolio-item-1.jpg",
      url: "https://www.cnbc.com/advertorial/a-little-arctic-towns-big-transition/",
    },
    {
      client: "CNBC",
      year: "2023",
      type: "Website, Editorial, React",
      imageSrc: "portfolio-item-2.jpg",
      url: "https://www.cnbc.com/advertorial/dubai-a-connected-pro-business-city-doing-things-differently/",
    },
    {
      client: "CNBC",
      year: "2023",
      type: "Website, React",
      imageSrc: "portfolio-item-3.jpg",
      url: "https://www.cnbc.com/advertorial/meet-the-rising-stars-mapping-the-future-of-electricity/",
    },
    {
      client: "CNBC",
      year: "2023",
      type: "Website, React",
      imageSrc: "portfolio-item-4.jpg",
      url: "https://www.cnbc.com/advertorial/roads-to-carbon-neutral/",
    },
    {
      client: "CNBC",
      year: "2023",
      type: "Website, React",
      imageSrc: "portfolio-item-5.jpg",
      url: "https://www.cnbc.com/advertorial/the-uk-a-global-destination-for-future-shaping-investment/",
    },
    {
      client: "CNBC",
      year: "2023",
      type: "Website, React",
      imageSrc: "portfolio-item-6.jpg",
      url: "https://www.cnbc.com/advertorial/dubai-trade-connect-webinar/",
    },
    {
      client: "CNBC",
      year: "2023",
      type: "Website, React",
      imageSrc: "portfolio-item-7.jpg",
      url: "https://stately-mandazi-fe6c21.netlify.app/",
    },
    {
      client: "Shaka Studios",
      year: "2023",
      type: "Website, React",
      imageSrc: "portfolio-item-8.jpg",
      url: "https://cute-khapse-dc3687.netlify.app/",
    },
    {
      client: "Kofi and Ama",
      year: "2023",
      type: "Website, React",
      imageSrc: "kofiAndAma.jpg",
      url: "https://www.kofiandama.co.uk/",
    },
    {
      client: "Huawei",
      year: "2021",
      type: "Website, HTML5",
      imageSrc: "riverPage1.jpg",
      url: "https://optimuspreviewer.website/optimus/previews/16450-P40-lite-5G-River-Page/",
    },
    {
      client: "Sky",
      year: "2020",
      type: "HTML5 Game, Javascript",
      imageSrc: "skyPaperToss.jpg",
      url: "https://optimuspreviewer.website/optimus/previews/SkyPaperToss/Desktop/",
    },
    {
      client: "Jose Day of the Dead",
      year: "2021",
      type: "Landing page, Javascript",
      imageSrc: "dayOfTheDead.jpg",
      url: "https://optimuspreviewer.website/optimus/previews/Jose_DOTD/",
    },
    {
      client: "Auto Desk",
      year: "2020",
      type: "Landing page, Javascript",
      imageSrc: "autoDesk.jpg",
      url: "https://optimuspreviewer.website/optimus/previews/Autodesk/",
    },
    {
      client: "Starbucks",
      year: "2021",
      type: "Banners, Javascript",
      imageSrc: "starbucksIced.jpg",
      url: "https://optimuspreviewer.website/optimus/?project=Starbucks_Almond",
    },
    {
      client: "Shell",
      year: "2021",
      type: "Banners, Javascript",
      imageSrc: "shellBanners.jpg",
      url: "https://optimuspreviewer.website/optimus/?project=HRG_SHELL_GO",
    },
    {
      client: "Fleximize",
      year: "2021",
      type: "Banners, Javascript",
      imageSrc: "fleximize.jpg",
      url: "https://optimuspreviewer.website/optimus/?project=Fleximize",
    },
    {
      client: "Keihls",
      year: "2020",
      type: "HTML Email, HTML",
      imageSrc: "khelis.jpg",
      url: "https://optimuspreviewer.website/optimus/previews/Keihls/",
    },
    {
      client: "La Roche",
      year: "2020",
      type: "HTML Email, HTML",
      imageSrc: "LaRoche.jpg",
      url: "https://optimuspreviewer.website/optimus/previews/Larochesun/",
    },
  ];

  useEffect(() => {
    const workItems = document.querySelectorAll(".work-item");

    gsap.from(workItems, {
      scrollTrigger: {
        trigger: workCont.current,
        start: "top+=-10%",
        end: "50% 50%",
        // markers:true,
        onEnter: () => {
          setWorkItemsScale("scale-100 hover:scale-[1.05]");
        },
        onLeaveBack: () => {
          setWorkItemsScale("scale-0 hover:scale-[0]");
        },
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div ref={workCont} className="w-full h-full relative py-[6rem]">
      <h2
        className={`font-Roboto lg:px-10 xs:pt-20 xs:pb-5 md:pb-0 md:pt-[0rem] font-black transition-all duration-200  xs:text-[3rem] md:text-[4rem] opacity-1 ${
          props.isDark ? "text-[#ffffff]" : "text-[#000000]"
        } text-center `}
      >
        MY WORK<br></br>
        <span
          className={`h-[3px] realtive inline-block transition-all duration-200  relative top-[-3rem] w-[150px] ${
            props.isDark ? "bg-[#ffffff]" : "bg-[#000000]"
          } text-center `}
        ></span>
      </h2>
      <div className="flex flex-wrap justify-center items-center mx-auto md:px-[6rem] xl:px-[12rem] xxl:px-[12rem] mt-[2rem]">
        {workData.map((item, index) => (
          <div
            key={index}
            className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8 work-item transition-all duration-1000 ${workItemsScale}`}
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img
                src={`/${item.imageSrc}`}
                alt={` ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="mt-2 text-center">
                <p
                  className={`text-lg font-semibold transition-all duration-200 ${
                    props.isDark ? "text-[#ffffff]" : "text-[#000000]"
                  }`}
                >
                  {item.client}
                </p>
                <p
                  className={`text-md font-semibold transition-all duration-200  ${
                    props.isDark ? "text-[#ffffff]" : "text-[#000000]"
                  }`}
                >
                  {item.type}
                </p>
                {/* <p className={`text-sm transition-all duration-200  ${props.isDark ? "text-[#cccccc]" : "text-[#3d3d3d]"}`}>{item.year}</p> */}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
