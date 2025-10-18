import { Card } from "@/components/ui/card";
import { Building2, ShoppingCart, Cpu, Coffee, Heart, Factory, Zap, Radio, Mountain, Home } from "lucide-react";

const divisions = [
  { name: "Financials", icon: Building2, description: "Banks, insurance, and investment firms" },
  { name: "Consumer Staples", icon: ShoppingCart, description: "Essential goods and household products" },
  { name: "Technology", icon: Cpu, description: "Software, hardware, and IT services" },
  { name: "Consumer Discretionary", icon: Coffee, description: "Luxury goods and entertainment" },
  { name: "Healthcare", icon: Heart, description: "Pharmaceuticals and medical devices" },
  { name: "Industrials", icon: Factory, description: "Manufacturing and construction" },
  { name: "Energy & Utilities", icon: Zap, description: "Power generation and distribution" },
  { name: "Communications", icon: Radio, description: "Telecom and media services" },
  { name: "Basic Materials", icon: Mountain, description: "Mining, metals, and chemicals" },
  { name: "Real Estate", icon: Home, description: "Property development and REITs" },
];

export const Divisions = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Divisions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized research teams covering every major sector of the market
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all hover:scale-105 duration-300 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{division.name}</h3>
                    <p className="text-xs text-muted-foreground">{division.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 p-6 bg-accent/10 border-accent/20">
          <p className="text-center text-muted-foreground">
            <strong className="text-accent">Sector Coverage:</strong> Each division is led by student analysts who learn to understand 
            industry trends, competitive dynamics, and company fundamentals within their sector.
          </p>
        </Card>
      </div>
    </section>
  );
};
