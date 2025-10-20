# ReservaAí - Sistema de Reservas de Hotelaria

Sistema completo de gerenciamento de reservas de hotel desenvolvido com HTML, CSS, JavaScript e integrado ao Firebase Cloud Firestore.

## 🚀 Funcionalidades

- **Autenticação de Usuários**: Login e registro com Firebase Authentication
- **Dashboard**: Visão geral com estatísticas em tempo real
- **Gerenciamento de Quartos**: CRUD completo de quartos
- **Gerenciamento de Clientes**: CRUD completo de clientes
- **Gerenciamento de Reservas**: Sistema completo de reservas com cálculo automático de valores
- **Relatórios**: Estatísticas detalhadas, filtros por período e status
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile

## 📋 Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para acessar Firebase)

## 🔧 Instalação e Configuração

### 1. Primeiro Acesso

1. Abra o arquivo `init-admin.html` no navegador
2. Clique em "Criar Usuário Admin" para criar o usuário administrador padrão
3. Aguarde a confirmação e redirecionamento

### 2. Credenciais Padrão

- **E-mail**: admin@reservaai.com
- **Senha**: admin123

### 3. Estrutura de Arquivos

```
ReservaAi/
├── firebase-config.js      # Configuração do Firebase
├── styles.css              # Estilos globais
├── init-admin.html         # Inicialização do admin
├── login.html              # Tela de login
├── register.html           # Tela de registro
├── index.html              # Dashboard
├── quartos.html            # Gerenciamento de quartos
├── clientes.html           # Gerenciamento de clientes
├── reservas.html           # Gerenciamento de reservas
├── relatorios.html         # Relatórios e estatísticas
└── README.md               # Este arquivo
```

## 🎨 Paleta de Cores

O sistema utiliza uma paleta de cores profissional para o setor hoteleiro:

- **Azul Escuro** (#1a3a52): Cor primária - confiança e profissionalismo
- **Dourado** (#d4af37): Cor secundária - luxo e qualidade
- **Azul Médio** (#2c5f7f): Cor de destaque
- **Cinza Claro** (#f5f5f5): Fundo

## 📱 Responsividade

O sistema é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet**: Layout adaptado com navegação otimizada
- **Mobile**: Interface simplificada e touch-friendly

## 🔐 Segurança

- Autenticação via Firebase Authentication
- Validação de sessão em todas as páginas
- Proteção de rotas (redirecionamento automático se não autenticado)

## 📊 Banco de Dados

O sistema utiliza as seguintes coleções no Firestore:

### Coleção: `usuarios`
- uid (string)
- nome (string)
- email (string)
- dataCadastro (timestamp)
- ativo (boolean)

### Coleção: `quartos`
- numero (string)
- tipo (string)
- capacidade (number)
- preco (number)
- descricao (string)
- status (string): disponivel, ocupado, manutencao
- dataCriacao (timestamp)
- dataAtualizacao (timestamp)

### Coleção: `clientes`
- nome (string)
- cpf (string)
- email (string)
- telefone (string)
- endereco (string)
- cidade (string)
- estado (string)
- observacoes (string)
- dataCriacao (timestamp)
- dataAtualizacao (timestamp)

### Coleção: `reservas`
- clienteId (string)
- nomeCliente (string)
- quartoId (string)
- numeroQuarto (string)
- checkIn (timestamp)
- checkOut (timestamp)
- numeroPessoas (number)
- valorTotal (number)
- observacoes (string)
- status (string): ativa, confirmada, cancelada, finalizada
- dataCriacao (timestamp)
- dataAtualizacao (timestamp)

## 🚀 Como Usar

### 1. Fazer Login
1. Acesse `login.html`
2. Use as credenciais padrão ou crie uma nova conta em `register.html`

### 2. Cadastrar Quartos
1. Acesse "Quartos" no menu
2. Clique em "+ Novo Quarto"
3. Preencha os dados e salve

### 3. Cadastrar Clientes
1. Acesse "Clientes" no menu
2. Clique em "+ Novo Cliente"
3. Preencha os dados e salve

### 4. Criar Reservas
1. Acesse "Reservas" no menu
2. Clique em "+ Nova Reserva"
3. Selecione cliente e quarto
4. Defina as datas de check-in e check-out
5. O valor total será calculado automaticamente
6. Salve a reserva

### 5. Visualizar Relatórios
1. Acesse "Relatórios" no menu
2. Visualize estatísticas gerais
3. Use os filtros para análises específicas

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura das páginas
- **CSS3**: Estilização e responsividade
- **JavaScript (ES6+)**: Lógica da aplicação
- **Firebase Authentication**: Autenticação de usuários
- **Cloud Firestore**: Banco de dados NoSQL em tempo real
- **Firebase Analytics**: Análise de uso

## 📝 Notas Importantes

1. **Primeira Execução**: Execute `init-admin.html` apenas uma vez para criar o usuário administrador
2. **Conexão Internet**: O sistema requer conexão com internet para funcionar
3. **Navegadores Suportados**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
4. **Dados em Tempo Real**: Todas as alterações são sincronizadas em tempo real com o Firestore

## 🔄 Atualizações Futuras

Possíveis melhorias:

- Sistema de notificações por e-mail
- Integração com gateway de pagamento
- Exportação de relatórios em PDF
- Sistema de check-in/check-out automatizado
- Gestão de funcionários e permissões
- Integração com calendário

## 📞 Suporte

Para dúvidas ou problemas, verifique:

1. Console do navegador (F12) para mensagens de erro
2. Conexão com internet
3. Configurações do Firebase

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de demonstração.

---

**Desenvolvido com ❤️ para o setor hoteleiro**

