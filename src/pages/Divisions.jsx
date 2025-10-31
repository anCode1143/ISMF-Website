import React, { useState, useEffect } from "react";
import { ChevronDown, TrendingUp, Briefcase, Code, Megaphone, BarChart3, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const divisions = [
  {
    name: "QUANT",
    description:
      "Focused on quantitative modeling, systematic strategies, and data-driven investment decisions.",
    icon: TrendingUp,
  },
  {
    name: "ALTERNATIVE",
    description:
      "Covers hedge funds, private equity, venture capital, and other non-traditional assets.",
    icon: Briefcase,
  },
  {
    name: "TECHNOLOGY",
    description:
      "Supports the fund's data infrastructure, automation, and software tools to enhance performance.",
    icon: Code,
  },
  {
    name: "MARKETING / EVENTS",
    description:
      "Manages branding, outreach, event organization, and internal/external communications.",
    icon: Megaphone,
  },
  {
    name: "EQUITIES",
    description:
      "Conducts fundamental analysis, stock selection, and equity portfolio management.",
    icon: BarChart3,
  },
  {
    name: "MACRO",
    description:
      "Analyzes macroeconomic trends, monetary policy, and market-wide investment opportunities.",
    icon: Globe,
  },
];

export default function Divisions() {
  const [activeDivision, setActiveDivision] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDivisionClick = (index) => {
    setActiveDivision(activeDivision === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleDivisionClick(index);
    }
  };

  return (
    <section className="bg-[#FFFDF5] min-h-screen w-full">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#26437E] mb-4">
            Our Divisions
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-[#4A4A4A] text-lg">
            Explore the diverse divisions that drive our investment strategy and
            operations.
          </p>
        </header>

        <div className="space-y-6">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            const isActive = activeDivision === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group transition-all duration-300 cursor-pointer rounded-xl border-l-4 p-6 shadow-sm hover:shadow-md
                  ${
                    isActive
                      ? "bg-white border-[#26437E] scale-[1.02]"
                      : "bg-[#F8FAFC] border-transparent hover:border-[#26437E]/50"
                  }`}
                onClick={() => handleDivisionClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                        isActive
                          ? "bg-[#26437E] text-white"
                          : "bg-[#26437E]/10 text-[#26437E]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#26437E]">
                      {division.name}
                    </h2>
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      className={`w-6 h-6 text-[#26437E] transition-colors ${
                        isActive ? "opacity-100" : "opacity-70"
                      }`}
                    />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-[#4A4A4A] leading-relaxed">
                        {division.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
