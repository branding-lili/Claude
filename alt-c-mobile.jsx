/* global React, Photo, Icon, LSPromoMobile, LSHeaderMobile, LSCrumbMobile, LSFooterMobile, PriceBlock, SizeRow, SwatchRow, BenefitRow */
// MOBILE — Alternative C · Confiança & Caimento

function AltCMobile() {
  return (
    <div className="pdp pdp--mobile">
      <LSPromoMobile text="TROCA GRÁTIS EM 30 DIAS" />
      <LSHeaderMobile />

      {/* HERO: foto de caimento + caption */}
      <section style={{ padding: "12px 16px 0" }}>
        <Photo src="assets/products/short-vichy-rosa-pai-filho-2.jpg" radius={14} />
        <div className="row row--sb" style={{ marginTop: 10, fontSize: 10.5, color: "var(--ls-text-muted)", letterSpacing: "0.06em" }}>
          <span>Modelo · 1,82m · 78kg · Veste M</span>
          <span style={{ color: "var(--ls-navy)", textDecoration: "underline" }}>Outros corpos ↗</span>
        </div>
      </section>

      {/* FICHA */}
      <section className="mob-section" style={{ paddingTop: 18 }}>
        <span className="ls-tag ls-tag--rose">Best Seller Masculino</span>
        <h1 className="ls-h1" style={{ marginTop: 10 }}>Short Masculino<span className="ls-print-name">Vichy Rosa</span></h1>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 6, fontSize: 11.5 }}>
          <span className="ls-stars">★★★★★</span>
          <span style={{ color: "var(--ls-text)" }}>4,8 · 312 avaliações</span>
        </div>
        <p style={{ fontSize: 12, color: "var(--ls-forest)", fontWeight: 500, marginTop: 4 }}>
          96% recomendam · 92% "veste como esperado"
        </p>
        <div style={{ marginTop: 14 }}><PriceBlock /></div>
        <div style={{ marginTop: 18 }}><SwatchRow /></div>
        <div style={{ marginTop: 18 }}><SizeRow active="M" /></div>

        {/* mini fit finder */}
        <div style={{ marginTop: 16, padding: 14, border: "1px dashed var(--ls-border)", borderRadius: 12, display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ fontSize: 20 }}>📏</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: "var(--ls-navy)", fontWeight: 500 }}>Encontre seu tamanho em 30s</div>
            <p style={{ margin: "2px 0 0", fontSize: 10.5, color: "var(--ls-text-muted)" }}>3 perguntas e a gente recomenda.</p>
          </div>
        </div>

        {/* trust grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 14, fontSize: 11 }}>
          {[
            ["Troca grátis", "30 dias"],
            ["Site seguro", "pagamento criptografado"],
            ["10× sem juros", "ou 5% off Pix"],
            ["Frete grátis", "acima R$ 600"],
          ].map(([t, s]) => (
            <div key={t} style={{ padding: "10px 12px", background: "var(--ls-bg-cream)", borderRadius: 10 }}>
              <div style={{ color: "var(--ls-navy)", fontWeight: 500 }}>{t}</div>
              <div style={{ color: "var(--ls-text-muted)", fontSize: 10 }}>{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 corpos · scroll horizontal */}
      <section className="mob-section mob-section--cream">
        <span className="ls-eyebrow">Como veste</span>
        <h3 className="ls-h1" style={{ fontSize: 24, marginTop: 6, marginBottom: 14 }}>Caimento, sem retoque.</h3>
        <div className="h-scroll">
          {[
            { src: "assets/products/short-vichy-rosa-casal.jpg", t: "Modelo 01", m: "1,72m · 68kg · P" },
            { src: "assets/products/short-vichy-rosa-pai-filho-2.jpg", t: "Modelo 02", m: "1,82m · 78kg · M" },
            { src: "assets/products/short-vichy-rosa-look.jpg", t: "Modelo 03", m: "1,88m · 92kg · G" },
          ].map(it => (
            <div key={it.t} style={{ width: 220 }}>
              <Photo src={it.src} radius={12} aspect="3/4" />
              <div style={{ marginTop: 8 }}>
                <div style={{ fontSize: 12, color: "var(--ls-navy)", fontWeight: 500 }}>{it.t}</div>
                <div className="ls-eyebrow" style={{ fontSize: 9.5, marginTop: 2 }}>{it.m}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabela aberta */}
      <section className="mob-section">
        <span className="ls-eyebrow">Tabela aberta · sem modal</span>
        <h3 className="ls-h1" style={{ fontSize: 22, marginTop: 6, marginBottom: 12 }}>Medidas em cm</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, borderRadius: 10, overflow: "hidden" }}>
          <thead>
            <tr style={{ background: "var(--ls-navy)", color: "#fff" }}>
              {["Tam.", "Cintura", "Quadril", "Compr."].map(h => (
                <th key={h} style={{ textAlign: "left", padding: "10px 10px", fontWeight: 500, letterSpacing: "0.1em", fontSize: 10, textTransform: "uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[["P","72–76","94–98","46"],["M","78–82","100–104","47"],["G","84–88","106–110","48"],["GG","90–94","112–116","49"],["XG","96–100","118–122","50"]].map((r, i) => (
              <tr key={r[0]} style={{ background: i % 2 === 0 ? "#fff" : "var(--ls-bg-cream)" }}>
                {r.map((c, j) => (
                  <td key={j} style={{ padding: "10px 10px", borderBottom: "1px solid var(--ls-border-soft)", color: j === 0 ? "var(--ls-navy)" : "var(--ls-text)", fontWeight: j === 0 ? 500 : 400, fontSize: 12 }}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Reviews compactas */}
      <section className="mob-section mob-section--cream-warm">
        <span className="ls-eyebrow">Quem comprou diz</span>
        <h3 className="ls-h1" style={{ fontSize: 22, marginTop: 6, marginBottom: 14 }}>
          4,8 ★★★★★ · 312 avaliações
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            ["Marina S.", "Comprei pro marido", "Caiu como na foto. M, 1,80m, perfeito."],
            ["Pedro V.", "Verão na Bahia", "Tecido seca rapidíssimo. Forro confortável."],
          ].map(([n, t, q]) => (
            <div key={n} style={{ background: "#fff", padding: 16, borderRadius: 12 }}>
              <div className="row row--sb" style={{ fontSize: 11.5 }}>
                <span><b style={{ color: "var(--ls-navy)" }}>{n}</b> <span className="muted">· {t}</span></span>
                <span className="ls-stars" style={{ fontSize: 11 }}>★★★★★</span>
              </div>
              <p style={{ margin: "8px 0 0", fontSize: 12.5, color: "var(--ls-text)", lineHeight: 1.6 }}>"{q}"</p>
            </div>
          ))}
        </div>
      </section>

      <LSFooterMobile />

      <div className="mob-cta-fixed">
        <button className="ls-btn ls-btn--primary">Adicionar à Sacola · R$ 398,00</button>
      </div>
    </div>
  );
}

window.AltCMobile = AltCMobile;
