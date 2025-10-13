# HotelSys - Sistema de Gestão Hoteleira

## Descrição

O **HotelSys** é um sistema completo de gestão hoteleira desenvolvido exclusivamente com tecnologias front-end (HTML, CSS e JavaScript). O sistema foi projetado com um design moderno e intuitivo, utilizando as cores branca, laranja (#ff6b35) e preta (#1a1a1a), oferecendo uma experiência visual profissional e contemporânea.

## Características Principais

### 🎨 Design Moderno
- Interface responsiva e intuitiva
- Paleta de cores profissional (branco, laranja, preto)
- Animações suaves e micro-interações
- Tipografia moderna (Inter)
- Ícones Font Awesome

### 🔐 Sistema de Autenticação
- Tela de login segura
- Múltiplos usuários pré-configurados
- Persistência de sessão via localStorage
- Validação de credenciais

### 📊 Dashboard Interativo
- Estatísticas em tempo real
- Gráficos de ocupação semanal
- Atividades recentes
- Cards informativos com métricas importantes

### 🏨 Gestão de Quartos
- Cadastro e edição de quartos
- Diferentes tipos (Standard, Deluxe, Suíte, Presidential)
- Controle de status (Disponível, Ocupado, Manutenção)
- Visualização em grid responsivo

### 📅 Sistema de Reservas
- Criação e edição de reservas
- Controle de disponibilidade automático
- Diferentes status (Confirmada, Check-in, Check-out, Cancelada)
- Cálculo automático de valores
- Busca e filtros avançados

### 👥 Gestão de Clientes
- Cadastro completo de clientes
- Histórico detalhado de estadias
- Sistema de pontuação (Bronze, Silver, Gold, VIP)
- Perfil detalhado com estatísticas
- Timeline de atividades

### 📈 Relatórios e Análises
- Gráficos interativos (Chart.js)
- Relatório de ocupação mensal
- Análise de receita
- Top clientes
- Distribuição por tipos de quarto
- Exportação de dados em CSV

### 💰 Módulo Financeiro
- Controle de receitas e despesas
- Categorização de transações
- Cálculo automático de lucro líquido
- Fluxo de caixa por período
- Relatórios financeiros detalhados

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização avançada com variáveis CSS, Grid e Flexbox
- **JavaScript ES6+**: Lógica de negócio e interatividade
- **Chart.js**: Gráficos interativos
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia (Inter)
- **LocalStorage**: Persistência de dados

## Estrutura do Projeto

```
hotel_system/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos principais
├── js/
│   ├── app.js             # Aplicação principal
│   ├── auth.js            # Módulo de autenticação
│   ├── dashboard.js       # Módulo do dashboard
│   ├── reservas.js        # Módulo de reservas
│   ├── quartos.js         # Módulo de quartos
│   ├── clientes.js        # Módulo de clientes
│   ├── relatorios.js      # Módulo de relatórios
│   └── financeiro.js      # Módulo financeiro
└── README.md              # Documentação
```

## Como Usar

### 1. Acesso ao Sistema
- Abra o arquivo `index.html` em um navegador web moderno
- Use uma das credenciais pré-configuradas:
  - **admin** / **admin123** (Administrador)
  - **gerente** / **gerente123** (Gerente)
  - **recepcionista** / **recepcao123** (Recepcionista)

### 2. Navegação
- Use o menu lateral para navegar entre os módulos
- Cada seção possui funcionalidades específicas
- Os dados são salvos automaticamente no localStorage

### 3. Funcionalidades por Módulo

#### Dashboard
- Visualize estatísticas gerais do hotel
- Acompanhe a ocupação semanal
- Veja atividades recentes

#### Quartos
- Cadastre novos quartos com informações detalhadas
- Gerencie status e disponibilidade
- Visualize reservas por quarto

#### Reservas
- Crie novas reservas selecionando cliente e quarto
- Acompanhe o status das reservas
- Realize check-in e check-out
- Use filtros para encontrar reservas específicas

#### Clientes
- Cadastre clientes com informações completas
- Visualize histórico de estadias
- Acompanhe pontuação e status
- Gerencie clientes ativos e inativos

#### Relatórios
- Analise gráficos de ocupação e receita
- Veja ranking de melhores clientes
- Exporte dados para análise externa

#### Financeiro
- Registre receitas e despesas
- Categorize transações
- Acompanhe fluxo de caixa
- Gere relatórios financeiros

## Dados Iniciais

O sistema vem com dados de demonstração pré-configurados:

### Quartos
- 4 quartos de diferentes tipos
- Status variados para demonstração

### Clientes
- 3 clientes com diferentes perfis
- Histórico de reservas

### Reservas
- 2 reservas ativas
- Diferentes status para demonstração

### Transações
- Receitas e despesas de exemplo
- Diferentes categorias

## Recursos Técnicos

### Responsividade
- Design adaptável para desktop, tablet e mobile
- Grid system flexível
- Componentes que se ajustam automaticamente

### Performance
- Código otimizado e modular
- Carregamento eficiente de recursos
- Animações suaves com CSS3

### Usabilidade
- Interface intuitiva e fácil de usar
- Feedback visual para ações do usuário
- Notificações informativas
- Validações em tempo real

### Acessibilidade
- Estrutura semântica HTML5
- Contraste adequado de cores
- Navegação por teclado
- Ícones com significado claro

## Compatibilidade

### Navegadores Suportados
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Dispositivos
- Desktop (1920x1080 e superiores)
- Laptop (1366x768 e superiores)
- Tablet (768x1024)
- Mobile (375x667 e superiores)

## Personalização

### Cores
As cores principais podem ser alteradas no arquivo `styles.css`:
```css
:root {
    --primary-color: #ff6b35;      /* Laranja principal */
    --primary-dark: #e55a2b;       /* Laranja escuro */
    --secondary-color: #1a1a1a;    /* Preto */
    --background-color: #ffffff;    /* Branco */
}
```

### Funcionalidades
- Cada módulo é independente e pode ser customizado
- Fácil adição de novas funcionalidades
- Estrutura modular permite extensões

## Considerações para TCC

### Pontos Fortes
- **Design Profissional**: Interface moderna e atrativa
- **Funcionalidade Completa**: Sistema abrangente para gestão hoteleira
- **Tecnologia Atual**: Uso de tecnologias web modernas
- **Responsividade**: Adaptável a diferentes dispositivos
- **Código Limpo**: Estrutura organizada e bem documentada

### Possíveis Melhorias Futuras
- Integração com banco de dados real
- Sistema de backup e restore
- Relatórios mais avançados
- Integração com APIs de pagamento
- Sistema de notificações push

## Licença

Este projeto foi desenvolvido para fins acadêmicos (TCC) e está disponível para uso educacional.

## Suporte

Para dúvidas ou sugestões sobre o sistema, consulte a documentação do código ou entre em contato com o desenvolvedor.

---

**HotelSys** - Sistema de Gestão Hoteleira Moderno e Intuitivo
