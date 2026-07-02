# 🚀 Code Solve

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" />
  <img src="https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi" />
  <img src="https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql" />
  <img src="https://img.shields.io/badge/TypeScript-Frontend-3178C6?logo=typescript" />
  <img src="https://img.shields.io/badge/Python-3.12-3776AB?logo=python" />
</p>

<p align="center">
Uma plataforma web voltada para o aprendizado e compartilhamento de conteúdos sobre programação.
</p>

---

# 📖 Sobre o Projeto

O **Code Solve** é um projeto desenvolvido para a disciplina de **Programação Web**, com o objetivo de reunir conteúdos relacionados a linguagens de programação em uma plataforma moderna e intuitiva.

A aplicação permite que usuários criem uma conta, realizem login, interajam por meio de comentários e respostas, adicionem linguagens aos seus interesses e denunciem conteúdos quando necessário.

O projeto foi desenvolvido utilizando uma arquitetura **Full Stack**, separando Front-end e Back-end através de uma API REST.

---

# 🌐 Deploy

## Front

https://code-solve-next.onrender.com

## Back

https://code-solve.onrender.com

## Documentação da API (Swagger)

https://code-solve.onrender.com/docs

---

# 🛠 Tecnologias Utilizadas

## Front-end

- Next.js
- React
- TypeScript
- CSS Modules

## Back-end

- Python
- FastAPI
- JWT (JSON Web Token)
- bcrypt
- psycopg2

## Banco de Dados

- PostgreSQL

---

# ✨ Funcionalidades

## Usuários

- Cadastro de usuários
- Login
- Logout
- Autenticação JWT
- Perfil do usuário
- Rotas protegidas

---

## Perfil

O perfil apresenta:

- Nome
- Email
- Quantidade de comentários realizados
- Quantidade de interesses cadastrados

---

## Comentários

- Criar comentários
- Visualizar comentários
- Remover comentários próprios

---

## Respostas

- Responder comentários
- Listar respostas
- Excluir respostas próprias

---

## Linguagens

- Cadastro de linguagens
- Listagem de linguagens
- Pesquisa por ID
- Exclusão de linguagens
- Seed automático de linguagens

---

## Interesses

Cada usuário pode:

- adicionar linguagens aos seus interesses;
- visualizar seus interesses;
- remover interesses.

---

## Denúncias

- denunciar comentários;
- visualizar denúncias;
- remover denúncias.


# 📁 Estrutura do Projeto

```text
Code-Solve/
│
├── app/
│   ├── cadastro/
│   ├── cards/
│   ├── comentarios/
│   ├── components/
│   ├── desenvolvedores/
│   ├── login/
│   ├── perfil/
│   ├── sobre/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── back_end/
│   ├── auth/
│   ├── comment_replies/
│   ├── comments/
│   ├── database/
│   ├── interests/
│   ├── languages/
│   ├── reports/
│   ├── usuarios/
│   └── main.py
│
├── img/
├── lib/
├── public/
├── package.json
├── requirements.txt
├── Procfile
├── next.config.ts
├── tsconfig.json
└── README.md

```

---

# 🔗 Endpoints da API

**Base URL**

```text
https://code-solve.onrender.com
```

**Documentação (Swagger)**

```text
https://code-solve.onrender.com/docs
```

## Usuários

| Método | Endpoint  |
| ------ | --------- |
| POST   | /register |
| POST   | /login    |
| GET    | /perfil   |

---

## Comentários

| Método | Endpoint               |
| ------ | ---------------------- |
| POST   | /comments              |
| GET    | /comments              |
| DELETE | /comments/{comment_id} |

---

## Respostas

| Método | Endpoint                       |
| ------ | ------------------------------ |
| POST   | /comments/{comment_id}/replies |
| GET    | /comments/{comment_id}/replies |
| DELETE | /replies/{reply_id}            |

---

## Linguagens

| Método | Endpoint                 |
| ------ | ------------------------ |
| GET    | /languages               |
| POST   | /languages               |
| GET    | /languages/{language_id} |
| POST   | /languages/seed          |
| DELETE | /languages/{language_id} |

---

## Interesses

| Método | Endpoint                 |
| ------ | ------------------------ |
| POST   | /interests/{language_id} |
| GET    | /perfil/interests        |
| DELETE | /interests/{language_id} |

---

## Denúncias

| Método | Endpoint              |
| ------ | --------------------- |
| POST   | /reports/{comment_id} |
| GET    | /reports              |
| DELETE | /reports/{report_id}  |

---

# 🔐 Autenticação

A aplicação utiliza **JWT (JSON Web Token)** para autenticação.

Após o login, o usuário recebe:

* Access Token
* Refresh Token

As rotas protegidas utilizam o cabeçalho:

```text
Authorization: Bearer SEU_TOKEN
```

---

# ▶️ Como executar o projeto

## 1. Clone o repositório

```bash
git clone https://github.com/gabriel01283/Code-Solve.git
cd Code-Solve
```

---

## 2. Instale as dependências do Front-end

```bash
npm install
```

---

## 3. Configure a variável de ambiente

Crie um arquivo `.env.local` na raiz do projeto.

Para utilizar o backend hospedado:

```env
NEXT_PUBLIC_API_URL=https://code-solve.onrender.com
```

Ou, para desenvolvimento local:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 4. Instale as dependências do Back-end

```bash
pip install -r requirements.txt
```

---

## 5. Execute o Back-end

```bash
uvicorn back_end.main:app --reload
```

---

## 6. Execute o Front-end

```bash
npm run dev
```

---

# 📦 Scripts

```bash
npm run dev
```

Inicia o Front-end em desenvolvimento.

```bash
npm run build
```

Gera a build de produção.

```bash
npm run start
```

Executa a aplicação em produção.

```bash
npm run lint
```

Executa a análise de código.

---

# 🎯 Objetivo do Projeto

O Code Solve foi desenvolvido para colocar em prática os principais conceitos de desenvolvimento web full stack, incluindo:

* Desenvolvimento Front-end com Next.js;
* Desenvolvimento Back-end com FastAPI;
* Construção de APIs REST;
* Autenticação com JWT;
* Integração com banco de dados PostgreSQL;
* Organização de projetos Full Stack;
* Consumo de APIs utilizando TypeScript.

---

# 📄 Licença

Este projeto possui finalidade exclusivamente acadêmica e não possui fins comerciais.
