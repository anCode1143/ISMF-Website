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
        photo: "/team/raj-aryan-upadhyaya.png"
      },
      {
        name: "Caius Kauppi",
        role: "Co-CEO",
        description: "",
        division: "Executive",
        initials: "CK",
         photo: "/team/caius-kauppi.png"
      },
      {
        name: "Juliet Carty",
        role: "Chairperson",
        description: "",
        division: "Executive",
        initials: "JC",
        photo: "/team/juliet-carty.png"
      },
      {
        name: "Krutika Dwivedi",
        role: "Chairperson",
        description: "",
        division: "Executive",
        initials: "KD",
        photo: "/team/krutika-dwivedi.png"
      },
      {
        name: "Kahmala Aamir",
        role: "Chief Operations Officer",
        description: "",
        division: "Executive",
        initials: "KA",
        photo: "/team/kahmala-aamir.png"
      },
      {
        name: "Tanya Jindal",
        role: "Chief Financial Officer, Director of Alternative Investments",
        description: "",
        division: "Executive",
        initials: "TJ",
        photo: "/team/tanya-jindal.png"
      },
      {
        name: "Tejal Ramchandani",
        role: "Chief Macroeconomist",
        description: "",
        division: "Executive",
        initials: "TR",
        photo: "/team/tejal-ramchandani.png"
      },
      {
        name: "Can Atasever",
        role: "Chief Technology Officer",
        description: "",
        division: "Executive",
        initials: "CA",
        photo: "/team/can-atasever.png"
      },
      {
        name: "Bénédict Fromholz",
        role: "Director of Equities",
        description: "",
        division: "Equities",
        initials: "BF",
        photo: "/team/benedict-fromholz.png"
      },
      {
        name: "Carole Misdari",
        role: "Chief Marketing Officer",
        description: "",
        division: "Marketing",
        initials: "CM",
        photo: "/team/carole-misdari.png"
      },
      {
        name: "Roisin O'Sullivan Smyth",
        role: "Director of Events",
        description: "",
        division: "Marketing",
        initials: "ROS",
        photo: "/team/roisin-osullivan-smyth.png"
      },
      {
        name: "Jonah Jjemba",
        role: "Director of Quant Trading",
        description: "",
        division: "Macro Research",
        initials: "JJ",
        photo: "/team/jonah-jjemba.png"
      },
];

export default function About() {
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
