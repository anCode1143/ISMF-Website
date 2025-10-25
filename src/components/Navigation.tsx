// src/components/Navigation.tsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin } from "lucide-react";
import { useApplyModal } from "@/hooks/useApplyModal";
import ismfLogo from "@/assets/ismf-logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useApplyModal();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About ISMF", to: "/about" },
    { label: "Divisions", to: "/divisions" },
    { label: "Research", to: "/research" },
    { label: "Performance", to: "/performance" },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-cornflower" : "text-white"
    } hover:text-cornflower`;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-delft to-oxford text-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo links to Home */}
          <Link to="/" className="flex items-center gap-2">
            <img src={ismfLogo} alt="ISMF Logo" className="h-10 w-auto" />
            <span className="font-bold text-xl text-white">ISMF</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}

            <a
              href="https://www.linkedin.com/company/irishsmf/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit ISMF LinkedIn page"
              className="text-white/80 hover:text-[#0077B5] transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <Button onClick={openModal} className="bg-cornflower text-white hover:brightness-95">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/company/irishsmf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit ISMF LinkedIn page"
                  className="text-white/80 hover:text-[#0077B5] transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>

              <Button onClick={openModal} className="w-full bg-cornflower text-white hover:brightness-95">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
