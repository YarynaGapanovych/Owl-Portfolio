export type Project = {
  name: string;
  desc: string;
  fullDescription: string;
  img: string;
  images: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Benefits Management Platform",
    desc: "Project description coming soon...",
    fullDescription:
      "A comprehensive benefits management platform that streamlines employee benefits administration. Built with modern technologies to provide seamless user experience and robust backend functionality.",
    img: "/image.png",
    images: [
      "/image.png",
      "/image2.png",
      "/67541.png",
    ],
  },
  {
    name: "Hydrus.ai",
    desc: "Project description coming soon...",
    fullDescription:
      "An AI-powered platform leveraging machine learning to deliver intelligent solutions. Features advanced analytics, real-time processing, and scalable infrastructure.",
    img: "/image2.png",
    images: [
      "/image2.png",
      "/image.png",
      "/67541.png",
    ],
    url: "https://hydrus.ai",
  },
  {
    name: "ERP system",
    desc: "Project description coming soon...",
    fullDescription:
      "Enterprise Resource Planning system designed to manage business operations efficiently. Includes modules for finance, HR, inventory, and reporting with customizable workflows.",
    img: "/67541.png",
    images: [
      "/67541.png",
      "/image.png",
      "/image2.png",
    ],
  },
  {
    name: 'Restaurant services SaaS app "MeinLokal"',
    desc: "Project description coming soon...",
    fullDescription:
      "A comprehensive SaaS solution for restaurant management. Features include table reservations, menu management, order processing, and customer analytics. Designed to help restaurants streamline operations and enhance customer experience.",
    img: "/image.png",
    images: [
      "/image.png",
      "/image2.png",
      "/67541.png",
    ],
  },
  {
    name: "Structura Pro",
    desc: "Project description coming soon...",
    fullDescription:
      "Professional structural analysis and design software. Provides engineers with powerful tools for building design, calculations, and documentation. Built with precision and performance in mind.",
    img: "/image2.png",
    images: [
      "/image2.png",
      "/67541.png",
      "/image.png",
    ],
  },
  {
    name: "Seotoolbox",
    desc: "Project description coming soon...",
    fullDescription:
      "All-in-one SEO toolkit for digital marketers. Features keyword research, site audit, backlink analysis, and performance tracking. Helps businesses improve their online visibility and search rankings.",
    img: "/67541.png",
    images: [
      "/67541.png",
      "/image2.png",
      "/image.png",
    ],
  },
];

// Utility function to create slug from project name
export function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Utility function to find project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => createSlug(project.name) === slug);
}
