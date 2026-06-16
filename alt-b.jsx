/* global React, Photo, LSHeader, LSCrumb, LSFooter, ConceptTag, PriceBlock, SizeRow, SwatchRow, BenefitRow */
// Alternative B — Decisão Rápida
// objetiva · ficha de compra fixa à direita · tudo acima da dobra

function AltB() {
  return (
    <div className="pdp">
      <ConceptTag letter="B" name="Decisão Rápida" sub="acima da dobra responde tudo" />
      <LSHeader />
      <LSCrumb />

      {/* ── HERO 2-col ──────────────────────────────────────── */}
      <section style={{ padding: "16px 32px 48px", display: "grid", gridTemplateColumns: "1.45fr 1fr", gap: 40, alignItems: "start" }}>
        {/* GALERIA */}
        <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              "assets/products/short-vichy-rosa-1.jpg",
              "assets/products/short-vichy-rosa-casal.jpg",
              "assets/products/short-vichy-rosa-look.jpg",
              "assets/products/short-vichy-rosa-pai-filho.jpg",
              "assets/swatches/vichy-rosa.png",
            ].map((src, i) => (
              <div key={i} className={`ls-gallery__thumb${i === 0 ? " is-on" : ""}`}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Photo src="assets/products/short-vichy-rosa-1.jpg" radius={18} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <Photo src="assets/products/short-vichy-rosa-casal.jpg" radius={14} />
              <Photo src="assets/products/short-vichy-rosa-look.jpg" radius={14} />
            </div>
          </div>
        </div>

        {/* FICHA DE COMPRA */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 18, position: "sticky", top: 16 }}>
          <div className="row gap-2">
            <span className="ls-tag ls-tag--rose">Best Seller</span>
            <span className="ls-tag">Edição 2026</span>
          </div>

          <div>
            <span className="ls-eyebrow">Lili Sampedro · Masculino</span>
            <h1 className="ls-h1" style={{ fontSize: 34, margin: "8px 0 0", lineHeight: 1.05 }}>Short Masculino<span className="ls-print-name">Vichy Rosa</span></h1>
            <div className="row gap-2" style={{ marginTop: 8 }}>
              <span className="ls-stars">★★★★★</span>
              <span style={{ fontSize: 12, color: "var(--ls-text-muted)" }}>4,8 · 312 avaliações</span>
            </div>
            <p style={{ margin: "12px 0 0", fontSize: 13, color: "var(--ls-text)", lineHeight: 1.65 }}>
              Tecido leve com secagem rápida, forro interno em algodão, estampa pintada à mão.
            </p>
          </div>

          <PriceBlock size="md" />

          {/* benefícios comerciais condensados */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: 11.5 }}>
            {[
              ["Frete grátis", "acima de R$ 600,00"],
              ["10× sem juros", "no cartão"],
              ["5% off no Pix", "à vista"],
              ["Troca grátis", "30 dias"],
            ].map(([t, s]) => (
              <div key={t} style={{ padding: "10px 12px", background: "var(--ls-bg-cream)", borderRadius: 8 }}>
                <div style={{ color: "var(--ls-navy)", fontWeight: 500 }}>{t}</div>
                <div style={{ color: "var(--ls-text-muted)", fontSize: 10.5, letterSpacing: "0.04em" }}>{s}</div>
              </div>
            ))}
          </div>

          <SwatchRow />
          <SizeRow active="M" />

          <button className="ls-btn ls-btn--primary ls-btn--block ls-btn--lg">
            Adicionar à Sacola · R$ 398,00
          </button>
          <button className="ls-btn ls-btn--outline ls-btn--block" style={{ marginTop: -6 }}>
            Comprar pelo WhatsApp
          </button>

          <BenefitRow />

          {/* CEP rápido */}
          <div style={{ borderTop: "1px solid var(--ls-border)", paddingTop: 16 }}>
            <span className="ls-pdp__label">Calcular frete e prazo</span>
            <div style={{ display: "flex", marginTop: 8, border: "1px solid var(--ls-border)", borderRadius: 999, overflow: "hidden" }}>
              <span style={{ flex: 1, padding: "12px 18px", fontSize: 12, color: "var(--ls-text-faint)" }}>00000-000</span>
              <button style={{ background: "var(--ls-navy)", color: "#fff", padding: "0 22px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>Calcular</button>
            </div>
            <p style={{ margin: "8px 0 0", fontSize: 11, color: "var(--ls-text-muted)" }}>
              Despacho em até 48h · SP capital em 1 dia útil
            </p>
          </div>
        </aside>
      </section>

      {/* ── 3 motivos para escolher ──────────────────────────── */}
      <section className="sec sec--cream sec--tight">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {[
            ["01", "Estampa pintada à mão", "Aquarela e acrílico digitalizados quadrado a quadrado no nosso ateliê em Garopaba."],
            ["02", "Caimento testado", "Modelagem regular com 47 cm de comprimento — fica acima do joelho na maioria dos corpos."],
            ["03", "Dentro e fora d'água", "Tecido leve com secagem rápida e forro interno em algodão. Sai do mar e vai pro almoço."],
          ].map(([n, t, d]) => (
            <div key={n} style={{ borderTop: "1px solid var(--ls-coral)", paddingTop: 18 }}>
              <span className="serif" style={{ fontSize: 32, color: "var(--ls-navy)" }}>{n}</span>
              <h4 className="serif" style={{ fontSize: 22, margin: "8px 0 8px", color: "var(--ls-navy)" }}>{t}</h4>
              <p style={{ fontSize: 13, color: "var(--ls-text)", lineHeight: 1.65 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── descrição + tabela inline ────────────────────────── */}
      <section className="sec sec--tight">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
          <div>
            <span className="ls-eyebrow">Descrição</span>
            <h3 className="ls-h1" style={{ fontSize: 26, marginTop: 6, marginBottom: 14 }}>Em poucas linhas</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13.5, color: "var(--ls-text)" }}>
              <li>· Modelagem regular, acima do joelho.</li>
              <li>· Tecido em poliamida com toque seco e secagem rápida.</li>
              <li>· Forro interno em algodão.</li>
              <li>· Cordão fixo + elástico interno.</li>
              <li>· Bolsos laterais com costura reforçada.</li>
              <li>· Lavar à mão, secar à sombra. Não usar alvejante.</li>
              <li>· Confeccionado em Garopaba/SC.</li>
            </ul>
          </div>
          <div>
            <span className="ls-eyebrow">Tabela de Medidas</span>
            <h3 className="ls-h1" style={{ fontSize: 26, marginTop: 6, marginBottom: 14 }}>Medidas em cm</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr>
                  {["Tam.", "Cintura", "Quadril", "Compr."].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", background: "var(--ls-bg-cream)", color: "var(--ls-navy)", borderBottom: "1px solid var(--ls-border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[["P","72–76","94–98","46"],["M","78–82","100–104","47"],["G","84–88","106–110","48"],["GG","90–94","112–116","49"],["XG","96–100","118–122","50"]].map(r => (
                  <tr key={r[0]}>
                    {r.map((c, i) => (
                      <td key={i} style={{ padding: "10px 14px", borderBottom: "1px solid var(--ls-border-soft)", color: i === 0 ? "var(--ls-navy)" : "var(--ls-text)", fontWeight: i === 0 ? 500 : 400 }}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Completa o look ──────────────────────────────────── */}
      <section className="sec sec--cream sec--tight">
        <div className="row row--sb" style={{ marginBottom: 18 }}>
          <h3 className="ls-h1" style={{ fontSize: 28 }}>Completa o look</h3>
          <span className="ls-eyebrow">3 peças sugeridas</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            ["Camiseta UV Branco", "R$ 298,00", "assets/products/camiseta-uv-branco.webp"],
            ["Chemise Vivi", "R$ 698,00", "assets/products/chemise-vivi.webp"],
            ["Short Xadrez Verde", "R$ 348,00", "assets/products/short-xadrez-verde.webp"],
          ].map(([n, p, src]) => (
            <div key={n} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 16, padding: 14, background: "#fff", borderRadius: 14 }}>
              <Photo src={src} radius={10} aspect="3/4" style={{ width: 120 }} />
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontSize: 13, color: "var(--ls-navy)", fontWeight: 500 }}>{n}</span>
                  <p style={{ margin: "4px 0 0", fontSize: 11, color: "var(--ls-text-muted)" }}>+ adicionar como combo</p>
                </div>
                <div className="row row--sb">
                  <span className="serif" style={{ fontSize: 18, color: "var(--ls-navy)" }}>{p}</span>
                  <button className="ls-btn ls-btn--dark" style={{ padding: "10px 16px", minHeight: 0, fontSize: 10 }}>Adicionar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 18, padding: "18px 22px", background: "#fff", border: "1px solid var(--ls-coral)", borderRadius: 999, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: 13, color: "var(--ls-navy)", fontWeight: 500 }}>Levar combo completo</span>
            <p style={{ margin: "2px 0 0", fontSize: 11, color: "var(--ls-navy)", letterSpacing: "0.04em" }}>R$ 1.742,00 · frete grátis liberado</p>
          </div>
          <button className="ls-btn ls-btn--primary">Adicionar combo</button>
        </div>
      </section>

      {/* ── FAQ enxuto ───────────────────────────────────────── */}
      <section className="sec sec--tight">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 56 }}>
          <h3 className="ls-h1" style={{ fontSize: 32 }}>FAQ</h3>
          <div>
            {[
              ["Em quanto tempo recebo?", "2 a 7 dias úteis dependendo da região. SP capital em 24h."],
              ["Posso trocar de tamanho?", "Sim, troca grátis em 30 dias, sem perguntas."],
              ["Como cuido da estampa?", "Lavagem à mão e secagem à sombra mantêm o vichy vivo por muito mais tempo."],
              ["Tem forro?", "Sim, forro interno em algodão."],
              ["É a mesma estampa do maiô e da canga?", "Sim, peças totalmente coordenadas."],
            ].map(([q, a], i) => (
              <div key={i} className="ls-acc__item">
                <div className="ls-acc__btn"><span>{q}</span><span style={{ color: "var(--ls-navy)" }}>+</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LSFooter />
    </div>
  );
}

window.AltB = AltB;
