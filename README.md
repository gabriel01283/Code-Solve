# Solve Code

## Sobre o projeto

O **Solve Code** é uma aplicação web criada para auxiliar estudantes iniciantes no aprendizado de programação. O sistema apresenta conteúdos sobre linguagens de programação e permite que usuários se cadastrem, façam login, acessem seu perfil e interajam por meio de comentários.

O projeto foi desenvolvido para a disciplina **Programação para Web**, utilizando front-end, API REST e banco de dados relacional.

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
└── README.md
```

## Como executar o projeto

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
pip install fastapi uvicorn psycopg2-binary bcrypt "python-jose[cryptography]" python-dotenv
```

### 4. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
SECRET_KEY=sua_chave_secreta_aqui
```

O arquivo `.env` não deve ser enviado para o GitHub.

### 5. Configurar o banco de dados

O projeto utiliza PostgreSQL.

Crie um banco de dados local e configure a conexão no arquivo:

```text
back_end/database/connection.py
```

Cada desenvolvedor deve usar as próprias configurações de banco, como nome do banco, usuário, senha, host e porta.

### 6. Executar o back-end

```bash
uvicorn back_end.main:app --reload
```

A API ficará disponível em:

```text
http://127.0.0.1:8000
```

A documentação automática da API pode ser acessada em:

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

As rotas de perfil, criação de comentário e exclusão de comentário exigem autenticação JWT.

## Banco de dados

O sistema utiliza PostgreSQL para armazenar os dados da aplicação.

Tabelas principais:

* `users`
* `comments`

A tabela `comments` possui relação com a tabela `users`.

## Segurança

* As senhas dos usuários são armazenadas com hash utilizando bcrypt.
* A autenticação é feita com JWT.
* Informações sensíveis devem ficar em variáveis de ambiente e não devem ser enviadas para o repositório.

## Deploy

Status atual:

```text
Deploy ainda não realizado.
```

Quando o deploy for concluído, adicionar os links abaixo:

```text
Front-end: inserir link aqui
Back-end/API: inserir link aqui
```

## Melhorias futuras

* Implementar controle de permissões com RBAC
* Adicionar painel administrativo
* Integrar completamente a área de comentários ao front-end
* Criar novas tabelas e funcionalidades
* Melhorar o tratamento de erros da API
* Realizar deploy completo da aplicação

## Desenvolvedor

Gabriel Saraiva

Maria Clara

## Licença

Projeto desenvolvido para fins acadêmicos.
