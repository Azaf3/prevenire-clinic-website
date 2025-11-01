# Prevenire - Site da Clínica de Saúde Mental

Site responsivo e moderno para a clínica de saúde mental Prevenire, desenvolvido com React e Tailwind CSS.

## 🏥 Sobre a Prevenire

A Prevenire é uma clínica de saúde mental localizada em Gama-DF, especializada em cuidado preventivo para sua saúde mental. Nossa equipe é composta por psicanalistas e terapeutas qualificados.

**Informações de Contato:**
- 📍 Localização: Gama-DF, Edifício Central, 2º andar
- 📱 WhatsApp: (61) 98467-0305
- 📧 Instagram: @prevenire_
- 🗺️ Google Maps: https://g.co/kgs/Y6qbwyv

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos
- **React Router** - Roteamento de páginas

## 📁 Estrutura do Projeto

```
prevenire-fp/
├── public/
│   ├── favicon.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Cabeçalho com navegação
│   │   ├── Footer.jsx          # Rodapé com informações
│   │   ├── Layout.jsx          # Layout principal
│   │   └── WhatsAppButton.jsx  # Botão flutuante do WhatsApp
│   ├── pages/
│   │   ├── Home.jsx            # Página inicial
│   │   ├── Team.jsx            # Página da equipe
│   │   ├── Services.jsx        # Página de serviços
│   │   ├── Blog.jsx            # Página do blog
│   │   └── Contact.jsx         # Página de contato
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx               # Ponto de entrada
│   └── index.css              # Estilos globais
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## �️ Adicionando Imagens

### Como adicionar suas próprias imagens:

1. **Coloque as imagens na pasta `public/images/`**
2. **Substitua os arquivos placeholder pelos seus:**
   - `logo.svg` → Sua logo (120x40px)
   - `logo-hero.svg` → Logo grande (160x160px)
   - `gildazio.svg` → Foto do Gildazio (300x400px)
   - `thauanne.svg` → Foto da Thauanne (300x400px)

### Formatos aceitos:
- PNG (recomendado para logos com transparência)
- JPG (recomendado para fotos)
- SVG (recomendado para logos vetoriais)

### Onde as imagens aparecem:
- **Header**: Logo ao lado de "Prevenire"
- **Home**: Logo grande substituindo o coração
- **Footer**: Logo no rodapé
- **Equipe**: Fotos dos profissionais

## �🔧 Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação:

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/prevenire-fp.git
cd prevenire-fp
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse o site:**
Abra seu navegador e vá para `http://localhost:3000`

### Scripts disponíveis:

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## 🎨 Características do Design

### Paleta de Cores
- **Primária:** #1E8548 (Verde saúde)
- **Secundária:** Tons de cinza e branco
- **Acentos:** Gradientes suaves

### Tipografia
- **Fonte:** Inter (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700

### Responsividade
- Design mobile-first
- Breakpoints otimizados para todos os dispositivos
- Layout fluido e adaptável

## 📱 Funcionalidades

### Páginas Implementadas:

1. **Home**
   - Banner principal com call-to-action
   - Seção sobre a clínica
   - Depoimentos de pacientes
   - Estatísticas e diferenciais

2. **Equipe**
   - Perfis dos profissionais
   - Especialidades e formações
   - Botões de agendamento direto

3. **Serviços**
   - Cards detalhados dos serviços
   - Preços e durações
   - Processo de atendimento
   - FAQ

4. **Blog**
   - Grid de artigos
   - Sistema de filtros por categoria
   - Busca por conteúdo
   - Artigos em destaque

5. **Contato**
   - Formulário de contato
   - Informações de localização
   - Mapa integrado
   - Botões de ação rápida

### Componentes Especiais:

- **WhatsApp Button:** Botão flutuante para contato direto
- **Header:** Navegação responsiva com menu mobile
- **Footer:** Links e informações de contato
- **Animações:** Transições suaves com Framer Motion

## 🔍 SEO e Performance

### Otimizações implementadas:
- Meta tags completas em todas as páginas
- Open Graph tags para redes sociais
- Schema markup para negócios locais
- Títulos e descrições únicos por página
- Imagens otimizadas
- Carregamento lazy
- Performance otimizada

## 📞 Integração WhatsApp

O site possui integração completa com WhatsApp:
- Botão flutuante sempre visível
- Links diretos com mensagens pré-definidas
- Agendamento facilitado
- Contato direto com profissionais específicos

## 🚀 Deploy

Para fazer o deploy em produção:

1. **Gere a build:**
```bash
npm run build
```

2. **Os arquivos estarão na pasta `dist/`**

3. **Faça upload para seu servidor ou use serviços como:**
   - Vercel
   - Netlify
   - GitHub Pages

## 🤝 Contribuição

Este projeto foi desenvolvido especificamente para a Clínica Prevenire. Para sugestões ou melhorias, entre em contato através do WhatsApp (61) 98467-0305.

## 📄 Licença

Este projeto é propriedade da Clínica Prevenire. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a Prevenire**

*Cuidado preventivo para sua saúde mental!*