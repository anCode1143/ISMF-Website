import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  division?: string;
  initials: string;
  photo?: string; // <-- NEW (optional)
  linkedin?: string; // <-- NEW (optional)
}

interface TeamGridProps {
  members: TeamMember[];
}

const TeamMemberCard: React.FC<{ member: TeamMember; onCardClick: () => void }> = ({
  member,
  onCardClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false); // <-- NEW (fallback if image fails)

  return (
    <div
      className="group relative bg-white rounded-xl border border-[#E2E8F0] p-6 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-[#26437E] hover:shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onCardClick();
        }
      }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Avatar: image if available, otherwise initials */}
        <div className="w-24 h-24 rounded-full overflow-hidden bg-[#26437E] flex items-center justify-center flex-shrink-0">
          {member.photo && !imgErr ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={() => setImgErr(true)}
            />
          ) : (
            <span className="text-white font-bold text-lg">{member.initials}</span>
          )}
        </div>

        {/* Name and Role */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-[#0A0A0A]">
            {member.name || member.role}
          </h3>
          <p className="text-sm text-[#4A4A4A] font-medium">{member.role}</p>
          {member.division && (
            <p className="text-xs text-[#4A4A4A]/70">{member.division}</p>
          )}
        </div>

        {/* Description (truncated) */}
        {member.description && (
          <p className="text-sm text-[#4A4A4A] line-clamp-2">
            {member.description}
          </p>
        )}

        {/* View Profile Button (appears on hover) */}
        <div
          className={`transition-all duration-300 ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <Button
            variant="outline"
            className="border-[#26437E] text-[#26437E] hover:bg-[#26437E] hover:text-white"
            size="sm"
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

const TeamModal: React.FC<{
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ member, isOpen, onClose }) => {
  if (!member) return null;
  const [imgErr, setImgErr] = useState(false); // <-- NEW

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#0A0A0A]">
            {member.name || member.role}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-[#26437E] flex items-center justify-center flex-shrink-0">
              {member.photo && !imgErr ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={() => setImgErr(true)}
                />
              ) : (
                <span className="text-white font-bold text-2xl">{member.initials}</span>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold text-[#0A0A0A]">
                {member.role}
              </p>
              {member.division && (
                <p className="text-sm text-[#4A4A4A]">{member.division}</p>
              )}
            </div>
          </div>
          {member.description ? (
            <p className="text-[#4A4A4A] leading-relaxed">{member.description}</p>
          ) : (
            <p className="text-[#4A4A4A] italic">Additional information coming soon.</p>
          )}
          
          {member.linkedin && (
            <div className="pt-2">
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
                  View LinkedIn Profile
                </Button>
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function TeamGrid({ members }: TeamGridProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
        {members.map((member, index) => (
          <TeamMemberCard
            key={index}
            member={member}
            onCardClick={() => handleCardClick(member)}
          />
        ))}
      </div>
      <TeamModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
