export default function FromIdeaToLaunch() {
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

  // Position steps along the route based on actual road coordinates
  const stepPositions = [
    { side: "left", x: 1130, y: 220 }, // Step 1: below first horizontal line (H 910 at y=50)
    { side: "right", x: 300, y: 570 }, // Step 2: lower on first curve
    { side: "left", x: 1130, y: 920 }, // Step 3: lower on second curve
    { side: "right", x: 300, y: 1270 }, // Step 4: lower on third curve
    { side: "left", x: 1130, y: 1620 }, // Step 5: lower on fourth curve
    { side: "right", x: 300, y: 1970 }, // Step 6: lower on fifth curve
  ];

  return (
    <section
      id="from-idea-to-launch"
      // className=" mx-auto  md:py-24 bg-pastel-gradient"
    >
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

            const gapPercent = 2.5;

            return (
              <div
                key={step.number}
                style={{
                  position: "absolute",
                  top: `${yPercent}%`,
                  left: isLeft
                    ? `max(1%, ${Math.max(0, xPercent - gapPercent - 20)}%)`
                    : `${Math.min(100 - gapPercent - 20, xPercent + gapPercent)}%`,
                  width: "clamp(200px, 20vw, 320px)",
                  maxWidth: "25%",
                  transform: "translateY(-50%)",
                }}
                className={`text-center p-3 sm:p-4  ${
                  isLeft ? "text-right" : "text-left"
                }`}
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
