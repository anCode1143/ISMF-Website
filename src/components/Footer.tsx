import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Instagram } from "lucide-react";
import ismfLogo from "@/assets/ismf-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-oxford to-delft text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <img src={ismfLogo} alt="ISMF Logo" className="h-16 w-auto mb-4" />
            <p className="text-white/80 mb-4">
              Empowering Irish students with hands-on investment experience and financial education.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold text-white mb-3">Follow Us</h3>
              <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/irishsmf/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit ISMF LinkedIn page"
                className="text-white/80 hover:text-[#0077B5] transition-all duration-300 transform hover:scale-110 hover:bg-white/10 p-2 rounded-lg"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:irishstudentfund@gmail.com"
                aria-label="Send email to ISMF"
                className="text-white/80 hover:text-cornflower transition-all duration-300 transform hover:scale-110 hover:bg-white/10 p-2 rounded-lg"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/irishsmf/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit ISMF Instagram page"
                className="text-white/80 hover:text-[#E4405F] transition-all duration-300 transform hover:scale-110 hover:bg-white/10 p-2 rounded-lg"
              >
                <Instagram className="h-6 w-6" />
              </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-cornflower transition-colors">About ISMF</a></li>
              <li><a href="#divisions" className="hover:text-cornflower transition-colors">Divisions</a></li>
              <li><a href="#research" className="hover:text-cornflower transition-colors">Research</a></li>
              <li><a href="#performance" className="hover:text-cornflower transition-colors">Performance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-white/80">
              <li>Dublin, Ireland</li>
              <li><a href="mailto:irishstudentfund@gmail.com" className="hover:text-cornflower transition-colors">irishstudentfund@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© 2025 Irish Student Managed Fund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
