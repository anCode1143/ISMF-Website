import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, Sector } from "recharts";
import { useState } from "react";

const data = [
  { name: "Technology", value: 20, color: "hsl(var(--chart-1))" },
  { name: "Healthcare", value: 20, color: "hsl(var(--chart-2))" },
  { name: "Finance", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Consumer", value: 20, color: "hsl(var(--chart-4))" },
  { name: "Energy", value: 20, color: "hsl(var(--chart-5))" },
];

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export const PortfolioBreakdown = () => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Visual: use a clean white card with subtle border around the portfolio allocation section */}
        <Card className="p-8 bg-white border border-border">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Portfolio Allocation</h2>
            <p className="text-muted-foreground">
              Sector diversification to manage risk and maximize returns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    dataKey="value"
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(undefined)}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => `${value}%`}
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              {data.map((sector, index) => (
                <div 
                  key={index}
                  // Visual: keep allocation rows on white with only a border highlight on hover (no blue fill)
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(undefined)}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: sector.color }}
                    />
                    <span className="font-medium">{sector.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">---</div>
                    <div className="text-sm text-muted-foreground">
                      ---
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-white rounded-lg border border-accent/30">
            <p className="text-sm">
              <strong className="text-accent">💡 Why diversification matters:</strong> By spreading investments across different sectors, we reduce the risk that a downturn in any single industry will significantly impact our overall portfolio performance.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
