import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Activity, TrendingUp, Globe, ExternalLink, RefreshCw } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import { fetchEconomicData, type EconomicData } from '@/services/economicData';

const ChartCard = ({ 
  title, 
  value, 
  change, 
  trend, 
  color, 
  dataKey, 
  historicalData
}: {
  title: string;
  value: number;
  change: number;
  trend: string;
  color: string;
  dataKey: string;
  historicalData: any[];
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const getTrendColor = (trend: string) => {
    return trend === 'increasing' ? 'text-red-600' : 'text-green-600';
  };
  
  const getTrendIcon = (trend: string) => {
    return trend === 'increasing' ? '↗' : '↘';
  };

  return (
    <Card className="p-6 bg-[#81B9EE] border-0 shadow-md rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[#011936]">{title}</h3>
        <TrendingUp className="h-5 w-5 text-[#6184D8] group-hover:text-[#1D3461] transition-colors" />
      </div>
      
      <div className="mb-4">
        <div className="text-3xl font-bold text-[#011936] mb-1">
          {value}%
        </div>
        <div className={`text-sm font-medium flex items-center gap-1 ${getTrendColor(trend)}`}>
          <span>{getTrendIcon(trend)}</span>
          <span>{Math.abs(change)}%</span>
          <span className="text-[#011936]/70">from last month</span>
        </div>
      </div>

      <div className="h-32 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={historicalData.slice(-12)}>
            <defs>
              <linearGradient id={`gradient-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              fill={`url(#gradient-${dataKey})`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFFCF2',
                border: '1px solid #6184D8',
                borderRadius: '8px',
                fontSize: '12px',
                color: '#011936'
              }}
              formatter={(value: any) => [`${value}%`, dataKey]}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-[#6184D8] border-[#6184D8] hover:bg-[#6184D8] hover:text-white transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            View Details
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl bg-[#FFFCF2] border-[#6184D8]">
          <DialogHeader>
            <DialogTitle className="text-[#011936] text-xl font-bold">
              {title} - Historical Analysis
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#011936"
                    fontSize={12}
                    tick={{ fill: '#011936' }}
                  />
                  <YAxis 
                    stroke="#011936"
                    fontSize={12}
                    tick={{ fill: '#011936' }}
                    domain={['dataMin - 0.5', 'dataMax + 0.5']}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFCF2',
                      border: '1px solid #6184D8',
                      borderRadius: '8px',
                      fontSize: '12px',
                      color: '#011936'
                    }}
                    formatter={(value: any) => [`${value}%`, dataKey]}
                  />
                  <Line
                    type="monotone"
                    dataKey={dataKey}
                    stroke={color}
                    strokeWidth={3}
                    dot={{ fill: color, strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: color }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-[#81B9EE] p-4 rounded-lg border border-[#6184D8]/20">
              <h4 className="font-semibold text-[#011936] mb-2">Research Insights</h4>
              <p className="text-sm text-[#011936]/80 leading-relaxed">
                {dataKey === 'inflation' 
                  ? "Recent inflation trends show a gradual moderation from peak levels, indicating potential easing of price pressures. This trend suggests the effectiveness of monetary policy measures and could signal a more stable economic environment for investment decisions."
                  : "Unemployment rates continue to show resilience in the labor market, with consistent improvements indicating strong economic fundamentals. This trend supports consumer spending and overall economic stability, creating favorable conditions for equity investments."
                }
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export const MacroDashboard = () => {
  const { data: economicData, isLoading, error, refetch } = useQuery<EconomicData>({
    queryKey: ['economic-data'],
    queryFn: fetchEconomicData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Activity className="h-8 w-8 text-primary animate-spin" />
              <h2 className="text-3xl md:text-4xl font-bold">Macro Research Dashboard</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Loading live economic indicators from trusted public datasets...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <Card key={i} className="p-6 bg-[#81B9EE] border-0 shadow-md rounded-2xl">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                  <div className="h-8 bg-gray-300 rounded w-1/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3 mb-6"></div>
                  <div className="h-32 bg-gray-300 rounded"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Activity className="h-8 w-8 text-red-500" />
              <h2 className="text-3xl md:text-4xl font-bold">Macro Research Dashboard</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Unable to load economic data at this time. Please try again later.
            </p>
            <Button onClick={() => refetch()} className="bg-[#6184D8] hover:bg-[#1D3461]">
              <RefreshCw className="mr-2 h-4 w-4" />
              Retry
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity className="h-8 w-8 text-[#6184D8]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#011936]">Macro Research Dashboard</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Live economic indicators drawn from trusted public datasets.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Globe className="h-4 w-4" />
            <span>Data updated every 5 minutes</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => refetch()}
              className="ml-2 text-[#6184D8] hover:text-[#1D3461]"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <ChartCard
            title="Inflation Rate"
            value={economicData?.inflation.current || 0}
            change={economicData?.inflation.change || 0}
            trend={economicData?.inflation.trend || 'stable'}
            color="#6184D8"
            dataKey="inflation"
            historicalData={economicData?.historicalData || []}
          />
          
          <ChartCard
            title="Unemployment Rate"
            value={economicData?.unemployment.current || 0}
            change={economicData?.unemployment.change || 0}
            trend={economicData?.unemployment.trend || 'stable'}
            color="#1D3461"
            dataKey="unemployment"
            historicalData={economicData?.historicalData || []}
          />
        </div>

        <Card className="p-6 bg-gradient-to-r from-[#6184D8]/5 to-[#1D3461]/5 border-[#6184D8]/20 shadow-lg">
          <div className="flex items-start gap-4">
            <Globe className="h-6 w-6 text-[#6184D8] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2 text-[#011936]">Real-Time Economic Intelligence</h3>
              <p className="text-[#011936]/80 leading-relaxed mb-4">
                Our macro research dashboard provides real-time access to key economic indicators that drive 
                investment decisions. By monitoring inflation and unemployment trends, we can identify market 
                opportunities and assess economic risks. This data-driven approach ensures our investment 
                strategies are grounded in solid macroeconomic fundamentals.
              </p>
              <div className="text-sm text-[#011936]/60 border-t border-[#6184D8]/20 pt-3">
                <p className="font-medium mb-1">Data Sources:</p>
                <p>Federal Reserve Economic Data (FRED), OECD Economic Indicators, World Bank Open Data</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
