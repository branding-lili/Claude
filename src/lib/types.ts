export type UserRole = "afiliado" | "revendedor";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarInitials: string;
  joinedAt: string;
  status: "ativo" | "pendente" | "suspenso";
}

export interface AffiliateStats {
  totalClicks: number;
  conversions: number;
  conversionRate: number;
  pendingCommission: number;
  totalEarned: number;
  thisMonthEarned: number;
}

export interface AffiliateLink {
  id: string;
  name: string;
  url: string;
  shortUrl: string;
  clicks: number;
  conversions: number;
  commission: number;
  createdAt: string;
  status: "ativo" | "inativo";
}

export interface MarketingMaterial {
  id: string;
  title: string;
  type: "banner" | "texto" | "video" | "email";
  description: string;
  format?: string;
  dimensions?: string;
  downloadUrl?: string;
  content?: string;
  previewColor: string;
}

export interface Payment {
  id: string;
  type: "comissao" | "saque";
  amount: number;
  status: "pago" | "pendente" | "processando" | "cancelado";
  date: string;
  description: string;
  method?: string;
  transactionId?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  costPrice: number;
  suggestedPrice: number;
  resellerPrice: number;
  stock: number;
  sku: string;
  imageColor: string;
  description: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  totalOrders: number;
  totalSpent: number;
  lastOrder: string;
  status: "ativo" | "inativo";
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  products: OrderItem[];
  total: number;
  profit: number;
  status: "pendente" | "confirmado" | "enviado" | "entregue" | "cancelado";
  date: string;
  paymentMethod: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export interface ResellerStats {
  totalRevenue: number;
  totalProfit: number;
  totalOrders: number;
  totalCustomers: number;
  thisMonthRevenue: number;
  thisMonthProfit: number;
  averageOrderValue: number;
  topProduct: string;
}
