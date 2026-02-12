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

export const JSPServlets: Course[] = [

    {
        id: 'jsp-servlet',
        name: 'JSP Servlets',
        icon: 'jsp-servlets_icon_png',
        subTopics: [

            {
                id: 'introservlets',
                name: 'Introduction to Web & Servlets',
                topics: [
                    {
                        id: "web-architecture-client-server",
                        name: "Web Architecture (Client–Server Model)",

                        beginner: [
                            {
                                content: `
<h2>What is Web Architecture?</h2>
<p>• Web architecture defines how different components of a web application interact with each other.</p><br>

<h3>Client–Server Model</h3>
<ul>
<li><strong>• Client:</strong> Browser or mobile app that sends requests.</li>
<li><strong>• Server:</strong> Machine that processes requests and sends responses.</li>
</ul><br>

<h3>How It Works</h3>
<ol>
<li>• User enters URL in browser.</li>
<li>• Browser sends HTTP request to server.</li>
<li>• Server processes request.</li>
<li>• Server sends HTTP response.</li>
<li>• Browser displays the result.</li>
</ol><br>

<h3>Example</h3>
<p>• You open <strong>www.google.com</strong>. Your browser (client) sends request to Google server. Server responds with HTML page.</p>`
                            },
                            {
                                content: `
<h3>HTTP Request & Response</h3>
<ul>
<li><strong>• Request:</strong> Sent by client (GET, POST, PUT, DELETE)</li>
<li><strong>• Response:</strong> Sent by server (Status code + Data)</li>
</ul><br>

<h4>Status Codes</h4>
<ul>
<li>• 200 – Success</li>
<li>• 404 – Not Found</li>
<li>• 500 – Server Error</li>
</ul>
`,
                                codeExamples: [
                                    `// Example HTTP GET request
GET /users HTTP/1.1
Host: example.com`,
                                    `// Example HTTP Response
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 1,
  "name": "Ashish"
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>3-Tier Architecture</h2>
<p>Most modern web apps use 3 layers:</p>

<ul>
<li><strong>• Presentation Layer:</strong> Frontend (React, Angular)</li>
<li><strong>• Business Logic Layer:</strong> Backend (Spring Boot, .NET)</li>
<li><strong>• Data Layer:</strong> Database (MySQL, MongoDB)</li>
</ul>

<p>This separation improves maintainability and scalability.</p>
`
                            },
                            {
                                content: `
<h3>Stateless vs Stateful</h3>
<ul>
<li><strong>• Stateless:</strong> Each request is independent (REST APIs).</li>
<li><strong>• Stateful:</strong> Server stores session data.</li>
</ul><br>

<h3>REST Architecture</h3>
<ul>
<li>• Uses HTTP methods properly.</li>
<li>• Stateless communication.</li>
<li>• Resource-based URLs.</li>
</ul>
`,
                                codeExamples: [
                                    `// REST API example (Spring Boot)
@GetMapping("/products/{id}")
public Product getProduct(@PathVariable Long id) {
    return productService.findById(id);
}`
                                ]
                            },
                            {
                                content: `
<h3>Middleware Concept</h3>
<p>• Middleware acts between request and response.</p>
<ul>
<li>• Authentication middleware</li>
<li>• Logging middleware</li>
<li>• Error handling middleware</li>
</ul><br>
<p>Example: In Spring Boot, filters and interceptors act as middleware.</p>
`
                            },
                            {
                                content: `
<h3>Session Management</h3>
<ul>
<li>• Cookies</li>
<li>• Session ID</li>
<li>• JWT Token</li>
</ul>

<p>JWT is commonly used in modern stateless applications.</p>
`,
                                codeExamples: [
                                    `// Example JWT Authorization Header
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`
                                ]
                            },
                            {
                                content: `
<h3>Client-Side Rendering vs Server-Side Rendering</h3>
<ul>
<li>• <strong>CSR:</strong> Rendering happens in browser (React).</li>
<li>• <strong>SSR:</strong> Rendering happens on server (Next.js).</li>
</ul>

<p>SSR improves SEO and initial load performance.</p>
`
                            },
                            {
                                content: `
<h3>Database Connection Flow</h3>
<p>App Server communicates with database using:</p>
<ul>
<li>• Connection Pool</li>
<li>• ORM (Hibernate, Entity Framework)</li>
</ul>

<p>Connection pooling improves performance.</p>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Microservices Architecture</h2>
<p>• Instead of one big server (Monolith), application is divided into small independent services.</p><br>

<h3>Advantages</h3>
<ul>
<li>• Independent deployment</li>
<li>• Scalable services</li>
<li>• Better fault isolation</li>
</ul><br>

<h3>Challenges</h3>
<ul>
<li>• Service communication (REST, gRPC)</li>
<li>• Distributed transactions</li>
<li>• Monitoring & logging</li>
</ul>
`
                            },
                            {
                                content: `
<h3>API Gateway Pattern</h3>
<p>• Single entry point for all client requests in microservices architecture.</p>

<ul>
<li>• Authentication</li>
<li>• Rate limiting</li>
<li>• Request routing</li>
<li>• Load balancing</li>
</ul>
`
                            },
                            {
                                content: `
<h3>Event-Driven Architecture</h3>
<p>• Services communicate via events using message brokers.</p>
<ul>
<li>• Kafka</li>
<li>• RabbitMQ</li>
<li>• ActiveMQ</li>
</ul>
<p>• Improves scalability and decouples services.</p>
`,
                                codeExamples: [
                                    `// Example: Publishing event (Pseudo code)
eventPublisher.publish("order-created", orderData);`
                                ]
                            },
                            {
                                content: `
<h3>Distributed Systems Concepts</h3>
<ul>
<li>• CAP Theorem (Consistency, Availability, Partition Tolerance)</li>
<li>• Eventual Consistency</li>
<li>• Circuit Breaker Pattern</li>
</ul>
<p>• Tools: Resilience4j, Hystrix</p>
`
                            },
                            {
                                content: `
<h3>Containerization & Deployment</h3>
<ul>
<li>• Docker for containerization</li>
<li>• Kubernetes for orchestration</li>
<li>• CI/CD pipelines for automated deployment</li>
</ul>
`,
                                codeExamples: [
                                    `# Example Dockerfile
FROM openjdk:17
COPY target/app.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]`
                                ]
                            },
                            {
                                content: `
<h3>Advanced Caching Strategies</h3>
<ul>
<li>• Cache Aside Pattern</li>
<li>• Write Through Cache</li>
<li>• Distributed Cache (Redis Cluster)</li>
</ul>
`
                            },
                            {
                                content: `
<h3>Security in Distributed Architecture</h3>
<ul>
<li>• OAuth 2.0</li>
<li>• OpenID Connect</li>
<li>• API Rate Limiting</li>
<li>• Zero Trust Architecture</li>
</ul>
<p>• Security must be applied at every layer.</p>
`
                            },
                            {
                                content: `
<h3>Observability & Monitoring</h3>
<ul>
<li>• Centralized Logging (ELK Stack)</li>
<li>• Metrics Monitoring (Prometheus, Grafana)</li>
<li>• Distributed Tracing (Jaeger, Zipkin)</li>
</ul>
<p>• Helps identify bottlenecks and failures in distributed systems.</p>
`
                            }
                        ]

                    },

                    {
                        id: "http-https-basics",
                        name: "HTTP & HTTPS Basics",

                        beginner: [
                            {
                                content: `
<h2>What is HTTP?</h2>
<p><strong>• HTTP (HyperText Transfer Protocol)</strong> is a communication protocol used between client (browser) and server.</p>

<ul>
<li>• It is used to transfer web pages.</li>
<li>• Works on Port 80 by default.</li>
<li>• It is stateless (each request is independent).</li>
</ul><br>

<h3>How HTTP Works</h3>
<ol>
<li>• Client sends HTTP request.</li>
<li>• Server processes request.</li>
<li>• Server sends HTTP response.</li>
</ol>
`
                            },
                            {
                                content: `
<h2>What is HTTPS?</h2>
<p><strong>• HTTPS (HyperText Transfer Protocol Secure)</strong> is the secure version of HTTP.</p>

<ul>
<li>• Uses SSL/TLS encryption.</li>
<li>• Works on Port 443.</li>
<li>• Encrypts data between client and server.</li>
</ul>
<p>• HTTPS protects sensitive data like passwords, credit card details.</p>
`
                            },
                            {
                                content: `
<h3>HTTP vs HTTPS (Basic Difference)</h3>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">
<tr>
<th>HTTP</th>
<th>HTTPS</th>
</tr>
<tr>
<td>Not Secure</td>
<td>Secure (Encrypted)</td>
</tr>
<tr>
<td>Port 80</td>
<td>Port 443</td>
</tr>
<tr>
<td>No Encryption</td>
<td>Uses SSL/TLS</td>
</tr>
</table>
`
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>HTTP Request Structure</h2>
<ul>
<li><strong>• Request Line</strong> (GET /index.html HTTP/1.1)</li>
<li><strong>• Headers</strong> (Content-Type, Authorization)</li>
<li><strong>• Body</strong> (Data for POST/PUT requests)</li>
</ul>
`,
                                codeExamples: [
                                    `POST /login HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "email": "ashish@gmail.com",
  "password": "123456"
}`
                                ]
                            },
                            {
                                content: `
<h2>HTTP Response Structure</h2>
<ul>
<li>• Status Line (HTTP/1.1 200 OK)</li>
<li>• Headers</li>
<li>• Body</li>
</ul><br>

<h3>Common Status Codes</h3>
<ul>
<li>• 200 – OK</li>
<li>• 201 – Created</li>
<li>• 400 – Bad Request</li>
<li>• 401 – Unauthorized</li>
<li>• 404 – Not Found</li>
<li>• 500 – Internal Server Error</li>
</ul>
`,
                                codeExamples: [
                                    `HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Login successful"
}`
                                ]
                            },
                            {
                                content: `
<h2>SSL/TLS Handshake (HTTPS Working)</h2>
<p>When using HTTPS:</p>
<ol>
<li>• Client sends request to server.</li>
<li>• Server sends SSL certificate.</li>
<li>• Client verifies certificate.</li>
<li>• Encryption key is generated.</li>
<li>• Secure communication begins.</li>
</ol>
`
                            },
                            {
                                content: `
<h3>HTTP Methods</h3>
<ul>
<li>• GET – Retrieve data</li>
<li>• POST – Send data</li>
<li>• PUT – Update data</li>
<li>• DELETE – Remove data</li>
<li>• PATCH – Partial update</li>
</ul>
`
                            },
                            {
                                content: `
<h2>HTTP Headers Deep Dive</h2>
<p>• Headers provide additional information about the request or response.</p><br>

<h3>Important Request Headers</h3>
<ul>
<li><strong>• Authorization</strong></li>
<li><strong>• Content-Type</strong></li>
<li><strong>• Accept</strong></li>
<li><strong>• User-Agent</strong></li>
<li><strong>• Cookie</strong></li>
</ul><br>

<h3>Important Response Headers</h3>
<ul>
<li><strong>• Set-Cookie</strong></li>
<li><strong>• Cache-Control</strong></li>
<li><strong>• Location</strong></li>
<li><strong>• Content-Encoding</strong></li>
</ul>
`,
                                codeExamples: [
                                    `GET /profile HTTP/1.1
Host: example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`
                                ]
                            },
                            {
                                content: `
<h2>Cookies & Sessions</h2>
<ul>
<li>• Cookies store small data in browser.</li>
<li>• Session ID is stored in cookie.</li>
<li>• Server maintains session data.</li>
</ul>
<p>• Modern apps use JWT instead of traditional sessions.</p>
`,
                                codeExamples: [
                                    `Set-Cookie: JSESSIONID=ABC123; HttpOnly; Secure`
                                ]
                            },
                            {
                                content: `
<h2>CORS (Cross-Origin Resource Sharing)</h2>
<p>• CORS controls which domains can access your API.</p>
<ul>
<li>• Prevents unauthorized cross-origin requests.</li>
<li>• Uses headers like Access-Control-Allow-Origin.</li>
</ul>
`,
                                codeExamples: [
                                    `Access-Control-Allow-Origin: https://myfrontend.com`
                                ]
                            },
                            {
                                content: `
<h2>Idempotent vs Non-Idempotent Methods</h2>
<ul>
<li><strong>• Idempotent:</strong> GET, PUT, DELETE (multiple calls same result)</li>
<li><strong>• Non-Idempotent:</strong> POST (creates new resource each time)</li>
</ul>
<p>This concept is important in REST API design.</p>
`
                            },
                            {
                                content: `
<h2>HTTP Caching Mechanism</h2>
<ul>
<li>• ETag</li>
<li>• Last-Modified</li>
<li>• Cache-Control</li>
<li>• Expires</li>
</ul>
<p>• Caching reduces server load and improves performance.</p>
`,
                                codeExamples: [
                                    `Cache-Control: public, max-age=3600`
                                ]
                            }

                        ],

                        expert: [
                            {
                                content: `
<h2>HTTP Versions</h2>
<ul>
<li><strong>• HTTP/1.1:</strong> Text-based, supports persistent connections.</li>
<li><strong>• HTTP/2:</strong> Binary protocol, multiplexing, header compression.</li>
<li><strong>• HTTP/3:</strong> Uses QUIC (UDP-based), faster and more secure.</li>
</ul>
<p>• HTTP/2 and HTTP/3 improve performance significantly.</p>
`
                            },
                            {
                                content: `
<h2>Advanced HTTPS Security Concepts</h2>
<ul>
<li>• Symmetric Encryption</li>
<li>• Asymmetric Encryption</li>
<li>• Public Key Infrastructure (PKI)</li>
<li>• Certificate Authorities (CA)</li>
<li>• Digital Signatures</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Security Attacks Related to HTTP</h2>
<ul>
<li>• Man-in-the-Middle (MITM)</li>
<li>• SSL Stripping</li>
<li>• Session Hijacking</li>
<li>• Cross-Site Scripting (XSS)</li>
</ul>
<p>• HTTPS helps prevent many of these attacks.</p>
`
                            },
                            {
                                content: `
<h2>HSTS (HTTP Strict Transport Security)</h2>
<p>• HSTS forces browsers to use HTTPS only.</p>
<p>• This prevents downgrade attacks and improves security.</p>
`,
                                codeExamples: [
                                    `Strict-Transport-Security: max-age=31536000; includeSubDomains`
                                ]
                            },
                            {
                                content: `
<h2>Performance Optimization in HTTP</h2>
<ul>
<li>• Keep-Alive Connections</li>
<li>• Compression (Gzip, Brotli)</li>
<li>• CDN Usage</li>
<li>• HTTP Caching Headers (ETag, Cache-Control)</li>
</ul>
`
                            },
                            {
                                content: `
<h2>TLS Encryption Internals</h2>
<p>• HTTPS uses both asymmetric and symmetric encryption:</p>
<ul>
<li>• Asymmetric encryption for key exchange.</li>
<li>• Symmetric encryption for data transfer.</li>
</ul>
<p>• This ensures both security and performance.</p>
`
                            },
                            {
                                content: `
<h2>Certificate Types</h2>
<ul>
<li>• Domain Validation (DV)</li>
<li>• Organization Validation (OV)</li>
<li>• Extended Validation (EV)</li>
<li>• Wildcard Certificates</li>
<li>• Self-Signed Certificates</li>
</ul>
<p>• Production systems should use CA-issued certificates.</p>
`
                            },
                            {
                                content: `
<h2>Mutual TLS (mTLS)</h2>
<p>• Both client and server authenticate each other using certificates.</p>
<ul>
<li>• Used in microservices architecture</li>
<li>• Enhances security in internal APIs</li>
</ul>
`
                            },
                            {
                                content: `
<h2>HTTP/2 Advanced Features</h2>
<ul>
<li>• Multiplexing (multiple requests in single connection)</li>
<li>• Header compression (HPACK)</li>
<li>• Server Push</li>
</ul>
<p>• Improves latency and performance significantly.</p>
`
                            },
                            {
                                content: `
<h2>QUIC & HTTP/3</h2>
<ul>
<li>• Uses UDP instead of TCP</li>
<li>• Faster handshake</li>
<li>• Built-in encryption</li>
</ul>
<p>• Reduces connection establishment time.</p>
`
                            },
                            {
                                content: `
<h2>Security Best Practices</h2>
<ul>
<li>• Always redirect HTTP → HTTPS</li>
<li>• Use HSTS</li>
<li>• Enable Secure & HttpOnly cookies</li>
<li>• Disable weak TLS versions</li>
<li>• Use strong cipher suites</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Common Real-World Production Setup</h2>
<p>• Client → CDN → Load Balancer → Reverse Proxy (Nginx) → App Server → Database</p>

<ul>
<li>• SSL termination at Load Balancer</li>
<li>• Internal traffic secured with mTLS</li>
<li>• WAF (Web Application Firewall) protection</li>
</ul>
`
                            }

                        ]
                    },

                    {
                        id: "http-request-response-cycle",
                        name: "HTTP Request & Response Cycle",

                        beginner: [
                            {
                                content: `
<h2>Introduction to HTTP Request–Response Cycle</h2>
<p>• The HTTP Request–Response cycle is the communication process between a client (browser) and a server.</p>
<p>• Every time you open a website, this cycle happens behind the scenes.</p><br>

<h3>Basic Steps</h3>
<ol>
<li>• User enters URL</li>
<li>• Browser sends HTTP request</li>
<li>• Server processes request</li>
<li>• Server sends HTTP response</li>
<li>• Browser renders content</li>
</ol>
`,
                                codeExamples: [
                                    `// Simple Fetch API Example (Browser Request)
fetch("https://api.example.com/products")
  .then(response => response.json())
  .then(data => console.log(data));`
                                ]
                            },
                            {
                                content: `
<h2>Understanding HTTP Request</h2>
<p>• An HTTP request is sent by the client to ask for data or perform an action.</p>
<ul>
<li><strong>• Method</strong> – GET, POST, PUT, DELETE</li>
<li><strong>• URL</strong> – Resource path</li>
<li><strong>• Headers</strong> – Metadata</li>
<li><strong>• Body</strong> – Data (for POST/PUT)</li>
</ul>
`,
                                codeExamples: [
                                    `POST /login HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "email": "user@gmail.com",
  "password": "123456"
}`
                                ]
                            },
                            {
                                content: `
<h2>Understanding HTTP Response</h2>
<p>• The server sends a response after processing the request.</p>

<ul>
<li>• Status Code</li>
<li>• Response Headers</li>
<li>• Response Body</li>
</ul>
`,
                                codeExamples: [
                                    `HTTP/1.1 200 OK
Content-Type: application/json

{
  "token": "abc123xyz"
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>DNS Resolution</h2>
<p>• Before sending request, browser converts domain name into IP address using DNS.</p>
<p>Example: example.com → 93.184.216.34</p>
`,
                                codeExamples: [
                                    `// Check DNS via command line
nslookup example.com`
                                ]
                            },
                            {
                                content: `
<h2>TCP Connection (3-Way Handshake)</h2>
<p>• Before HTTP data transfer, TCP connection is established.</p>
<ul>
<li>• SYN</li>
<li>• SYN-ACK</li>
<li>• ACK</li>
</ul>
`,
                                codeExamples: [
                                    `// View open TCP connections
netstat -an | find "443"`
                                ]
                            },
                            {
                                content: `
<h2>Server-Side Processing Flow</h2>
<p>• Once request reaches server:</p>
<ul>
<li>• Passes through Filters</li>
<li>• Authentication check</li>
<li>• Controller handles request</li>
<li>• Service executes logic</li>
<li>• Database interaction</li>
</ul>
`,
                                codeExamples: [
                                    `// Spring Boot Controller Example
@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}`
                                ]
                            },
                            {
                                content: `
<h2>Database Interaction</h2>
<p>• Application server communicates with database to fetch/store data.</p>
`,
                                codeExamples: [
                                    `// JPA Repository Example
public interface UserRepository 
       extends JpaRepository<User, Long> {

}`
                                ]
                            },
                            {
                                content: `
<h2>Browser Rendering Process</h2>
<p>• After receiving response:</p>
<ul>
<li>• Parse HTML</li>
<li>• Build DOM</li>
<li>• Load CSS</li>
<li>• Execute JavaScript</li>
<li>• Render page</li>
</ul>
`,
                                codeExamples: [
                                    `<!DOCTYPE html>
<html>
<body>
  <h1>Hello World</h1>
  <script>
    console.log("Page Loaded");
  </script>
</body>
</html>`
                                ]
                            },
                            {
                                content: `
<h2>State Management in HTTP</h2>
<p>• HTTP is stateless, so sessions or tokens maintain state.</p>
`,
                                codeExamples: [
                                    `// Example Cookie Header
Set-Cookie: sessionId=abc123; HttpOnly; Secure`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>HTTPS & TLS Handshake</h2>
<p>• For secure communication:</p>
<ol>
<li>• Client Hello</li>
<li>• Server Hello</li>
<li>• Certificate exchange</li>
<li>• Key exchange</li>
<li>• Encrypted communication</li>
</ol>
`,
                                codeExamples: [
                                    `// Check SSL certificate
openssl s_client -connect example.com:443`
                                ]
                            },
                            {
                                content: `
<h2>Reverse Proxy Architecture</h2>
<p>• Production flow:</p>
<p>• Client → CDN → Load Balancer → Nginx → App Server → DB</p>
`,
                                codeExamples: [
                                    `# Nginx Reverse Proxy
server {
    listen 80;
    location / {
        proxy_pass http://localhost:8080;
    }
}`
                                ]
                            },
                            {
                                content: `
<h2>HTTP/2 & Multiplexing</h2>
<p>• HTTP/2 allows multiple parallel requests over single connection.</p>
`,
                                codeExamples: [
                                    `# Enable HTTP/2 in Nginx
listen 443 ssl http2;`
                                ]
                            },
                            {
                                content: `
<h2>Distributed Tracing</h2>
<p>• Each request carries unique Trace ID across microservices.</p>
`,
                                codeExamples: [
                                    `// Example Request Header
X-Trace-Id: 9f8d7a6b`
                                ]
                            },
                            {
                                content: `
<h2>Rate Limiting & Security</h2>
<p>• Protect API from abuse by limiting requests.</p>
`,
                                codeExamples: [
                                    `// Express Rate Limit Example
const rateLimit = require("express-rate-limit");
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));`
                                ]
                            },
                            {
                                content: `
<h2>Performance Optimization</h2>
<p>• Improve request speed using:</p>
<ul>
<li>• Caching</li>
<li>• Keep-Alive</li>
<li>• Compression (Gzip)</li>
</ul>
`,
                                codeExamples: [
                                    `// Enable Gzip in Spring Boot (application.properties)
server.compression.enabled=true`
                                ]
                            }
                        ]
                    },

                    {
                        id: "web-servers-tomcat-glassfish",
                        name: "Web Servers (Tomcat, GlassFish)",

                        beginner: [
                            {
                                content: `
<h2>What is a Web Server?</h2>
<p>• A Web Server is a software that handles HTTP requests from clients (like browsers) and sends back responses (HTML, JSON, etc.).</p><br>

<h3>What is Apache Tomcat?</h3>
<ul>
<li>• Open-source Java Servlet container</li>
<li>• Used to run Java web applications</li>
<li>• Supports Servlets and JSP</li>
</ul><br>

<h3>What is GlassFish?</h3>
<ul>
<li>• Full Java EE Application Server</li>
<li>• Supports Servlets, JSP, EJB, JPA, JMS</li>
<li>• More advanced than Tomcat</li>
</ul><br>

<h3>Tomcat vs GlassFish (Basic Difference)</h3>
<ul>
<li>• Tomcat → Lightweight, Servlet & JSP container</li>
<li>• GlassFish → Full Java EE server</li>
</ul>
`
                            },
                            {
                                content: `
<h2>How Web Server Works</h2>
<ol>
<li>• Client sends HTTP request</li>
<li>• Server processes request</li>
<li>• Servlet handles logic</li>
<li>• Response sent back to client</li>
</ol>
`
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Tomcat Architecture</h2>
<ul>
<li>• Connector → Handles HTTP requests</li>
<li>• Engine → Processes requests</li>
<li>• Host → Represents virtual host</li>
<li>• Context → Represents web application</li>
</ul><br>

<h2>Directory Structure (Tomcat)</h2>
<ul>
<li>• bin → Startup/Shutdown scripts</li>
<li>• conf → Configuration files</li>
<li>• webapps → Deploy applications here</li>
<li>• logs → Log files</li>
</ul>
`,
                                codeExamples: [
                                    `# Start Tomcat (Windows)
startup.bat

# Stop Tomcat
shutdown.bat`
                                ]
                            },
                            {
                                content: `
<h2>Deployment in Tomcat</h2>
<p>• Applications are deployed as WAR (Web Archive) files.</p>

<h3>Steps:</h3>
<ol>
<li>• Create WAR file</li>
<li>• Place inside webapps folder</li>
<li>• Start server</li>
<li>• Access using http://localhost:8080/appName</li>
</ol>
`,
                                codeExamples: [
                                    `<!-- web.xml example -->
<web-app>
  <servlet>
    <servlet-name>HelloServlet</servlet-name>
    <servlet-class>com.example.HelloServlet</servlet-class>
  </servlet>

  <servlet-mapping>
    <servlet-name>HelloServlet</servlet-name>
    <url-pattern>/hello</url-pattern>
  </servlet-mapping>
</web-app>`
                                ]
                            },
                            {
                                content: `
<h2>GlassFish Features</h2>
<ul>
<li>• Admin Console (GUI)</li>
<li>• Supports EJB, JPA, JMS</li>
<li>• Clustering support</li>
<li>• Built-in security</li>
</ul>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Performance Tuning (Tomcat)</h2>
<ul>
<li>• Increase maxThreads in server.xml</li>
<li>• Configure connectionTimeout</li>
<li>• Enable compression</li>
<li>• Use connection pooling</li>
</ul>
`,
                                codeExamples: [
                                    `<!-- server.xml Connector configuration -->
<Connector port="8080"
           protocol="HTTP/1.1"
           maxThreads="200"
           connectionTimeout="20000"
           redirectPort="8443" />`
                                ]
                            },
                            {
                                content: `
<h2>Clustering & Load Balancing</h2>
<p>• Used for high availability and scalability.</p>
<ul>
<li>• Multiple server instances</li>
<li>• Session replication</li>
<li>• Load balancer distributes traffic</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Security Configuration</h2>
<ul>
<li>• HTTPS configuration (SSL)</li>
<li>• Role-based authentication</li>
<li>• Realm configuration</li>
<li>• Security constraints in web.xml</li>
</ul>
`,
                                codeExamples: [
                                    `<!-- Security Constraint Example -->
<security-constraint>
  <web-resource-collection>
    <web-resource-name>Protected</web-resource-name>
    <url-pattern>/admin/*</url-pattern>
  </web-resource-collection>
  <auth-constraint>
    <role-name>admin</role-name>
  </auth-constraint>
</security-constraint>`
                                ]
                            }
                        ]
                    },

                    {
                        id: 'jsp-intro',
                        name: 'Introduction to Servlets',

                        beginner: [
                            {
                                content: `
                <h3>What is a Servlet?</h3>
                <p>• A <strong>Servlet</strong> is a Java program that runs on a web server and handles client requests.</p>
                <p>• Servlets are used to generate dynamic web content (HTML, JSON, XML).</p>
                <p>• They extend <code>HttpServlet</code> class.</p>
            `
                            },
                            {
                                content: `
                <h3>Why Servlets?</h3>
                <p>• Platform-independent, runs on any server with JVM.</p>
                <p>• Faster than CGI because servlet runs inside server JVM.</p>
                <p>• Can handle multiple requests using threads.</p>
            `
                            },
                            {
                                content: `
                <h3>Servlet Architecture (Beginner)</h3>
                <p>• Client sends HTTP request to server.</p>
                <p>• Server processes request using servlet.</p>
                <p>• Servlet generates dynamic response (HTML/JSON).</p>
                <p>• Response sent back to client.</p>
            `
                            }
                        ],

                        intermediate: [
                            {
                                content: `
                <h3>Servlet API & Packages</h3>
                <p>• javax.servlet / jakarta.servlet – core servlet API.</p>
                <p>• javax.servlet.http – HTTP specific classes.</p>
                <p>• ServletRequest / ServletResponse – to read/write data.</p>
                <p>• HttpServletRequest / HttpServletResponse – handle HTTP requests.</p>
            `
                            },
                            {
                                content: `
                <h3>Servlet Life Cycle (Intermediate)</h3>
                <p>• <code>init()</code> – called once when servlet loads.</p>
                <p>• <code>service()</code> – called for every request.</p>
                <p>• <code>doGet()</code> / <code>doPost()</code> – handle GET/POST.</p>
                <p>• <code>destroy()</code> – called once before servlet is unloaded.</p>
            `
                            },
                            {
                                content: `
                <h3>Servlet Configuration</h3>
                <p>• Using <code>web.xml</code> deployment descriptor.</p>
                <p>• Using <code>@WebServlet</code> annotation.</p>
            `
                            },
                            {
                                content: `
                <h3>Servlet Example (Simple)</h3>
            `,
                                codeExamples: [
                                    `import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.*;

@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h1>Hello, Servlet!</h1>");
    }
}`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
                <h3>Servlets in Enterprise Applications</h3>
                <p>• Used as Controller in MVC pattern.</p>
                <p>• Integrates with JSP/HTML as View.</p>
                <p>• Business logic in Java classes (Model).</p>
            `
                            },
                            {
                                content: `
                <h3>Multithreading & Thread Safety</h3>
                <p>• Servlets handle multiple requests using threads.</p>
                <p>• Shared resources must be synchronized to avoid race conditions.</p>
            `
                            },
                            {
                                content: `
                <h3>Servlet Performance & Optimization</h3>
                <p>• Connection pooling for database access.</p>
                <p>• Efficient resource handling.</p>
                <p>• Proper exception handling & logging.</p>
                <p>• Load balancing in production.</p>
            `
                            },
                            {
                                content: `
                <h3>Advanced Servlet Concepts</h3>
                <p>• Filters – intercept requests/responses.</p>
                <p>• Listeners – track events like session creation.</p>
                <p>• Handling REST APIs & JSON responses.</p>
                <p>• Security – authentication, authorization, HTTPS.</p>
            `
                            }
                        ]

                    },

                    {
                        id: "servlet-api-lifecycle",
                        name: "Servlet API & Lifecycle",

                        beginner: [
                            {
                                content: `
<h2>What is Servlet?</h2>
<p>• A Servlet is a Java class used to handle client requests and generate dynamic web content.</p>
<br>
<h3>Servlet API Packages</h3>
<ul>
<li>• jakarta.servlet</li>
<li>• jakarta.servlet.http</li>
</ul><br>

<h3>Main Interfaces & Classes</h3>
<ul>
<li>• Servlet</li>
<li>• GenericServlet</li>
<li>• HttpServlet</li>
<li>• HttpServletRequest</li>
<li>• HttpServletResponse</li>
<li>• ServletConfig</li>
<li>• ServletContext</li>
</ul><br>

<h2>Servlet Lifecycle Methods</h2>
<ol>
<li><strong>• init()</strong> → Called once when servlet is created</li>
<li><strong>• service()</strong> → Called for each request</li>
<li><strong>• destroy()</strong> → Called once before servlet is removed</li>
</ol>
`
                            },
                            {
                                content: `
<h2>Lifecycle Flow</h2>
<ol>
<li>• Servlet class loaded</li>
<li>• Object created</li>
<li>• init() method called</li>
<li>• service() handles requests</li>
<li>• destroy() called when server stops</li>
</ol>
`,
                                codeExamples: [
                                    `import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class HelloServlet extends HttpServlet {

  public void init() {
    System.out.println("Servlet Initialized");
  }

  protected void doGet(HttpServletRequest request,
                       HttpServletResponse response)
                       throws IOException {
    response.getWriter().println("Hello World");
  }

  public void destroy() {
    System.out.println("Servlet Destroyed");
  }
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>HttpServlet Methods</h2>
<ul>
<li>• doGet()</li>
<li>• doPost()</li>
<li>• doPut()</li>
<li>• doDelete()</li>
<li>• doHead()</li>
</ul>
<p>• service() method internally calls doGet() or doPost() depending on request type.</p>
`
                            },
                            {
                                content: `
<h2>ServletConfig vs ServletContext</h2>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">
<tr>
<th>Feature</th>
<th>ServletConfig</th>
<th>ServletContext</th>
</tr>

<tr>
<td>Scope</td>
<td>Per Servlet</td>
<td>Whole Application</td>
</tr>

<tr>
<td>Initialization Params</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Shared Data</td>
<td>No</td>
<td>Yes</td>
</tr>
</table>
`,
                                codeExamples: [
                                    `// ServletConfig Example
public void init(ServletConfig config) throws ServletException {
   String value = config.getInitParameter("username");
}

// ServletContext Example
ServletContext context = getServletContext();
context.setAttribute("msg", "Hello");`
                                ]
                            },
                            {
                                content: `
<h2>Request & Response Objects</h2>
<ul>
<li>• HttpServletRequest → Used to read client data</li>
<li>• HttpServletResponse → Used to send response to client</li>
</ul><br>

<h3>Common Methods</h3>
<ul>
<li>• request.getParameter()</li>
<li>• request.getSession()</li>
<li>• response.getWriter()</li>
<li>• response.sendRedirect()</li>
</ul>
`,
                                codeExamples: [
                                    `String name = request.getParameter("username");
response.sendRedirect("success.jsp");`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Servlet Lifecycle Deep Explanation</h2>

<h3>1. init()</h3>
<p>• Called only once. Used for resource initialization like DB connection.</p>
<br>
<h3>2. service()</h3>
<p>• Handles multiple requests using multithreading. Not recommended to override directly in HttpServlet.</p>
<br>
<h3>3. destroy()</h3>
<p>• Used for cleanup activities like closing DB connections.</p>
`
                            },
                            {
                                content: `
<h2>Multithreading in Servlet</h2>
<p>• Servlet container creates one instance of servlet but multiple threads handle requests.</p>
<ul>
<li>• Avoid instance variables</li>
<li>• Use local variables inside methods</li>
<li>• Ensure thread safety</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Annotations vs web.xml</h2>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">
<tr>
<th>Feature</th>
<th>Annotation</th>
<th>web.xml</th>
</tr>

<tr>
<td>Configuration</td>
<td>@WebServlet</td>
<td>XML based</td>
</tr>

<tr>
<td>Ease of Use</td>
<td>Easy</td>
<td>More configuration</td>
</tr>

<tr>
<td>Modern Usage</td>
<td>Recommended</td>
<td>Legacy projects</td>
</tr>
</table>
`,
                                codeExamples: [
                                    `import jakarta.servlet.annotation.WebServlet;

@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
   protected void doGet(HttpServletRequest request,
                        HttpServletResponse response)
                        throws IOException {
       response.getWriter().println("Hello");
   }
}`
                                ]
                            },
                            {
                                content: `
<h2>Interview Important Points</h2>
<ul>
<li>• Servlet lifecycle methods order</li>
<li>• Difference between GenericServlet & HttpServlet</li>
<li>• Difference between ServletConfig & ServletContext</li>
<li>• Is Servlet thread-safe?</li>
<li>• How container manages servlet lifecycle?</li>
</ul>
`
                            }
                        ]
                    },




                    //                     {
                    //                         id: "jsp-basics",
                    //                         name: "JSP Basics",
                    //                         beginner: [
                    //                             {
                    //                                 content: `
                    //                 <h3>What is JSP?</h3>
                    //                 <p>• JSP (JavaServer Pages) is a server-side technology used to create dynamic web pages.</p>
                    //                 <p>• Allows embedding Java code directly into HTML.</p>
                    //                 <p>• Runs on a servlet container (like Tomcat) and is compiled into a servlet internally.</p>
                    //             `
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>JSP vs Servlet</h3>
                    //                 <p>• JSP is easier for designing HTML pages with dynamic content.</p>
                    //                 <p>• Servlets are Java classes; JSP is HTML + Java.</p>
                    //                 <p>• JSP is internally converted to servlet by the server.</p>
                    //             `
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>JSP Life Cycle</h3>
                    //                 <p>• Translation – JSP is converted to servlet.</p>
                    //                 <p>• Compilation – Servlet class is compiled.</p>
                    //                 <p>• Initialization – <code>jspInit()</code> method is called.</p>
                    //                 <p>• Execution – <code>_jspService()</code> handles requests.</p>
                    //                 <p>• Destruction – <code>jspDestroy()</code> method is called.</p>
                    //             `
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>JSP Elements</h3>
                    //                 <p>• Scriptlet: <code>&lt;% Java code %&gt;</code></p>
                    //                 <p>• Expression: <code>&lt;%= expression %&gt;</code></p>
                    //                 <p>• Declaration: <code>&lt;%! variable/method %&gt;</code></p>
                    //                 <p>• Directives: <code>&lt;%@ page %&gt;, &lt;%@ include %&gt;, &lt;%@ taglib %&gt;</code></p>
                    //             `
                    //                             }
                    //                         ],

                    //                         intermediate: [
                    //                             {
                    //                                 content: `
                    //                 <h3>JSP Implicit Objects</h3>
                    //                 <p>• <code>request</code> – to get client data.</p>
                    //                 <p>• <code>response</code> – to send data to client.</p>
                    //                 <p>• <code>session</code> – track user session.</p>
                    //                 <p>• <code>application</code> – servlet context object.</p>
                    //                 <p>• <code>out</code> – PrintWriter to send response.</p>
                    //                 <p>• <code>config</code> – servlet config object.</p>
                    //                 <p>• <code>pageContext</code> – encapsulates page attributes.</p>
                    //                 <p>• <code>exception</code> – exception object in error page.</p>
                    //             `
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>JSP Directives</h3>
                    //                 <p>• Page directive – <code>&lt;%@ page language="java" contentType="text/html" %&gt;</code></p>
                    //                 <p>• Include directive – <code>&lt;%@ include file="header.jsp" %&gt;</code></p>
                    //                 <p>• Taglib directive – <code>&lt;%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %&gt;</code></p>
                    //             `
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>JSP Actions</h3>
                    //                 <p>• <code>&lt;jsp:useBean&gt;</code> – instantiate a JavaBean.</p>
                    //                 <p>• <code>&lt;jsp:setProperty&gt;</code> – set bean property.</p>
                    //                 <p>• <code>&lt;jsp:getProperty&gt;</code> – get bean property.</p>
                    //                 <p>• <code>&lt;jsp:include&gt;</code> – include another JSP dynamically.</p>
                    //                 <p>• <code>&lt;jsp:forward&gt;</code> – forward request to another resource.</p>
                    //             `
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>JSP Example</h3>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `<%@ page language="java" contentType="text/html; charset=UTF-8" %>
                    // <html>
                    // <head><title>JSP Example</title></head>
                    // <body>
                    // <%
                    //     String name = request.getParameter("name");
                    //     if (name != null) {
                    // %>
                    //     <h1>Hello, <%= name %>!</h1>
                    // <%
                    //     } else {
                    // %>
                    //     <h1>Hello, Guest!</h1>
                    // <%
                    //     }
                    // %>
                    // </body>
                    // </html>`
                    //                                 ]
                    //                             }
                    //                         ],

                    //                         expert: [
                    //                             {
                    //                                 content: `
                    //                 <h3>Expression Language (EL) Advanced</h3>
                    //                 <p>• Access nested properties: <code>${'user.name'}</code>.</p>
                    //                 <p>• Conditional operator: <code>${'condition ? trueValue : falseValue'}</code>.</p>
                    //                 <p>• Supports arithmetic and logical operations in JSP.</p>
                    //                 <p>• Scopes: pageScope, requestScope, sessionScope, applicationScope.</p>
                    //                 <p>• Best practice: use EL instead of scriptlets for maintainability.</p>
                    //             `
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>JSTL Advanced</h3>
                    //                 <p>• Core tags: <code>c:forEach</code> with varStatus for index, first/last.</p>
                    //                 <p>• Conditional tags: <code>c:if</code>, <code>c:choose / c:when / c:otherwise</code>.</p>
                    //                 <p>• Formatting tags: <code>fmt:formatNumber</code>, <code>fmt:formatDate</code>.</p>
                    //                 <p>• String functions: <code>fn:contains</code>, <code>fn:substring</code>.</p>
                    //                 <p>• Use JSTL + EL instead of Java code in JSP.</p>
                    //             `
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Custom Tag Libraries</h3>
                    //                 <p>• Create reusable components with <code>.tag</code> files or <code>SimpleTagSupport</code> classes.</p>
                    //                 <p>• Encapsulate logic like pagination, tables, menus.</p>
                    //                 <p>• Improves maintainability and reduces duplication.</p>
                    //                 <p>• Keep presentation and business logic separate.</p>
                    //             `
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Error Handling & Exception Management</h3>
                    //                 <p>• Configure error pages: <code>&lt;%@ page errorPage="error.jsp" %&gt;</code>.</p>
                    //                 <p>• Display exceptions carefully: <code>&lt;%= exception %&gt;</code> (avoid sensitive info).</p>
                    //                 <p>• Log errors and show user-friendly messages.</p>
                    //             `
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Performance Optimization</h3>
                    //                 <p>• Minimize scriptlets; use EL and JSTL.</p>
                    //                 <p>• Cache static resources (CSS/JS) and reduce JSP output size.</p>
                    //                 <p>• Include directive (<code>@include</code>) is compile-time, <code>jsp:include</code> is runtime.</p>
                    //                 <p>• Avoid creating objects inside JSP repeatedly; use scoped beans.</p>
                    //             `
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Security Best Practices</h3>
                    //                 <p>• Escape user input with JSTL <code>c:out</code> to prevent XSS.</p>
                    //                 <p>• Avoid exposing sensitive data in JSP.</p>
                    //                 <p>• Use HTTPS and secure cookies for session management.</p>
                    //                 <p>• Validate input server-side, never rely only on client validation.</p>
                    //             `
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Integration with Modern Java Web Apps</h3>
                    //                 <p>• JSP as View in MVC frameworks (Servlet, Spring MVC).</p>
                    //                 <p>• Can serve JSON/XML for AJAX calls via JSP or Servlets.</p>
                    //                 <p>• Combine JSP with JSTL & EL for clean server-side rendering.</p>
                    //                 <p>• Can integrate with frontend frameworks (React/Angular) for hybrid applications.</p>
                    //             `
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Advanced Session & State Management</h3>
                    //                 <p>• Use <code>sessionScope</code> EL to access session variables.</p>
                    //                 <p>• Manage session timeout carefully for security and UX.</p>
                    //                 <p>• Avoid storing large objects in session; use DB or caching layer.</p>
                    //                 <p>• Combine with cookies for persistent login.</p>
                    //             `
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Debugging & Logging</h3>
                    //                 <p>• Use server logs (Tomcat catalina.out) for error tracking.</p>
                    //                 <p>• JSTL <code>c:catch</code> tag can handle exceptions locally.</p>
                    //                 <p>• Remove debug prints in production.</p>
                    //                 <p>• Use logging frameworks (SLF4J, Log4j) for complex apps.</p>
                    //             `
                    //                             }
                    //                         ]
                    //                     },

                    //                     {
                    //                         id: "servlet-architecture",
                    //                         name: "Servlet Architecture",

                    //                         beginner: [
                    //                             {
                    //                                 content: `
                    // <h3>What is Servlet Architecture?</h3>
                    // <p>Servlet Architecture defines how a client request is processed by a web server and handled by a servlet inside a servlet container.</p>
                    // <br>
                    // <h4>Basic Flow:</h4>
                    // <ol>
                    // <li>• Client (Browser) sends HTTP Request</li>
                    // <li>• Web Server receives request</li>
                    // <li>• Servlet Container processes request</li>
                    // <li>• Servlet executes business logic</li>
                    // <li>• Response sent back to client</li>
                    // </ol>
                    // <br>
                    // <h4>Main Components:</h4>
                    // <ul>
                    // <li>• Client (Browser)</li>
                    // <li>• Web Server (Tomcat)</li>
                    // <li>• Servlet Container</li>
                    // <li>• Servlet</li>
                    // </ul>`
                    //                             }
                    //                         ],

                    //                         intermediate: [
                    //                             {
                    //                                 content: `
                    // <h3>Detailed Request Processing Flow</h3>
                    // <ol>
                    // <li>• Browser sends HTTP request.</li>
                    // <li>• Servlet Container checks URL mapping (web.xml or annotations).</li>
                    // <li>• If first request, servlet is loaded and instantiated.</li>
                    // <li>• <b>init()</b> method is called once.</li>
                    // <li>• <b>service()</b> method handles every request.</li>
                    // <li>• service() delegates to doGet(), doPost(), etc.</li>
                    // <li>• Response returned to client.</li>
                    // </ol>
                    // `
                    //                             },
                    //                             {
                    //                                 content: `
                    // <h3>Servlet Lifecycle Methods</h3>
                    // <ul>
                    // <li><b>init()</b> – Called once during initialization.</li>
                    // <li><b>service()</b> – Called for every client request.</li>
                    // <li><b>destroy()</b> – Called once before servlet removal.</li>
                    // </ul>
                    // `,
                    //                                 codeExamples: [
                    //                                     `public class LifeCycleServlet extends HttpServlet {

                    //     public void init() {
                    //         System.out.println("Servlet Initialized");
                    //     }

                    //     protected void doGet(HttpServletRequest request,
                    //                          HttpServletResponse response) {
                    //         System.out.println("Handling Request");
                    //     }

                    //     public void destroy() {
                    //         System.out.println("Servlet Destroyed");
                    //     }
                    // }`
                    //                                 ]
                    //                             },
                    //                             {
                    //                                 content: `
                    // <h3>Request and Response Objects</h3>
                    // <ul>
                    // <li>• HttpServletRequest – Contains client request data.</li>
                    // <li>• HttpServletResponse – Used to send response to client.</li>
                    // <li>• Supports headers, parameters, cookies, sessions.</li>
                    // </ul>
                    // `,
                    //                                 codeExamples: [
                    //                                     `String username = request.getParameter("username");
                    // response.setContentType("text/html");
                    // response.getWriter().println("Welcome " + username);`
                    //                                 ]
                    //                             },
                    //                             {
                    //                                 content: `
                    // <h3>Servlet Configuration</h3>
                    // <p>• Servlets can be configured using:</p>
                    // <ul>
                    // <li>• web.xml (Deployment Descriptor)</li>
                    // <li>• @WebServlet Annotation</li>
                    // </ul>
                    // `,
                    //                                 codeExamples: [
                    //                                     `@WebServlet("/hello")
                    // public class HelloServlet extends HttpServlet {
                    //     protected void doGet(HttpServletRequest req,
                    //                          HttpServletResponse resp) {
                    //         // logic here
                    //     }
                    // }`
                    //                                 ]
                    //                             },
                    //                             {
                    //                                 content: `
                    // <h3>Multithreading Model</h3>
                    // <p>• Servlet container creates only ONE servlet instance but handles multiple requests using separate threads.</p>
                    // <p>• Developers must avoid using instance variables for request-specific data.</p>

                    // <h4>Thread Safety Rules:</h4>
                    // <ul>
                    // <li>• Avoid instance variables</li>
                    // <li>• Use local variables inside methods</li>
                    // <li>• Synchronize only when required</li>
                    // </ul>
                    // `
                    //                             }
                    //                         ],

                    //                         expert: [
                    //                             {
                    //                                 content: `
                    // <h3>Internal Servlet Container Architecture (Tomcat)</h3>

                    // <p>Tomcat Internal Flow:</p>
                    // <ol>
                    // <li>• Client Request hits HTTP Connector</li>
                    // <li>• Connector passes request to Engine</li>
                    // <li>• Engine selects Host (Virtual Host)</li>
                    // <li>• Host selects Context (Web Application)</li>
                    // <li>• Servlet Mapping identifies correct servlet</li>
                    // <li>• Filter Chain executes</li>
                    // <li>• Target Servlet executes</li>
                    // <li>• Response returned via same chain</li>
                    // </ol>
                    // `
                    //                             },
                    //                             {
                    //                                 content: `
                    // <h3>Filter Chain Mechanism</h3>
                    // <p>Filters act as pre-processing and post-processing units.</p>

                    // <p>Execution Order:</p>
                    // <p>Client → Filter1 → Filter2 → Servlet → Filter2 → Filter1 → Client</p>
                    // `,
                    //                                 codeExamples: [
                    //                                     `@WebFilter("/*")
                    // public class LoggingFilter implements Filter {

                    //     public void doFilter(ServletRequest request,
                    //                          ServletResponse response,
                    //                          FilterChain chain)
                    //             throws IOException, ServletException {

                    //         System.out.println("Before Servlet");
                    //         chain.doFilter(request, response);
                    //         System.out.println("After Servlet");
                    //     }
                    // }`
                    //                                 ]
                    //                             },
                    //                             {
                    //                                 content: `
                    // <h3>Listeners in Architecture</h3>
                    // <ul>
                    // <li>• ServletContextListener – Application lifecycle monitoring</li>
                    // <li>• HttpSessionListener – Session lifecycle tracking</li>
                    // <li>• ServletRequestListener – Request lifecycle monitoring</li>
                    // </ul>
                    // `,
                    //                                 codeExamples: [
                    //                                     `@WebListener
                    // public class AppListener implements ServletContextListener {

                    //     public void contextInitialized(ServletContextEvent sce) {
                    //         System.out.println("Application Started");
                    //     }

                    //     public void contextDestroyed(ServletContextEvent sce) {
                    //         System.out.println("Application Stopped");
                    //     }
                    // }`
                    //                                 ]
                    //                             },
                    //                             {
                    //                                 content: `
                    // <h3>Enterprise Layered Architecture</h3>
                    // <p>• Large-scale applications follow layered architecture:</p>

                    // <ul>
                    // <li>• Presentation Layer (JSP/HTML)</li>
                    // <li>• Controller Layer (Servlet)</li>
                    // <li>• Service Layer (Business Logic)</li>
                    // <li>• DAO Layer (Database Logic)</li>
                    // <li>• Database</li>
                    // </ul>
                    // `
                    //                             },
                    //                             {
                    //                                 content: `
                    // <h3>Performance & Scalability</h3>
                    // <ul>
                    // <li>• Thread Pool Management</li>
                    // <li>• Connection Pooling (HikariCP, DBCP)</li>
                    // <li>• Load Balancing</li>
                    // <li>• Clustering & Session Replication</li>
                    // <li>• Caching Mechanisms</li>
                    // </ul>
                    // `
                    //                             },
                    //                             {
                    //                                 content: `
                    // <h3>Security Architecture</h3>
                    // <ul>
                    // <li>• Authentication (Form-based, Basic, OAuth)</li>
                    // <li>• Authorization (Role-based access control)</li>
                    // <li>• HTTPS Configuration</li>
                    // <li>• Input Validation</li>
                    // <li>• Preventing XSS & CSRF</li>
                    // </ul>
                    // `
                    //                             },
                    //                             {
                    //                                 content: `
                    // <h3>Asynchronous Processing (Servlet 3.0+)</h3>
                    // <p>Servlet supports async processing for long-running tasks without blocking request threads.</p>
                    // `,
                    //                                 codeExamples: [
                    //                                     `@WebServlet(urlPatterns="/async", asyncSupported=true)
                    // public class AsyncServlet extends HttpServlet {

                    //     protected void doGet(HttpServletRequest req,
                    //                          HttpServletResponse resp) {
                    //         AsyncContext asyncContext = req.startAsync();
                    //         asyncContext.start(() -> {
                    //             try {
                    //                 Thread.sleep(3000);
                    //                 asyncContext.getResponse()
                    //                     .getWriter()
                    //                     .write("Async Processing Done");
                    //                 asyncContext.complete();
                    //             } catch (Exception e) { }
                    //         });
                    //     }
                    // }`
                    //                                 ]
                    //                             }
                    //                         ]
                    //                     },

                    //                     {
                    //                         id: "servlet-lifecycle",
                    //                         name: "Servlet Lifecycle",

                    //                         beginner: [
                    //                             {
                    //                                 content: `
                    //                 <p>A <strong>Servlet</strong> is a Java program that runs on a web server and handles HTTP requests/responses.</p>
                    //                 <p>The <strong>Servlet lifecycle</strong> defines the stages a Servlet goes through from creation to destruction:</p>
                    //                 <ul>
                    //                     <li><strong>• Loading and Instantiation:</strong> Servlet class is loaded and an instance is created.</li>
                    //                     <li><strong>• Initialization (init()):</strong> Called once to initialize resources.</li>
                    //                     <li><strong>• Request Handling (service()):</strong> Called for every request. Delegates to doGet()/doPost().</li>
                    //                     <li><strong>• Destruction (destroy()):</strong> Called once before removing the servlet, for cleanup.</li>
                    //                 </ul>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `public void init() throws ServletException {
                    //     // initialization code
                    // }`,
                    //                                     `public void service(HttpServletRequest req, HttpServletResponse res)
                    //     throws ServletException, IOException {
                    //     // handle request
                    // }`,
                    //                                     `public void destroy() {
                    //     // cleanup code
                    // }`
                    //                                 ]
                    //                             }
                    //                         ],

                    //                         intermediate: [
                    //                             {
                    //                                 content: `
                    //                 <p>Servlet lifecycle detailed view:</p>
                    //                 <table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">
                    //                     <tr><th>Stage</th><th>Who triggers it</th><th>Purpose</th></tr>
                    //                     <tr><td>Loading & Instantiation</td><td>Container</td><td>Load class & create object (once)</td></tr>
                    //                     <tr><td>init()</td><td>Container</td><td>Initialize servlet resources</td></tr>
                    //                     <tr><td>service()</td><td>Container per request</td><td>Handle client requests (calls doGet/doPost)</td></tr>
                    //                     <tr><td>destroy()</td><td>Container</td><td>Cleanup resources before removal</td></tr>
                    //                 </table>
                    //                 <p><strong>Notes:</strong></p>
                    //                 <ul>
                    //                     <li>• Servlet objects are singletons by default.</li>
                    //                     <li>• Multiple threads can access service() concurrently.</li>
                    //                     <li>• init() can be called with or without ServletConfig parameter.</li>
                    //                 </ul>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `public class HelloServlet extends HttpServlet {
                    //     public void init() throws ServletException {
                    //         System.out.println("Servlet initialized");
                    //     }

                    //     public void doGet(HttpServletRequest request, HttpServletResponse response)
                    //         throws ServletException, IOException {
                    //         response.setContentType("text/html");
                    //         PrintWriter out = response.getWriter();
                    //         out.println("<h1>Hello Servlet Lifecycle!</h1>");
                    //     }

                    //     public void destroy() {
                    //         System.out.println("Servlet destroyed");
                    //     }
                    // }`
                    //                                 ]
                    //                             }
                    //                         ],

                    //                         expert: [
                    //                             {
                    //                                 content: `
                    //                 <p>Advanced Servlet Lifecycle Concepts:</p>
                    //                 <ul>
                    //                     <li><strong>• Lazy vs Eager Loading:</strong> By default, servlet loads on first request. Use <code>&lt;load-on-startup&gt;</code> for eager loading.</li>
                    //                     <li><strong>• ServletConfig vs ServletContext:</strong> Config = servlet-specific, Context = shared across app.</li>
                    //                     <li><strong>• Thread Safety:</strong> Avoid instance variables or synchronize them.</li>
                    //                     <li><strong>• Lifecycle Call Sequence:</strong> Class Loading → Instantiation → init() → service() [many times] → destroy() → Garbage Collection</li>
                    //                 </ul><br>
                    //                 <p>Interview Tips:</p>
                    //                 <ul>
                    //                     <li>• init() is called once before first request.</li>
                    //                     <li>• service() can handle multiple requests concurrently.</li>
                    //                     <li>• destroy() is for cleanup; garbage collection is automatic.</li>
                    //                     <li>• Use &lt;load-on-startup&gt; to load servlet at server startup.</li>
                    //                 </ul>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `<servlet>
                    //     <servlet-name>HelloServlet</servlet-name>
                    //     <servlet-class>HelloServlet</servlet-class>
                    //     <load-on-startup>1</load-on-startup>
                    // </servlet>`
                    //                                 ]
                    //                             }
                    //                         ]
                    //                     },

                    //                     {
                    //                         id: 'session-management',
                    //                         name: 'Session Management',

                    //                         beginner: [
                    //                             {
                    //                                 content: `
                    //                 <h3>What is a Session?</h3>
                    //                 <p>• A session is a way to store user data across multiple requests.</p>
                    //                 <p>• Sessions are used to track logged-in users, preferences, or temporary data.</p>
                    //                 <p>• Typically, sessions are implemented using <code>HttpSession</code> in Java.</p>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `<%
                    //     HttpSession session = request.getSession();
                    //     session.setAttribute("user", "Ashish");
                    //     out.println("Session created for user: " + session.getAttribute("user"));
                    // %>`
                    //                                 ]
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Creating a Session</h3>
                    //                 <p>• Use <code>request.getSession()</code> to create or get an existing session.</p>
                    //                 <p>• Sessions have unique IDs assigned by the server.</p>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `<%
                    //     HttpSession session = request.getSession(); // creates new session if not exists
                    //     out.println("Session ID: " + session.getId());
                    // %>`
                    //                                 ]
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Storing and Retrieving Session Data</h3>
                    //                 <p>• Use <code>session.setAttribute(name, value)</code> to store data.</p>
                    //                 <p>• Use <code>session.getAttribute(name)</code> to retrieve data.</p>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `<%
                    //     session.setAttribute("role", "admin");
                    //     String role = (String) session.getAttribute("role");
                    //     out.println("User Role: " + role);
                    // %>`
                    //                                 ]
                    //                             }
                    //                         ],

                    //                         intermediate: [
                    //                             {
                    //                                 content: `
                    //                 <h3>Session Timeout</h3>
                    //                 <p>• Sessions expire after a period of inactivity.</p>
                    //                 <p>• Set timeout in web.xml or using <code>session.setMaxInactiveInterval(seconds)</code>.</p>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `<%
                    //     session.setMaxInactiveInterval(300); // 5 minutes
                    //     out.println("Session will expire in 5 minutes of inactivity.");
                    // %>`
                    //                                 ]
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Invalidating a Session</h3>
                    //                 <p>• Use <code>session.invalidate()</code> to log out a user or clear session data.</p>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `<%
                    //     session.invalidate();
                    //     out.println("Session invalidated. User logged out.");
                    // %>`
                    //                                 ]
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Session Tracking Techniques</h3>
                    //                 <p>• Cookies: Server sends session ID as a cookie.</p>
                    //                 <p>• URL Rewriting: Append session ID to URL if cookies are disabled.</p>
                    //                 <p>• Hidden Form Fields: Store session ID in form data.</p>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `<%
                    //     // URL Rewriting example
                    //     String url = response.encodeURL("profile.jsp");
                    //     out.println("<a href='" + url + "'>Go to Profile</a>");
                    // %>`
                    //                                 ]
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Session Example – Login Simulation</h3>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `<%
                    //     String username = request.getParameter("username");
                    //     if(username != null){
                    //         session.setAttribute("username", username);
                    //         out.println("Welcome, " + session.getAttribute("username"));
                    //     } else {
                    //         out.println("Please provide username in query string.");
                    //     }
                    // %>`
                    //                                 ]
                    //                             }
                    //                         ],

                    //                         expert: [
                    //                             {
                    //                                 content: `
                    //                 <h3>Advanced Session Management</h3>
                    //                 <p>• Store minimal data in session to avoid memory issues.</p>
                    //                 <p>• Use session attributes carefully in multi-threaded requests.</p>
                    //                 <p>• Consider using a distributed cache (Redis, Memcached) for clustered applications.</p>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `<%
                    //     // Example: Storing a list in session
                    //     List<String> cart = (List<String>) session.getAttribute("cart");
                    //     if(cart == null){
                    //         cart = new ArrayList<>();
                    //     }
                    //     cart.add("Item1");
                    //     session.setAttribute("cart", cart);
                    //     out.println("Cart items: " + session.getAttribute("cart"));
                    // %>`
                    //                                 ]
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Session Security Best Practices</h3>
                    //                 <p>• Use HTTPS to prevent session hijacking.</p>
                    //                 <p>• Regenerate session ID after login using <code>request.getSession(true)</code>.</p>
                    //                 <p>• Set HttpOnly and Secure flags on session cookies.</p>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `<%
                    //     // Force new session after login
                    //     HttpSession oldSession = request.getSession(false);
                    //     if(oldSession != null){
                    //         oldSession.invalidate();
                    //     }
                    //     HttpSession newSession = request.getSession(true);
                    //     newSession.setAttribute("username", "Ashish");
                    //     out.println("New session created with ID: " + newSession.getId());
                    // %>`
                    //                                 ]
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Session Listener Example</h3>
                    //                 <p>• Use <code>HttpSessionListener</code> to track session creation and destruction.</p>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `// Java class implementing listener
                    // import jakarta.servlet.http.*;

                    // public class MySessionListener implements HttpSessionListener {
                    //     public void sessionCreated(HttpSessionEvent se) {
                    //         System.out.println("Session Created: " + se.getSession().getId());
                    //     }
                    //     public void sessionDestroyed(HttpSessionEvent se) {
                    //         System.out.println("Session Destroyed: " + se.getSession().getId());
                    //     }
                    // }`
                    //                                 ]
                    //                             },
                    //                             {
                    //                                 content: `
                    //                 <h3>Distributed Session Management</h3>
                    //                 <p>• In clustered applications, sessions can be shared across servers.</p>
                    //                 <p>• Use session replication or external stores (Redis) for high availability.</p>
                    //             `,
                    //                                 codeExamples: [
                    //                                     `<%
                    //     // Example using Redis (pseudo-code)
                    //     // redis.set(session.getId(), session.getAttribute("username"));
                    // %>`
                    //                                 ]
                    //                             }
                    //                         ]
                    //                     },

                ]
            },

            {
                id: 'servletlifecycle',
                name: 'Servlet Lifecycle',
                topics: [
                    {
                        id: "servlet-loading-instantiation",
                        name: "Servlet Loading & Instantiation",

                        beginner: [
                            {
                                content: `
<h2>What is Loading?</h2>
<p>• Loading means the servlet class is loaded into memory by the servlet container.</p>
<br>
<h2>What is Instantiation?</h2>
<p>• Instantiation means creating the object of the servlet class.</p>
<br>
<h3>Simple Flow</h3>
<ol>
<li>• Class Loaded</li>
<li>• Object Created</li>
<li>• init() Called</li>
</ol>
`,
                                codeExamples: [
                                    `import jakarta.servlet.http.*;
import jakarta.servlet.*;

public class DemoServlet extends HttpServlet {

    // Constructor → Called at Instantiation time
    public DemoServlet() {
        System.out.println("Servlet Object Created (Instantiation)");
    }

    @Override
    public void init() throws ServletException {
        System.out.println("Servlet Initialized (init method called)");
    }


    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) {
        System.out.println("Service method executed");
    }
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Loading on First Request (Default Behavior)</h2>
<p>• By default, servlet loads when the first request comes.</p><br>

<h2>Loading at Server Startup</h2>
<p>• Use <strong>load-on-startup</strong> in web.xml to load servlet during server startup.</p>
`,
                                codeExamples: [
                                    `<!-- web.xml Configuration -->
<servlet>
  <servlet-name>DemoServlet</servlet-name>
  <servlet-class>com.example.DemoServlet</servlet-class>
  <load-on-startup>1</load-on-startup>
</servlet>

<servlet-mapping>
  <servlet-name>DemoServlet</servlet-name>
  <url-pattern>/demo</url-pattern>
</servlet-mapping>`
                                ]
                            },
                            {
                                content: `
<h2>Annotation-Based Loading</h2>
<p>• Modern way using @WebServlet annotation.</p>
`,
                                codeExamples: [
                                    `import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

@WebServlet(urlPatterns="/demo", loadOnStartup=1)
public class DemoServlet extends HttpServlet {

    @Override
    public void init() {
        System.out.println("Loaded at server startup using annotation");
    }
}`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Deep Internal Working with Logging</h2>
<p>• This example shows exact order of execution.</p>
`,
                                codeExamples: [
                                    `import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;

@WebServlet(urlPatterns="/life", loadOnStartup=1)
public class LifeCycleServlet extends HttpServlet {

    static {
        System.out.println("1. Class Loaded into Memory");
    }

    public LifeCycleServlet() {
        System.out.println("2. Servlet Object Instantiated");
    }

    @Override
    public void init() throws ServletException {
        System.out.println("3. init() method called");
    }

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
                         throws IOException {
        System.out.println("4. service() -> doGet() called");
        response.getWriter().println("Check server console for lifecycle flow");
    }

    @Override
    public void destroy() {
        System.out.println("5. destroy() method called");
    }
}`
                                ]
                            },
                            {
                                content: `
<h2>Expected Console Output Order</h2>
<pre>
1. Class Loaded into Memory
2. Servlet Object Instantiated
3. init() method called
4. service() -> doGet() called
5. destroy() method called (when server stops)
</pre><br>

<h2>Important Expert Notes</h2>
<ul>
<li>• Class loading happens only once per classloader.</li>
<li>• Only one servlet instance is created.</li>
<li>• Multiple requests are handled using multiple threads.</li>
<li>• Use loadOnStartup for heavy initialization tasks.</li>
</ul>
`
                            }
                        ]
                    },

                    {
                        id: "servlet-init-method",
                        name: "Servlet init() Method",

                        beginner: [
                            {
                                content: `
<h2>What is init() Method?</h2>
<p>• The <strong>init()</strong> method is a lifecycle method of a servlet.</p>

<ul>
<li>• It is called only once.</li>
<li>• It is called when the servlet is first loaded.</li>
<li>• Used for initialization tasks.</li>
</ul><br>

<h3>Why We Use init()?</h3>
<ul>
<li>• Initialize database connection</li>
<li>• Load configuration file</li>
<li>• Initialize variables</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Basic Example of init()</h2>
<p>• This example shows init() method execution.</p>
`,
                                codeExamples: [
                                    `import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;

public class InitExample extends HttpServlet {

    @Override
    public void init() throws ServletException {
        System.out.println("Servlet Initialized - init() called");
    }

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
                         throws IOException {
        response.getWriter().println("Hello from Servlet");
    }
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>init() with ServletConfig</h2>
<p>• init() can receive ServletConfig object to read initialization parameters.</p>

<h3>Method Signature</h3>
<pre>• public void init(ServletConfig config)</pre>
`
                            },
                            {
                                content: `
<h2>Using init parameters from web.xml</h2>
<p>• We can configure parameters inside web.xml and read them inside init().</p>
`,
                                codeExamples: [
                                    `<!-- web.xml -->
<servlet>
  <servlet-name>ConfigServlet</servlet-name>
  <servlet-class>com.example.ConfigServlet</servlet-class>

  <init-param>
    <param-name>username</param-name>
    <param-value>admin</param-value>
  </init-param>
</servlet>`,

                                    `// Servlet Code
public class ConfigServlet extends HttpServlet {

    private String username;

    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        username = config.getInitParameter("username");
        System.out.println("Username: " + username);
    }
}`
                                ]
                            },
                            {
                                content: `
<h2>Key Points</h2>
<ul>
<li>• Called only once per servlet lifecycle</li>
<li>• Executed before service()</li>
<li>• If init() throws exception → servlet will not serve requests</li>
</ul>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Internal Working of init()</h2>
<ol>
<li>• Servlet class is loaded</li>
<li>• Servlet object created</li>
<li>• Container calls init()</li>
<li>• Servlet becomes ready to handle requests</li>
</ol><br>

<h3>Important:</h3>
<p>• If init() fails, the servlet is marked as unavailable.</p>
`
                            },
                            {
                                content: `
<h2>Real-World Example (Database Initialization)</h2>
<p>Common expert-level use case: initialize DB connection pool in init().</p>
`,
                                codeExamples: [
                                    `import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;

public class DBServlet extends HttpServlet {

    private Connection conn;

    @Override
    public void init() throws ServletException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/test",
                "root",
                "password"
            );
            System.out.println("Database Connected in init()");
        } catch (Exception e) {
            throw new ServletException("DB Connection Failed", e);
        }
    }

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
                         throws IOException {
        response.getWriter().println("Database Initialized");
    }

    @Override
    public void destroy() {
        try {
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
                                ]
                            },
                            {
                                content: `
<h2>Interview Important Points</h2>
<ul>
<li>• init() is called only once.</li>
<li>• Difference between init() and constructor?</li>
<li>• What happens if init() throws exception?</li>
<li>• Can we override both init() methods?</li>
<li>• When should heavy resources be initialized?</li>
</ul>

<h3>Constructor vs init()</h3>
<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">

<tr>
<th>Constructor</th>
<th>init()</th>
</tr>
<tr>
<td>Called during object creation</td>
<td>Called by container after object creation</td>
</tr>
<tr>
<td>No ServletConfig available</td>
<td>ServletConfig available</td>
</tr>
<tr>
<td>Not recommended for heavy logic</td>
<td>Best place for initialization logic</td>
</tr>
</table>
`
                            }
                        ]
                    },

                    {
                        id: "servlet-service-method",
                        name: "Servlet service() Method",

                        beginner: [
                            {
                                content: `
<h2>What is service() Method?</h2>
<p>• The <strong>service()</strong> method is a lifecycle method of a servlet.</p>
<ul>
<li>• It is called for every client request.</li>
<li>• It processes the request and sends response.</li>
<li>• After init(), service() handles all requests.</li>
</ul><br>

<h3>Simple Lifecycle Order</h3>
<ol>
<li>• Servlet Loaded</li>
<li>• init() called (once)</li>
<li>• service() called (for every request)</li>
<li>• destroy() called</li>
</ol>
`
                            },
                            {
                                content: `
<h2>Basic Example</h2>
<p>• In HttpServlet, we usually override doGet() or doPost().</p>
<p>• Internally, service() calls doGet() or doPost().</p>
`,
                                codeExamples: [
                                    `import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;

public class ServiceExample extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
                         throws IOException {
        response.getWriter().println("Handled by doGet()");
    }
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>How service() Works Internally</h2>

<p>In HttpServlet:</p>
<ul>
<li>• service() checks HTTP method (GET, POST, etc.)</li>
<li>• Calls respective method: doGet(), doPost(), etc.</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Overriding service() Method</h2>
<p>• We can override service() directly, but it is not recommended in HttpServlet.</p>
`,
                                codeExamples: [
                                    `import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;

public class CustomServiceServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest request,
                           HttpServletResponse response)
                           throws ServletException, IOException {

        response.getWriter().println("Custom service() executed");
    }
}`
                                ]
                            },
                            {
                                content: `
<h2>GenericServlet service() Signature</h2>
<pre>
public void service(ServletRequest req, ServletResponse res)
</pre>

<p>In GenericServlet, we must override service().</p>
`,
                                codeExamples: [
                                    `import jakarta.servlet.*;
import java.io.IOException;

public class GenericExample extends GenericServlet {

    @Override
    public void service(ServletRequest req,
                        ServletResponse res)
                        throws ServletException, IOException {

        res.getWriter().println("Handled by GenericServlet service()");
    }
}`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Internal Flow of service() in HttpServlet</h2>

<ol>
<li>• Client sends HTTP request</li>
<li>• Container creates request & response objects</li>
<li>• service() method is invoked</li>
<li>• service() checks request.getMethod()</li>
<li>• Calls doGet(), doPost(), etc.</li>
<li>• Response sent back to client</li>
</ol>
<p><strong>Important:</strong> service() runs on multiple threads.</p>
`
                            },
                            {
                                content: `
<h2>Threading Model</h2>
<ul>
<li>• Single servlet instance</li>
<li>• Multiple threads call service()</li>
<li>• Must avoid shared mutable instance variables</li>
</ul>
`,
                                codeExamples: [
                                    `public class ThreadExample extends HttpServlet {

    private int counter = 0; // NOT thread-safe

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
                         throws IOException {

        counter++; // Multiple threads may cause issue
        response.getWriter().println("Counter: " + counter);
    }
}`
                                ]
                            },
                            {
                                content: `
<h2>Best Practice</h2>
<ul>
<li>• Do not override service() in HttpServlet unless necessary</li>
<li>• Override doGet(), doPost(), etc.</li>
<li>• Use local variables inside methods</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Interview Important Questions</h2>
<ul>
<li>• What is service() method?</li>
<li>• Difference between service() in GenericServlet and HttpServlet?</li>
<li>• Can we override service()?</li>
<li>• How does service() decide which method to call?</li>
<li>• Is service() thread-safe?</li>
</ul><br>

<h3>Tricky Question</h3>
<p>Q: What happens if we override service() in HttpServlet?</p>
<p>A: doGet() and doPost() will NOT be called automatically unless explicitly invoked inside service().</p>
`
                            }
                        ]
                    },

                    {
                        id: "servlet-destroy-method",
                        name: "Servlet destroy() Method",

                        beginner: [
                            {
                                content: `
<h2>What is destroy() Method?</h2>
<p>• The <strong>destroy()</strong> method is a lifecycle method of a servlet.</p>

<ul>
<li>• It is called only once.</li>
<li>• Called before the servlet is removed from memory.</li>
<li>• Used for cleanup activities.</li>
</ul><br>

<h3>When is destroy() Called?</h3>
<ul>
<li>• When server is shutting down</li>
<li>• When servlet is reloaded</li>
<li>• When application is undeployed</li>
</ul><br>

<h3>Lifecycle Order</h3>
<ol>
<li>• init() → called once</li>
<li>• service() → called multiple times</li>
<li>• destroy() → called once</li>
</ol>
`
                            },
                            {
                                content: `
<h2>Basic Example</h2>
<p>• This example shows destroy() execution.</p>
`,
                                codeExamples: [
                                    `import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;

public class DestroyExample extends HttpServlet {

    @Override
    public void init() {
        System.out.println("Servlet Initialized");
    }

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
                         throws IOException {
        response.getWriter().println("Hello User");
    }

    @Override
    public void destroy() {
        System.out.println("Servlet Destroyed - Cleanup Done");
    }
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Why destroy() is Important?</h2>
<p>• It is used to release resources created during init().</p><br>

<h3>Common Cleanup Tasks</h3>
<ul>
<li>• Close database connection</li>
<li>• Close file streams</li>
<li>• Stop background threads</li>
<li>• Release memory resources</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Real Example: Closing Database Connection</h2>
`,
                                codeExamples: [
                                    `import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;

public class DBServlet extends HttpServlet {

    private Connection conn;

    @Override
    public void init() throws ServletException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/test",
                "root",
                "password"
            );
            System.out.println("DB Connected");
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }

    @Override
    public void destroy() {
        try {
            if (conn != null) {
                conn.close();
                System.out.println("DB Connection Closed");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
                                ]
                            },
                            {
                                content: `
<h2>Important Notes</h2>
<ul>
<li>• destroy() is called only once.</li>
<li>• After destroy(), servlet becomes eligible for garbage collection.</li>
<li>• No new requests are processed after destroy() starts.</li>
</ul>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Internal Working of destroy()</h2>

<ol>
<li>• Container stops accepting new requests.</li>
<li>• Waits for current requests to complete.</li>
<li>• Calls destroy() method.</li>
<li>• Removes servlet instance from memory.</li>
</ol>

<p><strong>Important:</strong> destroy() runs in single thread by container.</p>
`
                            },
                            {
                                content: `
<h2>Handling Long Running Tasks</h2>
<p>• If servlet starts background threads, they must be stopped inside destroy().</p>
`,
                                codeExamples: [
                                    `public class BackgroundServlet extends HttpServlet {

    private Thread worker;
    private boolean running = true;

    @Override
    public void init() {
        worker = new Thread(() -> {
            while (running) {
                System.out.println("Running background task...");
                try { Thread.sleep(5000); } catch (Exception e) {}
            }
        });
        worker.start();
    }

    @Override
    public void destroy() {
        running = false;   // Stop thread
        worker.interrupt();
        System.out.println("Background thread stopped");
    }
}`
                                ]
                            },
                            {
                                content: `
<h2>Interview Important Questions</h2>
<ul>
<li>• When is destroy() called?</li>
<li>• Is destroy() called for every request?</li>
<li>• What happens if destroy() throws exception?</li>
<li>• Difference between finalize() and destroy()?</li>
<li>• Can destroy() be called multiple times?</li>
</ul><br>

<h3>destroy() vs finalize()</h3><br>
<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">

<tr>
<th>destroy()</th>
<th>finalize()</th>
</tr>
<tr>
<td>Called by servlet container</td>
<td>Called by Garbage Collector</td>
</tr>
<tr>
<td>Used for resource cleanup</td>
<td>Used before object GC</td>
</tr>
<tr>
<td>Predictable execution</td>
<td>Not guaranteed execution time</td>
</tr>
</table>
`
                            }
                        ]
                    },

                    {
                        id: "servlet-doget-dopost",
                        name: "doGet() and doPost() Methods",

                        beginner: [
                            {
                                content: `
<h2>What is doGet()?</h2>
<p><strong>doGet()</strong> handles HTTP GET requests.</p>
<ul>
<li>• Data is sent in URL</li>
<li>• Used for fetching data</li>
<li>• Data is visible in browser</li>
<li>• Limited data size</li>
</ul><br>

<h2>What is doPost()?</h2>
<p><strong>doPost()</strong> handles HTTP POST requests.</p>
<ul>
<li>• Data is sent in request body</li>
<li>• Used for submitting form data</li>
<li>• Data is not visible in URL</li>
<li>• No size limitation (practically large)</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Basic Example of doGet()</h2>
`,
                                codeExamples: [
                                    `import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;

public class GetExample extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
                         throws IOException {

        String name = request.getParameter("name");
        response.getWriter().println("Hello " + name);
    }
}`
                                ]
                            },
                            {
                                content: `
<h2>Basic Example of doPost()</h2>
`,
                                codeExamples: [
                                    `public class PostExample extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws IOException {

        String username = request.getParameter("username");
        response.getWriter().println("Welcome " + username);
    }
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Difference Between doGet() and doPost()</h2><br>
<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">

<tr>
<th>Feature</th>
<th>doGet()</th>
<th>doPost()</th>
</tr>
<tr>
<td>Data Location</td>
<td>URL</td>
<td>Request Body</td>
</tr>
<tr>
<td>Security</td>
<td>Less Secure</td>
<td>More Secure</td>
</tr>
<tr>
<td>Data Size</td>
<td>Limited</td>
<td>Large</td>
</tr>
<tr>
<td>Usage</td>
<td>Fetch Data</td>
<td>Submit Data</td>
</tr>
<tr>
<td>Bookmarkable</td>
<td>Yes</td>
<td>No</td>
</tr>
</table>
`
                            },
                            {
                                content: `
<h2>HTML Form Example</h2>
`,
                                codeExamples: [
                                    `<!-- GET Form -->
<form action="GetExample" method="get">
  Name: <input type="text" name="name">
  <input type="submit">
</form>`,

                                    `<!-- POST Form -->
<form action="PostExample" method="post">
  Username: <input type="text" name="username">
  <input type="submit">
</form>`
                                ]
                            },
                            {
                                content: `
<h2>How service() Calls doGet() / doPost()</h2>
<p>The service() method checks the HTTP method type:</p>
<ul>
<li>• If method = GET → calls doGet()</li>
<li>• If method = POST → calls doPost()</li>
</ul>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Internal Flow</h2>
<ol>
<li>• Client sends HTTP request</li>
<li>• Container creates HttpServletRequest & HttpServletResponse</li>
<li>• service() method invoked</li>
<li>• Based on request.getMethod(), doGet() or doPost() executed</li>
</ol>
`
                            },
                            {
                                content: `
<h2>Handling Both GET and POST in Single Logic</h2>
<p>Best practice: Call common method from both doGet() and doPost()</p>
`,
                                codeExamples: [
                                    `public class CommonServlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request,
                                  HttpServletResponse response)
                                  throws IOException {

        String data = request.getParameter("data");
        response.getWriter().println("Received: " + data);
    }

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
                         throws IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws IOException {
        processRequest(request, response);
    }
}`
                                ]
                            },
                            {
                                content: `
<h2>Security Best Practices</h2>
<ul>
<li>• Use POST for sensitive data (passwords)</li>
<li>• Use HTTPS for secure communication</li>
<li>• Validate all request parameters</li>
<li>• Prevent SQL Injection</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Interview Important Questions</h2>
<ul>
<li>Difference between doGet() and doPost()?</li>
<li>Which is more secure?</li>
<li>Can doGet() call doPost()?</li>
<li>What happens if doPost() is not implemented?</li>
<li>Why POST is not bookmarkable?</li>
</ul><br>

<h3>Tricky Question</h3>
<p>Q: If we type URL manually in browser, which method is called?</p>
<p>A: doGet() is called.</p>
`
                            }
                        ]
                    },

                ]
            },

            {
                id: 'Handling-Requests-Responses',
                name: 'Handling Requests & Responses',
                topics: [

                    {
                        id: "http-servlet-response",
                        name: "HttpServletResponse",

                        beginner: [
                            {
                                content: `
<h2>What is HttpServletResponse?</h2>
<p><strong>• HttpServletResponse</strong> is used to send data from server to browser.</p>
<ul>
<li>• Sends text or HTML</li>
<li>• Used inside doGet() or doPost()</li>
<li>• Works with HttpServletRequest</li>
</ul><br>

<h3>Basic Example</h3>
<p>• Sending simple text response:</p>
`,
                                codeExamples: [
                                    `protected void doGet(HttpServletRequest request,
                     HttpServletResponse response)
                     throws IOException {

    PrintWriter out = response.getWriter();
    out.println("Hello User");
}`
                                ]
                            },
                            {
                                content: `
<h2>Sending HTML Response</h2>
<p>• Always set content type before sending HTML.</p>
`,
                                codeExamples: [
                                    `response.setContentType("text/html");

PrintWriter out = response.getWriter();
out.println("<h1>Welcome</h1>");`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Setting Content Type</h2>
<p>• Content type tells browser what type of data is being sent.</p>
<ul>
<li>• text/html → HTML page</li>
<li>• text/plain → Normal text</li>
<li>• application/json → JSON data</li>
<li>• application/xml → XML data</li>
</ul>
`,
                                codeExamples: [
                                    `response.setContentType("application/json");
response.getWriter().write("{\"status\":\"success\"}");`
                                ]
                            },
                            {
                                content: `
<h2>sendRedirect()</h2>
<p>• Redirects the browser to another page.</p>
<ul>
<li>• URL changes</li>
<li>• New request is created</li>
<li>• Client-side redirection</li>
</ul>
`,
                                codeExamples: [
                                    `response.sendRedirect("login.jsp");`
                                ]
                            },
                            {
                                content: `
<h2>Setting Status Codes</h2>
<p>• We can send HTTP status codes manually.</p>
`,
                                codeExamples: [
                                    `response.setStatus(HttpServletResponse.SC_OK);        // 200
response.setStatus(HttpServletResponse.SC_NOT_FOUND); // 404`
                                ]
                            },
                            {
                                content: `
<h2>Adding Cookies</h2>
<p>• Used for session tracking.</p>
`,
                                codeExamples: [
                                    `Cookie cookie = new Cookie("user", "Ashish");
cookie.setMaxAge(60*60);
response.addCookie(cookie);`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Response Buffering & Commit (Advanced)</h2>
<ul>
<li>• Response is first stored in buffer</li>
<li>• When buffer is full → response is committed</li>
<li>• After commit → cannot redirect or forward</li>
</ul>
<p><strong>• Committed response means headers are already sent to client.</strong></p>
`
                            },
                            {
                                content: `
<h2>Forward vs Redirect (Deep Comparison)</h2>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">

<tr>
<th>Feature</th>
<th>forward()</th>
<th>sendRedirect()</th>
</tr>
<tr>
<td>Execution</td>
<td>Server-side</td>
<td>Client-side</td>
</tr>
<tr>
<td>URL Change</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Performance</td>
<td>Faster</td>
<td>Slightly slower</td>
</tr>
<tr>
<td>Request Scope</td>
<td>Same request</td>
<td>New request</td>
</tr>
</table>
`
                            },
                            {
                                content: `
<h2>Sending File Download (Advanced)</h2>
<p>• Used to download files from server.</p>
`,
                                codeExamples: [
                                    `response.setContentType("application/pdf");
response.setHeader("Content-Disposition",
                   "attachment; filename=report.pdf");

ServletOutputStream out = response.getOutputStream();
out.write(fileBytes);
out.close();`
                                ]
                            },
                            {
                                content: `
<h2>Sending JSON API Response</h2>
<p>• Used in REST APIs.</p>
`,
                                codeExamples: [
                                    `response.setContentType("application/json");
response.setCharacterEncoding("UTF-8");

String json = "{\\"name\\":\\"Ashish\\",\\"role\\":\\"Admin\\"}";
response.getWriter().write(json);`
                                ]
                            },
                            {
                                content: `
<h2>Advanced Methods</h2>
<ul>
<li>• setHeader() vs addHeader()</li>
<li>• setCharacterEncoding()</li>
<li>• setContentLength()</li>
<li>• encodeURL()</li>
<li>• sendError()</li>
</ul>
`,
                                codeExamples: [
                                    `response.sendError(HttpServletResponse.SC_FORBIDDEN,
                   "Access Denied");`
                                ]
                            },
                            {
                                content: `
<h2>Interview Advanced Questions</h2>
<ul>
<li>• What is response commit?</li>
<li>• Difference between getWriter() and getOutputStream()?</li>
<li>• When to use sendError()?</li>
<li>• Can we call sendRedirect() after writing response?</li>
<li>• Difference between setHeader() and addHeader()?</li>
</ul>
`
                            }
                        ]
                    },

                    {
                        id: "http-servlet-request",
                        name: "HttpServletRequest",

                        beginner: [
                            {
                                content: `
<h2>What is HttpServletRequest?</h2>
<p><strong>• HttpServletRequest</strong> is used to receive data from client (browser) to server.</p>

<ul>
<li>• Gets form data</li>
<li>• Gets URL parameters</li>
<li>• Gets request headers</li>
<li>• Works inside doGet() and doPost()</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Getting Form Data</h2>
<p>• Use getParameter() to read input values.</p>
`,
                                codeExamples: [
                                    `protected void doPost(HttpServletRequest request,
                      HttpServletResponse response)
                      throws IOException {

    String username = request.getParameter("username");
    String password = request.getParameter("password");

    response.getWriter().println("Welcome " + username);
}`
                                ]
                            },
                            {
                                content: `
<h2>Getting Multiple Values</h2>
<p>• Used for checkbox or multi-select inputs.</p>
`,
                                codeExamples: [
                                    `String[] hobbies = request.getParameterValues("hobby");

for(String h : hobbies) {
    System.out.println(h);
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Request Methods</h2>
<ul>
<li>• GET → Data visible in URL</li>
<li>• POST → Data sent in body</li>
<li>• PUT, DELETE → Used in REST APIs</li>
</ul>
`,
                                codeExamples: [
                                    `String method = request.getMethod();
System.out.println("Request Type: " + method);`
                                ]
                            },
                            {
                                content: `
<h2>Getting Request Headers</h2>
<p>• Headers contain browser and request information.</p>
`,
                                codeExamples: [
                                    `String userAgent = request.getHeader("User-Agent");
String host = request.getHeader("Host");

System.out.println(userAgent);`
                                ]
                            },
                            {
                                content: `
<h2>Getting Client Information</h2>
`,
                                codeExamples: [
                                    `String ip = request.getRemoteAddr();
String serverName = request.getServerName();
int port = request.getServerPort();`
                                ]
                            },
                            {
                                content: `
<h2>Request Attributes</h2>
<p>• Used to pass data between servlets (forward).</p>
`,
                                codeExamples: [
                                    `request.setAttribute("name", "Ashish");
RequestDispatcher rd = request.getRequestDispatcher("welcome.jsp");
rd.forward(request, response);`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Request Lifecycle (Advanced)</h2>
<ol>
<li>• Client sends HTTP request</li>
<li>• Container creates HttpServletRequest object</li>
<li>• Servlet processes request</li>
<li>• Response sent back</li>
<li>• Request object destroyed</li>
</ol>
`
                            },
                            {
                                content: `
<h2>getParameter() vs getAttribute()</h2>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">

<tr>
<th>Feature</th>
<th>getParameter()</th>
<th>getAttribute()</th>
</tr>
<tr>
<td>Data Source</td>
<td>Client form data</td>
<td>Server-side data</td>
</tr>
<tr>
<td>Data Type</td>
<td>String</td>
<td>Object</td>
</tr>
<tr>
<td>Used In</td>
<td>Form processing</td>
<td>Forward/include</td>
</tr>
</table>
`
                            },
                            {
                                content: `
<h2>Reading Raw Data (Advanced)</h2>
<p>• Used when receiving JSON data in REST APIs.</p>
`,
                                codeExamples: [
                                    `BufferedReader reader = request.getReader();
String line;
StringBuilder sb = new StringBuilder();

while((line = reader.readLine()) != null) {
    sb.append(line);
}

String jsonData = sb.toString();
System.out.println(jsonData);`
                                ]
                            },
                            {
                                content: `
<h2>File Upload (Multipart Request)</h2>
<p>• Requires @MultipartConfig annotation.</p>
`,
                                codeExamples: [
                                    `@MultipartConfig
public class UploadServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws IOException, ServletException {

        Part filePart = request.getPart("file");
        String fileName = filePart.getSubmittedFileName();

        filePart.write("C:/uploads/" + fileName);
    }
}`
                                ]
                            },
                            {
                                content: `
<h2>Advanced Methods</h2>
<ul>
<li>• getRequestURI()</li>
<li>• getRequestURL()</li>
<li>• getContextPath()</li>
<li>• getSession()</li>
<li>• getCookies()</li>
<li>• getInputStream()</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Interview Advanced Questions</h2>
<ul>
<li>1. Difference between GET and POST?</li>
<li>2. Difference between getParameter() and getAttribute()?</li>
<li>3. How to read JSON from request?</li>
<li>4. What is multipart request?</li>
<li>5. How does request lifecycle work?</li>
</ul>
`
                            }
                        ]
                    },

                    {
                        id: "sending-text-html-response",
                        name: "Sending text/html Response",

                        beginner: [
                            {
                                content: `
<h2>What is text/html Response?</h2>
<p><strong>text/html</strong> tells the browser that the response contains HTML content.</p>

<ul>
<li>• Used to display web pages</li>
<li>• Must set content type before writing output</li>
<li>• Uses PrintWriter</li>
</ul>
`,
                                codeExamples: [
                                    `response.setContentType("text/html");
PrintWriter out = response.getWriter();
out.println("<h1>Hello Servlet</h1>");`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Complete HTML Page Generation</h2>
<p>• Servlet can dynamically generate full HTML pages.</p>

<ul>
<li>• Dynamic content from database</li>
<li>• Display form data</li>
<li>• Conditional rendering</li>
</ul>
`,
                                codeExamples: [
                                    `response.setContentType("text/html");
response.setCharacterEncoding("UTF-8");

PrintWriter out = response.getWriter();

String username = request.getParameter("username");

out.println("<!DOCTYPE html>");
out.println("<html>");
out.println("<head>");
out.println("<title>User Page</title>");
out.println("</head>");
out.println("<body>");
out.println("<h2>Welcome " + username + "</h2>");
out.println("</body>");
out.println("</html>");`
                                ]
                            },
                            {
                                content: `
<h2>Character Encoding Importance</h2>
<ul>
<li>• Prevents special character issues</li>
<li>• Supports UTF-8 languages</li>
<li>• Must be set before writing output</li>
</ul>
`,
                                codeExamples: [
                                    `response.setCharacterEncoding("UTF-8");`
                                ]
                            },
                            {
                                content: `
<h2>Setting Content Length</h2>
<p>• Improves performance by telling browser response size.</p>
`,
                                codeExamples: [
                                    `String html = "<h1>Hello</h1>";
response.setContentLength(html.length());
response.getWriter().write(html);`
                                ]
                            },
                            {
                                content: `
<h2>Auto-Flushing & Closing Stream</h2>
<ul>
<li>• Container auto flushes buffer</li>
<li>• Manual close not always required</li>
<li>• Flushing commits response</li>
</ul>
`,
                                codeExamples: [
                                    `PrintWriter out = response.getWriter();
out.flush();  // commits response`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Response Buffer Internals</h2>
<ul>
<li>• Default buffer size (usually 8KB)</li>
<li>• Can change using setBufferSize()</li>
<li>• Once committed → headers locked</li>
</ul>
`,
                                codeExamples: [
                                    `response.setBufferSize(16384); // 16KB
int size = response.getBufferSize();`
                                ]
                            },
                            {
                                content: `
<h2>Checking Commit Status</h2>
<p>• Used to avoid IllegalStateException.</p>
`,
                                codeExamples: [
                                    `if(!response.isCommitted()) {
    response.setContentType("text/html");
}`
                                ]
                            },
                            {
                                content: `
<h2>Mixing getWriter() & getOutputStream()</h2>
<p>• You cannot use both in same response.</p>

<p>• If used together → IllegalStateException.</p>
`
                            },
                            {
                                content: `
<h2>Performance Considerations</h2>
<ul>
<li>• Avoid heavy HTML generation in Servlet</li>
<li>• Use JSP/Thymeleaf for view layer</li>
<li>• Follow MVC pattern</li>
<li>• Minimize string concatenation</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Security Considerations</h2>
<ul>
<li>• Prevent XSS by escaping user input</li>
<li>• Validate request parameters</li>
<li>• Avoid exposing sensitive data</li>
</ul>
`,
                                codeExamples: [
                                    `String user = request.getParameter("user");
// Escape HTML before printing`
                                ]
                            },
                            {
                                content: `
<h2>Real-World Flow</h2>
<ol>
<li>• Client sends request</li>
<li>• Servlet processes business logic</li>
<li>• Generates dynamic HTML</li>
<li>• Response buffered</li>
<li>• Committed to client</li>
</ol>
`
                            },
                            {
                                content: `
<h2>Advanced Interview Questions</h2>
<ul>
<li>1. What happens if content type is not set?</li>
<li>2. Explain response buffering mechanism.</li>
<li>3. What is response commit?</li>
<li>4. Difference between flush() and close()?</li>
<li>5. Can we reset response after commit?</li>
<li>6. Why MVC is recommended instead of writing HTML in servlet?</li>
</ul>
`
                            }
                        ]
                    },

                    {
                        id: "setting-content-type",
                        name: "Setting Content Type",

                        beginner: [
                            {
                                content: `
<h2>What is Content Type?</h2>
<p><strong>• Content-Type</strong> tells the browser what type of data the server is sending.</p>

<ul>
<li>• text/html → HTML page</li>
<li>• text/plain → Normal text</li>
<li>• application/json → JSON data</li>
<li>• application/pdf → PDF file</li>
</ul>

<p>• We use <strong>response.setContentType()</strong> to set it.</p>
`,
                                codeExamples: [
                                    `protected void doGet(HttpServletRequest request,
                     HttpServletResponse response)
                     throws IOException {

  response.setContentType("text/html");

  PrintWriter out = response.getWriter();
  out.println("<h1>Hello World</h1>");
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Common Content Types</h2>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">

<tr>
<th>Type</th>
<th>Used For</th>
</tr>
<tr>
<td>text/html</td>
<td>Web Pages</td>
</tr>
<tr>
<td>text/plain</td>
<td>Simple Text</td>
</tr>
<tr>
<td>application/json</td>
<td>REST API</td>
</tr>
<tr>
<td>application/xml</td>
<td>XML Data</td>
</tr>
<tr>
<td>image/png</td>
<td>Images</td>
</tr>
</table>
`
                            },
                            {
                                content: `
<h2>Sending JSON Response</h2>
<p>• Used in REST APIs.</p>
`,
                                codeExamples: [
                                    `response.setContentType("application/json");
response.setCharacterEncoding("UTF-8");

String json = "{\\"name\\":\\"Ashish\\",\\"role\\":\\"Admin\\"}";
response.getWriter().write(json);`
                                ]
                            },
                            {
                                content: `
<h2>Setting Character Encoding</h2>
<p>• Prevents special character issues.</p>
`,
                                codeExamples: [
                                    `response.setContentType("text/html;charset=UTF-8");`
                                ]
                            },
                            {
                                content: `
<h2>What Happens if Not Set?</h2>
<ul>
<li>• Browser may treat data as plain text</li>
<li>• File download may not work properly</li>
<li>• JSON may display incorrectly</li>
</ul>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Internal Working of Content-Type</h2>
<ul>
<li>• Content-Type is an HTTP response header</li>
<li>• Sent before response body</li>
<li>• Browser decides how to render content</li>
</ul><br>

<p>Example HTTP Response:</p>
<pre>
• HTTP/1.1 200 OK 
• Content-Type: text/html;charset=UTF-8
</pre>
`
                            },
                            {
                                content: `
<h2>Buffer & Commit Rule</h2>
<ul>
<li>• Content type must be set before response is committed</li>
<li>• After commit → headers cannot be changed</li>
</ul>
`,
                                codeExamples: [
                                    `response.setContentType("text/html");

PrintWriter out = response.getWriter();
out.println("Hello");

// After buffer commit, cannot change content type`
                                ]
                            },
                            {
                                content: `
<h2>Difference: setContentType() vs setHeader()</h2>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">

<tr>
<th>Method</th>
<th>Purpose</th>
</tr>
<tr>
<td>setContentType()</td>
<td>Sets Content-Type header safely</td>
</tr>
<tr>
<td>setHeader("Content-Type", ...)</td>
<td>Manual header setting</td>
</tr>
</table>
`
                            },
                            {
                                content: `
<h2>File Download Example</h2>
<p>• Proper content type required for file download.</p>
`,
                                codeExamples: [
                                    `response.setContentType("application/pdf");
response.setHeader("Content-Disposition",
                   "attachment; filename=report.pdf");

ServletOutputStream out = response.getOutputStream();
out.write(fileBytes);
out.close();`
                                ]
                            },
                            {
                                content: `
<h2>Security Considerations</h2>
<ul>
<li>• Always set correct content type to prevent MIME sniffing</li>
<li>• Use X-Content-Type-Options: nosniff header</li>
</ul>
`,
                                codeExamples: [
                                    `response.setHeader("X-Content-Type-Options", "nosniff");`
                                ]
                            },
                            {
                                content: `
<h2>Advanced Interview Questions</h2>
<ul>
<li>1. Why must content type be set before writing response?</li>
<li>2. What happens if content type is not set?</li>
<li>3. Difference between setContentType and setHeader?</li>
<li>4. Explain MIME types.</li>
<li>5. Can we change content type after response commit?</li>
</ul>
`
                            }
                        ]
                    },

                    {
                        id: "sending-redirect",
                        name: "Sending Redirect (sendRedirect)",

                        beginner: [
                            {
                                content: `
<h2>What is sendRedirect()?</h2>
<p><strong>sendRedirect()</strong> is used to redirect the browser to another URL.</p>

<ul>
<li>• URL changes in browser</li>
<li>• New request is created</li>
<li>• Client-side redirection</li>
<li>• Uses HTTP status code</li>
<li>• Request data is not preserved</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Basic Example</h2>
<p>Redirect user to login page:</p>

<ul>
<li>• Used inside doGet() or doPost()</li>
<li>• Stops further execution</li>
<li>• Browser sends new request</li>
</ul>
`,
                                codeExamples: [
                                    `protected void doGet(HttpServletRequest request,
                     HttpServletResponse response)
                     throws IOException {

  response.sendRedirect("login.jsp");
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>How sendRedirect Works</h2>
<ul>
<li>• Server sends HTTP status 302</li>
<li>• Location header contains new URL</li>
<li>• Browser receives new URL</li>
<li>• Browser sends completely new request</li>
<li>• Previous request object destroyed</li>
</ul>

<p><strong>Flow:</strong></p>
<ol>
<li>• Client → Servlet</li>
<li>• Servlet → 302 Response</li>
<li>• Browser → New Request</li>
</ol>
`
                            },
                            {
                                content: `
<h2>Redirect to External Website</h2>

<ul>
<li>• Can redirect outside application</li>
<li>• Useful for third-party login</li>
<li>• Works with full URL</li>
</ul>
`,
                                codeExamples: [
                                    `response.sendRedirect("https://www.google.com");`
                                ]
                            },
                            {
                                content: `
<h2>Redirect with Parameters</h2>

<ul>
<li>• Parameters passed in URL</li>
<li>• Data visible in browser</li>
<li>• Suitable for small data only</li>
</ul>
`,
                                codeExamples: [
                                    `String name = "Ashish";
response.sendRedirect("welcome.jsp?user=" + name);`
                                ]
                            },
                            {
                                content: `
<h2>Common Use Cases</h2>
<ul>
<li>• After successful login</li>
<li>• After form submission (PRG Pattern)</li>
<li>• Redirect HTTP to HTTPS</li>
<li>• Unauthorized access redirect</li>
<li>• Logout redirection</li>
</ul>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>HTTP Status Code Behind sendRedirect()</h2>
<p>sendRedirect() internally sends:</p>

<pre>
HTTP/1.1 302 Found
Location: /newURL
</pre>

<ul>
<li>• 302 → Temporary redirect</li>
<li>• Location header contains new URL</li>
<li>• Browser automatically follows redirect</li>
<li>• SEO impact depends on status code</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Redirect vs Forward (Deep Comparison)</h2>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">

<tr>
<th>Feature</th>
<th>sendRedirect()</th>
<th>forward()</th>
</tr>
<tr>
<td>Type</td>
<td>Client-side</td>
<td>Server-side</td>
</tr>
<tr>
<td>URL Changes</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>New Request</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Request Scope Data</td>
<td>Lost</td>
<td>Available</td>
</tr>
</table><br>

<ul>
<li>• Redirect is slower than forward</li>
<li>• Redirect can go outside application</li>
<li>• Forward works only inside server</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Response Commit Rule</h2>
<ul>
<li>• sendRedirect() must be called before response is committed</li>
<li>• If response already written → IllegalStateException</li>
<li>• Buffer size affects commit</li>
<li>• Cannot write response after redirect</li>
</ul>
`,
                                codeExamples: [
                                    `PrintWriter out = response.getWriter();
out.println("Hello");

// This will cause error if response committed
response.sendRedirect("home.jsp");`
                                ]
                            },
                            {
                                content: `
<h2>Post/Redirect/Get (PRG Pattern)</h2>
<p>Prevents duplicate form submission.</p>

<ul>
<li>• Client submits form (POST)</li>
<li>• Server processes data</li>
<li>• Server redirects to GET page</li>
<li>• Prevents refresh duplicate submission</li>
</ul>
`,
                                codeExamples: [
                                    `protected void doPost(HttpServletRequest request,
                      HttpServletResponse response)
                      throws IOException {

  // Process form data

  response.sendRedirect("success.jsp");
}`
                                ]
                            },
                            {
                                content: `
<h2>Permanent Redirect (301)</h2>
<p>Manually setting status for SEO-friendly redirect:</p>

<ul>
<li>• 301 → Permanent redirect</li>
<li>• Search engines update URL</li>
<li>• Better for SEO migration</li>
</ul>
`,
                                codeExamples: [
                                    `response.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY);
response.setHeader("Location", "https://example.com");`
                                ]
                            },
                            {
                                content: `
<h2>Advanced Interview Questions</h2>
<ul>
<li>• Difference between sendRedirect and forward?</li>
<li>• Which HTTP status code is used in redirect?</li>
<li>• Why is PRG pattern important?</li>
<li>• Can we redirect after writing response?</li>
<li>• How to perform permanent redirect?</li>
<li>• Why redirect is slower than forward?</li>
</ul>
`
                            }
                        ]
                    },

                    {
                        id: "request-dispatcher",
                        name: "RequestDispatcher (forward/include)",

                        beginner: [
                            {
                                content: `
<h2>What is RequestDispatcher?</h2>
<p><strong>RequestDispatcher</strong> is used to forward request from one resource to another resource inside the server.</p>

<ul>
<li>• Server-side redirection</li>
<li>• URL does NOT change</li>
<li>• Same request & response object used</li>
<li>• Works inside same application</li>
<li>• Faster than sendRedirect()</li>
</ul>
`
                            },
                            {
                                content: `
<h2>forward() Method</h2>
<p>Transfers control to another resource (Servlet/JSP/HTML).</p>

<ul>
<li>• Stops current servlet execution</li>
<li>• Control fully transferred</li>
<li>• Browser unaware of forwarding</li>
<li>• Same request object shared</li>
</ul>
`,
                                codeExamples: [
                                    `RequestDispatcher rd =
request.getRequestDispatcher("welcome.jsp");

rd.forward(request, response);`
                                ]
                            },
                            {
                                content: `
<h2>include() Method</h2>
<p>Includes output of another resource in current response.</p>

<ul>
<li>• Includes resource output</li>
<li>• Current servlet continues execution</li>
<li>• Used for header/footer</li>
<li>• Output appended to response</li>
</ul>
`,
                                codeExamples: [
                                    `RequestDispatcher rd =
request.getRequestDispatcher("header.jsp");

rd.include(request, response);`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>How forward() Works</h2>
<ul>
<li>• Stops current servlet execution</li>
<li>• Transfers request internally</li>
<li>• Browser is unaware</li>
<li>• Request attributes remain available</li>
<li>• Uses same request & response object</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Passing Data using Request Scope</h2>

<ul>
<li>• request.setAttribute()</li>
<li>• request.getAttribute()</li>
<li>• Data available in same request</li>
<li>• Commonly used between Servlet → JSP</li>
</ul>
`,
                                codeExamples: [
                                    `request.setAttribute("username", "Ashish");

RequestDispatcher rd =
request.getRequestDispatcher("welcome.jsp");

rd.forward(request, response);`
                                ]
                            },
                            {
                                content: `
<h2>include() Behavior</h2>
<ul>
<li>• Includes output of another resource</li>
<li>• Main servlet continues execution</li>
<li>• Useful for header/footer</li>
<li>• Response content appended</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Example: include() Full Flow</h2>

<ul>
<li>• Write main content</li>
<li>• Include another resource</li>
<li>• Continue writing response</li>
</ul>
`,
                                codeExamples: [
                                    `PrintWriter out = response.getWriter();
out.println("<h1>Main Content</h1>");

RequestDispatcher rd =
request.getRequestDispatcher("footer.jsp");

rd.include(request, response);

out.println("<p>After Footer</p>");`
                                ]
                            },
                            {
                                content: `
<h2>forward() vs include()</h2>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">

<tr>
<th>Feature</th>
<th>forward()</th>
<th>include()</th>
</tr>
<tr>
<td>Stops current execution</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>URL changes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Output control</td>
<td>Transferred</td>
<td>Appended</td>
</tr>
</table>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Internal Working</h2>
<ul>
<li>• Container creates RequestDispatcher object</li>
<li>• Control transferred within same request</li>
<li>• No new HTTP request generated</li>
<li>• Uses same thread</li>
<li>• Faster than sendRedirect()</li>
<li>• Works only inside same application</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Response Commit Rule</h2>
<ul>
<li>• forward() must be called before response is committed</li>
<li>• If response already committed → IllegalStateException</li>
<li>• Cannot redirect after forward()</li>
<li>• Buffer size matters</li>
</ul>
`,
                                codeExamples: [
                                    `PrintWriter out = response.getWriter();
out.println("Hello");

// This may cause exception if buffer committed
RequestDispatcher rd =
request.getRequestDispatcher("page.jsp");

rd.forward(request, response);`
                                ]
                            },
                            {
                                content: `
<h2>Common MVC Pattern Usage</h2>
<p>Servlet acts as Controller.</p>

<ul>
<li>• Servlet processes data</li>
<li>• Sets request attributes</li>
<li>• Forwards to JSP (View)</li>
<li>• Model contains business logic</li>
</ul>
`,
                                codeExamples: [
                                    `protected void doGet(HttpServletRequest request,
                     HttpServletResponse response)
                     throws ServletException, IOException {

  List<String> users = List.of("A", "B", "C");

  request.setAttribute("userList", users);

  RequestDispatcher rd =
  request.getRequestDispatcher("users.jsp");

  rd.forward(request, response);
}`
                                ]
                            },
                            {
                                content: `
<h2>Common Mistakes</h2>
<ul>
<li>• Writing response before forward()</li>
<li>• Using forward() after redirect()</li>
<li>• Expecting URL change</li>
<li>• Forwarding to external website</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Interview Important Questions</h2>
<ul>
<li>• Difference between forward() and include()?</li>
<li>• Difference between forward() and sendRedirect()?</li>
<li>• Can we forward to external website?</li>
<li>• Does forward create new request?</li>
<li>• Why is forward faster than redirect?</li>
</ul>

<h3>Tricky Question</h3>
<p>Q: Can we forward to another server?</p>
<p>A: No. forward() works only inside same application/server.</p>
`
                            }
                        ]
                    },

                ]
            },

            {
                id: 'form-handling',
                name: 'Form Handling',
                topics: [

                    {
                        id: "reading-form-data",
                        name: "Reading Form Data (getParameter)",

                        beginner: [
                            {
                                content: `
<h2>What is getParameter()?</h2>
<p><strong>getParameter()</strong> is used to read form data sent from client to server.</p>

<ul>
<li>• Reads form input values</li>
<li>• Returns data as String</li>
<li>• Works with GET and POST</li>
<li>• Defined in HttpServletRequest</li>
</ul>
`
                            },
                            {
                                content: `
<h2>HTML Form Example</h2>

<ul>
<li>• Form sends data to servlet</li>
<li>• Input name attribute is important</li>
</ul>
`,
                                codeExamples: [
                                    `<form action="login" method="post">
  Name: <input type="text" name="username" />
  <input type="submit" value="Submit" />
</form>`
                                ]
                            },
                            {
                                content: `
<h2>Reading Form Data in Servlet</h2>

<ul>
<li>• Use request.getParameter("fieldName")</li>
<li>• Always returns String</li>
</ul>
`,
                                codeExamples: [
                                    `protected void doPost(HttpServletRequest request,
                      HttpServletResponse response)
                      throws IOException {

  String name = request.getParameter("username");

  response.getWriter().println("Welcome " + name);
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Handling Multiple Form Fields</h2>

<ul>
<li>• Read multiple parameters</li>
<li>• Validate input</li>
<li>• Convert String to int/double</li>
</ul>
`,
                                codeExamples: [
                                    `String name = request.getParameter("username");
String ageStr = request.getParameter("age");

int age = Integer.parseInt(ageStr);

response.getWriter().println("Name: " + name);
response.getWriter().println("Age: " + age);`
                                ]
                            },
                            {
                                content: `
<h2>Handling Checkbox & Multiple Values</h2>

<ul>
<li>• Use getParameterValues()</li>
<li>• Returns String array</li>
<li>• Used for checkbox/multi-select</li>
</ul>
`,
                                codeExamples: [
                                    `String[] hobbies = request.getParameterValues("hobby");

for(String hobby : hobbies) {
   response.getWriter().println(hobby);
}`
                                ]
                            },
                            {
                                content: `
<h2>GET vs POST Data Reading</h2>

<ul>
<li>• GET → Data visible in URL</li>
<li>• POST → Data sent in request body</li>
<li>• getParameter() works for both</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Handling Null Values</h2>

<ul>
<li>• Parameter may return null</li>
<li>• Always check before using</li>
</ul>
`,
                                codeExamples: [
                                    `String email = request.getParameter("email");

if(email != null && !email.isEmpty()) {
   response.getWriter().println(email);
} else {
   response.getWriter().println("Email is required");
}`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Character Encoding Handling</h2>

<ul>
<li>• Important for non-English characters</li>
<li>• Must set encoding before reading parameters</li>
<li>• Prevents garbage characters</li>
</ul>
`,
                                codeExamples: [
                                    `request.setCharacterEncoding("UTF-8");

String name = request.getParameter("username");`
                                ]
                            },
                            {
                                content: `
<h2>Reading All Parameters Dynamically</h2>

<ul>
<li>• Use getParameterMap()</li>
<li>• Use getParameterNames()</li>
<li>• Useful for dynamic forms</li>
</ul>
`,
                                codeExamples: [
                                    `Map<String, String[]> paramMap = request.getParameterMap();

for(String key : paramMap.keySet()) {
   String[] values = paramMap.get(key);
   for(String value : values) {
       response.getWriter().println(key + " : " + value);
   }
}`
                                ]
                            },
                            {
                                content: `
<h2>Security Considerations</h2>

<ul>
<li>• Never trust client input</li>
<li>• Validate all parameters</li>
<li>• Prevent SQL Injection</li>
<li>• Prevent XSS attacks</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Common Mistakes</h2>

<ul>
<li>• Forgetting input name attribute</li>
<li>• Not handling null values</li>
<li>• Not setting character encoding</li>
<li>• Parsing without validation</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Advanced Interview Questions</h2>

<ul>
<li>• Difference between getParameter() and getAttribute()?</li>
<li>• What does getParameterValues() return?</li>
<li>• Why does getParameter() always return String?</li>
<li>• How to handle UTF-8 form data?</li>
<li>• How to prevent form data security issues?</li>
</ul>
`
                            }
                        ]
                    },

                    {
                        id: "handling-get-vs-post",
                        name: "Handling GET vs POST",

                        beginner: [
                            {
                                content: `
<h2>What is GET Method?</h2>

<ul>
<li>• Used to fetch data</li>
<li>• Data sent in URL</li>
<li>• Visible in browser address bar</li>
<li>• Limited data size</li>
<li>• Not secure for sensitive data</li>
</ul>
`
                            },
                            {
                                content: `
<h2>What is POST Method?</h2>

<ul>
<li>• Used to send data to server</li>
<li>• Data sent in request body</li>
<li>• Not visible in URL</li>
<li>• More secure than GET</li>
<li>• No size limitation (practically large)</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Basic Servlet Example</h2>
`,
                                codeExamples: [
                                    `protected void doGet(HttpServletRequest request,
                     HttpServletResponse response)
                     throws IOException {

   response.getWriter().println("GET Request Received");
}

protected void doPost(HttpServletRequest request,
                      HttpServletResponse response)
                      throws IOException {

   response.getWriter().println("POST Request Received");
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>GET vs POST Comparison</h2>
<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">
<tr>
<th>Feature</th>
<th>GET</th>
<th>POST</th>
</tr>
<tr>
<td>Data Location</td>
<td>URL</td>
<td>Request Body</td>
</tr>
<tr>
<td>Security</td>
<td>Less Secure</td>
<td>More Secure</td>
</tr>
<tr>
<td>Data Length</td>
<td>Limited</td>
<td>Large</td>
</tr>
<tr>
<td>Bookmarkable</td>
<td>Yes</td>
<td>No</td>
</tr>
</table>
`
                            },
                            {
                                content: `
<h2>HTML Form Example</h2>

<ul>
<li>• method="get"</li>
<li>• method="post"</li>
</ul>
`,
                                codeExamples: [
                                    `<!-- GET Example -->
<form action="user" method="get">
  Name: <input type="text" name="username" />
  <input type="submit" />
</form>

<!-- POST Example -->
<form action="user" method="post">
  Name: <input type="text" name="username" />
  <input type="submit" />
</form>`
                                ]
                            },
                            {
                                content: `
<h2>Reading Parameters (Same for Both)</h2>

<ul>
<li>• request.getParameter()</li>
<li>• Works for GET & POST</li>
<li>• Always returns String</li>
</ul>
`,
                                codeExamples: [
                                    `String name = request.getParameter("username");
response.getWriter().println("Hello " + name);`
                                ]
                            },
                            {
                                content: `
<h2>When to Use GET</h2>

<ul>
<li>• Searching data</li>
<li>• Filtering records</li>
<li>• Idempotent operations</li>
<li>• Read-only requests</li>
</ul>
`
                            },
                            {
                                content: `
<h2>When to Use POST</h2>

<ul>
<li>• Login forms</li>
<li>• Registration forms</li>
<li>• File upload</li>
<li>• Database insert/update</li>
</ul>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>HTTP Internals</h2>

<ul>
<li>• GET appends query string to URL</li>
<li>• POST sends data in request body</li>
<li>• GET is idempotent</li>
<li>• POST is not idempotent</li>
<li>• GET can be cached</li>
<li>• POST usually not cached</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Security Considerations</h2>

<ul>
<li>• GET parameters logged in browser history</li>
<li>• GET visible in server logs</li>
<li>• POST still not encrypted unless HTTPS</li>
<li>• Always use HTTPS for sensitive data</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Redirect Behavior</h2>

<ul>
<li>• After POST → Use PRG (Post/Redirect/Get)</li>
<li>• Prevents duplicate submission</li>
<li>• Browser refresh resubmits POST</li>
</ul>
`,
                                codeExamples: [
                                    `protected void doPost(HttpServletRequest request,
                      HttpServletResponse response)
                      throws IOException {

   // Process form

   response.sendRedirect("success.jsp"); // PRG Pattern
}`
                                ]
                            },
                            {
                                content: `
<h2>Handling Both in One Method</h2>

<ul>
<li>• Call doPost() inside doGet()</li>
<li>• Or override service()</li>
<li>• Avoid duplicate logic</li>
</ul>
`,
                                codeExamples: [
                                    `protected void doGet(HttpServletRequest request,
                     HttpServletResponse response)
                     throws IOException {

   doPost(request, response);
}`
                                ]
                            },
                            {
                                content: `
<h2>Advanced Interview Questions</h2>

<ul>
<li>• Difference between GET and POST?</li>
<li>• Which method is idempotent?</li>
<li>• Why POST is not fully secure?</li>
<li>• Can GET modify server data?</li>
<li>• What is PRG pattern?</li>
<li>• Why GET can be cached?</li>
</ul>
`
                            }
                        ]
                    },

                    {
                        id: "hidden-fields",
                        name: "Hidden Fields (Session Tracking Technique)",

                        beginner: [
                            {
                                content: `
<h2>What are Hidden Fields?</h2>

<p><strong>Hidden fields</strong> are form input elements that are not visible to users but send data to the server.</p>

<ul>
<li>• Used to store hidden data</li>
<li>• Data sent with form submission</li>
<li>• Used for session tracking</li>
<li>• Visible in page source (not secure)</li>
</ul>
`
                            },
                            {
                                content: `
<h2>HTML Hidden Field Example</h2>

<ul>
<li>• type="hidden"</li>
<li>• Has name and value</li>
<li>• Not displayed in browser</li>
</ul>
`,
                                codeExamples: [
                                    `<form action="profile" method="post">
  <input type="hidden" name="userId" value="101" />
  Name: <input type="text" name="username" />
  <input type="submit" value="Submit" />
</form>`
                                ]
                            },
                            {
                                content: `
<h2>Reading Hidden Field in Servlet</h2>

<ul>
<li>• Use request.getParameter()</li>
<li>• Works like normal form field</li>
</ul>
`,
                                codeExamples: [
                                    `protected void doPost(HttpServletRequest request,
                      HttpServletResponse response)
                      throws IOException {

   String userId = request.getParameter("userId");
   response.getWriter().println("User ID: " + userId);
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Hidden Fields for Session Tracking</h2>

<ul>
<li>• Used when cookies disabled</li>
<li>• Data passed between pages</li>
<li>• Requires form submission</li>
<li>• Maintains user state</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Passing Hidden Field to Next Page</h2>

<ul>
<li>• Servlet generates dynamic hidden value</li>
<li>• Embedded inside form</li>
</ul>
`,
                                codeExamples: [
                                    `protected void doGet(HttpServletRequest request,
                     HttpServletResponse response)
                     throws IOException {

   String user = "Ashish";

   response.setContentType("text/html");
   PrintWriter out = response.getWriter();

   out.println("<form action='next' method='post'>");
   out.println("<input type='hidden' name='username' value='" + user + "' />");
   out.println("<input type='submit' value='Continue' />");
   out.println("</form>");
}`
                                ]
                            },
                            {
                                content: `
<h2>Hidden Fields vs Cookies</h2>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">

<tr>
<th>Feature</th>
<th>Hidden Field</th>
<th>Cookie</th>
</tr>
<tr>
<td>Stored Where?</td>
<td>Inside Form</td>
<td>Browser</td>
</tr>
<tr>
<td>Requires Form Submit?</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Security</td>
<td>Less Secure</td>
<td>Moderate</td>
</tr>
</table>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>Security Considerations</h2>

<ul>
<li>• User can modify hidden field value</li>
<li>• Never trust hidden field data</li>
<li>• Always validate on server side</li>
<li>• Not suitable for sensitive data</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Hidden Fields Limitation</h2>

<ul>
<li>• Works only with forms</li>
<li>• Not suitable for large data</li>
<li>• Cannot persist across direct URL access</li>
<li>• Not ideal for complex session handling</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Real World Use Cases</h2>

<ul>
<li>• Multi-step form data passing</li>
<li>• CSRF token storage</li>
<li>• Temporary state management</li>
<li>• E-commerce cart step tracking</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Hidden Field vs URL Rewriting vs HttpSession</h2>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">

<tr>
<th>Feature</th>
<th>Hidden Field</th>
<th>URL Rewriting</th>
<th>HttpSession</th>
</tr>
<tr>
<td>Visible to User</td>
<td>No (but viewable in source)</td>
<td>Yes (URL)</td>
<td>No</td>
</tr>
<tr>
<td>Security</td>
<td>Low</td>
<td>Low</td>
<td>High</td>
</tr>
<tr>
<td>Best Use</td>
<td>Form Data Passing</td>
<td>Small Session Tracking</td>
<td>Full Session Management</td>
</tr>
</table>
`
                            },
                            {
                                content: `
<h2>Advanced Interview Questions</h2>

<ul>
<li>• What is hidden field in servlet?</li>
<li>• How hidden field maintains session?</li>
<li>• Why hidden field is not secure?</li>
<li>• Difference between hidden field and cookie?</li>
<li>• When should you avoid hidden fields?</li>
</ul>
`
                            }
                        ]
                    },

                    {
                        id: "url-rewriting",
                        name: "URL Rewriting (Session Tracking Technique)",

                        beginner: [
                            {
                                content: `
<h2>What is URL Rewriting?</h2>

<p><strong>URL Rewriting</strong> is a session tracking technique where data is appended to the URL as query parameters.</p>

<ul>
<li>• Data is added at the end of URL</li>
<li>• Format: ?key=value</li>
<li>• Multiple values separated using &</li>
<li>• Used when cookies are disabled</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Basic Example</h2>

<ul>
<li>• Passing username through URL</li>
<li>• Data visible in browser address bar</li>
</ul>
`,
                                codeExamples: [
                                    `response.sendRedirect("welcome.jsp?user=Ashish");`
                                ]
                            },
                            {
                                content: `
<h2>Reading URL Data in Servlet</h2>

<ul>
<li>• Use request.getParameter()</li>
<li>• Works like form data</li>
</ul>
`,
                                codeExamples: [
                                    `protected void doGet(HttpServletRequest request,
                     HttpServletResponse response)
                     throws IOException {

   String user = request.getParameter("user");
   response.getWriter().println("Welcome " + user);
}`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
<h2>Multiple Parameters Example</h2>

<ul>
<li>• Separate parameters using &</li>
<li>• Format: ?key1=value1&key2=value2</li>
</ul>
`,
                                codeExamples: [
                                    `response.sendRedirect("profile?name=Ashish&role=admin");`
                                ]
                            },
                            {
                                content: `
<h2>URL Rewriting for Session Tracking</h2>

<ul>
<li>• Session ID added in URL</li>
<li>• Useful when cookies disabled</li>
<li>• Maintains user state</li>
</ul>
`,
                                codeExamples: [
                                    `String sessionId = "12345";
response.sendRedirect("dashboard?sessionId=" + sessionId);`
                                ]
                            },
                            {
                                content: `
<h2>Encoding URL Properly</h2>

<ul>
<li>• Use encodeURL()</li>
<li>• Automatically appends session ID if needed</li>
</ul>
`,
                                codeExamples: [
                                    `String url = response.encodeURL("home.jsp");
response.sendRedirect(url);`
                                ]
                            },
                            {
                                content: `
<h2>URL Rewriting vs Hidden Fields</h2>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">

<tr>
<th>Feature</th>
<th>URL Rewriting</th>
<th>Hidden Field</th>
</tr>
<tr>
<td>Data Visible</td>
<td>Yes</td>
<td>No (but viewable in source)</td>
</tr>
<tr>
<td>Works Without Form</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Security</td>
<td>Low</td>
<td>Low</td>
</tr>
</table>
`
                            }
                        ],

                        expert: [
                            {
                                content: `
<h2>How Container Uses URL Rewriting</h2>

<ul>
<li>• When cookies disabled, container appends session ID</li>
<li>• Format: ;jsessionid=XXXX</li>
<li>• Automatically handled by encodeURL()</li>
</ul>

<p>Example:</p>
<pre>
http://localhost:8080/app/home;jsessionid=ABC123
</pre>
`
                            },
                            {
                                content: `
<h2>encodeURL() vs encodeRedirectURL()</h2>

<ul>
<li>• encodeURL() → for normal links</li>
<li>• encodeRedirectURL() → for sendRedirect()</li>
</ul>
`,
                                codeExamples: [
                                    `String url1 = response.encodeURL("home.jsp");
String url2 = response.encodeRedirectURL("dashboard");

response.sendRedirect(url2);`
                                ]
                            },
                            {
                                content: `
<h2>Security Considerations</h2>

<ul>
<li>• Data visible in browser</li>
<li>• Can be bookmarked</li>
<li>• Can be modified by user</li>
<li>• Not safe for sensitive data</li>
</ul>
`
                            },
                            {
                                content: `
<h2>Limitations</h2>

<ul>
<li>• URL length limitation</li>
<li>• Not suitable for large data</li>
<li>• Manual handling required for every link</li>
<li>• Less secure than HttpSession</li>
</ul>
`
                            },
                            {
                                content: `
<h2>URL Rewriting vs HttpSession vs Cookies</h2>

<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2">

<tr>
<th>Feature</th>
<th>URL Rewriting</th>
<th>Cookies</th>
<th>HttpSession</th>
</tr>
<tr>
<td>Security</td>
<td>Low</td>
<td>Medium</td>
<td>High</td>
</tr>
<tr>
<td>Visible to User</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Best Use</td>
<td>When Cookies Disabled</td>
<td>Light Tracking</td>
<td>Full Session Management</td>
</tr>
</table>
`
                            },
                            {
                                content: `
<h2>Advanced Interview Questions</h2>

<ul>
<li>• What is URL rewriting in servlet?</li>
<li>• How does encodeURL() work?</li>
<li>• What happens when cookies are disabled?</li>
<li>• Difference between encodeURL() and encodeRedirectURL()?</li>
<li>• Why is URL rewriting not secure?</li>
<li>• What is ;jsessionid in URL?</li>
</ul>
`
                            }
                        ]
                    },


                ]
            }

        ],
        cheatNotes: [],
        interviewQuestions: []

    }

]