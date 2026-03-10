import Hero from "@/components/sections/Hero";
import PerformanceTable from "@/components/sections/PerformanceTable";
import PerformanceChart from "@/components/sections/PerformanceChart";
import Strategy from "@/components/sections/Strategy";
import PortfolioConstruction from "@/components/sections/PortfolioConstruction";
import InvestmentProcess from "@/components/sections/InvestmentProcess";
import PerformanceAttribution from "@/components/sections/PerformanceAttribution";
import FundFacts from "@/components/sections/FundFacts";
import TopContributors from "@/components/sections/TopContributors";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <PerformanceTable />
      <PerformanceChart />
      <Strategy />
      <PortfolioConstruction />
      <TopContributors />
      <InvestmentProcess />
      <PerformanceAttribution />
      <FundFacts />
      <CTASection />
    </>
  );
}
