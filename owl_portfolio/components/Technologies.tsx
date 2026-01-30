"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const techStack = [
  { name: "React", icon: "/react.svg" },
  { name: "Next.js", icon: "/nextjs.svg" },
  { name: "Nest.js", icon: "/nestjs.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "JavaScript", icon: "/js.svg" },
  { name: "Python", icon: "/python.svg" },
  { name: "Django", icon: "/django.svg" },
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "Express.js", icon: "/expressjs.svg" },
  { name: "MongoDB", icon: "/mongodb.png" },
  { name: "Mongoose", icon: "/mongoose.svg" },
  { name: "MySQL", icon: "/mysql.svg" },
  { name: "Prisma", icon: "/prisma.svg" },
  { name: "Supabase", icon: "/supabase.svg" },
  { name: "GraphQL", icon: "/graphql.svg" },
  { name: "HTML5", icon: "/html5.png" },
  { name: "CSS3", icon: "/css3.svg" },
  { name: "Sass", icon: "/sass.svg" },
  { name: "Material UI", icon: "/materialui.svg" },
  { name: "Redux", icon: "/redux.svg" },
  { name: "React Router", icon: "/reactrouter.svg" },
  { name: "Vue.js", icon: "/vuejs.svg" },
  { name: "Vite", icon: "/vitejs.svg" },
  { name: "Webpack", icon: "/webpack.svg" },
  { name: "Docker", icon: "/docker.svg" },
  { name: "AWS", icon: "/aws.svg" },
  { name: "Vercel", icon: "/vercel.svg" },
  { name: "Heroku", icon: "/heroku.svg" },
  { name: "Railway", icon: "/railway.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "GitHub", icon: "/github.svg" },
  { name: "GitLab", icon: "/gitlab.svg" },
  { name: "NPM", icon: "/npm2.svg" },
  { name: "Jest", icon: "/jest.svg" },
  { name: "Postman", icon: "/postman.svg" },
  { name: "Jira", icon: "/jira.svg" },
  { name: "Stripe", icon: "/stripe.svg" },
  { name: "VS Code", icon: "/vscode.svg" },
];

export default function Technologies() {
  const splideOptions = {
    type: "loop",
    perPage: 6,
    perMove: 1,
    gap: "2rem",
    autoplay: true,
    interval: 2000,
    speed: 1000,
    pauseOnHover: false,
    resetProgress: false,
    arrows: false,
    pagination: false,
    breakpoints: {
      1024: {
        perPage: 4,
      },
      768: {
        perPage: 3,
      },
      640: {
        perPage: 2,
      },
    },
  };

  return (
    <section
      id="tech-stack"
      className="container mx-auto px-4 py-16 md:py-24 overflow-hidden "
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-header mb-12">
          Technologies
        </h2>
        <div className="relative overflow-visible py-8">
          <div className="relative z-10">
            <Splide options={splideOptions}>
              {techStack.map((tech, index) => (
                <SplideSlide key={`${tech.name}-${index}`}>
                  <div className="flex flex-col items-center group min-w-[90px] md:min-w-[100px] relative">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <div
                        className="absolute inset-0 translate-y-3 rounded-lg blur-md opacity-70"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(197,195,198,0.9) 0%, rgba(197,195,198,0.4) 60%, transparent 10%)",
                        }}
                      />
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="relative z-10 w-12 h-12 pt-2"
                      />
                    </div>
                    <span className="text-sm text-gray-400 text-center">
                      {tech.name}
                    </span>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
}
