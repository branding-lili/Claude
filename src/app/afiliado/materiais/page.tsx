"use client";

import { useState } from "react";
import { marketingMaterials } from "@/lib/mock-data";
import type { MarketingMaterial } from "@/lib/types";

const typeLabels: Record<MarketingMaterial["type"], string> = {
  banner: "Banner",
  texto: "Texto",
  video: "Vídeo",
  email: "E-mail",
};

const typeFilters = ["Todos", "Banner", "Texto", "Vídeo", "E-mail"] as const;

export default function MateriaisPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = marketingMaterials.filter(
    (m) => activeFilter === "Todos" || typeLabels[m.type] === activeFilter
  );

  const handleCopyText = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const typeIcon = (type: MarketingMaterial["type"]) => {
    const icons: Record<MarketingMaterial["type"], React.ReactNode> = {
      banner: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      texto: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      video: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      email: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    };
    return icons[type];
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Materiais de Marketing</h1>
        <p className="text-gray-500 text-sm mt-1">Use esses materiais para divulgar e aumentar suas comissões.</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {typeFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeFilter === filter
                ? "bg-rose-500 text-white shadow-sm shadow-rose-200"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((material) => (
          <div key={material.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Preview */}
            <div className={`h-36 bg-gradient-to-br ${material.previewColor} flex items-center justify-center`}>
              <div className="text-white/80 flex flex-col items-center gap-2">
                {typeIcon(material.type)}
                <span className="text-xs font-medium">{typeLabels[material.type]}</span>
                {material.dimensions && (
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{material.dimensions}</span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900">{material.title}</h3>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">
                  {material.format ?? typeLabels[material.type]}
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">{material.description}</p>

              {material.content && (
                <div className="bg-gray-50 rounded-xl p-3 mb-4">
                  <p className="text-xs text-gray-600 whitespace-pre-line leading-relaxed line-clamp-3">{material.content}</p>
                </div>
              )}

              {material.content ? (
                <button
                  onClick={() => handleCopyText(material.content!, material.id)}
                  className="w-full flex items-center justify-center gap-2 py-2 bg-rose-50 text-rose-600 text-sm font-medium rounded-xl hover:bg-rose-100 transition-colors"
                >
                  {copiedId === material.id ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Texto Copiado!
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copiar Texto
                    </>
                  )}
                </button>
              ) : (
                <button className="w-full flex items-center justify-center gap-2 py-2 bg-rose-50 text-rose-600 text-sm font-medium rounded-xl hover:bg-rose-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Baixar Material
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
