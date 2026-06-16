/* global React, Photo, LSHeader, LSCrumb, LSFooter, ConceptTag, PriceBlock, SizeRow, SwatchRow, BenefitRow */
// Alternative C — Confiança & Caimento
// reduz risco percebido · 3 corpos · tabela aberta · reviews quantificadas

function AltC() {
  return (
    <div className="pdp">
      <ConceptTag letter="C" name="Confiança & Caimento" sub="sem retoque, sem surpresa" />
      <LSHeader />
      <LSCrumb />

      {/* ── HERO 3-col ──────────────────────────────────────── */}
      <section style={{ padding: "16px 32px 0", display: "grid", gridTemplateColumns: "1fr 1.1fr 1fr", gap: 24, alignItems: "start" }}>
        {/* col esquerda: mini gallery + selos de confiança */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Photo src="assets/products/short-vichy-rosa-1.jpg" radius={12} />
            <Photo src="assets/products/short-vichy-rosa-casal.jpg" radius={12} />
            <Photo src="assets/products/short-vichy-rosa-pai-filho.jpg" radius={12} />
            <Photo src="assets/products/short-vichy-rosa-look.jpg" radius={12} />
          </div>
          <div style={{ padding: 18, border: "1px solid var(--ls-forest)", borderRadius: 14, background: "rgba(31,71,62,0.04)" }}>
            <span className="ls-eyebrow" style={{ color: "var(--ls-forest)" }}>Troca grátis</span>
            <p style={{ margin: "6px 0 0", fontSize: 13, color: "var(--ls-navy)", lineHeight: 1.6 }}>
              Não serviu? <b>Troca grátis em 30 dias</b>, com etiqueta de devolução
              já incluída na sua sacola.
            </p>
          </div>
          <div style={{ padding: 18, background: "var(--ls-bg-cream)", borderRadius: 14 }}>
            <span className="ls-eyebrow">Selo de honestidade</span>
            <p style={{ margin: "6px 0 0", fontSize: 12.5, color: "var(--ls-text)", lineHeight: 1.6 }}>
              Fotografamos o caimento sem retoque digital. O que você vê aqui é o que chega na sua casa.
            </p>
          </div>
        </div>

        {/* col central: imagem grande de caimento */}
        <div>
          <Photo src="assets/products/short-vichy-rosa-pai-filho-2.jpg" radius={18} aspect="3/4.2" />
          <div className="row row--sb" style={{ marginTop: 10, fontSize: 11, color: "var(--ls-text-muted)", letterSpacing: "0.06em" }}>
            <span>Modelo · 1,82m · 78kg · Veste M</span>
            <span style={{ textDecoration: "underline", color: "var(--ls-navy)" }}>Ver em outros corpos ↗</span>
          </div>
        </div>

        {/* col direita: ficha de compra */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span className="ls-tag ls-tag--rose">Best Seller Masculino · Vichy Rosa</span>
          <div>
            <span className="ls-eyebrow">Lili Sampedro</span>
            <h1 className="ls-h1" style={{ fontSize: 32, margin: "8px 0 6px", lineHeight: 1.05 }}>Short Masculino<span className="ls-print-name">Vichy Rosa</span></h1>
            <div className="row gap-2" style={{ fontSize: 12 }}>
              <span className="ls-stars">★★★★★</span>
              <span style={{ color: "var(--ls-text)" }}>4,8</span>
              <span style={{ color: "var(--ls-text-muted)" }}>· 312 avaliações verificadas</span>
            </div>
            <span style={{ fontSize: 12, color: "var(--ls-forest)", fontWeight: 500 }}>96% recomendam · 92% "veste como esperado"</span>
          </div>

          <PriceBlock />
          <SwatchRow />
          <SizeRow active="M" />

          {/* mini fit-finder */}
          <div style={{ padding: 14, border: "1px dashed var(--ls-border)", borderRadius: 14, display: "flex", gap: 12, alignItems: "center" }}>
            <span style={{ fontSize: 22 }}>📏</span>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: 13, color: "var(--ls-navy)", fontWeight: 500 }}>Encontre seu tamanho em 30s</span>
              <p style={{ margin: "2px 0 0", fontSize: 11, color: "var(--ls-text-muted)" }}>3 perguntas e a gente recomenda.</p>
            </div>
            <button className="ls-btn ls-btn--outline" style={{ padding: "10px 14px", minHeight: 0, fontSize: 10 }}>Começar</button>
          </div>

          <button className="ls-btn ls-btn--primary ls-btn--block ls-btn--lg">
            Adicionar à Sacola
          </button>

          {/* trust micro-grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: 11.5 }}>
            {[
              ["Troca grátis", "30 dias · sem perguntas"],
              ["Site seguro", "pagamento criptografado"],
              ["10× sem juros", "ou 5% off no Pix"],
              ["Frete grátis", "acima de R$ 600,00"],
            ].map(([t, s]) => (
              <div key={t} style={{ padding: "10px 12px", background: "var(--ls-bg-cream)", borderRadius: 8 }}>
                <div style={{ color: "var(--ls-navy)", fontWeight: 500 }}>{t}</div>
                <div style={{ color: "var(--ls-text-muted)", fontSize: 10.5 }}>{s}</div>
              </div>
            ))}
          </div>

          {/* CEP */}
          <div style={{ borderTop: "1px solid var(--ls-border)", paddingTop: 14 }}>
            <span className="ls-pdp__label">Calcular frete e prazo</span>
            <div style={{ display: "flex", marginTop: 8, border: "1px solid var(--ls-border)", borderRadius: 999, overflow: "hidden" }}>
              <span style={{ flex: 1, padding: "12px 18px", fontSize: 12, color: "var(--ls-text-faint)" }}>00000-000</span>
              <button style={{ background: "var(--ls-navy)", color: "#fff", padding: "0 22px", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>Calcular</button>
            </div>
          </div>
        </aside>
      </section>

      {/* ── COMO VESTE: 3 corpos ────────────────────────────── */}
      <section className="sec sec--cream" style={{ marginTop: 56 }}>
        <div className="sec__head" style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <span className="ls-eyebrow">Como veste</span>
            <h3 className="ls-h1" style={{ marginTop: 8 }}>Caimento, sem retoque.</h3>
          </div>
          <p style={{ maxWidth: 360, fontSize: 13.5, color: "var(--ls-text)", lineHeight: 1.65 }}>
            Para evitar troca por tamanho, mostramos o mesmo short em três corpos diferentes,
            com referência de altura e peso.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {[
            { src: "assets/products/short-vichy-rosa-casal.jpg", t: "Modelo 01", m: "1,72m · 68kg · veste P", d: "Comprimento bate 4 dedos acima do joelho. Cintura folgada." },
            { src: "assets/products/short-vichy-rosa-pai-filho-2.jpg", t: "Modelo 02", m: "1,82m · 78kg · veste M", d: "Caimento de referência. Cordão fixo discretamente amarrado." },
            { src: "assets/products/short-vichy-rosa-look.jpg", t: "Modelo 03", m: "1,88m · 92kg · veste G", d: "Bate logo acima do joelho. Sem aperto na cintura." },
          ].map(it => (
            <div key={it.t}>
              <Photo src={it.src} radius={16} />
              <div style={{ marginTop: 12 }}>
                <span style={{ fontSize: 13, color: "var(--ls-navy)", fontWeight: 500 }}>{it.t}</span>
                <p style={{ margin: "2px 0 4px", fontSize: 11, color: "var(--ls-text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{it.m}</p>
                <p style={{ margin: 0, fontSize: 12.5, color: "var(--ls-text)" }}>{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TABELA DE MEDIDAS aberta ─────────────────────────── */}
      <section className="sec">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56 }}>
          <div>
            <span className="ls-eyebrow">Sem modal · sem clique extra</span>
            <h3 className="ls-h1" style={{ marginTop: 8, marginBottom: 14 }}>
              Tabela de medidas, aberta.
            </h3>
            <p style={{ fontSize: 13.5, color: "var(--ls-text)", lineHeight: 1.7 }}>
              Confira aqui mesmo, sem precisar abrir nova janela. Medidas em cm,
              com o short fechado e relaxado.
            </p>
            <div style={{ marginTop: 22 }}>
              <span className="ls-eyebrow">Como medir</span>
              <ol style={{ marginTop: 10, paddingLeft: 18, fontSize: 13, color: "var(--ls-text)", lineHeight: 1.7 }}>
                <li>Pegue uma fita métrica de costura.</li>
                <li>Meça a cintura na altura em que você costuma usar o short.</li>
                <li>Meça o quadril na parte mais larga.</li>
                <li>Compare com a tabela ao lado.</li>
              </ol>
            </div>
          </div>
          <div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, borderRadius: 12, overflow: "hidden" }}>
              <thead>
                <tr style={{ background: "var(--ls-navy)", color: "#fff" }}>
                  {["Tam.", "Cintura", "Quadril", "Comprimento", "Equivale a"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "14px 16px", fontWeight: 500, letterSpacing: "0.12em", fontSize: 11, textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["P", "72–76 cm", "94–98 cm", "46 cm", "38–40"],
                  ["M", "78–82 cm", "100–104 cm", "47 cm", "42–44"],
                  ["G", "84–88 cm", "106–110 cm", "48 cm", "46–48"],
                  ["GG", "90–94 cm", "112–116 cm", "49 cm", "50"],
                  ["XG", "96–100 cm", "118–122 cm", "50 cm", "52"],
                ].map((r, i) => (
                  <tr key={r[0]} style={{ background: i % 2 === 0 ? "#fff" : "var(--ls-bg-cream)", borderBottom: "1px solid var(--ls-border-soft)" }}>
                    {r.map((c, j) => (
                      <td key={j} style={{ padding: "14px 16px", color: j === 0 ? "var(--ls-navy)" : "var(--ls-text)", fontWeight: j === 0 ? 500 : 400 }}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Tecnologia do tecido (brand icons) ──────────────── */}
      <section className="sec sec--cream sec--tight">
        <div className="sec__head sec__head--center" style={{ marginBottom: 24 }}>
          <span className="ls-eyebrow">Tecnologia do tecido</span>
          <h3 className="ls-h1" style={{ fontSize: 36 }}>Conforto que se prova.</h3>
        </div>
        <BenefitRow orientation="col" />
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────── */}
      <section className="sec">
        <div className="row row--sb" style={{ marginBottom: 28 }}>
          <div>
            <span className="ls-eyebrow">Quem comprou diz</span>
            <h3 className="ls-h1" style={{ marginTop: 6, fontSize: 36 }}>
              4,8 <span className="ls-stars">★★★★★</span>{" "}
              <span style={{ fontSize: 16, color: "var(--ls-text-muted)" }}>· 312 avaliações verificadas</span>
            </h3>
          </div>
          <div style={{ display: "flex", gap: 18, fontSize: 12, color: "var(--ls-text)" }}>
            <span><b>96%</b> recomendam</span>
            <span><b>92%</b> "veste como esperado"</span>
            <span><b>88%</b> recomprariam</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[["Caimento", 92, "fiel"], ["Tecido", 88, "leve"], ["Estampa", 96, "vibrante"], ["Durabilidade", 84, "ótima"]].map(([k, p, w]) => (
              <div key={k}>
                <div className="row row--sb" style={{ fontSize: 12, marginBottom: 4 }}>
                  <span style={{ color: "var(--ls-navy)" }}>{k}</span>
                  <span style={{ color: "var(--ls-text-muted)" }}>{p}% · "{w}"</span>
                </div>
                <div style={{ height: 4, background: "var(--ls-border)", borderRadius: 4 }}>
                  <div style={{ height: 4, width: `${p}%`, background: "var(--ls-coral)", borderRadius: 4 }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              ["Marina S.", "Comprei para o marido", "Caiu exatamente como na foto. Comprei o M, ele tem 1,80m e ficou perfeito. Já vou comprar a estampa nova."],
              ["Pedro V.", "Verão na Bahia", "Tecido seca rapidíssimo, dá pra sair da água e ir almoçar sem incomodar. Forro confortável."],
              ["Ana L.", "Kit família", "Comprei o vichy rosa pra mim, pro marido e pro meu filho. Ficou um sonho. Vale o investimento."],
              ["Rafael T.", "Achei pelo Instagram", "Premium de verdade. O cordão é fixo, não enrola, e a estampa não desbota como a do concorrente que eu tinha."],
            ].map(([n, t, q]) => (
              <div key={n} style={{ background: "var(--ls-bg-cream)", padding: 22, borderRadius: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                <div className="row row--sb" style={{ fontSize: 12 }}>
                  <span><b style={{ color: "var(--ls-navy)" }}>{n}</b> <span className="muted">· {t}</span></span>
                  <span className="ls-stars">★★★★★</span>
                </div>
                <p style={{ margin: 0, fontSize: 13, color: "var(--ls-text)", lineHeight: 1.65, fontFamily: "var(--ls-font-serif)" }}>
                  "{q}"
                </p>
                <span className="ls-eyebrow" style={{ color: "var(--ls-forest)" }}>Compra verificada</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trocas / frete / segurança em destaque ──────────── */}
      <section className="sec sec--cream-warm sec--tight">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            ["Troca grátis · 30 dias", "Se não serviu ou mudou de ideia, devolvemos por conta nossa. Etiqueta já vem na sacola."],
            ["Frete rastreável", "Despacho em até 48h úteis a partir do nosso ateliê em Garopaba. SP capital em 24h."],
            ["Pagamento seguro", "Cartão criptografado, Pix com 5% off, parcelamento sem juros em até 10×."],
          ].map(([t, d]) => (
            <div key={t} style={{ background: "#fff", padding: 28, borderRadius: 16, border: "1px solid var(--ls-border-soft)" }}>
              <h4 className="serif" style={{ fontSize: 22, color: "var(--ls-navy)" }}>{t}</h4>
              <p style={{ marginTop: 10, fontSize: 13, color: "var(--ls-text)", lineHeight: 1.65 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── outros shorts masculinos ──────────────────────────── */}
      <section className="sec sec--tight">
        <div className="row row--sb" style={{ marginBottom: 18 }}>
          <h3 className="ls-h1" style={{ fontSize: 28 }}>Outros shorts masculinos</h3>
          <span style={{ fontSize: 12, color: "var(--ls-navy)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Ver categoria →</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {[
            ["Short Vichy Verde", "R$ 398,00", "assets/products/short-vichy-verde.webp"],
            ["Short Xadrez Verde", "R$ 348,00", "assets/products/short-xadrez-verde.webp"],
            ["Camiseta UV Branco", "R$ 298,00", "assets/products/camiseta-uv-branco.webp"],
            ["Infantil Xadrez Verde", "R$ 248,00", "assets/products/infantil-xadrez-verde.webp"],
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

window.AltC = AltC;
