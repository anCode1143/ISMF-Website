import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap, LineChart, Shield } from "lucide-react";

export const EducationSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Understanding Finance Made Simple
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            New to trading and economics? We break down complex concepts into easy-to-understand explanations.
          </p>
        </div>

        <Tabs defaultValue="basics" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="risk">Risk</TabsTrigger>
            <TabsTrigger value="strategy">Strategy</TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="space-y-4 mt-6">
            {/* Visual: basics cards on white with subtle outline instead of solid blue fill */}
            <Card className="p-6 bg-white border border-primary/20">
              <div className="flex gap-4 mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold mb-2">What is a Portfolio?</h3>
                  <p className="text-muted-foreground">
                    A portfolio is like a basket containing different investments - stocks, bonds, and other assets. 
                    Instead of putting all your money in one place, you spread it across multiple investments to reduce risk.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-primary/20">
              <div className="flex gap-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold mb-2">What is a Stock?</h3>
                  <p className="text-muted-foreground">
                    When you buy a stock, you're buying a small piece of ownership in a company. If the company does well and becomes more valuable, 
                    your stock becomes more valuable too. You can make money by selling it for more than you paid.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="metrics" className="space-y-4 mt-6">
            {/* Visual: metrics card switched to white surface with primary-tinted outline */}
            <Card className="p-6 bg-white border border-primary/20">
              <h3 className="text-xl font-bold mb-4">Key Performance Indicators Explained</h3>
              
              <div className="space-y-4">
                {/* Box: keep KPI callouts on white with subtle left accent, no solid blue fill */}
                <div className="border-l-4 border-accent bg-white/60 rounded-md pl-4 py-3">
                  <h4 className="font-bold mb-1">Return (%)</h4>
                  <p className="text-sm text-muted-foreground">
                    How much money you made (or lost) on an investment, shown as a percentage. 
                    A 10% return means you made €10 for every €100 invested.
                  </p>
                </div>

                <div className="border-l-4 border-accent bg-white/60 rounded-md pl-4 py-3">
                  <h4 className="font-bold mb-1">Alpha</h4>
                  <p className="text-sm text-muted-foreground">
                    Measures how much better (or worse) we performed compared to the overall market. 
                    Positive alpha means we beat the market - that's good stock-picking!
                  </p>
                </div>

                <div className="border-l-4 border-accent bg-white/60 rounded-md pl-4 py-3">
                  <h4 className="font-bold mb-1">Sharpe Ratio</h4>
                  <p className="text-sm text-muted-foreground">
                    Shows how much return we get for the risk we take. Higher is better - 
                    it means we're getting good returns without taking too much risk.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="risk" className="space-y-4 mt-6">
            {/* Visual: risk card uses transparent white background plus outline for a lighter feel */}
            <Card className="p-6 bg-white border border-primary/20">
              <div className="flex gap-4">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold mb-4">Managing Investment Risk</h3>
                  <p className="text-muted-foreground mb-4">
                    Risk is the chance that an investment might lose value. We manage risk through:
                  </p>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Diversification:</strong> Investing in different sectors and companies so one bad performer doesn't hurt the whole portfolio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Research:</strong> Thoroughly analyzing companies before investing to understand their potential and risks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Position Sizing:</strong> Not putting too much money in any single investment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="strategy" className="space-y-4 mt-6">
            {/* Visual: strategy card aligned with new white + outlined card styling */}
            <Card className="p-6 bg-white border border-primary/20">
              <div className="flex gap-4">
                <LineChart className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold mb-4">Our Investment Approach</h3>
                  <p className="text-muted-foreground mb-4">
                    We use a <strong>fundamental analysis</strong> approach, which means:
                  </p>
                  
                  <div className="space-y-3">
                    {/* Boxes: inner strategy steps now white with outline instead of muted fill */}
                    <div className="p-3 bg-white border border-primary/15 rounded-lg">
                      <strong className="text-primary">1. Company Research</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        We study company financials, business models, and competitive advantages
                      </p>
                    </div>
                    
                    <div className="p-3 bg-white border border-primary/15 rounded-lg">
                      <strong className="text-primary">2. Valuation</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        We determine if a stock is priced fairly compared to its true value
                      </p>
                    </div>
                    
                    <div className="p-3 bg-white border border-primary/15 rounded-lg">
                      <strong className="text-primary">3. Long-term Focus</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        We invest in quality companies we believe will grow over years, not just weeks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
