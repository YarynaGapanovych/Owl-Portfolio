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

  // Position steps along the route: left top → left 320px → right 320px → left 640px → left 960px → right 960px
  const stepPositions = [
    { side: "left", y: 100 }, // Step 1: at left top (100, 0)
    { side: "right", y: 320 }, // Step 2: at right after first horizontal (900, 320)
    { side: "left", y: 640 }, // Step 3: at left after second horizontal (100, 640)
    { side: "right", y: 640 }, // Step 4: at right same level (900, 640)
    { side: "left", y: 960 }, // Step 5: at left after third horizontal (100, 960)
    { side: "right", y: 960 }, // Step 6: at right end (900, 960)
  ];

  return (
    <section
      id="from-idea-to-launch"
      className="container mx-auto px-4 py-16 md:py-24 bg-pastel-gradient"
    >
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          From Idea to Launch
        </h2>

        <div className="relative w-full min-h-[1200px] flex justify-center">
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Path: left top → down 320px → right → down 320px → left → down 320px → right */}
            <path
              d="
            M100 0
            L 100 320
            L 900 320
            L 900 640
            L 100 640
            L 100 960
            L 900 960
          "
              stroke="#968AF8"
              strokeWidth="100"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Dashed center line */}
            <path
              d="
            M100 0
            L 100 320
            L 900 320
            L 900 640
            L 100 640
            L 100 960
            L 900 960
          "
              stroke="white"
              strokeWidth="6"
              fill="none"
              strokeDasharray="30,30"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {steps.map((step, index) => {
            const pos = stepPositions[index];
            const isLeft = pos.side === "left";
            // Calculate position based on route: left side at x=100, right side at x=900
            // Convert viewBox coordinates to percentage/px positioning
            const routeX = isLeft ? 100 : 900;
            const routeY = pos.y;
            return (
              <div
                key={step.number}
                style={{
                  position: "absolute",
                  top: `${(routeY / 1200) * 100}%`,
                  left: isLeft ? "calc(50% - 450px)" : "calc(50% + 250px)",
                  width: "300px",
                  transform: "translateY(-50%)", // Center vertically on the route point
                }}
                className="text-center card-light rounded-xl p-6"
              >
                <div className="w-16 h-16 gradient-purple-pink rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-gray-800 text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
