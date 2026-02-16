"use client";

import { techStack } from "@/lib/technologies";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

export default function Technologies() {
  const splideOptions = {
    type: "loop",
    perPage: 6,
    perMove: 1,
    gap: "2rem",
    autoplay: true,
    interval: 2000,
    speed: 1000,
    pauseOnHover: false,
    resetProgress: false,
    arrows: false,
    pagination: false,
    breakpoints: {
      1024: {
        perPage: 5,
      },
      768: {
        perPage: 4,
      },
      640: {
        perPage: 3,
      },
    },
  };

  return (
    <section id="tech-stack" className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-header mb-8">
          Technologies
        </h2>

        <div className="relative overflow-visible py-8 bg-bunker backdrop-blur-lg rounded-xl">
          <Splide options={splideOptions}>
            {techStack.map((tech, index) => (
              <SplideSlide key={`${tech.name}-${index}`}>
                <div className="flex flex-col items-center group min-w-[90px] md:min-w-[100px]">
                  <div
                    className="relative w-16 h-16 flex items-center justify-center rounded-lg mt-8 shadow-[0_0_20px_rgba(79,71,77,0.4)]"
                    style={{
                      backgroundColor: "rgba(92, 88, 96, 0.75)",
                    }}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="relative z-10 w-12 h-12"
                    />
                  </div>
                  <span className="text-sm text-gray-400 text-center mt-2 block">
                    {tech.name}
                  </span>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}
