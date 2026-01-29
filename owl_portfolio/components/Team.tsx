import Image from "next/image";

const team = [
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

export default function Team() {
  return (
    <section
      id="team"
      className="container mx-auto px-4 py-16 md:py-24 relative"
    >
      {/* <Image
        src="/67541.png"
        alt="Background"
        width={1200}
        height={800}
        className="absolute -z-10 -top-160 left-0 w-full h-auto"
      /> */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-header mb-16">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center group"
            >
              <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(255,180,80,0.25),transparent_60%)] blur-3xl" />
              {member.image ? (
                <div className="w-40 h-40 md:w-44 md:h-44 rounded-full mx-auto mb-6 overflow-hidden flex items-center justify-center ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={176}
                    height={176}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              ) : (
                <div className="w-40 h-40 md:w-44 md:h-44 gradient-purple-pink rounded-full mx-auto mb-6 ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300"></div>
              )}
              <div className="text-center space-y-3">
                <h3 className="text-2xl md:text-3xl text-subheader font-bold">
                  {member.name}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto"></div>
                <p className="text-matisse text-lg font-medium">
                  {member.role}
                </p>
                <p className="text-primary text-sm md:text-base leading-relaxed max-w-xs mx-auto mt-4">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
