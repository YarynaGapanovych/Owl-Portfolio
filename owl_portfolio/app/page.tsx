import { default as FromIdeaToLaunch } from "@/components/FromIdeaToLaunch";
import Image from "next/image";

// Tech stack with icons from public folder
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

export default function Home() {
  return (
    <div className="min-h-screen bg-main-gradient text-white">
      {/* Navigation Header */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <div className="w-8 h-8 gradient-purple-pink rounded-lg"></div> */}
          <span className="text-xl font-bold">Owls Team</span>
        </div>
      </nav>

      {/* Header / Hero Section */}
      <header
        id="home"
        className="container mx-auto px-4 py-16 md:py-24 lg:py-32 bg-hero-gradient"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow">
            We make your ideas real
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Owls Team delivers reliable web and mobile solutions for startups
            and businesses.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section
        id="services"
        className="container mx-auto px-4 py-16 md:py-24 bg-section-gradient"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What we deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 card-glow rounded-xl bg-[#0f0f0f] hover:glow-effect transition-all">
              <div className="w-12 h-12 gradient-purple-pink rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Product Development
              </h3>
              <p className="text-gray-400 mb-4">
                End-to-end product development — from idea to production-ready
                launch.
              </p>
            </div>
            <div className="p-6 card-glow rounded-xl bg-[#0f0f0f] hover:glow-effect transition-all">
              <div className="w-12 h-12 gradient-purple-pink rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Applications</h3>
              <p className="text-gray-400 mb-4">
                Scalable, high-performance web applications built for real
                users.
              </p>
            </div>
            <div className="p-6 card-glow rounded-xl bg-[#0f0f0f] hover:glow-effect transition-all">
              <div className="w-12 h-12 gradient-purple-pink rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Mobile Applications
              </h3>
              <p className="text-gray-400 mb-4">
                Native and cross-platform mobile apps designed for growth and
                engagement.
              </p>
            </div>
            <div className="p-6 card-glow rounded-xl bg-[#0f0f0f] hover:glow-effect transition-all">
              <div className="w-12 h-12 gradient-purple-pink rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">MVP for Startups</h3>
              <p className="text-gray-400 mb-4">
                Fast, cost-effective MVPs to validate ideas and reach the market
                quickly.
              </p>
            </div>
            <div className="p-6 card-glow rounded-xl bg-[#0f0f0f] hover:glow-effect transition-all">
              <div className="w-12 h-12 gradient-purple-pink rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Long-Term Product Support
              </h3>
              <p className="text-gray-400 mb-4">
                Ongoing support, improvements, and scaling as your product
                evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FromIdeaToLaunch />

      {/* Projects Section */}
      <section
        id="projects"
        className="container mx-auto px-4 py-16 md:py-24 bg-section-gradient"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We’ve Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 card-glow rounded-xl bg-[#0a0a0a] hover:glow-effect transition-all">
              <div className="h-48 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 border border-purple-500/20"></div>
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-400">
                Project description coming soon...
              </p>
            </div>
            <div className="p-6 card-glow rounded-xl bg-[#0a0a0a] hover:glow-effect transition-all">
              <div className="h-48 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 border border-purple-500/20"></div>
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-400">
                Project description coming soon...
              </p>
            </div>
            <div className="p-6 card-glow rounded-xl bg-[#0a0a0a] hover:glow-effect transition-all">
              <div className="h-48 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 border border-purple-500/20"></div>
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-400">
                Project description coming soon...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="container mx-auto px-4 py-16 md:py-24 bg-section-gradient"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 card-glow rounded-xl bg-[#0f0f0f] hover:glow-effect transition-all">
              <div className="w-32 h-32 gradient-purple-pink rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Yaryna</h3>
              <p className="text-purple-400 mb-2 font-medium">
                Full-Stack Developer
              </p>
              <p className="text-gray-400">
                5+ years of experience building complex web platforms, SaaS
                products, and internal systems.
              </p>
            </div>
            <div className="text-center p-6 card-glow rounded-xl bg-[#0f0f0f] hover:glow-effect transition-all">
              <div className="w-32 h-32 gradient-purple-pink rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Anastasia</h3>
              <p className="text-purple-400 mb-2 font-medium">
                Full-Stack Developer
              </p>
              <p className="text-gray-400">
                Experience and expertise description.
              </p>
            </div>
            <div className="text-center p-6 card-glow rounded-xl bg-[#0f0f0f] hover:glow-effect transition-all">
              <div className="w-32 h-32 gradient-purple-pink rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Iryna</h3>
              <p className="text-purple-400 mb-2 font-medium">
                Full-Stack Developer
              </p>
              <p className="text-gray-400">
                Experience and expertise description.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tech-stack"
        className="container mx-auto px-4 py-16 md:py-24 bg-section-gradient"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technologies
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg mb-2 flex items-center justify-center hover:glow-effect transition-all text-white bg-[#0f0f0f] p-2">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-gray-400 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto px-4 py-16 md:py-24 bg-section-gradient"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Share your idea
          </h2>
          <p className="text-center text-gray-400 mb-12">
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

      <footer className="container mx-auto px-4 py-8 border-t border-purple-500/20 bg-footer-solid">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Owls Team. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
