"use client";

import Contact from "@/components/Contact";
import { default as FromIdeaToLaunch } from "@/components/FromIdeaToLaunch";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Technologies from "@/components/Technologies";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />

      <Services />

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
