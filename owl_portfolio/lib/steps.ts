export type Step = {
  number: number;
  title: string;
  description: string;
};

export const steps: Step[] = [
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
