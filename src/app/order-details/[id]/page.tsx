"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Package,
  Truck,
} from "lucide-react";

import { mockOrders } from "@/data/mockOrders";

export default function OrderDetailsPage() {
  
    const params = useParams();
    
  

  const orderId = params.id as string;

  const order = useMemo(() => {
    return mockOrders.find(
      (item) => item.id === orderId
    );
  }, [orderId]);

  
  if (!order) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-[430px]">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Package size={22} />
            </div>

            <h1 className="mt-4 text-lg font-bold text-red-900">
              Order not found
            </h1>

            <p className="mt-2 text-sm text-red-700">
              We couldn&apos;t find the order you are
              looking for.
            </p>

            <Link
              href="/"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <ArrowLeft size={16} />
              Back to Tracking
            </Link>
          </div>
        </div>
      </main>
    );
  }

  
  const subtotal = order.items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  
  const shipping: number = 0;

  
  const total = subtotal + shipping;

  
  const statusText =
    order.exceptionState ===
    "delivered-not-received"
      ? "Marked as Delivered"
      : order.exceptionState === "delayed"
      ? "Delivery Delayed"
      : order.exceptionState ===
        "tracking-unavailable"
      ? "Processing"
      : order.status === "out-for-delivery"
      ? "Out for Delivery"
      : order.status === "delivered"
      ? "Delivered"
      : order.status === "shipped"
      ? "Shipped"
      : "Processing";

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-[430px] px-4 pb-10 pt-4 sm:max-w-xl">
       
        <header className="mb-6 flex items-center gap-4">
          <Link
            href="/"
            aria-label="Back to order tracking"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 active:scale-95"
          >
            <ArrowLeft size={19} />
          </Link>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              Order Details
            </h1>

            <p className="mt-0.5 text-xs text-slate-500">
              #{order.id}
            </p>
          </div>
        </header>

        

        <section className="mb-5 rounded-2xl bg-slate-900 p-5 text-white shadow-lg">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Package size={22} />
              </div>

              <p className="text-xs text-slate-400">
                Current status
              </p>

              <h2 className="mt-1 text-xl font-bold">
                {statusText}
              </h2>
            </div>

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

       

        <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Order Information
          </h2>

          <div className="mt-4 space-y-4">
           
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Order ID
              </span>

              <span className="text-xs font-semibold text-slate-900">
                #{order.id}
              </span>
            </div>

            {/* Tracking */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Tracking Number
              </span>

              <span className="text-xs font-semibold text-slate-900">
                {order.trackingNumber || "Not available"}
              </span>
            </div>

            
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Status
              </span>

              <span className="rounded-full bg-purple-100 px-3 py-1 text-[10px] font-semibold text-purple-700">
                {statusText}
              </span>
            </div>

            {/* Delivery */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Estimated Delivery
              </span>

              <span className="text-xs font-semibold text-slate-900">
                {order.estimatedDelivery}
              </span>
            </div>
          </div>
        </section>

        
        <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4">
            <h2 className="text-base font-semibold text-slate-900">
              Products
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Items included in this order
            </p>
          </div>

          <div className="space-y-4">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4"
              >
                
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                {/* Product Information */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Quantity: {item.quantity}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        

        <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <MapPin size={18} />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Delivery Address
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Shipping destination
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">
              Atiqur Rahman
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              House 12, Road 5
              <br />
              Dhanmondi, Dhaka
              <br />
              Bangladesh
            </p>
          </div>
        </section>

        

        {order.timeline.length > 0 && (
          <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-6">
              <h2 className="text-base font-semibold text-slate-900">
                Delivery Timeline
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Your order journey
              </p>
            </div>

            <div className="space-y-0">
              {order.timeline.map(
                (event, index) => {
                  const isLast =
                    index ===
                    order.timeline.length - 1;

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

                     
                      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center">
                        {event.completed ? (
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              event.current
                                ? "bg-purple-600 text-white ring-4 ring-purple-100"
                                : "bg-purple-100 text-purple-600"
                            }`}
                          >
                            {event.status ===
                              "shipped" ||
                            event.status ===
                              "out-for-delivery" ? (
                              <Truck size={15} />
                            ) : (
                              <Check size={16} />
                            )}
                          </div>
                        ) : (
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                            <Clock3 size={14} />
                          </div>
                        )}
                      </div>

                      {/* Content */}
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
                }
              )}
            </div>
          </section>
        )}

        

        <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Payment Summary
          </h2>

          <div className="mt-4 space-y-3">
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Subtotal
              </span>

              <span className="text-sm font-medium text-slate-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            {/* Shipping */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Shipping
              </span>

              <span className="text-sm font-medium text-green-600">
                {shipping === 0
                  ? "FREE"
                  : `$${shipping.toFixed(2)}`}
              </span>
            </div>

            <div className="border-t border-slate-100 pt-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-slate-900">
                  Total
                </span>

                <span className="text-lg font-bold text-slate-900">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </section>

        

        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft size={16} />
            Back to Tracking
          </Link>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Contact Support
          </button>
        </div>
      </div>
    </main>
  );
}