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
        name: "Juliet Carty",
        role: "Chairperson",
        description: "",
        division: "Executive",
        initials: "JC",
        photo: `${import.meta.env.BASE_URL}team/juliet-carty.png`
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
        name: "Kahmala Aamir",
        role: "Chief Operations Officer",
        description: "",
        division: "Executive",
        initials: "KA",
        photo: `${import.meta.env.BASE_URL}team/kahmala-aamir.png`
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
        division: "Executive",
        initials: "TR",
        photo: `${import.meta.env.BASE_URL}team/tejal-ramchandani.png`,
        linkedin: "https://www.linkedin.com/in/tejal-ramchandani-599666294/"
      },
      {
        name: "Can Atasever",
        role: "Chief Technology Officer",
        description: "",
        division: "Executive",
        initials: "CA",
        photo: `${import.meta.env.BASE_URL}team/can-atasever.png`,
        linkedin: "https://www.linkedin.com/in/icancode/"
      },
      {
        name: "Bénédict Fromholz",
        role: "Director of Equities",
        description: "",
        division: "Equities",
        initials: "BF",
        photo: `${import.meta.env.BASE_URL}team/benedict-fromholz.png`,
        linkedin: "https://www.linkedin.com/in/benedict-fromholz/"
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
        role: "Director of Quant Trading",
        description: "",
        division: "Macro Research",
        initials: "JJ",
        photo: `${import.meta.env.BASE_URL}team/jonah-jjemba.png`,
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
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-4">
            Meet the Committee
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-[#4A4A4A] text-lg">
            The Irish Student Managed Fund leadership committee spans equities,
            macro, quant, and alternatives.
          </p>
        </header>

        <TeamGrid members={teamData} />
      </div>
    </section>
  );
}
