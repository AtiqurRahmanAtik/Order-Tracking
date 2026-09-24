"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  MapPinOff,
} from "lucide-react";

import { Order } from "@/types/order";

interface OrderStatusProps {
  order: Order;
}

export default function OrderStatus({
  order,
}: OrderStatusProps) {
  if (order.exceptionState === "delayed") {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Clock3 size={20} />
          </div>

          <div>
            <h2 className="text-sm font-bold text-amber-900">
              Your order is delayed
            </h2>

            <p className="mt-1 text-sm leading-5 text-amber-800">
              Your estimated delivery time has passed.
              We&apos;re working with the carrier to get your
              package to you as soon as possible.
            </p>

            <div className="mt-4 rounded-xl bg-white/70 p-3">
              <p className="text-xs font-medium text-amber-900">
                Updated delivery estimate
              </p>

              <p className="mt-1 text-sm font-bold text-amber-900">
                {order.estimatedDelivery}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (
    order.exceptionState ===
    "delivered-not-received"
  ) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
            <AlertTriangle size={20} />
          </div>

          <div>
            <h2 className="text-sm font-bold text-red-900">
              Order marked as delivered
            </h2>

            <p className="mt-1 text-sm leading-5 text-red-800">
              The carrier says your package was delivered,
              but you haven&apos;t received it.
            </p>

            <button className="mt-4 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700">
              Report missing package
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (
    order.exceptionState ===
    "tracking-unavailable"
  ) {
    return (
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <MapPinOff size={20} />
          </div>

          <div>
            <h2 className="text-sm font-bold text-blue-900">
              Tracking information isn&apos;t available yet
            </h2>

            <p className="mt-1 text-sm leading-5 text-blue-800">
              Your order has been received. Tracking
              information will appear once the carrier
              scans your package.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-blue-700">
              <Clock3 size={14} />
              Check back later for updates
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-purple-200 bg-purple-50 p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
          <CheckCircle2 size={20} />
        </div>

        <div>
          <h2 className="text-sm font-bold text-purple-900">
            Your order is on track
          </h2>

          <p className="mt-1 text-xs text-purple-700">
            Estimated delivery: {order.estimatedDelivery}
          </p>
        </div>
      </div>
    </div>
  );
}