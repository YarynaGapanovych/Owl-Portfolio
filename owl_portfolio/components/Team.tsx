import { team } from "@/lib/team";
import Image from "next/image";

export default function Team() {
  return (
    <section id="team" className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-header mb-16">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {team.map((member, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {member.image ? (
                <div
                  className="w-40 h-40 md:w-44 md:h-44 rounded-full mx-auto mb-6 overflow-hidden flex items-center justify-center"
                  style={{
                    boxShadow:
                      "0 0 16px rgba(31, 91, 151, 0.4), 0 0 34px rgba(31, 91, 151, 0.2)",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={176}
                    height={176}
                    className="object-cover w-full h-full rounded-full border-0"
                  />
                </div>
              ) : (
                <div
                  className="w-40 h-40 md:w-44 md:h-44 gradient-purple-pink rounded-full mx-auto mb-6"
                  style={{
                    boxShadow:
                      "0 0 16px rgba(31, 91, 151, 0.4), 0 0 34px rgba(31, 91, 151, 0.2)",
                  }}
                ></div>
              )}
              <div className="text-center space-y-3">
                <h3 className="text-2xl md:text-3xl text-subheader font-bold">
                  {member.name}
                </h3>
                <div className="w-16 h-0.5 mx-auto"></div>
                <p
                  className="text-lg font-medium"
                  style={{ color: "var(--color-matisse)" }}
                >
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
