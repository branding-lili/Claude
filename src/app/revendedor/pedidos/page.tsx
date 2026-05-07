"use client";

import { useState } from "react";
import Badge from "@/components/Badge";
import { orders } from "@/lib/mock-data";
import type { Order } from "@/lib/types";

const statusFilters = ["Todos", "pendente", "confirmado", "enviado", "entregue", "cancelado"] as const;

const statusLabels: Record<string, string> = {
  Todos: "Todos",
  pendente: "Pendente",
  confirmado: "Confirmado",
  enviado: "Enviado",
  entregue: "Entregue",
  cancelado: "Cancelado",
};

export default function PedidosPage() {
  const [activeFilter, setActiveFilter] = useState<string>("Todos");
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const formatCurrency = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const filtered = orders.filter(
    (o) => activeFilter === "Todos" || o.status === activeFilter
  ) as Order[];

  return (
    <div className="p-8">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pedidos</h1>
          <p className="text-gray-500 text-sm mt-1">Gerencie seus pedidos e acompanhe as entregas.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-sm font-medium rounded-xl hover:from-purple-600 hover:to-violet-700 transition-all shadow-sm shadow-purple-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Novo Pedido
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {statusFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeFilter === filter
                ? "bg-purple-500 text-white shadow-sm shadow-purple-200"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {statusLabels[filter]}
            <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
              activeFilter === filter ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
            }`}>
              {filter === "Todos" ? orders.length : orders.filter((o) => o.status === filter).length}
            </span>
          </button>
        ))}
      </div>

      {/* Orders */}
      <div className="space-y-4">
        {filtered.map((order) => (
          <div key={order.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Order header */}
            <div
              className="px-6 py-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
            >
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Pedido</p>
                  <p className="text-sm font-bold text-gray-900 font-mono">{order.id.toUpperCase()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Cliente</p>
                  <p className="text-sm font-medium text-gray-900">{order.customerName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Data</p>
                  <p className="text-sm text-gray-700">{new Date(order.date).toLocaleDateString("pt-BR")}</p>
                </div>
                <div className="hidden md:block">
                  <p className="text-xs text-gray-400 mb-0.5">Pagamento</p>
                  <p className="text-sm text-gray-700">{order.paymentMethod}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">{formatCurrency(order.total)}</p>
                  <p className="text-xs text-emerald-600 font-medium">+{formatCurrency(order.profit)}</p>
                </div>
                <Badge status={order.status} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 text-gray-400 transition-transform ${expandedOrder === order.id ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Expanded */}
            {expandedOrder === order.id && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide mt-4 mb-3">Produtos</h4>
                <div className="space-y-2">
                  {order.products.map((item) => (
                    <div key={item.productId} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <div>
                        <p className="text-sm text-gray-900">{item.productName}</p>
                        <p className="text-xs text-gray-400">{item.quantity}x {formatCurrency(item.unitPrice)}</p>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{formatCurrency(item.subtotal)}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex gap-3">
                    <button className="text-sm text-purple-600 font-medium hover:text-purple-700 px-4 py-2 border border-purple-200 rounded-xl hover:bg-purple-50 transition-colors">
                      Editar Pedido
                    </button>
                    <button className="text-sm text-gray-500 font-medium hover:text-gray-700 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      Imprimir
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Total do pedido</p>
                    <p className="text-lg font-bold text-gray-900">{formatCurrency(order.total)}</p>
                    <p className="text-xs text-emerald-600 font-medium">Lucro: {formatCurrency(order.profit)}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-sm">Nenhum pedido encontrado para este filtro.</p>
          </div>
        )}
      </div>
    </div>
  );
}
