import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin } from "lucide-react";
import { useApplyModal } from "@/hooks/useApplyModal";
import ismfLogo from "@/assets/ismf-logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useApplyModal();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About ISMF", href: "#about" },
    { label: "Divisions", href: "#divisions" },
    { label: "Research", href: "#research" },
    { label: "Performance", href: "#performance" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-delft to-oxford text-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={ismfLogo} alt="ISMF Logo" className="h-10 w-auto" />
            <span className="font-bold text-xl text-white">ISMF</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white hover:text-cornflower transition-colors"
              >
                {link.label}
              </a>
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
            <Button onClick={openModal} className="bg-cornflower text-white hover:brightness-95">Apply Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white hover:text-cornflower transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
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
              <Button onClick={openModal} className="w-full bg-cornflower text-white hover:brightness-95">Apply Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
