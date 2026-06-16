/* global React, Photo, LSHeader, LSCrumb, LSFooter, ConceptTag, PriceBlock, SizeRow, SwatchRow, BenefitRow */
// Alternative A — Editorial Vichy
// aspiracional · estampa pintada à mão como protagonista · narrativa da marca

function AltA() {
  return (
    <div className="pdp">
      <ConceptTag letter="A" name="Editorial Vichy" sub="é sempre verão" />
      <LSHeader />
      <LSCrumb />

      {/* ── HERO editorial ─────────────────────────── */}
      <section style={{ position: "relative", padding: "16px 32px 0" }}>
        <Photo
          src="assets/products/short-vichy-rosa-look.jpg"
          aspect="16/9"
          radius={20}
          style={{ aspectRatio: "16/8" }}
        />
        <div style={{
          position: "absolute",
          left: 88, bottom: 56,
          background: "rgba(255,255,255,0.94)",
          padding: "32px 36px",
          borderRadius: 16,
          maxWidth: 460 }}>
          <span className="ls-eyebrow" style={{ color: "var(--ls-navy)" }}>Capítulo Vichy Rosa · Verão 2026</span>
          <h1 className="ls-display" style={{ fontSize: 56, margin: "12px 0 12px", lineHeight: 1.02 }}>
            Nosso Vichy Rosa,<br/>agora deles.
          </h1>
          <p style={{ fontSize: 14, color: "var(--ls-text)", lineHeight: 1.65 }}>
            A estampa que vestiu mães, filhas e amigas atravessa para a praia
            masculina — pintada à mão, em aquarela, fiel ao seu lugar de origem.
          </p>
        </div>
        <div style={{ position: "absolute", right: 88, top: 88, textAlign: "right" }}>
          <span className="ls-tag ls-tag--rose">Best Seller · Estampa-assinatura</span>
        </div>
      </section>

      {/* ── faixa de produto (compra silenciosa) ──────────────── */}
      <section style={{ padding: "48px 32px 56px", borderBottom: "1px solid var(--ls-border)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: 48, alignItems: "end" }}>
          <div>
            <span className="ls-eyebrow">Lili Sampedro</span>
            <h2 className="ls-h1" style={{ fontSize: 40, margin: "10px 0 0", lineHeight: 1.05 }}>
              Short Masculino<span className="ls-print-name">Vichy Rosa</span>
            </h2>
            <p style={{ marginTop: 14, fontSize: 13, color: "var(--ls-text)", maxWidth: 420, lineHeight: 1.65 }}>
              Modelagem regular, acima do joelho, tecido leve com secagem rápida,
              forro interno em algodão. Combina com a família inteira.
            </p>
          </div>
          <PriceBlock size="lg" />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <SwatchRow />
            <SizeRow showFitNote={false} />
            <button className="ls-btn ls-btn--primary ls-btn--block ls-btn--lg" style={{ marginTop: 6 }}>
              Adicionar à Sacola
            </button>
          </div>
        </div>
      </section>

      {/* ── A história da estampa ─────────────────────────────── */}
      <section className="sec sec--cream-warm">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "center" }}>
          <Photo src="assets/swatches/vichy-rosa.png" aspect="1/1" />
          <div>
            <span className="ls-eyebrow" style={{ color: "var(--ls-navy)" }}>A história da estampa</span>
            <h3 className="ls-display" style={{ fontSize: 56, margin: "12px 0 18px", lineHeight: 1.02 }}>
              Cada Vichy<br/>nasce em um pincel.
            </h3>
            <p style={{ fontSize: 14.5, color: "var(--ls-text)", maxWidth: 480, lineHeight: 1.75 }}>
              A estampa nasce na nossa mesa de ateliê em Garopaba — tinta acrílica e
              aquarela sobre papel, depois digitalizada quadrado a quadrado.
              Por isso nenhum Vichy nosso é exatamente igual a outro: cada peça
              carrega a mão que pintou.
            </p>
            <div style={{ display: "flex", gap: 28, marginTop: 32 }}>
              {[["14", "cores na paleta"], ["03", "temporadas"], ["+22k", "peças vendidas"]].map(([n, l]) => (
                <div key={l} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span className="serif" style={{ fontSize: 40, color: "var(--ls-navy)", lineHeight: 1 }}>{n}</span>
                  <span className="ls-eyebrow">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Editorial família coordenada ─────────────────────── */}
      <section className="sec">
        <div className="sec__head sec__head--center">
          <span className="ls-eyebrow">Universo Vichy Rosa</span>
          <h3 className="ls-display" style={{ maxWidth: 760 }}>
            Para vestir juntos,<br/>combinar sem combinar.
          </h3>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: 14, height: 560 }}>
          <Photo src="assets/products/short-vichy-rosa-pai-filho.jpg" aspect="auto" radius={18} style={{ height: "100%", aspectRatio: "auto" }} />
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 14 }}>
            <Photo src="assets/products/maio-aquarela-rosa.webp" aspect="auto" radius={18} style={{ height: "100%", aspectRatio: "auto" }} />
            <Photo src="assets/products/short-vichy-rosa-infantil.jpg" aspect="auto" radius={18} style={{ height: "100%", aspectRatio: "auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 14 }}>
            <Photo src="assets/products/short-vichy-rosa-pai-filho-2.jpg" aspect="auto" radius={18} style={{ height: "100%", aspectRatio: "auto" }} />
            <Photo src="assets/products/homem-mulher-vichy.jpg" aspect="auto" radius={18} style={{ height: "100%", aspectRatio: "auto" }} />
          </div>
        </div>
      </section>

      {/* ── Tecnologia/benefícios (em ícones brand) ───────────── */}
      <section className="sec sec--cream">
        <div className="sec__head sec__head--center">
          <span className="ls-eyebrow">Tecnologia do nosso tecido</span>
          <h3 className="ls-h1">Bonito de ver. Inteligente de usar.</h3>
        </div>
        <BenefitRow orientation="col" />
      </section>

      {/* ── Detalhes em prosa ────────────────────────────────── */}
      <section className="sec">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <span className="ls-eyebrow">Detalhes</span>
            <h3 className="ls-h1" style={{ marginTop: 10, marginBottom: 18 }}>
              Pensado para várias temporadas.
            </h3>
            <p style={{ fontSize: 14, color: "var(--ls-text)", maxWidth: 440, lineHeight: 1.75 }}>
              Tecido de poliamida com toque seco, forro interno em algodão e cordão fixo.
              Bolsos laterais com costura reforçada. Lavagem à mão, secagem à sombra.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              ["Tecido", "85% Poliamida · 15% Elastano"],
              ["Forro", "Algodão interno"],
              ["Modelagem", "Regular · acima do joelho"],
              ["Fechamento", "Cordão fixo + elástico"],
              ["Cuidados", "Lavar à mão · sombra"],
              ["Origem", "Confeccionado em Garopaba/SC"],
            ].map(([k, v]) => (
              <div key={k} style={{ borderTop: "1px solid var(--ls-border)", paddingTop: 12 }}>
                <span className="ls-eyebrow">{k}</span>
                <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--ls-text)" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outras peças do universo ──────────────────────────── */}
      <section className="sec sec--cream">
        <div className="sec__head sec__head--center">
          <span className="ls-eyebrow">Continua na coleção</span>
          <h3 className="ls-h1">Mais Vichy Rosa.</h3>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {[
            ["Maiô Aquarela Rosa", "R$ 498,00", "assets/products/maio-aquarela-rosa.webp"],
            ["Short Infantil Vichy", "R$ 248,00", "assets/products/short-vichy-rosa-infantil.jpg"],
            ["Top Lara Vichy", "R$ 198,00", "assets/products/top-lara-vichy-verde.webp"],
            ["Chemise Vivi", "R$ 698,00", "assets/products/chemise-vivi.webp"],
          ].map(([n, p, src]) => (
            <div key={n} className="ls-card">
              <Photo src={src} radius={16} />
              <div className="ls-card__body">
                <span className="ls-eyebrow" style={{ fontSize: 10 }}>Lili Sampedro</span>
                <h4 className="ls-card__name">{n}</h4>
                <span className="ls-card__price">{p}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Marca + tom (sobre Lili) ─────────────────────────── */}
      <section className="sec sec--navy" style={{ background: "var(--ls-navy)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "center" }}>
          <Photo src="assets/products/casal-combinando.jpg" radius={18} />
          <div>
            <span className="ls-eyebrow" style={{ color: "var(--ls-navy)" }}>Quem é a Lili</span>
            <h3 className="ls-display" style={{ color: "#fff", margin: "12px 0 18px", fontSize: 56 }}>
              É sempre verão.
            </h3>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.82)", maxWidth: 480, lineHeight: 1.75, fontFamily: "var(--ls-font-serif)" }}>
              "A Lili Sampedro é uma empresa familiar, criada e administrada por mulheres.
              Nascida nas Bahamas, e produzida no Brasil. Mais do que moda praia,
              é sobre memórias que ficam para sempre."
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="sec">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56 }}>
          <div>
            <span className="ls-eyebrow">Perguntas frequentes</span>
            <h3 className="ls-h1" style={{ marginTop: 10 }}>
              Dúvidas comuns
            </h3>
          </div>
          <div>
            {[
              "Como cuidar da estampa para que ela dure?",
              "Em quanto tempo recebo o pedido?",
              "Posso trocar de tamanho?",
              "O short tem forro interno?",
              "Vocês têm essa estampa em outras peças?",
            ].map((q, i) => (
              <div key={i} className="ls-acc__item">
                <div className="ls-acc__btn">
                  {q}
                  <span style={{ color: "var(--ls-navy)" }}>+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LSFooter />
    </div>
  );
}

window.AltA = AltA;
