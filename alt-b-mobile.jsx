/* global React, Photo, Icon, LSPromoMobile, LSHeaderMobile, LSCrumbMobile, LSFooterMobile, PriceBlock, SizeRow, SwatchRow, BenefitRow */
// MOBILE — Alternative B · Decisão Rápida

function AltBMobile() {
  return (
    <div className="pdp pdp--mobile">
      <LSPromoMobile text="10% NA SUA PRIMEIRA COMPRA · PRIMEIRA10" />
      <LSHeaderMobile />
      <LSCrumbMobile />

      {/* GALLERY com dots */}
      <section style={{ position: "relative", padding: "0 16px" }}>
        <Photo src="assets/products/short-vichy-rosa-1.jpg" radius={14} />
        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 10 }}>
          {[1, 2, 3, 4, 5].map(i => (
            <span key={i} style={{
              width: i === 1 ? 18 : 6, height: 6,
              borderRadius: 3,
              background: i === 1 ? "var(--ls-navy)" : "var(--ls-border)",
            }} />
          ))}
        </div>
      </section>

      {/* FICHA */}
      <section className="mob-section" style={{ paddingTop: 18 }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
          <span className="ls-tag ls-tag--rose">Best Seller</span>
          <span className="ls-tag">Edição 2026</span>
        </div>
        <span className="ls-eyebrow">Lili Sampedro</span>
        <h1 className="ls-h1" style={{ marginTop: 6 }}>Short Masculino<span className="ls-print-name">Vichy Rosa</span></h1>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 6, fontSize: 11.5 }}>
          <span className="ls-stars">★★★★★</span>
          <span style={{ color: "var(--ls-text-muted)" }}>4,8 · 312 avaliações</span>
        </div>
        <div style={{ marginTop: 14 }}><PriceBlock size="lg" /></div>

        {/* benefícios em grid 2x2 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 16, fontSize: 11 }}>
          {[
            ["Frete grátis", "R$ 600+"],
            ["10× sem juros", "no cartão"],
            ["5% off no Pix", "à vista"],
            ["Troca grátis", "30 dias"],
          ].map(([t, s]) => (
            <div key={t} style={{ padding: "10px 12px", background: "var(--ls-bg-cream)", borderRadius: 10 }}>
              <div style={{ color: "var(--ls-navy)", fontWeight: 500 }}>{t}</div>
              <div style={{ color: "var(--ls-text-muted)", fontSize: 10, letterSpacing: "0.04em" }}>{s}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18 }}><SwatchRow /></div>
        <div style={{ marginTop: 18 }}><SizeRow active="M" showFitNote={false} /></div>
      </section>

      {/* 3 motivos compactos */}
      <section className="mob-section mob-section--cream mob-section--tight">
        {[
          ["01", "Estampa pintada à mão", "Aquarela no nosso ateliê em Garopaba."],
          ["02", "Caimento testado", "47 cm · fica acima do joelho."],
          ["03", "Dentro e fora d'água", "Tecido leve, secagem rápida, forro de algodão."],
        ].map(([n, t, d], i) => (
          <div key={n} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 12, padding: "14px 0", borderTop: i === 0 ? "none" : "1px solid var(--ls-border)" }}>
            <span className="serif" style={{ fontSize: 24, color: "var(--ls-navy)" }}>{n}</span>
            <div>
              <div style={{ fontSize: 13, color: "var(--ls-navy)", fontWeight: 500 }}>{t}</div>
              <p style={{ margin: "2px 0 0", fontSize: 12, color: "var(--ls-text)", lineHeight: 1.55 }}>{d}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Descrição */}
      <section className="mob-section">
        <span className="ls-eyebrow">Descrição</span>
        <h3 className="ls-h1" style={{ fontSize: 22, marginTop: 6, marginBottom: 12 }}>Em poucas linhas</h3>
        <ul style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "var(--ls-text)" }}>
          <li>· Modelagem regular, acima do joelho.</li>
          <li>· Poliamida toque seco, secagem rápida.</li>
          <li>· Forro interno em algodão.</li>
          <li>· Cordão fixo + elástico interno.</li>
          <li>· Lavar à mão, secar à sombra.</li>
        </ul>
      </section>

      {/* Tabela compacta */}
      <section className="mob-section mob-section--cream mob-section--tight">
        <span className="ls-eyebrow">Tabela de medidas</span>
        <h3 className="ls-h1" style={{ fontSize: 22, marginTop: 6, marginBottom: 12 }}>Medidas em cm</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr>
              {["Tam.", "Cintura", "Quadril", "Compr."].map(h => (
                <th key={h} style={{ textAlign: "left", padding: "8px 10px", fontWeight: 500, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ls-navy)", borderBottom: "1px solid var(--ls-border)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[["P","72–76","94–98","46"],["M","78–82","100–104","47"],["G","84–88","106–110","48"],["GG","90–94","112–116","49"],["XG","96–100","118–122","50"]].map(r => (
              <tr key={r[0]}>
                {r.map((c, i) => (
                  <td key={i} style={{ padding: "8px 10px", borderBottom: "1px solid var(--ls-border-soft)", color: i === 0 ? "var(--ls-navy)" : "var(--ls-text)", fontWeight: i === 0 ? 500 : 400, fontSize: 12 }}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <LSFooterMobile />

      <div className="mob-cta-fixed mob-cta-fixed--row">
        <button className="ls-btn ls-btn--outline">WhatsApp</button>
        <button className="ls-btn ls-btn--primary">Adicionar à Sacola</button>
      </div>
    </div>
  );
}

window.AltBMobile = AltBMobile;
