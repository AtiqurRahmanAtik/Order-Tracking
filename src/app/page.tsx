"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Package,
} from "lucide-react";

import { mockOrders } from "@/data/mockOrders";
import { ExceptionState } from "@/types/order";

import OrderHeader from "@/components/order-tracking/OrderHeader";
import StateSwitcher from "@/components/order-tracking/StateSwitcher";
import OrderStatus from "@/components/order-tracking/OrderStatus";
import DeliveryTimeline from "@/components/order-tracking/DeliveryTimeline";
import ProductSummary from "@/components/order-tracking/ProductSummary";
import SupportCard from "@/components/order-tracking/SupportCard";

export default function Home() {
  const [selectedState, setSelectedState] =
    useState<ExceptionState>("normal");

  
  const order = useMemo(() => {
    return (
      mockOrders.find(
        (item) =>
          item.exceptionState === selectedState
      ) ?? mockOrders[0]
    );
  }, [selectedState]);

  
  const handleBack = () => {
    window.history.back();
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-[430px] px-4 pb-8 pt-4 sm:max-w-xl">

        
        <OrderHeader
          orderId={order.id}
          onBack={handleBack}
        />

       
        <StateSwitcher
          value={selectedState}
          onChange={setSelectedState}
        />

       
        <section className="mb-5 rounded-2xl bg-slate-900 p-5 text-white shadow-lg">
          <div className="flex items-start justify-between gap-4">
            {/* Status */}
            <div>
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Package size={22} />
              </div>

              <p className="text-xs font-medium text-slate-400">
                Current status
              </p>

              <h2 className="mt-1 text-xl font-bold">
                {order.exceptionState ===
                "delivered-not-received"
                  ? "Marked as Delivered"
                  : order.exceptionState === "delayed"
                  ? "Delivery Delayed"
                  : order.exceptionState ===
                    "tracking-unavailable"
                  ? "Order Processing"
                  : "Out for Delivery"}
              </h2>
            </div>

            {/* Tracking Number */}
            {order.trackingNumber && (
              <div className="rounded-lg bg-white/10 px-3 py-2 text-right">
                <p className="text-[10px] text-slate-400">
                  Tracking
                </p>

                <p className="mt-1 text-[11px] font-semibold">
                  {order.trackingNumber}
                </p>
              </div>
            )}
          </div>

          {/* Estimated Delivery */}
          <div className="mt-6 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <CalendarDays
                size={15}
                className="text-purple-400"
              />

              <span className="text-xs text-slate-400">
                Estimated delivery
              </span>
            </div>

            <p className="mt-1 text-sm font-semibold">
              {order.estimatedDelivery}
            </p>

            {order.estimatedTime && (
              <p className="mt-0.5 text-xs text-slate-400">
                {order.estimatedTime}
              </p>
            )}
          </div>
        </section>

      
        <div className="mb-5">
          <OrderStatus order={order} />
        </div>

        

        {order.timeline.length > 0 ? (
          <div className="mb-5">
            <DeliveryTimeline
              timeline={order.timeline}
            />
          </div>
        ) : (
          <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <Package size={22} />
            </div>

            <h2 className="mt-4 text-sm font-semibold text-slate-900">
              Tracking will appear soon
            </h2>

            <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-slate-500">
              We&apos;ve received your order. Once the
              carrier scans your package, delivery progress
              will appear here.
            </p>
          </section>
        )}

       

        <div className="mb-5">
          <ProductSummary order={order} />
        </div>

        

      <SupportCard orderId={order.id} />
      </div>
    </main>
  );
}