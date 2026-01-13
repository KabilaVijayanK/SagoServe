import React, { useEffect, useRef } from "react";
import { Bell, Clock } from "lucide-react";

const news = [
  { title: "Market opens steady after rains", time: "2 hrs ago", tag: "New" },
  { title: "New warehouse in Chennai becomes operational", time: "1 day ago", tag: "New" },
  { title: "Buyer interest rises for Broken grade", time: "2 days ago", tag: "New" },
];

const events = [
  { title: "Daily auction at 11:00 AM", status: "Happening", day: "Today" },
  { title: "Member training session – Online", status: "Scheduled", day: "Tomorrow" },
];

export default function NewsEventsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const cards = ref.current.querySelectorAll(".animate-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* 🌿 SUBTLE GREEN DECORATION */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-green-200/40 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-emerald-200/40 rounded-full blur-[160px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">

          {/* 📰 LATEST NEWS */}
          <div
            className="
              animate-card opacity-0 translate-y-10
              transition-all duration-700
              bg-white
              rounded-2xl
              border border-gray-200
              shadow-lg
              p-6
            "
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <Bell className="text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Latest News
                </h3>
              </div>
              <a href="/news" className="text-sm text-green-600 hover:underline">
                All news
              </a>
            </div>

            <div className="space-y-4">
              {news.map((item, i) => (
                <div
                  key={i}
                  className="
                    flex gap-4 p-4 rounded-xl
                    bg-gray-50 hover:bg-green-50
                    transition
                  "
                >
                  <div className="w-1 rounded-full bg-green-500" />
                  <div className="flex-1">
                    <div className="flex justify-between gap-3">
                      <p className="text-sm font-medium text-gray-900">
                        {item.title}
                      </p>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ⏰ TODAY'S EVENTS */}
          <div
            className="
              animate-card opacity-0 translate-y-10
              transition-all duration-700 delay-150
              bg-white
              rounded-2xl
              border border-gray-200
              shadow-lg
              p-6
            "
          >
            <div className="flex items-center gap-3 mb-5">
              <Clock className="text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">
                Today's Events
              </h3>
            </div>

            <div className="space-y-4">
              {events.map((event, i) => (
                <div
                  key={i}
                  className="
                    flex items-center gap-4 p-4 rounded-xl
                    bg-gray-50 hover:bg-green-50
                    transition
                  "
                >
                  <span
                    className={`w-3 h-3 rounded-full ${
                      event.status === "Happening"
                        ? "bg-green-500 animate-pulse"
                        : "bg-gray-400"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {event.title}
                    </p>
                    <p className="text-xs text-gray-500">{event.day}</p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      event.status === "Happening"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
