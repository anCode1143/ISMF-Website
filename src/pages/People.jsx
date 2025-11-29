import React, { useEffect } from "react";
import TeamGrid from "@/components/TeamGrid";

// Team member data with the new structure
const teamData = [
     {
        name: "Raj Aryan Upadhyaya",
        role: "Founder, Co-CEO",
        description: "",
        division: "Executive",
        initials: "RAU",
        photo: `${import.meta.env.BASE_URL}team/raj-aryan-upadhyaya.png`,
        linkedin: "https://www.linkedin.com/in/raupadhyaya04/"
      },
      {
        name: "Caius Kauppi",
        role: "Co-CEO",
        description: "",
        division: "Executive",
        initials: "CK",
        photo: `${import.meta.env.BASE_URL}team/caius-kauppi.png`,
        linkedin: "https://www.linkedin.com/in/caiuskauppi/"
      },
      {
        name: "Juliette Carty",
        role: "Chairperson",
        description: "",
        division: "Executive",
        initials: "JC",
        photo: `${import.meta.env.BASE_URL}team/juliet-carty.png`,
        linkedin: "https://www.linkedin.com/in/juliette-carty-b325a5270/"
      },
      {
        name: "Krutika Dwivedi",
        role: "Chairperson",
        description: "",
        division: "Executive",
        initials: "KD",
        photo: `${import.meta.env.BASE_URL}team/krutika-dwivedi.png`,
        linkedin: "https://www.linkedin.com/in/krutika-dwivedi/"
      },
      {
        name: "Kashmala Aamir",
        role: "Chief Operations Officer",
        description: "",
        division: "Executive",
        initials: "KA",
        photo: `${import.meta.env.BASE_URL}team/kahmala-aamir.png`,
        linkedin: "https://www.linkedin.com/in/kashmala1aamir/"
      },
      {
        name: "Tanya Jindal",
        role: "Chief Financial Officer, Director of Alternative Investments",
        description: "",
        division: "Executive",
        initials: "TJ",
        photo: `${import.meta.env.BASE_URL}team/tanya-jindal.png`,
        linkedin: "https://www.linkedin.com/in/tanya-jindal-cma-pmp/"
      },
      {
        name: "Tejal Ramchandani",
        role: "Chief Macroeconomist",
        description: "",
        division: "Macro Research",
        initials: "TR",
        photo: `${import.meta.env.BASE_URL}team/tejal-ramchandani.png`,
        linkedin: "https://www.linkedin.com/in/tejal-ramchandani-599666294/"
      },
      {
        name: "Can Atasever",
        role: "Chief Technology Officer",
        description: "",
        division: "Technology",
        initials: "CA",
        photo: `${import.meta.env.BASE_URL}team/can-atasever.png`,
        linkedin: "https://www.linkedin.com/in/icancode/"
      },
      {
        name: "Klaudia Ciepiela",
        role: "Director of Equity Investments",
        description: "",
        division: "Equities",
        initials: "KC",
        photo: `${import.meta.env.BASE_URL}team/klaudia-ciepiela.png`,
        linkedin: "https://www.linkedin.com/in/klaudia-ciepiela-1b22a1254/"
      },
      {
        name: "Carole Misdari",
        role: "Chief Marketing Officer",
        description: "",
        division: "Marketing",
        initials: "CM",
        photo: `${import.meta.env.BASE_URL}team/carole-misdari.png`,
        linkedin: "https://www.linkedin.com/in/carole-misdari-2a7674334/"
      },
      {
        name: "Roisin O'Sullivan Smyth",
        role: "Director of Events",
        description: "",
        division: "Marketing",
        initials: "ROS",
        photo: `${import.meta.env.BASE_URL}team/roisin-osullivan-smyth.png`,
        linkedin: "https://www.linkedin.com/in/roisinosullivansmyths/"
      },
      {
        name: "Jonah Jjemba",
        role: "Co-Director of Quant",
        description: "",
        division: "Quantitative Finance",
        initials: "JJ",
        photo: `${import.meta.env.BASE_URL}team/jonah-jjemba.png`,
        linkedin: "https://www.linkedin.com/in/jonah-jjemba-9042a01b7/"
      },
      {
        name: "Matus Sorocin",
        role: "Co-Director of Quant",
        description: "",
        division: "Quantitative Finance",
        initials: "MS",
        photo: `${import.meta.env.BASE_URL}team/matus-sorocin.png`,
        linkedin: "https://www.linkedin.com/in/jonah-jjemba-9042a01b7/"
      },
];

export default function People() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen w-full bg-[#FFFDF5]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A0A0A] mb-4 leading-tight">
            Meet the Committee
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-[#4A4A4A] text-lg">
            The Irish Student Managed Fund leadership committee spans Equities,
            Macro, Quant, and Alternatives.
          </p>
        </header>

        <TeamGrid members={teamData} />
      </div>
    </section>
  );
}
