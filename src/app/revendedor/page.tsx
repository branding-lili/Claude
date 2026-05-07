import StatCard from "@/components/StatCard";
import Badge from "@/components/Badge";
import { resellerStats, orders } from "@/lib/mock-data";

export default function RevendedorDashboard() {
  const formatCurrency = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const recentOrders = orders.slice(0, 4);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Bem-vinda, Beatriz! Aqui está o resumo do seu negócio.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard
          title="Receita este Mês"
          value={formatCurrency(resellerStats.thisMonthRevenue)}
          subtitle="Maio 2025"
          accent="purple"
          trend={{ value: 15.2, label: "vs abril" }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          title="Lucro este Mês"
          value={formatCurrency(resellerStats.thisMonthProfit)}
          subtitle={`Margem: ${((resellerStats.thisMonthProfit / resellerStats.thisMonthRevenue) * 100).toFixed(1)}%`}
          accent="green"
          trend={{ value: 9.8, label: "vs abril" }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
        />
        <StatCard
          title="Total de Pedidos"
          value={resellerStats.totalOrders.toString()}
          subtitle={`Ticket médio: ${formatCurrency(resellerStats.averageOrderValue)}`}
          accent="rose"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          }
        />
        <StatCard
          title="Clientes Ativos"
          value={resellerStats.totalCustomers.toString()}
          subtitle={`Mais vendido: ${resellerStats.topProduct}`}
          accent="amber"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        />
      </div>

      {/* Summary row */}
      <div className="grid grid-cols-2 gap-5 mb-8">
        <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-6 text-white shadow-lg shadow-purple-200">
          <p className="text-purple-100 text-sm font-medium">Receita Total Acumulada</p>
          <p className="text-4xl font-bold mt-2">{formatCurrency(resellerStats.totalRevenue)}</p>
          <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between">
            <div>
              <p className="text-purple-200 text-xs">Lucro Total</p>
              <p className="text-xl font-semibold">{formatCurrency(resellerStats.totalProfit)}</p>
            </div>
            <div className="text-right">
              <p className="text-purple-200 text-xs">Margem Média</p>
              <p className="text-xl font-semibold">
                {((resellerStats.totalProfit / resellerStats.totalRevenue) * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Status dos Pedidos</h3>
          {(["pendente", "confirmado", "enviado", "entregue", "cancelado"] as const).map((status) => {
            const count = orders.filter((o) => o.status === status).length;
            return (
              <div key={status} className="flex items-center justify-between py-1.5">
                <Badge status={status} />
                <span className="text-sm font-semibold text-gray-900">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent orders */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-gray-900">Pedidos Recentes</h2>
            <p className="text-xs text-gray-400 mt-0.5">Últimas movimentações</p>
          </div>
          <a href="/revendedor/pedidos" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
            Ver todos →
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                <th className="text-left px-6 py-3">Pedido</th>
                <th className="text-left px-4 py-3">Cliente</th>
                <th className="text-right px-4 py-3">Total</th>
                <th className="text-right px-4 py-3">Lucro</th>
                <th className="text-center px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900 font-mono">{order.id.toUpperCase()}</p>
                    <p className="text-xs text-gray-400">{new Date(order.date).toLocaleDateString("pt-BR")}</p>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">{order.customerName}</td>
                  <td className="text-right px-4 py-4 text-sm font-semibold text-gray-900">
                    {formatCurrency(order.total)}
                  </td>
                  <td className="text-right px-4 py-4 text-sm font-semibold text-emerald-600">
                    {formatCurrency(order.profit)}
                  </td>
                  <td className="text-center px-4 py-4">
                    <Badge status={order.status} />
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
