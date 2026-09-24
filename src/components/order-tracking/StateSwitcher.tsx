"use client";

import { ChevronDown } from "lucide-react";

import { ExceptionState } from "@/types/order";

interface StateSwitcherProps {
  value: ExceptionState;
  onChange: (value: ExceptionState) => void;
}

const stateOptions: {
  value: ExceptionState;
  label: string;
}[] = [
  {
    value: "normal",
    label: "Normal Delivery",
  },
  {
    value: "delayed",
    label: "Delayed Order",
  },
  {
    value: "delivered-not-received",
    label: "Delivered but Not Received",
  },
  {
    value: "tracking-unavailable",
    label: "Tracking Not Available",
  },
];

export default function StateSwitcher({
  value,
  onChange,
}: StateSwitcherProps) {
  return (
    <section className="mb-5 rounded-2xl border border-purple-100 bg-purple-50 p-4">
      {/* Label */}
      <div className="mb-2 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-purple-900">
            Demo Order State
          </p>

          <p className="mt-0.5 text-[11px] text-purple-600">
            Use this to test different delivery states
          </p>
        </div>

        <ChevronDown
          size={15}
          className="text-purple-500"
        />
      </div>

      {/* Select */}
      <div className="relative">
        <select
          value={value}
          onChange={(event) =>
            onChange(
              event.target.value as ExceptionState
            )
          }
          className="w-full appearance-none rounded-xl border border-purple-200 bg-white px-3 py-2.5 pr-10 text-sm text-slate-700 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
        >
          {stateOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom Arrow */}
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </section>
  );
}