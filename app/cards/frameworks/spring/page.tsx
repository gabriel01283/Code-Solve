import Navbar from "../../../components/Navbar";
import styles from "../frameworks.module.css";

export default function SpringPage() {
  return (
    <div className={`${styles.page} ${styles.spring}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Spring Boot</h1>

          <p>
            Spring Boot é um framework do ecossistema Java usado para criar
            aplicações web, APIs REST, microsserviços e sistemas corporativos de
            forma mais rápida e organizada.
          </p>

          <p>
            Ele simplifica o uso do Spring Framework, reduzindo configurações
            manuais e oferecendo uma estrutura pronta para desenvolvimento.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principais características</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Java</span>
            <span className={styles.card}>APIs REST</span>
            <span className={styles.card}>Injeção de dependência</span>
            <span className={styles.card}>Spring Data JPA</span>
            <span className={styles.card}>Spring Security</span>
            <span className={styles.card}>Microsserviços</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Ecossistema Spring</h2>

          <p>
            O Spring é composto por vários projetos que ajudam em diferentes
            partes de uma aplicação.
          </p>

          <ul>
            <li><strong>Spring Boot</strong> — simplifica configuração e execução.</li>
            <li><strong>Spring MVC</strong> — criação de aplicações web e APIs.</li>
            <li><strong>Spring Data JPA</strong> — integração com banco de dados.</li>
            <li><strong>Spring Security</strong> — autenticação e autorização.</li>
            <li><strong>Spring Cloud</strong> — suporte a microsserviços.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Como funciona?</h2>

          <pre className={styles.codeBlock}>
            <code>{`Cliente
↓
Controller
↓
Service
↓
Repository
↓
Banco de Dados
↓
Resposta`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Estrutura básica</h2>

          <pre className={styles.codeBlock}>
            <code>{`src/
├── main/
│   ├── java/
│   │   └── com/exemplo/projeto/
│   │       ├── controller/
│   │       ├── service/
│   │       ├── repository/
│   │       ├── model/
│   │       └── ProjetoApplication.java
│   └── resources/
│       └── application.properties
└── test/

pom.xml`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Controller</h2>

          <p>
            Controllers recebem requisições HTTP e retornam respostas para o
            cliente.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @GetMapping
    public String listar() {
        return "Lista de usuários";
    }
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Service</h2>

          <p>
            Services concentram as regras de negócio da aplicação, evitando que
            o Controller fique cheio de lógica.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`@Service
public class UsuarioService {

    public String buscarMensagem() {
        return "Usuário encontrado";
    }
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Repository</h2>

          <p>
            Repositories fazem a comunicação com o banco de dados, geralmente
            usando Spring Data JPA.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Entity</h2>

          <p>
            Entities representam tabelas do banco de dados.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Injeção de dependência</h2>

          <p>
            A injeção de dependência permite que o Spring forneça objetos
            automaticamente para as classes que precisam deles.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`private final UsuarioService usuarioService;

public UsuarioController(UsuarioService usuarioService) {
    this.usuarioService = usuarioService;
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>application.properties</h2>

          <p>
            Esse arquivo guarda configurações do projeto, como porta do servidor
            e conexão com banco de dados.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`server.port=8080

spring.datasource.url=jdbc:postgresql://localhost:5432/meubanco
spring.datasource.username=postgres
spring.datasource.password=senha`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Ótimo para sistemas grandes e corporativos.</li>
            <li>Grande comunidade no ecossistema Java.</li>
            <li>Boa integração com bancos de dados.</li>
            <li>Suporte forte para APIs REST e microsserviços.</li>
            <li>Estrutura organizada e escalável.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Curva de aprendizado maior.</li>
            <li>Mais verboso que frameworks de linguagens como Python ou JavaScript.</li>
            <li>Configurações podem confundir iniciantes.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Onde é usado?</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>APIs REST</span>
            <span className={styles.card}>Sistemas bancários</span>
            <span className={styles.card}>Microsserviços</span>
            <span className={styles.card}>Sistemas corporativos</span>
            <span className={styles.card}>Aplicações Java</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Spring Boot é uma das principais ferramentas para desenvolvimento
            back-end com Java. Ele facilita a criação de APIs, sistemas
            corporativos e microsserviços usando uma estrutura robusta e
            profissional.
          </p>
        </section>
      </main>
    </div>
  );
}