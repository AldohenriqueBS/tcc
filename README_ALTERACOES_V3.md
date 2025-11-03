# Alterações Realizadas no Projeto - Versão 3 (Relatórios)

A página de relatórios (`relatorios.html`) foi totalmente refeita para ser mais visual e funcional, conforme solicitado.

## 1. Nova Estrutura de Relatórios

A página agora apresenta:

*   **KPIs (Indicadores Chave de Desempenho):** Receita Total, Despesas Totais, Total de Reservas e Taxa de Ocupação.
*   **Filtros de Período:** Permite filtrar os dados exibidos nos KPIs e gráficos por data de início e fim.
*   **Gráficos:**
    *   **Movimentação Financeira:** Gráfico de barras comparando Receitas e Despesas.
    *   **Taxa de Ocupação por Tipo de Quarto:** Gráfico de pizza mostrando a distribuição de ocupação.
    *   **Clientes por Período:** Gráfico de barras simples mostrando o número de clientes nos últimos 30 dias.
*   **Relatórios Detalhados:** Botões para gerar relatórios detalhados em formato de tabela.

## 2. Funcionalidade de Visualização e Exportação

*   **Pop-up de Visualização:** Ao clicar em qualquer botão de relatório detalhado, um modal é aberto exibindo o conteúdo em formato de tabela HTML.
*   **Opções no Pop-up:**
    *   **Imprimir/Visualizar Impressão:** Abre a janela de impressão do navegador.
    *   **Baixar Excel:** Inicia o download do arquivo `.xlsx` (Excel).

## Como Testar

1.  **Baixe o projeto** e descompacte-o.
2.  **Abra o arquivo `index.html`** em um navegador moderno.
3.  **Página de Relatórios:**
    *   Navegue para a aba **Relatórios**.
    *   Verifique se os KPIs e os gráficos estão sendo carregados corretamente (assumindo que você tem dados no Firebase).
    *   Tente usar os **Filtros de Período** e verifique se os KPIs e gráficos são atualizados.
    *   Clique em qualquer um dos botões de **Relatórios Detalhados** (ex: **📊 Relatório Geral de Reservas**).
    *   Verifique se o **pop-up (modal)** é aberto, exibindo o relatório em formato de tabela.
    *   Dentro do pop-up, teste os botões **Imprimir/Visualizar Impressão** e **Baixar Excel**.

