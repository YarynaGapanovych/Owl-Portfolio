export type TeamMember = {
  name: string;
  role: string;
  description: string;
  image?: string;
};

export const team: TeamMember[] = [
  {
    name: "Yaryna",
    role: "Full-Stack Developer",
    description:
      "5+ years building ESG, ERP, and multi-tenant SaaS applications end-to-end — from architecture to deployment.",
    image: "/avaYaryna.jpg",
  },
  {
    name: "Anastasia",
    role: "Full-Stack Developer",
    description:
      "6+ years delivering scalable e-commerce, ESG, ERP, and crypto solutions with complex business logic and user flows.",
    image: "/avaAnastasia.jpg",
  },
  {
    name: "Iryna",
    role: "Full-Stack Developer",
    description:
      "4+ years developing ERP, ESG, and education platforms with scalable architecture and structured workflows.",
    image: "/avaIra2.jpg",
  },
];
