import { resellerStats, orders, products } from "@/lib/mock-data";

export default function RelatoriosPage() {
  const formatCurrency = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const monthlyData = [
    { month: "Jan", revenue: 2100, profit: 890 },
    { month: "Fev", revenue: 2450, profit: 1040 },
    { month: "Mar", revenue: 2800, profit: 1180 },
    { month: "Abr", revenue: 2780, profit: 1200 },
    { month: "Mai", revenue: 3200, profit: 1380 },
  ];

  const maxRevenue = Math.max(...monthlyData.map((d) => d.revenue));

  const productSales = products.map((p) => {
    const orderItems = orders.flatMap((o) => o.products).filter((i) => i.productId === p.id);
    const qty = orderItems.reduce((sum, i) => sum + i.quantity, 0);
    const revenue = orderItems.reduce((sum, i) => sum + i.subtotal, 0);
    return { name: p.name, category: p.category, qty, revenue };
  }).sort((a, b) => b.revenue - a.revenue);

  return (
    <div className="p-8">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Relatórios Financeiros</h1>
          <p className="text-gray-500 text-sm mt-1">Análise completa do desempenho do seu negócio.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Exportar PDF
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {[
          { label: "Receita Total", value: formatCurrency(resellerStats.totalRevenue), sub: "Desde o início", color: "text-purple-600" },
          { label: "Lucro Total", value: formatCurrency(resellerStats.totalProfit), sub: `Margem ${((resellerStats.totalProfit / resellerStats.totalRevenue) * 100).toFixed(1)}%`, color: "text-emerald-600" },
          { label: "Este Mês", value: formatCurrency(resellerStats.thisMonthRevenue), sub: "Receita maio/2025", color: "text-blue-600" },
          { label: "Lucro Mensal", value: formatCurrency(resellerStats.thisMonthProfit), sub: "Lucro maio/2025", color: "text-rose-600" },
        ].map((card) => (
          <div key={card.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs text-gray-400 font-medium mb-1">{card.label}</p>
            <p className={`text-xl font-bold ${card.color}`}>{card.value}</p>
            <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Chart + breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
        {/* Bar chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-base font-semibold text-gray-900 mb-1">Evolução Mensal</h3>
          <p className="text-xs text-gray-400 mb-6">Receita e lucro dos últimos 5 meses</p>
          <div className="flex items-end gap-4 h-40">
            {monthlyData.map((d) => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col items-center gap-1">
                  <p className="text-xs text-gray-500 font-medium">{formatCurrency(d.revenue).replace("R$ ", "")}</p>
                  <div className="w-full flex gap-1 items-end">
                    <div
                      className="flex-1 bg-purple-200 rounded-t-lg transition-all"
                      style={{ height: `${(d.revenue / maxRevenue) * 100}px` }}
                    />
                    <div
                      className="flex-1 bg-emerald-400 rounded-t-lg transition-all"
                      style={{ height: `${(d.profit / maxRevenue) * 100}px` }}
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-400">{d.month}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-purple-200" />
              <span className="text-xs text-gray-500">Receita</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-emerald-400" />
              <span className="text-xs text-gray-500">Lucro</span>
            </div>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-base font-semibold text-gray-900 mb-1">Por Categoria</h3>
          <p className="text-xs text-gray-400 mb-6">Distribuição de receita</p>
          {[
            { name: "Maquiagem", pct: 48, color: "bg-rose-400" },
            { name: "Skincare", pct: 30, color: "bg-purple-400" },
            { name: "Fragrâncias", pct: 14, color: "bg-amber-400" },
            { name: "Cabelos", pct: 8, color: "bg-emerald-400" },
          ].map((cat) => (
            <div key={cat.name} className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-gray-600 font-medium">{cat.name}</span>
                <span className="text-xs text-gray-500">{cat.pct}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${cat.color} rounded-full`} style={{ width: `${cat.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top products */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="px-6 py-5 border-b border-gray-100">
          <h3 className="text-base font-semibold text-gray-900">Produtos Mais Vendidos</h3>
          <p className="text-xs text-gray-400 mt-0.5">Ranking por receita gerada</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                <th className="text-left px-6 py-3">#</th>
                <th className="text-left px-4 py-3">Produto</th>
                <th className="text-left px-4 py-3">Categoria</th>
                <th className="text-right px-4 py-3">Qtd. Vendida</th>
                <th className="text-right px-6 py-3">Receita</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {productSales.map((p, idx) => (
                <tr key={p.name} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className={`inline-flex w-6 h-6 rounded-full items-center justify-center text-xs font-bold ${
                      idx === 0 ? "bg-amber-100 text-amber-700" :
                      idx === 1 ? "bg-gray-100 text-gray-600" :
                      idx === 2 ? "bg-orange-100 text-orange-700" :
                      "bg-gray-50 text-gray-400"
                    }`}>
                      {idx + 1}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{p.name}</td>
                  <td className="px-4 py-4">
                    <span className="text-xs bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full font-medium">{p.category}</span>
                  </td>
                  <td className="text-right px-4 py-4 text-sm text-gray-600">{p.qty === 0 ? "—" : p.qty}</td>
                  <td className="text-right px-6 py-4 text-sm font-bold text-gray-900">
                    {p.revenue === 0 ? "—" : formatCurrency(p.revenue)}
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
