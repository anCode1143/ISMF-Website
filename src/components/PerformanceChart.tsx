import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, Calendar } from "lucide-react";

const generateData = (months: number) => {
  const data = [];
  let portfolioValue = 100000;
  let benchmarkValue = 100000;
  
  for (let i = 0; i < months; i++) {
    portfolioValue += (Math.random() - 0.4) * 5000 + 1500;
    benchmarkValue += (Math.random() - 0.45) * 4000 + 1000;
    
    data.push({
      month: new Date(2024, i, 1).toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
      portfolio: Math.round(portfolioValue),
      benchmark: Math.round(benchmarkValue),
    });
  }
  return data;
};

const data6M = generateData(6);
const data1Y = generateData(12);
const data3Y = generateData(36);

export const PerformanceChart = () => {
  const [timeframe, setTimeframe] = useState<"6M" | "1Y" | "3Y">("1Y");
  
  const data = timeframe === "6M" ? data6M : timeframe === "1Y" ? data1Y : data3Y;
  
  const currentValue = data[data.length - 1].portfolio;
  const initialValue = data[0].portfolio;
  const percentChange = ((currentValue - initialValue) / initialValue * 100).toFixed(2);
  const isPositive = parseFloat(percentChange) > 0;
  
  return (
    // Visual: ensure the portfolio performance panel sits on a clean white card (no dark blue background)
    <Card className="p-6 space-y-6 bg-white border border-border hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-accent" />
            Portfolio Performance
          </h3>
          <p className="text-muted-foreground mt-1">Track our fund's growth over time</p>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant={timeframe === "6M" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeframe("6M")}
          >
            6M
          </Button>
          <Button
            variant={timeframe === "1Y" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeframe("1Y")}
          >
            1Y
          </Button>
          <Button
            variant={timeframe === "3Y" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeframe("3Y")}
          >
            3Y
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Current Value</p>
          <p className="text-2xl font-bold">€{currentValue.toLocaleString()}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Return ({timeframe})</p>
          <p className={`text-2xl font-bold ${isPositive ? 'text-accent' : 'text-destructive'}`}>
            {isPositive ? '+' : ''}{percentChange}%
          </p>
        </div>
      </div>
      
      <div className="h-[300px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorBenchmark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="month" 
              className="text-xs"
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              className="text-xs"
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              tickFormatter={(value) => `€${(value/1000).toFixed(0)}k`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
              formatter={(value: number) => [`€${value.toLocaleString()}`, '']}
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="portfolio" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorPortfolio)"
              name="ISMF Portfolio"
            />
            <Area 
              type="monotone" 
              dataKey="benchmark" 
              stroke="hsl(var(--muted-foreground))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              fillOpacity={1} 
              fill="url(#colorBenchmark)"
              name="Market Benchmark"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
