import React, { useEffect } from "react";

import EventsCalendar from "@/components/ui/EventsCalendar";

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full bg-[#FFFDF5]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8">
        <header className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-[#0A0A0A] sm:text-5xl">Events</h1>
          <p className="text-lg text-[#4A4A4A]">
            Our events are a great way to gain knowledge about finance and network with other students and industry professionals.
          </p>
        </header>
        <EventsCalendar />
      </div>
    </section>
  );
}
