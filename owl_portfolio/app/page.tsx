"use client";

import Contact from "@/components/Contact";
import { default as FromIdeaToLaunch } from "@/components/FromIdeaToLaunch";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Technologies from "@/components/Technologies";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import Image from "next/image";

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
                    className="p-6 rounded-xl hover:glow-effect transition-all flex items-center gap-4 backdrop-blur-lg"
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
