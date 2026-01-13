import React from "react";
import Hero from "../components/Home/Hero";
import ServicesWeOffer from "../components/Home/ServicesWeOffer";
import StatsSection from "../components/Home/StatsSection";
import ProductsShowcase from "../components/Home/ProductsShowcase";
import AboutSagoSection from "../components/Home/AboutSagoSection";
import AverageRates from "../components/Home/AverageRates";
import QuickLinks from "../components/Home/QuickLinks";
import LatestNews from "../components/Home/LatestNews";
import SectionTittle from "../components/common/SectionTittle";
import NewsEventsSection from "../components/Home/NewsEventsSection";
import TapiocaHighlightSection from "../components/Home/TapiocaHighlightSection";
import QuickLinksSection from "../components/Home/QuickLinksSection";
import WelcomeSection from "../components/Home/WelcomeSection";
import HomeTestimonialsSection from "../components/Home/HomeTestimonialsSection";
import GrowthCtaSection from "../components/Home/GrowthCtaSection";

<GrowthCtaSection />

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
    <main className="overflow-x-hidden">
      {/* HERO */}
      <Hero />
       <WelcomeSection />
      {/* SERVICES */}
      <ServicesWeOffer />

      {/* HIGHLIGHT */}
      <TapiocaHighlightSection />

      {/* ABOUT */}
      <AboutSagoSection />

      {/* STATS */}
      <StatsSection />

      {/* PRODUCTS */}
      <ProductsShowcase />

      {/* NEWS + EVENTS */}
      <NewsEventsSection />
      <QuickLinksSection />
<HomeTestimonialsSection />
<GrowthCtaSection />

      
    </main>
  );
}
