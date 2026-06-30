import Navbar from "../../../components/Navbar";
import styles from "../frameworks.module.css";

export default function DjangoPage() {
  return (
    <div className={`${styles.page} ${styles.django}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Django</h1>

          <p>
            Django é um framework web de alto nível desenvolvido em Python,
            usado para criar aplicações web seguras, escaláveis e organizadas.
          </p>

          <p>
            Ele já vem com vários recursos prontos, como autenticação, painel
            administrativo, ORM, sistema de rotas, formulários e integração com
            banco de dados.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principais características</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Python</span>
            <span className={styles.card}>ORM</span>
            <span className={styles.card}>Admin automático</span>
            <span className={styles.card}>Autenticação</span>
            <span className={styles.card}>MVT</span>
            <span className={styles.card}>Segurança</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Arquitetura MVT</h2>

          <p>
            Django utiliza o padrão MVT: Model, View e Template. Essa estrutura
            separa dados, lógica e interface.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`Model
↓
View
↓
Template
↓
Usuário`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Instalação</h2>

          <pre className={styles.codeBlock}>
            <code>{`python -m venv venv

venv\\Scripts\\activate

pip install django`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Criando um projeto</h2>

          <pre className={styles.codeBlock}>
            <code>{`django-admin startproject meu_projeto

cd meu_projeto

python manage.py runserver`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Criando uma aplicação</h2>

          <pre className={styles.codeBlock}>
            <code>{`python manage.py startapp usuarios`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Estrutura básica</h2>

          <pre className={styles.codeBlock}>
            <code>{`meu_projeto/
├── manage.py
├── meu_projeto/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
└── usuarios/
    ├── models.py
    ├── views.py
    ├── admin.py
    └── apps.py`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Models</h2>

          <p>
            Models representam tabelas do banco de dados. Cada classe pode virar
            uma tabela e cada atributo pode virar uma coluna.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`from django.db import models

class Produto(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.DecimalField(max_digits=10, decimal_places=2)`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Migrações</h2>

          <p>
            Migrações transformam alterações nos Models em mudanças reais no
            banco de dados.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`python manage.py makemigrations

python manage.py migrate`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Views</h2>

          <p>
            Views recebem uma requisição, executam uma lógica e retornam uma
            resposta.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`from django.http import HttpResponse

def home(request):
    return HttpResponse("Olá Django!")`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>URLs</h2>

          <p>
            O arquivo de URLs define quais rotas apontam para quais views.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`from django.urls import path
from .views import home

urlpatterns = [
    path("", home),
]`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Admin</h2>

          <p>
            O Django possui um painel administrativo pronto, muito útil para
            gerenciar dados do sistema.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`python manage.py createsuperuser`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Django x Flask x FastAPI</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Framework</th>
                <th>Característica</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Django</td>
                <td>Completo, estruturado e com muitos recursos prontos.</td>
              </tr>

              <tr>
                <td>Flask</td>
                <td>Leve, flexível e simples.</td>
              </tr>

              <tr>
                <td>FastAPI</td>
                <td>Focado em APIs modernas, rápidas e tipadas.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Vem com muitos recursos prontos.</li>
            <li>Possui ORM integrado.</li>
            <li>Tem painel administrativo automático.</li>
            <li>Boa segurança por padrão.</li>
            <li>Ótimo para sistemas grandes e completos.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Pode ser pesado para projetos muito pequenos.</li>
            <li>Tem mais estrutura para aprender.</li>
            <li>Menos flexível que microframeworks como Flask.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Django é uma excelente escolha para criar sistemas web completos com
            Python. Ele entrega organização, segurança, produtividade e muitos
            recursos prontos para acelerar o desenvolvimento.
          </p>
        </section>
      </main>
    </div>
  );
}