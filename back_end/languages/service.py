from back_end.languages.queries import (
    insert_language,
    get_all_languages,
    get_language_by_id,
    delete_language,
    seed_languages
)


def create_language(name: str, description: str, category: str):
    if not name.strip():
        return {
            "success": False,
            "error": "language name is required"
        }

    if not description.strip():
        return {
            "success": False,
            "error": "language description is required"
        }

    if not category.strip():
        return {
            "success": False,
            "error": "language category is required"
        }

    try:
        language = insert_language(
            name.strip(),
            description.strip(),
            category.strip()
        )

        return {
            "success": True,
            "language": language
        }

    except Exception as error:
        if "duplicate key" in str(error):
            return {
                "success": False,
                "error": "language already exists"
            }

        return {
            "success": False,
            "error": str(error)
        }


def list_languages():
    return get_all_languages()


def find_language(language_id: int):
    language = get_language_by_id(language_id)

    if not language:
        return {
            "success": False,
            "error": "language not found"
        }

    return {
        "success": True,
        "language": language
    }


def remove_language(language_id: int):
    deleted = delete_language(language_id)

    if not deleted:
        return {
            "success": False,
            "error": "language not found"
        }

    return {
        "success": True,
        "message": "language deleted"
    }


def populate_languages():
    items = [
        {
            "name": "Python",
            "description": "Linguagem simples, poderosa e muito usada em backend, automação, dados e inteligência artificial.",
            "category": "Linguagem"
        },
        {
            "name": "Java",
            "description": "Linguagem orientada a objetos muito usada em sistemas corporativos e aplicações backend.",
            "category": "Linguagem"
        },
        {
            "name": "JavaScript",
            "description": "Linguagem essencial para desenvolvimento web, usada no frontend e também no backend.",
            "category": "Linguagem"
        },
        {
            "name": "HTML",
            "description": "Linguagem de marcação usada para estruturar páginas web.",
            "category": "Linguagem"
        },
        {
            "name": "CSS",
            "description": "Linguagem usada para estilizar páginas web.",
            "category": "Linguagem"
        },
        {
            "name": "C++",
            "description": "Linguagem de alto desempenho usada em sistemas, jogos e aplicações robustas.",
            "category": "Linguagem"
        },
        {
            "name": "C#",
            "description": "Linguagem usada em aplicações desktop, web, jogos e sistemas corporativos.",
            "category": "Linguagem"
        },
        {
            "name": "Go",
            "description": "Linguagem moderna focada em simplicidade, desempenho e aplicações backend.",
            "category": "Linguagem"
        },
        {
            "name": "Rust",
            "description": "Linguagem focada em segurança de memória, desempenho e sistemas de baixo nível.",
            "category": "Linguagem"
        },
        {
            "name": "Kotlin",
            "description": "Linguagem moderna usada em desenvolvimento Android e aplicações backend.",
            "category": "Linguagem"
        },
        {
            "name": "Swift",
            "description": "Linguagem usada no desenvolvimento de aplicativos para o ecossistema Apple.",
            "category": "Linguagem"
        },
        {
            "name": "React",
            "description": "Biblioteca JavaScript para criar interfaces de usuário.",
            "category": "Framework"
        },
        {
            "name": "Vue",
            "description": "Framework JavaScript progressivo para criação de interfaces.",
            "category": "Framework"
        },
        {
            "name": "Angular",
            "description": "Framework completo para criação de aplicações web.",
            "category": "Framework"
        },
        {
            "name": "Svelte",
            "description": "Framework moderno para criação de interfaces web rápidas e reativas.",
            "category": "Framework"
        },
        {
            "name": "Next.js",
            "description": "Framework baseado em React para aplicações web modernas.",
            "category": "Framework"
        },
        {
            "name": "Nuxt",
            "description": "Framework baseado em Vue para criação de aplicações web.",
            "category": "Framework"
        },
        {
            "name": "Spring Boot",
            "description": "Framework Java usado para criar aplicações backend robustas.",
            "category": "Framework"
        },
        {
            "name": "Django",
            "description": "Framework Python para desenvolvimento web rápido e seguro.",
            "category": "Framework"
        },
        {
            "name": "Flask",
            "description": "Microframework Python leve para desenvolvimento web.",
            "category": "Framework"
        },
        {
            "name": "Express",
            "description": "Framework Node.js usado para criar APIs e aplicações backend.",
            "category": "Framework"
        },
        {
            "name": "REST",
            "description": "Estilo de arquitetura usado na criação de APIs.",
            "category": "API"
        },
        {
            "name": "JSON",
            "description": "Formato leve de troca de dados muito usado em APIs.",
            "category": "API"
        },
        {
            "name": "HTTP Methods",
            "description": "Métodos como GET, POST, PUT e DELETE usados na comunicação HTTP.",
            "category": "API"
        },
        {
            "name": "Authentication",
            "description": "Processo de autenticação usado para proteger sistemas e APIs.",
            "category": "API"
        },
        {
            "name": "Rate Limits",
            "description": "Controle de quantidade de requisições permitidas em uma API.",
            "category": "API"
        },
        {
            "name": "GraphQL",
            "description": "Linguagem de consulta para APIs que permite buscar dados de forma flexível.",
            "category": "API"
        },
        {
            "name": "Webhooks",
            "description": "Mecanismo que permite sistemas enviarem notificações automáticas para outros sistemas.",
            "category": "API"
        },
        {
            "name": "Endpoints",
            "description": "URLs específicas usadas para acessar recursos de uma API.",
            "category": "API"
        },
        {
            "name": "CRUD",
            "description": "Conjunto de operações básicas: criar, ler, atualizar e deletar dados.",
            "category": "API"
        },
        {
            "name": "Swagger",
            "description": "Ferramenta usada para documentar e testar APIs.",
            "category": "API"
        },
        {
            "name": "SQL",
            "description": "Linguagem usada para consultar e manipular bancos de dados relacionais.",
            "category": "Banco de Dados"
        },
        {
            "name": "PostgreSQL",
            "description": "Banco de dados relacional robusto e avançado.",
            "category": "Banco de Dados"
        },
        {
            "name": "MySQL",
            "description": "Banco de dados relacional popular em aplicações web.",
            "category": "Banco de Dados"
        },
        {
            "name": "SQLite",
            "description": "Banco de dados leve usado em aplicações locais e embarcadas.",
            "category": "Banco de Dados"
        },
        {
            "name": "MongoDB",
            "description": "Banco de dados NoSQL orientado a documentos.",
            "category": "Banco de Dados"
        },
        {
            "name": "NoSQL",
            "description": "Modelo de banco de dados não relacional usado para dados flexíveis e escaláveis.",
            "category": "Banco de Dados"
        },
        {
            "name": "Redis",
            "description": "Banco de dados em memória usado para cache e alta performance.",
            "category": "Banco de Dados"
        },
        {
            "name": "Indexes",
            "description": "Estruturas usadas para acelerar consultas em bancos de dados.",
            "category": "Banco de Dados"
        },
        {
            "name": "Joins",
            "description": "Operações usadas para combinar dados de diferentes tabelas.",
            "category": "Banco de Dados"
        },
        {
            "name": "ORM",
            "description": "Técnica que permite trabalhar com banco de dados usando objetos da linguagem.",
            "category": "Banco de Dados"
        },
        {
            "name": "Controle de Versão",
            "description": "Prática de registrar e controlar mudanças feitas no código ao longo do tempo.",
            "category": "Git e GitHub"
        },
        {
            "name": "Repositórios",
            "description": "Locais onde projetos e seus históricos de código são armazenados.",
            "category": "Git e GitHub"
        },
        {
            "name": "Fluxo de Desenvolvimento",
            "description": "Organização do processo de criação, alteração e entrega de código.",
            "category": "Git e GitHub"
        },
        {
            "name": "Revisão de Código",
            "description": "Processo de análise de código feito antes de integrar mudanças ao projeto.",
            "category": "Git e GitHub"
        },
        {
            "name": "Organização de Tarefas",
            "description": "Prática de planejar e acompanhar atividades de desenvolvimento.",
            "category": "Git e GitHub"
        },
        {
            "name": "Automação",
            "description": "Uso de ferramentas para executar tarefas repetitivas automaticamente.",
            "category": "Git e GitHub"
        },
        {
            "name": "Boas Práticas",
            "description": "Conjunto de recomendações para manter projetos organizados e sustentáveis.",
            "category": "Git e GitHub"
        }
    ]

    created_items = seed_languages(items)

    return {
        "success": True,
        "created_count": len(created_items),
        "created_items": created_items
    }