import React from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Research() {


  const [latestReport, setLatestReport] = React.useState(null);

  React.useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}reports/latest.json`)
      .then(r => r.json())
      .then(setLatestReport);
  }, []);



  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#0A0A0A] pt-24">
      {/* Hero / Intro */}
      <section className="max-w-5xl mx-auto px-6 pb-20 grid gap-8 md:grid-cols-[1.8fr,1.4fr]">
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-[#E2E8F0] mb-8 mt-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Research
          </h1>

          <p className="text-lg text-[#3A3A3A] max-w-3xl leading-relaxed">
            At the Irish Student Managed Fund, research underpins every investment
            decision. Our Macro Research Team publishes a{" "}
            <span className="font-semibold">bi-monthly macro outlook</span>,
            combining top-down analysis of growth, inflation and central bank
            policy with bottom-up views across sectors and asset classes.
          </p>

          <p className="text-lg text-[#3A3A3A] max-w-3xl leading-relaxed">
            These reports guide our portfolio positioning across equities, macro
            and alternatives, and help our members develop a deeper understanding
            of the forces shaping global markets.
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section className="max-w-5xl mx-auto px-6 pb-20 grid gap-8 md:grid-cols-[1.8fr,1.4fr]">
        {/* Bi-monthly macro publication card */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-[#E2E8F0]">
         

          <h2 className="text-2xl font-semibold mb-3 text-[#0A0A0A]">
            Bi-Monthly Macro Outlook
          </h2>

          <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Every two months, the ISMF Macro Research Team publishes a
            comprehensive update on the global economy and financial markets.
            Each edition covers:
          </p>

          <ul className="mt-4 space-y-2 text-sm sm:text-base text-[#3A3A3A]">
            <li>• Growth, inflation and central bank policy trends</li>
            <li>• Key themes across equities, fixed income and FX</li>
            <li>• Scenario analysis and risks to the outlook</li>
            <li>• Implications for ISMF portfolios and positioning</li>
          </ul>

          <p className="mt-4 text-sm text-[#4A4A4A] leading-relaxed">
            The publication is written by students for students, aiming to make
            macroeconomics accessible while maintaining a rigorous,
            data-informed approach.
          </p>
        </div>

        {/* Latest insights card */}
        <div className="bg-white rounded-2xl m-10px shadow-md p-6 sm:p-7 border border-[#E2E8F0]  flex flex-col justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#0A0A0A]">
              See our latest insights
            </h3>

            <p className="text-sm sm:text-base text-[#4A4A4A] mb-4 leading-relaxed">
              Explore our most recent macro outlook and see how the ISMF
              committee is thinking about markets today.
            </p>

            <div className="bg-[#F3F4F6] rounded-xl p-4 border border-[#E2E8F0] flex items-start gap-3">
                <a
                    href={`${import.meta.env.BASE_URL}reports/ismf-macro-report-nov.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FileText className="w-6 h-6 text-[#26437E]" />
                    <div>
                      <p className="text-sm font-semibold text-[#0A0A0A]">
                      ISMF Macro Outlook — November Edition
                      </p>
    
                      <p className="text-xs text-[#4A4A4A] mt-1 leading-relaxed">
                      A concise overview of the macro environment, market themes,
                      and our current positioning.
                      </p>
                    </div>
                </a>
            
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
