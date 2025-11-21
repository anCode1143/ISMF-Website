import { Card } from "@/components/ui/card";
import { Building, TrendingUp, Building2, Globe, Users } from "lucide-react";

const partners = [
  { icon: Building, name: "Financial Institution" },
  { icon: TrendingUp, name: "Investment Firm" },
  { icon: Building2, name: "Corporate Partner" },
  { icon: Globe, name: "Global Organization" },
  { icon: Users, name: "Educational Partner" },
];

export const Partners = () => {
  return (
    // Background: remove light blue/muted wash so this section sits on the main page background
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners & Sponsors</h2>
          <p className="text-lg text-muted-foreground">
            Supporting the future of student investment education
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <Card 
                key={index}
                // Visual: partner tiles are clear with a subtle outline instead of a solid light blue fill
                className="aspect-square flex items-center justify-center p-8 border border-primary/20 bg-white hover:bg-primary/5 hover:shadow-lg transition-all hover:scale-105 duration-300"
              >
                <div className="text-center space-y-3">
                  <Icon className="h-12 w-12 mx-auto text-muted-foreground/60" />
                  <p className="text-xs text-muted-foreground">{partner.name}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-primary text-primary-foreground max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
            <p className="text-primary-foreground/90 mb-6">
              Join us in shaping the next generation of financial professionals. 
              Partner organizations gain access to talented students, research insights, 
              and opportunities to support meaningful education initiatives.
            </p>
            <button className="bg-primary-foreground text-primary px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform">
              Partner With Us
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
};
