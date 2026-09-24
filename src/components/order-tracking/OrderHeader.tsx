"use client";

import { ArrowLeft } from "lucide-react";

interface OrderHeaderProps {
  orderId: string;
  onBack?: () => void;
}

export default function OrderHeader({
  orderId,
  onBack,
}: OrderHeaderProps) {
  return (
    <header className="mb-6 flex items-center justify-between">
      {/* Back Button */}
      <button
        type="button"
        onClick={onBack}
        aria-label="Go back"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 active:scale-95"
      >
        <ArrowLeft size={19} />
      </button>

      {/* Title */}
      <div className="text-center">
        <h1 className="text-lg font-bold text-slate-900">
          Track Order
        </h1>

        <p className="mt-0.5 text-[11px] text-slate-400">
          #{orderId}
        </p>
      </div>

      {/* Right Spacer */}
      <div className="h-10 w-10" />
    </header>
  );
}