import StatCard from "@/components/StatCard";
import Badge from "@/components/Badge";
import { affiliateStats, affiliateLinks } from "@/lib/mock-data";

export default function AfiliadoDashboard() {
  const formatCurrency = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Bem-vinda, Ana Paula! Veja seu desempenho de hoje.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        <StatCard
          title="Total de Cliques"
          value={affiliateStats.totalClicks.toLocaleString("pt-BR")}
          subtitle="Em todos os seus links"
          accent="rose"
          trend={{ value: 12.4, label: "este mês" }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          }
        />
        <StatCard
          title="Conversões"
          value={affiliateStats.conversions.toString()}
          subtitle={`Taxa: ${affiliateStats.conversionRate}%`}
          accent="purple"
          trend={{ value: 8.1, label: "este mês" }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />
        <StatCard
          title="Comissão Pendente"
          value={formatCurrency(affiliateStats.pendingCommission)}
          subtitle="A receber nos próximos dias"
          accent="amber"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          title="Ganhos este Mês"
          value={formatCurrency(affiliateStats.thisMonthEarned)}
          subtitle="Maio 2025"
          accent="green"
          trend={{ value: 23.5, label: "vs abril" }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          title="Total Ganho"
          value={formatCurrency(affiliateStats.totalEarned)}
          subtitle="Desde o início"
          accent="rose"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
            </svg>
          }
        />
        <StatCard
          title="Links Ativos"
          value={affiliateLinks.filter((l) => l.status === "ativo").length.toString()}
          subtitle="Links em funcionamento"
          accent="blue"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          }
        />
      </div>

      {/* Top links table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-gray-900">Melhores Links</h2>
            <p className="text-xs text-gray-400 mt-0.5">Desempenho dos seus links ativos</p>
          </div>
          <a href="/afiliado/links" className="text-sm text-rose-600 hover:text-rose-700 font-medium">
            Ver todos →
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                <th className="text-left px-6 py-3">Nome</th>
                <th className="text-right px-4 py-3">Cliques</th>
                <th className="text-right px-4 py-3">Conversões</th>
                <th className="text-right px-4 py-3">Comissão</th>
                <th className="text-center px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {affiliateLinks.map((link) => (
                <tr key={link.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900">{link.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5 font-mono">{link.shortUrl}</p>
                  </td>
                  <td className="text-right px-4 py-4 text-sm text-gray-600">{link.clicks.toLocaleString("pt-BR")}</td>
                  <td className="text-right px-4 py-4 text-sm text-gray-600">{link.conversions}</td>
                  <td className="text-right px-4 py-4 text-sm font-semibold text-gray-900">
                    {formatCurrency(link.commission)}
                  </td>
                  <td className="text-center px-4 py-4">
                    <Badge status={link.status} />
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
