"use client";

import { useState } from "react";
import Badge from "@/components/Badge";
import { customers } from "@/lib/mock-data";

export default function ClientesPage() {
  const [search, setSearch] = useState("");
  const [showNewClientForm, setShowNewClientForm] = useState(false);

  const formatCurrency = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const filtered = customers.filter(
    (c) =>
      search === "" ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clientes</h1>
          <p className="text-gray-500 text-sm mt-1">Gerencie sua base de clientes e histórico de compras.</p>
        </div>
        <button
          onClick={() => setShowNewClientForm(!showNewClientForm)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-sm font-medium rounded-xl hover:from-purple-600 hover:to-violet-700 transition-all shadow-sm shadow-purple-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          Novo Cliente
        </button>
      </div>

      {/* New client form */}
      {showNewClientForm && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Cadastrar Novo Cliente</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome Completo</label>
              <input type="text" placeholder="Nome da cliente" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">E-mail</label>
              <input type="email" placeholder="email@exemplo.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefone</label>
              <input type="tel" placeholder="(11) 99999-9999" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Cidade</label>
              <input type="text" placeholder="Cidade" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Estado</label>
              <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white">
                <option value="">Selecione...</option>
                {["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"].map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-xl hover:bg-purple-600 transition-colors">
              Salvar Cliente
            </button>
            <button onClick={() => setShowNewClientForm(false)} className="px-4 py-2 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors">
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="relative mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nome, e-mail ou cidade..."
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent bg-white"
        />
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">{customers.length}</p>
          <p className="text-xs text-gray-400 mt-0.5">Total de Clientes</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-emerald-600">{customers.filter((c) => c.status === "ativo").length}</p>
          <p className="text-xs text-gray-400 mt-0.5">Ativas</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-purple-600">
            {formatCurrency(customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.length)}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">Ticket Médio</p>
        </div>
      </div>

      {/* Clients table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-medium text-gray-400 uppercase tracking-wide border-b border-gray-100">
                <th className="text-left px-6 py-3">Cliente</th>
                <th className="text-left px-4 py-3">Localização</th>
                <th className="text-right px-4 py-3">Pedidos</th>
                <th className="text-right px-4 py-3">Total Gasto</th>
                <th className="text-left px-4 py-3">Último Pedido</th>
                <th className="text-center px-4 py-3">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-semibold">
                          {client.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{client.name}</p>
                        <p className="text-xs text-gray-400">{client.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-sm text-gray-700">{client.city}</p>
                    <p className="text-xs text-gray-400">{client.state}</p>
                  </td>
                  <td className="text-right px-4 py-4">
                    <p className="text-sm font-semibold text-gray-900">{client.totalOrders}</p>
                  </td>
                  <td className="text-right px-4 py-4">
                    <p className="text-sm font-semibold text-gray-900">{formatCurrency(client.totalSpent)}</p>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-sm text-gray-600">{new Date(client.lastOrder).toLocaleDateString("pt-BR")}</p>
                  </td>
                  <td className="text-center px-4 py-4">
                    <Badge status={client.status} />
                  </td>
                  <td className="px-4 py-4">
                    <button className="text-xs text-purple-600 hover:text-purple-700 font-medium px-3 py-1.5 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                      Ver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
