import * as React from "react";
import { useMemo, useState } from "react";
import {
  addDays,
  addMinutes,
  addMonths,
  eachDayOfInterval,
  format,
  isBefore,
  isSameDay,
  startOfDay,
  startOfToday,
  set,
} from "date-fns";
import { ArrowUpRight, CalendarCheck2, CalendarDays, Clock, ExternalLink, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type EventCategory =
  | "Flagship"
  | "Workshop"
  | "Networking"
  | "Briefing"
  | "Conference"
  | "Competition";

type DeliveryMode = "In person" | "Virtual" | "Hybrid";

export type CalendarEvent = {
  id: string;
  title: string;
  description: string;
  start: string;
  end?: string;
  location: string;
  category: EventCategory;
  mode?: DeliveryMode;
  registrationUrl?: string;
};

type HydratedEvent = CalendarEvent & {
  startDate: Date;
  endDate: Date;
};

export interface EventsCalendarProps {
  events?: CalendarEvent[];
  className?: string;
}

const defaultEvents: CalendarEvent[] = [
  {
    id: "cfa-info-session-2025-10-29",
    title: "CFA Society Ireland Info Session",
    description:
      "Members from CFA Society Ireland shared what the CFA qualification entails, how to navigate the pathway, and the career opportunities it can unlock. Hosted in collaboration with the University of Galway Student Managed Fund and Ulster University’s SMF.",
    start: "2025-10-29T17:30:00.000Z",
    end: "2025-10-29T18:30:00.000Z",
    location: "Online — link provided to registered attendees",
    category: "Briefing",
    mode: "Virtual",
    registrationUrl: "https://lnkd.in/eDHRSFGn",
  },
];

const modeColorMap: Record<DeliveryMode, string> = {
  "In person": "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  Hybrid: "bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300",
  Virtual: "bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
};

function getNextWeekMonday(baseDate: Date) {
  const day = baseDate.getDay();
  const daysUntilNextMonday = ((1 - day + 7) % 7) || 7;
  return addDays(baseDate, daysUntilNextMonday);
}

function createMarketMovementMeetings(firstOccurrence: Date, occurrences = 4): CalendarEvent[] {
  const initialStart = set(firstOccurrence, { hours: 18, minutes: 0, seconds: 0, milliseconds: 0 });

  return Array.from({ length: occurrences }, (_, index) => {
    const occurrenceStart = addMonths(initialStart, index);
    const occurrenceEnd = addMinutes(occurrenceStart, 60);

    return {
      id: `market-movement-${format(occurrenceStart, "yyyy-MM-dd")}`,
      title: "Market Movement Meeting",
      description:
        "Monthly committee touchpoint reviewing macro catalysts, cross-asset moves, and positioning updates across the fund.",
      start: occurrenceStart.toISOString(),
      end: occurrenceEnd.toISOString(),
      location: "Online - Link provided to registered attendees",
      category: "Briefing",
      mode: "Online",
    };
  });
}

function hydrateEvents(events: CalendarEvent[]): HydratedEvent[] {
  return events
    .map((event) => {
      const startDate = new Date(event.start);
      const endDate = event.end ? new Date(event.end) : addMinutes(startDate, 60);
      return { ...event, startDate, endDate };
    })
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
}

function getCalendarModifiers(events: HydratedEvent[]) {
  const eventDays = events.flatMap((event) =>
    eachDayOfInterval({
      start: startOfDay(event.startDate),
      end: startOfDay(event.endDate),
    }),
  );

  return {
    event: eventDays,
  };
}

export function EventsCalendar({ events = defaultEvents, className }: EventsCalendarProps) {
  const today = startOfToday();
  const marketMovementMeetings = useMemo(
    () => createMarketMovementMeetings(getNextWeekMonday(today)),
    [today],
  );
  const mergedEvents = useMemo(() => {
    const hasRecurringMeetings = events.some((event) => event.id.startsWith("market-movement-"));
    return hasRecurringMeetings ? events : [...events, ...marketMovementMeetings];
  }, [events, marketMovementMeetings]);
  const hydratedEvents = useMemo(() => hydrateEvents(mergedEvents), [mergedEvents]);

  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const nextUpcoming = hydratedEvents.find((event) => !isBefore(event.startDate, today));
    return nextUpcoming?.startDate ?? today;
  });

  const upcomingEvents = useMemo(
    () =>
      hydratedEvents.filter((event) => !isBefore(startOfDay(event.startDate), today)),
    [hydratedEvents, today],
  );

  const recentEvents = useMemo(
    () =>
      hydratedEvents
        .filter((event) => isBefore(startOfDay(event.startDate), today))
        .slice(-4)
        .reverse(),
    [hydratedEvents, today],
  );

  const eventsOnSelectedDate = useMemo(
    () => hydratedEvents.filter((event) => isSameDay(event.startDate, selectedDate)),
    [hydratedEvents, selectedDate],
  );

  const modifiers = useMemo(() => getCalendarModifiers(hydratedEvents), [hydratedEvents]);

  return (
    <div
      className={cn(
        "w-full rounded-3xl border border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur-sm transition-colors sm:p-8",
        "dark:bg-muted/20",
        className,
      )}
    >
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <Badge className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-primary-foreground/80">
          <CalendarDays className="h-4 w-4" />
          Events Dashboard
        </Badge>
        <span className="text-sm text-muted-foreground">
          Stay close to upcoming opportunities across the ISMF community.
        </span>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
        <Card className="border-0 bg-background shadow-none dark:bg-card">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-3xl font-semibold text-foreground">Calendar</CardTitle>
            <CardDescription>
              Browse upcoming sessions, workshops, and competitions. Select a date to view details.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <div className="rounded-2xl border border-border/60 bg-muted/40 p-4 dark:bg-muted/30">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                className="w-full"
                modifiers={modifiers}
                modifiersClassNames={{
                  event:
                    "bg-primary/20 text-primary-foreground ring-2 ring-primary/50 hover:bg-primary/30 hover:text-primary-foreground",
                }}
                classNames={{
                  months: "grid grid-cols-1",
                }}
              />
            </div>
            <div className="mt-4 space-y-3 rounded-2xl border border-border/60 bg-background/60 p-4 dark:bg-muted/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Selected date</p>
                  <p className="text-lg font-semibold text-foreground">{format(selectedDate, "EEEE, MMMM d")}</p>
                </div>
                <Badge variant="outline" className="flex items-center gap-2">
                  <CalendarCheck2 className="h-4 w-4" />
                  {eventsOnSelectedDate.length
                    ? `${eventsOnSelectedDate.length} event${eventsOnSelectedDate.length > 1 ? "s" : ""}`
                    : "No events"}
                </Badge>
              </div>
              <div className="space-y-3">
                {eventsOnSelectedDate.length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    No scheduled events on this date. Check the upcoming list to plan ahead.
                  </p>
                )}
                {eventsOnSelectedDate.map((event) => (
                  <EventListItem key={event.id} event={event} accent="primary" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-semibold text-foreground">
                <Clock className="h-5 w-5 text-primary" />
                Upcoming
              </CardTitle>
              <CardDescription>
                Confirm your spot and mark your calendar — seats for in-person sessions fill quickly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {upcomingEvents.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  New events are on the way. Check back soon or subscribe to the members’ newsletter.
                </p>
              )}
              {upcomingEvents.map((event) => (
                <EventDialog key={event.id} event={event} />
              ))}
            </CardContent>
          </Card>

          <Card className="border border-border/60 bg-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-semibold text-foreground">
                <CalendarDays className="h-5 w-5 text-primary" />
                Recent Highlights
              </CardTitle>
              <CardDescription>
                Catch up on the latest committee activity and member-led initiatives.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {recentEvents.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  Our most recent events will appear here once the season kicks off.
                </p>
              )}
              {recentEvents.map((event) => (
                <EventListItem key={event.id} event={event} compact />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function EventDialog({ event }: { event: HydratedEvent }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="group flex w-full flex-col items-start gap-2 rounded-2xl border-border/70 bg-background/60 px-4 py-4 text-left hover:border-primary/60 hover:bg-primary/5"
        >
          <div className="flex w-full items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">{event.title}</p>
              <p className="text-xs text-muted-foreground">
                {format(event.startDate, "EEE, MMM d")} · {format(event.startDate, "HH:mm")} - {format(event.endDate, "HH:mm")}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="border-transparent bg-primary/10 text-primary">
              {event.category}
            </Badge>
            {event.mode ? (
              <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", modeColorMap[event.mode])}>{event.mode}</span>
            ) : null}
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-3">
          <Badge variant="outline" className="w-fit border-primary/40 text-primary">
            {event.category}
          </Badge>
          <DialogTitle className="text-2xl">{event.title}</DialogTitle>
          <DialogDescription className="space-y-3 text-base text-muted-foreground">
            <p>{event.description}</p>
            <div className="grid gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>
                  {format(event.startDate, "EEEE, MMMM d")} · {format(event.startDate, "HH:mm")} — {format(event.endDate, "HH:mm")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{event.location}</span>
              </div>
              {event.mode ? (
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  <span>{event.mode}</span>
                </div>
              ) : null}
            </div>
          </DialogDescription>
        </DialogHeader>
        {event.registrationUrl ? (
          <Button asChild className="w-full">
            <a href={event.registrationUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              Register now
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

function EventListItem({
  event,
  accent = "muted",
  compact = false,
}: {
  event: HydratedEvent;
  accent?: "muted" | "primary";
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/60 bg-background/60 p-4 transition-colors hover:border-primary/60 hover:bg-primary/5",
        accent === "primary" && "border-primary/40 bg-primary/5 hover:bg-primary/10",
        compact && "p-3",
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-foreground">{event.title}</p>
            <p className="text-xs text-muted-foreground">
              {format(event.startDate, "EEE, MMM d")} · {format(event.startDate, "HH:mm")} - {format(event.endDate, "HH:mm")}
            </p>
          </div>
          <Badge variant="outline" className="border-transparent bg-primary/10 text-primary">
            {event.category}
          </Badge>
        </div>
        <p className={cn("text-sm text-muted-foreground", compact && "line-clamp-2")}>{event.description}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{event.location}</span>
          {event.mode ? (
            <>
              <span className="mx-1 text-muted-foreground">•</span>
              <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", modeColorMap[event.mode])}>{event.mode}</span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default EventsCalendar;

