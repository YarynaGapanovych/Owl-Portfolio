import Image from "next/image";

export default function Header() {
  return (
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
  );
}
