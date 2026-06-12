# Ideias, Hipóteses e Sugestões Estratégicas — Junho 2026
**Elaborado por:** Danilo Braga  
**Base:** Reunião "Fechamento da semana" 12/06/2026 + análise de dados de maio

---

## 1. Rastreamento e atribuição de canais

### Hipótese principal: o problema do Linktree é sistêmico, não pontual
O salto de R$11k para R$46k no canal Linktree provavelmente não é um erro isolado de uma campanha — é sintoma de uma prática não padronizada. Quando influenciadoras recebem acesso ao produto e divulgam pelo próprio Linktree sem UTM customizada, **toda a receita gerada aparece como "Linktree" no Shopify**, independentemente de a campanha ser paga ou não.

**Sugestão de ação:**
- Exigir URL direta de produto (com UTM específica por influenciadora) em todos os briefings futuros. Padrão sugerido: `utm_source=instagram&utm_medium=influencer&utm_campaign=[nome-influenciadora]`
- Criar template de URL parametrizada para influenciadoras no início de cada campanha
- Auditar retrospectivamente os meses com Linktree alto para identificar quais influenciadoras estavam ativas naquele período

---

## 2. Recuperação de sessões

### O gap de 67% é o problema mais urgente — e estrutural
Sessões 67% abaixo de um período que já era fraco (antes da programática de agosto/2025) indicam que o tráfego atual está anêmico. Os riscos em cascata:

- **SEO**: Google reduz frequência de rastreamento em sites com queda de tráfego. Menos crawl = indexação mais lenta dos novos conteúdos
- **Algoritmo de anúncios**: Campanhas de remarketing têm audiência menor, o que eleva CPM e reduz aprendizado do pixel
- **Concorrência**: O mercado de "kit família praia" está em crescimento (como citado na reunião — outras marcas usando o termo). Perder sessões agora é perder share of mind antes do pico de verão

**Sugestão de ação de curto prazo (junho-julho):**
- Retomar programática de awareness (como em agosto/2025) **antes** do pico de setembro, não junto com ele
- Os 10 posts de blog sobre kit família criados neste projeto já atacam as queries de busca orgânica e de IA — publicar com urgência

**Sugestão de médio prazo:**
- Criar calendário de ativação sazonal: datas-chave de 2026 (Dia dos Pais, Dia das Crianças, Réveillon, Carnaval 2027) já com blog posts + campanhas programadas com antecedência de 45 dias

---

## 3. Base dormente e estratégia de e-mail

### A base dormente tem valor, mas não de conversão — de credibilidade
Danilo levantou o ponto correto na reunião: clientes com 1.600 dias desde a última compra provavelmente eram de uma faixa de preço diferente (kit família por ~R$600 em 2020-2021 vs R$1.200+ atual). A probabilidade de conversão é baixa.

**Sugestão de segmentação:**
- **Tag de "audiência de reach"** (não conversão): manter no RD/Klaviyo para uso em pitch de co-branding ("nossa base totaliza X contatos ativos + Y contatos de audiência")
- **Fluxo de nutrição semestral** para dormentes: 1 e-mail por trimestre com conteúdo de lifestyle (não oferta), mantendo o domínio na mente e sustentando métricas de entregabilidade
- **Campanha de "adeus"** para inativos > 1.600 dias: oferta única de reativação com validade de 7 dias. Quem não abre ou clica, sai da lista principal mas entra na lista de "audiência reach"

**O que NÃO fazer:** remover da lista sem nenhuma campanha. Perda de ativo de co-branding e risco de reputação de domínio sem o benefício de entregabilidade (já que a baixa abertura já está acontecendo de qualquer forma).

---

## 4. Estratégia de IA e SEO conversacional

### Este é o maior diferencial competitivo disponível agora
O ponto levantado pela Josi sobre ChatGPT recomendando produtos em cards é **real e urgente**. O Google AI Overview e o ChatGPT Shopping já indexam páginas de e-commerce e artigos de blog para responder perguntas como:

- *"Qual é a melhor roupa de praia para família toda combinando?"*
- *"Onde comprar kit família de moda praia no Brasil?"*
- *"Roupa de praia combinada para família, qual marca?"*

**Por que a Lili Sampedro tem vantagem agora:**
- É uma das poucas marcas brasileiras com histórico real de kit família + blog ativo + domínio estabelecido
- Concorrentes ainda não têm volume de conteúdo sobre o tema
- Janela de oportunidade: 3-6 meses antes de grandes varejistas copiarem a estratégia

**O que fazer:**
1. Publicar os 10 posts de blog criados neste projeto **imediatamente** — eles estão otimizados para queries de IA
2. Estruturar dados (Schema.org `Product`, `Article`, `FAQPage`) nas PDPs e páginas de blog — IA prefere páginas com markup estruturado
3. Criar página de FAQ sobre kit família: *"O que é kit família?"*, *"Quais peças incluem um kit família?"*, *"Como combinar tamanhos diferentes?"* — perguntas diretamente respondidas pelo ChatGPT vêm de páginas de FAQ estruturadas

---

## 5. Checkout e taxa de conversão

### Hipótese alternativa para a queda de conversão
Além do gateway de pagamento, considerar:

- **Tempo de carregamento da PDP no mobile**: com 91% de sessões mobile, cada segundo a mais de carregamento reduz conversão em ~7% (benchmark Google). Investigar Core Web Vitals do site
- **Fricção no funil de seleção de tamanho**: em produtos de kit família, o cliente precisa selecionar tamanho para múltiplos membros da família antes de finalizar. Se a UX não facilita isso, o abandono de carrinho sobe naturalmente
- **Preço de entrada**: com ticket médio acima de R$1.200, o visitante novo precisa de mais "aquecimento" antes de converter. Isso explica por que tráfego de campanhas de awareness (baixo intent) converte mal quando comparado a tráfego orgânico ou recorrente

**Sugestão:** Criar uma landing page específica para Kit Família com visualizador de combinações ("monte seu kit") — isso reduz fricção cognitiva e aumenta tempo de sessão, dois fatores que melhoram conversão.

---

## 6. E-mail marketing — oportunidades não exploradas

### O canal de e-mail está subvalorizado
Com apenas 1 e-mail da RD gerando venda em maio, e o fluxo de carrinho abandonado ainda em estruturação, há espaço para ganhos rápidos:

**Ações de impacto imediato:**
- **E-mail de bestsellers mensais** (como sugerido na reunião): Seleção curada de 4 produtos (1 feminino adulto, 1 masculino, 1 infantil, 1 acessório) dos top 15 do mês anterior. Enviar no primeiro sábado de cada mês
- **E-mail de "nova estampa disponível"**: Cada lançamento de estampa nova (como o Vic Laranja que gerou boa performance) pode ter e-mail dedicado — não apenas dentro do fluxo geral
- **Sequência de boas-vindas para novos clientes**: Após primeira compra, sequência de 3 e-mails em 30 dias: (1) como cuidar das peças, (2) como montar seu kit família, (3) produtos complementares com desconto de segunda compra

**Sobre o fluxo de checkout abandonado:**
O problema técnico de não conseguir adicionar o 2º e-mail pode estar relacionado a limites do plano Shopify Messaging ou conflito entre fluxos duplicados. Sugestão: Diego verificar se os 3 fluxos criados estão em conflito (o Shopify pode estar impedindo a adição por já existir regra de supressão entre eles).

---

## 7. Co-branding e negociação com parceiros

### A base de e-mail é ativo de negociação — tratá-la como tal
Como mencionado na reunião, mesmo clientes dormentes têm valor em apresentações de parceria. Quando a marca apresenta um co-branding ou parceria para negociação, "base de contatos" é métrica relevante.

**Sugestão:**
- Criar segmento no RD com tag `audiencia-reach` para a base dormente
- No deck de parceria, apresentar separado: "clientes ativos" + "audiência de reach" + "seguidores sociais" = alcance total potencial da marca

---

## 8. Expansão geográfica

### Nordeste e Minas Gerais como novos mercados com momentum
A Josi mencionou crescimento de sessões do Nordeste e Minas Gerais já no início de junho. Isso é sinal de que as campanhas regionais começam a funcionar.

**Sugestão:**
- Blog post específico: *"Os melhores destinos de praia do Nordeste para o kit família Lili Sampedro"* — gera SEO local e valida presença na região
- Parceria com influenciadoras de Recife, Fortaleza e Salvador (com UTMs corretas) para capitalizar o momentum de audiência que já está chegando organicamente
- Verificar se o frete para o Nordeste é competitivo — fricção de entrega pode estar limitando conversão mesmo com sessões crescentes

---

## Priorização sugerida

| Prioridade | Ação | Impacto | Esforço |
|---|---|---|---|
| 🔴 Urgente | Auditoria UTMs com Dânia (Linktree) | Alto | Baixo |
| 🔴 Urgente | Publicar os 10 posts de blog no Shopify | Alto | Baixo |
| 🟡 Esta semana | Criar template UTM para influenciadoras | Médio | Baixo |
| 🟡 Esta semana | Configurar fluxo de checkout abandonado (Diego) | Alto | Médio |
| 🟡 Esta semana | E-mail de bestsellers mensais (piloto) | Médio | Baixo |
| 🟢 Próximas 2 semanas | Landing page Kit Família com visualizador | Alto | Alto |
| 🟢 Próximas 2 semanas | Schema.org nas PDPs e blog posts | Médio | Médio |
| 🟢 30 dias | Programática de awareness (pré-setembro) | Alto | Médio |
| 🟢 30 dias | Segmentação de base dormente + tag reach | Médio | Médio |
