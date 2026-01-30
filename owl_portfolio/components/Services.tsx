import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-16 md:py-24">
      <div>
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
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
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
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
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
  );
}
