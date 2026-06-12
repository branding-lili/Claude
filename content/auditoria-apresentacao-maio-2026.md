# Auditoria: Apresentação de Resultados — Maio 2026
**Preparado por:** Danilo Braga (branding@lilisampedro.com.br)  
**Referência:** Reunião "Fechamento da semana" — 12/06/2026  
**Apresentadora:** Josi (site@lilisampedro.com.br)

---

## Resumo executivo

A apresentação da Josi está tecnicamente bem construída, com visualizações úteis e iniciativas relevantes. No entanto, há **4 pontos de interpretação que merecem revisão** — alguns chegam próximo a falácias de raciocínio — e **5 lacunas de dados** que comprometem a capacidade de tomar decisões mais assertivas. O documento abaixo detalha cada um.

---

## ✅ O que está correto e deve ser mantido

### 1. Anomalia do Linktree (urgente)
A suspeita levantada é válida e importante. O salto de ~R$11k em abril para R$46k em maio, enquanto o Instagram Pago despencou de ~R$69k para R$11k, é estatisticamente inconsistente com qualquer padrão histórico. Verificar UTMs das campanhas ativas em maio com a Dânia é a ação correta.

### 2. 91% mobile → PDP mobile
Os dados são sólidos. Se 91% das sessões vêm de celular e a taxa de conversão geral está em 0,41%, qualquer melhoria na experiência mobile tem impacto desproporcional. A sugestão de reformular a PDP para mobile é pertinente.

### 3. Análise RFM e segmentação de base dormente
A metodologia está correta. Identificar clientes com 1.600 dias desde a última compra como segmento de "nutrição" (não conversão) é a abordagem certa. O planejamento de segmentar e disparar e-mails separados por grupo para medir engajamento residual é sólido.

### 4. Redirecionamento de 404s (~2.000 páginas)
Ação de SEO tecnicamente correta. Páginas que retornam 404 perdem autoridade de domínio e prejudicam o rastreamento do Google. A iniciativa de corrigir esses redirecionamentos impacta positivamente o SEO orgânico a médio prazo.

### 5. Planilha de vendas por canal
Excelente iniciativa. Visualizar a evolução mês a mês por canal de origem é fundamental para decisões de mídia. O próximo passo natural é incluir taxa de conversão por canal (não só receita).

---

## ⚠️ Pontos que merecem revisão crítica

### 1. "Taxa de recorrência de 50% = melhora na fidelização"

**Conclusão apresentada:** A recorrência de clientes dobrou (de ~29% em 2025 para 50% em maio 2026), o que seria sinal de fidelização crescente.

**Problema:** Essa é uma **falácia de composição percentual**. A taxa percentual aumentou porque o **volume de novos clientes caiu muito mais** do que o volume de recorrentes — não necessariamente porque mais clientes antigos voltaram. Em números absolutos, ambos os grupos (novos e recorrentes) encolheram em maio. O denominador ficou menor, inflando o percentual de recorrência artificialmente.

**O que verificar:** Quantos clientes recorrentes em números absolutos fizeram pedido em maio 2026 vs maio 2025? Se o número absoluto de recorrentes também caiu, a taxa de 50% não representa fidelização — representa ausência de aquisição nova.

---

### 2. "O público que está vindo agora é saudável"

**Conclusão apresentada:** Com sessões 67% abaixo mas vendas apenas 7% abaixo do ano passado, o público atual é mais qualificado.

**Problema:** A comparação mistura variáveis. Maio 2026 tem ticket médio significativamente maior (acima de R$1.200 vs base histórica anterior). Isso sozinho explica boa parte da resiliência de receita com menos sessões — **não necessariamente um público mais qualificado, mas um produto com preço médio mais alto**.

Além disso, um público menor e mais concentrado em recorrentes (que já conhecem a marca) tende a converter melhor por definição. A hipótese de "público saudável" só se sustentaria se a taxa de conversão de **novos visitantes** estivesse acima da média histórica de novos visitantes — dado que não foi apresentado.

**O que verificar:** Separar a taxa de conversão de visitantes novos vs recorrentes. Se a de novos estiver na média ou abaixo, o público não é estruturalmente mais saudável — apenas menor e mais familiar com a marca.

---

### 3. "A taxa de conversão se recuperou porque trocamos o checkout para Mercado Pago"

**Conclusão apresentada:** A melhora na taxa de conversão no final de maio coincide com a troca do gateway de pagamento de volta ao Mercado Pago.

**Problema:** Correlação temporal ≠ causalidade. A mesma janela de tempo (final de maio) coincidiu com:
- Reinício de campanhas que haviam sido pausadas
- Início das campanhas de Dia dos Namorados (22/05)
- Período natural de maior intenção de compra pré-evento

**O que verificar:** Rodar um período de 30 dias com checkout fixo (sem mudança de variáveis) e comparar taxa de conversão semana a semana para isolar o efeito do gateway. Sem isolamento de variáveis, a conclusão é prematura.

---

### 4. "O crescimento do Linktree é problema de parametrização das campanhas"

**Conclusão apresentada:** O crescimento anômalo do Linktree provavelmente se deve a UTMs configuradas incorretamente nas campanhas do Instagram.

**Avaliação:** Esta é a **hipótese mais provável**, mas não é a única possível:
- Pode haver **influenciadora com alto volume de tráfego** usando o Linktree bio em vez de URL direta, cujos cliques são atribuídos ao Linktree e não ao Instagram
- Pode existir uma **campanha paga rodando com UTM do tipo `utm_source=linktree`** intencionalmente (erro de configuração na criação da campanha)
- Pode ser que a **integração de rastreamento do Shopify com Instagram** tenha apresentado falha e desatribuído sessões do canal correto

**O que verificar:** Solicitar à Dânia o print das UTMs de todas as campanhas ativas em maio. Se nenhuma campanha tem `utm_source=linktree`, a origem do tráfego é influenciadora sem UTM própria.

---

## 🔍 Dados ausentes que comprometem a análise

| Dado faltante | Por que importa |
|---|---|
| **CAC por canal** | Sem custo de aquisição, não é possível saber se a queda do Instagram Pago é problema ou eficiência. Um canal com receita menor pode ter ROAS superior |
| **ROAS por campanha** | A queda de R$69k→R$11k no Instagram Pago pode ser positiva se o investimento também caiu proporcionalmente |
| **Taxa de abandono de checkout (separada do carrinho)** | Hoje a análise agrupa "adicionou ao carrinho" e "chegou ao checkout" mas não mede abandono específico na etapa de pagamento — dado crítico para avaliar impacto real do gateway |
| **LTV (Lifetime Value) dos clientes recorrentes** | Se os 50% de recorrentes têm LTV alto, isso muda completamente a estratégia de investimento em aquisição vs retenção |
| **Comparativo de campanhas ativas (não calendário)** | Comparar maio 2026 com maio 2025 é válido de calendário, mas se em maio 2025 a gente tinha 3 campanhas rodando e em 2026 tinha 1, a comparação de sessões perde contexto. Precisa de "sessões por R$1 investido" |

---

## 📋 Recomendações imediatas

1. **Solicitar à Dânia:** Print de todas as UTMs de campanhas ativas em maio + confirmação se alguma influenciadora usou Linktree bio sem UTM
2. **Pedir à Josi:** Tabela de clientes recorrentes em **números absolutos** (não apenas percentual) para maio 2025 vs maio 2026
3. **Criar meta de conversão por dispositivo:** Com 91% de sessões mobile, a taxa de conversão precisa ser medida separadamente para mobile e desktop
4. **Incluir nas próximas apresentações:** Conversão por tipo de página (PDP vs coleção vs home) e conversão por dispositivo — como você mesmo sugeriu na reunião
5. **Testar checkout isolado:** 30 dias sem mudanças paralelas para validar se Mercado Pago realmente impacta conversão de forma isolada

---

## Conclusão

A apresentação é um trabalho sólido de análise operacional. Os pontos de atenção acima não invalidam o trabalho — eles refinam as conclusões para que as decisões tomadas com base neles sejam mais precisas. A Josi demonstra domínio da ferramenta e visão analítica; o ganho marginal está em adicionar camadas de controle de variáveis antes de atribuir causa-efeito.
