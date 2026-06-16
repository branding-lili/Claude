/* global React, Photo, Icon, LSPromoMobile, LSHeaderMobile, LSCrumbMobile, LSFooterMobile, PriceBlock, SizeRow, SwatchRow, BenefitRow */
// MOBILE — Alternative D · Ecossistema Família

function AltDMobile() {
  return (
    <div className="pdp pdp--mobile">
      <LSPromoMobile text="KIT FAMÍLIA · 5% OFF EM 3+ PEÇAS" />
      <LSHeaderMobile />

      {/* HERO família */}
      <section style={{ padding: "12px 16px 0" }}>
        <Photo src="assets/products/short-vichy-rosa-pai-filho.jpg" radius={14} />
      </section>

      {/* FICHA */}
      <section className="mob-section" style={{ paddingTop: 18 }}>
        <span className="ls-tag ls-tag--rose">Universo Vichy Rosa</span>
        <h1 className="ls-h1" style={{ marginTop: 10 }}>Short Masculino<span className="ls-print-name">Vichy Rosa</span></h1>
        <p style={{ marginTop: 8, fontSize: 13, color: "var(--ls-text)", lineHeight: 1.6 }}>
          Combina com <b>8 peças coordenadas</b> da temporada — para vestir junto sem parecer combinando demais.
        </p>
        <div style={{ marginTop: 14 }}><PriceBlock /></div>
        <div style={{ marginTop: 18 }}><SwatchRow /></div>
        <div style={{ marginTop: 18 }}><SizeRow active="M" showFitNote={false} /></div>
      </section>

      {/* MONTE SEU KIT */}
      <section className="mob-section mob-section--rose">
        <span className="ls-eyebrow" style={{ color: "var(--ls-navy)" }}>Monte seu kit</span>
        <h3 className="ls-h1" style={{ marginTop: 6, marginBottom: 6 }}>Para vestir juntos.</h3>
        <p style={{ fontSize: 12, color: "var(--ls-text)", marginBottom: 16, lineHeight: 1.55 }}>
          3+ peças = <b>5% off</b> no kit.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { who: "Para ele",      name: "Short Masculino",   price: "R$ 398,00", src: "assets/products/short-vichy-rosa-1.jpg", added: true },
            { who: "Para ela",      name: "Maiô Aquarela Rosa", price: "R$ 498,00", src: "assets/products/maio-aquarela-rosa.webp", added: true },
            { who: "Para crianças", name: "Short Infantil",     price: "R$ 248,00", src: "assets/products/short-vichy-rosa-infantil.jpg", added: true },
            { who: "Para todos",    name: "Maiô Chloé Bahamas", price: "R$ 598,00", src: "assets/products/maio-chloe-bahamas.webp", added: false },
          ].map((it, i) => (
            <div key={i} style={{
              background: "#fff",
              border: it.added ? "2px solid var(--ls-coral)" : "1px solid var(--ls-border-soft)",
              borderRadius: 12,
              padding: 10,
              display: "flex", flexDirection: "column", gap: 8,
              position: "relative",
            }}>
              {it.added && (
                <span style={{
                  position: "absolute", top: 12, right: 12,
                  background: "var(--ls-coral)", color: "#fff",
                  fontSize: 8.5, letterSpacing: "0.14em", textTransform: "uppercase",
                  padding: "3px 7px", borderRadius: 999, fontWeight: 500,
                }}>No kit</span>
              )}
              <Photo src={it.src} radius={8} aspect="3/4" />
              <div>
                <span className="ls-eyebrow" style={{ fontSize: 9 }}>{it.who}</span>
                <div style={{ fontSize: 12, color: "var(--ls-navy)", fontWeight: 500, marginTop: 2 }}>{it.name}</div>
                <div className="serif" style={{ fontSize: 14, color: "var(--ls-navy)", marginTop: 2 }}>{it.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* kit summary */}
        <div style={{
          marginTop: 16, padding: 16,
          background: "var(--ls-navy)", color: "#fff",
          borderRadius: 12,
        }}>
          <div className="row row--sb">
            <span className="ls-eyebrow" style={{ color: "var(--ls-navy)", fontSize: 9.5 }}>Seu kit · 3 peças</span>
            <span className="serif" style={{ fontSize: 18 }}>R$ 1.086,80</span>
          </div>
          <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.7)", margin: "4px 0 12px", letterSpacing: "0.04em" }}>
            de R$ 1.144,00 · economia 5%
          </p>
          <button className="ls-btn ls-btn--primary ls-btn--block" style={{ background: "var(--ls-coral)" }}>
            Comprar kit completo
          </button>
        </div>
      </section>

      {/* Detalhes compactos */}
      <section className="mob-section">
        <span className="ls-eyebrow">Detalhes</span>
        <h3 className="ls-h1" style={{ fontSize: 22, marginTop: 6, marginBottom: 12 }}>Sobre este short</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            ["Modelagem", "Regular"],
            ["Comprimento", "47 cm"],
            ["Tecido", "Poliamida"],
            ["Forro", "Algodão"],
          ].map(([k, v]) => (
            <div key={k} style={{ background: "var(--ls-bg-cream)", padding: 12, borderRadius: 10 }}>
              <div className="ls-eyebrow" style={{ fontSize: 9.5 }}>{k}</div>
              <div style={{ fontSize: 13, color: "var(--ls-navy)", marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14 }}><BenefitRow /></div>
      </section>

      <LSFooterMobile />

      <div className="mob-cta-fixed mob-cta-fixed--row">
        <button className="ls-btn ls-btn--outline">Só este short</button>
        <button className="ls-btn ls-btn--primary">Comprar kit · R$ 1.086,80</button>
      </div>
    </div>
  );
}

window.AltDMobile = AltDMobile;
