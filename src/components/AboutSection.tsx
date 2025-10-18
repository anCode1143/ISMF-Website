import { Card } from "@/components/ui/card";
import { BookOpen, TrendingUp, Users, Target } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Learn by Doing",
    description: "Get hands-on experience analysing financial data and making investment decisions, taking conceptual knowledge and applying it to the real-world.."
  },
  {
    icon: TrendingUp,
    title: "Real Performance",
    description: "Track actual returns and learn from both successes and setbacks in a supportive environment with experienced mentorship."
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description: "Work alongside peers from diverse backgrounds, sharing insights and building a professional network in finance."
  },
  {
    icon: Target,
    title: "Career Building",
    description: "Gain practical skills and experience that employers value, setting yourself apart in competitive finance roles."
  }
];

export const AboutSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What is ISMF?</h2>
          <p className="text-lg text-muted-foreground">
            The Irish Student Managed Fund is a student-led investment organization where members learn finance 
            by managing a real portfolio. We combine academic theory with practical experience, 
            preparing the next generation of professionals in the finance and technology sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all hover:scale-105 duration-300"
              >
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-cornflower/10 h-fit">
                    <Icon className="h-6 w-6 text-cornflower" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-oxford">{feature.title}</h3>
                    <p className="text-oxford/70">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-gradient-to-r from-cornflower to-delft text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-lg text-white/90">
              To provide Irish students with practical experience in investment management, 
              developing financial literacy and professional development through collaborative learning 
              and real-world application.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
