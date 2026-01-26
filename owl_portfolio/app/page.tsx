"use client";

import { default as FromIdeaToLaunch } from "@/components/FromIdeaToLaunch";
import Technologies from "@/components/Technologies";
import Image from "next/image";
import { useState } from "react";

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
  },
];

const projects = [
  {
    name: "Benefits Management Platform",
    desc: "Project description coming soon...",
    fullDescription:
      "A comprehensive benefits management platform that streamlines employee benefits administration. Built with modern technologies to provide seamless user experience and robust backend functionality.",
    img: "/project-placeholder.png",
    images: [
      "/project-placeholder.png",
      "/project-placeholder.png",
      "/project-placeholder.png",
    ],
  },
  {
    name: "Hydrus.ai",
    desc: "Project description coming soon...",
    fullDescription:
      "An AI-powered platform leveraging machine learning to deliver intelligent solutions. Features advanced analytics, real-time processing, and scalable infrastructure.",
    img: "/project-placeholder.png",
    images: [
      "/project-placeholder.png",
      "/project-placeholder.png",
      "/project-placeholder.png",
    ],
    url: "https://hydrus.ai",
  },
  {
    name: "ERP system",
    desc: "Project description coming soon...",
    fullDescription:
      "Enterprise Resource Planning system designed to manage business operations efficiently. Includes modules for finance, HR, inventory, and reporting with customizable workflows.",
    img: "/project-placeholder.png",
    images: [
      "/project-placeholder.png",
      "/project-placeholder.png",
      "/project-placeholder.png",
    ],
  },
  {
    name: 'Restaurant services SaaS app "MeinLokal"',
    desc: "Project description coming soon...",
    fullDescription:
      "A comprehensive SaaS solution for restaurant management. Features include table reservations, menu management, order processing, and customer analytics. Designed to help restaurants streamline operations and enhance customer experience.",
    img: "/project-placeholder.png",
    images: [
      "/project-placeholder.png",
      "/project-placeholder.png",
      "/project-placeholder.png",
    ],
  },
  {
    name: "Structura Pro",
    desc: "Project description coming soon...",
    fullDescription:
      "Professional structural analysis and design software. Provides engineers with powerful tools for building design, calculations, and documentation. Built with precision and performance in mind.",
    img: "/project-placeholder.png",
    images: [
      "/project-placeholder.png",
      "/project-placeholder.png",
      "/project-placeholder.png",
    ],
  },
  {
    name: "Seotoolbox",
    desc: "Project description coming soon...",
    fullDescription:
      "All-in-one SEO toolkit for digital marketers. Features keyword research, site audit, backlink analysis, and performance tracking. Helps businesses improve their online visibility and search rankings.",
    img: "/project-placeholder.png",
    images: [
      "/project-placeholder.png",
      "/project-placeholder.png",
      "/project-placeholder.png",
    ],
  },
];

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

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <div className="min-h-screen">
      <header
        id="home"
        className="container mx-auto px-4 min-h-screen flex flex-col"
      >
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/owl5.png" alt="Owl" width={25} height={35} />
            <span className="text-xl font-bold">Owls Team</span>
          </div>
        </nav>
        <div className="mx-auto text-center flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 py-8 md:py-16">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-header">
              We make your ideas real
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Owls Team delivers reliable web and mobile solutions for startups
              and businesses.
            </p>
          </div>
          <div className=" order-1 md:order-2 shrink-0">
            <Image
              src="/owl5.png"
              alt="Owl"
              width={450}
              height={500}
              className="max-w-[220px] sm:max-w-[400px] md:max-w-[500px] h-auto"
            />
          </div>
        </div>
      </header>

      <section id="services" className="container mx-auto px-4 py-16 md:py-24">
        <div className=" mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-header mb-12">
            What we deliver
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Large items */}
            <div className="flex flex-col gap-8 justify-between">
              {services
                .filter((service) => service.size === "large")
                .map((service, index) => (
                  <div
                    key={index}
                    className="p-8 card-glow rounded-xl bg-[#43478d]/30 hover:glow-effect transition-all flex items-center gap-4 "
                  >
                    <div className="w-12 h-12 gradient-purple-pink rounded-lg mb-6 flex items-center justify-center">
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

            {/* Right column - Small items */}
            <div className="flex flex-col justify-between gap-6">
              {services
                .filter((service) => service.size === "small")
                .map((service, index) => (
                  <div
                    key={index}
                    className="p-6 card-glow rounded-xl bg-[#43478d]/30 hover:glow-effect transition-all flex items-center gap-4"
                  >
                    <div className="w-10 h-10 gradient-purple-pink rounded-lg mb-3 flex items-center justify-center">
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

      <section id="projects" className="container mx-auto px-4 py-16 md:py-24 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-header mb-12">
            What We’ve Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="p-6 card-glow rounded-xl hover:glow-effect transition-all overflow-hidden cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 border border-purple-500/20 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-subheader text-xl font-semibold mb-2">
                  {project.name}
                </h3>
                <p className="text-primary">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="container mx-auto px-4 py-16 md:py-24 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-header mb-16">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
              >
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
                  <p className="text-purple-400 text-lg font-medium">
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

      <Technologies />

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 md:py-24 ">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-header mb-4">
            Share your idea
          </h2>
          <p className="text-center text-primary mb-12">
            Tell us about your idea or project — we&apos;ll get back to you
            within 24 hours.
          </p>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-purple-500/30 rounded-lg bg-[#0a0a0a] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-purple-500/30 rounded-lg bg-[#0a0a0a] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-purple-500/30 rounded-lg bg-[#0a0a0a] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 gradient-purple-pink rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 flex justify-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#0a0a0a] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="sticky top-0 bg-[#0a0a0a] border-b border-purple-500/30 p-4 flex justify-end z-10">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-subheader mb-6">
                {selectedProject.name}
              </h2>

              {/* Images Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selectedProject.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-lg overflow-hidden border border-purple-500/20"
                  >
                    <Image
                      src={image}
                      alt={`${selectedProject.name} - Image ${index + 1}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>

              {/* Full Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-subheader">
                  About this project
                </h3>
                <p className="text-primary text-lg leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* URL Link */}
              {selectedProject.url && (
                <div className="mt-6 pt-6 border-t border-purple-500/20">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-lg font-medium"
                  >
                    <span>Visit Website</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
