import React, { useState } from "react"

// Inline data for team members
const teamData = [
    { id: 1, name: "Bénédict", role: "Director of Equities", bio: "Leads the fundamental analysis and stock selection process.", contact: "" },
    { id: 2, name: "Carole & Roisin", role: "Marketing and Events", bio: "Manages all external communications, branding, and event planning.", contact: "" },
    { id: 3, name: "Tejal", role: "Chief Macroeconomist", bio: "Provides high-level economic analysis and forecasts influencing overall strategy.", contact: "" },
    { id: 4, name: "Jonah", role: "Director of Quant", bio: "Oversees quantitative research, model development, and systematic strategies.", contact: "" },
    { id: 5, name: "Tanya", role: "Director of Alternative Investments", bio: "Focuses on non-traditional assets like hedge funds, private equity, and real estate.", contact: "" },
    // Additional roles (placeholders)
    { id: 6, name: "Raj Aryan Upadhyaya", role: "CEO", bio: "", contact: "" },
    { id: 7, name: "", role: "COO", bio: "", contact: "" },
    { id: 8, name: "", role: "CFO", bio: "", contact: "" },
    { id: 9, name: "", role: "Director of Equities", bio: "", contact: "" },
    { id: 10, name: "", role: "Director of Alternative Investments", bio: "", contact: "" },
    { id: 11, name: "", role: "Director of Quant", bio: "", contact: "" },
    { id: 12, name: "", role: "CMO", bio: "", contact: "" },
    { id: 13, name: "", role: "CTO", bio: "", contact: "" },
    { id: 14, name: "", role: "Director of Events", bio: "", contact: "" },
    { id: 15, name: "", role: "Director of Careers", bio: "", contact: "" },
    { id: 16, name: "", role: "Chief Macroeconomist", bio: "", contact: "" },
]

function TeamMemberCard({ member }){
    const [isActive, setIsActive] = useState(false)

    return (
        <div
            className="group rounded-xl bg-[#f8f5e9] text-[#0f2240] shadow-sm border border-[#0f2240]/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-within:shadow-lg"
            role="button"
            tabIndex={0}
            onClick={() => setIsActive(v => !v)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsActive(v => !v) } }}
            aria-expanded={isActive}
        >
            <div className="p-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0f2240] text-[#f8f5e9] font-semibold">
                    {(member.name && member.name.split(' & ')[0]) ? member.name.split(' & ')[0].charAt(0) : (member.role ? member.role.charAt(0) : '')}
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold tracking-tight">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.role}</p>
                </div>
                <div className="mt-1 text-[#0f2240]/60 group-hover:text-[#0f2240] transition-colors">↕</div>
            </div>
            <div className={(isActive ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0') + " transition-all duration-300 overflow-hidden"}>
                <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed mb-3">
                        {member.bio}
                    </p>
                    {member.contact ? (
                        <a
                            className="inline-flex items-center text-sm font-medium underline underline-offset-4 decoration-[#0f2240]/30 hover:decoration-[#0f2240]"
                            href={`mailto:${member.contact}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {member.contact}
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default function About(){
    return (
        <section className="min-h-[60vh] w-full bg-[#0f2240] text-[#f8f5e9]">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <header className="mb-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Meet the Team</h1>
                    <p className="mt-3 max-w-2xl text-[#f8f5e9]/80">
                        The Irish Student Managed Fund leadership team spans equities, macro, quant, and alternatives.
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamData.map((member) => (
                        <TeamMemberCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </section>
    )
}