import React from "react";
import Hero from "../components/Home/Hero";
import ServicesWeOffer from "../components/Home/ServicesWeOffer";
import StatsSection from "../components/Home/StatsSection";
import ProductsShowcase from "../components/Home/ProductsShowcase";

import AverageRates from "../components/Home/AverageRates";
import QuickLinks from "../components/Home/QuickLinks";
import LatestNews from "../components/Home/LatestNews";
import SectionTittle from "../components/common/SectionTittle";

const sampleNews = [
  {
    id: "n1",
    title: "Market circular released",
    summary: "Daily rate circular published by the board.",
    date: "2026-01-08",
  },
  {
    id: "n2",
    title: "Upcoming quality workshop",
    summary: "Training for laboratory sampling and QA.",
    date: "2026-01-15",
  },
];

export default function Home() {
  const rates = {
    sago: "₹ 42,500 / MT",
    starch: "₹ 25,200 / MT",
    broken: "₹ 12,800 / MT",
  };

  return (
    <div>
      {/* HERO SECTION */}
      <Hero />

      {/* 🔥 HERO KEELA SERVICES */}
      <ServicesWeOffer />
    <StatsSection />
    <ProductsShowcase />
      {/* BELOW CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          <SectionTittle title="Average Market Rates" />
          <AverageRates rates={rates} />

          <SectionTittle title="Latest News & Events" />
          <LatestNews items={sampleNews} />
        </div>

        <aside>
          <SectionTittle title="Quick Links" />
          <QuickLinks />
        </aside>
      </div>
    </div>
  );
}
