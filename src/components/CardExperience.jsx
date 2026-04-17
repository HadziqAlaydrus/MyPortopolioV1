import useScrollAnimation from "../hooks/useScrollAnimation";
import BackgroundGradient from "./BackgroundGradient";

const CardExperience = () => {
  const experiences = [
    {
      company: "Fast 8",
      location: "Jakarta Selatan, DKI Jakarta, Indonesia",
      position: "Assistant Product Development Intern",
      period: "Dec 2025 - Present",
      description:
        "Analyzed existing products, user flows, and feature logic to support product improvements. Developed structured product documentation and internal guidebooks.",
      tags: [
        "Product Development",
        "Documentation",
        "QA Testing",
        "User Flows",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      company: "Luwjistik",
      location: "Malaysia (Remote)",
      position: "Operation Admin Intern",
      period: "Sep 2024 - Feb 2025",
      description:
        "Uploaded shipment and flight data into the system to keep order information accurate. Sent pre-alerts and followed up on daily pickups.",
      tags: ["Operations", "Data Management", "Coordination", "Logistics"],
      color: "from-purple-500 to-pink-500",
    },
    {
      company: "Informatics Laboratory Gunadarma University",
      location: "Depok, Indonesia",
      position: "Assistant & Instructor",
      period: "Aug 2022 - Aug 2025",
      description:
        "Mentored 20+ students through programming exercises and hands-on debugging support. Optimized lab workflows and troubleshooting approach.",
      tags: ["Teaching", "Mentoring", "Programming", "Debugging"],
      color: "from-green-500 to-emerald-500",
    },
    {
      company: "Mojadi Aplikasi",
      location: "Jakarta Pusat, DKI Jakarta, Indonesia",
      position: "Cloud Computing Engineer (MSIB / Kampus Merdeka Program)",
      period: "Feb 2024 - Jun 2024",
      description:
        "Assisted in deploying applications using AWS services such as EC2, RDS, and S3. Learned and practiced basic infrastructure design.",
      tags: ["AWS", "Cloud Computing", "DevOps", "Infrastructure"],
      color: "from-orange-500 to-red-500",
    },
    {
      company: "Shippit",
      location: "Australia (Remote)",
      position: "Operation Intern",
      period: "Feb 2025 - Sep 2025",
      description:
        "Verified and organized invoices to support the finance and operations process. Helped create and improve shipment SOPs.",
      tags: ["Operations", "SOP", "Finance", "Logistics"],
      color: "from-yellow-500 to-amber-500",
    },
  ];

  const [sectionRef, sectionVisible] = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`px-4 md:px-8 lg:px-20 py-16 md:py-24 transition-all duration-1000 ${
        sectionVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <BackgroundGradient />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-gray-800 dark:text-gray-100 text-left mb-4 text-4xl md:text-6xl font-bold">
            Professional{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-justify text-lg md:text-xl leading-relaxed">
            My journey through various roles in product development, operations,
            and technology
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => {
            const [cardRef, cardVisible] = useScrollAnimation({
              threshold: 0.1,
              rootMargin: "0px 0px -50px 0px",
            });

            return (
              <div
                key={index}
                ref={cardRef}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                  cardVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Period Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-purple-600/20 dark:from-yellow-500/30 dark:to-purple-600/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium backdrop-blur-sm">
                    {experience.period}
                  </span>
                </div>

                {/* Glassmorphism Card */}
                <div className="relative backdrop-blur-md bg-white/10 dark:bg-gray-900/30 border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 h-full">
                  {/* Color Accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${experience.color}`}
                  ></div>

                  {/* Content */}
                  <div className="space-y-4 pt-6">
                    {/* Company & Location */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors">
                          {experience.company}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                          {experience.location}
                        </p>
                      </div>
                      <div
                        className={`w-8 h-1 rounded-full bg-gradient-to-r ${experience.color}`}
                      ></div>
                    </div>

                    {/* Position */}
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color}`}
                      ></div>
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {experience.position}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-purple-600/20 dark:from-yellow-500/30 dark:to-purple-600/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience Stats */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 backdrop-blur-md bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/50 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Professional Roles
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent">
                3+
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent">
                4+
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Industries
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardExperience;
