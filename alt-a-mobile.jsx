/* global React, Photo, Icon, LSPromoMobile, LSHeaderMobile, LSCrumbMobile, LSFooterMobile, PriceBlock, SizeRow, SwatchRow, BenefitRow */
// MOBILE — Alternative A · Editorial Vichy

function AltAMobile() {
  return (
    <div className="pdp pdp--mobile">
      <LSPromoMobile text="FRETE GRÁTIS ACIMA DE R$ 600,00" />
      <LSHeaderMobile />

      {/* HERO editorial */}
      <section style={{ position: "relative", padding: "12px 16px 0" }}>
        <Photo src="assets/products/short-vichy-rosa-look.jpg" aspect="4/5" radius={16} />
        <div style={{ position: "absolute", left: 28, right: 28, bottom: 28, background: "rgba(255,255,255,0.94)", padding: "16px 18px", borderRadius: 12 }}>
          <span className="ls-eyebrow" style={{ color: "var(--ls-navy)" }}>Capítulo Vichy Rosa</span>
          <h1 className="ls-display" style={{ fontSize: 30, marginTop: 6, lineHeight: 1.05 }}>
            Nosso Vichy Rosa,<br/>agora deles.
          </h1>
        </div>
      </section>

      {/* PRODUCT compact */}
      <section className="mob-section">
        <span className="ls-eyebrow">Lili Sampedro</span>
        <h2 className="ls-h1" style={{ marginTop: 6 }}>Short Masculino<span className="ls-print-name">Vichy Rosa</span></h2>
        <div style={{ marginTop: 14 }}><PriceBlock /></div>
        <div style={{ marginTop: 18 }}><SwatchRow /></div>
        <div style={{ marginTop: 18 }}><SizeRow active="M" showFitNote={false} /></div>
        <p style={{ marginTop: 16, fontSize: 13, color: "var(--ls-text)", lineHeight: 1.65 }}>
          Modelagem regular, acima do joelho. Tecido leve com secagem rápida e forro em algodão.
        </p>
      </section>

      {/* História da estampa */}
      <section className="mob-section mob-section--cream-warm">
        <Photo src="assets/swatches/vichy-rosa.png" aspect="4/3" radius={14} />
        <span className="ls-eyebrow" style={{ marginTop: 18, display: "block", color: "var(--ls-navy)" }}>A história da estampa</span>
        <h3 className="ls-h1" style={{ marginTop: 6 }}>Cada Vichy nasce em um pincel.</h3>
        <p style={{ marginTop: 12, fontSize: 13, color: "var(--ls-text)", lineHeight: 1.7 }}>
          Tinta acrílica e aquarela sobre papel, no nosso ateliê em Garopaba. Cada peça carrega a mão que pintou.
        </p>
      </section>

      {/* Família coordenada */}
      <section className="mob-section">
        <span className="ls-eyebrow">Universo Vichy Rosa</span>
        <h3 className="ls-h1" style={{ marginTop: 6, marginBottom: 14 }}>Para vestir juntos.</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            "assets/products/short-vichy-rosa-pai-filho.jpg",
            "assets/products/maio-aquarela-rosa.webp",
            "assets/products/short-vichy-rosa-infantil.jpg",
            "assets/products/homem-mulher-vichy.jpg",
          ].map(s => <Photo key={s} src={s} radius={12} />)}
        </div>
      </section>

      {/* Tecnologia */}
      <section className="mob-section mob-section--cream mob-section--tight">
        <span className="ls-eyebrow center" style={{ display: "block", textAlign: "center" }}>Tecnologia do tecido</span>
        <BenefitRow orientation="col" />
      </section>

      <LSFooterMobile />

      {/* sticky bottom CTA */}
      <div className="mob-cta-fixed">
        <button className="ls-btn ls-btn--primary">Adicionar à Sacola · R$ 398,00</button>
      </div>
    </div>
  );
}

window.AltAMobile = AltAMobile;
