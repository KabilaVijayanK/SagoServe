import React, { useState, useEffect } from 'react';
import { Clock, TrendingUp, Award, FileText, ChevronRight, Zap, Users, CheckCircle } from 'lucide-react';

const SectionTitle = ({ title, subtitle, icon: Icon }) => (
  <div className="text-center mb-12 relative">
    <div className="absolute inset-0 flex items-center justify-center opacity-10">
      {Icon && <Icon className="w-32 h-32 text-emerald-500" />}
    </div>
    <div className="relative">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3 animate-pulse">
        {title}
      </h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
    </div>
  </div>
);

const AuctionCountdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-2 mt-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg p-3 text-center transform hover:scale-110 transition-transform">
          <div className="text-2xl font-bold text-white">{value}</div>
          <div className="text-xs text-emerald-100 uppercase">{unit}</div>
        </div>
      ))}
    </div>
  );
};

const AuctionCard = ({ auction, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-teal-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Status badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 animate-pulse">
          <Zap className="w-3 h-3" />
          LIVE
        </div>
      </div>

      <div className="relative p-6">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-500">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
          {auction.title}
        </h3>

        {/* Lot ID */}
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
            ID: {auction.id}
          </span>
        </div>

        {/* Countdown */}
        <AuctionCountdown targetDate={auction.date} />

        {/* Scheduled time */}
        <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{new Date(auction.date).toLocaleString()}</span>
        </div>

        {/* Join button */}
        <button className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
          Join Auction
          <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
        </button>
      </div>
    </div>
  );
};

const GuidelinesCard = () => {
  const guidelines = [
    { icon: Users, text: "Registration required before bidding" },
    { icon: FileText, text: "Upload all necessary documents" },
    { icon: CheckCircle, text: "Adhere to auction rules and regulations" },
    { icon: Award, text: "Transparent and fair bidding process" }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-xl border border-emerald-100">
      <div className="grid md:grid-cols-2 gap-6">
        {guidelines.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300 transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-700 font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PastResultsCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-500">
          <FileText className="w-12 h-12 text-white" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Historical Data Available</h3>
          <p className="text-gray-600 mb-4">
            Downloadable reports and historical price lists are maintained for transparency and reference.
          </p>
          <button className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transform transition-all duration-300 flex items-center gap-2 mx-auto md:mx-0 ${isHovered ? 'scale-110' : ''}`}>
            Download Reports
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Auction() {
  const auctions = [
    { id: 'A-1001', title: 'Sago Lot A - 50 MT', date: '2026-01-20T10:00:00Z' },
    { id: 'B-2001', title: 'Starch Lot B - 30 MT', date: '2026-01-22T14:00:00Z' },
    { id: 'C-3001', title: 'Premium Sago - 75 MT', date: '2026-01-25T11:00:00Z' },
    { id: 'D-4001', title: 'Organic Starch - 40 MT', date: '2026-01-28T15:00:00Z' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-about.jpg')"
          }}
        ></div>

        {/* Animated background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 via-teal-600/85 to-cyan-600/90"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-20">
          {/* Badge */}
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-semibold mb-8 animate-fade-in hover:bg-white/30 transition-colors duration-300">
            🔥 Live Auction Events
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight animate-fade-in">
            E-Auction-
            <span className="bg-gradient-to-r from-emerald-200 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
              Platform
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-emerald-50 max-w-3xl mx-auto mb-8 font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Transparent, secure, and efficient online auction system for agricultural products
          </p>

          {/* Features highlight */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm">
              <Zap className="w-4 h-4 text-yellow-300" />
              Real-time Bidding
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm">
              <Award className="w-4 h-4 text-green-300" />
              Verified Sellers
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm">
              <CheckCircle className="w-4 h-4 text-blue-300" />
              100% Secure
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button className="group relative px-8 py-4 bg-white text-emerald-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <span className="relative z-10">Explore Auctions</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group relative px-8 py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              <span>Register Now</span>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-2 bg-white/50 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-16">
        {/* Current Auctions */}
        <section>
          <SectionTitle 
            title="Current Auctions" 
            subtitle="Live countdown to upcoming events"
            icon={TrendingUp}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {auctions.map((auction, index) => (
              <AuctionCard key={auction.id} auction={auction} index={index} />
            ))}
          </div>
        </section>

        {/* Guidelines */}
        <section>
          <SectionTitle 
            title="Guidelines for Participation" 
            subtitle="Essential requirements for bidders"
            icon={FileText}
          />
          <GuidelinesCard />
        </section>

        {/* Past Results */}
        <section>
          <SectionTitle 
            title="Past Auction Results" 
            subtitle="Complete transparency with historical data"
            icon={Award}
          />
          <PastResultsCard />
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}