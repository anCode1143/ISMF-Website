import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useApplyModal } from "@/hooks/useApplyModal";

const benefits = [
  "Hands-on experience managing real capital",
  "Networking with finance professionals and peers",
  "Resume-building practical experience",
  "Mentorship from experienced fund managers",
  "Access to Bloomberg terminals and research tools",
  "Participation in investment competitions"
];

export const JoinSection = () => {
  const { openModal } = useApplyModal();
  
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join the ISMF Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Applications for the 2025/2026 academic year are now open
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">What You'll Gain</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Who We're Looking For</h3>
                <div className="space-y-4">
                  <Card className="p-4 bg-muted/50">
                    <p className="font-semibold mb-1">Any Academic Background</p>
                    <p className="text-sm text-muted-foreground">
                      You don't need to be a finance major - we welcome passionate learners from all disciplines! We have a role for everyone, including finance students,developers,
                      marketers, and more.
                    </p>
                  </Card>
                  
                  <Card className="p-4 bg-muted/50">
                    <p className="font-semibold mb-1">Commitment & Curiosity</p>
                    <p className="text-sm text-muted-foreground">
                      Willingness to learn, collaborate, and dedicate time to research and meetings
                    </p>
                  </Card>
                  
                  <Card className="p-4 bg-muted/50">
                    <p className="font-semibold mb-1">Team Player</p>
                    <p className="text-sm text-muted-foreground">
                      Strong communication skills and ability to work well in a team environment
                    </p>
                  </Card>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button onClick={openModal} size="lg" className="text-lg px-8 group">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Application deadline: INSERT DATE HERE
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
