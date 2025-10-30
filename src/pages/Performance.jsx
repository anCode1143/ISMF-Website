import React, { useEffect } from "react"
import { PerformanceChart } from "@/components/PerformanceChart"
import { PortfolioBreakdown } from "@/components/PortfolioBreakdown"

export default function Performance(){
    useEffect(() => { window.scrollTo(0, 0) }, [])
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="mb-12">
                <h1 className="text-3xl font-bold mb-6">Portfolio Performance</h1>
                <PerformanceChart />
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-6">Portfolio Allocation</h2>
                <PortfolioBreakdown />
            </div>
        </section>
    )
}