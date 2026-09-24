"use client";

import {
  ChevronRight,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

export default function SupportCard() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
          <HelpCircle size={19} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Need help?
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Our support team is here to help.
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-50">
          <MessageCircle size={15} />
          Contact Support
        </button>

        <button className="flex items-center justify-center gap-1 rounded-xl bg-slate-900 px-3 py-3 text-xs font-semibold text-white transition hover:bg-slate-800">
          Order Details
          <ChevronRight size={14} />
        </button>
      </div>
    </section>
  );
}