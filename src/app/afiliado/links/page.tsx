"use client";

import { useState } from "react";
import Badge from "@/components/Badge";
import { affiliateLinks } from "@/lib/mock-data";

export default function LinksPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [showNewLinkForm, setShowNewLinkForm] = useState(false);

  const formatCurrency = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Meus Links de Afiliado</h1>
          <p className="text-gray-500 text-sm mt-1">Gerencie e acompanhe todos os seus links de divulgação.</p>
        </div>
        <button
          onClick={() => setShowNewLinkForm(!showNewLinkForm)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-sm font-medium rounded-xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-sm shadow-rose-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Novo Link
        </button>
      </div>

      {/* New link form */}
      {showNewLinkForm && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Criar Novo Link</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome do Link</label>
              <input
                type="text"
                placeholder="Ex: Campanha Instagram"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">URL de Destino</label>
              <input
                type="url"
                placeholder="https://lilisampedro.com.br/..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 bg-rose-500 text-white text-sm font-medium rounded-xl hover:bg-rose-600 transition-colors">
              Gerar Link
            </button>
            <button
              onClick={() => setShowNewLinkForm(false)}
              className="px-4 py-2 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Links list */}
      <div className="space-y-4">
        {affiliateLinks.map((link) => (
          <div key={link.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-base font-semibold text-gray-900">{link.name}</h3>
                  <Badge status={link.status} />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-400 font-mono truncate">{link.shortUrl}</p>
                  <button
                    onClick={() => handleCopy(link.shortUrl, link.id)}
                    className="flex-shrink-0 flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-medium transition-colors"
                  >
                    {copied === link.id ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Copiado!
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copiar
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-300 mt-0.5 truncate">{link.url}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-50">
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">{link.clicks.toLocaleString("pt-BR")}</p>
                <p className="text-xs text-gray-400 mt-0.5">Cliques</p>
              </div>
              <div className="text-center border-x border-gray-100">
                <p className="text-xl font-bold text-gray-900">{link.conversions}</p>
                <p className="text-xs text-gray-400 mt-0.5">Conversões</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-rose-600">{formatCurrency(link.commission)}</p>
                <p className="text-xs text-gray-400 mt-0.5">Comissão</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
              <p className="text-xs text-gray-400">Criado em {new Date(link.createdAt).toLocaleDateString("pt-BR")}</p>
              <div className="flex gap-2">
                <button className="text-xs text-gray-500 hover:text-gray-700 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Estatísticas
                </button>
                <button className="text-xs text-gray-500 hover:text-rose-600 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-rose-50 hover:border-rose-200 transition-colors">
                  Editar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
