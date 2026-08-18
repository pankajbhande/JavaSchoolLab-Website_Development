export interface ContentBlock {
    content: string;          // HTML content
    codeExamples?: string[];  // optional code examples
}

export interface Topic {
    id: string;
    name: string;
    beginner?: ContentBlock[];
    intermediate?: ContentBlock[];
    expert?: ContentBlock[];
}

export interface SubTopic {
    id: string;
    name: string;
    topics: Topic[];
}

export interface Course {
    id: string;
    name: string;
    icon: string;
    subTopics: SubTopic[];
    cheatNotes: string[];
    interviewQuestions: {
        company: string;
        questions: string[];
    }[];
}

export const SpringBoot: Course[] = [
{
    "id": "spring-boot",
    "name": "Spring Boot",
    "icon": "Book",
    "subTopics": [
        {
            "id": "1-introduction-to-spring-boot",
            "name": "1. Introduction to Spring Boot",
            "topics": [
                {
                    "id": "1-1-what-is-spring-boot",
                    "name": "1.1 What is Spring Boot?",
                    "beginner": [
                        {
                            "content": "<h2>What is Spring Boot?</h2><p>• <b>Spring Boot</b> is an open-source Java-based framework used to create microservices and standalone, production-grade Spring applications with minimal configuration.</p><br><p>• Built by Pivotal (now VMware), it removes the friction of configuring Spring framework components manually.</p><br><h3>Key Aspects:</h3><ul><li>• <b>Opinionated:</b> Configures sensible defaults out of the box.</li><li>• <b>Embedded Server:</b> Runs apps via embedded Tomcat, Jetty, or Undertow without deploying WAR files.</li><li>• <b>Zero XML:</b> Eliminates XML configurations completely.</li></ul>",
                            "codeExamples": [
                                "package com.javaschool.app;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@SpringBootApplication\n@RestController\npublic class Application {\n\n    @GetMapping(\"/\")\n    public String welcome() {\n        return \"Welcome to JavaSchoolLab Spring Boot Tutorial!\";\n    }\n\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}"
                            ]
                        }
                    ],
                    "intermediate": [
                        {
                            "content": "<h3>Core Architecture Principles</h3><p>• Spring Boot uses starter dependencies to bundle common libraries and version definitions together.</p><p>• It leverages conditional annotations (<code>@ConditionalOnClass</code>, <code>@ConditionalOnMissingBean</code>) to configure application components lazily based on classpath presence.</p>"
                        }
                    ],
                    "expert": [
                        {
                            "content": "<h3>Internal Startup Mechanics</h3><p>• When <code>SpringApplication.run()</code> is invoked, it instantiates <code>SpringApplicationRunListeners</code>, creates the <code>ApplicationContext</code> environment, registers singletons, and triggers auto-configuration imports defined under <code>META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</code>.</p>"
                        }
                    ]
                },
                {
                    "id": "1-2-why-spring-boot",
                    "name": "1.2 Why Spring Boot?",
                    "beginner": [
                        {
                            "content": "<h2>Why Use Spring Boot?</h2><p>• Traditional Spring projects required setting up web servers, writing verbose XML beans, handling library version mismatches, and configuring database connections manually.</p><br><p>• <b>Spring Boot solves these challenges:</b></p><ul><li>• <b>Fast Prototyping:</b> Create a working web app in under 5 minutes.</li><li>• <b>Dependency Management:</b> Starter POMs manage compatible versions automatically.</li><li>• <b>Production Readiness:</b> Metrics, health checks, and tracing endpoints are built-in.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "1-3-features-of-spring-boot",
                    "name": "1.3 Features of Spring Boot",
                    "beginner": [
                        {
                            "content": "<h2>Main Features of Spring Boot</h2><ul><li>• <b>Standalone Applications:</b> Package as executable JAR files containing embedded web servers.</li><li>• <b>Starter Dependencies:</b> Simplified Maven/Gradle dependencies to streamline builds.</li><li>• <b>Auto-Configuration:</b> Automatically sets up Spring application based on installed dependencies.</li><li>• <b>Spring Boot Actuator:</b> Embedded monitoring, metrics, and health inspection endpoints.</li><li>• <b>Externalized Configuration:</b> Configure apps using application.properties, application.yml, or environment variables.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "1-4-advantages-of-spring-boot",
                    "name": "1.4 Advantages of Spring Boot",
                    "beginner": [
                        {
                            "content": "<h2>Advantages of Spring Boot</h2><ul><li>• <b>High Developer Productivity:</b> Minimizes configuration code, allowing engineers to focus purely on business logic.</li><li>• <b>No Code Generation required:</b> Uses standard Java annotations and dynamic runtime configuration.</li><li>• <b>Microservices Friendly:</b> Perfect foundation for building cloud-native microservices with Spring Cloud.</li><li>• <b>Vibrant Community & Ecosystem:</b> Backed by VMware and millions of developers worldwide.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "1-5-spring-vs-spring-boot",
                    "name": "1.5 Spring vs Spring Boot",
                    "beginner": [
                        {
                            "content": "<h2>Spring Framework vs Spring Boot</h2><table border='1' style='border-collapse:collapse; width:100%; text-align:left;'><thead><tr style='background-color:#f2f2f2;'><th>Feature</th><th>Spring Framework</th><th>Spring Boot</th></tr></thead><tbody><tr><td><b>Definition</b></td><td>Java EE enterprise application framework.</td><td>Extension of Spring aimed at rapid application development.</td></tr><tr><td><b>Configuration</b></td><td>Manual (XML or <code>@Configuration</code> classes).</td><td>Auto-Configuration with sensible defaults.</td></tr><tr><td><b>Deployment</b></td><td>Requires deployment of WAR file into external Tomcat/JBoss server.</td><td>Self-contained executable JAR with embedded server.</td></tr><tr><td><b>Dependencies</b></td><td>Dependencies added manually; version conflicts must be resolved by developer.</td><td>Uses starter POMs with curated dependency management.</td></tr></tbody></table>"
                        }
                    ]
                },
                {
                    "id": "1-6-spring-boot-architecture",
                    "name": "1.6 Spring Boot Architecture",
                    "beginner": [
                        {
                            "content": "<h2>Spring Boot Architecture</h2><p>• Spring Boot architecture is structured around a <b>Layered Architecture Pattern</b>:</p><ul><li>• <b>Controller Layer:</b> Receives HTTP requests, validates inputs, and calls Service methods.</li><li>• <b>Service Layer:</b> Contains business logic, calculations, and transactional context.</li><li>• <b>Repository Layer:</b> Interacts with databases using Spring Data JPA or JDBC.</li><li>• <b>Database Layer:</b> Relational or Non-Relational data store.</li></ul>",
                            "codeExamples": [
                                "// High Level Layered Flow:\n// Client (Browser / Postman) --> RestController --> Service --> Repository --> Database"
                            ]
                        }
                    ]
                },
                {
                    "id": "1-7-spring-boot-applications",
                    "name": "1.7 Spring Boot Applications",
                    "beginner": [
                        {
                            "content": "<h2>Types of Spring Boot Applications</h2><ul><li>• <b>REST APIs:</b> Microservices serving JSON responses for SPA or mobile backends.</li><li>• <b>Web MVC Applications:</b> Full-stack apps using Thymeleaf or HTML templates.</li><li>• <b>Batch Applications:</b> High-volume offline data processing pipelines.</li><li>• <b>Reactive Apps:</b> High-throughput non-blocking applications using Spring WebFlux.</li></ul>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "2-spring-boot-setup",
            "name": "2. Spring Boot Setup",
            "topics": [
                {
                    "id": "2-1-prerequisites",
                    "name": "2.1 Prerequisites",
                    "beginner": [
                        {
                            "content": "<h2>Prerequisites for Spring Boot</h2><p>• Before starting with Spring Boot development, ensure you have installed:</p><ul><li>• <b>JDK:</b> Java Development Kit (JDK 17 or JDK 21 LTS recommended).</li><li>• <b>Build Tool:</b> Maven 3.8+ or Gradle 7+.</li><li>• <b>IDE:</b> IntelliJ IDEA, Eclipse STS (Spring Tool Suite), or VS Code with Java Extension Pack.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "2-2-jdk-setup",
                    "name": "2.2 JDK Setup",
                    "beginner": [
                        {
                            "content": "<h2>JDK Setup & Environment Variable Configuration</h2><p>• Verify your Java installation using command line:</p>",
                            "codeExamples": [
                                "java -version\njavac -version\n\n# Environment Variable check\necho %JAVA_HOME%   # On Windows\necho $JAVA_HOME     # On Linux / macOS"
                            ]
                        }
                    ]
                },
                {
                    "id": "2-3-maven-setup",
                    "name": "2.3 Maven Setup",
                    "beginner": [
                        {
                            "content": "<h2>Apache Maven Setup</h2><p>• Apache Maven handles build lifecycles and dependency management.</p><p>• Spring Boot provides a Maven Wrapper (<code>mvnw</code>) inside every generated project so you don't need to install Maven globally!</p>",
                            "codeExamples": [
                                "# Check Maven installation\nmvn -version\n\n# Run app using Maven Wrapper\n./mvnw spring-boot:run"
                            ]
                        }
                    ]
                },
                {
                    "id": "2-4-spring-initializr",
                    "name": "2.4 Spring Initializr",
                    "beginner": [
                        {
                            "content": "<h2>What is Spring Initializr?</h2><p>• <b>Spring Initializr</b> (<code>start.spring.io</code>) is an online web tool provided by Pivotal to bootstrap Spring Boot applications instantly.</p><br><h3>Key Selections:</h3><ul><li>• <b>Project Type:</b> Maven or Gradle.</li><li>• <b>Language:</b> Java, Kotlin, or Groovy.</li><li>• <b>Spring Boot Version:</b> Select latest stable release (e.g., 3.2.x / 3.3.x).</li><li>• <b>Project Metadata:</b> Group (e.g. <code>com.javaschool</code>), Artifact (e.g. <code>demo</code>), Packaging (JAR).</li><li>• <b>Dependencies:</b> Spring Web, Spring Data JPA, MySQL Driver, Lombok, etc.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "2-5-creating-a-spring-boot-project",
                    "name": "2.5 Creating a Spring Boot Project",
                    "beginner": [
                        {
                            "content": "<h2>Step-by-Step: Creating Your First Spring Boot App</h2><ol><li>1. Open <b>https://start.spring.io</b> in your browser.</li><li>2. Choose Maven Project, Java, and Spring Boot version.</li><li>3. Set Group to <code>com.javaschool</code> and Artifact to <code>spring-boot-demo</code>.</li><li>4. Add <b>Spring Web</b> dependency.</li><li>5. Click <b>GENERATE</b> to download the ZIP file.</li><li>6. Extract ZIP file and import into your favorite IDE as a Maven project.</li></ol>"
                        }
                    ]
                },
                {
                    "id": "2-6-project-structure",
                    "name": "2.6 Project Structure",
                    "beginner": [
                        {
                            "content": "<h2>Spring Boot Directory Structure Overview</h2>",
                            "codeExamples": [
                                "spring-boot-demo/\n├── src/\n│   ├── main/\n│   │   ├── java/\n│   │   │   └── com/javaschool/demo/\n│   │   │       └── DemoApplication.java\n│   │   └── resources/\n│   │       ├── static/\n│   │       ├── templates/\n│   │       └── application.properties\n│   └── test/\n│       └── java/\n│           └── com/javaschool/demo/\n│               └── DemoApplicationTests.java\n├── pom.xml\n├── mvnw\n└── mvnw.cmd"
                            ]
                        }
                    ]
                },
                {
                    "id": "2-7-running-a-spring-boot-application",
                    "name": "2.7 Running a Spring Boot Application",
                    "beginner": [
                        {
                            "content": "<h2>Ways to Run a Spring Boot Application</h2><p>• <b>From IDE:</b> Right click <code>DemoApplication.java</code> and click <b>Run As -> Java Application</b>.</p><p>• <b>From Terminal using Maven:</b></p>",
                            "codeExamples": [
                                "# Run application directly\n./mvnw spring-boot:run\n\n# Build JAR and execute\n./mvnw clean package\njava -jar target/demo-0.0.1-SNAPSHOT.jar"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "3-spring-boot-project-structure",
            "name": "3. Spring Boot Project Structure",
            "topics": [
                {
                    "id": "3-1-src-main-java",
                    "name": "3.1 src/main/java",
                    "beginner": [
                        {
                            "content": "<h2>src/main/java</h2><p>• Contains all source Java code, including controllers, services, repositories, entities, and configuration classes.</p><p>• The main class marked with <code>@SpringBootApplication</code> is placed at the root package (e.g. <code>com.javaschool.demo</code>) so component scanning discovers all child packages automatically.</p>"
                        }
                    ]
                },
                {
                    "id": "3-2-src-main-resources",
                    "name": "3.2 src/main/resources",
                    "beginner": [
                        {
                            "content": "<h2>src/main/resources</h2><p>• Contains non-Java configuration files and web assets:</p><ul><li>• <code>application.properties</code> or <code>application.yml</code>: App configuration settings.</li><li>• <code>static/</code>: HTML, CSS, JavaScript, and images.</li><li>• <code>templates/</code>: Server-rendered templates like Thymeleaf or FreeMarker.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "3-3-application-properties",
                    "name": "3.3 application.properties",
                    "beginner": [
                        {
                            "content": "<h2>application.properties</h2><p>• Key-value based configuration file used to configure server port, database connections, logging, profiles, and custom keys.</p>",
                            "codeExamples": [
                                "server.port=8080\nspring.application.name=javaschool-api\nspring.datasource.url=jdbc:mysql://localhost:3306/school_db\nspring.datasource.username=root\nspring.datasource.password=secret"
                            ]
                        }
                    ]
                },
                {
                    "id": "3-4-application-yml",
                    "name": "3.4 application.yml",
                    "beginner": [
                        {
                            "content": "<h2>application.yml</h2><p>• Hierarchical YAML alternative to <code>application.properties</code> providing better readability for structured settings.</p>",
                            "codeExamples": [
                                "server:\n  port: 8080\nspring:\n  application:\n    name: javaschool-api\n  datasource:\n    url: jdbc:mysql://localhost:3306/school_db\n    username: root\n    password: secret"
                            ]
                        }
                    ]
                },
                {
                    "id": "3-5-pom-xml",
                    "name": "3.5 pom.xml",
                    "beginner": [
                        {
                            "content": "<h2>pom.xml (Project Object Model)</h2><p>• Defines project build dependencies, Maven plugins, Java version, and parent starter POM.</p>",
                            "codeExamples": [
                                "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n    \n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.2.2</version>\n    </parent>\n    \n    <groupId>com.javaschool</groupId>\n    <artifactId>demo</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    \n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n    </dependencies>\n</project>"
                            ]
                        }
                    ]
                },
                {
                    "id": "3-6-main-application-class",
                    "name": "3.6 Main Application Class",
                    "beginner": [
                        {
                            "content": "<h2>The Main Application Class</h2><p>• Entry point of any Spring Boot application containing the standard Java <code>main</code> method.</p>",
                            "codeExamples": [
                                "package com.javaschool.demo;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class DemoApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "3-7-src-test",
                    "name": "3.7 src/test",
                    "beginner": [
                        {
                            "content": "<h2>src/test</h2><p>• Holds unit and integration test source code under <code>src/test/java</code> and test resources under <code>src/test/resources</code>.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "4-spring-boot-starter-dependencies",
            "name": "4. Spring Boot Starter Dependencies",
            "topics": [
                {
                    "id": "4-1-what-is-starter-dependency",
                    "name": "4.1 What is Starter Dependency?",
                    "beginner": [
                        {
                            "content": "<h2>What is a Starter Dependency?</h2><p>• A <b>Starter Dependency</b> is a set of convenient dependency descriptors bundled into a single POM package. Importing one starter brings in all required libraries and transitive dependencies automatically with compatible version management.</p>"
                        }
                    ]
                },
                {
                    "id": "4-2-spring-boot-starter-web",
                    "name": "4.2 spring-boot-starter-web",
                    "beginner": [
                        {
                            "content": "<h2>spring-boot-starter-web</h2><p>• Used for building RESTful APIs and Web MVC applications.</p><p>• Bundles Spring MVC, Embedded Tomcat, Jackson (JSON parser), and Validation libraries.</p>",
                            "codeExamples": [
                                "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>"
                            ]
                        }
                    ]
                },
                {
                    "id": "4-3-spring-boot-starter-data-jpa",
                    "name": "4.3 spring-boot-starter-data-jpa",
                    "beginner": [
                        {
                            "content": "<h2>spring-boot-starter-data-jpa</h2><p>• Used to interact with relational databases using JPA and Hibernate ORM.</p><p>• Includes Hibernate Core, Spring Data JPA, Spring ORM, and HikariCP connection pool.</p>",
                            "codeExamples": [
                                "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-jpa</artifactId>\n</dependency>"
                            ]
                        }
                    ]
                },
                {
                    "id": "4-4-spring-boot-starter-validation",
                    "name": "4.4 spring-boot-starter-validation",
                    "beginner": [
                        {
                            "content": "<h2>spring-boot-starter-validation</h2><p>• Used for validating request body fields using Hibernate Validator implementation of JSR-380 spec (<code>@NotNull</code>, <code>@Size</code>, etc.).</p>"
                        }
                    ]
                },
                {
                    "id": "4-5-spring-boot-starter-test",
                    "name": "4.5 spring-boot-starter-test",
                    "beginner": [
                        {
                            "content": "<h2>spring-boot-starter-test</h2><p>• Primary testing starter providing JUnit 5, Mockito, AssertJ, Hamcrest, and Spring Test Framework.</p>"
                        }
                    ]
                },
                {
                    "id": "4-6-common-spring-boot-starters",
                    "name": "4.6 Common Spring Boot Starters",
                    "beginner": [
                        {
                            "content": "<h2>Popular Spring Boot Starters List</h2><ul><li>• <code>spring-boot-starter-security</code>: Authentication and Access Control.</li><li>• <code>spring-boot-starter-actuator</code>: Application monitoring.</li><li>• <code>spring-boot-starter-cache</code>: Caching abstractions.</li><li>• <code>spring-boot-starter-mail</code>: Sending email via SMTP.</li><li>• <code>spring-boot-starter-amqp</code>: RabbitMQ integration.</li></ul>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "5-spring-boot-annotations",
            "name": "5. Spring Boot Annotations",
            "topics": [
                {
                    "id": "5-1-springbootapplication",
                    "name": "5.1 @SpringBootApplication",
                    "beginner": [
                        {
                            "content": "<h2>@SpringBootApplication</h2><p>• Convenience meta-annotation that combines three essential annotations:</p><ul><li>• <code>@SpringBootConfiguration</code>: Marks class as Spring configuration source.</li><li>• <code>@EnableAutoConfiguration</code>: Enables Spring Boot auto-configuration mechanism.</li><li>• <code>@ComponentScan</code>: Scans package and sub-packages for Spring components.</li></ul>",
                            "codeExamples": [
                                "@SpringBootApplication\npublic class App {\n    public static void main(String[] args) {\n        SpringApplication.run(App.class, args);\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "5-2-configuration",
                    "name": "5.2 @Configuration",
                    "beginner": [
                        {
                            "content": "<h2>@Configuration</h2><p>• Indicates that a class declares one or more <code>@Bean</code> methods that will be processed by the Spring IoC container.</p>",
                            "codeExamples": [
                                "@Configuration\npublic class AppConfig {\n    @Bean\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "5-3-componentscan",
                    "name": "5.3 @ComponentScan",
                    "beginner": [
                        {
                            "content": "<h2>@ComponentScan</h2><p>• Tells Spring where to look for annotated components (<code>@Component</code>, <code>@Service</code>, <code>@Repository</code>, <code>@Controller</code>).</p>",
                            "codeExamples": [
                                "@Configuration\n@ComponentScan(basePackages = \"com.javaschool.app\")\npublic class AppConfig {}"
                            ]
                        }
                    ]
                },
                {
                    "id": "5-4-enableautoconfiguration",
                    "name": "5.4 @EnableAutoConfiguration",
                    "beginner": [
                        {
                            "content": "<h2>@EnableAutoConfiguration</h2><p>• Enables auto-configuration of the Spring Application Context based on dependencies present on classpath.</p>"
                        }
                    ]
                },
                {
                    "id": "5-5-component",
                    "name": "5.5 @Component",
                    "beginner": [
                        {
                            "content": "<h2>@Component</h2><p>• Generic stereotype annotation for any Spring-managed component/bean.</p>",
                            "codeExamples": [
                                "@Component\npublic class EmailUtility {\n    public void sendEmail(String to, String msg) {\n        // implementation\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "5-6-service",
                    "name": "5.6 @Service",
                    "beginner": [
                        {
                            "content": "<h2>@Service</h2><p>• Specialization of <code>@Component</code> for service layer classes containing core business logic.</p>",
                            "codeExamples": [
                                "@Service\npublic class UserService {\n    public User getUserById(Long id) {\n        return new User(id, \"John Doe\");\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "5-7-repository",
                    "name": "5.7 @Repository",
                    "beginner": [
                        {
                            "content": "<h2>@Repository</h2><p>• Specialization of <code>@Component</code> for DAO/Repository layer classes. Automatically translates database access exceptions into Spring DataAccessException hierarchy.</p>"
                        }
                    ]
                },
                {
                    "id": "5-8-controller",
                    "name": "5.8 @Controller",
                    "beginner": [
                        {
                            "content": "<h2>@Controller</h2><p>• Used to mark a class as a Web MVC controller that returns view templates (like HTML pages).</p>"
                        }
                    ]
                },
                {
                    "id": "5-9-restcontroller",
                    "name": "5.9 @RestController",
                    "beginner": [
                        {
                            "content": "<h2>@RestController</h2><p>• Combination of <code>@Controller</code> and <code>@ResponseBody</code>. Used for creating RESTful web services that return data directly as JSON/XML.</p>",
                            "codeExamples": [
                                "@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @GetMapping\n    public List<String> getUsers() {\n        return List.of(\"Alice\", \"Bob\");\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "5-10-autowired",
                    "name": "5.10 @Autowired",
                    "beginner": [
                        {
                            "content": "<h2>@Autowired</h2><p>• Used to automatically inject bean dependencies by type into fields, constructors, or setter methods.</p>",
                            "codeExamples": [
                                "@Service\npublic class StudentService {\n    private final StudentRepository studentRepository;\n\n    @Autowired // Optional in single constructor classes in modern Spring\n    public StudentService(StudentRepository studentRepository) {\n        this.studentRepository = studentRepository;\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "5-11-bean",
                    "name": "5.11 @Bean",
                    "beginner": [
                        {
                            "content": "<h2>@Bean</h2><p>• Applied on methods within a <code>@Configuration</code> class to explicitly instantiate and configure a Spring bean.</p>",
                            "codeExamples": [
                                "@Configuration\npublic class SecurityConfig {\n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        return new BCryptPasswordEncoder();\n    }\n}"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "6-spring-boot-auto-configuration",
            "name": "6. Spring Boot Auto-Configuration",
            "topics": [
                {
                    "id": "6-1-what-is-auto-configuration",
                    "name": "6.1 What is Auto-Configuration?",
                    "beginner": [
                        {
                            "content": "<h2>What is Auto-Configuration?</h2><p>• <b>Auto-Configuration</b> automatically configures your Spring Boot application based on jar dependencies available on the classpath.</p><p>• For instance, if <code>h2.jar</code> is on your classpath and you haven't manually configured a DataSource bean, Spring Boot auto-configures an in-memory H2 database connection automatically.</p>"
                        }
                    ]
                },
                {
                    "id": "6-2-how-auto-configuration-works",
                    "name": "6.2 How Auto-Configuration Works",
                    "beginner": [
                        {
                            "content": "<h2>How Auto-Configuration Works Internally</h2><p>• Spring Boot reads imports defined in <code>META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</code> file inside starter JARs.</p><p>• It checks condition annotations (<code>@ConditionalOnClass</code>, <code>@ConditionalOnMissingBean</code>, <code>@ConditionalOnProperty</code>) before creating any bean.</p>"
                        }
                    ]
                },
                {
                    "id": "6-3-enableautoconfiguration",
                    "name": "6.3 @EnableAutoConfiguration",
                    "beginner": [
                        {
                            "content": "<h2>@EnableAutoConfiguration Annotation</h2><p>• Tells Spring Boot to start looking for auto-configuration beans. Included inside <code>@SpringBootApplication</code>.</p>"
                        }
                    ]
                },
                {
                    "id": "6-4-conditional-configuration",
                    "name": "6.4 Conditional Configuration",
                    "beginner": [
                        {
                            "content": "<h2>Spring Boot Conditional Annotations</h2><ul><li>• <code>@ConditionalOnClass</code>: Configuration applies only if class exists on classpath.</li><li>• <code>@ConditionalOnMissingBean</code>: Applies only if bean is not already defined by developer.</li><li>• <code>@ConditionalOnProperty</code>: Applies only if specific configuration property is present.</li></ul>",
                            "codeExamples": [
                                "@Configuration\n@ConditionalOnClass(DataSource.class)\n@ConditionalOnMissingBean(DataSource.class)\npublic class CustomDataSourceConfig {\n    // Bean created only if DataSource class exists and user didn't create a custom bean!\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "6-5-advantages-of-auto-configuration",
                    "name": "6.5 Advantages of Auto-Configuration",
                    "beginner": [
                        {
                            "content": "<h2>Advantages of Auto-Configuration</h2><ul><li>• Eliminates repetitive boilerplate setup.</li><li>• Ensures best-practice baseline configuration.</li><li>• Fully customizable: custom user beans always take precedence over auto-configured beans!</li></ul>"
                        }
                    ]
                },
                {
                    "id": "6-6-disabling-auto-configuration",
                    "name": "6.6 Disabling Auto-Configuration",
                    "beginner": [
                        {
                            "content": "<h2>Disabling Specific Auto-Configurations</h2><p>• You can disable auto-configurations via annotation or configuration property:</p>",
                            "codeExamples": [
                                "// Option 1: Via @SpringBootApplication exclude\n@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})\npublic class Application {}\n\n# Option 2: Via application.properties\nspring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "7-dependency-injection-and-ioc",
            "name": "7. Dependency Injection and IoC",
            "topics": [
                {
                    "id": "7-1-ioc",
                    "name": "7.1 IoC",
                    "beginner": [
                        {
                            "content": "<h2>Inversion of Control (IoC)</h2><p>• <b>IoC</b> is a design principle where the control of object creation and lifecycle management is transferred from the application code to a container (Spring IoC Container).</p>"
                        }
                    ]
                },
                {
                    "id": "7-2-dependency-injection",
                    "name": "7.2 Dependency Injection",
                    "beginner": [
                        {
                            "content": "<h2>Dependency Injection (DI)</h2><p>• <b>DI</b> is a pattern used to implement IoC. Instead of creating dependent objects manually using <code>new Key()</code>, dependencies are injected into classes by the Spring container.</p>"
                        }
                    ]
                },
                {
                    "id": "7-3-constructor-injection",
                    "name": "7.3 Constructor Injection",
                    "beginner": [
                        {
                            "content": "<h2>Constructor Injection (Recommended Best Practice)</h2><p>• Dependencies are passed via class constructors. Promotes immutability and makes unit testing easier.</p>",
                            "codeExamples": [
                                "@Service\npublic class EmployeeService {\n    private final EmployeeRepository repository;\n\n    public EmployeeService(EmployeeRepository repository) {\n        this.repository = repository;\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "7-4-setter-injection",
                    "name": "7.4 Setter Injection",
                    "beginner": [
                        {
                            "content": "<h2>Setter Injection</h2><p>• Dependencies are injected through setter methods. Useful for optional dependencies.</p>",
                            "codeExamples": [
                                "@Service\npublic class NotificationService {\n    private AuditLogger logger;\n\n    @Autowired\n    public void setLogger(AuditLogger logger) {\n        this.logger = logger;\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "7-5-field-injection",
                    "name": "7.5 Field Injection",
                    "beginner": [
                        {
                            "content": "<h2>Field Injection</h2><p>• Direct injection into private fields using <code>@Autowired</code>. Easy to write but discouraged because it hinders immutability and unit testing.</p>",
                            "codeExamples": [
                                "@Service\npublic class ProductService {\n    @Autowired\n    private ProductRepository repository; // Not recommended for production\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "7-6-bean-creation",
                    "name": "7.6 Bean Creation",
                    "beginner": [
                        {
                            "content": "<h2>Bean Creation Lifecycle</h2><p>• Instantiation -> Dependency Injection -> <code>@PostConstruct</code> -> Ready for Use -> <code>@PreDestroy</code> -> Destruction.</p>"
                        }
                    ]
                },
                {
                    "id": "7-7-bean-scope",
                    "name": "7.7 Bean Scope",
                    "beginner": [
                        {
                            "content": "<h2>Spring Bean Scopes</h2><ul><li>• <b>singleton (Default):</b> One single bean instance per Spring IoC container.</li><li>• <b>prototype:</b> A new instance is created every time requested.</li><li>• <b>request:</b> Single instance per HTTP request lifecycle (Web app).</li><li>• <b>session:</b> Single instance per HTTP session lifecycle (Web app).</li><li>• <b>application:</b> Single instance per ServletContext.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "7-8-qualifier",
                    "name": "7.8 @Qualifier",
                    "beginner": [
                        {
                            "content": "<h2>@Qualifier</h2><p>• Used alongside <code>@Autowired</code> to resolve ambiguity when multiple beans of the same type exist in the container.</p>",
                            "codeExamples": [
                                "@Service\npublic class PaymentService {\n    private final PaymentProcessor processor;\n\n    public PaymentService(@Qualifier(\"paypalProcessor\") PaymentProcessor processor) {\n        this.processor = processor;\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "7-9-primary",
                    "name": "7.9 @Primary",
                    "beginner": [
                        {
                            "content": "<h2>@Primary</h2><p>• Specifies a default preference bean when multiple candidates are qualified for injection.</p>",
                            "codeExamples": [
                                "@Component\n@Primary\npublic class CreditCardPayment implements PaymentProcessor {}\n\n@Component\npublic class PaypalPayment implements PaymentProcessor {}"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "8-spring-boot-configuration",
            "name": "8. Spring Boot Configuration",
            "topics": [
                {
                    "id": "8-1-application-properties",
                    "name": "8.1 application.properties",
                    "beginner": [
                        {
                            "content": "<h2>application.properties Overview</h2><p>• Central configuration file format using simple key=value pairs.</p>"
                        }
                    ]
                },
                {
                    "id": "8-2-application-yml",
                    "name": "8.2 application.yml",
                    "beginner": [
                        {
                            "content": "<h2>application.yml Format</h2><p>• Uses YAML syntax with indentation and lists for nested properties.</p>"
                        }
                    ]
                },
                {
                    "id": "8-3-custom-properties",
                    "name": "8.3 Custom Properties",
                    "beginner": [
                        {
                            "content": "<h2>Defining Custom Properties</h2><p>• Define custom configuration keys in application.properties:</p>",
                            "codeExamples": [
                                "app.name=JavaSchool Application\napp.max-users=500\napp.welcome-message=Hello Student!"
                            ]
                        }
                    ]
                },
                {
                    "id": "8-4-environment-variables",
                    "name": "8.4 Environment Variables",
                    "beginner": [
                        {
                            "content": "<h2>Overriding via Environment Variables</h2><p>• System environment variables override application properties. E.g. <code>SERVER_PORT=9090</code> overrides <code>server.port</code>.</p>"
                        }
                    ]
                },
                {
                    "id": "8-5-configuration-profiles",
                    "name": "8.5 Configuration Profiles",
                    "beginner": [
                        {
                            "content": "<h2>Spring Profiles</h2><p>• Allows segregating configuration per environment (dev, test, prod).</p>"
                        }
                    ]
                },
                {
                    "id": "8-6-value",
                    "name": "8.6 @Value",
                    "beginner": [
                        {
                            "content": "<h2>@Value Annotation</h2><p>• Used to inject property values directly into bean fields.</p>",
                            "codeExamples": [
                                "@Component\npublic class AppNotification {\n    @Value(\"${app.welcome-message:Welcome!}\")\n    private String welcomeMsg;\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "8-7-configurationproperties",
                    "name": "8.7 @ConfigurationProperties",
                    "beginner": [
                        {
                            "content": "<h2>@ConfigurationProperties</h2><p>• Binds strong typed hierarchical property blocks into POJO classes.</p>",
                            "codeExamples": [
                                "@Component\n@ConfigurationProperties(prefix = \"app\")\npublic class AppProperties {\n    private String name;\n    private int maxUsers;\n    // getters and setters\n}"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "9-spring-boot-rest-api",
            "name": "9. Spring Boot REST API",
            "topics": [
                {
                    "id": "9-1-what-is-rest-api",
                    "name": "9.1 What is REST API?",
                    "beginner": [
                        {
                            "content": "<h2>What is REST API?</h2><p>• <b>REST (Representational State Transfer)</b> is an architectural style for building network services using standard HTTP methods (GET, POST, PUT, DELETE).</p>"
                        }
                    ]
                },
                {
                    "id": "9-2-creating-a-rest-controller",
                    "name": "9.2 Creating a REST Controller",
                    "beginner": [
                        {
                            "content": "<h2>Creating a REST Controller</h2><p>• Annotate class with <code>@RestController</code> and declare handler methods mapped to URLs.</p>"
                        }
                    ]
                },
                {
                    "id": "9-3-restcontroller",
                    "name": "9.3 @RestController",
                    "beginner": [
                        {
                            "content": "<h2>@RestController</h2><p>• Marks class as a controller where every method returns object values written directly into HTTP response body as JSON/XML.</p>"
                        }
                    ]
                },
                {
                    "id": "9-4-requestmapping",
                    "name": "9.4 @RequestMapping",
                    "beginner": [
                        {
                            "content": "<h2>@RequestMapping</h2><p>• Sets base URL mapping path for all controller handler endpoints.</p>",
                            "codeExamples": [
                                "@RestController\n@RequestMapping(\"/api/v1/students\")\npublic class StudentController {}"
                            ]
                        }
                    ]
                },
                {
                    "id": "9-5-getmapping",
                    "name": "9.5 @GetMapping",
                    "beginner": [
                        {
                            "content": "<h2>@GetMapping</h2><p>• Shortcut annotation for <code>@RequestMapping(method = RequestMethod.GET)</code> used to retrieve resources.</p>"
                        }
                    ]
                },
                {
                    "id": "9-6-postmapping",
                    "name": "9.6 @PostMapping",
                    "beginner": [
                        {
                            "content": "<h2>@PostMapping</h2><p>• Shortcut annotation for creating new resources on server.</p>"
                        }
                    ]
                },
                {
                    "id": "9-7-putmapping",
                    "name": "9.7 @PutMapping",
                    "beginner": [
                        {
                            "content": "<h2>@PutMapping</h2><p>• Shortcut annotation for updating existing resources completely.</p>"
                        }
                    ]
                },
                {
                    "id": "9-8-deletemapping",
                    "name": "9.8 @DeleteMapping",
                    "beginner": [
                        {
                            "content": "<h2>@DeleteMapping</h2><p>• Shortcut annotation for deleting resources by identifier.</p>"
                        }
                    ]
                },
                {
                    "id": "9-9-pathvariable",
                    "name": "9.9 @PathVariable",
                    "beginner": [
                        {
                            "content": "<h2>@PathVariable</h2><p>• Extracts dynamic route parameter placeholders from the URI path.</p>",
                            "codeExamples": [
                                "@GetMapping(\"/{id}\")\npublic Student getStudent(@PathVariable(\"id\") Long id) {\n    return studentService.findById(id);\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "9-10-requestparam",
                    "name": "9.10 @RequestParam",
                    "beginner": [
                        {
                            "content": "<h2>@RequestParam</h2><p>• Extracts query parameters from URL string (e.g. <code>/api/students?page=1&size=10</code>).</p>",
                            "codeExamples": [
                                "@GetMapping\npublic List<Student> search(\n    @RequestParam(defaultValue = \"0\") int page,\n    @RequestParam(defaultValue = \"10\") int size) {\n    return studentService.findAll(page, size);\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "9-11-requestbody",
                    "name": "9.11 @RequestBody",
                    "beginner": [
                        {
                            "content": "<h2>@RequestBody</h2><p>• Deserializes incoming HTTP JSON request payload into a Java Object.</p>",
                            "codeExamples": [
                                "@PostMapping\npublic Student create(@RequestBody Student student) {\n    return studentService.save(student);\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "9-12-responsebody",
                    "name": "9.12 @ResponseBody",
                    "beginner": [
                        {
                            "content": "<h2>@ResponseBody</h2><p>• Indicates method return value should be bound directly to the HTTP response body.</p>"
                        }
                    ]
                },
                {
                    "id": "9-13-http-status-codes",
                    "name": "9.13 HTTP Status Codes",
                    "beginner": [
                        {
                            "content": "<h2>Common HTTP Status Codes in REST</h2><ul><li>• <b>200 OK:</b> Request succeeded.</li><li>• <b>201 Created:</b> New resource successfully created.</li><li>• <b>204 No Content:</b> Request processed successfully, no body returned (e.g. DELETE).</li><li>• <b>400 Bad Request:</b> Client payload validation failed.</li><li>• <b>404 Not Found:</b> Requested resource ID does not exist.</li><li>• <b>500 Internal Server Error:</b> Server exception occurred.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "9-14-responseentity",
                    "name": "9.14 ResponseEntity",
                    "beginner": [
                        {
                            "content": "<h2>ResponseEntity Class</h2><p>• Represents the complete HTTP response including HTTP status code, headers, and body.</p>",
                            "codeExamples": [
                                "@GetMapping(\"/{id}\")\npublic ResponseEntity<Student> getStudent(@PathVariable Long id) {\n    Student student = studentService.findById(id);\n    return ResponseEntity.ok()\n            .header(\"Custom-Header\", \"JavaSchool\")\n            .body(student);\n}"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "10-spring-boot-layered-architecture",
            "name": "10. Spring Boot Layered Architecture",
            "topics": [
                {
                    "id": "10-1-controller-layer",
                    "name": "10.1 Controller Layer",
                    "beginner": [
                        {
                            "content": "<h2>Controller Layer</h2><p>• Entry point handling HTTP endpoints, request mapping, and returning HTTP responses.</p>"
                        }
                    ]
                },
                {
                    "id": "10-2-service-layer",
                    "name": "10.2 Service Layer",
                    "beginner": [
                        {
                            "content": "<h2>Service Layer</h2><p>• Contains business rules, validations, computations, and coordinates repository calls.</p>"
                        }
                    ]
                },
                {
                    "id": "10-3-repository-layer",
                    "name": "10.3 Repository Layer",
                    "beginner": [
                        {
                            "content": "<h2>Repository / DAO Layer</h2><p>• Handles database communications, query execution, and object persistence.</p>"
                        }
                    ]
                },
                {
                    "id": "10-4-entity-layer",
                    "name": "10.4 Entity Layer",
                    "beginner": [
                        {
                            "content": "<h2>Entity Layer</h2><p>• JPA classes mapped to database tables storing application state.</p>"
                        }
                    ]
                },
                {
                    "id": "10-5-dto-layer",
                    "name": "10.5 DTO Layer",
                    "beginner": [
                        {
                            "content": "<h2>DTO (Data Transfer Object) Layer</h2><p>• Objects used to transfer data between client and server, decoupling API contracts from internal database schema models.</p>",
                            "codeExamples": [
                                "public class StudentDTO {\n    private Long id;\n    private String name;\n    private String email;\n    // getters, setters, constructors\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "10-6-controller-service-repository-flow",
                    "name": "10.6 Controller-Service-Repository Flow",
                    "beginner": [
                        {
                            "content": "<h2>Request Delegation Pattern</h2><p>• Controller handles HTTP -> Service applies business logic -> Repository fetches/persists data -> Controller converts to Response.</p>"
                        }
                    ]
                },
                {
                    "id": "10-7-complete-request-flow",
                    "name": "10.7 Complete Request Flow",
                    "beginner": [
                        {
                            "content": "<h2>End-to-End Request Lifecycle</h2><p>• Client HTTP Request -> Servlet Filter -> DispatcherServlet -> Interceptor -> RestController -> Service -> Spring Data Repository -> Database -> Response DTO -> JSON Serializer -> Client HTTP Response.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "11-spring-boot-with-mysql",
            "name": "11. Spring Boot with MySQL",
            "topics": [
                {
                    "id": "11-1-database-configuration",
                    "name": "11.1 Database Configuration",
                    "beginner": [
                        {
                            "content": "<h2>Database Configuration in Spring Boot</h2><p>• Spring Boot configures HikariCP connection pool automatically when MySQL driver and Spring Data JPA dependencies are on the classpath.</p>"
                        }
                    ]
                },
                {
                    "id": "11-2-mysql-connection",
                    "name": "11.2 MySQL Connection",
                    "beginner": [
                        {
                            "content": "<h2>Connecting to MySQL Database</h2><p>• Add MySQL driver dependency to <code>pom.xml</code>:</p>",
                            "codeExamples": [
                                "<dependency>\n    <groupId>com.mysql</groupId>\n    <artifactId>mysql-connector-j</artifactId>\n    <scope>runtime</scope>\n</dependency>"
                            ]
                        }
                    ]
                },
                {
                    "id": "11-3-jdbc-driver",
                    "name": "11.3 JDBC Driver",
                    "beginner": [
                        {
                            "content": "<h2>MySQL JDBC Driver Class</h2><p>• Class name: <code>com.mysql.cj.jdbc.Driver</code> used for MySQL 8+.</p>"
                        }
                    ]
                },
                {
                    "id": "11-4-jpa-configuration",
                    "name": "11.4 JPA Configuration",
                    "beginner": [
                        {
                            "content": "<h2>JPA & Hibernate Settings</h2><p>• Configure <code>spring.jpa.hibernate.ddl-auto</code> options: <code>none</code>, <code>validate</code>, <code>update</code>, <code>create</code>, or <code>create-drop</code>.</p>"
                        }
                    ]
                },
                {
                    "id": "11-5-database-properties",
                    "name": "11.5 Database Properties",
                    "beginner": [
                        {
                            "content": "<h2>Complete application.properties for MySQL</h2>",
                            "codeExamples": [
                                "spring.datasource.url=jdbc:mysql://localhost:3306/school_db?useSSL=false&serverTimezone=UTC\nspring.datasource.username=root\nspring.datasource.password=root123\nspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\n\n# Hibernate Properties\nspring.jpa.hibernate.ddl-auto=update\nspring.jpa.show-sql=true\nspring.jpa.properties.hibernate.format_sql=true\nspring.jpa.database-platform=org.hibernate.dialect.MySQLDialect"
                            ]
                        }
                    ]
                },
                {
                    "id": "11-6-creating-entity",
                    "name": "11.6 Creating Entity",
                    "beginner": [
                        {
                            "content": "<h2>Creating JPA Entity Class</h2>",
                            "codeExamples": [
                                "package com.javaschool.demo.model;\n\nimport jakarta.persistence.*;\n\n@Entity\n@Table(name = \"students\")\npublic class Student {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(name = \"first_name\", nullable = false)\n    private String firstName;\n\n    @Column(name = \"email\", unique = true, nullable = false)\n    private String email;\n\n    // Getters, Setters, Constructors\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "11-7-connecting-spring-boot-with-mysql",
                    "name": "11.7 Connecting Spring Boot with MySQL",
                    "beginner": [
                        {
                            "content": "<h2>Testing MySQL Connectivity</h2><p>• Once properties are configured, launching the app triggers Hibernate to connect and create/update tables automatically in MySQL database.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "12-spring-data-jpa",
            "name": "12. Spring Data JPA",
            "topics": [
                {
                    "id": "12-1-what-is-spring-data-jpa",
                    "name": "12.1 What is Spring Data JPA?",
                    "beginner": [
                        {
                            "content": "<h2>What is Spring Data JPA?</h2><p>• <b>Spring Data JPA</b> is a abstraction framework built on top of JPA (Java Persistence API) that reduces boilerplate DAO implementation code to simple repository interfaces.</p>"
                        }
                    ]
                },
                {
                    "id": "12-2-jpa-vs-hibernate",
                    "name": "12.2 JPA vs Hibernate",
                    "beginner": [
                        {
                            "content": "<h2>JPA vs Hibernate</h2><p>• <b>JPA</b> is a standard Java specification (interfaces and annotations).</p><p>• <b>Hibernate</b> is a concrete ORM implementation of the JPA specification.</p>"
                        }
                    ]
                },
                {
                    "id": "12-3-entity",
                    "name": "12.3 @Entity",
                    "beginner": [
                        {
                            "content": "<h2>@Entity Annotation</h2><p>• Marks a Java class as a JPA persistent domain entity mapped to a relational database table.</p>"
                        }
                    ]
                },
                {
                    "id": "12-4-table",
                    "name": "12.4 @Table",
                    "beginner": [
                        {
                            "content": "<h2>@Table Annotation</h2><p>• Specifies the table name and constraints in the database.</p>",
                            "codeExamples": [
                                "@Entity\n@Table(name = \"tbl_course\", uniqueConstraints = @UniqueConstraint(columnNames = \"code\"))\npublic class Course {}"
                            ]
                        }
                    ]
                },
                {
                    "id": "12-5-id",
                    "name": "12.5 @Id",
                    "beginner": [
                        {
                            "content": "<h2>@Id Annotation</h2><p>• Declares the primary key field of an entity.</p>"
                        }
                    ]
                },
                {
                    "id": "12-6-generatedvalue",
                    "name": "12.6 @GeneratedValue",
                    "beginner": [
                        {
                            "content": "<h2>@GeneratedValue Strategies</h2><ul><li>• <code>GenerationType.IDENTITY</code>: Auto-increment column in MySQL/PostgreSQL.</li><li>• <code>GenerationType.SEQUENCE</code>: Database sequence generator.</li><li>• <code>GenerationType.AUTO</code>: Selects strategy based on underlying DB.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "12-7-column",
                    "name": "12.7 @Column",
                    "beginner": [
                        {
                            "content": "<h2>@Column Annotation</h2><p>• Configures database column name, length, nullable, and unique constraints.</p>"
                        }
                    ]
                },
                {
                    "id": "12-8-jparepository",
                    "name": "12.8 JpaRepository",
                    "beginner": [
                        {
                            "content": "<h2>JpaRepository Interface</h2><p>• Provides standard CRUD methods (save, findById, findAll, deleteById) and pagination out-of-the-box!</p>",
                            "codeExamples": [
                                "package com.javaschool.demo.repository;\n\nimport com.javaschool.demo.model.Student;\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic interface StudentRepository extends JpaRepository<Student, Long> {\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "12-9-crud-operations",
                    "name": "12.9 CRUD Operations",
                    "beginner": [
                        {
                            "content": "<h2>Built-in CRUD Methods</h2><ul><li>• <code>save(entity)</code>: Save or Update.</li><li>• <code>findById(id)</code>: Returns <code>Optional<Entity></code>.</li><li>• <code>findAll()</code>: Fetch all records.</li><li>• <code>deleteById(id)</code>: Delete by ID.</li><li>• <code>count()</code>: Get total row count.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "12-10-query-methods",
                    "name": "12.10 Query Methods",
                    "beginner": [
                        {
                            "content": "<h2>Spring Data Derived Query Methods</h2><p>• Automatically creates SQL queries based on method names!</p>",
                            "codeExamples": [
                                "public interface StudentRepository extends JpaRepository<Student, Long> {\n    List<Student> findByLastName(String lastName);\n    List<Student> findByEmailContaining(String keyword);\n    Optional<Student> findByEmail(String email);\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "12-11-custom-queries",
                    "name": "12.11 Custom Queries",
                    "beginner": [
                        {
                            "content": "<h2>Custom JPQL and Native Queries</h2><p>• Use <code>@Query</code> annotation for complex JPQL or native SQL queries.</p>",
                            "codeExamples": [
                                "public interface StudentRepository extends JpaRepository<Student, Long> {\n    // JPQL Query\n    @Query(\"SELECT s FROM Student s WHERE s.email = :email\")\n    Optional<Student> getByEmailJPQL(@Param(\"email\") String email);\n\n    // Native SQL Query\n    @Query(value = \"SELECT * FROM students WHERE first_name = ?1\", nativeQuery = true)\n    List<Student> getByFirstNameNative(String name);\n}"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "13-crud-rest-api",
            "name": "13. CRUD REST API",
            "topics": [
                {
                    "id": "13-1-create-operation",
                    "name": "13.1 Create Operation",
                    "beginner": [
                        {
                            "content": "<h2>Create Operation (HTTP POST)</h2>",
                            "codeExamples": [
                                "@PostMapping\npublic ResponseEntity<Student> createStudent(@RequestBody Student student) {\n    Student savedStudent = studentService.saveStudent(student);\n    return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "13-2-read-operation",
                    "name": "13.2 Read Operation",
                    "beginner": [
                        {
                            "content": "<h2>Read Operations (HTTP GET)</h2>",
                            "codeExamples": [
                                "@GetMapping\npublic List<Student> getAllStudents() {\n    return studentService.getAllStudents();\n}\n\n@GetMapping(\"/{id}\")\npublic ResponseEntity<Student> getStudentById(@PathVariable Long id) {\n    return ResponseEntity.ok(studentService.getStudentById(id));\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "13-3-update-operation",
                    "name": "13.3 Update Operation",
                    "beginner": [
                        {
                            "content": "<h2>Update Operation (HTTP PUT)</h2>",
                            "codeExamples": [
                                "@PutMapping(\"/{id}\")\npublic ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentDetails) {\n    Student updatedStudent = studentService.updateStudent(id, studentDetails);\n    return ResponseEntity.ok(updatedStudent);\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "13-4-delete-operation",
                    "name": "13.4 Delete Operation",
                    "beginner": [
                        {
                            "content": "<h2>Delete Operation (HTTP DELETE)</h2>",
                            "codeExamples": [
                                "@DeleteMapping(\"/{id}\")\npublic ResponseEntity<String> deleteStudent(@PathVariable Long id) {\n    studentService.deleteStudent(id);\n    return ResponseEntity.ok(\"Student deleted successfully!\");\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "13-5-complete-crud-api",
                    "name": "13.5 Complete CRUD API",
                    "beginner": [
                        {
                            "content": "<h2>Complete REST Controller Example</h2>",
                            "codeExamples": [
                                "package com.javaschool.demo.controller;\n\nimport com.javaschool.demo.model.Student;\nimport com.javaschool.demo.service.StudentService;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.List;\n\n@RestController\n@RequestMapping(\"/api/students\")\npublic class StudentController {\n\n    private final StudentService studentService;\n\n    public StudentController(StudentService studentService) {\n        this.studentService = studentService;\n    }\n\n    @PostMapping\n    public ResponseEntity<Student> save(@RequestBody Student s) {\n        return new ResponseEntity<>(studentService.saveStudent(s), HttpStatus.CREATED);\n    }\n\n    @GetMapping\n    public List<Student> findAll() {\n        return studentService.getAllStudents();\n    }\n\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<Student> findById(@PathVariable Long id) {\n        return ResponseEntity.ok(studentService.getStudentById(id));\n    }\n\n    @PutMapping(\"/{id}\")\n    public ResponseEntity<Student> update(@PathVariable Long id, @RequestBody Student s) {\n        return ResponseEntity.ok(studentService.updateStudent(id, s));\n    }\n\n    @DeleteMapping(\"/{id}\")\n    public ResponseEntity<Void> delete(@PathVariable Long id) {\n        studentService.deleteStudent(id);\n        return ResponseEntity.noContent().build();\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "13-6-testing-crud-api-with-postman",
                    "name": "13.6 Testing CRUD API with Postman",
                    "beginner": [
                        {
                            "content": "<h2>Testing Endpoints with Postman</h2><ul><li>• <b>POST</b> <code>http://localhost:8080/api/students</code> (Body: Raw JSON).</li><li>• <b>GET</b> <code>http://localhost:8080/api/students</code></li><li>• <b>GET</b> <code>http://localhost:8080/api/students/1</code></li><li>• <b>PUT</b> <code>http://localhost:8080/api/students/1</code></li><li>• <b>DELETE</b> <code>http://localhost:8080/api/students/1</code></li></ul>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "14-exception-handling",
            "name": "14. Exception Handling",
            "topics": [
                {
                    "id": "14-1-what-is-exception-handling",
                    "name": "14.1 What is Exception Handling?",
                    "beginner": [
                        {
                            "content": "<h2>Exception Handling in Spring Boot</h2><p>• Handles runtime exceptions gracefully and returns meaningful HTTP JSON error responses instead of standard stack traces.</p>"
                        }
                    ]
                },
                {
                    "id": "14-2-exceptionhandler",
                    "name": "14.2 @ExceptionHandler",
                    "beginner": [
                        {
                            "content": "<h2>@ExceptionHandler Annotation</h2><p>• Used within a controller class to handle specific exceptions thrown by controller methods.</p>"
                        }
                    ]
                },
                {
                    "id": "14-3-controlleradvice",
                    "name": "14.3 @ControllerAdvice",
                    "beginner": [
                        {
                            "content": "<h2>@ControllerAdvice</h2><p>• Allows handling exceptions globally across all controllers in a Spring application.</p>"
                        }
                    ]
                },
                {
                    "id": "14-4-restcontrolleradvice",
                    "name": "14.4 @RestControllerAdvice",
                    "beginner": [
                        {
                            "content": "<h2>@RestControllerAdvice</h2><p>• Combination of <code>@ControllerAdvice</code> and <code>@ResponseBody</code> that automatically serializes error objects to JSON response bodies.</p>"
                        }
                    ]
                },
                {
                    "id": "14-5-custom-exceptions",
                    "name": "14.5 Custom Exceptions",
                    "beginner": [
                        {
                            "content": "<h2>Creating Custom Exception Classes</h2>",
                            "codeExamples": [
                                "@ResponseStatus(value = HttpStatus.NOT_FOUND)\npublic class ResourceNotFoundException extends RuntimeException {\n    public ResourceNotFoundException(String message) {\n        super(message);\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "14-6-global-exception-handling",
                    "name": "14.6 Global Exception Handling",
                    "beginner": [
                        {
                            "content": "<h2>Global Exception Handler Class</h2>",
                            "codeExamples": [
                                "package com.javaschool.demo.exception;\n\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.bind.annotation.RestControllerAdvice;\nimport java.time.LocalDateTime;\n\n@RestControllerAdvice\npublic class GlobalExceptionHandler {\n\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<ErrorDetails> handleResourceNotFound(ResourceNotFoundException ex) {\n        ErrorDetails error = new ErrorDetails(LocalDateTime.now(), ex.getMessage(), \"RESOURCE_NOT_FOUND\");\n        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "14-7-custom-error-response",
                    "name": "14.7 Custom Error Response",
                    "beginner": [
                        {
                            "content": "<h2>Custom Error Response POJO</h2>",
                            "codeExamples": [
                                "public class ErrorDetails {\n    private LocalDateTime timestamp;\n    private String message;\n    private String errorCode;\n\n    public ErrorDetails(LocalDateTime timestamp, String message, String errorCode) {\n        this.timestamp = timestamp;\n        this.message = message;\n        this.errorCode = errorCode;\n    }\n    // getters\n}"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "15-validation",
            "name": "15. Validation",
            "topics": [
                {
                    "id": "15-1-what-is-validation",
                    "name": "15.1 What is Validation?",
                    "beginner": [
                        {
                            "content": "<h2>Validation in Spring Boot</h2><p>• Ensures incoming HTTP payload fields meet business data standards before processing.</p>"
                        }
                    ]
                },
                {
                    "id": "15-2-valid",
                    "name": "15.2 @Valid",
                    "beginner": [
                        {
                            "content": "<h2>@Valid Annotation</h2><p>• Triggers Java Bean Validation on an object passed as a <code>@RequestBody</code>.</p>",
                            "codeExamples": [
                                "@PostMapping\npublic ResponseEntity<Student> createStudent(@Valid @RequestBody StudentDTO dto) {\n    return ResponseEntity.ok(service.save(dto));\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "15-3-notnull",
                    "name": "15.3 @NotNull",
                    "beginner": [
                        {
                            "content": "<h2>@NotNull</h2><p>• Validates that field value is not null.</p>"
                        }
                    ]
                },
                {
                    "id": "15-4-notblank",
                    "name": "15.4 @NotBlank",
                    "beginner": [
                        {
                            "content": "<h2>@NotBlank</h2><p>• Validates that string field is not null and length after trimming is greater than zero.</p>"
                        }
                    ]
                },
                {
                    "id": "15-5-size",
                    "name": "15.5 @Size",
                    "beginner": [
                        {
                            "content": "<h2>@Size</h2><p>• Validates field length boundaries.</p>",
                            "codeExamples": [
                                "@NotBlank(message = \"Name is required\")\n@Size(min = 2, max = 50, message = \"Name must be between 2 and 50 characters\")\nprivate String name;"
                            ]
                        }
                    ]
                },
                {
                    "id": "15-6-email",
                    "name": "15.6 @Email",
                    "beginner": [
                        {
                            "content": "<h2>@Email</h2><p>• Validates valid email format syntax.</p>",
                            "codeExamples": [
                                "@Email(message = \"Email format is invalid\")\nprivate String email;"
                            ]
                        }
                    ]
                },
                {
                    "id": "15-7-min-and-max",
                    "name": "15.7 @Min and @Max",
                    "beginner": [
                        {
                            "content": "<h2>@Min and @Max</h2><p>• Validates numerical lower and upper bounds.</p>",
                            "codeExamples": [
                                "@Min(value = 18, message = \"Age must be at least 18\")\n@Max(value = 100, message = \"Age cannot exceed 100\")\nprivate int age;"
                            ]
                        }
                    ]
                },
                {
                    "id": "15-8-validation-error-handling",
                    "name": "15.8 Validation Error Handling",
                    "beginner": [
                        {
                            "content": "<h2>Handling MethodArgumentNotValidException</h2>",
                            "codeExamples": [
                                "@ExceptionHandler(MethodArgumentNotValidException.class)\npublic ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {\n    Map<String, String> errors = new HashMap<>();\n    ex.getBindingResult().getFieldErrors().forEach(error -> \n        errors.put(error.getField(), error.getDefaultMessage()));\n    return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);\n}"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "16-spring-boot-profiles",
            "name": "16. Spring Boot Profiles",
            "topics": [
                {
                    "id": "16-1-what-is-profile",
                    "name": "16.1 What is Profile?",
                    "beginner": [
                        {
                            "content": "<h2>What is a Profile?</h2><p>• <b>Spring Profiles</b> provide a way to segregate parts of application configuration and make it available only in specific environments (Dev, Test, Prod).</p>"
                        }
                    ]
                },
                {
                    "id": "16-2-development-profile",
                    "name": "16.2 Development Profile",
                    "beginner": [
                        {
                            "content": "<h2>Development Profile (dev)</h2><p>• Tailored for local development with verbose logging and auto SQL creation.</p>"
                        }
                    ]
                },
                {
                    "id": "16-3-testing-profile",
                    "name": "16.3 Testing Profile",
                    "beginner": [
                        {
                            "content": "<h2>Testing Profile (test)</h2><p>• Uses fast in-memory databases like H2 for rapid automated test runs.</p>"
                        }
                    ]
                },
                {
                    "id": "16-4-production-profile",
                    "name": "16.4 Production Profile",
                    "beginner": [
                        {
                            "content": "<h2>Production Profile (prod)</h2><p>• Strict security settings, connection pooling, and externalized secrets.</p>"
                        }
                    ]
                },
                {
                    "id": "16-5-application-dev-properties",
                    "name": "16.5 application-dev.properties",
                    "beginner": [
                        {
                            "content": "<h2>application-dev.properties</h2>",
                            "codeExamples": [
                                "server.port=8081\nspring.datasource.url=jdbc:h2:mem:devdb\nspring.jpa.show-sql=true"
                            ]
                        }
                    ]
                },
                {
                    "id": "16-6-application-prod-properties",
                    "name": "16.6 application-prod.properties",
                    "beginner": [
                        {
                            "content": "<h2>application-prod.properties</h2>",
                            "codeExamples": [
                                "server.port=80\nspring.datasource.url=jdbc:mysql://prod-db:3306/schooldb\nspring.jpa.show-sql=false\nspring.jpa.hibernate.ddl-auto=validate"
                            ]
                        }
                    ]
                },
                {
                    "id": "16-7-activating-profiles",
                    "name": "16.7 Activating Profiles",
                    "beginner": [
                        {
                            "content": "<h2>Ways to Activate a Profile</h2>",
                            "codeExamples": [
                                "# Option 1: In application.properties\nspring.profiles.active=dev\n\n# Option 2: Via command line option\njava -jar app.jar --spring.profiles.active=prod\n\n# Option 3: JVM parameter\njava -Dspring.profiles.active=test -jar app.jar"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "17-spring-boot-actuator",
            "name": "17. Spring Boot Actuator",
            "topics": [
                {
                    "id": "17-1-what-is-actuator",
                    "name": "17.1 What is Actuator?",
                    "beginner": [
                        {
                            "content": "<h2>What is Spring Boot Actuator?</h2><p>• Provides production-ready features like health checks, metrics, auditing, and HTTP tracing endpoints out of the box.</p>"
                        }
                    ]
                },
                {
                    "id": "17-2-actuator-dependency",
                    "name": "17.2 Actuator Dependency",
                    "beginner": [
                        {
                            "content": "<h2>Adding Actuator Dependency</h2>",
                            "codeExamples": [
                                "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>"
                            ]
                        }
                    ]
                },
                {
                    "id": "17-3-health-endpoint",
                    "name": "17.3 Health Endpoint",
                    "beginner": [
                        {
                            "content": "<h2>Health Endpoint (/actuator/health)</h2><p>• Indicates overall application status (UP/DOWN) and database connectivity status.</p>",
                            "codeExamples": [
                                "# application.properties configuration\nmanagement.endpoints.web.exposure.include=health,info,metrics\nmanagement.endpoint.health.show-details=always"
                            ]
                        }
                    ]
                },
                {
                    "id": "17-4-info-endpoint",
                    "name": "17.4 Info Endpoint",
                    "beginner": [
                        {
                            "content": "<h2>Info Endpoint (/actuator/info)</h2><p>• Displays general application information (build version, description, git commit details).</p>"
                        }
                    ]
                },
                {
                    "id": "17-5-metrics",
                    "name": "17.5 Metrics",
                    "beginner": [
                        {
                            "content": "<h2>Metrics Endpoint (/actuator/metrics)</h2><p>• Exposes JVM memory usage, garbage collection, CPU utilization, and HTTP request counters.</p>"
                        }
                    ]
                },
                {
                    "id": "17-6-monitoring-spring-boot-application",
                    "name": "17.6 Monitoring Spring Boot Application",
                    "beginner": [
                        {
                            "content": "<h2>Prometheus & Grafana Monitoring</h2><p>• Actuator integrates seamlessly with Prometheus and Micrometer to display real-time dashboard analytics in Grafana.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "18-spring-boot-testing",
            "name": "18. Spring Boot Testing",
            "topics": [
                {
                    "id": "18-1-unit-testing",
                    "name": "18.1 Unit Testing",
                    "beginner": [
                        {
                            "content": "<h2>Unit Testing</h2><p>• Testing individual components (classes/methods) in isolation without starting the full Spring context.</p>"
                        }
                    ]
                },
                {
                    "id": "18-2-integration-testing",
                    "name": "18.2 Integration Testing",
                    "beginner": [
                        {
                            "content": "<h2>Integration Testing</h2><p>• Testing interactions between components (Controller -> Service -> Database) with the Spring Context initialized.</p>"
                        }
                    ]
                },
                {
                    "id": "18-3-springboottest",
                    "name": "18.3 @SpringBootTest",
                    "beginner": [
                        {
                            "content": "<h2>@SpringBootTest</h2><p>• Bootstraps the full Spring ApplicationContext for integration tests.</p>"
                        }
                    ]
                },
                {
                    "id": "18-4-junit",
                    "name": "18.4 JUnit",
                    "beginner": [
                        {
                            "content": "<h2>JUnit 5 Framework</h2><p>• Standard testing framework using annotations like <code>@Test</code>, <code>@BeforeEach</code>, and <code>@DisplayName</code>.</p>"
                        }
                    ]
                },
                {
                    "id": "18-5-mockito",
                    "name": "18.5 Mockito",
                    "beginner": [
                        {
                            "content": "<h2>Mockito Framework</h2><p>• Mocking framework used to simulate behavior of dependencies using <code>@Mock</code> and <code>@InjectMocks</code>.</p>"
                        }
                    ]
                },
                {
                    "id": "18-6-controller-testing",
                    "name": "18.6 Controller Testing",
                    "beginner": [
                        {
                            "content": "<h2>Controller Layer Testing with @WebMvcTest</h2>",
                            "codeExamples": [
                                "@WebMvcTest(StudentController.class)\nclass StudentControllerTest {\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockBean\n    private StudentService studentService;\n\n    @Test\n    void shouldReturnStudent() throws Exception {\n        Mockito.when(studentService.getStudentById(1L)).thenReturn(new Student(1L, \"John\", \"john@email.com\"));\n        mockMvc.perform(get(\"/api/students/1\"))\n               .andExpect(status().isOk())\n               .andExpect(jsonPath(\"$.name\").value(\"John\"));\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "18-7-service-testing",
                    "name": "18.7 Service Testing",
                    "beginner": [
                        {
                            "content": "<h2>Service Layer Unit Test Example</h2>",
                            "codeExamples": [
                                "@ExtendWith(MockitoExtension.class)\nclass StudentServiceTest {\n    @Mock\n    private StudentRepository repository;\n\n    @InjectMocks\n    private StudentServiceImpl service;\n\n    @Test\n    void testSave() {\n        Student s = new Student(null, \"Alice\", \"alice@email.com\");\n        Mockito.when(repository.save(s)).thenReturn(new Student(1L, \"Alice\", \"alice@email.com\"));\n        Student saved = service.saveStudent(s);\n        Assertions.assertNotNull(saved.getId());\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "18-8-repository-testing",
                    "name": "18.8 Repository Testing",
                    "beginner": [
                        {
                            "content": "<h2>Repository Testing with @DataJpaTest</h2>",
                            "codeExamples": [
                                "@DataJpaTest\nclass StudentRepositoryTest {\n    @Autowired\n    private StudentRepository repository;\n\n    @Test\n    void testFindByEmail() {\n        Student s = repository.save(new Student(null, \"Bob\", \"bob@email.com\"));\n        Optional<Student> found = repository.findByEmail(\"bob@email.com\");\n        Assertions.assertTrue(found.isPresent());\n    }\n}"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "19-spring-boot-security",
            "name": "19. Spring Boot Security",
            "topics": [
                {
                    "id": "19-1-introduction-to-spring-security",
                    "name": "19.1 Introduction to Spring Security",
                    "beginner": [
                        {
                            "content": "<h2>Introduction to Spring Security</h2><p>• Robust authentication and access control framework protecting Spring applications against CSRF, XSS, Session Fixation, and unauthorized access.</p>"
                        }
                    ]
                },
                {
                    "id": "19-2-authentication",
                    "name": "19.2 Authentication",
                    "beginner": [
                        {
                            "content": "<h2>Authentication</h2><p>• Verifying the identity of a user (Who are you?).</p>"
                        }
                    ]
                },
                {
                    "id": "19-3-authorization",
                    "name": "19.3 Authorization",
                    "beginner": [
                        {
                            "content": "<h2>Authorization</h2><p>• Verifying permissions to access specific API endpoints or resources (What are you allowed to do?).</p>"
                        }
                    ]
                },
                {
                    "id": "19-4-password-encoding",
                    "name": "19.4 Password Encoding",
                    "beginner": [
                        {
                            "content": "<h2>BCrypt Password Encoding</h2><p>• Always hash passwords using <code>BCryptPasswordEncoder</code> before storing in database.</p>",
                            "codeExamples": [
                                "@Bean\npublic PasswordEncoder passwordEncoder() {\n    return new BCryptPasswordEncoder();\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "19-5-security-configuration",
                    "name": "19.5 Security Configuration",
                    "beginner": [
                        {
                            "content": "<h2>SecurityFilterChain Bean Configuration (Spring Security 6)</h2>",
                            "codeExamples": [
                                "@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http\n            .csrf(csrf -> csrf.disable())\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/api/public/**\").permitAll()\n                .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\n                .anyRequest().authenticated()\n            )\n            .httpBasic(Customizer.withDefaults());\n        return http.build();\n    }\n}"
                            ]
                        }
                    ]
                },
                {
                    "id": "19-6-role-based-authorization",
                    "name": "19.6 Role-Based Authorization",
                    "beginner": [
                        {
                            "content": "<h2>Role-Based Access Control (RBAC)</h2><p>• Restricting endpoint access based on user roles like <code>ROLE_USER</code>, <code>ROLE_ADMIN</code>.</p>"
                        }
                    ]
                },
                {
                    "id": "19-7-jwt-authentication",
                    "name": "19.7 JWT Authentication",
                    "beginner": [
                        {
                            "content": "<h2>JWT (JSON Web Token) Authentication</h2><p>• Stateless authentication mechanism widely used in modern REST microservices where client passes bearer token in <code>Authorization</code> header.</p>"
                        }
                    ]
                }
            ]
        },
        {
            "id": "20-spring-boot-deployment",
            "name": "20. Spring Boot Deployment",
            "topics": [
                {
                    "id": "20-1-building-the-application",
                    "name": "20.1 Building the Application",
                    "beginner": [
                        {
                            "content": "<h2>Building Executable Package</h2>",
                            "codeExamples": [
                                "# Package application into target/ folder\n./mvnw clean package -DskipTests"
                            ]
                        }
                    ]
                },
                {
                    "id": "20-2-executable-jar",
                    "name": "20.2 Executable JAR",
                    "beginner": [
                        {
                            "content": "<h2>Fat / Executable JAR</h2><p>• Contains compiled class files, application resources, and embedded web server inside a single portable binary file.</p>"
                        }
                    ]
                },
                {
                    "id": "20-3-running-jar-file",
                    "name": "20.3 Running JAR File",
                    "beginner": [
                        {
                            "content": "<h2>Executing Spring Boot JAR</h2>",
                            "codeExamples": [
                                "java -jar target/demo-0.0.1-SNAPSHOT.jar"
                            ]
                        }
                    ]
                },
                {
                    "id": "20-4-environment-configuration",
                    "name": "20.4 Environment Configuration",
                    "beginner": [
                        {
                            "content": "<h2>Configuring Production Properties</h2><p>• Passing external application properties at runtime:</p>",
                            "codeExamples": [
                                "java -jar app.jar --spring.config.location=file:/etc/config/application.properties"
                            ]
                        }
                    ]
                },
                {
                    "id": "20-5-dockerizing-spring-boot",
                    "name": "20.5 Dockerizing Spring Boot",
                    "beginner": [
                        {
                            "content": "<h2>Dockerfile Example for Spring Boot</h2>",
                            "codeExamples": [
                                "# Dockerfile\nFROM eclipse-temurin:17-jdk-alpine\nVOLUME /tmp\nCOPY target/*.jar app.jar\nENTRYPOINT [\"java\",\"-jar\",\"/app.jar\"]"
                            ]
                        }
                    ]
                },
                {
                    "id": "20-6-deployment",
                    "name": "20.6 Deployment",
                    "beginner": [
                        {
                            "content": "<h2>Deployment Destinations</h2><ul><li>• Cloud Platforms: AWS EC2 / ECS, Azure App Service, Google Cloud Run.</li><li>• Kubernetes Clusters (K8s).</li><li>• On-Premises Linux Servers (Systemd Service).</li></ul>"
                        }
                    ]
                },
                {
                    "id": "20-7-production-configuration",
                    "name": "20.7 Production Configuration",
                    "beginner": [
                        {
                            "content": "<h2>Production Checklist</h2><ul><li>• Disable <code>ddl-auto=create/update</code>; use Liquibase or Flyway DB migration scripts.</li><li>• Enable SSL/TLS encryption.</li><li>• Secure Actuator monitoring endpoints.</li><li>• Configure HikariCP connection pool sizes.</li></ul>"
                        }
                    ]
                }
            ]
        }
    ],
    "cheatNotes": [
        "⚡ @SpringBootApplication = @SpringBootConfiguration + @EnableAutoConfiguration + @ComponentScan",
        "⚡ Default Embedded Web Server: Tomcat running on port 8080",
        "⚡ Change port in application.properties: server.port=9090",
        "⚡ Modern DI: Use Constructor Injection over Field Injection",
        "⚡ Spring Data JPA: Extend JpaRepository<Entity, ID> to get full CRUD automatically",
        "⚡ Query Derivation: Spring Data converts method names like findByEmail() into SQL queries",
        "⚡ Exception Handling: Use @RestControllerAdvice + @ExceptionHandler for clean global error handling",
        "⚡ Validation: Use @Valid on @RequestBody with JSR-380 annotations (@NotNull, @NotBlank, @Size)",
        "⚡ Actuator: Inspect health at /actuator/health and metrics at /actuator/metrics",
        "⚡ Run Executable JAR: java -jar target/app.jar --spring.profiles.active=prod"
    ],
    "interviewQuestions": [
        {
            "company": "TCS / Infosys",
            "questions": [
                "What is Spring Boot and how does it differ from Spring Framework?",
                "What is the role of @SpringBootApplication annotation?",
                "How does Auto-Configuration work in Spring Boot?",
                "What are Starter Dependencies and why are they used?"
            ]
        },
        {
            "company": "Amazon / Google",
            "questions": [
                "How does Spring Boot resolve circular dependency issues during bean creation?",
                "Explain the internal execution flow of SpringApplication.run().",
                "How do you implement stateless JWT authentication in Spring Security 6?",
                "How would you optimize JPA N+1 query problems in a Spring Boot microservice?"
            ]
        },
        {
            "company": "Wipro / Accenture",
            "questions": [
                "How do you create a custom annotation in Spring Boot?",
                "What is the difference between @Component, @Service, and @Repository?",
                "How do you handle exceptions globally in RESTful APIs?",
                "What are Spring Boot Profiles and how do you activate them?"
            ]
        }
    ]
}
];
