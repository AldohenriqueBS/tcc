# Alterações Realizadas no Projeto - Versão 2

Este documento detalha as alterações feitas no projeto conforme sua segunda solicitação:

## 1. Pop-up de Visualização e Download de Relatórios

As funções de exportação de relatórios na página `relatorios.html` foram modificadas para abrir um pop-up de visualização antes de iniciar o download.

*   **Página Afetada:** `relatorios.html`.
*   **Funcionalidade:** Ao clicar em qualquer botão de relatório, um modal é aberto exibindo o conteúdo do relatório em formato de tabela HTML.
*   **Opções no Pop-up:**
    *   **Imprimir/Visualizar Impressão:** Abre a janela de impressão do navegador com o conteúdo do relatório formatado.
    *   **Baixar Excel:** Inicia o download do arquivo `.xlsx` (Excel), utilizando a lógica implementada na versão anterior.

## Como Testar

Para testar as alterações, siga os passos abaixo:

1.  **Baixe o projeto** e descompacte-o.
2.  **Abra o arquivo `index.html`** em um navegador moderno (Chrome, Firefox, Edge).
3.  **Página de Relatórios:**
    *   Navegue para a aba **Relatórios**.
    *   Clique em qualquer um dos botões de exportação (ex: **📊 Relatório Geral Completo**).
    *   Verifique se um **pop-up (modal)** é aberto, exibindo o relatório em formato de tabela.
    *   Dentro do pop-up, clique em **🖨️ Imprimir/Visualizar Impressão** e verifique se a janela de impressão é aberta.
    *   Dentro do pop-up, clique em **⬇️ Baixar Excel** e verifique se o arquivo `.xlsx` é baixado.

