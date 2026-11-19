# Clínica Prevenire

Site institucional da Clínica Prevenire, clínica de psicologia. Apresenta a equipe e os serviços e facilita o agendamento de consulta pelo WhatsApp ou pelo formulário de contato.

🔗 **No ar:** https://clinicaprevenire.com.br

![Página inicial do site](docs/screenshot.jpg)

## Funcionalidades

- **5 páginas:** Início, Equipe, Serviços, Blog e Contato
- **Formulário de contato** que envia e-mail direto do front-end com EmailJS, sem backend
- **Botão de WhatsApp** sempre visível pra marcar consulta
- **Animações** de entrada e transição com Framer Motion
- Layout responsivo

## Stack

- React 18 + Vite
- React Router
- Tailwind CSS
- Framer Motion
- EmailJS
- Lucide Icons

## Rodando localmente

```bash
npm install
npm run dev
```

## Estrutura

```
src/
├── components/   Header, Footer, Layout, WhatsAppButton
└── pages/        Home, Team, Services, Blog, Contact
```
