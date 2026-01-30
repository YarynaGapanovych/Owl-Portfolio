"use client";

import Contact from "@/components/Contact";
import { default as FromIdeaToLaunch } from "@/components/FromIdeaToLaunch";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Technologies from "@/components/Technologies";
import { projects } from "@/lib/projects";
import Image from "next/image";

const services = [
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

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <header
        id="home"
        className="container mx-auto px-4 min-h-screen flex flex-col relative"
      >
        <div className="relative z-10">
          <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/owl5.png" alt="Owl" width={25} height={35} />
              <span className="text-xl font-bold">Owls Team</span>
            </div>
          </nav>
          <div className="relative mx-auto text-center flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 py-8 md:py-16">
            <div className="order-2 md:order-1 relative z-10">
              <div
                className="
    absolute -inset-10
    bg-[radial-gradient(ellipse_95%_65%_at_50%_35%,rgba(255,180,80,0.22),transparent_70%)]
    blur-3xl
  "
              />

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-header">
                We make your ideas real
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-primary mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Owls Team delivers reliable web and mobile solutions for
                startups and businesses.
              </p>
            </div>

            <div className="relative order-1 md:order-2 shrink-0">
              <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(255,180,80,0.25),transparent_60%)] blur-3xl" />
              <Image
                src="/owl5.png"
                alt="Owl"
                width={450}
                height={500}
                className="relative max-w-[220px] sm:max-w-[400px] md:max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </header>

      <section id="services" className="container mx-auto px-4 py-16 md:py-24">
        <div className=" mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-header mb-12">
            What we deliver
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-8 justify-between">
              {services
                .filter((service) => service.size === "large")
                .map((service, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-xl hover:glow-effect transition-all flex items-center gap-4 backdrop-blur-lg"
                    style={{
                      backgroundColor: service.bgColor,
                      border: `1px solid ${service.borderColor}`,
                      boxShadow: `0 0 15px ${service.borderColor.replace("0.5", "0.25")}`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center"
                      style={{ backgroundColor: service.iconBg }}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {service.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-subheader text-2xl font-semibold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-primary text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            <div className="flex flex-col justify-between gap-6">
              {services
                .filter((service) => service.size === "small")
                .map((service, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl hover:glow-effect transition-all flex items-center gap-4"
                    style={{
                      backgroundColor: service.bgColor,
                      border: `1px solid ${service.borderColor}`,
                      boxShadow: `0 0 15px ${service.borderColor.replace("0.5", "0.25")}`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg mb-3 flex items-center justify-center"
                      style={{ backgroundColor: service.iconBg }}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {service.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-subheader text-lg font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-primary text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <FromIdeaToLaunch />

      <Projects projects={projects} />

      <Team />

      <Technologies />

      <Contact />

      <footer className="container mx-auto px-4 py-8 border-t border-purple-500/20 ">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Owls Team. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
