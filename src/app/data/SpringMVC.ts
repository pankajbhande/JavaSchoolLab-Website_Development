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
,

{
    "id": "controllers",
    "name": "5. Controllers",
    "topics": [
        {
            "id": "5-1-controller",
            "name": "5.1 @Controller",
            "beginner": [
                {
                    "content": "\n<h2>5.1 @Controller</h2>\n<p>• <strong>@Controller</strong> is a stereotype annotation in Spring MVC used to mark a Java class as a Web Controller component.</p>\n<p>• Classes annotated with <code>@Controller</code> are automatically detected by Spring during component scanning and registered as Spring beans in the ApplicationContext.</p>\n<p>• Handler methods in a <code>@Controller</code> typically return a <strong>String</strong> representing a logical view name (e.g., JSP or Thymeleaf template name).</p><br>\n<h3>Key Responsibilities</h3>\n<ul>\n<li>• Receives incoming HTTP requests from DispatcherServlet.</li>\n<li>• Interacts with the Service layer to execute business logic.</li>\n<li>• Adds processed data to the <code>Model</code>.</li>\n<li>• Returns the view name to be rendered by the <code>ViewResolver</code>.</li>\n</ul>\n",
                    "codeExamples": [
                        "@Controller\npublic class HomeController {\n\n    @GetMapping(\"/home\")\n    public String showHomePage(Model model) {\n        model.addAttribute(\"welcomeMessage\", \"Welcome to JavaSchoolLab Spring MVC!\");\n        return \"home\"; // Resolves to /WEB-INF/views/home.jsp or home.html\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Working of @Controller in Request Lifecycle</h2>\n<p>• When DispatcherServlet receives a request, <code>RequestMappingHandlerMapping</code> matches the request URL to a specific method inside a <code>@Controller</code> class.</p>\n<p>• The controller method processes request data and returns a view name or a <code>ModelAndView</code> object.</p><br>\n<h3>Comparison: @Controller vs @Component</h3>\n<table border=\"1\" cellpadding=\"8\" style=\"border-collapse: collapse; width: 100%;\">\n  <thead>\n    <tr style=\"background-color: #f2f2f2;\">\n      <th>Feature</th>\n      <th>@Component</th>\n      <th>@Controller</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><strong>Purpose</strong></td>\n      <td>Generic Spring-managed component</td>\n      <td>Specialized component for Web Controllers</td>\n    </tr>\n    <tr>\n      <td><strong>Request Mapping</strong></td>\n      <td>Cannot handle HTTP request mappings</td>\n      <td>Supports <code>@RequestMapping</code> and HTTP shortcut annotations</td>\n    </tr>\n    <tr>\n      <td><strong>View Resolution</strong></td>\n      <td>Not supported</td>\n      <td>Returns logical view names for ViewResolver</td>\n    </tr>\n  </tbody>\n</table>\n",
                    "codeExamples": [
                        "@Controller\n@RequestMapping(\"/products\")\npublic class ProductController {\n\n    @GetMapping(\"/list\")\n    public String listProducts(Model model) {\n        List<String> products = List.of(\"Laptop\", \"Smartphone\", \"Tablet\");\n        model.addAttribute(\"products\", products);\n        return \"product-list\";\n    }\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Internal Architecture of @Controller Handler Resolution</h2>\n<p>• Spring MVC registers controller methods inside <code>RequestMappingHandlerMapping</code> during container startup by scanning all beans annotated with <code>@Controller</code> or <code>@RequestMapping</code>.</p>\n<p>• Method parameters are dynamically resolved using <code>HandlerMethodArgumentResolver</code> implementations (e.g., <code>ModelAttributeMethodProcessor</code>, <code>RequestParamMethodArgumentResolver</code>).</p>\n",
                    "codeExamples": [
                        "@Controller\npublic class CustomViewController {\n\n    @GetMapping(\"/dashboard\")\n    public ModelAndView getDashboard() {\n        ModelAndView mav = new ModelAndView(\"dashboard\");\n        mav.addObject(\"userCount\", 1250);\n        mav.addObject(\"activeStatus\", \"ONLINE\");\n        return mav;\n    }\n}"
                    ]
                }
            ]
        },
        {
            "id": "5-2-restcontroller",
            "name": "5.2 @RestController",
            "beginner": [
                {
                    "content": "\n<h2>5.2 @RestController</h2>\n<p>• <strong>@RestController</strong> is a convenience annotation introduced in Spring 4.0 that combines <code>@Controller</code> and <code>@ResponseBody</code>.</p>\n<p>• It marks a controller class where every handler method directly returns domain objects or raw data instead of resolving a HTML/JSP view template.</p>\n<p>• Data returned from <code>@RestController</code> methods is automatically serialized into JSON or XML and written directly to the HTTP response body.</p><br>\n<h3>Why Use @RestController?</h3>\n<ul>\n<li>• Ideal for building RESTful Web Services and APIs.</li>\n<li>• Eliminates the need to add <code>@ResponseBody</code> on every handler method.</li>\n<li>• Seamlessly integrates with JSON libraries like Jackson.</li>\n</ul>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/students\")\npublic class StudentApiController {\n\n    @GetMapping(\"/{id}\")\n    public Student getStudentById(@PathVariable Long id) {\n        return new Student(id, \"Pratiksha\", \"Computer Science\");\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>@RestController vs @Controller</h2>\n<p>• Understanding when to use <code>@Controller</code> vs <code>@RestController</code> is essential in modern Spring web development.</p><br>\n<table border=\"1\" cellpadding=\"8\" style=\"border-collapse: collapse; width: 100%;\">\n  <thead>\n    <tr style=\"background-color: #f2f2f2;\">\n      <th>Feature</th>\n      <th>@Controller</th>\n      <th>@RestController</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><strong>Return Value</strong></td>\n      <td>View Name (String) or ModelAndView</td>\n      <td>Domain Object / Response Body (JSON/XML)</td>\n    </tr>\n    <tr>\n      <td><strong>Implicit @ResponseBody</strong></td>\n      <td>No (Must specify manually if returning data)</td>\n      <td>Yes (Applied to all methods automatically)</td>\n    </tr>\n    <tr>\n      <td><strong>Primary Use Case</strong></td>\n      <td>Traditional Web Applications (JSP/Thymeleaf)</td>\n      <td>REST APIs / Single Page Applications (React/Angular)</td>\n    </tr>\n  </tbody>\n</table>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/users\")\npublic class UserRestController {\n\n    @GetMapping\n    public List<User> getAllUsers() {\n        return List.of(\n            new User(1L, \"Alice\", \"alice@example.com\"),\n            new User(2L, \"Bob\", \"bob@example.com\")\n        );\n    }\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>HttpMessageConverter & Serialization in @RestController</h2>\n<p>• When a <code>@RestController</code> method returns an object, Spring uses registered <code>HttpMessageConverter</code> instances to serialize it.</p>\n<p>• For JSON responses, <code>MappingJackson2HttpMessageConverter</code> converts Java objects into JSON using Jackson's <code>ObjectMapper</code> based on the client's <code>Accept: application/json</code> header.</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/v1/orders\")\npublic class OrderRestController {\n\n    @PostMapping\n    public ResponseEntity<Order> createOrder(@RequestBody Order order) {\n        // Business logic execution...\n        order.setStatus(\"CREATED\");\n        return ResponseEntity.status(HttpStatus.CREATED).body(order);\n    }\n}"
                    ]
                }
            ]
        },
        {
            "id": "5-3-creating-a-controller",
            "name": "5.3 Creating a Controller",
            "beginner": [
                {
                    "content": "\n<h2>5.3 Creating a Controller</h2>\n<p>• Creating a Controller in Spring MVC requires three basic steps:</p>\n<ol>\n<li>1. Create a standard Java class.</li>\n<li>2. Annotate the class with <code>@Controller</code> or <code>@RestController</code>.</li>\n<li>3. Add handler methods annotated with mapping annotations like <code>@GetMapping</code> or <code>@PostMapping</code>.</li>\n</ol>\n",
                    "codeExamples": [
                        "@RestController\npublic class HelloController {\n\n    @GetMapping(\"/hello\")\n    public String sayHello() {\n        return \"Hello, Spring MVC World!\";\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Best Practices for Creating Controllers</h2>\n<ul>\n<li>• Keep controllers \"thin\" by delegating business logic to Service classes.</li>\n<li>• Use Constructor-based Dependency Injection for required services.</li>\n<li>• Use base request path mappings at class level with <code>@RequestMapping</code>.</li>\n</ul>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/v1/courses\")\npublic class CourseController {\n\n    private final CourseService courseService;\n\n    // Constructor Injection\n    public CourseController(CourseService courseService) {\n        this.courseService = courseService;\n    }\n\n    @GetMapping\n    public List<Course> getAllCourses() {\n        return courseService.findAllCourses();\n    }\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Abstract Controllers and Class Hierarchies</h2>\n<p>• Enterprise applications often use abstract base controllers to share common behaviors such as logging, security checks, or common response wrappers.</p>\n",
                    "codeExamples": [
                        "public abstract class BaseApiController {\n    protected <T> ResponseEntity<ApiResponse<T>> createSuccessResponse(T data) {\n        return ResponseEntity.ok(new ApiResponse<>(\"SUCCESS\", data));\n    }\n}\n\n@RestController\n@RequestMapping(\"/api/v1/employees\")\npublic class EmployeeController extends BaseApiController {\n\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<ApiResponse<Employee>> getEmployee(@PathVariable Long id) {\n        Employee emp = new Employee(id, \"Rahul\");\n        return createSuccessResponse(emp);\n    }\n}"
                    ]
                }
            ]
        },
        {
            "id": "5-4-controller-methods",
            "name": "5.4 Controller Methods",
            "beginner": [
                {
                    "content": "\n<h2>5.4 Controller Methods</h2>\n<p>• Controller handler methods are public methods inside a controller that handle specific HTTP requests.</p>\n<p>• Spring MVC supports flexible method signatures with a wide variety of allowed parameters and return types.</p><br>\n<h3>Supported Parameter Types</h3>\n<ul>\n<li>• <code>HttpServletRequest</code>, <code>HttpServletResponse</code>, <code>HttpSession</code></li>\n<li>• <code>Model</code>, <code>ModelMap</code>, <code>ModelAndView</code></li>\n<li>• <code>@RequestParam</code>, <code>@PathVariable</code>, <code>@RequestBody</code>, <code>@ModelAttribute</code></li>\n<li>• <code>BindingResult</code> / <code>Errors</code> (for validation results)</li>\n</ul>\n",
                    "codeExamples": [
                        "@Controller\npublic class SampleController {\n\n    @GetMapping(\"/greet\")\n    public String greetUser(@RequestParam(name=\"name\", defaultValue=\"Guest\") String name, Model model) {\n        model.addAttribute(\"username\", name);\n        return \"greeting\";\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Flexible Controller Method Return Types</h2>\n<table border=\"1\" cellpadding=\"8\" style=\"border-collapse: collapse; width: 100%;\">\n  <thead>\n    <tr style=\"background-color: #f2f2f2;\">\n      <th>Return Type</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><code>String</code></td>\n      <td>Logical view name to be resolved by ViewResolver.</td>\n    </tr>\n    <tr>\n      <td><code>ModelAndView</code></td>\n      <td>Container holding view name and model attributes.</td>\n    </tr>\n    <tr>\n      <td><code>ResponseEntity&lt;T&gt;</code></td>\n      <td>Complete HTTP response including status code, headers, and body.</td>\n    </tr>\n    <tr>\n      <td><code>void</code></td>\n      <td>Used when response is written directly via <code>HttpServletResponse</code>.</td>\n    </tr>\n  </tbody>\n</table>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/items\")\npublic class ItemController {\n\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<Item> getItem(@PathVariable Long id) {\n        Item item = new Item(id, \"Book\");\n        return ResponseEntity.ok()\n                .header(\"X-Custom-Header\", \"SpringMVC\")\n                .body(item);\n    }\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>HandlerMethodArgumentResolver & Custom Resolvers</h2>\n<p>• Spring MVC resolves method arguments dynamically using registered implementations of <code>HandlerMethodArgumentResolver</code>.</p>\n<p>• Custom argument resolvers can be created by implementing <code>HandlerMethodArgumentResolver</code> and registering them via <code>WebMvcConfigurer</code>.</p>\n",
                    "codeExamples": [
                        "public class CurrentUserArgumentResolver implements HandlerMethodArgumentResolver {\n    @Override\n    public boolean supportsParameter(MethodParameter parameter) {\n        return parameter.hasParameterAnnotation(CurrentUser.class);\n    }\n\n    @Override\n    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer,\n                                  NativeWebRequest webRequest, WebDataBinderFactory binderFactory) {\n        return new UserSession(\"user_123\", \"ADMIN\");\n    }\n}"
                    ]
                }
            ]
        },
        {
            "id": "5-5-controller-lifecycle",
            "name": "5.5 Controller Lifecycle",
            "beginner": [
                {
                    "content": "\n<h2>5.5 Controller Lifecycle</h2>\n<p>• Controllers in Spring MVC are managed by the Spring IoC Container and follow standard Spring Bean lifecycle phases:</p>\n<ol>\n<li>1. <strong>Instantiation:</strong> Spring creates the controller instance.</li>\n<li>2. <strong>Dependency Injection:</strong> Dependencies are injected.</li>\n<li>3. <strong>Initialization:</strong> <code>@PostConstruct</code> methods execute.</li>\n<li>4. <strong>Request Processing:</strong> Controller processes HTTP requests.</li>\n<li>5. <strong>Destruction:</strong> <code>@PreDestroy</code> methods execute when application stops.</li>\n</ol>\n",
                    "codeExamples": [
                        "@RestController\npublic class LifecycleDemoController {\n\n    @PostConstruct\n    public void init() {\n        System.out.println(\"Controller Bean Initialized!\");\n    }\n\n    @PreDestroy\n    public void cleanup() {\n        System.out.println(\"Controller Bean Destroyed!\");\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Controller Scopes & Thread Safety</h2>\n<p>• By default, Spring Controllers are <strong>Singleton</strong> beans (one single instance shared across all client requests).</p>\n<p>• <strong>Thread Safety Warning:</strong> Never use instance variables to store request-specific state in a Singleton controller to prevent concurrent thread contamination.</p><br>\n<h3>Supported Controller Scopes</h3>\n<ul>\n<li>• <strong>Singleton (Default):</strong> Single shared instance across container.</li>\n<li>• <strong>@RequestScope:</strong> New instance created for every HTTP request.</li>\n<li>• <strong>@SessionScope:</strong> New instance created per HTTP user session.</li>\n</ul>\n",
                    "codeExamples": [
                        "@RestController\n@RequestScope\n@RequestMapping(\"/api/scoped\")\npublic class RequestScopedController {\n\n    private final String requestId = UUID.randomUUID().toString();\n\n    @GetMapping(\"/id\")\n    public String getRequestId() {\n        return \"Request ID for this request: \" + requestId;\n    }\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Concurrency & Scope Proxy Execution</h2>\n<p>• When injecting a <code>@RequestScope</code> or <code>@SessionScope</code> bean into a <code>Singleton</code> bean, Spring uses CGLIB scoped proxies.</p>\n<p>• The proxy intercepts method invocations and delegates to the target bean bound to the current request context thread local.</p>\n",
                    "codeExamples": [
                        "@Component\n@SessionScope\npublic class UserCart {\n    private List<String> items = new ArrayList<>();\n    public void addItem(String item) { items.add(item); }\n    public List<String> getItems() { return items; }\n}"
                    ]
                }
            ]
        }
    ]
},

{
    "id": "request-mapping",
    "name": "6. Request Mapping",
    "topics": [
        {
            "id": "6-1-requestmapping",
            "name": "6.1 @RequestMapping",
            "beginner": [
                {
                    "content": "\n<h2>6.1 @RequestMapping</h2>\n<p>• <strong>@RequestMapping</strong> is the foundational annotation used to map HTTP requests to controller classes or specific handler methods.</p>\n<p>• It can be applied at both class level (base path) and method level (relative endpoint path).</p>\n",
                    "codeExamples": [
                        "@Controller\n@RequestMapping(\"/users\")\npublic class UserController {\n\n    @RequestMapping(value = \"/profile\", method = RequestMethod.GET)\n    public String getProfile() {\n        return \"user-profile\";\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>@RequestMapping Attributes</h2>\n<table border=\"1\" cellpadding=\"8\" style=\"border-collapse: collapse; width: 100%;\">\n  <thead>\n    <tr style=\"background-color: #f2f2f2;\">\n      <th>Attribute</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td><code>value / path</code></td><td>URL path mapping strings.</td></tr>\n    <tr><td><code>method</code></td><td>HTTP method (GET, POST, PUT, DELETE, etc.).</td></tr>\n    <tr><td><code>params</code></td><td>Filters request based on presence or value of query parameters.</td></tr>\n    <tr><td><code>headers</code></td><td>Filters request based on HTTP header criteria.</td></tr>\n    <tr><td><code>consumes</code></td><td>Specifies accepted request Content-Type (e.g., <code>application/json</code>).</td></tr>\n    <tr><td><code>produces</code></td><td>Specifies returned response Content-Type (e.g., <code>application/json</code>).</td></tr>\n  </tbody>\n</table>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/v1/data\")\npublic class DataController {\n\n    @RequestMapping(\n        value = \"/custom\",\n        method = RequestMethod.POST,\n        consumes = MediaType.APPLICATION_JSON_VALUE,\n        produces = MediaType.APPLICATION_JSON_VALUE,\n        headers = \"X-API-KEY=secret123\"\n    )\n    public String processData(@RequestBody String payload) {\n        return \"{\"status\":\"PROCESSED\"}\";\n    }\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>PathPatternParser vs AntPathMatcher</h2>\n<p>• Spring 5.3+ introduced <code>PathPatternParser</code> as an optimized replacement for legacy <code>AntPathMatcher</code> for URI pattern parsing.</p>\n<p>• Supports pattern matching wildcards: single asterisk (<code>*</code>) for single path segment, double asterisk (<code>**</code>) for multiple segments.</p>\n",
                    "codeExamples": [
                        "@GetMapping(\"/files/{filename:.+\\.(png|jpg)}\")\npublic ResponseEntity<Resource> getImageFile(@PathVariable String filename) {\n    // Matches /files/photo.png or /files/avatar.jpg using regex in path\n    return ResponseEntity.ok().build();\n}"
                    ]
                }
            ]
        },
        {
            "id": "6-2-getmapping",
            "name": "6.2 @GetMapping",
            "beginner": [
                {
                    "content": "\n<h2>6.2 @GetMapping</h2>\n<p>• <strong>@GetMapping</strong> is a composed shortcut annotation for <code>@RequestMapping(method = RequestMethod.GET)</code>.</p>\n<p>• Used to handle HTTP GET requests for retrieving data or views without side effects.</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/books\")\npublic class BookController {\n\n    @GetMapping\n    public List<String> getBooks() {\n        return List.of(\"Effective Java\", \"Clean Code\", \"Spring in Action\");\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>GET Requests Characteristics</h2>\n<ul>\n<li>• <strong>Safe & Idempotent:</strong> Multiple identical GET requests return the exact same result without altering server state.</li>\n<li>• <strong>Cacheable:</strong> Responses can be cached by browsers and proxies.</li>\n<li>• <strong>Data Passing:</strong> Data is passed via URL query parameters (e.g., <code>/search?keyword=java</code>).</li>\n</ul>\n",
                    "codeExamples": [
                        "@GetMapping(\"/{id}\")\npublic Book getBookById(@PathVariable Long id) {\n    return new Book(id, \"Spring Boot Microservices\");\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Conditional GET & Caching Headers</h2>\n<p>• Spring MVC supports HTTP Caching headers like <code>ETag</code> and <code>Cache-Control</code> to minimize network bandwidth.</p>\n",
                    "codeExamples": [
                        "@GetMapping(\"/cached-resource\")\npublic ResponseEntity<String> getCachedResource() {\n    return ResponseEntity.ok()\n            .cacheControl(CacheControl.maxAge(30, TimeUnit.MINUTES).cachePublic())\n            .eTag(\"v1.0.2\")\n            .body(\"Cached Content Body\");\n}"
                    ]
                }
            ]
        },
        {
            "id": "6-3-postmapping",
            "name": "6.3 @PostMapping",
            "beginner": [
                {
                    "content": "\n<h2>6.3 @PostMapping</h2>\n<p>• <strong>@PostMapping</strong> is a shortcut annotation for <code>@RequestMapping(method = RequestMethod.POST)</code>.</p>\n<p>• Used to receive submitted form data or JSON payloads to create a new resource on the server.</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/authors\")\npublic class AuthorController {\n\n    @PostMapping\n    public String createAuthor(@RequestBody Author author) {\n        return \"Author \" + author.getName() + \" created successfully!\";\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>POST Semantics & Post-Redirect-Get (PRG) Pattern</h2>\n<p>• HTTP POST is <strong>neither safe nor idempotent</strong> (sending duplicate POST requests creates duplicate records).</p>\n<p>• In traditional HTML web apps, use the <strong>PRG (Post-Redirect-Get)</strong> pattern to prevent accidental duplicate form submissions upon page refresh.</p>\n",
                    "codeExamples": [
                        "@Controller\n@RequestMapping(\"/feedback\")\npublic class FeedbackController {\n\n    @PostMapping\n    public String submitFeedback(@ModelAttribute Feedback feedback) {\n        // Save feedback\n        return \"redirect:/feedback/success\"; // Redirect to GET handler\n    }\n\n    @GetMapping(\"/success\")\n    public String showSuccessPage() {\n        return \"feedback-success\";\n    }\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Returning 201 Created with Location Header</h2>\n<p>• REST best practices dictate returning HTTP status <strong>201 Created</strong> along with a <code>Location</code> header containing the URI of the newly created resource.</p>\n",
                    "codeExamples": [
                        "@PostMapping\npublic ResponseEntity<Customer> createCustomer(@RequestBody Customer customer, UriComponentsBuilder ucb) {\n    Customer savedCustomer = customerService.save(customer);\n    URI locationOfNewCustomer = ucb\n            .path(\"/api/customers/{id}\")\n            .buildAndExpand(savedCustomer.getId())\n            .toUri();\n    return ResponseEntity.created(locationOfNewCustomer).body(savedCustomer);\n}"
                    ]
                }
            ]
        },
        {
            "id": "6-4-putmapping",
            "name": "6.4 @PutMapping",
            "beginner": [
                {
                    "content": "\n<h2>6.4 @PutMapping</h2>\n<p>• <strong>@PutMapping</strong> is a shortcut annotation for <code>@RequestMapping(method = RequestMethod.PUT)</code>.</p>\n<p>• Used to update or replace an existing resource entirely.</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/students\")\npublic class StudentUpdateController {\n\n    @PutMapping(\"/{id}\")\n    public Student updateStudent(@PathVariable Long id, @RequestBody Student studentDetails) {\n        return studentService.update(id, studentDetails);\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>PUT vs POST</h2>\n<table border=\"1\" cellpadding=\"8\" style=\"border-collapse: collapse; width: 100%;\">\n  <thead>\n    <tr style=\"background-color: #f2f2f2;\">\n      <th>Feature</th>\n      <th>POST</th>\n      <th>PUT</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td><strong>Idempotency</strong></td><td>No (Duplicate requests create multiple records)</td><td>Yes (Multiple requests produce exact same state)</td></tr>\n    <tr><td><strong>Primary Action</strong></td><td>Create new resource</td><td>Replace existing resource or create if absent</td></tr>\n  </tbody>\n</table>\n",
                    "codeExamples": [
                        "@PutMapping(\"/accounts/{accNo}\")\npublic ResponseEntity<Account> updateAccount(@PathVariable String accNo, @RequestBody Account account) {\n    Account updated = accountService.replaceAccount(accNo, account);\n    return ResponseEntity.ok(updated);\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Optimistic Locking in PUT Requests</h2>\n<p>• Use <code>If-Match</code> headers with ETags in PUT requests to prevent concurrency overwrite issues (lost updates).</p>\n",
                    "codeExamples": [
                        "@PutMapping(\"/documents/{id}\")\npublic ResponseEntity<Document> updateDoc(@PathVariable Long id, \n                                          @RequestHeader(\"If-Match\") String ifMatch, \n                                          @RequestBody Document doc) {\n    // Validate ETag version before saving\n    return ResponseEntity.ok(docService.update(id, doc, ifMatch));\n}"
                    ]
                }
            ]
        },
        {
            "id": "6-5-deletemapping",
            "name": "6.5 @DeleteMapping",
            "beginner": [
                {
                    "content": "\n<h2>6.5 @DeleteMapping</h2>\n<p>• <strong>@DeleteMapping</strong> is a shortcut annotation for <code>@RequestMapping(method = RequestMethod.DELETE)</code>.</p>\n<p>• Used to delete a resource identified by a URL or identifier.</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/employees\")\npublic class EmployeeDeleteController {\n\n    @DeleteMapping(\"/{id}\")\n    public String deleteEmployee(@PathVariable Long id) {\n        employeeService.deleteById(id);\n        return \"Employee with ID \" + id + \" deleted successfully!\";\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>HTTP Response Status Codes for DELETE</h2>\n<ul>\n<li>• <strong>204 No Content:</strong> Deletion was successful and no response body is returned (Recommended).</li>\n<li>• <strong>200 OK:</strong> Deletion was successful and a confirmation message/DTO is returned.</li>\n<li>• <strong>404 Not Found:</strong> The resource to be deleted does not exist.</li>\n</ul>\n",
                    "codeExamples": [
                        "@DeleteMapping(\"/{id}\")\npublic ResponseEntity<Void> deleteUser(@PathVariable Long id) {\n    boolean deleted = userService.deleteUser(id);\n    if (!deleted) {\n        return ResponseEntity.notFound().build();\n    }\n    return ResponseEntity.noContent().build(); // 204 No Content\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Soft Delete Design Pattern</h2>\n<p>• Instead of physically removing records from database tables, enterprise apps often perform \"Soft Deletes\" by setting a boolean flag (e.g., <code>deleted = true</code>).</p>\n",
                    "codeExamples": [
                        "@DeleteMapping(\"/soft/{id}\")\npublic ResponseEntity<String> softDeleteArticle(@PathVariable Long id) {\n    articleService.markAsDeleted(id);\n    return ResponseEntity.ok(\"Article archived successfully.\");\n}"
                    ]
                }
            ]
        },
        {
            "id": "6-6-patchmapping",
            "name": "6.6 @PatchMapping",
            "beginner": [
                {
                    "content": "\n<h2>6.6 @PatchMapping</h2>\n<p>• <strong>@PatchMapping</strong> is a shortcut annotation for <code>@RequestMapping(method = RequestMethod.PATCH)</code>.</p>\n<p>• Used to apply partial modifications to a resource (updating only specific fields instead of replacing the entire object).</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/users\")\npublic class UserPatchController {\n\n    @PatchMapping(\"/{id}/email\")\n    public User updateEmail(@PathVariable Long id, @RequestParam String newEmail) {\n        return userService.updateEmail(id, newEmail);\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>PATCH vs PUT</h2>\n<table border=\"1\" cellpadding=\"8\" style=\"border-collapse: collapse; width: 100%;\">\n  <thead>\n    <tr style=\"background-color: #f2f2f2;\">\n      <th>Feature</th>\n      <th>PUT</th>\n      <th>PATCH</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td><strong>Update Scope</strong></td><td>Full replacement of entity</td><td>Partial update of entity fields</td></tr>\n    <tr><td><strong>Payload Content</strong></td><td>Complete resource object</td><td>Only modified fields / Delta changes</td></tr>\n  </tbody>\n</table>\n",
                    "codeExamples": [
                        "@PatchMapping(\"/{id}\")\npublic User patchUserFields(@PathVariable Long id, @RequestBody Map<String, Object> updates) {\n    return userService.applyPartialUpdates(id, updates);\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>JSON Patch (RFC 6902) Implementation</h2>\n<p>• JSON Patch defines a JSON document structure for expressing a sequence of operations to apply to a JSON document.</p>\n",
                    "codeExamples": [
                        "@PatchMapping(path = \"/{id}\", consumes = \"application/json-patch+json\")\npublic ResponseEntity<User> patchUser(@PathVariable Long id, @RequestBody JsonPatch patchDocument) {\n    User user = userService.findById(id);\n    User patchedUser = applyPatchToUser(patchDocument, user);\n    userService.save(patchedUser);\n    return ResponseEntity.ok(patchedUser);\n}"
                    ]
                }
            ]
        }
    ]
},

{
    "id": "request-data-handling",
    "name": "7. Request Data Handling",
    "topics": [
        {
            "id": "7-1-requestparam",
            "name": "7.1 @RequestParam",
            "beginner": [
                {
                    "content": "\n<h2>7.1 @RequestParam</h2>\n<p>• <strong>@RequestParam</strong> is used to extract HTTP query parameters (e.g., <code>?name=value</code>) or form data parameters from incoming requests.</p>\n<p>• It automatically binds request parameters to controller method arguments.</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/search\")\npublic class SearchController {\n\n    @GetMapping\n    public String search(@RequestParam String query) {\n        return \"Search results for: \" + query; // URL: /api/search?query=spring\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>@RequestParam Options & Optional Parameters</h2>\n<ul>\n<li>• <code>name / value</code>: Specifies the parameter name in the request URL.</li>\n<li>• <code>required</code>: Defines if the parameter is compulsory (default is <code>true</code>).</li>\n<li>• <code>defaultValue</code>: Fallback value if the parameter is omitted in the request.</li>\n</ul>\n",
                    "codeExamples": [
                        "@GetMapping(\"/products\")\npublic List<Product> filterProducts(\n        @RequestParam(name = \"category\", required = false, defaultValue = \"ALL\") String category,\n        @RequestParam(name = \"page\", defaultValue = \"0\") int page,\n        @RequestParam(name = \"size\", defaultValue = \"10\") int size) {\n    return productService.getProducts(category, page, size);\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Mapping Parameters to Map / MultiValueMap</h2>\n<p>• When query parameters are dynamic or unknown in advance, map them directly into a <code>Map&lt;String, String&gt;</code> or <code>MultiValueMap&lt;String, String&gt;</code>.</p>\n",
                    "codeExamples": [
                        "@GetMapping(\"/all-params\")\npublic String handleAllParams(@RequestParam Map<String, String> allParams) {\n    return \"Parameters received: \" + allParams.entrySet().toString();\n}"
                    ]
                }
            ]
        },
        {
            "id": "7-2-pathvariable",
            "name": "7.2 @PathVariable",
            "beginner": [
                {
                    "content": "\n<h2>7.2 @PathVariable</h2>\n<p>• <strong>@PathVariable</strong> is used to extract values embedded directly inside the URI path (e.g., <code>/users/101</code>).</p>\n<p>• Commonly used in REST APIs where resources are identified by URL path segments.</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/users\")\npublic class UserPathController {\n\n    @GetMapping(\"/{id}\")\n    public String getUserById(@PathVariable(\"id\") Long userId) {\n        return \"Fetching user with ID: \" + userId;\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Multiple PathVariables & Regex Matching</h2>\n<p>• You can use multiple path variables in a single path mapping and apply regex syntax for path segment validation.</p>\n",
                    "codeExamples": [
                        "@GetMapping(\"/departments/{deptId}/employees/{empId}\")\npublic String getDeptEmployee(@PathVariable Long deptId, @PathVariable Long empId) {\n    return \"Department: \" + deptId + \", Employee: \" + empId;\n}\n\n@GetMapping(\"/files/{filename:[a-zA-Z0-9]+}\")\npublic String getFileByName(@PathVariable String filename) {\n    return \"Validating filename: \" + filename;\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>MatrixVariables & Custom Path Segment Processing</h2>\n<p>• Spring MVC supports Matrix Variables (e.g., <code>/cars;color=red;year=2024</code>) extracted using <code>@MatrixVariable</code> annotation.</p>\n",
                    "codeExamples": [
                        "@GetMapping(\"/cars/{matrixVars}\")\npublic List<Car> getCarsByMatrix(@MatrixVariable(pathVar=\"matrixVars\") Map<String, List<String>> matrixVars) {\n    // /cars/brand=BMW;color=red,black\n    return carService.findCars(matrixVars);\n}"
                    ]
                }
            ]
        },
        {
            "id": "7-3-requestbody",
            "name": "7.3 @RequestBody",
            "beginner": [
                {
                    "content": "\n<h2>7.3 @RequestBody</h2>\n<p>• <strong>@RequestBody</strong> deserializes the incoming HTTP request payload (JSON/XML) directly into a Java object.</p>\n<p>• Uses Spring's <code>HttpMessageConverter</code> mechanism (Jackson for JSON) to parse HTTP request body stream.</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/students\")\npublic class StudentPostController {\n\n    @PostMapping\n    public String addStudent(@RequestBody Student student) {\n        return \"Student \" + student.getName() + \" added successfully!\";\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Combining @RequestBody with Validation Annotations</h2>\n<p>• Always validate incoming request payloads by adding <code>@Valid</code> alongside <code>@RequestBody</code>.</p>\n",
                    "codeExamples": [
                        "@PostMapping(\"/register\")\npublic ResponseEntity<String> registerUser(@Valid @RequestBody UserRegistrationDto userDto) {\n    userService.register(userDto);\n    return ResponseEntity.ok(\"User registered successfully.\");\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Custom Jackson Jackson Deserializers & Polymorphism</h2>\n<p>• Use <code>@JsonTypeInfo</code> or custom <code>JsonDeserializer&lt;T&gt;</code> implementations to parse complex dynamic or polymorphic JSON structures.</p>\n",
                    "codeExamples": [
                        "@PostMapping(value = \"/events\", consumes = MediaType.APPLICATION_JSON_VALUE)\npublic ResponseEntity<Void> processEvent(@RequestBody BaseEventDto event) {\n    eventProcessor.process(event);\n    return ResponseEntity.accepted().build();\n}"
                    ]
                }
            ]
        },
        {
            "id": "7-4-responsebody",
            "name": "7.4 @ResponseBody",
            "beginner": [
                {
                    "content": "\n<h2>7.4 @ResponseBody</h2>\n<p>• <strong>@ResponseBody</strong> tells Spring MVC that the method's return value should be written directly to the HTTP response body (instead of being treated as a view name).</p>\n<p>• When using <code>@RestController</code>, <code>@ResponseBody</code> is automatically applied to all handler methods.</p>\n",
                    "codeExamples": [
                        "@Controller\npublic class LegacyResponseBodyController {\n\n    @GetMapping(\"/api/raw-text\")\n    @ResponseBody\n    public String getRawText() {\n        return \"Direct HTTP Response Content\";\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Content Negotiation with @ResponseBody</h2>\n<p>• Spring MVC inspects the HTTP request <code>Accept</code> header and converts the returned Java object into the matching format (JSON, XML, Plain Text).</p>\n",
                    "codeExamples": [
                        "@GetMapping(value = \"/api/data\", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})\n@ResponseBody\npublic CustomerData getCustomerData() {\n    return new CustomerData(\"CUST-99\", \"Premium\");\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Async Response Processing with @ResponseBody</h2>\n<p>• Return <code>CompletableFuture&lt;T&gt;</code> or <code>DeferredResult&lt;T&gt;</code> with <code>@ResponseBody</code> for non-blocking asynchronous response rendering.</p>\n",
                    "codeExamples": [
                        "@GetMapping(\"/api/async-data\")\n@ResponseBody\npublic CompletableFuture<String> fetchAsyncData() {\n    return CompletableFuture.supplyAsync(() -> {\n        // Slow operation execution\n        return \"Asynchronous Data Result\";\n    });\n}"
                    ]
                }
            ]
        },
        {
            "id": "7-5-modelattribute",
            "name": "7.5 @ModelAttribute",
            "beginner": [
                {
                    "content": "\n<h2>7.5 @ModelAttribute</h2>\n<p>• <strong>@ModelAttribute</strong> binds HTTP form request parameters to a Command Object / Form Backing Bean.</p>\n<p>• Can also be used at method level to add reference attributes to the <code>Model</code> before any controller request handler runs.</p>\n",
                    "codeExamples": [
                        "@Controller\npublic class UserFormController {\n\n    @PostMapping(\"/submit-form\")\n    public String handleFormSubmission(@ModelAttribute(\"userForm\") UserForm form, Model model) {\n        model.addAttribute(\"msg\", \"Form received for: \" + form.getFilename());\n        return \"form-result\";\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Method-Level @ModelAttribute</h2>\n<p>• Methods annotated with <code>@ModelAttribute</code> run prior to <code>@RequestMapping</code> methods in the same controller and populate shared model attributes.</p>\n",
                    "codeExamples": [
                        "@Controller\n@RequestMapping(\"/portal\")\npublic class PortalController {\n\n    @ModelAttribute(\"categories\")\n    public List<String> populateCategories() {\n        return List.of(\"Electronics\", \"Books\", \"Clothing\");\n    }\n\n    @GetMapping(\"/dashboard\")\n    public String showDashboard() {\n        // \"categories\" attribute is automatically available in dashboard view!\n        return \"portal-dashboard\";\n    }\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Data Binding Customization & @InitBinder</h2>\n<p>• Use <code>@InitBinder</code> with <code>WebDataBinder</code> to customize parameter binding or disallow specific field mutations (preventing Mass Assignment vulnerability).</p>\n",
                    "codeExamples": [
                        "@InitBinder\npublic void initBinder(WebDataBinder binder) {\n    // Disallow security-sensitive fields from form binding\n    binder.setDisallowedFields(\"isAdmin\", \"role\");\n    binder.registerCustomEditor(String.class, new StringTrimmerEditor(true));\n}"
                    ]
                }
            ]
        },
        {
            "id": "7-6-form-data-handling",
            "name": "7.6 Form Data Handling",
            "beginner": [
                {
                    "content": "\n<h2>7.6 Form Data Handling</h2>\n<p>• Web applications frequently collect user input via HTML forms submitted as <code>application/x-www-form-urlencoded</code> content.</p>\n<p>• Spring MVC maps input field names matching object property names directly onto target Command DTOs.</p>\n",
                    "codeExamples": [
                        "@Controller\npublic class RegistrationFormController {\n\n    @GetMapping(\"/register\")\n    public String showRegistrationForm(Model model) {\n        model.addAttribute(\"registrationDto\", new RegistrationDto());\n        return \"register-page\";\n    }\n\n    @PostMapping(\"/register\")\n    public String processRegistration(@ModelAttribute RegistrationDto dto) {\n        // Save user registration\n        return \"registration-success\";\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Handling Form Errors with BindingResult</h2>\n<p>• The <code>BindingResult</code> parameter must be placed immediately following the validated <code>@ModelAttribute</code> target object in the method signature.</p>\n",
                    "codeExamples": [
                        "@PostMapping(\"/submit-profile\")\npublic String saveProfile(@Valid @ModelAttribute(\"profile\") ProfileDto profile, \n                          BindingResult bindingResult, \n                          Model model) {\n    if (bindingResult.hasErrors()) {\n        return \"profile-edit-form\"; // Return back to form page to show errors\n    }\n    profileService.save(profile);\n    return \"redirect:/profile/view\";\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Multipart File Upload Form Handling</h2>\n<p>• HTML forms submitting files require <code>enctype=\"multipart/form-data\"</code> and handle file parameters using <code>MultipartFile</code>.</p>\n",
                    "codeExamples": [
                        "@PostMapping(\"/upload-avatar\")\npublic String uploadAvatar(@RequestParam(\"userId\") Long userId, \n                           @RequestParam(\"file\") MultipartFile file, \n                           RedirectAttributes redirectAttributes) {\n    if (!file.isEmpty()) {\n        storageService.storeFile(userId, file);\n        redirectAttributes.addFlashAttribute(\"message\", \"File uploaded successfully!\");\n    }\n    return \"redirect:/user/profile\";\n}"
                    ]
                }
            ]
        }
    ]
},

{
    "id": "model-and-view-section",
    "name": "8. Model and View",
    "topics": [
        {
            "id": "8-1-model",
            "name": "8.1 Model",
            "beginner": [
                {
                    "content": "\n<h2>8.1 Model</h2>\n<p>• The <strong>Model</strong> interface in Spring MVC defines a holder for model attributes.</p>\n<p>• It acts as a data bridge between the Controller and the rendering View (e.g., JSP or Thymeleaf).</p>\n",
                    "codeExamples": [
                        "@Controller\npublic class CourseViewController {\n\n    @GetMapping(\"/course-info\")\n    public String getCourseInfo(Model model) {\n        model.addAttribute(\"title\", \"Spring MVC Masterclass\");\n        model.addAttribute(\"duration\", \"4 Weeks\");\n        return \"course-details\";\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Model vs ModelMap</h2>\n<table border=\"1\" cellpadding=\"8\" style=\"border-collapse: collapse; width: 100%;\">\n  <thead>\n    <tr style=\"background-color: #f2f2f2;\">\n      <th>Feature</th>\n      <th>Model (Interface)</th>\n      <th>ModelMap (Class)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td><strong>Type</strong></td><td>Interface</td><td>Implementation class extending <code>LinkedHashMap</code></td></tr>\n    <tr><td><strong>Fluent Chaining</strong></td><td>Returns Model instance for method chaining</td><td>Inherits Map features and chaining methods</td></tr>\n  </tbody>\n</table>\n",
                    "codeExamples": [
                        "@GetMapping(\"/student-map\")\npublic String getStudentMap(ModelMap modelMap) {\n    modelMap.addAttribute(\"name\", \"Ankit\")\n            .addAttribute(\"score\", 95);\n    return \"student-view\";\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>BindingResult & Model Lifecycle</h2>\n<p>• When validation occurs, Spring automatically inserts the <code>BindingResult</code> instance into the <code>Model</code> under the key <code>BindingResult.MODEL_KEY_PREFIX + objectName</code>.</p>\n",
                    "codeExamples": [
                        "@PostMapping(\"/save-student\")\npublic String saveStudent(@Valid @ModelAttribute(\"student\") Student student, BindingResult result, Model model) {\n    if (result.hasErrors()) {\n        // model automatically contains errors bound under \"org.springframework.validation.BindingResult.student\"\n        return \"student-form\";\n    }\n    return \"redirect:/students\";\n}"
                    ]
                }
            ]
        },
        {
            "id": "8-2-modelandview",
            "name": "8.2 ModelAndView",
            "beginner": [
                {
                    "content": "\n<h2>8.2 ModelAndView</h2>\n<p>• <strong>ModelAndView</strong> is a holder class that encapsulates both model data attributes and the logical view name into a single return object.</p>\n",
                    "codeExamples": [
                        "@Controller\npublic class MavDemoController {\n\n    @GetMapping(\"/mav-example\")\n    public ModelAndView mavExample() {\n        ModelAndView mav = new ModelAndView(\"welcome-page\");\n        mav.addObject(\"serverTime\", new Date());\n        return mav;\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>ModelAndView Constructors & View Selection</h2>\n<p>• Supports multiple overloaded constructors allowing view name initialization, model maps, or direct <code>View</code> object injection.</p>\n",
                    "codeExamples": [
                        "@GetMapping(\"/mav-advanced\")\npublic ModelAndView mavAdvanced() {\n    Map<String, Object> data = Map.of(\"user\", \"Pankaj\", \"role\", \"Instructor\");\n    return new ModelAndView(\"admin-panel\", data);\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Programmatic View Injection with RedirectView</h2>\n<p>• Instantiate a <code>RedirectView</code> directly inside <code>ModelAndView</code> for programmatic redirects.</p>\n",
                    "codeExamples": [
                        "@GetMapping(\"/redirect-mav\")\npublic ModelAndView redirectMav() {\n    RedirectView rv = new RedirectView(\"/login-page\");\n    rv.setExposeModelAttributes(false);\n    return new ModelAndView(rv);\n}"
                    ]
                }
            ]
        },
        {
            "id": "8-3-viewresolver",
            "name": "8.3 ViewResolver",
            "beginner": [
                {
                    "content": "\n<h2>8.3 ViewResolver</h2>\n<p>• <strong>ViewResolver</strong> is an essential Spring MVC interface that maps logical view names returned by controllers (e.g., <code>\"home\"</code>) to actual view rendering components (e.g., <code>\"/WEB-INF/views/home.jsp\"</code>).</p>\n",
                    "codeExamples": [
                        "// Logical View Name: \"index\"\n// Prefix: \"/WEB-INF/views/\"\n// Suffix: \".jsp\"\n// Resolved Physical File: /WEB-INF/views/index.jsp"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>InternalResourceViewResolver Configuration</h2>\n<p>• In traditional XML or Java Configuration, <code>InternalResourceViewResolver</code> is configured with prefix and suffix properties.</p>\n",
                    "codeExamples": [
                        "@Configuration\n@EnableWebMvc\npublic class WebConfig implements WebMvcConfigurer {\n\n    @Bean\n    public ViewResolver internalResourceViewResolver() {\n        InternalResourceViewResolver resolver = new InternalResourceViewResolver();\n        resolver.setPrefix(\"/WEB-INF/views/\");\n        resolver.setSuffix(\".jsp\");\n        return resolver;\n    }\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>ViewResolver Chaining & Priority Ordering</h2>\n<p>• You can register multiple <code>ViewResolver</code> beans (e.g., ThymeleafViewResolver, FreeMarkerViewResolver, InternalResourceViewResolver) and set their execution priority using <code>setOrder(int order)</code>.</p>\n",
                    "codeExamples": [
                        "@Bean\npublic ViewResolver thymeleafResolver(TemplateEngine templateEngine) {\n    ThymeleafViewResolver resolver = new ThymeleafViewResolver();\n    resolver.setTemplateEngine(templateEngine);\n    resolver.setOrder(1); // Try Thymeleaf templates first!\n    return resolver;\n}"
                    ]
                }
            ]
        },
        {
            "id": "8-4-passing-data-from-controller-to-view",
            "name": "8.4 Passing Data from Controller to View",
            "beginner": [
                {
                    "content": "\n<h2>8.4 Passing Data from Controller to View</h2>\n<p>• Controller passes data to the view by populating attributes in <code>Model</code>, <code>ModelMap</code>, or <code>ModelAndView</code>.</p>\n<p>• Views render the data dynamically using Expression Language (EL) syntax (e.g., <code>${attributeName}</code> in JSP or <code>th:text=\"${attributeName}\"</code> in Thymeleaf).</p>\n",
                    "codeExamples": [
                        "@Controller\npublic class DataPassingController {\n\n    @GetMapping(\"/show-data\")\n    public String showData(Model model) {\n        model.addAttribute(\"siteName\", \"JavaSchoolLab\");\n        model.addAttribute(\"topicsCount\", 15);\n        return \"data-display\";\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Passing Flash Attributes Across Redirects</h2>\n<p>• Use <code>RedirectAttributes.addFlashAttribute()</code> to pass data safely across a redirect without exposing parameters in the URL bar (Post-Redirect-Get pattern).</p>\n",
                    "codeExamples": [
                        "@PostMapping(\"/save-data\")\npublic String saveData(@RequestParam String item, RedirectAttributes redirectAttrs) {\n    // Save item logic...\n    redirectAttrs.addFlashAttribute(\"successMessage\", \"Item '\" + item + \"' saved successfully!\");\n    return \"redirect:/item-list\";\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Internal Mechanism of FlashAttributes</h2>\n<p>• Flash attributes are stored in the user's HTTP Session (or <code>FlashMapManager</code>) before redirect and automatically removed immediately after rendering the redirected target request.</p>\n"
                }
            ]
        },
        {
            "id": "8-5-jsp-html-views",
            "name": "8.5 JSP/HTML Views",
            "beginner": [
                {
                    "content": "\n<h2>8.5 JSP/HTML Views</h2>\n<p>• Spring MVC supports server-side rendering using view templates like <strong>JSP (JavaServer Pages)</strong> or <strong>HTML (Thymeleaf/FreeMarker)</strong>.</p>\n<p>• JSTL (JSP Standard Tag Library) provides core tags for loops and conditional rendering inside JSP files.</p>\n",
                    "codeExamples": [
                        "<!-- JSP Example (/WEB-INF/views/student-list.jsp) -->\n<%@ taglib prefix=\"c\" uri=\"http://java.sun.com/jsp/jstl/core\" %>\n<html>\n<body>\n    <h2>Student List</h2>\n    <ul>\n        <c:forEach var=\"student\" items=\"${students}\">\n            <li>${student.name} - ${student.course}</li>\n        </c:forEach>\n    </ul>\n</body>\n</html>"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Spring MVC Form Tag Library</h2>\n<p>• Spring MVC provides a specialized JSP form tag library (<code>&lt;form:form&gt;</code>) for automatic data binding and displaying validation errors.</p>\n",
                    "codeExamples": [
                        "<%@ taglib prefix=\"form\" uri=\"http://www.springframework.org/tags/form\" %>\n\n<form:form action=\"/save\" modelAttribute=\"user\">\n    <form:label path=\"username\">Username:</form:label>\n    <form:input path=\"username\"/>\n    <form:errors path=\"username\" cssClass=\"error\"/>\n    <input type=\"submit\" value=\"Save\"/>\n</form:form>"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Configuring Static Resource Handlers</h2>\n<p>• Configure <code>WebMvcConfigurer.addResourceHandlers()</code> to serve CSS, JavaScript, and image assets cleanly alongside HTML/JSP views.</p>\n",
                    "codeExamples": [
                        "@Override\npublic void addResourceHandlers(ResourceHandlerRegistry registry) {\n    registry.addResourceHandler(\"/static/**\")\n            .addResourceLocations(\"/static/\", \"classpath:/static/\")\n            .setCachePeriod(3600);\n}"
                    ]
                }
            ]
        }
    ]
},

{
    "id": "rest-api-with-spring-mvc",
    "name": "9. REST API with Spring MVC",
    "topics": [
        {
            "id": "9-1-what-is-rest-api",
            "name": "9.1 What is REST API?",
            "beginner": [
                {
                    "content": "\n<h2>9.1 What is REST API?</h2>\n<p>• <strong>REST (Representational State Transfer)</strong> is an architectural style for building scalable web services using HTTP protocol standards.</p>\n<p>• A REST API exposes web resources identified by unique URIs (e.g., <code>/api/v1/users</code>) and allows client-server interaction via standard HTTP verbs.</p><br>\n<h3>Key Architectural Constraints</h3>\n<ul>\n<li>• <strong>Stateless:</strong> Every request must contain all necessary authentication & contextual data.</li>\n<li>• <strong>Client-Server:</strong> Decoupled user interface (React/Angular) from backend logic (Spring MVC).</li>\n<li>• <strong>Cacheable:</strong> Responses must explicitly define cacheability rules.</li>\n<li>• <strong>Uniform Interface:</strong> Standardized resource URIs and HTTP operations.</li>\n</ul>\n"
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Richardson Maturity Model</h2>\n<table border=\"1\" cellpadding=\"8\" style=\"border-collapse: collapse; width: 100%;\">\n  <thead>\n    <tr style=\"background-color: #f2f2f2;\">\n      <th>Level</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td><strong>Level 0</strong></td><td>Single URI using XML/RPC over HTTP POST.</td></tr>\n    <tr><td><strong>Level 1</strong></td><td>Resource URIs introduced (e.g., <code>/users</code>, <code>/orders</code>).</td></tr>\n    <tr><td><strong>Level 2</strong></td><td>Proper usage of HTTP Verbs (GET, POST, PUT, DELETE) & Status Codes.</td></tr>\n    <tr><td><strong>Level 3</strong></td><td>HATEOAS (Hypermedia As The Engine Of Application State).</td></tr>\n  </tbody>\n</table>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>HATEOAS Implementation in Spring MVC</h2>\n<p>• Spring HATEOAS module enables adding hypermedia links to REST API responses allowing clients to dynamically discover available resource actions.</p>\n",
                    "codeExamples": [
                        "@GetMapping(\"/api/users/{id}\")\npublic EntityModel<User> getUser(@PathVariable Long id) {\n    User user = userService.findById(id);\n    return EntityModel.of(user,\n            linkTo(methodOn(UserController.class).getUser(id)).withSelfRel(),\n            linkTo(methodOn(UserController.class).getAllUsers()).withRel(\"all-users\"));\n}"
                    ]
                }
            ]
        },
        {
            "id": "9-2-http-methods",
            "name": "9.2 HTTP Methods",
            "beginner": [
                {
                    "content": "\n<h2>9.2 HTTP Methods</h2>\n<p>• RESTful APIs utilize standard HTTP verbs to perform CRUD (Create, Read, Update, Delete) operations on resources.</p><br>\n<table border=\"1\" cellpadding=\"8\" style=\"border-collapse: collapse; width: 100%;\">\n  <thead>\n    <tr style=\"background-color: #f2f2f2;\">\n      <th>HTTP Method</th>\n      <th>CRUD Action</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td><strong>GET</strong></td><td>Read</td><td>Retrieves resource representation.</td></tr>\n    <tr><td><strong>POST</strong></td><td>Create</td><td>Creates new resource on server.</td></tr>\n    <tr><td><strong>PUT</strong></td><td>Update (Replace)</td><td>Replaces resource entirely.</td></tr>\n    <tr><td><strong>PATCH</strong></td><td>Update (Partial)</td><td>Applies partial updates to resource.</td></tr>\n    <tr><td><strong>DELETE</strong></td><td>Delete</td><td>Removes resource from server.</td></tr>\n  </tbody>\n</table>\n"
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Safety & Idempotency Rules</h2>\n<ul>\n<li>• <strong>Safe Method:</strong> An HTTP method that does NOT modify server state (GET, HEAD, OPTIONS).</li>\n<li>• <strong>Idempotent Method:</strong> An HTTP method where multiple identical requests produce the exact same server state result (GET, PUT, DELETE).</li>\n</ul>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Handling Preflight OPTIONS Requests</h2>\n<p>• Browsers automatically issue HTTP <code>OPTIONS</code> preflight requests prior to cross-domain REST calls to check allowed CORS methods and headers.</p>\n"
                }
            ]
        },
        {
            "id": "9-3-json-request",
            "name": "9.3 JSON Request",
            "beginner": [
                {
                    "content": "\n<h2>9.3 JSON Request</h2>\n<p>• JSON (JavaScript Object Notation) is the standard lightweight data format for REST API communication.</p>\n<p>• Spring MVC automatically converts incoming JSON payloads into Java objects via <code>@RequestBody</code>.</p>\n",
                    "codeExamples": [
                        "// HTTP POST Request Body (application/json)\n{\n    \"name\": \"Pratiksha\",\n    \"email\": \"pratiksha@example.com\",\n    \"age\": 22\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Mapping Nested JSON & Dates with Jackson</h2>\n<p>• Use Jackson annotations like <code>@JsonProperty</code> and <code>@JsonFormat</code> to customize field names and date formatting during JSON deserialization.</p>\n",
                    "codeExamples": [
                        "public class UserRequestDto {\n\n    @JsonProperty(\"full_name\")\n    private String fullName;\n\n    @JsonFormat(pattern = \"yyyy-MM-dd\")\n    private LocalDate birthDate;\n\n    private AddressDto address; // Nested JSON object mapping\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Custom Jackson Deserializer</h2>\n<p>• Implement custom <code>JsonDeserializer&lt;T&gt;</code> to parse unconventional or legacy incoming JSON structures into clean Java objects.</p>\n"
                }
            ]
        },
        {
            "id": "9-4-json-response",
            "name": "9.4 JSON Response",
            "beginner": [
                {
                    "content": "\n<h2>9.4 JSON Response</h2>\n<p>• Handler methods in <code>@RestController</code> return Java objects or collections which Spring automatically serializes into JSON HTTP response payloads.</p>\n",
                    "codeExamples": [
                        "@GetMapping(\"/api/info\")\npublic Map<String, Object> getAppInfo() {\n    return Map.of(\"appName\", \"JavaSchoolLab API\", \"version\", \"1.0.0\", \"status\", \"UP\");\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Suppressing Null Values with @JsonInclude</h2>\n<p>• Annotate DTO classes with <code>@JsonInclude(Include.NON_NULL)</code> to prevent null fields from cluttering the resulting JSON output.</p>\n",
                    "codeExamples": [
                        "@JsonInclude(JsonInclude.Include.NON_NULL)\npublic class ApiResponseDto<T> {\n    private String status;\n    private T data;\n    private String errorMessage; // Omitted from JSON if null!\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Dynamic Filtering with @JsonFilter</h2>\n<p>• Use <code>@JsonFilter</code> with <code>FilterProvider</code> to dynamically include/exclude object fields during execution runtime based on client permission query scope.</p>\n"
                }
            ]
        },
        {
            "id": "9-5-crud-rest-api",
            "name": "9.5 CRUD REST API",
            "beginner": [
                {
                    "content": "\n<h2>9.5 CRUD REST API</h2>\n<p>• A complete REST API exposes endpoints for Create, Read, Update, and Delete operations on a domain entity.</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/v1/products\")\npublic class ProductRestController {\n\n    @GetMapping // READ ALL\n    public List<Product> getAll() { return productService.findAll(); }\n\n    @GetMapping(\"/{id}\") // READ ONE\n    public Product getOne(@PathVariable Long id) { return productService.findById(id); }\n\n    @PostMapping // CREATE\n    public ResponseEntity<Product> create(@RequestBody Product product) { \n        return ResponseEntity.status(HttpStatus.CREATED).body(productService.save(product)); \n    }\n\n    @PutMapping(\"/{id}\") // UPDATE\n    public Product update(@PathVariable Long id, @RequestBody Product product) { \n        return productService.update(id, product); \n    }\n\n    @DeleteMapping(\"/{id}\") // DELETE\n    public ResponseEntity<Void> delete(@PathVariable Long id) { \n        productService.delete(id); \n        return ResponseEntity.noContent().build(); \n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>REST API Path Naming Best Practices</h2>\n<ul>\n<li>• Use nouns instead of verbs in URI paths (e.g., <code>/api/v1/students</code> instead of <code>/api/v1/getStudents</code>).</li>\n<li>• Use plural nouns for resource collections (e.g., <code>/orders</code>).</li>\n<li>• Nest sub-resources logically (e.g., <code>/customers/101/orders</code>).</li>\n</ul>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>API Versioning Strategies</h2>\n<ul>\n<li>• <strong>URI Path Versioning:</strong> <code>/api/v1/users</code> (Most common).</li>\n<li>• <strong>Query Parameter Versioning:</strong> <code>/api/users?version=1</code>.</li>\n<li>• <strong>Header Versioning:</strong> <code>X-API-VERSION: 1</code>.</li>\n<li>• <strong>Media Type / Content Negotiation:</strong> <code>Accept: application/vnd.company.app-v1+json</code>.</li>\n</ul>\n"
                }
            ]
        },
        {
            "id": "9-6-http-status-codes",
            "name": "9.6 HTTP Status Codes",
            "beginner": [
                {
                    "content": "\n<h2>9.6 HTTP Status Codes</h2>\n<p>• HTTP status codes inform client applications about the execution outcome of an API request.</p><br>\n<h3>Common Status Codes in REST APIs</h3>\n<ul>\n<li>• <strong>200 OK:</strong> Request succeeded.</li>\n<li>• <strong>201 Created:</strong> Resource successfully created.</li>\n<li>• <strong>204 No Content:</strong> Request succeeded, no body returned.</li>\n<li>• <strong>400 Bad Request:</strong> Invalid request format or validation error.</li>\n<li>• <strong>401 Unauthorized:</strong> Authentication missing or invalid.</li>\n<li>• <strong>403 Forbidden:</strong> Authenticated user lacks permission.</li>\n<li>• <strong>404 Not Found:</strong> Target resource does not exist.</li>\n<li>• <strong>500 Internal Server Error:</strong> Unexpected backend exception.</li>\n</ul>\n",
                    "codeExamples": [
                        "@GetMapping(\"/check/{id}\")\npublic ResponseEntity<String> checkItem(@PathVariable Long id) {\n    if (id <= 0) {\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(\"Invalid ID\");\n    }\n    return ResponseEntity.ok(\"Item Valid\");\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Categorization of HTTP Status Codes</h2>\n<table border=\"1\" cellpadding=\"8\" style=\"border-collapse: collapse; width: 100%;\">\n  <thead>\n    <tr style=\"background-color: #f2f2f2;\">\n      <th>Category Range</th>\n      <th>Meaning</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td><strong>1xx</strong></td><td>Informational</td></tr>\n    <tr><td><strong>2xx</strong></td><td>Success (Request processed successfully)</td></tr>\n    <tr><td><strong>3xx</strong></td><td>Redirection (Further client action required)</td></tr>\n    <tr><td><strong>4xx</strong></td><td>Client Error (Invalid client input/request)</td></tr>\n    <tr><td><strong>5xx</strong></td><td>Server Error (Internal backend failure)</td></tr>\n  </tbody>\n</table>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>RFC 7807 Standardized Problem Details</h2>\n<p>• Modern REST APIs adopt RFC 7807 Problem Details standard JSON format for conveying client errors.</p>\n",
                    "codeExamples": [
                        "// Standard Problem Details JSON Response\n{\n    \"type\": \"https://api.javaschoollab.com/errors/not-found\",\n    \"title\": \"Resource Not Found\",\n    \"status\": 404,\n    \"detail\": \"Student with ID 505 was not found.\",\n    \"instance\": \"/api/v1/students/505\"\n}"
                    ]
                }
            ]
        }
    ]
},

{
    "id": "exception-handling",
    "name": "10. Exception Handling",
    "topics": [
        {
            "id": "10-1-exception-handling-in-spring-mvc",
            "name": "10.1 Exception Handling in Spring MVC",
            "beginner": [
                {
                    "content": "\n<h2>10.1 Exception Handling in Spring MVC</h2>\n<p>• Robust exception handling ensures that unexpected application errors do not crash the application or expose sensitive server stack traces to clients.</p>\n<p>• Spring MVC provides centralized mechanisms to intercept exceptions thrown by controllers and format clean, user-friendly error responses.</p>\n"
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Exception Handling Approaches</h2>\n<ol>\n<li>1. <strong>Controller Level (@ExceptionHandler):</strong> Handles exceptions specific to one controller.</li>\n<li>2. <strong>Global Level (@ControllerAdvice / @RestControllerAdvice):</strong> Handles exceptions globally across all controllers.</li>\n<li>3. <strong>HandlerExceptionResolver:</strong> Custom Spring bean for low-level exception resolution.</li>\n</ol>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>ResponseStatusExceptionResolver</h2>\n<p>• Spring automatically checks thrown exceptions for <code>@ResponseStatus</code> annotations to configure HTTP status codes automatically.</p>\n"
                }
            ]
        },
        {
            "id": "10-2-exceptionhandler",
            "name": "10.2 @ExceptionHandler",
            "beginner": [
                {
                    "content": "\n<h2>10.2 @ExceptionHandler</h2>\n<p>• <strong>@ExceptionHandler</strong> is an annotation used to define a custom error handler method inside a controller class.</p>\n<p>• Whenever that controller throws a matching exception, Spring automatically redirects execution to the annotated method.</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/calc\")\npublic class CalculatorController {\n\n    @GetMapping(\"/divide\")\n    public int divide(@RequestParam int a, @RequestParam int b) {\n        return a / b;\n    }\n\n    @ExceptionHandler(ArithmeticException.class)\n    public ResponseEntity<String> handleArithmeticError(ArithmeticException ex) {\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(\"Error: Division by zero is not allowed!\");\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Handling Multiple Exception Types</h2>\n<p>• You can specify multiple exception classes inside a single <code>@ExceptionHandler</code> annotation array.</p>\n",
                    "codeExamples": [
                        "@ExceptionHandler({NullPointerException.class, IllegalArgumentException.class})\npublic ResponseEntity<String> handleCommonExceptions(Exception ex) {\n    return ResponseEntity.badRequest().body(\"Input Error: \" + ex.getMessage());\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Accessing Web Request Context in Handlers</h2>\n<p>• Handler methods can accept parameter types like <code>WebRequest</code>, <code>HttpServletRequest</code>, and the original <code>Exception</code> instance for diagnostic logging.</p>\n"
                }
            ]
        },
        {
            "id": "10-3-controlleradvice",
            "name": "10.3 @ControllerAdvice",
            "beginner": [
                {
                    "content": "\n<h2>10.3 @ControllerAdvice</h2>\n<p>• <strong>@ControllerAdvice</strong> provides a global interceptor mechanism for exception handling across all controller classes in a Spring MVC application.</p>\n<p>• Helps eliminate repetitive <code>@ExceptionHandler</code> code inside individual controllers.</p>\n",
                    "codeExamples": [
                        "@ControllerAdvice\npublic class GlobalWebExceptionHandler {\n\n    @ExceptionHandler(Exception.class)\n    public String handleGlobalError(Exception ex, Model model) {\n        model.addAttribute(\"errorMessage\", ex.getMessage());\n        return \"global-error-page\"; // Returns HTML error view\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Targeting & Scoping @ControllerAdvice</h2>\n<p>• You can scope a <code>@ControllerAdvice</code> bean to apply only to specific packages, annotations, or controller types.</p>\n",
                    "codeExamples": [
                        "@ControllerAdvice(basePackages = \"com.javaschoollab.controllers.admin\")\npublic class AdminExceptionHandler {\n    // Intercepts exceptions originating only from admin package\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Order Execution & Precedence</h2>\n<p>• When multiple <code>@ControllerAdvice</code> beans exist, order their execution explicitly using <code>@Order(Ordered.HIGHEST_PRECEDENCE)</code>.</p>\n"
                }
            ]
        },
        {
            "id": "10-4-restcontrolleradvice",
            "name": "10.4 @RestControllerAdvice",
            "beginner": [
                {
                    "content": "\n<h2>10.4 @RestControllerAdvice</h2>\n<p>• <strong>@RestControllerAdvice</strong> is a specialized annotation combining <code>@ControllerAdvice</code> and <code>@ResponseBody</code>.</p>\n<p>• Designed specifically for REST APIs to return structured JSON error payloads globally when exceptions occur.</p>\n",
                    "codeExamples": [
                        "@RestControllerAdvice\npublic class GlobalRestExceptionHandler {\n\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<ErrorDetails> handleNotFound(ResourceNotFoundException ex) {\n        ErrorDetails error = new ErrorDetails(LocalDateTime.now(), 404, ex.getMessage());\n        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Designing a Standard JSON Error Response Schema</h2>\n<p>• Enterprise APIs define a consistent error schema containing timestamp, status code, error type, message, and path.</p>\n",
                    "codeExamples": [
                        "public class ErrorResponse {\n    private LocalDateTime timestamp;\n    private int status;\n    private String error;\n    private String message;\n    private String path;\n    // Getters and Setters...\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Handling MethodArgumentNotValidException Globally</h2>\n<p>• Intercept validation exceptions globally to collect and format all bean validation errors into a clean JSON map.</p>\n",
                    "codeExamples": [
                        "@ExceptionHandler(MethodArgumentNotValidException.class)\npublic ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {\n    Map<String, String> errors = new HashMap<>();\n    ex.getBindingResult().getFieldErrors().forEach(error -> \n        errors.put(error.getField(), error.getDefaultMessage())\n    );\n    return ResponseEntity.badRequest().body(errors);\n}"
                    ]
                }
            ]
        },
        {
            "id": "10-5-custom-exceptions",
            "name": "10.5 Custom Exceptions",
            "beginner": [
                {
                    "content": "\n<h2>10.5 Custom Exceptions</h2>\n<p>• Creating custom business exception classes improves code readability and allows precise exception handling for domain-specific failures.</p>\n",
                    "codeExamples": [
                        "public class ResourceNotFoundException extends RuntimeException {\n    public ResourceNotFoundException(String message) {\n        super(message);\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Using @ResponseStatus on Custom Exceptions</h2>\n<p>• Annotating custom exception classes with <code>@ResponseStatus</code> automatically configures the HTTP response status code when thrown.</p>\n",
                    "codeExamples": [
                        "@ResponseStatus(HttpStatus.NOT_FOUND)\npublic class StudentNotFoundException extends RuntimeException {\n    public StudentNotFoundException(Long id) {\n        super(\"Student with ID \" + id + \" was not found.\");\n    }\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Enterprise Exception Hierarchies</h2>\n<p>• Create an abstract root <code>BaseBusinessException</code> class extended by specific exceptions (e.g., <code>InsufficientFundsException</code>, <code>AccountLockedException</code>) to pass error code metadata.</p>\n"
                }
            ]
        }
    ]
},

{
    "id": "validation",
    "name": "11. Validation",
    "topics": [
        {
            "id": "11-1-bean-validation",
            "name": "11.1 Bean Validation",
            "beginner": [
                {
                    "content": "\n<h2>11.1 Bean Validation</h2>\n<p>• <strong>Bean Validation (Jakarta Validation / JSR 380)</strong> is the standard specification for validating Java object properties using annotations.</p>\n<p>• Spring MVC seamlessly integrates with Bean Validation providers like <strong>Hibernate Validator</strong> to validate incoming request data automatically.</p>\n"
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Common Bean Validation Annotations</h2>\n<table border=\"1\" cellpadding=\"8\" style=\"border-collapse: collapse; width: 100%;\">\n  <thead>\n    <tr style=\"background-color: #f2f2f2;\">\n      <th>Annotation</th>\n      <th>Applies To</th>\n      <th>Constraint Rule</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td><code>@NotNull</code></td><td>Any type</td><td>Value cannot be <code>null</code>.</td></tr>\n    <tr><td><code>@NotEmpty</code></td><td>String, Collection, Array</td><td>Cannot be null and size must be &gt; 0.</td></tr>\n    <tr><td><code>@NotBlank</code></td><td>String</td><td>Cannot be null and trimmed length must be &gt; 0.</td></tr>\n    <tr><td><code>@Size</code></td><td>String, Collection, Array</td><td>Length/Size must be between min and max bounds.</td></tr>\n    <tr><td><code>@Email</code></td><td>String</td><td>Must match valid email address format.</td></tr>\n    <tr><td><code>@Min / @Max</code></td><td>Number</td><td>Numeric value must meet minimum/maximum bounds.</td></tr>\n  </tbody>\n</table>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Creating Custom Constraint Annotations</h2>\n<p>• Build custom validation annotations by defining a custom annotation and implementing <code>ConstraintValidator&lt;A, T&gt;</code> interface.</p>\n",
                    "codeExamples": [
                        "@Target({ElementType.FIELD})\n@Retention(RetentionPolicy.RUNTIME)\n@Constraint(validatedBy = CourseCodeValidator.class)\npublic @interface ValidCourseCode {\n    String message() default \"Course code must start with 'JAVA-'\";\n    Class<?>[] groups() default {};\n    Class<? extends Payload>[] payload() default {};\n}"
                    ]
                }
            ]
        },
        {
            "id": "11-2-valid",
            "name": "11.2 @Valid",
            "beginner": [
                {
                    "content": "\n<h2>11.2 @Valid</h2>\n<p>• Annotating a controller parameter with <strong>@Valid</strong> triggers standard Bean Validation on the incoming payload before executing the controller method body.</p>\n",
                    "codeExamples": [
                        "@PostMapping(\"/students\")\npublic ResponseEntity<String> createStudent(@Valid @RequestBody StudentDto dto) {\n    studentService.save(dto);\n    return ResponseEntity.ok(\"Student valid and created!\");\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>@Valid vs @Validated (Spring Validation Groups)</h2>\n<p>• <strong>@Valid:</strong> Standard Jakarta annotation for cascading validation and object payload checks.</p>\n<p>• <strong>@Validated:</strong> Spring variant supporting <strong>Validation Groups</strong> (applying different rules for Create vs Update ops).</p>\n",
                    "codeExamples": [
                        "@PostMapping\npublic ResponseEntity<String> create(@Validated(OnCreate.class) @RequestBody UserDto dto) {\n    return ResponseEntity.ok(\"Validated for creation!\");\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Nested Property Cascading Validation</h2>\n<p>• Add <code>@Valid</code> on child object properties inside a parent DTO to trigger recursive cascading validation of child elements.</p>\n",
                    "codeExamples": [
                        "public class OrderDto {\n    @NotNull\n    private Long customerId;\n\n    @Valid // Cascades validation to inside each OrderItemDto!\n    @NotEmpty\n    private List<OrderItemDto> items;\n}"
                    ]
                }
            ]
        },
        {
            "id": "11-3-notnull",
            "name": "11.3 @NotNull",
            "beginner": [
                {
                    "content": "\n<h2>11.3 @NotNull</h2>\n<p>• <strong>@NotNull</strong> ensures that the annotated property value is not <code>null</code>.</p>\n",
                    "codeExamples": [
                        "public class ProductDto {\n    @NotNull(message = \"Product ID cannot be null\")\n    private Long id;\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>@NotNull vs @NotEmpty vs @NotBlank</h2>\n<p>• <strong>@NotNull:</strong> Checks <code>val != null</code> (Empty string \"\" passes!).</p>\n<p>• <strong>@NotEmpty:</strong> Checks <code>val != null && val.length() > 0</code> (Whitespace \" \" passes!).</p>\n<p>• <strong>@NotBlank:</strong> Checks <code>val != null && val.trim().length() > 0</code> (Strict string check!).</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Database Column Alignment</h2>\n<p>• Ensure DTO <code>@NotNull</code> annotations align with underlying JPA Entity <code>@Column(nullable = false)</code> annotations to prevent database exceptions.</p>\n"
                }
            ]
        },
        {
            "id": "11-4-notblank",
            "name": "11.4 @NotBlank",
            "beginner": [
                {
                    "content": "\n<h2>11.4 @NotBlank</h2>\n<p>• <strong>@NotBlank</strong> enforces that a String property is not null and contains at least one non-whitespace character.</p>\n",
                    "codeExamples": [
                        "public class UserRegistrationDto {\n    @NotBlank(message = \"Username is required and cannot be blank\")\n    private String username;\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>String Field Validation Best Practices</h2>\n<p>• Always use <code>@NotBlank</code> instead of <code>@NotNull</code> for text input fields such as names, titles, and addresses.</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>String Trimmer Editor Integration</h2>\n<p>• Register a <code>StringTrimmerEditor</code> in <code>@InitBinder</code> to automatically convert empty whitespace strings to null prior to <code>@NotBlank</code> validation.</p>\n"
                }
            ]
        },
        {
            "id": "11-5-size",
            "name": "11.5 @Size",
            "beginner": [
                {
                    "content": "\n<h2>11.5 @Size</h2>\n<p>• <strong>@Size(min = x, max = y)</strong> restricts the length of a String, or the element count of a Collection/Array/Map.</p>\n",
                    "codeExamples": [
                        "public class AccountDto {\n    @Size(min = 3, max = 20, message = \"Username must be between 3 and 20 characters\")\n    private String username;\n\n    @Size(min = 8, max = 64, message = \"Password must be at least 8 characters long\")\n    private String password;\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Validating Collection Capacities with @Size</h2>\n<p>• Enforce minimum and maximum item limits on submitted lists or arrays.</p>\n",
                    "codeExamples": [
                        "public class BatchRequest {\n    @Size(min = 1, max = 50, message = \"Batch must contain between 1 and 50 items\")\n    private List<String> itemIds;\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Message Interpolation from ValidationMessages.properties</h2>\n<p>• Externalize validation error messages into <code>src/main/resources/ValidationMessages.properties</code> for internationalization (i18n).</p>\n",
                    "codeExamples": [
                        "user.name.size=Username must be between {min} and {max} characters long."
                    ]
                }
            ]
        },
        {
            "id": "11-6-email",
            "name": "11.6 @Email",
            "beginner": [
                {
                    "content": "\n<h2>11.6 @Email</h2>\n<p>• <strong>@Email</strong> validates that a string field conforms to valid email syntax.</p>\n",
                    "codeExamples": [
                        "public class ContactDto {\n    @NotBlank(message = \"Email is required\")\n    @Email(message = \"Please provide a valid email address\")\n    private String email;\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Combining @Email with Regex Patterns</h2>\n<p>• Standard <code>@Email</code> annotation allows empty strings if not combined with <code>@NotBlank</code>. Use <code>@Pattern</code> for strict corporate email domain matching.</p>\n",
                    "codeExamples": [
                        "@NotBlank\n@Email\n@Pattern(regexp = \".*@javaschoollab\\.com$\", message = \"Must be a @javaschoollab.com corporate email\")\nprivate String companyEmail;"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Custom Email Syntax Verification</h2>\n<p>• Implement domain MX lookup validation logic inside custom validators for production email verification.</p>\n"
                }
            ]
        },
        {
            "id": "11-7-handling-validation-errors",
            "name": "11.7 Handling Validation Errors",
            "beginner": [
                {
                    "content": "\n<h2>11.7 Handling Validation Errors</h2>\n<p>• In traditional HTML controllers, validation results are captured in <code>BindingResult</code> and checked via <code>bindingResult.hasErrors()</code>.</p>\n",
                    "codeExamples": [
                        "@PostMapping(\"/save\")\npublic String save(@Valid @ModelAttribute(\"user\") User user, BindingResult result) {\n    if (result.hasErrors()) {\n        return \"user-form\";\n    }\n    return \"redirect:/success\";\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Extracting Field Errors in REST APIs</h2>\n<p>• Extract individual <code>FieldError</code> instances from <code>BindingResult</code> to build structured error maps in REST API controllers.</p>\n",
                    "codeExamples": [
                        "if (result.hasErrors()) {\n    Map<String, String> errors = new HashMap<>();\n    for (FieldError error : result.getFieldErrors()) {\n        errors.put(error.getField(), error.getDefaultMessage());\n    }\n    return ResponseEntity.badRequest().body(errors);\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Global MethodArgumentNotValidException Handler</h2>\n<p>• Centralize validation failure handling in a <code>@RestControllerAdvice</code> class to keep all controllers clean.</p>\n"
                }
            ]
        }
    ]
},

{
    "id": "spring-mvc-with-database",
    "name": "12. Spring MVC with Database",
    "topics": [
        {
            "id": "12-1-controller-layer",
            "name": "12.1 Controller Layer",
            "beginner": [
                {
                    "content": "\n<h2>12.1 Controller Layer</h2>\n<p>• In layered enterprise architecture, the <strong>Controller Layer</strong> acts as the web entry point.</p>\n<p>• It accepts HTTP requests, validates input DTOs, delegates business operations to the Service layer, and returns formatted responses.</p>\n"
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Thin Controllers Principle</h2>\n<p>• Controllers should contain zero business logic or SQL queries. Keep them thin and delegate domain operations entirely to services.</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>DTO-to-Entity Mapping Boundaries</h2>\n<p>• Convert request DTOs into JPA entities before passing them to the Service layer to decouple API contracts from database schema definitions.</p>\n"
                }
            ]
        },
        {
            "id": "12-2-service-layer",
            "name": "12.2 Service Layer",
            "beginner": [
                {
                    "content": "\n<h2>12.2 Service Layer</h2>\n<p>• The <strong>Service Layer</strong> (annotated with <code>@Service</code>) encapsulates core application business logic and transaction boundaries.</p>\n",
                    "codeExamples": [
                        "@Service\npublic class StudentServiceImpl implements StudentService {\n\n    private final StudentRepository studentRepository;\n\n    public StudentServiceImpl(StudentRepository studentRepository) {\n        this.studentRepository = studentRepository;\n    }\n\n    @Override\n    @Transactional\n    public Student createStudent(Student student) {\n        // Business logic validation\n        return studentRepository.save(student);\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Transaction Management with @Transactional</h2>\n<p>• Annotating service methods with <code>@Transactional</code> ensures atomic database transactions (auto-commit on success, auto-rollback on runtime exceptions).</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Transaction Propagation & Isolation Levels</h2>\n<p>• Configure transaction propagation behavior (e.g., <code>Propagation.REQUIRED</code>, <code>Propagation.REQUIRES_NEW</code>) and read-only flags for performance tuning.</p>\n",
                    "codeExamples": [
                        "@Transactional(readOnly = true)\npublic List<Student> getActiveStudents() {\n    return studentRepository.findAllByActiveTrue();\n}"
                    ]
                }
            ]
        },
        {
            "id": "12-3-repository-layer",
            "name": "12.3 Repository Layer",
            "beginner": [
                {
                    "content": "\n<h2>12.3 Repository Layer</h2>\n<p>• The <strong>Repository Layer</strong> (annotated with <code>@Repository</code>) abstracts database persistence operations.</p>\n<p>• Using <strong>Spring Data JPA</strong> interfaces eliminates manual JDBC SQL boilerplate code.</p>\n",
                    "codeExamples": [
                        "@Repository\npublic interface StudentRepository extends JpaRepository<Student, Long> {\n    Optional<Student> findByEmail(String email);\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Derived Query Methods</h2>\n<p>• Spring Data JPA automatically generates SQL queries from method name conventions (e.g., <code>findByCourseAndAgeGreaterThan</code>).</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Custom JPQL & Native SQL Queries</h2>\n<p>• Use <code>@Query</code> to write custom JPQL or native SQL queries for complex join operations.</p>\n",
                    "codeExamples": [
                        "@Query(\"SELECT s FROM Student s WHERE s.gpa >= :minGpa\")\nList<Student> findTopStudents(@Param(\"minGpa\") double minGpa);"
                    ]
                }
            ]
        },
        {
            "id": "12-4-spring-data-jpa",
            "name": "12.4 Spring Data JPA",
            "beginner": [
                {
                    "content": "\n<h2>12.4 Spring Data JPA</h2>\n<p>• <strong>Spring Data JPA</strong> simplifies Object-Relational Mapping (ORM) by providing generic repository abstractions on top of JPA / Hibernate.</p>\n"
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Entity Mapping Annotations</h2>\n<ul>\n<li>• <code>@Entity</code> & <code>@Table</code>: Maps Java class to database table.</li>\n<li>• <code>@Id</code> & <code>@GeneratedValue</code>: Maps primary key generation strategy.</li>\n<li>• <code>@Column</code>: Configures column attributes (name, nullable, length).</li>\n</ul>\n",
                    "codeExamples": [
                        "@Entity\n@Table(name = \"students\")\npublic class Student {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(name = \"full_name\", nullable = false)\n    private String name;\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Solving N+1 Select Problem</h2>\n<p>• Use <code>JOIN FETCH</code> or <code>@EntityGraph</code> to resolve performance bottlenecks caused by lazy-loaded entity associations.</p>\n"
                }
            ]
        },
        {
            "id": "12-5-mysql-integration",
            "name": "12.5 MySQL Integration",
            "beginner": [
                {
                    "content": "\n<h2>12.5 MySQL Integration</h2>\n<p>• Configure MySQL database credentials in <code>src/main/resources/application.properties</code>.</p>\n",
                    "codeExamples": [
                        "spring.datasource.url=jdbc:mysql://localhost:3306/javaschoollab_db?useSSL=false&serverTimezone=UTC\nspring.datasource.username=root\nspring.datasource.password=secret\nspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\n\nspring.jpa.hibernate.ddl-auto=update\nspring.jpa.show-sql=true\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>HikariCP Connection Pool Tuning</h2>\n<p>• Spring Boot automatically configures <strong>HikariCP</strong> as the default high-performance JDBC connection pool.</p>\n",
                    "codeExamples": [
                        "spring.datasource.hikari.maximum-pool-size=20\nspring.datasource.hikari.minimum-idle=5\nspring.datasource.hikari.idle-timeout=300000"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Schema Migrations with Flyway</h2>\n<p>• Integrate Flyway or Liquibase for version-controlled database schema migrations in production environments.</p>\n"
                }
            ]
        },
        {
            "id": "12-6-crud-operations",
            "name": "12.6 CRUD Operations",
            "beginner": [
                {
                    "content": "\n<h2>12.6 End-to-End CRUD Operations</h2>\n<p>• Complete workflow demonstrating seamless integration across Controller, Service, Repository, and MySQL Database layers.</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/v1/students\")\npublic class StudentFullCrudController {\n\n    private final StudentService studentService;\n\n    public StudentFullCrudController(StudentService studentService) {\n        this.studentService = studentService;\n    }\n\n    @PostMapping\n    public ResponseEntity<Student> create(@Valid @RequestBody Student student) {\n        return ResponseEntity.status(HttpStatus.CREATED).body(studentService.createStudent(student));\n    }\n\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<Student> getById(@PathVariable Long id) {\n        return ResponseEntity.ok(studentService.getStudentById(id));\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Handling Database Exceptions Cleanly</h2>\n<p>• Translate database-level exceptions (e.g., <code>DataIntegrityViolationException</code>) into meaningful HTTP 409 Conflict responses.</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Optimistic Locking with @Version</h2>\n<p>• Add a <code>@Version</code> column on entities to enforce optimistic locking and prevent lost updates during concurrent database writes.</p>\n"
                }
            ]
        }
    ]
},

{
    "id": "advanced-spring-mvc",
    "name": "13. Advanced Spring MVC",
    "topics": [
        {
            "id": "13-1-interceptors",
            "name": "13.1 Interceptors",
            "beginner": [
                {
                    "content": "\n<h2>13.1 Interceptors</h2>\n<p>• <strong>HandlerInterceptor</strong> intercepts HTTP requests before and after they reach controller handler methods.</p>\n<p>• Useful for cross-cutting web concerns like logging, authentication checks, and request execution timing.</p><br>\n<h3>Key Lifecycle Methods</h3>\n<ul>\n<li>• <code>preHandle()</code>: Runs BEFORE controller method execution.</li>\n<li>• <code>postHandle()</code>: Runs AFTER controller execution, before view rendering.</li>\n<li>• <code>afterCompletion()</code>: Runs AFTER complete request rendering is finished.</li>\n</ul>\n",
                    "codeExamples": [
                        "@Component\npublic class RequestLoggingInterceptor implements HandlerInterceptor {\n\n    @Override\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {\n        System.out.println(\"Incoming Request URL: \" + request.getRequestURI());\n        return true; // Continue execution chain\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Registering Interceptors via WebMvcConfigurer</h2>\n<p>• Interceptors must be registered in the Spring MVC context using <code>WebMvcConfigurer.addInterceptors()</code>.</p>\n",
                    "codeExamples": [
                        "@Configuration\npublic class WebMvcConfig implements WebMvcConfigurer {\n\n    @Autowired\n    private RequestLoggingInterceptor loggingInterceptor;\n\n    @Override\n    public void addInterceptors(InterceptorRegistry registry) {\n        registry.addInterceptor(loggingInterceptor)\n                .addPathPatterns(\"/api/**\")\n                .excludePathPatterns(\"/api/public/**\");\n    }\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Interceptors vs Servlet Filters</h2>\n<table border=\"1\" cellpadding=\"8\" style=\"border-collapse: collapse; width: 100%;\">\n  <thead>\n    <tr style=\"background-color: #f2f2f2;\">\n      <th>Feature</th>\n      <th>Servlet Filter</th>\n      <th>HandlerInterceptor</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td><strong>Container</strong></td><td>Servlet Container Level (Tomcat)</td><td>Spring MVC Framework Level</td></tr>\n    <tr><td><strong>Access to Spring Beans</strong></td><td>Limited (Requires DelegatingFilterProxy)</td><td>Full Spring Context Access</td></tr>\n    <tr><td><strong>Execution Scope</strong></td><td>Filters all incoming HTTP requests</td><td>Executes only for mapped Spring Controllers</td></tr>\n  </tbody>\n</table>\n"
                }
            ]
        },
        {
            "id": "13-2-filters",
            "name": "13.2 Filters",
            "beginner": [
                {
                    "content": "\n<h2>13.2 Filters</h2>\n<p>• Standard <strong>Servlet Filters</strong> intercept all requests entering the web container before reaching DispatcherServlet.</p>\n<p>• Used for low-level tasks like request encoding, CORS headers, security token validation, and rate limiting.</p>\n",
                    "codeExamples": [
                        "@Component\npublic class CustomFilter extends OncePerRequestFilter {\n\n    @Override\n    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)\n            throws ServletException, IOException {\n        response.setHeader(\"X-Powered-By\", \"JavaSchoolLab Engine\");\n        filterChain.doFilter(request, response); // Pass request along chain\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Registering Filters with FilterRegistrationBean</h2>\n<p>• Use <code>FilterRegistrationBean</code> to configure filter ordering and URL mapping patterns programmatically.</p>\n",
                    "codeExamples": [
                        "@Bean\npublic FilterRegistrationBean<CustomFilter> loggingFilterRegistration(CustomFilter filter) {\n    FilterRegistrationBean<CustomFilter> registration = new FilterRegistrationBean<>(filter);\n    registration.addUrlPatterns(\"/api/*\");\n    registration.setOrder(1); // Set execution priority\n    return registration;\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Request & Response Wrapping</h2>\n<p>• Use <code>ContentCachingRequestWrapper</code> inside custom filters to read HTTP request body streams multiple times without exhausting the input stream.</p>\n"
                }
            ]
        },
        {
            "id": "13-3-cors",
            "name": "13.3 CORS",
            "beginner": [
                {
                    "content": "\n<h2>13.3 CORS (Cross-Origin Resource Sharing)</h2>\n<p>• <strong>CORS</strong> is a security feature enforced by browsers that restricts web pages from making requests to a different domain/port than the one that served the web page.</p>\n",
                    "codeExamples": [
                        "@RestController\n@CrossOrigin(origins = \"http://localhost:5173\") // Allow React Dev Server\n@RequestMapping(\"/api/cors-demo\")\npublic class CorsDemoController {\n\n    @GetMapping\n    public String getData() {\n        return \"CORS Allowed Data\";\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Global CORS Configuration</h2>\n<p>• Configure CORS globally across all endpoints via <code>WebMvcConfigurer.addCorsMappings()</code>.</p>\n",
                    "codeExamples": [
                        "@Configuration\npublic class GlobalCorsConfig implements WebMvcConfigurer {\n\n    @Override\n    public void addCorsMappings(CorsRegistry registry) {\n        registry.addMapping(\"/api/**\")\n                .allowedOrigins(\"http://localhost:5173\", \"https://javaschoollab.com\")\n                .allowedMethods(\"GET\", \"POST\", \"PUT\", \"DELETE\")\n                .allowedHeaders(\"*\")\n                .allowCredentials(true);\n    }\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Security Filter Chain CORS vs MVC Web CORS</h2>\n<p>• Ensure CORS configuration is applied at Spring Security Filter Chain level if Spring Security is active to avoid preflight 401 Unauthorized errors.</p>\n"
                }
            ]
        },
        {
            "id": "13-4-file-upload",
            "name": "13.4 File Upload",
            "beginner": [
                {
                    "content": "\n<h2>13.4 File Upload</h2>\n<p>• Spring MVC provides <strong>MultipartFile</strong> interface for uploading files to the server.</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/files\")\npublic class FileUploadController {\n\n    @PostMapping(\"/upload\")\n    public ResponseEntity<String> uploadFile(@RequestParam(\"file\") MultipartFile file) {\n        if (file.isEmpty()) {\n            return ResponseEntity.badRequest().body(\"Please select a file to upload!\");\n        }\n        return ResponseEntity.ok(\"File uploaded: \" + file.getOriginalFilename() + \" (\" + file.getSize() + \" bytes)\");\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Configuring File Upload Max Limits</h2>\n<p>• Set maximum file size and request limits in <code>application.properties</code>.</p>\n",
                    "codeExamples": [
                        "spring.servlet.multipart.max-file-size=10MB\nspring.servlet.multipart.max-request-size=20MB"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Streaming Large Files & Storage Service</h2>\n<p>• Implement background streaming for large file uploads to prevent out-of-memory exceptions during file processing.</p>\n"
                }
            ]
        },
        {
            "id": "13-5-session-management",
            "name": "13.5 Session Management",
            "beginner": [
                {
                    "content": "\n<h2>13.5 Session Management</h2>\n<p>• <strong>HttpSession</strong> allows storing user-specific data across multiple HTTP requests.</p>\n",
                    "codeExamples": [
                        "@GetMapping(\"/login\")\npublic String login(@RequestParam String username, HttpSession session) {\n    session.setAttribute(\"user\", username);\n    return \"User logged in to session!\";\n}\n\n@GetMapping(\"/profile\")\npublic String getProfile(HttpSession session) {\n    String user = (String) session.getAttribute(\"user\");\n    return \"Welcome back, \" + user;\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>@SessionAttributes Annotation</h2>\n<p>• Use <code>@SessionAttributes(\"userForm\")</code> on controller classes to preserve model attributes in session across multi-step wizard forms.</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Distributed Sessions with Spring Session Redis</h2>\n<p>• Integrate Spring Session Redis to share user HTTP sessions across multiple clustered microservice backend nodes seamlessly.</p>\n"
                }
            ]
        },
        {
            "id": "13-6-cookies",
            "name": "13.6 Cookies",
            "beginner": [
                {
                    "content": "\n<h2>13.6 Cookies</h2>\n<p>• <strong>@CookieValue</strong> annotation reads HTTP cookies sent by the client browser.</p>\n",
                    "codeExamples": [
                        "@GetMapping(\"/read-cookie\")\npublic String readCookie(@CookieValue(name = \"theme\", defaultValue = \"LIGHT\") String theme) {\n    return \"Selected User Theme: \" + theme;\n}\n\n@GetMapping(\"/set-cookie\")\npublic String setCookie(HttpServletResponse response) {\n    Cookie cookie = new Cookie(\"theme\", \"DARK\");\n    cookie.setMaxAge(7 * 24 * 60 * 60); // 7 days\n    cookie.setPath(\"/\");\n    response.addCookie(cookie);\n    return \"Cookie set successfully!\";\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Cookie Security Flags</h2>\n<ul>\n<li>• <code>HttpOnly</code>: Prevents client JavaScript (XSS) from reading the cookie.</li>\n<li>• <code>Secure</code>: Enforces cookie transmission only over HTTPS.</li>\n<li>• <code>SameSite=Strict/Lax</code>: Prevents CSRF attacks.</li>\n</ul>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>JWT Authentication Tokens in HttpOnly Cookies</h2>\n<p>• Store secure JWT authentication tokens in HttpOnly, SameSite cookies to protect client applications against XSS and token theft.</p>\n"
                }
            ]
        },
        {
            "id": "13-7-pagination-and-sorting",
            "name": "13.7 Pagination and Sorting",
            "beginner": [
                {
                    "content": "\n<h2>13.7 Pagination and Sorting</h2>\n<p>• Spring Data JPA provides <strong>Pageable</strong> and <strong>Page&lt;T&gt;</strong> abstractions for easy pagination and sorting of large datasets.</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/v1/items\")\npublic class PagedItemController {\n\n    @Autowired\n    private ItemRepository itemRepository;\n\n    @GetMapping\n    public Page<Item> getItems(@RequestParam(defaultValue = \"0\") int page,\n                               @RequestParam(defaultValue = \"10\") int size,\n                               @RequestParam(defaultValue = \"name\") String sortBy) {\n        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy).ascending());\n        return itemRepository.findAll(pageable);\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Multi-Field Sorting</h2>\n<p>• Sort results by multiple properties (e.g., <code>Sort.by(\"category\").ascending().and(Sort.by(\"price\").descending())</code>).</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Page vs Slice Performance Optimization</h2>\n<p>• Use <code>Slice&lt;T&gt;</code> instead of <code>Page&lt;T&gt;</code> when total record count queries (<code>SELECT COUNT</code>) are too expensive on multi-million row tables.</p>\n"
                }
            ]
        }
    ]
},

{
    "id": "spring-mvc-plus-frontend",
    "name": "14. Spring MVC + Frontend",
    "topics": [
        {
            "id": "14-1-spring-mvc-with-html-css",
            "name": "14.1 Spring MVC with HTML/CSS",
            "beginner": [
                {
                    "content": "\n<h2>14.1 Spring MVC with HTML/CSS</h2>\n<p>• Static web assets like HTML files, CSS stylesheets, images, and fonts are served automatically from <code>src/main/resources/static/</code> or <code>src/main/resources/public/</code> in Spring applications.</p>\n"
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Cache-Control Headers for Static Assets</h2>\n<p>• Configure static asset caching rules to boost client browser rendering performance.</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>HTML Fallback Routing for Single Page Applications</h2>\n<p>• Forward non-API client requests to <code>index.html</code> to allow client-side routers (React Router / Vue Router) to handle browser URLs.</p>\n"
                }
            ]
        },
        {
            "id": "14-2-spring-mvc-with-javascript",
            "name": "14.2 Spring MVC with JavaScript",
            "beginner": [
                {
                    "content": "\n<h2>14.2 Spring MVC with JavaScript</h2>\n<p>• JavaScript uses <code>fetch()</code> or <code>axios</code> to asynchronously call Spring MVC REST endpoints and update web page content dynamically without reloading.</p>\n",
                    "codeExamples": [
                        "// Plain JS fetch request calling Spring MVC REST endpoint\nfetch('/api/v1/students')\n    .then(response => response.json())\n    .then(data => console.log('Students received:', data));"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Sending POST JSON Payloads from JavaScript</h2>\n<p>• Configure request headers and body serialization when issuing POST/PUT requests from JavaScript.</p>\n",
                    "codeExamples": [
                        "fetch('/api/v1/students', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ name: 'Rahul', course: 'Java' })\n}).then(res => res.json());"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Handling CSRF Tokens in AJAX Requests</h2>\n<p>• Send <code>X-XSRF-TOKEN</code> HTTP headers in AJAX calls to authenticate requests when CSRF protection is enabled.</p>\n"
                }
            ]
        },
        {
            "id": "14-3-spring-mvc-with-react",
            "name": "14.3 Spring MVC with React",
            "beginner": [
                {
                    "content": "\n<h2>14.3 Spring MVC with React</h2>\n<p>• Decoupled architecture where React serves as the dynamic Single Page Application (SPA) frontend and Spring MVC acts as the RESTful backend service.</p>\n"
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Vite / CRA Development Server Proxy</h2>\n<p>• Configure development proxies in Vite (<code>vite.config.ts</code>) to forward <code>/api</code> calls to <code>http://localhost:8080</code> to bypass CORS issues during development.</p>\n",
                    "codeExamples": [
                        "// vite.config.ts Proxy setup\nexport default defineConfig({\n  server: {\n    proxy: {\n      '/api': 'http://localhost:8080'\n    }\n  }\n})"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Monolithic vs Decoupled Deployment Models</h2>\n<table border=\"1\" cellpadding=\"8\" style=\"border-collapse: collapse; width: 100%;\">\n  <thead>\n    <tr style=\"background-color: #f2f2f2;\">\n      <th>Deployment Strategy</th>\n      <th>Pros</th>\n      <th>Cons</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td><strong>Monolithic (JAR)</strong></td><td>Single deployment artifact</td><td>Tightly coupled builds</td></tr>\n    <tr><td><strong>Decoupled (CDN + Spring API)</strong></td><td>Independent scaling & frontend updates</td><td>Requires CORS configuration</td></tr>\n  </tbody>\n</table>\n"
                }
            ]
        },
        {
            "id": "14-4-cors-configuration",
            "name": "14.4 CORS Configuration",
            "beginner": [
                {
                    "content": "\n<h2>14.4 CORS Configuration</h2>\n<p>• Configure CORS rules in Spring MVC to grant permission to React or Angular frontend origins (e.g., <code>http://localhost:5173</code>) to access REST APIs.</p>\n"
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Configuring Allowed Headers and Credentials</h2>\n<p>• Enable <code>allowCredentials(true)</code> to permit cross-origin cookies or Authorization headers.</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Dynamic CORS Origin Resolution</h2>\n<p>• Implement custom <code>CorsConfigurationSource</code> to resolve allowed origins dynamically from database settings.</p>\n"
                }
            ]
        },
        {
            "id": "14-5-frontend-backend-communication",
            "name": "14.5 Frontend–Backend Communication",
            "beginner": [
                {
                    "content": "\n<h2>14.5 Frontend–Backend Communication</h2>\n<p>• Modern web applications rely on standard JSON API contracts for request and response communication between frontend and backend.</p>\n"
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Handling API Loading, Error, and Validation States</h2>\n<p>• Design clean frontend state handlers for HTTP 200 (Success), HTTP 400 (Validation Failure), and HTTP 500 (Internal Error) responses.</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Real-Time Communication with WebSockets & Server-Sent Events (SSE)</h2>\n<p>• Use Spring MVC <code>SseEmitter</code> for uni-directional server streaming or STOMP WebSockets for full-duplex real-time communication.</p>\n",
                    "codeExamples": [
                        "@GetMapping(\"/api/live-updates\")\npublic SseEmitter streamUpdates() {\n    SseEmitter emitter = new SseEmitter();\n    // Stream live events...\n    return emitter;\n}"
                    ]
                }
            ]
        }
    ]
},

{
    "id": "spring-mvc-project",
    "name": "15. Spring MVC Project",
    "topics": [
        {
            "id": "15-1-project-structure",
            "name": "15.1 Project Structure",
            "beginner": [
                {
                    "content": "\n<h2>15.1 Project Structure</h2>\n<p>• Standard package layout for an enterprise Spring MVC application:</p>\n<pre>\ncom.javaschoollab.project\n├── config          # Security & Web MVC configurations\n├── controller      # REST & Web Controllers\n├── service         # Service Interfaces & Implementations\n├── repository     # Spring Data JPA Repositories\n├── entity          # JPA Entities\n├── dto             # Request & Response DTOs\n└── exception       # Custom Exceptions & Global Handlers\n</pre>\n"
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Package-by-Feature vs Package-by-Layer</h2>\n<p>• <strong>Package-by-Layer:</strong> Grouping classes by technical roles (e.g., controllers, services).</p>\n<p>• <strong>Package-by-Feature:</strong> Grouping classes by domain features (e.g., student, course, payment).</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Clean / Hexagonal Architecture</h2>\n<p>• Isolating domain core logic completely from web framework dependencies using Ports and Adapters.</p>\n"
                }
            ]
        },
        {
            "id": "15-2-controller",
            "name": "15.2 Controller",
            "beginner": [
                {
                    "content": "\n<h2>15.2 Controller Implementation</h2>\n<p>• Creating the <code>StudentController</code> class to handle incoming REST API requests.</p>\n",
                    "codeExamples": [
                        "@RestController\n@RequestMapping(\"/api/v1/students\")\npublic class StudentController {\n    private final StudentService studentService;\n    public StudentController(StudentService studentService) { this.studentService = studentService; }\n\n    @GetMapping\n    public List<StudentResponseDto> getAll() { return studentService.getAllStudents(); }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Returning ResponseEntity with Location Headers</h2>\n<p>• Returning <code>ResponseEntity.created(location)</code> for POST endpoints.</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>OpenAPI / Swagger Annotations Integration</h2>\n<p>• Annotating controller methods with <code>@Operation</code> and <code>@ApiResponse</code> for automatic API documentation generation.</p>\n"
                }
            ]
        },
        {
            "id": "15-3-service",
            "name": "15.3 Service",
            "beginner": [
                {
                    "content": "\n<h2>15.3 Service Implementation</h2>\n<p>• Implementing business logic and transaction boundaries in <code>StudentServiceImpl</code>.</p>\n",
                    "codeExamples": [
                        "@Service\n@Transactional\npublic class StudentServiceImpl implements StudentService {\n    private final StudentRepository repository;\n    public StudentServiceImpl(StudentRepository repository) { this.repository = repository; }\n\n    @Override\n    public StudentResponseDto createStudent(CreateStudentRequest request) {\n        Student student = new Student(request.getName(), request.getEmail());\n        return StudentResponseDto.fromEntity(repository.save(student));\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Declarative Business Validation Rules</h2>\n<p>• Validating unique constraint conditions (e.g., checking if email already exists before saving).</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Domain Event Publishing</h2>\n<p>• Publishing application events via <code>ApplicationEventPublisher</code> upon successful transaction commit.</p>\n"
                }
            ]
        },
        {
            "id": "15-4-repository",
            "name": "15.4 Repository",
            "beginner": [
                {
                    "content": "\n<h2>15.4 Repository Implementation</h2>\n<p>• Defining <code>StudentRepository</code> extending <code>JpaRepository&lt;Student, Long&gt;</code>.</p>\n",
                    "codeExamples": [
                        "@Repository\npublic interface StudentRepository extends JpaRepository<Student, Long> {\n    Optional<Student> findByEmail(String email);\n    boolean existsByEmail(String email);\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Derived Queries & Custom JPQL</h2>\n<p>• Adding search query methods for filtered data fetching.</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>JPA Specification API for Dynamic Filtering</h2>\n<p>• Implementing <code>Specification&lt;Student&gt;</code> for multi-field dynamic search queries.</p>\n"
                }
            ]
        },
        {
            "id": "15-5-entity",
            "name": "15.5 Entity",
            "beginner": [
                {
                    "content": "\n<h2>15.5 Entity Implementation</h2>\n<p>• Defining the <code>Student</code> JPA Entity class.</p>\n",
                    "codeExamples": [
                        "@Entity\n@Table(name = \"students\")\npublic class Student {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(nullable = false)\n    private String name;\n\n    @Column(nullable = false, unique = true)\n    private String email;\n\n    public Student() {}\n    public Student(String name, String email) { this.name = name; this.email = email; }\n    // Getters and Setters...\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>JPA Auditing Fields</h2>\n<p>• Automatically populating <code>createdAt</code> and <code>updatedAt</code> timestamps using Spring Data JPA Auditing.</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Equals and HashCode Contract for JPA Entities</h2>\n<p>• Overriding <code>equals()</code> and <code>hashCode()</code> based on business key equality rather than volatile generated IDs.</p>\n"
                }
            ]
        },
        {
            "id": "15-6-dto",
            "name": "15.6 DTO",
            "beginner": [
                {
                    "content": "\n<h2>15.6 DTO Implementation</h2>\n<p>• Creating separate DTO classes for Request Payloads and Response Objects.</p>\n",
                    "codeExamples": [
                        "public class CreateStudentRequest {\n    @NotBlank(message = \"Name is required\")\n    private String name;\n\n    @NotBlank @Email(message = \"Valid email is required\")\n    private String email;\n\n    // Getters and Setters...\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Java 17 Records as DTOs</h2>\n<p>• Using immutable Java Records to build concise DTO classes.</p>\n",
                    "codeExamples": [
                        "public record StudentResponseDto(Long id, String name, String email) {\n    public static StudentResponseDto fromEntity(Student student) {\n        return new StudentResponseDto(student.getId(), student.getName(), student.getEmail());\n    }\n}"
                    ]
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>MapStruct Integration</h2>\n<p>• Using MapStruct compiler plugin to generate high-performance DTO-Entity conversion code automatically.</p>\n"
                }
            ]
        },
        {
            "id": "15-7-rest-api",
            "name": "15.7 REST API",
            "beginner": [
                {
                    "content": "\n<h2>15.7 REST API Endpoints Overview</h2>\n<p>• Complete REST API specification for the project endpoints:</p>\n<pre>\nGET    /api/v1/students      - Fetch all students\nGET    /api/v1/students/{id} - Fetch student by ID\nPOST   /api/v1/students      - Create new student\nPUT    /api/v1/students/{id} - Update existing student\nDELETE /api/v1/students/{id} - Delete student\n</pre>\n"
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>API Response Wrapper Structure</h2>\n<p>• Standardizing API responses with a generic <code>ApiResponse&lt;T&gt;</code> wrapper class.</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Rate Limiting & Security Headers</h2>\n<p>• Adding Bucket4j rate-limiting headers to protect API endpoints from excessive traffic.</p>\n"
                }
            ]
        },
        {
            "id": "15-8-database-integration",
            "name": "15.8 Database Integration",
            "beginner": [
                {
                    "content": "\n<h2>15.8 Database Integration</h2>\n<p>• Connecting project to MySQL database using Spring Data JPA configuration properties.</p>\n"
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Database Seeding Scripts</h2>\n<p>• Executing <code>data.sql</code> script to populate sample database records upon application start.</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Production Flyway Migration Setup</h2>\n<p>• Writing Flyway SQL migration scripts (e.g., <code>V1__init_schema.sql</code>) for schema control.</p>\n"
                }
            ]
        },
        {
            "id": "15-9-exception-handling",
            "name": "15.9 Exception Handling",
            "beginner": [
                {
                    "content": "\n<h2>15.9 Exception Handling Implementation</h2>\n<p>• Implementing <code>GlobalExceptionHandler</code> using <code>@RestControllerAdvice</code>.</p>\n",
                    "codeExamples": [
                        "@RestControllerAdvice\npublic class ProjectExceptionHandler {\n\n    @ExceptionHandler(StudentNotFoundException.class)\n    public ResponseEntity<ErrorResponse> handleNotFound(StudentNotFoundException ex, WebRequest req) {\n        ErrorResponse err = new ErrorResponse(LocalDateTime.now(), 404, \"Not Found\", ex.getMessage(), req.getDescription(false));\n        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);\n    }\n}"
                    ]
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Centralized Validation Error Response Formatting</h2>\n<p>• Catching <code>MethodArgumentNotValidException</code> and assembling clean field error maps.</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>RFC 7807 ProblemDetail Integration</h2>\n<p>• Returning standard <code>ProblemDetail</code> instances from exception handlers in modern Spring versions.</p>\n"
                }
            ]
        },
        {
            "id": "15-10-validation",
            "name": "15.10 Validation",
            "beginner": [
                {
                    "content": "\n<h2>15.10 Validation Integration</h2>\n<p>• Applying Jakarta validation annotations (<code>@NotBlank</code>, <code>@Email</code>, <code>@Size</code>) to project request DTOs and validating in controller endpoints via <code>@Valid</code>.</p>\n"
                }
            ],
            "intermediate": [
                {
                    "content": "\n<h2>Validating Path Parameters & Query Parameters</h2>\n<p>• Annotating controller classes with <code>@Validated</code> to enforce constraints (e.g., <code>@Min(1) Long id</code>) directly on path variables.</p>\n"
                }
            ],
            "expert": [
                {
                    "content": "\n<h2>Cross-Field Custom Validation</h2>\n<p>• Creating custom class-level validation annotations (e.g., <code>@PasswordsMatch</code>) for complex form validation logic.</p>\n"
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
        'spring-boot-starter-web is commonly used to create Spring MVC-based web applications and REST APIs.',
        '@Controller is used to mark classes as Spring MVC web controllers.',
        '@RestController combines @Controller and @ResponseBody for REST API services.',
        '@RequestMapping maps HTTP requests to handler methods at class or method level.',
        '@GetMapping is a shortcut for GET requests to retrieve data.',
        '@PostMapping is a shortcut for POST requests to submit data.',
        '@PutMapping is a shortcut for PUT requests to replace resources.',
        '@DeleteMapping is a shortcut for DELETE requests to remove resources.',
        '@PatchMapping is a shortcut for PATCH requests for partial resource updates.',
        '@RequestParam extracts query parameters or form parameters from requests.',
        '@PathVariable extracts variables embedded directly in URI path segments.',
        '@RequestBody deserializes incoming JSON/XML request payloads into Java objects.',
        '@ResponseBody writes return values directly to the HTTP response body.',
        '@ModelAttribute binds request parameters to form objects or populates Model data.',
        'Model and ModelMap pass data from controllers to views for server-side rendering.',
        'ModelAndView encapsulates both model attributes and logical view names.',
        'ViewResolver maps logical view names to physical template files (e.g., JSPs).',
        'REST APIs use HTTP methods (GET, POST, PUT, DELETE) and return standard status codes.',
        'Common REST HTTP Status codes include 200 OK, 201 Created, 204 No Content, 400 Bad Request, 404 Not Found, 500 Internal Error.',
        '@ExceptionHandler intercepts specified exceptions within a controller.',
        '@ControllerAdvice and @RestControllerAdvice provide global exception handling across all controllers.',
        'Bean Validation (JSR 380) uses annotations like @NotNull, @NotBlank, @Size, and @Email.',
        '@Valid triggers automated Bean Validation on controller method parameters.',
        'Spring MVC layered architecture separates Controller, Service, and Repository layers.',
        'Spring Data JPA reduces DAO boilerplate code by auto-generating CRUD operations.',
        'HandlerInterceptor intercepts HTTP requests before and after controller execution.',
        'CORS (Cross-Origin Resource Sharing) configuration permits cross-domain API access from React/Angular frontends.',
        'MultipartFile handles file uploads in Spring MVC applications.',
        'Pageable and Page<T> enable pagination and sorting in REST APIs.'
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
                'What is the role of the Repository layer?',
                'What is @Controller and how does it differ from @Component?',
                'What is @RestController and how does it differ from @Controller?',
                'Explain the role of @ResponseBody in Spring MVC.',
                'What is @RequestMapping and what attributes does it support?',
                'What are the HTTP shortcut annotations in Spring MVC (@GetMapping, @PostMapping, etc.)?',
                'What is the difference between POST, PUT, and PATCH HTTP methods?',
                'What is @RequestParam and how do you specify default or optional values?',
                'What is @PathVariable and how does it differ from @RequestParam?',
                'What is @RequestBody and how does Spring serialize JSON payloads?',
                'What is @ModelAttribute and when should it be used?',
                'Explain the difference between Model, ModelMap, and ModelAndView.',
                'What is a ViewResolver and how does InternalResourceViewResolver work?',
                'How do you pass data from a Controller to a JSP or HTML View?',
                'What is the Post-Redirect-Get (PRG) pattern and why is it used?',
                'How do flash attributes work in Spring MVC redirects?',
                'What is a REST API and what are the key REST architectural constraints?',
                'What is the Richardson Maturity Model in REST API design?',
                'Explain common HTTP status codes (200, 201, 204, 400, 401, 403, 404, 500).',
                'How does exception handling work in Spring MVC?',
                'What is the difference between @ExceptionHandler, @ControllerAdvice, and @RestControllerAdvice?',
                'How do you handle validation errors globally in a REST API?',
                'What is Bean Validation (JSR 380) and what annotations does it provide?',
                'Explain the difference between @NotNull, @NotEmpty, and @NotBlank.',
                'How does @Valid work in Spring MVC controller method arguments?',
                'Explain the Controller-Service-Repository layered architecture.',
                'What is Spring Data JPA and how does it simplify database access?',
                'How do you configure MySQL database connection properties in Spring Boot/Spring MVC?',
                'What is a HandlerInterceptor and how does it differ from a Servlet Filter?',
                'What is CORS and how do you configure it in Spring MVC?',
                'How do you handle file uploads in Spring MVC using MultipartFile?',
                'How do you implement pagination and sorting using Pageable and Page<T>?',
                'How does a React frontend communicate with a Spring MVC REST API backend?'
            ]
        }
    ]
}
];