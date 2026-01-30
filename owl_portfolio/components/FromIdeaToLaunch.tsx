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

  const roadSegmentPoints = [50, 400, 750, 1100, 1450, 1800, 2150];

  // Calculate center Y positions between road segments
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

    // Use flexible Y positions based on road segment centers
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

        <div className="relative w-full" style={{ minHeight: "600px" }}>
          <svg
            viewBox="0 0 1400 2400"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-auto"
            style={{ maxWidth: "100%", height: "auto" }}
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
              // stroke="#112d46"
              stroke="#1f5b97"
              strokeWidth="80"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#roadGlow)"
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
              strokeWidth="6"
              strokeDasharray="20 18"
              strokeLinecap="round"
            />
          </svg>

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

              const offset = isTablet ? "150px" : "200px";
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
                  maxWidth: isMobile ? "85%" : "400px",
                }}
                className={`relative flex gap-4 items-center mx-6 p-3 sm:p-4 ${isMobile ? "text-center" : ""}`}
              >
                <div
                  className="
      absolute
      top-1/2 left-1/2
      w-96 h-48
      bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,180,80,0.22),transparent_70%)]
      blur-2xl
      -translate-x-1/2 -translate-y-1/2
      pointer-events-none
    "
                />
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
    </section>
  );
}
