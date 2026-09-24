"use client";

import {
  Check,
  Circle,
  Package,
  Truck,
} from "lucide-react";

import { TrackingEvent } from "@/types/order";

interface DeliveryTimelineProps {
  timeline: TrackingEvent[];
}

export default function DeliveryTimeline({
  timeline,
}: DeliveryTimelineProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-6">
        <h2 className="text-base font-semibold text-slate-900">
          Delivery Progress
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Follow your package journey
        </p>
      </div>

      <div className="space-y-0">
        {timeline.map((event, index) => {
          const isLast = index === timeline.length - 1;

          return (
            <div
              key={`${event.status}-${index}`}
              className="relative flex gap-4"
            >
              {!isLast && (
                <div
                  className={`absolute left-[15px] top-8 h-[calc(100%-8px)] w-px ${
                    event.completed
                      ? "bg-purple-500"
                      : "bg-slate-200"
                  }`}
                />
              )}

              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                {event.completed ? (
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      event.current
                        ? "bg-purple-600 text-white ring-4 ring-purple-100"
                        : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    {event.status === "shipped" ||
                    event.status === "out-for-delivery" ? (
                      <Truck size={15} />
                    ) : (
                      <Check size={16} />
                    )}
                  </div>
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                    <Circle size={14} />
                  </div>
                )}
              </div>

              <div className="pb-7">
                <div className="flex flex-wrap items-center gap-2">
                  <h3
                    className={`text-sm font-semibold ${
                      event.current
                        ? "text-purple-700"
                        : event.completed
                        ? "text-slate-900"
                        : "text-slate-400"
                    }`}
                  >
                    {event.title}
                  </h3>

                  {event.current && (
                    <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-semibold text-purple-700">
                      CURRENT
                    </span>
                  )}
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  {event.description}
                </p>

                {event.date && (
                  <p className="mt-1 text-[11px] text-slate-400">
                    {event.date}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}