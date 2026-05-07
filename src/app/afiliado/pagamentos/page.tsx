"use client";

import { useState } from "react";
import Badge from "@/components/Badge";
import { payments, affiliateStats } from "@/lib/mock-data";

export default function PagamentosPage() {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const formatCurrency = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const pendingTotal = payments
    .filter((p) => p.status === "pendente" && p.type === "comissao")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Pagamentos e Saques</h1>
        <p className="text-gray-500 text-sm mt-1">Acompanhe suas comissões e solicite saques.</p>
      </div>

      {/* Balance cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg shadow-rose-200">
          <p className="text-rose-100 text-sm font-medium mb-2">Saldo Disponível</p>
          <p className="text-3xl font-bold">{formatCurrency(affiliateStats.pendingCommission)}</p>
          <button
            onClick={() => setShowWithdrawModal(true)}
            className="mt-4 w-full py-2 bg-white/20 hover:bg-white/30 rounded-xl text-sm font-medium transition-colors"
          >
            Solicitar Saque
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <p className="text-gray-500 text-sm font-medium mb-2">Aguardando Aprovação</p>
          <p className="text-3xl font-bold text-gray-900">{formatCurrency(pendingTotal)}</p>
          <p className="text-xs text-gray-400 mt-2">Comissões em processamento</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <p className="text-gray-500 text-sm font-medium mb-2">Total Recebido</p>
          <p className="text-3xl font-bold text-gray-900">{formatCurrency(affiliateStats.totalEarned)}</p>
          <p className="text-xs text-gray-400 mt-2">Desde o início da parceria</p>
        </div>
      </div>

      {/* Withdraw modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Solicitar Saque</h3>
            <p className="text-sm text-gray-500 mb-6">Saldo disponível: <strong>{formatCurrency(affiliateStats.pendingCommission)}</strong></p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Valor do Saque</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">R$</span>
                  <input
                    type="number"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    placeholder="0,00"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Chave PIX</label>
                <input
                  type="text"
                  placeholder="CPF, e-mail ou telefone"
                  defaultValue="ana.silva@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-xs text-amber-700">
                  ⏱ Saques são processados em até <strong>2 dias úteis</strong>. Valor mínimo: <strong>R$ 50,00</strong>.
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="flex-1 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-sm font-semibold rounded-xl hover:from-rose-600 hover:to-pink-700 transition-all">
                Confirmar Saque
              </button>
              <button
                onClick={() => setShowWithdrawModal(false)}
                className="flex-1 py-3 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* History */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-900">Histórico de Transações</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {payments.map((payment) => (
            <div key={payment.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  payment.type === "comissao" ? "bg-emerald-50" : "bg-blue-50"
                }`}>
                  {payment.type === "comissao" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{payment.description}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-xs text-gray-400">{new Date(payment.date).toLocaleDateString("pt-BR")}</p>
                    {payment.method && (
                      <span className="text-xs text-gray-300">·</span>
                    )}
                    {payment.method && (
                      <p className="text-xs text-gray-400">{payment.method}</p>
                    )}
                    {payment.transactionId && (
                      <>
                        <span className="text-xs text-gray-300">·</span>
                        <p className="text-xs text-gray-400 font-mono">{payment.transactionId}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className={`text-base font-bold ${
                  payment.type === "saque" ? "text-blue-600" : "text-emerald-600"
                }`}>
                  {payment.type === "saque" ? "-" : "+"}{formatCurrency(payment.amount)}
                </p>
                <Badge status={payment.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
