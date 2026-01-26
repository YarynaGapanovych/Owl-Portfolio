"use client";

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

  const steps = [
    {
      number: 1,
      title: "Discovery & Research",
      description: "Understanding your vision, goals, and requirements.",
    },
    {
      number: 2,
      title: "Planning & Design",
      description: "Concept, UX/UI flows, and technical roadmap.",
    },
    {
      number: 3,
      title: "Development",
      description:
        "Agile coding with regular updates and transparent communication.",
    },
    {
      number: 4,
      title: "Testing & Feedback",
      description: "QA, bug fixing, and validation with client feedback.",
    },
    {
      number: 5,
      title: "Deployment & Delivery",
      description: "Production-ready product delivered to real users.",
    },
    {
      number: 6,
      title: "Support & Growth",
      description:
        "Ongoing updates, improvements, and scaling as your product evolves.",
    },
  ];

  // Adaptive positions based on screen size
  const getStepPositions = () => {
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;

    if (isMobile) {
      // Mobile: center positions, adjust for smaller screens
      return [
        { side: "left", x: 600, y: 80 },
        { side: "right", x: 400, y: 530 },
        { side: "left", x: 600, y: 880 },
        { side: "right", x: 400, y: 1230 },
        { side: "left", x: 600, y: 1580 },
        { side: "right", x: 400, y: 1930 },
      ];
    } else if (isTablet) {
      // Tablet: slightly adjusted positions
      return [
        { side: "left", x: 650, y: 80 },
        { side: "right", x: 425, y: 530 },
        { side: "left", x: 650, y: 880 },
        { side: "right", x: 425, y: 1230 },
        { side: "left", x: 650, y: 1580 },
        { side: "right", x: 425, y: 1930 },
      ];
    } else {
      // Desktop: original positions
      return [
        { side: "left", x: 700, y: 80 },
        { side: "right", x: 450, y: 530 },
        { side: "left", x: 700, y: 880 },
        { side: "right", x: 450, y: 1230 },
        { side: "left", x: 700, y: 1580 },
        { side: "right", x: 450, y: 1930 },
      ];
    }
  };

  const stepPositions = getStepPositions();

  return (
    <section id="from-idea-to-launch">
      <div className="mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-header">
          From Idea to Launch
        </h2>

        <div className="relative w-full" style={{ minHeight: "600px" }}>
          <svg
            viewBox="0 0 1400 2400"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-auto"
            style={{ maxWidth: "100%", height: "auto" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
      M 0 50
      H 1000
      A 175 175 0 1 1 1000 400
      H 400
      A 175 175 0 1 0 400 750
      H 1000
      A 175 175 0 1 1 1000 1100
      H 400
      A 175 175 0 1 0 400 1450
      H 1000
      A 175 175 0 1 1 1000 1800
      H 400
      A 175 175 0 1 0 400 2150
      H 1400
    "
              // stroke="#968AF8"
              stroke="#1f5b97"
              // stroke="#112d46"
              strokeWidth="80"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="
      M 0 50
      H 1000
      A 175 175 0 1 1 1000 400
      H 400
      A 175 175 0 1 0 400 750
      H 1000
      A 175 175 0 1 1 1000 1100
      H 400
      A 175 175 0 1 0 400 1450
      H 1000
      A 175 175 0 1 1 1000 1800
      H 400
      A 175 175 0 1 0 400 2150
      H 1400
    "
              fill="none"
              stroke="#fff"
              stroke-width="6"
              stroke-dasharray="20 18"
              stroke-linecap="round"
            />
          </svg>

          {steps.map((step, index) => {
            const pos = stepPositions[index];
            const isLeft = pos.side === "left";
            const xPercent = (pos.x / 1400) * 100;
            const yPercent = (pos.y / 2400) * 100;

            // Adaptive gap based on screen size
            const isMobile = windowWidth < 768;
            const gapPercent = isMobile ? 1 : 2.5;
            const offsetPercent = isMobile ? 5 : 20;

            // On mobile, center items; on larger screens use side positioning
            const getLeftPosition = () => {
              if (isMobile) {
                // Center items on mobile - use road center (around 50% of viewBox width)
                return "50%";
              }
              return isLeft
                ? `max(1%, ${Math.max(0, xPercent - gapPercent - offsetPercent)}%)`
                : `${Math.min(100 - gapPercent - offsetPercent, xPercent + gapPercent)}%`;
            };

            return (
              <div
                key={step.number}
                style={{
                  position: "absolute",
                  top: `${yPercent}%`,
                  left: getLeftPosition(),
                  transform: isMobile ? "translateX(-50%)" : "none",
                  maxWidth: isMobile ? "85%" : "60%",
                }}
                className={`p-3 sm:p-4 ${isMobile ? "text-center" : ""}`}
              >
                <h3 className="text-subheader text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">
                  {step.number}. {step.title}
                </h3>
                <p className="text-primary ">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
