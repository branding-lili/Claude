/* global React */
// Shared brand components — Lili Sampedro PDP studies.
// All visual tokens via var(--ls-*) from ds/colors_and_type.css.

// ── photo helper: uses the brand's real photography ─────────────
function Photo({ src, alt = "", aspect = "3/4", radius = 18, style, children }) {
  return (
    <div style={{
      position: "relative",
      aspectRatio: aspect,
      borderRadius: radius,
      overflow: "hidden",
      background: "var(--ls-bg-cream)",
      ...style }}>
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      {children}
    </div>
  );
}

// ── PROMO STRIP (brand marquee) ─────────────────────────────────
function PromoStrip() {
  const items = [
    "10% NA SUA PRIMEIRA COMPRA",
    "FRETE GRÁTIS ACIMA DE R$ 600,00",
    "ATÉ 10X SEM JUROS",
    "5% OFF NO PIX",
  ];
  const loop = [...items, ...items, ...items];
  return (
    <div className="ls-promo">
      <div className="ls-promo__track">
        {loop.map((t, i) => <span key={i} className="ls-promo__item">{t}</span>)}
      </div>
    </div>
  );
}

// ── ICON (theme inline SVGs) ────────────────────────────────────
function Icon({ name, size = 18 }) {
  const s = { width: size, height: size, stroke: "currentColor", fill: "none", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "search": return <svg viewBox="0 0 24 24" {...s}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case "user":   return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>;
    case "bag":    return <svg viewBox="0 0 24 24" {...s}><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>;
    case "heart":  return <svg viewBox="0 0 24 24" {...s}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
    case "plus":   return <svg viewBox="0 0 24 24" {...s}><path d="M12 5v14M5 12h14"/></svg>;
    case "minus":  return <svg viewBox="0 0 24 24" {...s}><path d="M5 12h14"/></svg>;
    case "menu":   return <svg viewBox="0 0 24 24" {...s}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
    case "settings": return <svg viewBox="0 0 24 24" {...s}><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M19.4 13a7.6 7.6 0 0 0 .05-2l2-1.6-2-3.4-2.4.8a7.5 7.5 0 0 0-1.7-1L15 3h-4l-.4 2.5a7.5 7.5 0 0 0-1.7 1l-2.4-.8-2 3.4 2 1.6a7.6 7.6 0 0 0 .05 2l-2 1.6 2 3.4 2.4-.8a7.5 7.5 0 0 0 1.7 1L11 21h4l.4-2.5a7.5 7.5 0 0 0 1.7-1l2.4.8 2-3.4z"/></svg>;
    case "wa":     return <svg viewBox="0 0 24 24" {...s}><path d="M20.5 12a8.5 8.5 0 0 1-12.7 7.4L3 21l1.6-4.7A8.5 8.5 0 1 1 20.5 12z"/></svg>;
    case "ruler":  return <svg viewBox="0 0 24 24" {...s}><path d="M3 14 14 3l7 7L10 21l-7-7z"/><path d="m7 12 2 2M10 9l2 2M13 6l2 2"/></svg>;
    case "truck":  return <svg viewBox="0 0 24 24" {...s}><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>;
    case "shield": return <svg viewBox="0 0 24 24" {...s}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "gift":   return <svg viewBox="0 0 24 24" {...s}><path d="M4 9h16v4H4zM4 13v8h16v-8M12 9v12M12 9c-2 0-4-2-2-4s4 4 2 4zM12 9c2 0 4-2 2-4s-4 4-2 4z"/></svg>;
    default: return null;
  }
}

// ── HEADER (desktop) ────────────────────────────────────────────
function LSHeader({ current = "masculino" }) {
  const nav = [
    { id: "novidades", label: "Novidades", caret: false },
    { id: "feminino",  label: "Feminino",  caret: true  },
    { id: "masculino", label: "Masculino", caret: true  },
    { id: "infantil",  label: "Infantil",  caret: true  },
    { id: "estampas",  label: "Estampas",  caret: true  },
  ];
  return (
    <header>
      <PromoStrip />
      <div className="ls-header__row">
        <a className="ls-header__logo">
          <img src="assets/logo-lili-sampedro.svg" alt="Lili Sampedro" />
        </a>
        <nav className="ls-header__nav">
          {nav.map(n => (
            <a key={n.id}
              className={`ls-header__navlink ${current === n.id ? "is-active" : ""}`}>
              {n.label}{n.caret ? <span style={{ opacity: 0.6, marginLeft: 4, fontSize: 9 }}>▾</span> : null}
            </a>
          ))}
          <a className="ls-header__pill">Montar Kit Família</a>
        </nav>
        <div className="ls-header__actions">
          <Icon name="search" />
          <span style={{ position: "relative", display: "inline-flex" }}>
            <Icon name="settings" />
            <span className="ls-header__dot" />
          </span>
          <Icon name="user" />
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <Icon name="bag" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}

// ── BREADCRUMB ──────────────────────────────────────────────────
function LSCrumb({ trail = ["Início", "Masculino", "Shorts", "Vichy Rosa"] }) {
  return (
    <div className="ls-pdp__crumbs">
      {trail.map((t, i) => (
        <span key={i} className={i === trail.length - 1 ? "is-current" : ""}>{t}</span>
      ))}
    </div>
  );
}

// ── FOOTER ──────────────────────────────────────────────────────
function LSFooter() {
  return (
    <footer className="ls-footer">
      <div className="ls-footer__newsletter">
        <h3 className="ls-footer__nh">Newsletter</h3>
        <p className="ls-footer__np">
          Assine e fique por dentro das últimas coleções, ofertas exclusivas e dicas de estilo.
        </p>
        <form className="ls-footer__form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Seu melhor email" />
          <button type="submit">Inscrever-se</button>
        </form>
      </div>
      <div className="ls-footer__cols">
        <div>
          <h4>Universo Lili</h4>
          <ul><li>Sobre a Marca</li><li>Nossas Estampas</li><li>Blog Lili</li><li>Lojas Lili</li></ul>
        </div>
        <div>
          <h4>Área do Cliente</h4>
          <ul><li>Minha conta</li><li>Rastreamento de Pedido</li><li>Solicitar troca</li><li>Tabela de Medida</li><li>Dicas de Uso</li></ul>
        </div>
        <div>
          <h4>Segurança &amp; Confiança</h4>
          <ul><li>Dúvidas Frequentes</li><li>Trocas e Devoluções</li><li>Políticas de Frete</li><li>Proteção de dados</li></ul>
        </div>
        <div>
          <h4>Nossas Redes</h4>
          <ul><li>Compre por WhatsApp</li><li>Instagram</li><li>TikTok</li><li>YouTube</li><li>Pinterest</li></ul>
        </div>
      </div>
      <div className="ls-footer__legal">
        <span>© 2026 Lili Sampedro · Todos os direitos reservados · CNPJ 126.236.290/0001-77</span>
        <span>Com tecnologia da Shopify</span>
      </div>
    </footer>
  );
}

// ── CONCEPT TAG (artboard header) ──────────────────────────────
function ConceptTag({ letter, name, sub }) {
  return (
    <div className="concept-tag">
      <span className="concept-tag__letter">{letter}</span>
      <span>{name}</span>
      <span className="concept-tag__sub">{sub}</span>
    </div>
  );
}

// ── MOBILE chrome ──────────────────────────────────────────────
function LSPromoMobile({ text = "FRETE GRÁTIS ACIMA DE R$ 600,00" }) {
  return <div className="mob-promo">{text}</div>;
}

function LSHeaderMobile() {
  return (
    <header className="mob-header">
      <button className="mob-header__menu"><Icon name="menu" size={22} /></button>
      <a className="mob-header__logo" style={{ justifySelf: "center" }}>
        <img src="assets/logo-lili-mobile.svg" alt="Lili Sampedro" />
      </a>
      <div style={{ display: "inline-flex", gap: 14, alignItems: "center" }}>
        <Icon name="search" size={20} />
        <button className="mob-header__cart">
          <Icon name="bag" size={20} />
        </button>
      </div>
    </header>
  );
}

function LSCrumbMobile({ trail = ["Masculino", "Shorts", "Vichy Rosa"] }) {
  return (
    <div className="mob-crumb">
      {trail.map((t, i) => (
        <span key={i} className={i === trail.length - 1 ? "is-current" : ""}>{t}</span>
      ))}
    </div>
  );
}

function LSFooterMobile() {
  return (
    <footer className="mob-footer">
      <img src="assets/logo-lili-sampedro.svg" alt="Lili Sampedro" style={{ height: 16, margin: "0 auto" }} />
      <p style={{ fontSize: 11, color: "var(--ls-text-muted)", marginTop: 12, lineHeight: 1.6 }}>
        Atendimento · Trocas · Frete · Tabela de Medidas
      </p>
      <p className="mob-footer__legal">© 2026 Lili Sampedro</p>
    </footer>
  );
}

// ── PRICE BLOCK ────────────────────────────────────────────────
// 10× é o destaque visual; valor cheio fica como referência abaixo.
function PriceBlock({ size = "md" }) {
  const big = size === "lg";
  return (
    <div className="ls-priceblock">
      <span className="ls-priceblock__install"
        style={{ fontSize: big ? 30 : 24 }}>
        10× <b>R$ 39,80</b> sem juros
      </span>
      <span className="ls-priceblock__full">
        R$ 398,00 à vista · R$ 378,10 no Pix (5% off)
      </span>
    </div>
  );
}

// ── SIZE selector ──────────────────────────────────────────────
function SizeRow({ active = "M", showFitNote = true }) {
  const sizes = ["P", "M", "G", "GG", "XG"];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div className="row row--sb">
        <span className="ls-pdp__label">Tamanho <b>{active}</b></span>
        <span style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--ls-navy)", textTransform: "uppercase", textDecoration: "underline", textUnderlineOffset: 4 }}>
          Tabela de Medidas
        </span>
      </div>
      <div className="ls-sizes">
        {sizes.map(s => (
          <span key={s} className={`ls-size${s === active ? " is-on" : ""}${s === "XG" ? " is-out" : ""}`}>{s}</span>
        ))}
      </div>
      {showFitNote && (
        <span style={{ fontSize: 11.5, color: "var(--ls-text-muted)" }}>
          Modelo veste <b>M</b> · 1,82m · 78kg
        </span>
      )}
    </div>
  );
}

// ── PRINT SWATCHES (vichy variants) ───────────────────────────
function SwatchRow({ active = "vichy-rosa" }) {
  const prints = [
    { id: "vichy-rosa", label: "Vichy Rosa", src: "assets/swatches/vichy-rosa.png" },
    { id: "vichy-verde", label: "Vichy Verde", src: "assets/swatches/vichy-verde.png" },
    { id: "vichy-azul", label: "Vichy Azul", src: "assets/swatches/vichy-azul.png" },
    { id: "listras", label: "Listras", src: "assets/swatches/listras-azul-escuro.png" },
  ];
  const sel = prints.find(p => p.id === active);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <span className="ls-pdp__label">Estampa <b>{sel?.label}</b></span>
      <div className="ls-swatches">
        {prints.map(p => (
          <button key={p.id}
            className={`ls-swatch${p.id === active ? " is-on" : ""}`}
            style={{ backgroundImage: `url(${p.src})` }}
            title={p.label}
          />
        ))}
      </div>
    </div>
  );
}

// ── BENEFIT row (brand's 4 SVG icons) ──────────────────────────
function BenefitRow({ orientation = "row" }) {
  const items = [
    { icon: "assets/icons/protecao-uv.svg",   name: "Proteção UV 50+" },
    { icon: "assets/icons/aloe-vera.svg",     name: "Aloe Vera" },
    { icon: "assets/icons/anti-bacteriano.svg", name: "Antibacteriano" },
    { icon: "assets/icons/anti-odor.svg",     name: "Anti-odor" },
  ];
  return (
    <div className="ls-benefits">
      {items.map(it => (
        <div key={it.name} className={`ls-benefit${orientation === "col" ? " ls-benefit--col" : ""}`}>
          <img src={it.icon} alt="" />
          <span>{it.name}</span>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  Photo, Icon, PromoStrip,
  LSHeader, LSCrumb, LSFooter, ConceptTag,
  LSPromoMobile, LSHeaderMobile, LSCrumbMobile, LSFooterMobile,
  PriceBlock, SizeRow, SwatchRow, BenefitRow });
