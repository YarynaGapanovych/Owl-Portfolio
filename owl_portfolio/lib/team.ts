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
      "5+ years of experience building complex web platforms, SaaS products, and internal systems.",
    image: "/avaYaryna.jpg",
  },
  {
    name: "Anastasia",
    role: "Full-Stack Developer",
    description:
      "6+ years of experience building complex web platforms, SaaS products, and internal systems.",
  },
  {
    name: "Iryna",
    role: "Full-Stack Developer",
    description:
      "4+ years of experience building complex web platforms, SaaS products, and internal systems.",
    image: "/avaIra2.jpg",
  },
];
