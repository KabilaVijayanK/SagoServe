import React from "react";
import Hero from "../components/Home/Hero";
import ServicesWeOffer from "../components/Home/ServicesWeOffer";
import StatsSection from "../components/Home/StatsSection";
import ProductsShowcase from "../components/Home/ProductsShowcase";
import AboutSagoSection from "../components/Home/AboutSagoSection";
import NewsEventsSection from "../components/Home/NewsEventsSection";
import TapiocaHighlightSection from "../components/Home/TapiocaHighlightSection";
import QuickLinksSection from "../components/Home/QuickLinksSection";
import WelcomeSection from "../components/Home/WelcomeSection";
import HomeTestimonialsSection from "../components/Home/HomeTestimonialsSection";
import GrowthCtaSection from "../components/Home/GrowthCtaSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#030303]">
      <Hero />
      <WelcomeSection />
      <ServicesWeOffer />
      <TapiocaHighlightSection />
      <AboutSagoSection />
      <StatsSection />
      <ProductsShowcase />
      <NewsEventsSection />
      <QuickLinksSection />
      <HomeTestimonialsSection />
      <GrowthCtaSection />
    </main>
  );
}
