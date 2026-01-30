import React from "react";

export type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  size: "large" | "small";
  bgColor: string;
  iconBg: string;
  borderColor: string;
};

export const services: Service[] = [
  {
    title: "Product Development",
    description:
      "End-to-end product development — from idea to production-ready launch.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    ),
    size: "large",
    bgColor: "rgba(31, 91, 151, 0.3)", // matisse
    iconBg: "rgba(31, 91, 151, 0.6)", // matisse
    borderColor: "rgba(31, 91, 151, 0.5)", // matisse
  },
  {
    title: "Web Applications",
    description:
      "Scalable, high-performance web applications built for real users.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    size: "large",
    bgColor: "rgba(17, 45, 70, 0.3)", // elephant
    iconBg: "rgba(17, 45, 70, 0.6)", // elephant
    borderColor: "rgba(17, 45, 70, 0.5)", // elephant
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    ),
    size: "small",
    bgColor: "rgba(79, 71, 77, 0.3)", // emperor
    iconBg: "rgba(79, 71, 77, 0.6)", // emperor
    borderColor: "rgba(79, 71, 77, 0.5)", // emperor
  },
  {
    title: "MVP for Startups",
    description: "Fast MVPs to validate ideas.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
    size: "small",
    bgColor: "rgba(57, 33, 21, 0.3)", // cedar
    iconBg: "rgba(57, 33, 21, 0.6)", // cedar
    borderColor: "rgba(57, 33, 21, 0.5)", // cedar
  },
  {
    title: "Long-Term Product Support",
    description: "Support, improvements, and scaling.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
    size: "small",
    bgColor: "rgba(197, 195, 198, 0.15)", // french-gray (light gray for contrast)
    iconBg: "rgba(197, 195, 198, 0.4)", // french-gray
    borderColor: "rgba(197, 195, 198, 0.3)", // french-gray
  },
];
