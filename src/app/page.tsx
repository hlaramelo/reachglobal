import Hero from "@/components/sections/Hero";
import PerformanceTable from "@/components/sections/PerformanceTable";
import Strategy from "@/components/sections/Strategy";
import PortfolioConstruction from "@/components/sections/PortfolioConstruction";
import InvestmentProcess from "@/components/sections/InvestmentProcess";
import PerformanceAttribution from "@/components/sections/PerformanceAttribution";
import FundFacts from "@/components/sections/FundFacts";

export default function Home() {
  return (
    <>
      <Hero />
      <PerformanceTable />
      <Strategy />
      <PortfolioConstruction />
      <InvestmentProcess />
      <PerformanceAttribution />
      <FundFacts />
    </>
  );
}
