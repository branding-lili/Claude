import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex flex-col items-center justify-center p-4">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 shadow-lg shadow-rose-200 mb-4">
            <span className="text-white text-3xl font-bold">L</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Lili Sampedro</h1>
          <p className="text-gray-500 text-sm mt-1">Portal de Parceiros</p>
        </div>

        {/* Login card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">Bem-vinda de volta!</h2>
          <p className="text-gray-500 text-sm mb-6">Acesse sua área exclusiva</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent placeholder-gray-300 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="password">
                Senha
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent placeholder-gray-300 transition-all"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-rose-500" />
                <span className="text-sm text-gray-500">Lembrar-me</span>
              </label>
              <button type="button" className="text-sm text-rose-600 hover:text-rose-700 font-medium">
                Esqueceu a senha?
              </button>
            </div>
          </form>

          <div className="mt-6 space-y-3">
            <p className="text-xs text-center text-gray-400 font-medium uppercase tracking-wide">Acesso rápido (demonstração)</p>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/afiliado"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl border-2 border-rose-100 hover:border-rose-300 hover:bg-rose-50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm shadow-rose-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">Afiliado</p>
                  <p className="text-xs text-gray-400">Comissões</p>
                </div>
              </Link>

              <Link
                href="/revendedor"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:bg-purple-50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm shadow-purple-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">Revendedor</p>
                  <p className="text-xs text-gray-400">Produtos</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Ainda não é parceira?{" "}
          <button className="text-rose-600 font-medium hover:underline">Cadastre-se aqui</button>
        </p>
      </div>
    </div>
  );
}
