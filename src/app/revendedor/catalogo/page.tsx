"use client";

import { useState } from "react";
import { products } from "@/lib/mock-data";

const categories = ["Todos", "Maquiagem", "Skincare", "Fragrâncias", "Cabelos"];

export default function CatalogoPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [addedToCart, setAddedToCart] = useState<string | null>(null);

  const formatCurrency = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const filtered = products.filter(
    (p) =>
      (activeCategory === "Todos" || p.category === activeCategory) &&
      (search === "" || p.name.toLowerCase().includes(search.toLowerCase()))
  );

  const handleAddToCart = (id: string) => {
    setAddedToCart(id);
    setTimeout(() => setAddedToCart(null), 1500);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Catálogo de Produtos</h1>
        <p className="text-gray-500 text-sm mt-1">Preços exclusivos para revendedores. Margem calculada automaticamente.</p>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar produto..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-purple-500 text-white shadow-sm shadow-purple-200"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((product) => {
          const margin = ((product.suggestedPrice - product.resellerPrice) / product.suggestedPrice) * 100;
          const profit = product.suggestedPrice - product.resellerPrice;

          return (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {/* Image */}
              <div className={`h-40 bg-gradient-to-br ${product.imageColor} flex items-center justify-center`}>
                <div className="text-center text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <p className="text-xs font-mono opacity-70">{product.sku}</p>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-xs text-purple-600 font-medium bg-purple-50 px-2 py-0.5 rounded-full">{product.category}</span>
                    <h3 className="text-sm font-semibold text-gray-900 mt-2 leading-tight">{product.name}</h3>
                  </div>
                  <span className={`flex-shrink-0 text-xs font-bold px-2 py-1 rounded-lg ${
                    product.stock > 50 ? "bg-emerald-50 text-emerald-700" :
                    product.stock > 10 ? "bg-amber-50 text-amber-700" : "bg-red-50 text-red-700"
                  }`}>
                    {product.stock} un
                  </span>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed mb-4">{product.description}</p>

                {/* Pricing */}
                <div className="bg-gray-50 rounded-xl p-3 mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Seu preço</span>
                    <span className="text-sm font-bold text-purple-600">{formatCurrency(product.resellerPrice)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Preço sugerido</span>
                    <span className="text-sm font-semibold text-gray-900">{formatCurrency(product.suggestedPrice)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-500">Seu lucro</span>
                    <span className="text-sm font-bold text-emerald-600">
                      {formatCurrency(profit)} ({margin.toFixed(0)}%)
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(product.id)}
                  className={`w-full py-2.5 text-sm font-medium rounded-xl transition-all ${
                    addedToCart === product.id
                      ? "bg-emerald-500 text-white"
                      : "bg-purple-500 text-white hover:bg-purple-600"
                  }`}
                >
                  {addedToCart === product.id ? "✓ Adicionado!" : "Adicionar ao Pedido"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <p className="text-sm">Nenhum produto encontrado.</p>
        </div>
      )}
    </div>
  );
}
