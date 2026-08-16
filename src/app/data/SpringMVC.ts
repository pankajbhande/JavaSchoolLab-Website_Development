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

export const SpringMVC: Course[] = [

    {
        id: 'spring-mvc',
        name: 'Spring MVC',
        icon: 'spring-mvc_icon_png',

        subTopics: [

            {
                id: 'introspringmvc',
                name: 'Introduction to Spring MVC',

                topics: [

                    // =====================================================
                    // 1.1 What is Spring MVC?
                    // =====================================================

                    {
                        id: 'what-is-spring-mvc',
                        name: 'What is Spring MVC?',

                        beginner: [
                            {
                                content: `
<h2>What is Spring MVC?</h2>

<p>• Spring MVC is a web framework provided by the Spring Framework for building Java web applications.</p><br>

<h3>MVC Stands For</h3>

<ul>
<li><strong>• Model:</strong> Represents application data and application state.</li>
<li><strong>• View:</strong> Displays data to the user.</li>
<li><strong>• Controller:</strong> Handles client requests and controls the application flow.</li>
</ul><br>

<h3>Why Spring MVC?</h3>

<ul>
<li>• Used to develop Java web applications.</li>
<li>• Handles HTTP requests and responses.</li>
<li>• Provides separation of concerns.</li>
<li>• Supports form-based web applications.</li>
<li>• Supports REST API development.</li>
</ul><br>

<h3>Basic Request Flow</h3>

<ol>
<li>• Client sends an HTTP request.</li>
<li>• DispatcherServlet receives the request.</li>
<li>• Controller processes the request.</li>
<li>• Business logic is executed.</li>
<li>• Response is returned to the client.</li>
</ol>
`
                            },

                            {
                                content: `
<h3>Simple Spring MVC Controller</h3>

<p>• A controller handles requests sent by the client.</p>

<pre>
@RestController
public class StudentController {

    @GetMapping("/student")
    public String getStudent() {
        return "Student Details";
    }
}
</pre>

<p>• When the client sends a GET request to <strong>/student</strong>, the controller method is executed.</p>
`,

                                codeExamples: [
                                    `@RestController
public class StudentController {

    @GetMapping("/student")
    public String getStudent() {
        return "Student Details";
    }
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Spring MVC Architecture</h2>

<p>• Spring MVC follows the Model-View-Controller design pattern.</p>

<ul>
<li><strong>• Model:</strong> Contains application data.</li>
<li><strong>• View:</strong> Displays data to the user.</li>
<li><strong>• Controller:</strong> Handles HTTP requests.</li>
<li><strong>• DispatcherServlet:</strong> Acts as the Front Controller.</li>
</ul><br>

<h3>Typical Application Flow</h3>

<p>Client → DispatcherServlet → Controller → Service → Repository → Database</p>
`
                            },

                            {
                                content: `
<h3>Spring MVC and REST APIs</h3>

<p>• Spring MVC can also be used to develop RESTful web services.</p>

<ul>
<li>• GET – Retrieve data</li>
<li>• POST – Create data</li>
<li>• PUT – Update data</li>
<li>• DELETE – Delete data</li>
</ul>
`,

                                codeExamples: [
                                    `@RestController
@RequestMapping("/students")
public class StudentController {

    @GetMapping
    public String getStudents() {
        return "All Students";
    }

    @PostMapping
    public String addStudent() {
        return "Student Added";
    }
}`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Spring MVC Request Processing</h2>

<p>• Spring MVC uses the Front Controller design pattern through DispatcherServlet.</p><br>

<h3>Request Processing Flow</h3>

<ol>
<li>• Client sends an HTTP request.</li>
<li>• DispatcherServlet receives the request.</li>
<li>• HandlerMapping identifies the appropriate handler.</li>
<li>• Controller method is invoked.</li>
<li>• Business logic is executed through the service layer.</li>
<li>• Repository communicates with the database when required.</li>
<li>• Response is generated.</li>
<li>• DispatcherServlet sends the response to the client.</li>
</ol>
`
                            },

                            {
                                content: `
<h3>Layered Architecture</h3>

<ul>
<li><strong>• Controller Layer:</strong> Handles HTTP requests and responses.</li>
<li><strong>• Service Layer:</strong> Contains business logic.</li>
<li><strong>• Repository Layer:</strong> Communicates with the database.</li>
<li><strong>• Entity Layer:</strong> Represents persistent data.</li>
<li><strong>• DTO Layer:</strong> Transfers data between application layers.</li>
</ul>

<p>• Layered architecture improves maintainability, testability and scalability.</p>
`
                            }
                        ]
                    },


                    // =====================================================
                    // 1.2 Features of Spring MVC
                    // =====================================================

                    {
                        id: 'features-of-spring-mvc',
                        name: 'Features of Spring MVC',

                        beginner: [
                            {
                                content: `
<h2>Features of Spring MVC</h2>

<ul>
<li>• MVC design pattern</li>
<li>• Easy request mapping</li>
<li>• Dependency Injection support</li>
<li>• REST API support</li>
<li>• Data binding</li>
<li>• Form validation</li>
<li>• Exception handling</li>
<li>• Multiple view technology support</li>
</ul>
`
                            },

                            {
                                content: `
<h3>Request Mapping</h3>

<p>• Spring MVC provides annotations for mapping HTTP requests to controller methods.</p>

<ul>
<li>• @RequestMapping</li>
<li>• @GetMapping</li>
<li>• @PostMapping</li>
<li>• @PutMapping</li>
<li>• @DeleteMapping</li>
<li>• @PatchMapping</li>
</ul>
`,

                                codeExamples: [
                                    `@GetMapping("/students")
public String getStudents() {
    return "students";
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Important Spring MVC Features</h2>

<h3>1. Dependency Injection</h3>

<p>• Spring manages objects and their dependencies using the IoC container and Dependency Injection.</p>

<h3>2. Data Binding</h3>

<p>• Request parameters and form data can be bound to Java objects.</p>

<h3>3. Validation</h3>

<p>• Spring MVC supports Bean Validation using annotations such as @Valid and @NotNull.</p>

<h3>4. Exception Handling</h3>

<p>• Exceptions can be handled using @ExceptionHandler and @ControllerAdvice.</p>
`
                            },

                            {
                                content: `
<h3>RESTful Web Services</h3>

<p>• Spring MVC supports REST API development using annotations such as:</p>

<ul>
<li>• @RestController</li>
<li>• @RequestBody</li>
<li>• @ResponseBody</li>
<li>• @RequestMapping</li>
<li>• @GetMapping</li>
<li>• @PostMapping</li>
</ul>

<p>• JSON is commonly used for REST API request and response data.</p>
`
                            },

                            {
                                content: `
<h3>Flexible View Technologies</h3>

<p>• Spring MVC can work with different view technologies.</p>

<ul>
<li>• JSP</li>
<li>• Thymeleaf</li>
<li>• FreeMarker</li>
<li>• HTML-based views</li>
</ul>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Advanced Spring MVC Features</h2>

<ul>
<li>• Handler Interceptors</li>
<li>• Custom argument resolvers</li>
<li>• Custom message converters</li>
<li>• Content negotiation</li>
<li>• Global exception handling</li>
<li>• Custom validators</li>
<li>• CORS support</li>
<li>• Multipart file upload</li>
<li>• HTTP message conversion</li>
</ul>
`
                            },

                            {
                                content: `
<h3>HTTP Message Converters</h3>

<p>• HttpMessageConverters convert HTTP request and response bodies between Java objects and formats such as JSON.</p>

<p>• Jackson is commonly used for JSON serialization and deserialization in Spring applications.</p>
`
                            }
                        ]
                    },


                    // =====================================================
                    // 1.3 Advantages of Spring MVC
                    // =====================================================

                    {
                        id: 'advantages-of-spring-mvc',
                        name: 'Advantages of Spring MVC',

                        beginner: [
                            {
                                content: `
<h2>Advantages of Spring MVC</h2>

<ul>
<li>• Easy to develop Java web applications.</li>
<li>• Clear separation of responsibilities.</li>
<li>• Supports reusable components.</li>
<li>• Easy request handling.</li>
<li>• Supports REST APIs.</li>
<li>• Supports dependency injection.</li>
<li>• Easy integration with other Spring modules.</li>
</ul><br>

<h3>Separation of Concerns</h3>

<p>• MVC separates application responsibilities into Model, View and Controller components.</p>
`
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Why Use Spring MVC?</h2>

<ul>
<li><strong>• Maintainability:</strong> Components are separated into different responsibilities.</li>

<li><strong>• Testability:</strong> Controllers, services and repositories can be tested independently.</li>

<li><strong>• Flexibility:</strong> Supports different view technologies and REST APIs.</li>

<li><strong>• Integration:</strong> Works with Spring Security, Spring Data and other Spring modules.</li>

<li><strong>• Scalability:</strong> Layered architecture makes applications easier to expand.</li>
</ul>
`
                            },

                            {
                                content: `
<h3>Integration with Spring Ecosystem</h3>

<p>• Spring MVC can work together with other Spring modules:</p>

<ul>
<li>• Spring Security – Authentication and Authorization</li>
<li>• Spring Data JPA – Database access</li>
<li>• Spring Boot – Simplified configuration</li>
<li>• Spring Validation – Input validation</li>
<li>• Spring AOP – Cross-cutting concerns</li>
</ul>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Enterprise Advantages</h2>

<ul>
<li>• Supports layered and modular architecture.</li>
<li>• Provides clean separation between presentation and business logic.</li>
<li>• Supports RESTful web services.</li>
<li>• Provides centralized exception handling.</li>
<li>• Supports interceptors and filters.</li>
<li>• Integrates with security and persistence technologies.</li>
<li>• Suitable for large-scale enterprise applications.</li>
</ul>
`
                            }
                        ]
                    },


                    // =====================================================
                    // 1.4 Spring MVC vs Spring Framework
                    // =====================================================

                    {
                        id: 'spring-mvc-vs-spring-framework',
                        name: 'Spring MVC vs Spring Framework',

                        beginner: [
                            {
                                content: `
<h2>Spring MVC vs Spring Framework</h2>

<p>• Spring Framework is a comprehensive framework and ecosystem for developing Java applications.</p>

<p>• Spring MVC is a web application framework/module within the Spring ecosystem.</p>

<h3>Simple Relationship</h3>

<p>Spring Framework → Spring MVC → Web Application</p>
`
                            },

                            {
                                content: `
<h3>Comparison</h3>

<table border="1">
<tr>
<th>Spring Framework</th>
<th>Spring MVC</th>
</tr>

<tr>
<td>Complete Spring ecosystem</td>
<td>Web framework/module</td>
</tr>

<tr>
<td>Contains many modules</td>
<td>Focuses on web applications</td>
</tr>

<tr>
<td>Provides IoC, DI, AOP, Data, Security etc.</td>
<td>Provides MVC and HTTP request handling</td>
</tr>

<tr>
<td>Can be used for different application types</td>
<td>Mainly used for web applications and REST APIs</td>
</tr>
</table>
`
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Major Spring Framework Modules</h2>

<ul>
<li>• Spring Core</li>
<li>• Spring Beans</li>
<li>• Spring Context</li>
<li>• Spring AOP</li>
<li>• Spring JDBC</li>
<li>• Spring ORM</li>
<li>• Spring Transaction Management</li>
<li>• Spring MVC</li>
<li>• Spring Security</li>
</ul>

<p>• Spring MVC is one part of the larger Spring Framework ecosystem.</p>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h3>Architectural Difference</h3>

<p>• Spring Framework provides the core IoC container, dependency injection and infrastructure used by Spring applications.</p>

<p>• Spring MVC builds on Spring's core infrastructure and provides HTTP request processing, controller handling, data binding, validation, view resolution and REST support.</p>

<p>• Therefore, Spring MVC is a specialized web framework within the broader Spring ecosystem.</p>
`
                            }
                        ]
                    },


                    // =====================================================
                    // 1.5 Spring MVC vs Spring Boot
                    // =====================================================

                    {
                        id: 'spring-mvc-vs-spring-boot',
                        name: 'Spring MVC vs Spring Boot',

                        beginner: [
                            {
                                content: `
<h2>Spring MVC vs Spring Boot</h2>

<p>• Spring MVC is a web framework used to develop Java web applications and REST APIs.</p>

<p>• Spring Boot is a Spring-based framework that simplifies configuration, development and deployment of Spring applications.</p>

<h3>Simple Difference</h3>

<ul>
<li><strong>• Spring MVC:</strong> Provides web application and request-handling features.</li>

<li><strong>• Spring Boot:</strong> Simplifies Spring application setup and configuration.</li>
</ul>
`
                            },

                            {
                                content: `
<h3>Comparison</h3>

<table border="1">

<tr>
<th>Spring MVC</th>
<th>Spring Boot</th>
</tr>

<tr>
<td>Web framework</td>
<td>Spring application development framework</td>
</tr>

<tr>
<td>Focuses on web development</td>
<td>Simplifies development of Spring applications</td>
</tr>

<tr>
<td>Traditional configuration may be required</td>
<td>Provides auto-configuration</td>
</tr>

<tr>
<td>Usually requires server configuration</td>
<td>Supports embedded servers</td>
</tr>

<tr>
<td>Can be used independently</td>
<td>Commonly uses Spring MVC for web applications</td>
</tr>

</table>
`
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Spring Boot Features Related to Spring MVC</h2>

<ul>
<li>• Auto-configuration</li>
<li>• Starter dependencies</li>
<li>• Embedded web servers</li>
<li>• Externalized configuration</li>
<li>• Production-ready features</li>
<li>• Minimal manual configuration</li>
</ul>

<p>• The <strong>spring-boot-starter-web</strong> dependency provides the common dependencies needed for Spring MVC-based web applications.</p>
`
                            },

                            {
                                content: `
<h3>Traditional Spring MVC vs Spring Boot</h3>

<p>• In a traditional Spring MVC application, developers may need to configure components such as DispatcherServlet, application context and view resolution explicitly.</p>

<p>• Spring Boot uses auto-configuration and convention-based configuration to reduce manual setup.</p>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Relationship Between Spring MVC and Spring Boot</h2>

<p>• Spring Boot does not replace Spring MVC.</p>

<p>• Spring Boot commonly uses Spring MVC as its web layer when developing servlet-based web applications.</p>

<h3>Typical Architecture</h3>

<p>Spring Boot Application</p>

<p>↓</p>

<p>Spring MVC</p>

<p>↓</p>

<p>DispatcherServlet</p>

<p>↓</p>

<p>Controller → Service → Repository → Database</p>
`
                            },

                            {
                                content: `
<h3>Spring Boot Web Dependency</h3>

<p>• The Spring Boot Web starter provides commonly required dependencies for building web applications and REST APIs.</p>

<pre>
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
&lt;/dependency&gt;
</pre>

<p>• This allows developers to build Spring MVC-based applications with much less manual configuration.</p>
`
                            }
                        ]
                    }

                ]
            },
    

            {
                id: 'mvc-architecture',
                name: 'MVC Architecture',

                topics: [
                    // =====================================================
                    // 2.1 Model
                    // =====================================================
                    {
                        id: 'mvc-model',
                        name: '2.1 Model',

                        beginner: [
                            {
                                content: `
<h2>2.1 What is Model in MVC?</h2>

<p>• The <strong>Model</strong> represents the data and business state of an application.</p>
<p>• It encapsulates application logic, database records, and values that need to be transferred between the Controller and the View.</p><br>

<h3>Key Responsibilities of Model</h3>
<ul>
<li>• Holds business data (e.g., Student, Product, Order).</li>
<li>• Encapsulates properties and state via getters and setters.</li>
<li>• Carries data between the database/service layer and presentation layer.</li>
<li>• Independent of UI display logic.</li>
</ul><br>

<h3>Simple Model Example (Java POJO)</h3>
<p>• In Java, a Model is typically a standard Plain Old Java Object (POJO) containing private fields, constructors, getters, and setters.</p>
`,
                                codeExamples: [
                                    `public class Student {
    private int id;
    private String name;
    private String email;

    // Constructors
    public Student() {}

    public Student(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Model in Spring MVC</h2>

<p>• Spring MVC provides dedicated abstractions to pass data to views:</p>
<ul>
<li><strong>• org.springframework.ui.Model:</strong> A lightweight interface used to add attributes in controller methods.</li>
<li><strong>• ModelMap:</strong> An implementation based on LinkedHashMap with convenient chainable methods.</li>
<li><strong>• ModelAndView:</strong> A container that holds both the Model data and the View name/reference.</li>
</ul><br>

<h3>Using Model in a Controller</h3>
<p>• When a controller method accepts <code>Model model</code>, Spring injects an instance where you can call <code>addAttribute(attributeName, attributeValue)</code>.</p>
`,
                                codeExamples: [
                                    `import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class StudentViewController {

    // Approach 1: Using org.springframework.ui.Model
    @GetMapping("/student")
    public String getStudent(Model model) {
        Student student = new Student(101, "Pratiksha", "pratiksha@example.com");
        model.addAttribute("student", student);
        model.addAttribute("title", "Student Profile");
        return "student-view"; // View name
    }

    // Approach 2: Using ModelAndView
    @GetMapping("/student-mav")
    public ModelAndView getStudentWithModelAndView() {
        ModelAndView mav = new ModelAndView("student-view");
        mav.addObject("student", new Student(102, "Alex", "alex@example.com"));
        mav.addObject("title", "Student Details");
        return mav;
    }
}`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Advanced Model Patterns & @ModelAttribute</h2>

<p>• In enterprise applications, Model objects are structured using layered patterns:</p>
<ul>
<li><strong>• Entity:</strong> Mapped directly to database tables (e.g., JPA <code>@Entity</code>).</li>
<li><strong>• DTO (Data Transfer Object):</strong> Optimized object for transferring data over the network or between layers without exposing entity internals.</li>
<li><strong>• View Model:</strong> Specialized model tailored specifically for view rendering requirements.</li>
</ul><br>

<h3>The @ModelAttribute Annotation</h3>
<p>• <strong>Method level:</strong> Pre-populates common model attributes for all handler methods in a controller.</p>
<p>• <strong>Parameter level:</strong> Automatically binds incoming HTTP request parameters to a Java object.</p>
`,
                                codeExamples: [
                                    `@Controller
@RequestMapping("/students")
public class StudentRegistrationController {

    // Populates reference data for all handler methods in this controller
    @ModelAttribute("departments")
    public List<String> populateDepartments() {
        return List.of("Computer Science", "Information Technology", "Electronics");
    }

    // Displays the registration form with an empty backing object
    @GetMapping("/register")
    public String showForm(Model model) {
        model.addAttribute("studentDto", new StudentRegistrationDTO());
        return "register-form";
    }

    // Binds submitted form data directly to studentDto and handles redirect attributes
    @PostMapping("/register")
    public String processRegistration(@Valid @ModelAttribute("studentDto") StudentRegistrationDTO dto,
                                      BindingResult result,
                                      RedirectAttributes redirectAttributes) {
        if (result.hasErrors()) {
            return "register-form";
        }
        redirectAttributes.addFlashAttribute("message", "Registration successful!");
        return "redirect:/students/success";
    }
}`
                                ]
                            }
                        ]
                    },

                    // =====================================================
                    // 2.2 View
                    // =====================================================
                    {
                        id: 'mvc-view',
                        name: '2.2 View',

                        beginner: [
                            {
                                content: `
<h2>2.2 What is View in MVC?</h2>

<p>• The <strong>View</strong> is the presentation layer responsible for rendering data to the user.</p>
<p>• It consumes the Model data passed by the Controller and formats it into an interactive user interface (HTML/CSS).</p><br>

<h3>Responsibilities of View</h3>
<ul>
<li>• Present model data clearly to end users.</li>
<li>• Render forms and UI components for user input.</li>
<li>• Keep UI rendering isolated from business logic and database access.</li>
<li>• Maintain a clean, responsive layout.</li>
</ul><br>

<h3>Common View Technologies</h3>
<ul>
<li><strong>• Thymeleaf:</strong> Modern server-side Java template engine for web environments.</li>
<li><strong>• JSP (JavaServer Pages):</strong> Traditional template technology using JSTL and EL.</li>
<li><strong>• FreeMarker:</strong> Java-based template engine for generating HTML web pages.</li>
<li><strong>• JSON / XML (REST View):</strong> Used when client-side frameworks (React, Angular, Vue) consume raw data.</li>
</ul>
`,
                                codeExamples: [
                                    `<!-- Thymeleaf Example: student-view.html -->
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title th:text="\${title}">Default Title</title>
</head>
<body>
    <h1>Student Details</h1>
    <div>
        <p><strong>ID:</strong> <span th:text="\${student.id}">101</span></p>
        <p><strong>Name:</strong> <span th:text="\${student.name}">Student Name</span></p>
        <p><strong>Email:</strong> <span th:text="\${student.email}">student@email.com</span></p>
    </div>
</body>
</html>`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>View Resolvers in Spring MVC</h2>

<p>• A <strong>ViewResolver</strong> translates the logical view name returned by a controller (e.g., <code>"student-view"</code>) into an actual view template.</p><br>

<h3>InternalResourceViewResolver (JSP)</h3>
<p>• Appends a prefix (path) and suffix (extension) to the logical view name:</p>
<pre>
Prefix: /WEB-INF/views/
View name returned: "student-view"
Suffix: .jsp
Result: /WEB-INF/views/student-view.jsp
</pre>
`,
                                codeExamples: [
                                    `@Configuration
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer {

    @Bean
    public ViewResolver internalResourceViewResolver() {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix("/WEB-INF/views/");
        resolver.setSuffix(".jsp");
        return resolver;
    }
}`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Content Negotiation & Modern Decoupled Views</h2>

<p>• <strong>ContentNegotiatingViewResolver:</strong> Selects the appropriate View (HTML, JSON, XML, PDF) based on client request headers (<code>Accept: application/json</code> vs <code>Accept: text/html</code>) or file extensions.</p>

<h3>Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)</h3>
<table border="1">
<tr>
<th>Feature</th>
<th>Server-Side Rendering (Thymeleaf/JSP)</th>
<th>Client-Side Rendering (React/Angular via REST)</th>
</tr>
<tr>
<td>Rendering Location</td>
<td>Server renders full HTML before sending</td>
<td>Browser executes JS to render UI</td>
</tr>
<tr>
<td>Controller Type</td>
<td><code>@Controller</code> returning View names</td>
<td><code>@RestController</code> returning JSON DTOs</td>
</tr>
<tr>
<td>Initial Page Load</td>
<td>Faster first contentful paint</td>
<td>Initial JS bundle download required</td>
</tr>
<tr>
<td>Interactivity</td>
<td>Requires full/partial page reloads</td>
<td>Rich, seamless Single Page Application (SPA)</td>
</tr>
</table>
`,
                                codeExamples: [
                                    `@Configuration
public class ContentNegotiationConfig implements WebMvcConfigurer {

    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer
            .favorParameter(true)
            .parameterName("mediaType")
            .ignoreAcceptHeader(false)
            .defaultContentType(MediaType.TEXT_HTML)
            .mediaType("html", MediaType.TEXT_HTML)
            .mediaType("json", MediaType.APPLICATION_JSON)
            .mediaType("xml", MediaType.APPLICATION_XML);
    }
}`
                                ]
                            }
                        ]
                    },

                    // =====================================================
                    // 2.3 Controller
                    // =====================================================
                    {
                        id: 'mvc-controller',
                        name: '2.3 Controller',

                        beginner: [
                            {
                                content: `
<h2>2.3 What is Controller in MVC?</h2>

<p>• The <strong>Controller</strong> acts as the intermediary between the View and the Model.</p>
<p>• It intercepts incoming HTTP requests, invokes business logic, populates the Model, and selects the View to render.</p><br>

<h3>Controller Responsibilities</h3>
<ul>
<li>• Receives HTTP requests (GET, POST, PUT, DELETE).</li>
<li>• Extracts query parameters, path variables, and body payloads.</li>
<li>• Coordinates with the Service layer for business processing.</li>
<li>• Determines the next View or returns serialized response data (JSON).</li>
</ul><br>

<h3>@Controller vs @RestController</h3>
<ul>
<li><strong>• @Controller:</strong> Used for traditional web applications that return HTML views.</li>
<li><strong>• @RestController:</strong> Combines <code>@Controller</code> and <code>@ResponseBody</code>, returning data directly (e.g., JSON) rather than rendering a view.</li>
</ul>
`,
                                codeExamples: [
                                    `// 1. Traditional MVC Controller (returns view name)
@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("welcomeMsg", "Welcome to JavaSchoolLab!");
        return "home"; // resolves to home.html / home.jsp
    }
}

// 2. REST Controller (returns JSON data)
@RestController
@RequestMapping("/api")
public class HelloRestController {

    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of("message", "Hello, Spring MVC REST!");
    }
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Request Mappings & Parameter Handling</h2>

<p>• Spring MVC provides rich annotations to extract data from incoming HTTP requests:</p>
<ul>
<li><strong>• @RequestParam:</strong> Extracts query parameters (e.g., <code>/search?keyword=java</code>).</li>
<li><strong>• @PathVariable:</strong> Extracts values directly from URI templates (e.g., <code>/students/{id}</code>).</li>
<li><strong>• @RequestBody:</strong> Deserializes JSON/XML payload into a Java object.</li>
<li><strong>• @RequestHeader:</strong> Reads HTTP request header values.</li>
</ul>
`,
                                codeExamples: [
                                    `@RestController
@RequestMapping("/students")
public class StudentApiController {

    private final StudentService studentService;

    public StudentApiController(StudentService studentService) {
        this.studentService = studentService;
    }

    // Path Variable: GET /students/101
    @GetMapping("/{id}")
    public ResponseEntity<Student> getById(@PathVariable("id") int studentId) {
        Student student = studentService.findById(studentId);
        return ResponseEntity.ok(student);
    }

    // Request Param: GET /students/search?dept=CS&page=1
    @GetMapping("/search")
    public List<Student> search(@RequestParam(name = "dept", defaultValue = "All") String department,
                                @RequestParam(name = "page", defaultValue = "0") int page) {
        return studentService.search(department, page);
    }

    // Request Body: POST /students
    @PostMapping
    public ResponseEntity<Student> createStudent(@Valid @RequestBody StudentCreateDTO dto) {
        Student created = studentService.create(dto);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }
}`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Controller Best Practices, Interceptors & Global Exception Handling</h2>

<p>• Enterprise Spring controllers should stay lightweight ("skinny controllers") by delegating business logic to services.</p><br>

<h3>Global Exception Handling with @RestControllerAdvice</h3>
<p>• Centralizes error handling across all controllers, eliminating repetitive try-catch blocks.</p>
`,
                                codeExamples: [
                                    `// Global Exception Handler
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            System.currentTimeMillis()
        );
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(err -> 
            errors.put(err.getField(), err.getDefaultMessage())
        );
        return ResponseEntity.badRequest().body(errors);
    }
}`
                                ]
                            }
                        ]
                    },

                    // =====================================================
                    // 2.4 MVC Architecture Flow
                    // =====================================================
                    {
                        id: 'mvc-architecture-flow',
                        name: '2.4 MVC Architecture Flow',

                        beginner: [
                            {
                                content: `
<h2>2.4 MVC Architecture Flow</h2>

<p>• The MVC architecture follows a clear request-response lifecycle between the client, controller, model, and view.</p><br>

<h3>High-Level Request Flow</h3>
<ol>
<li><strong>1. Client sends request:</strong> The user interacts with the UI (e.g. clicks a link or submits a form) sending an HTTP request.</li>
<li><strong>2. Controller intercepts request:</strong> The controller catches the request and determines what action to take.</li>
<li><strong>3. Business logic & Model update:</strong> The controller calls the service layer to process data, creating or updating the Model.</li>
<li><strong>4. View rendering:</strong> The controller attaches the Model to the View and passes it to the rendering engine.</li>
<li><strong>5. Response sent to client:</strong> The rendered HTML/JSON is sent back to the client browser.</li>
</ol><br>

<h3>Flow Summary</h3>
<p><strong>Browser → Controller → Model / Service → View → Browser</strong></p>
`,
                                codeExamples: [
                                    `// High-Level Flow Representation:

1. User clicks "View Profile"
   ↳ GET /profile?id=42

2. ProfileController receives request
   ↳ calls ProfileService.getProfile(42)

3. ProfileService returns Student data
   ↳ Model contains { student: { name: "Pratiksha", id: 42 } }

4. ProfileController returns view "profile.html"
   ↳ View engine renders HTML using Model values

5. User sees rendered Profile Page in browser.`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Spring MVC Internal Request Lifecycle</h2>

<p>• Spring MVC implements the Front Controller pattern through <strong>DispatcherServlet</strong>.</p><br>

<h3>Step-by-Step Lifecycle</h3>
<ol>
<li><strong>1. HTTP Request:</strong> Client sends an HTTP request to the web application.</li>
<li><strong>2. DispatcherServlet:</strong> Acts as the Front Controller and intercepts every incoming request.</li>
<li><strong>3. HandlerMapping:</strong> Consults HandlerMapping to discover which Controller and handler method matches the URL.</li>
<li><strong>4. HandlerAdapter:</strong> Dispatches execution to the target controller method using HandlerAdapter.</li>
<li><strong>5. Controller Execution:</strong> Controller invokes the Service and Repository layer to execute business logic and returns a <code>ModelAndView</code>.</li>
<li><strong>6. ViewResolver:</strong> DispatcherServlet asks ViewResolver to map the logical view name to an actual View template (e.g., JSP, Thymeleaf).</li>
<li><strong>7. View Rendering:</strong> The View renders the Model data into the response format.</li>
<li><strong>8. HTTP Response:</strong> DispatcherServlet sends the rendered response back to the client.</li>
</ol>
`,
                                codeExamples: [
                                    `// Spring MVC Request Processing Pipeline:

Client Browser
     │  (1. HTTP Request: GET /students/101)
     ▼
┌─────────────────────────────────────────┐
│           DispatcherServlet             │◄─── Front Controller
└────┬──────────────┬────────────────┬────┘
     │ (2. Find     │ (4. Invoke     │ (6. Resolve
     │  Handler)    │  Method)       │  View)
     ▼              ▼                ▼
HandlerMapping  HandlerAdapter  ViewResolver
                    │                │
                    ▼ (5. Execute)   ▼ (7. Render)
               Controller ─────────► View
                    │
                    ▼
              Service Layer
                    │
                    ▼
              Database Layer`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Deep Dive: DispatcherServlet & Interceptor Lifecycle</h2>

<p>• Inside Spring MVC, the <code>DispatcherServlet.doDispatch()</code> method controls the entire lifecycle, including interceptors and asynchronous execution:</p><br>

<h3>Complete Execution Chain</h3>
<ol>
<li>• <strong>MultipartResolver:</strong> Inspects if the request is a file upload (<code>multipart/form-data</code>).</li>
<li>• <strong>HandlerExecutionChain:</strong> Assembles the target handler together with registered <code>HandlerInterceptor</code>s.</li>
<li>• <strong>preHandle():</strong> All interceptors run their <code>preHandle()</code> checks in sequence (e.g., authentication, logging).</li>
<li>• <strong>HandlerAdapter.handle():</strong> Executes data binding, validation (<code>@Valid</code>), and invokes controller method.</li>
<li>• <strong>postHandle():</strong> Interceptors run <code>postHandle()</code> after controller execution but before view rendering.</li>
<li>• <strong>processDispatchResult():</strong> Resolves view with <code>ViewResolver</code> and calls <code>view.render()</code>.</li>
<li>• <strong>afterCompletion():</strong> Interceptors execute cleanup logic after full request completion, even if exceptions occur.</li>
</ol>
`,
                                codeExamples: [
                                    `// Custom HandlerInterceptor Example
@Component
public class PerformanceLoggingInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        request.setAttribute("startTime", System.currentTimeMillis());
        return true; // continue execution chain
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) {
        // Intercept after controller execution, before view rendering
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        long startTime = (Long) request.getAttribute("startTime");
        long duration = System.currentTimeMillis() - startTime;
        System.out.println("Request URI: " + request.getRequestURI() + " took " + duration + " ms");
    }
}`
                                ]
                            }
                        ]
                    },

                    // =====================================================
                    // 2.5 Advantages of MVC Architecture
                    // =====================================================
                    {
                        id: 'advantages-of-mvc-architecture',
                        name: '2.5 Advantages of MVC Architecture',

                        beginner: [
                            {
                                content: `
<h2>2.5 Advantages of MVC Architecture</h2>

<p>• The MVC architectural pattern is widely adopted in enterprise software development due to its substantial design benefits.</p><br>

<h3>Top Benefits of MVC</h3>
<ul>
<li><strong>• Separation of Concerns:</strong> Business logic, UI presentation, and request routing remain distinct and decoupled.</li>
<li><strong>• Code Reusability:</strong> The same Model data and business service can be shared across multiple Views (Web, Mobile, REST API).</li>
<li><strong>• Parallel Development:</strong> Frontend developers can work on Views while backend developers build Controllers and Services simultaneously.</li>
<li><strong>• Easier Maintenance:</strong> Changes to UI styling or templates do not impact business logic or database queries.</li>
<li><strong>• High Testability:</strong> Each component can be tested independently in isolation.</li>
</ul>
`,
                                codeExamples: [
                                    `// Comparison: Monolithic Spaghetti Code vs Clean MVC

// ❌ Bad (Everything mixed in one servlet/JSP):
// - Direct SQL query inside HTML page
// - Hard to test, duplicate queries, fragile UI changes

// ✅ Clean MVC Architecture:
// 1. Model:      Student.java (Data container)
// 2. Service:    StudentService.java (Business logic & calculations)
// 3. Controller: StudentController.java (Handles HTTP routes)
// 4. View:       students.html (Clean HTML/Thymeleaf UI)`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Enterprise & Architectural Benefits</h2>

<table border="1">
<tr>
<th>Benefit</th>
<th>Why It Matters</th>
<th>Spring MVC Feature</th>
</tr>
<tr>
<td>Modularity</td>
<td>Easier refactoring and isolated feature enhancements</td>
<td>Modular packages (controller, service, repository, model)</td>
</tr>
<tr>
<td>Testability</td>
<td>Controllers can be tested without starting full web server</td>
<td><code>MockMvc</code> and <code>@WebMvcTest</code></td>
</tr>
<tr>
<td>Multi-Client Support</td>
<td>Same backend powers Web UI and Mobile Apps</td>
<td><code>@Controller</code> for HTML & <code>@RestController</code> for JSON</td>
</tr>
<tr>
<td>Security Integration</td>
<td>Centralized route protection and role-based access</td>
<td>Spring Security filters integration</td>
</tr>
<tr>
<td>Validation Decoupling</td>
<td>Declarative validation rules on Model objects</td>
<td>Hibernate Validator / JSR-380 (<code>@NotNull</code>, <code>@Size</code>)</td>
</tr>
</table>
`,
                                codeExamples: [
                                    `// Easy Independent Unit/Integration Testing with MockMvc
@WebMvcTest(StudentController.class)
public class StudentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StudentService studentService;

    @Test
    void testGetStudentById() throws Exception {
        Mockito.when(studentService.findById(101))
               .thenReturn(new Student(101, "Pratiksha", "pratiksha@example.com"));

        mockMvc.perform(get("/students/101"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.name").value("Pratiksha"))
               .andExpect(jsonPath("$.email").value("pratiksha@example.com"));
    }
}`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Scalability, Clean Architecture & Modern Evolution</h2>

<p>• In modern enterprise systems, Spring MVC forms the presentation adapter layer within Clean Architecture or Hexagonal Architecture.</p><br>

<h3>Key Enterprise Characteristics</h3>
<ul>
<li>• <strong>Layer Decoupling:</strong> Presentation (Controller) → Application (Service) → Domain (Entity/Model) → Infrastructure (Repository).</li>
<li>• <strong>Stateless Scalability:</strong> REST controllers combined with stateless authentication (JWT/OAuth2) enable horizontal autoscaling across Kubernetes pods.</li>
<li>• <strong>Graceful Evolution:</strong> Easily transition monolithic server-rendered applications to microservices or API-first backends without rewriting core business models.</li>
</ul>
`,
                                codeExamples: [
                                    `// Enterprise Layered Architecture Example:

// 1. Controller Adapter (Web)
@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
    private final OrderUseCase orderUseCase; // Inversion of Control
    // ...
}

// 2. Application Service Layer (Use Cases)
@Service
public class OrderService implements OrderUseCase {
    private final OrderRepositoryPort orderRepository;
    // ...
}

// 3. Domain Model (Core Business Rules)
public class Order {
    private OrderId id;
    private Money total;
    public void validate() { /* business rules */ }
}`
                                ]
                            }
                        ]
                    }
                ]
            },

   {
    id: 'spring-mvc-architecture',
    name: 'Spring MVC Architecture',

    topics: [

        // =====================================================
        // 3.1 DispatcherServlet
        // =====================================================

        {
            id: 'dispatcher-servlet',
            name: 'DispatcherServlet',

            beginner: [
                {
                    content: `
<h2>3.1 What is DispatcherServlet?</h2>

<p>• <strong>DispatcherServlet</strong> is the central component of Spring MVC.</p>

<p>• It acts as the <strong>Front Controller</strong> of a Spring MVC application.</p>

<p>• It receives incoming HTTP requests and coordinates the request processing.</p><br>

<h3>Responsibilities of DispatcherServlet</h3>

<ul>
<li>• Receives HTTP requests from the client.</li>
<li>• Finds the appropriate Controller.</li>
<li>• Sends the request to the Controller.</li>
<li>• Processes the Controller response.</li>
<li>• Resolves the View when required.</li>
<li>• Sends the final response back to the client.</li>
</ul><br>

<h3>Simple Flow</h3>

<p>
Client → DispatcherServlet → Controller → Service → Model → View → Client
</p>
`
                },

                {
                    content: `
<h3>DispatcherServlet Example</h3>

<p>• In Spring MVC, the DispatcherServlet receives requests before they reach the Controller.</p>

<p>• It works as a central request dispatcher.</p>
`,

                    codeExamples: [
                        `@Controller
public class StudentController {

    @GetMapping("/student")
    public String student() {

        return "student";
    }
}

// Request:
// GET /student

// Flow:
// Browser
//    ↓
// DispatcherServlet
//    ↓
// StudentController
//    ↓
// student View`
                    ]
                }
            ],

            intermediate: [
                {
                    content: `
<h2>DispatcherServlet Request Processing</h2>

<p>• DispatcherServlet coordinates the complete Spring MVC request lifecycle.</p>

<h3>Main Components Used by DispatcherServlet</h3>

<ul>
<li>• HandlerMapping</li>
<li>• HandlerAdapter</li>
<li>• Controller</li>
<li>• Model</li>
<li>• ViewResolver</li>
<li>• View</li>
</ul><br>

<h3>Request Processing</h3>

<ol>
<li>• Client sends HTTP request.</li>
<li>• DispatcherServlet receives the request.</li>
<li>• HandlerMapping identifies the Controller.</li>
<li>• HandlerAdapter invokes the Controller method.</li>
<li>• Controller processes the request.</li>
<li>• ViewResolver resolves the View if required.</li>
<li>• View generates the response.</li>
<li>• DispatcherServlet sends response to client.</li>
</ol>
`
                },

                {
                    content: `
<h3>DispatcherServlet Configuration</h3>

<p>• In modern Spring applications, DispatcherServlet is commonly registered automatically by the framework or Spring Boot.</p>

<p>• In traditional Spring MVC applications, it can be configured explicitly.</p>
`,

                    codeExamples: [
                        `@Configuration
@EnableWebMvc
@ComponentScan("com.example.controller")
public class WebConfig {
}

// DispatcherServlet uses this Spring configuration
// to process web requests.`
                    ]
                }
            ],

            expert: [
                {
                    content: `
<h2>Advanced DispatcherServlet Lifecycle</h2>

<p>• DispatcherServlet internally coordinates multiple Spring MVC components to process a request.</p>

<h3>Important Processing Components</h3>

<ul>
<li>• HandlerMapping finds the appropriate handler.</li>
<li>• HandlerAdapter invokes the selected handler.</li>
<li>• HandlerExceptionResolver handles exceptions.</li>
<li>• ViewResolver resolves logical View names.</li>
<li>• View renders the final response.</li>
</ul><br>

<p>• DispatcherServlet implements the Front Controller pattern and provides a centralized entry point for web requests.</p>
`
                },

                {
                    content: `
<h3>DispatcherServlet Request Pipeline</h3>
`,

                    codeExamples: [
                        `Client
   |
   | HTTP Request
   ↓
DispatcherServlet
   |
   ↓
HandlerMapping
   |
   ↓
HandlerAdapter
   |
   ↓
Controller
   |
   ↓
Service
   |
   ↓
Repository
   |
   ↓
Database

Database
   |
   ↓
Repository
   |
   ↓
Service
   |
   ↓
Controller
   |
   ↓
Model + View
   |
   ↓
ViewResolver
   |
   ↓
View
   |
   ↓
DispatcherServlet
   |
   ↓
Client`
                    ]
                }
            ]
        },


        // =====================================================
        // 3.2 HandlerMapping
        // =====================================================

        {
            id: 'handler-mapping',
            name: 'HandlerMapping',

            beginner: [
                {
                    content: `
<h2>3.2 What is HandlerMapping?</h2>

<p>• <strong>HandlerMapping</strong> is a Spring MVC component that identifies which Controller or handler method should process an incoming request.</p>

<p>• It maps a URL request to the appropriate Controller.</p><br>

<h3>Example</h3>

<p>• Suppose the client sends:</p>

<p><strong>GET /students</strong></p>

<p>• HandlerMapping searches for a Controller method mapped to <strong>/students</strong>.</p>

<p>• It then provides the appropriate handler to DispatcherServlet.</p><br>

<h3>Simple Flow</h3>

<p>
HTTP Request → DispatcherServlet → HandlerMapping → Controller
</p>
`
                },

                {
                    content: `
<h3>Example of Request Mapping</h3>

<p>• Spring MVC uses annotations such as <strong>@RequestMapping</strong> and <strong>@GetMapping</strong> to map requests.</p>
`,

                    codeExamples: [
                        `@Controller
public class StudentController {

    @GetMapping("/students")
    public String students() {

        return "students";
    }
}

// Request:
// GET /students

// HandlerMapping finds:
// StudentController.students()`
                    ]
                }
            ],

            intermediate: [
                {
                    content: `
<h2>HandlerMapping and Request Mappings</h2>

<p>• HandlerMapping determines the handler that should process a request.</p>

<h3>Common Mapping Annotations</h3>

<ul>
<li>• @RequestMapping</li>
<li>• @GetMapping</li>
<li>• @PostMapping</li>
<li>• @PutMapping</li>
<li>• @DeleteMapping</li>
<li>• @PatchMapping</li>
</ul><br>

<h3>Example</h3>

<p>• Different HTTP requests can be mapped to different Controller methods.</p>
`,

                    codeExamples: [
                        `@Controller
@RequestMapping("/students")
public class StudentController {

    @GetMapping
    public String getStudents() {
        return "students";
    }

    @PostMapping
    public String addStudent() {
        return "student-form";
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable int id) {
        return "redirect:/students";
    }
}`
                    ]
                }
            ],

            expert: [
                {
                    content: `
<h2>Advanced HandlerMapping</h2>

<p>• HandlerMapping is part of the Spring MVC request processing infrastructure.</p>

<p>• It can identify a handler based on request URL, HTTP method and other request conditions.</p><br>

<h3>Request Matching</h3>

<ul>
<li>• URL pattern</li>
<li>• HTTP method</li>
<li>• Request parameters</li>
<li>• Request headers</li>
<li>• Content type</li>
<li>• Accept type</li>
</ul><br>

<p>• Annotation-based controllers are commonly handled through Spring MVC's request mapping infrastructure.</p>
`
                },

                {
                    content: `
<h3>Handler Mapping Flow</h3>
`,

                    codeExamples: [
                        `HTTP Request
     |
     ↓
DispatcherServlet
     |
     ↓
HandlerMapping
     |
     |-- /students
     |-- /students/{id}
     |-- /students/search
     |
     ↓
Controller Method`
                    ]
                }
            ]
        },


        // =====================================================
        // 3.3 Controller
        // =====================================================

        {
            id: 'spring-mvc-controller',
            name: 'Controller',

            beginner: [
                {
                    content: `
<h2>3.3 What is Controller?</h2>

<p>• A <strong>Controller</strong> handles HTTP requests from the client.</p>

<p>• It acts as a bridge between the web request and application logic.</p>

<p>• Controllers are usually created using the <strong>@Controller</strong> annotation.</p><br>

<h3>Responsibilities of Controller</h3>

<ul>
<li>• Receives client requests.</li>
<li>• Reads request data.</li>
<li>• Calls the Service layer.</li>
<li>• Adds data to the Model.</li>
<li>• Returns a View name or response.</li>
</ul>
`
                },

                {
                    content: `
<h3>Simple Controller Example</h3>
`,

                    codeExamples: [
                        `@Controller
public class StudentController {

    @GetMapping("/student")
    public String student() {

        return "student";
    }
}

// URL:
// http://localhost:8080/student

// Returned View:
// student`
                    ]
                }
            ],

            intermediate: [
                {
                    content: `
<h2>Controller with Model</h2>

<p>• A Controller can add data to the Model and return a logical View name.</p>
`,

                    codeExamples: [
                        `@Controller
public class StudentController {

    @GetMapping("/student")
    public String student(Model model) {

        model.addAttribute("id", 101);
        model.addAttribute("name", "Pratiksha");
        model.addAttribute("course", "Java");

        return "student";
    }
}`
                    ]
                },

                {
                    content: `
<h3>Controller with Service Layer</h3>

<p>• Business logic should generally be handled by the Service layer rather than directly inside the Controller.</p>
`,

                    codeExamples: [
                        `@Controller
@RequestMapping("/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/{id}")
    public String getStudent(
            @PathVariable int id,
            Model model) {

        Student student =
                studentService.getStudentById(id);

        model.addAttribute("student", student);

        return "student";
    }
}`
                    ]
                },

                {
                    content: `
<h3>Common Controller Annotations</h3>

<ul>
<li>• @Controller</li>
<li>• @RestController</li>
<li>• @RequestMapping</li>
<li>• @GetMapping</li>
<li>• @PostMapping</li>
<li>• @PutMapping</li>
<li>• @DeleteMapping</li>
<li>• @PathVariable</li>
<li>• @RequestParam</li>
<li>• @RequestBody</li>
</ul>
`
                }
            ],

            expert: [
                {
                    content: `
<h2>Controller in Enterprise Applications</h2>

<p>• Controllers should remain lightweight and focus mainly on HTTP-related responsibilities.</p>

<ul>
<li>• Request mapping</li>
<li>• Request validation</li>
<li>• Input binding</li>
<li>• Calling application services</li>
<li>• Preparing responses</li>
<li>• Handling web-specific concerns</li>
</ul><br>

<p>• Business rules should generally be placed in the Service or domain layer.</p>
`
                },

                {
                    content: `
<h3>@Controller vs @RestController</h3>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2 [&_th]:py-2">

<tr>
<th>Feature</th>
<th>@Controller</th>
<th>@RestController</th>
</tr>

<tr>
<td>Purpose</td>
<td>Traditional MVC Web Application</td>
<td>REST APIs</td>
</tr>

<tr>
<td>Response</td>
<td>Usually View</td>
<td>Usually JSON/XML</td>
</tr>

<tr>
<td>View Resolution</td>
<td>Commonly used</td>
<td>Usually not required</td>
</tr>

</table>
`
                }
            ]
        },


        // =====================================================
        // 3.4 ModelAndView
        // =====================================================

        {
            id: 'model-and-view',
            name: 'ModelAndView',

            beginner: [
                {
                    content: `
<h2>3.4 What is ModelAndView?</h2>

<p>• <strong>ModelAndView</strong> is a Spring MVC class that stores both <strong>Model data</strong> and the <strong>View name</strong>.</p>

<p>• It allows a Controller method to return model data and a View together.</p><br>

<h3>ModelAndView Contains</h3>

<ul>
<li>• Model data</li>
<li>• Logical View name</li>
</ul><br>

<h3>Example</h3>

<p>• A Controller can add student information and return the student View using ModelAndView.</p>
`
                },

                {
                    content: `
<h3>Simple ModelAndView Example</h3>
`,

                    codeExamples: [
                        `@Controller
public class StudentController {

    @GetMapping("/student")
    public ModelAndView student() {

        ModelAndView mav =
                new ModelAndView("student");

        mav.addObject("name", "Pratiksha");
        mav.addObject("course", "Java");

        return mav;
    }
}`
                    ]
                }
            ],

            intermediate: [
                {
                    content: `
<h2>Adding Multiple Attributes</h2>

<p>• Multiple objects can be added to ModelAndView using <strong>addObject()</strong>.</p>
`,

                    codeExamples: [
                        `@GetMapping("/student")
public ModelAndView student() {

    ModelAndView mav =
            new ModelAndView("student");

    mav.addObject("id", 101);
    mav.addObject("name", "Pratiksha");
    mav.addObject("email", "pratiksha@gmail.com");
    mav.addObject("course", "Spring MVC");

    return mav;
}`
                    ]
                },

                {
                    content: `
<h3>ModelAndView with Model Object</h3>

<p>• A complete Java object can also be passed to the View.</p>
`,

                    codeExamples: [
                        `@GetMapping("/student")
public ModelAndView getStudent() {

    Student student =
            new Student(101,
                        "Pratiksha",
                        "pratiksha@gmail.com");

    ModelAndView mav =
            new ModelAndView("student");

    mav.addObject("student", student);

    return mav;
}`
                    ]
                }
            ],

            expert: [
                {
                    content: `
<h2>ModelAndView in Spring MVC Request Processing</h2>

<p>• ModelAndView represents the result of Controller processing when using traditional server-side MVC views.</p>

<p>• It can contain a logical View name and model attributes that are later used during View rendering.</p><br>

<h3>Processing Flow</h3>

<p>
Controller → ModelAndView → DispatcherServlet → ViewResolver → View
</p>
`
                },

                {
                    content: `
<h3>Model vs ModelAndView</h3>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2 [&_th]:py-2">

<tr>
<th>Feature</th>
<th>Model</th>
<th>ModelAndView</th>
</tr>

<tr>
<td>Stores Model Data</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Stores View Name</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>Typical Return</td>
<td>String View Name</td>
<td>ModelAndView Object</td>
</tr>

</table>
`
                }
            ]
        },


        // =====================================================
        // 3.5 ViewResolver
        // =====================================================

        {
            id: 'view-resolver',
            name: 'ViewResolver',

            beginner: [
                {
                    content: `
<h2>3.5 What is ViewResolver?</h2>

<p>• <strong>ViewResolver</strong> is a Spring MVC component that converts a logical View name into an actual View resource.</p>

<p>• The Controller does not normally need to specify the complete path of the View.</p><br>

<h3>Example</h3>

<p>• Controller returns:</p>

<p><strong>"student"</strong></p>

<p>• ViewResolver finds the corresponding View file.</p><br>

<h3>Basic Flow</h3>

<p>
Controller → "student" → ViewResolver → student View
</p>
`
                },

                {
                    content: `
<h3>JSP ViewResolver Example</h3>

<p>• Suppose JSP files are stored inside:</p>

<p><strong>/WEB-INF/views/</strong></p>

<p>• The ViewResolver can combine prefix, View name and suffix.</p>
`,

                    codeExamples: [
                        `Logical View Name:
student

Prefix:
/WEB-INF/views/

Suffix:
.jsp

Final View:
/WEB-INF/views/student.jsp`
                    ]
                }
            ],

            intermediate: [
                {
                    content: `
<h2>InternalResourceViewResolver</h2>

<p>• InternalResourceViewResolver can be used to resolve JSP-based Views.</p>

<h3>Configuration</h3>
`,

                    codeExamples: [
                        `@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Bean
    public InternalResourceViewResolver viewResolver() {

        InternalResourceViewResolver resolver =
                new InternalResourceViewResolver();

        resolver.setPrefix("/WEB-INF/views/");
        resolver.setSuffix(".jsp");

        return resolver;
    }
}`
                    ]
                },

                {
                    content: `
<h3>View Resolution Example</h3>

<p>• If the Controller returns <strong>"student"</strong>:</p>

<ul>
<li>• Prefix = /WEB-INF/views/</li>
<li>• View name = student</li>
<li>• Suffix = .jsp</li>
</ul>

<p>• Final View:</p>

<p><strong>/WEB-INF/views/student.jsp</strong></p>
`
                }
            ],

            expert: [
                {
                    content: `
<h2>Advanced View Resolution</h2>

<p>• Spring MVC supports different View technologies through ViewResolver implementations.</p>

<h3>Examples</h3>

<ul>
<li>• JSP</li>
<li>• Thymeleaf</li>
<li>• FreeMarker</li>
<li>• Other View technologies</li>
</ul><br>

<p>• ViewResolver separates Controller logic from the physical location and technology of the View.</p>
`
                },

                {
                    content: `
<h3>View Resolution Flow</h3>
`,

                    codeExamples: [
                        `Controller
    |
    | return "student"
    ↓
DispatcherServlet
    |
    ↓
ViewResolver
    |
    | Prefix + View Name + Suffix
    ↓
/WEB-INF/views/student.jsp
    |
    ↓
Rendered View
    |
    ↓
Client`
                    ]
                }
            ]
        },


        // =====================================================
        // 3.6 View
        // =====================================================

        {
            id: 'spring-mvc-view',
            name: 'View',

            beginner: [
                {
                    content: `
<h2>3.6 What is View?</h2>

<p>• A <strong>View</strong> is responsible for presenting information to the user.</p>

<p>• It receives Model data and renders the final user interface.</p><br>

<h3>Common View Technologies</h3>

<ul>
<li>• JSP</li>
<li>• Thymeleaf</li>
<li>• FreeMarker</li>
<li>• HTML templates</li>
</ul><br>

<h3>Responsibilities of View</h3>

<ul>
<li>• Display application data.</li>
<li>• Display forms.</li>
<li>• Display messages.</li>
<li>• Provide user interface.</li>
</ul>
`
                },

                {
                    content: `
<h3>Simple JSP View</h3>
`,

                    codeExamples: [
                        `<%@ page contentType="text/html;charset=UTF-8" %>

<!DOCTYPE html>
<html>
<head>
    <title>Student Details</title>
</head>

<body>

    <h1>Student Details</h1>

    <p>Name: \${name}</p>

    <p>Course: \${course}</p>

</body>
</html>`
                    ]
                }
            ],

            intermediate: [
                {
                    content: `
<h2>View with Model Data</h2>

<p>• The Controller adds data to the Model.</p>

<p>• The View accesses that data and displays it to the user.</p>
`,

                    codeExamples: [
                        `// Controller

@Controller
public class StudentController {

    @GetMapping("/student")
    public String student(Model model) {

        model.addAttribute("name", "Pratiksha");
        model.addAttribute("course", "Spring MVC");

        return "student";
    }
}


// JSP View: student.jsp

<html>
<body>

    <h1>Student Details</h1>

    <p>Name: \${name}</p>

    <p>Course: \${course}</p>

</body>
</html>`
                    ]
                },

                {
                    content: `
<h3>Thymeleaf View Example</h3>

<p>• Thymeleaf is another server-side template engine commonly used with Spring MVC.</p>
`,

                    codeExamples: [
                        `<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">

<head>
    <title>Student</title>
</head>

<body>

    <h1>Student Details</h1>

    <p>
        Name:
        <span th:text="\${name}"></span>
    </p>

    <p>
        Course:
        <span th:text="\${course}"></span>
    </p>

</body>

</html>`
                    ]
                }
            ],

            expert: [
                {
                    content: `
<h2>View Rendering in Spring MVC</h2>

<p>• After the Controller returns a logical View name, DispatcherServlet uses ViewResolver to locate the appropriate View.</p>

<p>• The View receives Model data and renders the response.</p><br>

<h3>Complete View Rendering Flow</h3>

<p>
Controller
→ ModelAndView
→ DispatcherServlet
→ ViewResolver
→ View
→ HTTP Response
</p>
`
                },

                {
                    content: `
<h3>Server-Side Rendering</h3>

<p>• In traditional Spring MVC applications, the server generates HTML using View technologies such as JSP or Thymeleaf.</p>

<ul>
<li>• Server receives request.</li>
<li>• Controller processes request.</li>
<li>• Model data is prepared.</li>
<li>• View is resolved.</li>
<li>• HTML is generated.</li>
<li>• HTML is sent to the browser.</li>
</ul>
`
                }
            ]
        }

    ]
},
{
    id: 'dispatcherservlet-frontcontroller',
    name: 'DispatcherServlet and Front Controller',
    topics: [
        {
            id: 'what-is-dispatcher-servlet',
    name: 'What is DispatcherServlet',

    beginner: [
        {
            content: `
<h2>4.1 What is DispatcherServlet?</h2>

<p>• <strong>DispatcherServlet</strong> is the central component of Spring MVC.</p>

<p>• It acts as the <strong>Front Controller</strong> of a Spring MVC application.</p>

<p>• It receives incoming HTTP requests and coordinates the request processing.</p><br>

<h3>Simple Definition</h3>

<p>• DispatcherServlet is responsible for receiving client requests and dispatching them to the appropriate Controller.</p><br>

<h3>Basic Flow</h3>

<p>
Client → DispatcherServlet → Controller → Response
</p>
`
        },

        {
            content: `
<h3>Simple DispatcherServlet Example</h3>

<p>• Suppose a user requests the following URL:</p>

<p><strong>GET /student</strong></p>

<p>• The request first reaches DispatcherServlet.</p>

<p>• DispatcherServlet finds the appropriate Controller and sends the request to it.</p>
`,
            codeExamples: [
                `@Controller
public class StudentController {

    @GetMapping("/student")
    public String student() {

        return "student";
    }
}

// Request:
// GET /student

// Flow:
// Client
//    ↓
// DispatcherServlet
//    ↓
// StudentController
//    ↓
// student View`
            ]
        }
    ],

    intermediate: [
        {
            content: `
<h2>DispatcherServlet in Spring MVC</h2>

<p>• DispatcherServlet works as the central request dispatcher in Spring MVC.</p>

<p>• It coordinates different components involved in processing an HTTP request.</p><br>

<h3>Components Involved</h3>

<ul>
<li>• HandlerMapping</li>
<li>• HandlerAdapter</li>
<li>• Controller</li>
<li>• Service</li>
<li>• ViewResolver</li>
<li>• View</li>
</ul>
`
        },

        {
            content: `
<h3>DispatcherServlet Request Example</h3>
`,
            codeExamples: [
                `Client
   ↓
DispatcherServlet
   ↓
HandlerMapping
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database`
            ]
        }
    ],

    expert: [
        {
            content: `
<h2>DispatcherServlet Architecture</h2>

<p>• DispatcherServlet implements the <strong>Front Controller pattern</strong>.</p>

<p>• It provides a centralized entry point for web requests in Spring MVC.</p>

<p>• It coordinates request mapping, handler invocation, exception handling and View resolution.</p><br>

<h3>Important Components</h3>

<ul>
<li>• HandlerMapping identifies the appropriate handler.</li>
<li>• HandlerAdapter invokes the handler.</li>
<li>• HandlerExceptionResolver handles exceptions.</li>
<li>• ViewResolver resolves logical View names.</li>
<li>• View renders the final response.</li>
</ul>
`
        }
    ]
},


// =====================================================
// 4.2 Role of DispatcherServlet
// =====================================================

{
    id: 'role-of-dispatcher-servlet',
    name: 'Role of DispatcherServlet',

    beginner: [
        {
            content: `
<h2>4.2 Role of DispatcherServlet</h2>

<p>• DispatcherServlet acts as the central controller of a Spring MVC application.</p>

<p>• It receives requests from the client and coordinates the processing of those requests.</p><br>

<h3>Main Roles</h3>

<ul>
<li>• Receive HTTP requests.</li>
<li>• Find the appropriate Controller.</li>
<li>• Dispatch the request to the Controller.</li>
<li>• Process the Controller response.</li>
<li>• Resolve the View when required.</li>
<li>• Send the final response to the client.</li>
</ul>
`
        },

        {
            content: `
<h3>Example</h3>

<p>• When a user requests <strong>/students</strong>, DispatcherServlet receives the request.</p>

<p>• It finds the Controller method mapped to <strong>/students</strong>.</p>

<p>• The Controller processes the request and returns the result.</p>
`
        }
    ],

    intermediate: [
        {
            content: `
<h2>Responsibilities of DispatcherServlet</h2>

<h3>1. Request Handling</h3>
<p>• Receives incoming HTTP requests from clients.</p>

<h3>2. Handler Selection</h3>
<p>• Uses HandlerMapping to identify the appropriate Controller or handler.</p>

<h3>3. Handler Invocation</h3>
<p>• Uses HandlerAdapter to invoke the selected Controller method.</p>

<h3>4. View Resolution</h3>
<p>• Uses ViewResolver to find the actual View when a traditional MVC View is returned.</p>

<h3>5. Exception Handling</h3>
<p>• Coordinates exception handling using Spring MVC exception resolver mechanisms.</p>

<h3>6. Response Generation</h3>
<p>• Sends the final response back to the client.</p>
`
        },

        {
            content: `
<h3>Role of DispatcherServlet in Request Processing</h3>
`,
            codeExamples: [
                `Client
   ↓
DispatcherServlet
   ↓
HandlerMapping
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
   ↓
Repository
   ↓
Service
   ↓
Controller
   ↓
View / JSON Response
   ↓
DispatcherServlet
   ↓
Client`
            ]
        }
    ],

    expert: [
        {
            content: `
<h2>DispatcherServlet as Request Coordinator</h2>

<p>• DispatcherServlet does not normally contain the application's business logic.</p>

<p>• Its primary responsibility is to coordinate the web request lifecycle.</p>

<p>• It delegates specific responsibilities to other Spring MVC components.</p><br>

<h3>Delegation</h3>

<ul>
<li>• HandlerMapping → Finds the handler.</li>
<li>• HandlerAdapter → Invokes the handler.</li>
<li>• Service → Executes business logic.</li>
<li>• Repository → Performs data access.</li>
<li>• HandlerExceptionResolver → Handles exceptions.</li>
<li>• ViewResolver → Resolves Views.</li>
</ul>
`
        }
    ]
},


// =====================================================
// 4.3 DispatcherServlet Request Flow
// =====================================================

{
    id: 'dispatcher-servlet-request-flow',
    name: 'DispatcherServlet Request Flow',

    beginner: [
        {
            content: `
<h2>4.3 DispatcherServlet Request Flow</h2>

<p>• DispatcherServlet controls the request processing flow in Spring MVC.</p>

<h3>Basic Request Flow</h3>

<ol>
<li>• Client sends an HTTP request.</li>
<li>• DispatcherServlet receives the request.</li>
<li>• DispatcherServlet finds the appropriate Controller.</li>
<li>• Controller processes the request.</li>
<li>• Controller returns the result.</li>
<li>• DispatcherServlet sends the response to the client.</li>
</ol><br>

<h3>Simple Flow</h3>

<p>
Client → DispatcherServlet → Controller → Response → Client
</p>
`
        },

        {
            content: `
<h3>Example Request</h3>

<p>• Suppose the client sends:</p>

<p><strong>GET /student/101</strong></p>

<p>• DispatcherServlet receives the request and sends it to the appropriate Controller.</p>
`,
            codeExamples: [
                `GET /student/101

Client
   ↓
DispatcherServlet
   ↓
StudentController
   ↓
Response
   ↓
Client`
            ]
        }
    ],

    intermediate: [
        {
            content: `
<h2>Complete DispatcherServlet Request Flow</h2>

<ol>
<li>• Client sends an HTTP request.</li>
<li>• DispatcherServlet receives the request.</li>
<li>• HandlerMapping identifies the appropriate handler.</li>
<li>• HandlerAdapter invokes the Controller method.</li>
<li>• Controller calls the Service layer.</li>
<li>• Service performs business logic.</li>
<li>• Service may call the Repository layer.</li>
<li>• Repository communicates with the database.</li>
<li>• Data is returned to the Service.</li>
<li>• Service returns the result to the Controller.</li>
<li>• Controller prepares the response.</li>
<li>• DispatcherServlet sends the response to the client.</li>
</ol>
`
        },

        {
            content: `
<h3>Request Flow Diagram</h3>
`,
            codeExamples: [
                `Client
   |
   | HTTP Request
   ↓
DispatcherServlet
   ↓
HandlerMapping
   ↓
HandlerAdapter
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database

Database
   ↓
Repository
   ↓
Service
   ↓
Controller
   ↓
View / JSON Response
   ↓
DispatcherServlet
   ↓
Client`
            ]
        },

        {
            content: `
<h3>View-Based Request Flow</h3>

<p>• In a traditional Spring MVC application, the Controller can return a logical View name.</p>

<p>• DispatcherServlet uses ViewResolver to locate the actual View.</p>
`,
            codeExamples: [
                `Controller
   ↓
Model + View Name
   ↓
DispatcherServlet
   ↓
ViewResolver
   ↓
View
   ↓
HTML Response
   ↓
Client`
            ]
        }
    ],

    expert: [
        {
            content: `
<h2>Detailed DispatcherServlet Request Processing</h2>

<p>• DispatcherServlet coordinates multiple steps during request processing.</p>

<ol>
<li>• Receives the HTTP request.</li>
<li>• Uses HandlerMapping to identify a handler.</li>
<li>• Uses HandlerAdapter to invoke the handler.</li>
<li>• Controller executes application-level operations.</li>
<li>• Service and Repository layers may be called.</li>
<li>• Controller returns a response.</li>
<li>• View resolution occurs for traditional MVC views.</li>
<li>• The response is written back to the client.</li>
</ol>
`
        },

        {
            content: `
<h3>REST API Request Flow</h3>

<p>• In REST APIs, the response is commonly returned as JSON rather than rendering a server-side View.</p>
`,
            codeExamples: [
                `Client
   ↓
DispatcherServlet
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
   ↓
Repository
   ↓
Service
   ↓
Controller
   ↓
JSON Response
   ↓
Client`
            ]
        }
    ]
},


// =====================================================
// 4.4 Front Controller Pattern
// =====================================================

{
    id: 'front-controller-pattern',
    name: 'Front Controller Pattern',

    beginner: [
        {
            content: `
<h2>4.4 Front Controller Pattern</h2>

<p>• The <strong>Front Controller Pattern</strong> uses a single central component to handle incoming requests.</p>

<p>• In Spring MVC, <strong>DispatcherServlet</strong> acts as the Front Controller.</p>

<p>• Instead of sending requests directly to different Controllers, requests first pass through DispatcherServlet.</p><br>

<h3>Simple Flow</h3>

<p>
Client → DispatcherServlet → Controller
</p>

<h3>Advantages</h3>

<ul>
<li>• Centralized request handling.</li>
<li>• Common processing can be handled in one place.</li>
<li>• Provides a consistent request flow.</li>
<li>• Makes web application architecture organized.</li>
</ul>
`
        },

        {
            content: `
<h3>Without Front Controller</h3>

<p>• Without a Front Controller, different requests may be handled independently by different components.</p>
`,
            codeExamples: [
                `Client
   ├──→ Controller 1
   ├──→ Controller 2
   └──→ Controller 3`
            ]
        },

        {
            content: `
<h3>With Front Controller</h3>

<p>• With the Front Controller pattern, all requests first reach one central component.</p>
`,
            codeExamples: [
                `Client
   ↓
DispatcherServlet
   ├──→ Controller 1
   ├──→ Controller 2
   └──→ Controller 3`
            ]
        }
    ],

    intermediate: [
        {
            content: `
<h2>Front Controller in Spring MVC</h2>

<p>• DispatcherServlet provides a centralized entry point for Spring MVC web requests.</p>

<p>• It coordinates common request-processing activities before and after a Controller executes.</p><br>

<h3>Common Processing</h3>

<ul>
<li>• Request mapping</li>
<li>• Handler selection</li>
<li>• Controller invocation</li>
<li>• Exception handling</li>
<li>• View resolution</li>
<li>• Response processing</li>
</ul>
`
        },

        {
            content: `
<h3>Front Controller Flow</h3>
`,
            codeExamples: [
                `Client Request
      ↓
DispatcherServlet
      ↓
HandlerMapping
      ↓
Controller
      ↓
Service
      ↓
Repository
      ↓
Database
      ↓
Controller
      ↓
View / JSON
      ↓
DispatcherServlet
      ↓
Client`
            ]
        }
    ],

    expert: [
        {
            content: `
<h2>Front Controller Pattern in Enterprise Applications</h2>

<p>• The Front Controller pattern centralizes web request processing through a single entry point.</p>

<p>• DispatcherServlet applies this pattern in Spring MVC.</p>

<p>• Centralizing request processing makes it possible to apply common web concerns consistently.</p><br>

<h3>Benefits</h3>

<ul>
<li>• Centralized request routing.</li>
<li>• Consistent request processing.</li>
<li>• Centralized exception handling.</li>
<li>• Easier integration of cross-cutting web concerns.</li>
<li>• Clear separation between web infrastructure and application logic.</li>
</ul>
`
        },

        {
            content: `
<h3>DispatcherServlet and Front Controller Pattern</h3>

<p>• DispatcherServlet is the implementation of the Front Controller concept in Spring MVC.</p>

<p>• It acts as the central entry point and delegates requests to the appropriate handlers.</p>
`,
            codeExamples: [
                `                Client
                   |
                   | HTTP Request
                   ↓
          DispatcherServlet
                   |
          ┌────────┴────────┐
          ↓                 ↓
   HandlerMapping     Exception Handling
          |
          ↓
      Controller
          |
          ↓
       Service
          |
          ↓
      Repository
          |
          ↓
       Database`
            ]
        }
                    ]
                }
            ]
        }
    ],

    // =============================================================
    // CHEAT NOTES
    // =============================================================

    cheatNotes: [
        'Spring MVC is a web framework in the Spring ecosystem.',
        'MVC stands for Model, View and Controller.',
        'DispatcherServlet acts as the Front Controller in Spring MVC.',
        'DispatcherServlet receives incoming HTTP requests.',
        'HandlerMapping identifies the appropriate Controller or handler.',
        'Controller handles the request and coordinates application processing.',
        'Model contains data that can be passed to the View.',
        'ModelAndView can contain both Model data and a logical View name.',
        'ViewResolver converts a logical View name into an actual View.',
        'View is responsible for presenting data to the user.',
        'Typical Spring MVC flow: Client → DispatcherServlet → HandlerMapping → Controller → Model → ViewResolver → View → Client.',
        'HandlerAdapter is used by DispatcherServlet to invoke the selected handler.',
        '@Controller is used for MVC controllers.',
        '@RestController is commonly used for REST APIs.',
        '@RequestMapping maps HTTP requests to controller methods.',
        '@GetMapping handles HTTP GET requests.',
        '@PostMapping handles HTTP POST requests.',
        '@PutMapping handles HTTP PUT requests.',
        '@DeleteMapping handles HTTP DELETE requests.',
        '@RequestParam reads query parameters.',
        '@PathVariable reads values from URL paths.',
        '@RequestBody converts request data such as JSON into Java objects.',
        '@ResponseBody returns method data directly in the HTTP response.',
        '@ControllerAdvice provides centralized exception handling.',
        'ViewResolver helps separate Controller logic from the physical View location.',
        'JSP and Thymeleaf are commonly used server-side View technologies.',
        'Spring MVC is a part of the larger Spring Framework ecosystem.',
        'Spring Boot simplifies configuration and commonly uses Spring MVC for web applications.',
        'spring-boot-starter-web is commonly used to create Spring MVC-based web applications and REST APIs.'
    ],

    // =============================================================
    // INTERVIEW QUESTIONS
    // =============================================================

    interviewQuestions: [
        {
            company: 'General',
            questions: [
                'What is Spring MVC?',
                'What does MVC stand for?',
                'What are the main components of Spring MVC?',
                'What is DispatcherServlet?',
                'Why is DispatcherServlet called the Front Controller?',
                'What is the role of DispatcherServlet in Spring MVC?',
                'Explain the Spring MVC request flow.',
                'Explain the complete Spring MVC request-response lifecycle.',
                'What happens when a user enters a URL in a Spring MVC application?',
                'How does Spring MVC handle a request internally?',
                'What is the Front Controller pattern?',
                'How is Front Controller implemented in Spring MVC?',
                'What is HandlerMapping?',
                'What is the purpose of HandlerMapping?',
                'How does HandlerMapping identify a Controller?',
                'What is HandlerAdapter?',
                'What is a Controller in Spring MVC?',
                'What is the difference between @Controller and @RestController?',
                'What is the role of a Controller in Spring MVC?',
                'What is @RequestMapping?',
                'What is the difference between @RequestMapping and @GetMapping?',
                'What is @PostMapping used for?',
                'What is @PutMapping used for?',
                'What is @DeleteMapping used for?',
                'What is @RequestParam?',
                'What is @PathVariable?',
                'What is the difference between @RequestParam and @PathVariable?',
                'What is @RequestBody?',
                'What is @ResponseBody?',
                'What is Model in Spring MVC?',
                'What is ModelAndView?',
                'What is the difference between Model and ModelAndView?',
                'How do you add data to ModelAndView?',
                'What is ViewResolver?',
                'Why do we use ViewResolver in Spring MVC?',
                'What is InternalResourceViewResolver?',
                'How does ViewResolver find a JSP page?',
                'What is a logical View name?',
                'What is a View in Spring MVC?',
                'Which technologies can be used to create Views in Spring MVC?',
                'How does Controller communicate with View?',
                'Explain Controller → ModelAndView → ViewResolver → View flow.',
                'Explain DispatcherServlet → HandlerMapping → Controller flow.',
                'What is the role of ViewResolver in rendering a JSP?',
                'How does Spring MVC pass data from Controller to View?',
                'What is the difference between server-side rendering and REST API response?',
                'Explain the role of DispatcherServlet, HandlerMapping, Controller, ModelAndView, ViewResolver and View in Spring MVC.',
                'What are the advantages of Spring MVC?',
                'What are the main features of Spring MVC?',
                'How does Spring MVC support REST APIs?',
                'How does Spring MVC handle exceptions?',
                'What is @ExceptionHandler?',
                'What is @ControllerAdvice?',
                'What is data binding in Spring MVC?',
                'What is validation in Spring MVC?',
                'What is the difference between Spring MVC and Spring Framework?',
                'What is the difference between Spring MVC and Spring Boot?',
                'Does Spring Boot replace Spring MVC?',
                'What is spring-boot-starter-web?',
                'How does Spring MVC communicate with the database?',
                'Explain Controller-Service-Repository architecture.',
                'What is the role of the Service layer?',
                'What is the role of the Repository layer?'
            ]
        }
    ]
}
];