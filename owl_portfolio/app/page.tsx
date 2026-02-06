import Contact from "@/components/Contact";
import { default as FromIdeaToLaunch } from "@/components/FromIdeaToLaunch";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col gap-16 md:gap-40">
      <Header />

      <Services />

      <FromIdeaToLaunch />

      <Projects />

      <Team />

      <Technologies />

      <Contact />

      <footer
        className="container mx-auto px-4 py-8 border-t"
        style={{ borderColor: "rgba(31, 91, 151, 0.2)" }}
      >
        <div className="mx-auto text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Owls Team. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
