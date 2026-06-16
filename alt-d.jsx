/* global React, Photo, LSHeader, LSCrumb, LSFooter, ConceptTag, PriceBlock, SizeRow, SwatchRow, BenefitRow */
// Alternative D — Ecossistema Família
// kit família · cross-sell · ticket médio · narrativa "vestir junto"

function AltD() {
  return (
    <div className="pdp">
      <ConceptTag letter="D" name="Ecossistema Família" sub="tal pai, tal filho" />
      <LSHeader />
      <LSCrumb />

      {/* ── HERO 2-col: foto família + ficha pequena ─────────── */}
      <section style={{ padding: "16px 32px 0", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 40 }}>
        <div style={{ position: "relative" }}>
          <Photo src="assets/products/short-vichy-rosa-pai-filho.jpg" radius={18} />
          {/* hotspots vivos na foto */}
          {[
            { top: 200, left: 60, label: "Short Infantil Vichy · R$ 248,00" },
            { top: 360, left: 320, label: "Short Masculino Vichy · R$ 398,00", active: true },
            { top: 240, right: 60, label: "Maiô Aquarela Rosa · R$ 498,00" },
          ].map((h, i) => (
            <div key={i} style={{ position: "absolute", top: h.top, left: h.left, right: h.right, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{
                width: 24, height: 24, borderRadius: "50%",
                background: h.active ? "var(--ls-coral)" : "#fff",
                border: `2px solid ${h.active ? "var(--ls-coral)" : "var(--ls-navy)"}`,
                color: h.active ? "#fff" : "var(--ls-navy)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 500,
                boxShadow: "0 4px 12px rgba(14,21,42,0.18)" }}>+</span>
              <span style={{
                background: "#fff", padding: "8px 14px", fontSize: 11.5,
                letterSpacing: "0.04em", borderRadius: 999,
                color: "var(--ls-navy)", boxShadow: "var(--ls-shadow-1)" }}>{h.label}</span>
            </div>
          ))}
        </div>

        <aside style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span className="ls-tag ls-tag--rose">Faz parte do universo Vichy Rosa</span>
          <div>
            <span className="ls-eyebrow">Lili Sampedro · Masculino</span>
            <h1 className="ls-h1" style={{ fontSize: 36, margin: "8px 0 0", lineHeight: 1.05 }}>Short Masculino<span className="ls-print-name">Vichy Rosa</span></h1>
            <p style={{ margin: "12px 0 0", fontSize: 13, color: "var(--ls-text)", lineHeight: 1.65 }}>
              A versão masculina da nossa estampa-assinatura. Combina com <b>8 peças
              coordenadas</b> da temporada — para vestir junto, sem parecer combinando demais.
            </p>
          </div>

          <PriceBlock />
          <SwatchRow />
          <SizeRow active="M" />
          <button className="ls-btn ls-btn--primary ls-btn--block ls-btn--lg">
            Adicionar à Sacola
          </button>

          <div style={{ background: "#fff5f1", padding: 18, borderRadius: 14, border: "1px solid #ffd9c2" }}>
            <div className="row" style={{ alignItems: "flex-start", gap: 10 }}>
              <span style={{ fontSize: 22, lineHeight: 1, color: "var(--ls-navy)" }}>♡</span>
              <div>
                <span style={{ fontSize: 13, color: "var(--ls-navy)", fontWeight: 500 }}>
                  Está comprando para mais alguém?
                </span>
                <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--ls-text)", lineHeight: 1.6 }}>
                  Monte o kit família abaixo e ganhe <b>5% off no kit</b> com 3+ peças coordenadas.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* ── MONTE SEU KIT FAMÍLIA ────────────────────────────── */}
      <section className="sec sec--rose-soft" style={{ marginTop: 56 }}>
        <div className="sec__head">
          <span className="ls-eyebrow" style={{ color: "var(--ls-navy)" }}>Monte seu kit Vichy Rosa</span>
          <h3 className="ls-display">
            Para vestir juntos,<br/>
            com 5% off no kit completo.
          </h3>
          <p style={{ fontSize: 14, color: "var(--ls-text)", maxWidth: 540, marginTop: 8, lineHeight: 1.65 }}>
            Adicione peças coordenadas direto daqui. O desconto aparece
            automaticamente quando o kit chega a três peças.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            { who: "Para ele",        name: "Short Masculino",  price: "R$ 398,00", sizes: ["P","M","G","GG"], src: "assets/products/short-vichy-rosa-1.jpg", added: true },
            { who: "Para ela",        name: "Maiô Aquarela Rosa", price: "R$ 498,00", sizes: ["P","M","G"],   src: "assets/products/maio-aquarela-rosa.webp", added: true },
            { who: "Para crianças",   name: "Short Infantil Vichy", price: "R$ 248,00", sizes: ["2","4","6","8"], src: "assets/products/short-vichy-rosa-infantil.jpg", added: true },
            { who: "Para todos",      name: "Maiô Chloé Bahamas",  price: "R$ 598,00", sizes: ["P","M","G"], src: "assets/products/maio-chloe-bahamas.webp", added: false },
            { who: "Para ele",        name: "Camiseta UV Branco",  price: "R$ 298,00", sizes: ["P","M","G","GG"], src: "assets/products/camiseta-uv-branco.webp", added: false },
            { who: "Para ela",        name: "Top Lara Vichy",      price: "R$ 198,00", sizes: ["P","M","G"], src: "assets/products/top-lara-vichy-verde.webp", added: false },
            { who: "Para crianças",   name: "Infantil Xadrez Verde", price: "R$ 248,00", sizes: ["2","4","6","8"], src: "assets/products/infantil-xadrez-verde.webp", added: false },
            { who: "Para todos",      name: "Chemise Vivi",        price: "R$ 698,00", sizes: ["P","M","G"], src: "assets/products/chemise-vivi.webp", added: false },
          ].map((it, i) => (
            <div key={i} style={{
              background: "#fff",
              border: it.added ? "2px solid var(--ls-coral)" : "1px solid var(--ls-border-soft)",
              borderRadius: 16,
              padding: 12,
              display: "flex", flexDirection: "column", gap: 10,
              position: "relative" }}>
              {it.added && (
                <span style={{
                  position: "absolute", top: 16, right: 16,
                  background: "var(--ls-coral)", color: "#fff",
                  fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase",
                  padding: "4px 10px", borderRadius: 999, fontWeight: 500,
                  zIndex: 2 }}>No kit</span>
              )}
              <Photo src={it.src} radius={10} />
              <span className="ls-eyebrow" style={{ fontSize: 10 }}>{it.who}</span>
              <div>
                <div style={{ fontSize: 13, color: "var(--ls-navy)", fontWeight: 500 }}>{it.name}</div>
                <div className="serif" style={{ fontSize: 18, color: "var(--ls-navy)", marginTop: 2 }}>{it.price}</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {it.sizes.map(s => (
                  <span key={s} style={{
                    width: 26, height: 26, fontSize: 10,
                    border: "1px solid var(--ls-border)", borderRadius: 999,
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    background: "#fff", color: "var(--ls-navy)" }}>{s}</span>
                ))}
              </div>
              <button className={`ls-btn ${it.added ? "ls-btn--outline" : "ls-btn--dark"}`} style={{ padding: "10px 14px", minHeight: 0, fontSize: 10 }}>
                {it.added ? "Remover do kit" : "Adicionar ao kit"}
              </button>
            </div>
          ))}
        </div>

        {/* sticky-style kit summary */}
        <div style={{
          marginTop: 28,
          background: "var(--ls-navy)", color: "#fff",
          padding: "22px 28px", borderRadius: 16,
          display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr auto",
          alignItems: "center", gap: 32 }}>
          <div>
            <span className="ls-eyebrow" style={{ color: "var(--ls-navy)" }}>Seu kit · 3 peças</span>
            <p style={{ margin: "4px 0 0", fontSize: 14, color: "#fff" }}>
              Short Masculino · Maiô Aquarela Rosa · Short Infantil Vichy
            </p>
          </div>
          <div>
            <span className="ls-eyebrow" style={{ color: "var(--ls-navy)" }}>Subtotal</span>
            <p style={{ margin: "4px 0 0", fontFamily: "var(--ls-font-serif)", fontSize: 22, color: "#fff" }}>R$ 1.144,00</p>
          </div>
          <div>
            <span className="ls-eyebrow" style={{ color: "var(--ls-navy)" }}>Com 5% off no kit</span>
            <p style={{ margin: "4px 0 0", fontFamily: "var(--ls-font-serif)", fontSize: 26, color: "var(--ls-navy)" }}>R$ 1.086,80</p>
          </div>
          <button className="ls-btn" style={{ background: "var(--ls-coral)", color: "#fff", borderColor: "var(--ls-coral)" }}>
            Comprar kit completo
          </button>
        </div>
      </section>

      {/* ── Contexto de uso · editorial ─────────────────────── */}
      <section className="sec">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
          <Photo src="assets/products/homem-mulher-vichy.jpg" radius={16} />
          <Photo src="assets/products/casal-combinando.jpg" radius={16} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 24, alignItems: "center" }}>
          <Photo src="assets/products/short-vichy-rosa-infantil.jpg" radius={16} aspect="3/4" />
          <div style={{ padding: "0 24px", textAlign: "center" }}>
            <span className="ls-eyebrow">Vichy Rosa · família</span>
            <h3 className="ls-display" style={{ fontSize: 44, lineHeight: 1.1, marginTop: 14 }}>
              "A gente sempre quis vestir igual, sem parecer fantasia.<br/>
              Esse Vichy resolveu pra gente."
            </h3>
            <p style={{ marginTop: 14, fontSize: 12, color: "var(--ls-text-muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              — Família Carvalho · clientes desde 2023
            </p>
          </div>
          <Photo src="assets/products/short-vichy-rosa-pai-filho-2.jpg" radius={16} aspect="3/4" />
        </div>
      </section>

      {/* ── detalhes do produto resumidos ───────────────────── */}
      <section className="sec sec--cream sec--tight">
        <div className="sec__head" style={{ marginBottom: 20 }}>
          <span className="ls-eyebrow">Sobre este short</span>
          <h3 className="ls-h1" style={{ fontSize: 30, marginTop: 6 }}>Detalhes do produto</h3>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 14 }}>
          {[
            ["Modelagem", "Regular"],
            ["Comprimento", "47 cm · acima do joelho"],
            ["Tecido", "Poliamida · toque seco"],
            ["Forro", "Algodão interno"],
            ["Fechamento", "Cordão fixo + elástico"],
            ["Cuidados", "Lavar à mão"],
          ].map(([k, v]) => (
            <div key={k} style={{ background: "#fff", padding: 16, borderRadius: 12, borderTop: "2px solid var(--ls-coral)" }}>
              <span className="ls-eyebrow" style={{ fontSize: 10 }}>{k}</span>
              <p style={{ margin: "6px 0 0", fontSize: 13, color: "var(--ls-navy)" }}>{v}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20 }}>
          <BenefitRow />
        </div>
      </section>

      {/* ── tabela de medidas (compacta) ─────────────────────── */}
      <section className="sec sec--tight">
        <div className="row row--sb" style={{ padding: "16px 0", borderTop: "1px solid var(--ls-navy)", borderBottom: "1px solid var(--ls-border)" }}>
          <h3 className="serif" style={{ fontSize: 24, color: "var(--ls-navy)" }}>Tabela de Medidas masculina</h3>
          <span className="ls-eyebrow">– recolher</span>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginTop: 14 }}>
          <thead>
            <tr style={{ background: "var(--ls-bg-cream)" }}>
              {["Tamanho", "Cintura", "Quadril", "Comprimento"].map(h => (
                <th key={h} style={{ textAlign: "left", padding: "12px 16px", fontWeight: 500, letterSpacing: "0.12em", fontSize: 11, textTransform: "uppercase", color: "var(--ls-navy)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[["P","72–76 cm","94–98 cm","46 cm"],["M","78–82 cm","100–104 cm","47 cm"],["G","84–88 cm","106–110 cm","48 cm"],["GG","90–94 cm","112–116 cm","49 cm"],["XG","96–100 cm","118–122 cm","50 cm"]].map(r => (
              <tr key={r[0]} style={{ borderBottom: "1px solid var(--ls-border-soft)" }}>
                {r.map((c, i) => (
                  <td key={i} style={{ padding: "12px 16px", color: i === 0 ? "var(--ls-navy)" : "var(--ls-text)", fontWeight: i === 0 ? 500 : 400 }}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ── Presente / embalagem ────────────────────────────── */}
      <section className="sec sec--rose-soft sec--tight">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "center" }}>
          <Photo src="assets/products/casal-combinando.jpg" radius={16} />
          <div>
            <span className="ls-eyebrow" style={{ color: "var(--ls-navy)" }}>Para presentear</span>
            <h3 className="ls-h1" style={{ marginTop: 8, marginBottom: 14 }}>
              Embalagem-presente sem custo extra.
            </h3>
            <p style={{ fontSize: 14, color: "var(--ls-text)", lineHeight: 1.75, maxWidth: 520 }}>
              Toda peça vai na nossa caixa em papel reciclado com lacre de fita rosa.
              No checkout, você pode adicionar um cartão escrito à mão — sem custo.
            </p>
            <div className="row gap-3" style={{ marginTop: 18 }}>
              <span className="ls-tag">Caixa inclusa</span>
              <span className="ls-tag">Cartão à mão</span>
              <span className="ls-tag">Envio sem nota visível</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── outras estampas masculinas ──────────────────────── */}
      <section className="sec sec--tight">
        <div className="row row--sb" style={{ marginBottom: 18 }}>
          <h3 className="ls-h1" style={{ fontSize: 28 }}>Outras estampas da temporada</h3>
          <span className="ls-eyebrow">universo masculino</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {[
            ["Short Vichy Verde", "R$ 398,00", "assets/products/short-vichy-verde.webp"],
            ["Short Xadrez Verde", "R$ 348,00", "assets/products/short-xadrez-verde.webp"],
            ["Camiseta UV Branco", "R$ 298,00", "assets/products/camiseta-uv-branco.webp"],
            ["Chemise Vivi", "R$ 698,00", "assets/products/chemise-vivi.webp"],
          ].map(([n, p, src]) => (
            <div key={n} className="ls-card">
              <Photo src={src} radius={16} />
              <div className="ls-card__body">
                <h4 className="ls-card__name">{n}</h4>
                <span className="ls-card__price">{p}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LSFooter />
    </div>
  );
}

window.AltD = AltD;
