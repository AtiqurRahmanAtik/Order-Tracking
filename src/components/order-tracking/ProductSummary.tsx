"use client";

import Image from "next/image";
import { Order } from "@/types/order";

interface ProductSummaryProps {
  order: Order;
}

export default function ProductSummary({
  order,
}: ProductSummaryProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Order Summary
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Order #{order.id}
          </p>
        </div>

        <span className="text-sm font-semibold text-slate-900">
          ${order.total.toFixed(2)}
        </span>
      </div>

      {order.items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4"
        >
          <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-slate-100">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-semibold text-slate-900">
              {item.name}
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Quantity: {item.quantity}
            </p>

            <p className="mt-1 text-sm font-medium text-slate-700">
              ${item.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}