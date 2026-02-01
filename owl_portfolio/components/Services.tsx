import { services } from "@/lib/services";

// Consistent color styles - using emperor from palette
const largeStyle = {
  // backgroundColor: "rgba(31, 91, 151, 0.3)",
  // borderColor: "rgba(31, 91, 151, 0.5)",
  // iconBg: "rgba(31, 91, 151, 0.6)",
  backgroundColor: "rgba(79, 71, 77, 0.3)",
  borderColor: "rgba(79, 71, 77, 0.5)",
  iconBg: "rgba(79, 71, 77, 0.6)",
};

const smallStyle = {
  // backgroundColor: "rgba(31, 91, 151, 0.2)",
  // borderColor: "rgba(31, 91, 151, 0.4)",
  // iconBg: "rgba(31, 91, 151, 0.5)",

  backgroundColor: "rgba(79, 71, 77, 0.2)",
  borderColor: "rgba(79, 71, 77, 0.4)",
  iconBg: "rgba(79, 71, 77, 0.5)",
};

export default function Services() {
  return (
    <section id="services" className="container mx-auto px-4">
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
                    backgroundColor: largeStyle.backgroundColor,
                    border: `1px solid ${largeStyle.borderColor}`,
                    boxShadow: `0 0 15px ${largeStyle.borderColor.replace("0.5", "0.25")}`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: largeStyle.iconBg }}
                  >
                    <svg
                      className="w-6 h-6 text-white flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
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
                    backgroundColor: smallStyle.backgroundColor,
                    border: `1px solid ${smallStyle.borderColor}`,
                    boxShadow: `0 0 15px ${smallStyle.borderColor.replace("0.4", "0.2")}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: smallStyle.iconBg }}
                  >
                    <svg
                      className="w-5 h-5 text-white flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      {service.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-subheader text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary text-base">
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
