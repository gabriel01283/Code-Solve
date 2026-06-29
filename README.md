# Solve Code — Next.js

Frontend do projeto **Solve Code** migrado para **Next.js 16 (App Router)**.  
O backend FastAPI permanece igual ao original, sem alterações.

---

## Estrutura

```
code-solve-next/
├── app/
│   ├── layout.tsx            # Layout raiz
│   ├── globals.css           # Estilos globais (fundo animado, navbar, cards home)
│   ├── page.tsx              # Página inicial (/)
│   ├── components/Navbar.tsx # Navbar reutilizável
│   ├── login/                # /login
│   ├── cadastro/             # /cadastro
│   ├── perfil/               # /perfil (protegida por token)
│   ├── comentarios/          # /comentarios
│   ├── cards/
│   │   ├── page.tsx          # /cards (todos os cards)
│   │   └── linguagens/[slug] # /cards/linguagens/python, /java, etc.
│   ├── sobre/                # /sobre
│   └── desenvolvedores/      # /desenvolvedores
├── back_end/                 # Backend FastAPI (sem alterações)
├── lib/
│   ├── api.ts                # Helpers: API_URL, getToken, isLoggedIn, logout
│   └── languageContent.json  # Conteúdo HTML das páginas de linguagens
├── public/                   # Imagens e assets
├── requirements.txt          # Dependências Python
└── .env.local                # Variáveis de ambiente
```

---

## Como rodar

### 1. Frontend (Next.js)

```bash
cd code-solve-next
npm install
npm run dev
```

Acesse: http://localhost:3000

### 2. Backend (FastAPI) — em outro terminal

```bash
pip install -r requirements.txt
uvicorn back_end.main:app --reload --port 8000
```

### 3. Conectar ao backend local

Edite `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## Funcionalidades mantidas

- Página inicial com cards de linguagens
- Todos os Cards (linguagens, frameworks, Git, APIs, banco de dados)
- Páginas de conteúdo de cada linguagem (Python, Java, C++, JS, C#, Go, Rust, Kotlin, Swift, HTML, CSS)
- Login com JWT / Cadastro / Perfil com interesses
- Comentários (listar, criar, excluir)
- Adicionar interesses via botões nos cards
- Páginas Sobre e Desenvolvedores
- Proteção de rota do perfil

## Mapeamento de rotas

| Rota Next.js | HTML original |
|---|---|
| `/` | `index.html` |
| `/login` | `usuario/login.html` |
| `/cadastro` | `usuario/cadastro.html` |
| `/perfil` | `usuario/perfil.html` |
| `/comentarios` | `comentarios/comentarios.html` |
| `/cards` | `cards_geral.html` |
| `/cards/linguagens/python` | `cards/linguagens/python.html` |
| `/sobre` | `sobre/sobre_o_site.html` |
| `/desenvolvedores` | `criadores/criadores.html` |
