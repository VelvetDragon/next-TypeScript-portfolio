"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { SparklesCore } from "./ui/sparkles";


const RecentProjects = () => {
  return (

    <div id="projects" className="py-20">

      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />

      <TextGenerateEffect
        words="A small selection of my projects"
        className="text-center text-[10px] md:text-2xl lg:text-5xl"
      />
      <div
        className="flex flex-wrap items-center justify-center p-6 gap-x-10 gap-y-6 mt-10"
        suppressHydrationWarning
      >

        {projects.map((item) => (
          <CardContainer className="inter-var " key={item.id}>
            <CardBody className="relative bg-gray-50 group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 lg:mt-[-5rem] border hover:shadow-lg">
              <CardItem
                translateZ="50"
                className="text-xl  font-bold text-neutral-600 dark:text-white"
              >

                {item.title}

              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.des}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  as="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline"
                >
                  Checkout the project →
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-2"
                >
                  <FaLocationArrow />
                  Explore
                </CardItem>
              </div>
              <div className="flex mt-4">
                {item.iconLists.map((icon, index) => (
                  <CardItem
                    key={index}
                    translateZ={10 + 5 * index}
                    className="border border-white/[.2] rounded-full bg-black w-10 h-10 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index}px)`,
                    }}
                  >
                    <img src={icon} alt={`icon-${index}`} className="p-2" />
                  </CardItem>
                ))}
              </div>
            </CardBody>
          </CardContainer>

        ))}
      </div>
    </div>

  );
};

export default RecentProjects;
