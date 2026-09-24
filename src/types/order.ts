export type OrderStatus =
  | "processing"
  | "shipped"
  | "out-for-delivery"
  | "delivered";

export type ExceptionState =
  | "normal"
  | "delayed"
  | "delivered-not-received"
  | "tracking-unavailable";

export interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export interface TrackingEvent {
  status: OrderStatus;
  title: string;
  description: string;
  date?: string;
  completed: boolean;
  current?: boolean;
}

export interface Order {
  id: string;
  status: OrderStatus;
  exceptionState: ExceptionState;
  estimatedDelivery: string;
  estimatedTime?: string;
  trackingNumber?: string;
  items: OrderItem[];
  total: number;
  timeline: TrackingEvent[];
}