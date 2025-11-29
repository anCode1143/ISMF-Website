import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PerformanceChart = () => {
  const [timeframe, setTimeframe] = useState<"6M" | "1Y" | "3Y">("1Y");
  
  return (
    // Visual: ensure the portfolio performance panel sits on a clean white card (no dark blue background)
    <Card className="p-6 space-y-6 bg-white border border-border hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-muted-foreground">Coming Soon</p>
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
          <p className="text-2xl font-bold">---</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Return ({timeframe})</p>
          <p className="text-2xl font-bold">
            ---
          </p>
        </div>
      </div>
      
      <div className="h-[300px] md:h-[400px] flex items-center justify-center border border-dashed border-muted-foreground/20 rounded-lg">
        <p className="text-lg text-muted-foreground">Coming Soon</p>
      </div>
    </Card>
  );
};
