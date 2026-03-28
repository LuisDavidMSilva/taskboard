# TaskBoard

![logo](./src/assets/taskboard_logo.png)

Kanban board simples feito com React + Node.js + Express + PostgreSQL + Prisma.

## Pré-requisitos

- Node.js
- PostgreSQL instalado e rodando

## Como rodar localmente

Clone os dois repositórios:
```bash
git clone https://github.com/LuisDavidMSilva/taskboard.git
git clone https://github.com/LuisDavidMSilva/taskboard-api.git
```

### API
```bash
cd taskboard-api
npm install
```

Edite o arquivo `.env` com a URL do seu banco:
```
DATABASE_URL="postgresql://seu_usuario@localhost:5432/taskboard"
```
```bash
npx prisma migrate dev
npm run dev
```

### Front-end
```bash
cd taskboard
npm install
npm run dev
```

Acesse http://localhost:5173 ou veja publicado (localStorage apenas) em https://luisdavidmsilva.github.io/taskboard/