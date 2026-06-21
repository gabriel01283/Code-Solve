# Solve Code

## Sobre o projeto

O **Solve Code** é uma aplicação web criada para auxiliar estudantes iniciantes no aprendizado de programação. O sistema apresenta conteúdos sobre linguagens de programação e permite que usuários se cadastrem, façam login, acessem seu perfil e interajam por meio de comentários.

O projeto foi desenvolvido para a disciplina **Programação para Web**, utilizando front-end, API REST, autenticação com JWT, banco de dados PostgreSQL e deploy online.

## Deploy

Front-end:

```text
https://code-solve-front.onrender.com
```

Back-end/API:

```text
https://code-solve.onrender.com
```

Documentação da API:

```text
https://code-solve.onrender.com/docs
```

## Funcionalidades

* Página inicial do projeto
* Páginas de conteúdos sobre linguagens de programação
* Página sobre o site
* Página de desenvolvedores
* Cadastro de usuários
* Login de usuários
* Perfil do usuário autenticado
* Criação de comentários
* Listagem de comentários
* Exclusão de comentários
* Cadastro de linguagens
* Listagem de linguagens
* Busca de linguagem por ID
* Exclusão de linguagens
* Autenticação com JWT
* Senhas protegidas com hash

## Tecnologias utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript

### Back-end

* Python
* FastAPI
* Uvicorn
* Pydantic
* Python-Jose
* Bcrypt
* Python-dotenv

### Banco de dados

* PostgreSQL
* Psycopg2
* Supabase

### Deploy

* Render

### Versionamento

* Git
* GitHub

## Estrutura do projeto

```text
Code-Solve/
│
├── back_end/
│   ├── auth/
│   ├── comments/
│   ├── database/
│   ├── languages/
│   ├── usuarios/
│   └── main.py
│
├── parte_HTML/
│   ├── cards/
│   ├── comentarios/
│   ├── criadores/
│   ├── sobre/
│   ├── usuario/
│   ├── cards_geral.html
│   └── index.html
│
├── parte_CSS/
│
├── img/
│
├── document/
│
├── index.html
├── requirements.txt
├── Procfile
├── .gitignore
└── README.md
```

## Como executar o projeto localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/gabriel01283/Code-Solve.git
cd Code-Solve
```

### 2. Criar ambiente virtual

```bash
python -m venv .venv
```

No Windows:

```bash
.venv\Scripts\activate
```

### 3. Instalar dependências

```bash
pip install -r requirements.txt
```

### 4. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto.

Exemplo usando banco local:

```env
SECRET_KEY=sua_chave_secreta_aqui
DB_NAME=nome_do_banco
DB_USER=usuario_do_banco
DB_PASSWORD=senha_do_banco
DB_HOST=localhost
DB_PORT=5432
```

Exemplo usando banco online:

```env
SECRET_KEY=sua_chave_secreta_aqui
DATABASE_URL=sua_url_do_banco_aqui
```

O arquivo `.env` não deve ser enviado para o GitHub.

### 5. Configurar o banco de dados

O projeto utiliza PostgreSQL.

As tabelas são criadas pelo back-end ao iniciar a aplicação, utilizando o arquivo:

```text
back_end/database/init_db.py
```

Cada desenvolvedor deve usar as próprias configurações de banco, como nome do banco, usuário, senha, host e porta.

### 6. Executar o back-end

```bash
uvicorn back_end.main:app --reload
```

A API local ficará disponível em:

```text
http://127.0.0.1:8000
```

A documentação automática da API local pode ser acessada em:

```text
http://127.0.0.1:8000/docs
```

### 7. Executar o front-end

O front-end pode ser executado com uma extensão como **Live Server** ou outro servidor local.

Página inicial:

```text
parte_HTML/index.html
```

## Endpoints principais

### Usuários

```http
POST /register
POST /login
GET /perfil
```

### Comentários

```http
GET /comments
POST /comments
DELETE /comments/{comment_id}
```

### Linguagens

```http
GET /languages
POST /languages
GET /languages/{language_id}
DELETE /languages/{language_id}
```

As rotas de perfil, criação de comentário, exclusão de comentário, criação de linguagem e exclusão de linguagem exigem autenticação JWT.

## Banco de dados

O sistema utiliza PostgreSQL para armazenar os dados da aplicação.

Tabelas principais:

* `users`
* `comments`
* `languages`

A tabela `comments` possui relação com a tabela `users`.

## Segurança

* As senhas dos usuários são armazenadas com hash utilizando bcrypt.
* A autenticação é feita com JWT.
* Informações sensíveis devem ficar em variáveis de ambiente e não devem ser enviadas para o repositório.
* O arquivo `.env` está protegido pelo `.gitignore`.

## Melhorias futuras

* Implementar controle de permissões com RBAC
* Adicionar painel administrativo
* Melhorar o tratamento de erros da API
* Melhorar a interface da área de comentários
* Adicionar edição de comentários
* Adicionar edição de perfil do usuário

## Desenvolvedores

Gabriel Saraiva

Maria Clara

## Licença

Projeto desenvolvido para fins acadêmicos.
