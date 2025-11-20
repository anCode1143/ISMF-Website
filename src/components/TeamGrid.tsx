import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  division?: string;
  initials: string;
  photo?: string;
  linkedin?: string;
}

interface TeamGridProps {
  members: TeamMember[];
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-xl border border-[#E2E8F0] p-6 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-[#26437E] hover:shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full overflow-hidden bg-[#26437E] flex items-center justify-center flex-shrink-0">
          {member.photo && !imgErr ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={() => setImgErr(true)}
            />
          ) : (
            <span className="text-white font-bold text-lg">
              {member.initials}
            </span>
          )}
        </div>

        {/* Name + Role */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-[#0A0A0A]">
            {member.name}
          </h3>
          <p className="text-sm text-[#4A4A4A] font-medium">{member.role}</p>
          {member.division && (
            <p className="text-xs text-[#4A4A4A]/70">{member.division}</p>
          )}
        </div>

        {/* Short description (optional) */}
        {member.description && (
          <p className="text-sm text-[#4A4A4A] line-clamp-2">
            {member.description}
          </p>
        )}

        {/* View Profile BUTTON → LinkedIn */}
        {member.linkedin && (
          <div
            className={`transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-[#26437E] text-[#26437E] hover:bg-[#26437E] hover:text-white"
                size="sm"
              >
                View Profile
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
      {members.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  );
}
