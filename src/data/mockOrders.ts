import { Order } from "@/types/order";

export const mockOrders: Order[] = [
  {
    id: "ORD-2026-001",
    status: "out-for-delivery",
    exceptionState: "normal",
    estimatedDelivery: "Today, September 26",
    estimatedTime: "2:00 PM – 5:00 PM",
    trackingNumber: "TRK-982734",
    total: 89.99,

    items: [
      {
        id: 1,
        name: "Premium Wireless Headphones",
        quantity: 1,
        price: 89.99,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
      },
    ],

    timeline: [
      {
        status: "processing",
        title: "Order Processing",
        description: "Your order has been confirmed",
        date: "Sep 24, 9:30 AM",
        completed: true,
      },
      {
        status: "shipped",
        title: "Shipped",
        description: "Your package left the warehouse",
        date: "Sep 24, 4:15 PM",
        completed: true,
      },
      {
        status: "out-for-delivery",
        title: "Out for Delivery",
        description: "Your package is on its way",
        date: "Sep 27, 10:20 AM",
        completed: true,
        current: true,
      },
      {
        status: "delivered",
        title: "Delivered",
        description: "Package delivered",
        completed: false,
      },
    ],
  },

  {
    id: "ORD-2026-002",
    status: "shipped",
    exceptionState: "delayed",
    estimatedDelivery: "September 28",
    estimatedTime: "Expected by 8:00 PM",
    trackingNumber: "TRK-827364",
    total: 129.99,

    items: [
      {
        id: 2,
        name: "Smart Watch Series 5",
        quantity: 1,
        price: 129.99,
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80",
      },
    ],

    timeline: [
      {
        status: "processing",
        title: "Order Processing",
        description: "Your order has been confirmed",
        date: "Sep 23, 8:30 AM",
        completed: true,
      },
      {
        status: "shipped",
        title: "Shipped",
        description: "Package is in transit",
        date: "Sep 24, 3:20 PM",
        completed: true,
        current: true,
      },
      {
        status: "out-for-delivery",
        title: "Out for Delivery",
        description: "Waiting for carrier update",
        completed: false,
      },
      {
        status: "delivered",
        title: "Delivered",
        description: "Package delivered",
        completed: false,
      },
    ],
  },

  {
    id: "ORD-2026-003",
    status: "delivered",
    exceptionState: "delivered-not-received",
    estimatedDelivery: "September 25",
    total: 59.99,

    items: [
      {
        id: 3,
        name: "Minimal Backpack",
        quantity: 1,
        price: 59.99,
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&q=80",
      },
    ],

    timeline: [
      {
        status: "processing",
        title: "Order Processing",
        description: "Your order was confirmed",
        date: "Sep 22, 10:00 AM",
        completed: true,
      },
      {
        status: "shipped",
        title: "Shipped",
        description: "Package was shipped",
        date: "Sep 23, 2:00 PM",
        completed: true,
      },
      {
        status: "out-for-delivery",
        title: "Out for Delivery",
        description: "Package was out for delivery",
        date: "Sep 25, 9:00 AM",
        completed: true,
      },
      {
        status: "delivered",
        title: "Delivered",
        description: "Carrier marked the order as delivered",
        date: "Sep 25, 4:30 PM",
        completed: true,
        current: true,
      },
    ],
  },

  {
    id: "ORD-2026-004",
    status: "processing",
    exceptionState: "tracking-unavailable",
    estimatedDelivery: "September 29",
    estimatedTime: "Expected by 8:00 PM",
    total: 74.99,

    items: [
      {
        id: 4,
        name: "Everyday Running Shoes",
        quantity: 1,
        price: 74.99,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
      },
    ],

    timeline: [],
  },
];