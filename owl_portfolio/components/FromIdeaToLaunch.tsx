"use client";

import { steps } from "@/lib/steps";
import { useEffect, useState } from "react";

export default function FromIdeaToLaunch() {
  const [windowWidth, setWindowWidth] = useState(1400);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const roadSegmentPoints = [150, 500, 850, 1200, 1550, 1900, 2250];

  const getCenterYPositions = () => {
    const centers = [];
    for (let i = 0; i < roadSegmentPoints.length - 1; i++) {
      const startY = roadSegmentPoints[i];
      const endY = roadSegmentPoints[i + 1];
      const centerY = (startY + endY) / 2;
      centers.push(centerY);
    }
    return centers;
  };

  const getStepPositions = () => {
    const isMobile = windowWidth < 768;
    const centerX = 700;
    const offset = isMobile ? 100 : 150;

    const yPositions = getCenterYPositions();

    return yPositions.map((y, index) => {
      const stepNumber = index + 1;
      const isOdd = stepNumber % 2 === 1;

      return {
        side: isOdd ? "left" : "right",
        x: isOdd ? centerX - offset : centerX + offset,
        y: y,
      };
    });
  };

  const stepPositions = getStepPositions();

  return (
    <section id="from-idea-to-launch">
      <div className="mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-header">
          From Idea to Launch
        </h2>

        <div className="relative w-full" style={{ minHeight: "700px" }}>
          <svg
            viewBox="0 0 1400 2400"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-auto mt-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="roadGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="50"
                  floodColor="#1f5b97"
                  floodOpacity="0.5"
                />
              </filter>
            </defs>
            <path
              d="
      M 0 150
      H 1000
      A 175 175 0 1 1 1000 500
      H 400
      A 175 175 0 1 0 400 850
      H 1000
      A 175 175 0 1 1 1000 1200
      H 400
      A 175 175 0 1 0 400 1550
      H 1000
      A 175 175 0 1 1 1000 1900
      H 400
      A 175 175 0 1 0 400 2250
      H 1400
    "
              stroke="#1f5b97"
              strokeWidth="80"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#roadGlow)"
            />
            <path
              d="
      M 0 150
      H 1000
      A 175 175 0 1 1 1000 500
      H 400
      A 175 175 0 1 0 400 850
      H 1000
      A 175 175 0 1 1 1000 1200
      H 400
      A 175 175 0 1 0 400 1550
      H 1000
      A 175 175 0 1 1 1000 1900
      H 400
      A 175 175 0 1 0 400 2250
      H 1400
    "
              fill="none"
              stroke="#fff"
              strokeWidth="6"
              strokeDasharray="20 18"
              strokeLinecap="round"
            />
          </svg>
          <div>
            {steps.map((step, index) => {
              const pos = stepPositions[index];
              const isLeft = pos.side === "left";
              const yPercent = (pos.y / 2400) * 100;

              const isMobile = windowWidth < 768;
              const isTablet = windowWidth >= 768 && windowWidth < 1024;

              const getPositionStyle = () => {
                const verticalCenter = "translateY(-50%)";

                if (isMobile) {
                  return {
                    left: "50%",
                    transform: `translateX(-50%) ${verticalCenter}`,
                  };
                }

                const offset = isTablet ? "-120px" : "20px";
                if (isLeft) {
                  return {
                    right: `calc(50% + ${offset})`,
                    transform: verticalCenter,
                  };
                } else {
                  return {
                    left: `calc(50% + ${offset})`,
                    transform: verticalCenter,
                  };
                }
              };

              return (
                <div
                  key={step.number}
                  style={{
                    position: "absolute",
                    top: `${yPercent}%`,
                    ...getPositionStyle(),
                    maxWidth: isMobile ? "95%" : "400px",
                    boxShadow:
                      "0 0 20px rgba(31, 91, 151, 0.4), 0 0 40px rgba(31, 91, 151, 0.2), 0 10px 40px rgba(0, 0, 0, 0.5)",
                  }}
                  className={`relative backdrop-blur-lg rounded-xl bg-[#4f474d]/20 flex gap-4 items-center px-4 py-6 ${isMobile ? "w-[70%]" : ""}`}
                >
                  <h2 className="text-subheader text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold">
                    {step.number}.
                  </h2>
                  <div>
                    <h3 className="text-subheader text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">
                      {step.title}
                    </h3>
                    <p className="text-primary ">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
