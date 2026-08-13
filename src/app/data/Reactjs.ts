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

export const Reactjs: Course[] = [
    {
        id: "react-js",
        name: "ReactJS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        subTopics: [
            {
                id: "reactjs",
                name: "Fundamentals of React",
                topics: [
                    {
                        id: "reactjs-intro",
                        name: "Introduction to ReactJS",
                        beginner: [
                            {
                                content: `• ReactJS is a JavaScript library for building user interfaces. <br>
                            • It allows developers to create reusable UI components and manage the state of their applications efficiently.<br>
                            • ReactJS uses a virtual DOM to optimize rendering performance. When the state of a component changes, React updates the virtual DOM and efficiently updates the real DOM.<br>
                            • React supports server-side rendering (SSR) and static site generation (SSG) for improved performance and SEO.<br> 
                            • Frameworks like Next.js make it easy to implement these features.<br>
                            `,
                                codeExamples: [
                                    `import React from 'react';
                                function HelloWorld() {
                                    return <h1>Hello, World!</h1>;
                                }
                                export default HelloWorld;`
                                ]
                            }
                        ],
                        intermediate: [
                            {
                                content: `• ReactJS uses a virtual DOM to optimize rendering performance. <br>
                            • When the state of a component changes, React updates the virtual DOM and efficiently updates the real DOM.<br>
                            • This approach minimizes the number of direct manipulations to the DOM, resulting in faster updates and improved performance.<br>
                            • React's reconciliation algorithm compares the new virtual DOM with the previous one and updates only the parts of the real DOM that have changed.<br>
                            • This makes React applications highly performant, even with complex user interfaces.
                             `,
                                codeExamples: [
                                    `import React, { useState } from 'react';
                                function Counter() {
                                    const [count, setCount] = useState(0);
                                    return (


                                        <div>
                                            <p>Count: {count}</p>
                                            <button onClick={() => setCount(count + 1)}
                                            >Increment</button>
                                        </div>
                                    );
                                }
                                export default Counter;`
                                ]
                            },


                        ],
                        expert: [
                            {
                                content: `• ReactJS supports server-side rendering (SSR) and static site generation (SSG) for improved performance and SEO. <br>
                            • Frameworks like Next.js make it easy to implement these features.<br>
                            • SSR allows React components to be rendered on the server and sent to the client as fully rendered HTML, improving initial load times and SEO.<br>
                            • SSG generates static HTML files at build time, which can be served directly from a CDN, further improving performance and scalability.<br>
                                `,
                                codeExamples: [
                                    `import React from 'react';
                                function HomePage() {

                                    return <h1>Welcome to the Home Page</h1>;
                                }
                                export default HomePage;`
                                ]
                            },
                            {
                                content: `• Next.js is a popular React framework that provides built-in support for SSR and SSG. <br>
                            • It allows developers to create React applications with minimal configuration while benefiting from improved performance and SEO.<br>
                            • Next.js also offers features like automatic code splitting, optimized image handling, and API routes, making it a powerful choice for building modern web applications with React.<br>
                            `,
                                codeExamples: [
                                    `import React from 'react';
                                function AboutPage() {
                                    return <h1>About Us</h1>;
                                }
                                export default AboutPage;`
                                ]
                            }
                        ]
                    },

                    {
                        id: "single-page-application",
                        name: "Single Page Application (SPA)",
                        beginner: [
                            {
                                content: `
                <h2>What is SPA (Single Page Application)?</h2>
                <p>
                    • A <strong>Single Page Application (SPA)</strong> is a web application that loads a single HTML page
                    and dynamically updates content as the user interacts with the application,
                    without refreshing the entire page.
                </p><br>

                <h3>Traditional Web App vs SPA</h3>
              
                <table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2  ">
                    <tr>
                        <th>Feature</th>
                        <th>Traditional App</th>
                        <th>SPA</th>
                    </tr>
                    <tr>
                        <td>Page Reload</td>
                        <td>Reloads on every request</td>
                        <td>No full page reload</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>Slower navigation</td>
                        <td>Faster after initial load</td>
                    </tr>
                    <tr>
                        <td>Rendering</td>
                        <td>Server-side</td>
                        <td>Client-side</td>
                    </tr>
                </table><br>

                <h3>How SPA Works</h3>
                <ul>
                    <li>• Browser loads a single HTML file.</li>
                    <li>• JavaScript framework initializes.</li>
                    <li>• User actions trigger API calls.</li>
                    <li>• Server returns JSON data.</li>
                    <li>• DOM updates dynamically.</li>
                </ul><br>

                <h3>Advantages</h3>
                <ul>
                    <li>• Better user experience</li>
                    <li>• Fast navigation</li>
                    <li>• Reduced bandwidth usage</li>
                    <li>• Rich interactive UI</li>
                </ul><br>

                <h3>Disadvantages</h3>
                <ul>
                    <li>• Initial load can be heavy</li>
                    <li>• SEO challenges</li>
                    <li>• Browser compatibility issues (older browsers)</li>
                    <li>• Security concerns if not handled properly</li>
                </ul><br>

                <h3>Popular SPA Frameworks</h3>
                <ul>
                    <li>• React</li>
                    <li>• Angular</li>
                    <li>• Vue.js</li>
                </ul>
            `,
                                codeExamples: [
                                    `// Basic SPA Navigation Example (Vanilla JS)
document.getElementById("homeBtn").addEventListener("click", function() {
    document.getElementById("content").innerHTML = "<h2>Home Page</h2>";
});`,

                                    `// Fetch API Example
fetch('/api/products')
  .then(response => response.json())
  .then(data => {
      console.log(data);
  });`
                                ]
                            }
                        ],

                        intermediate: [
                            {
                                content: `
                <h2>SPA Architecture</h2>
                <p>
                   • SPA typically follows a <strong>Client-Server Architecture</strong>.<br>
                   • The frontend communicates with backend services using REST APIs.
                </p><br>

                <h3>Architecture Flow</h3>
                <ol>
                    <li>• User interacts with UI</li>
                    <li>• Client-side router handles navigation</li>
                    <li>• API request sent to backend</li>
                    <li>• Backend processes and returns JSON</li>
                    <li>• UI re-renders with updated state</li>
                </ol><br>

                <h3>Client-Side Routing</h3>
                <p>
                  Routing in SPA is handled on the client using libraries like:
                </p>
                <ul>
                    <li>• React Router</li>
                    <li>• Angular Router</li>
                    <li>• Vue Router</li>
                </ul><br>

                <h3>State Management</h3>
                <ul>
                    <li>• Component State</li>
                    <li>• Context API</li>
                    <li>• Redux</li>
                    <li>• NgRx (Angular)</li>
                </ul><br>

                <h3>Authentication in SPA</h3>
                <ul>
                    <li>• JWT (JSON Web Token)</li>
                    <li>• OAuth2</li>
                    <li>• Session-based authentication</li>
                </ul><br>

                <h3>SPA vs MPA (Multi Page Application)</h3>
                <ul>
                    <li>• SPA: Single HTML page, dynamic updates</li>
                    <li>• MPA: Multiple HTML pages, full reload</li>
                </ul>
            `,
                                codeExamples: [
                                    `// React Router Example
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`,

                                    `// JWT Token Storage Example
localStorage.setItem("token", response.token);`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `
                <h2>Advanced SPA Concepts</h2><br>
                <h3>1. Code Splitting & Lazy Loading</h3>
                <p>
                  • Improves performance by loading only required components.
                </p><br>

                <h3>2. Server-Side Rendering (SSR)</h3>
                <p>
                • Improves SEO and performance by rendering pages on server first.
                    Example: Next.js (React Framework).
                </p><br>

                <h3>3. Progressive Web Applications (PWA)</h3>
                <ul>
                    <li>• Offline support</li>
                    <li>• Service workers</li>
                    <li>• Installable apps</li>
                </ul><br>

                <h3>4. Performance Optimization</h3>
                <ul>
                    <li>• Memoization</li>
                    <li>• Virtual DOM optimization</li>
                    <li>• Debouncing & Throttling</li>
                    <li>• Tree shaking</li>
                </ul><br>

                <h3>5. Security Best Practices</h3>
                <ul>
                    <li>• Prevent XSS attacks</li>
                    <li>• Secure token storage</li>
                    <li>• HTTPS usage</li>
                    <li>• CSRF protection</li>
                </ul><br><br>

                <h3>Interview Questions</h3>
                <ul>
                    <li>• What is SPA and how does it work?</li>
                    <li>• Difference between SPA and MPA?</li>
                    <li>• How does client-side routing work?</li>
                    <li>• How do you handle authentication in SPA?</li>
                    <li>• How to optimize SPA performance?</li>
                </ul>
            `,
                                codeExamples: [
                                    `// React Lazy Loading Example
import React, { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}`,

                                    `// Debounce Example
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}`
                                ]
                            }
                        ]
                    },

                    {
                        id: "installing-node-npm",
                        name: "Installing Node.js & npm",
                        beginner: [
                            {
                                content: `
                <h2>What is Node.js?</h2>
                <p>
                  • Node.js is a JavaScript runtime built on Chrome's V8 engine.<br>
                  • It allows you to run JavaScript outside the browser.
                </p><br>

                <h2>What is npm?</h2>
                <p>
                • npm (Node Package Manager) is a tool that comes with Node.js.<br>
                • It is used to install, manage, and update JavaScript packages.
                </p><br>

                <h2>Steps to Install Node.js & npm</h2>
                <ol>
                    <li>• Go to the official Node.js website.</li>
                    <li>• Download the LTS (Long Term Support) version.</li>
                    <li>• Run the installer and follow setup instructions.</li>
                    <li>• Restart your system (if required).</li>
                </ol><br>

                <h3>Verify Installation</h3>
                <p>• Open Command Prompt / Terminal and run:</p>
            `,
                                codeExamples: [
                                    `node -v`,
                                    `npm -v`
                                ]
                            }
                        ],

                        // ================= INTERMEDIATE (DETAILED) =================
                        intermediate: [
                            {
                                content: `
                <h2>Understanding Node.js Installation Types</h2><br>
                <h3>1. LTS Version</h3>
                <p>
                • Recommended for production applications.<br>
                • Stable and supported for a long time.
                </p><br>

                <h3>2. Current Version</h3>
                <p>
                • Latest features but may not be fully stable.
                </p><br>

                <h2>Installing on Different Operating Systems</h2>
                <h3>Windows</h3>
                <ul>
                    <li>• Download .msi installer</li>
                    <li>• Follow setup wizard</li>
                    <li>• Ensure "Add to PATH" is selected</li>
                </ul><br>

                <h3>Mac</h3>
                <ul>
                    <li>• Download .pkg installer</li>
                    <li>• Or use Homebrew package manager</li>
                </ul><br>

                <h3>Linux</h3>
                <ul>
                    <li>• Use package manager (apt, yum)</li>
                    <li>• Or install using Node Version Manager (NVM)</li>
                </ul><br>

                <h2>Understanding package.json</h2>
                <p>
                • package.json is a configuration file that stores:
                </p>
                <ul>
                    <li>• Project metadata</li>
                    <li>• Dependencies</li>
                    <li>• Scripts</li>
                    <li>• Version details</li>
                </ul>
            `,
                                codeExamples: [
                                    `// Initialize a new Node project
npm init`,

                                    `// Install a package
npm install express`,

                                    `// Install as dev dependency
npm install nodemon --save-dev`
                                ]
                            }
                        ],

                        // ================= EXPERT (ADVANCED) =================
                        expert: [
                            {
                                content: `
                <h2>Advanced Node & npm Concepts</h2><br>
                <h3>Node Version Manager (NVM)</h3>
                <p>
                  • NVM allows you to install and manage multiple Node.js versions.<br>
                  • Useful for working on different projects with different versions.
                </p><br>

                <h3>Global vs Local Package Installation</h3>
                <ul>
                    <li>• Global: Available system-wide</li>
                    <li>• Local: Installed inside project folder</li>
                </ul><br>

                <h3>Understanding node_modules</h3>
                <p>
                • node_modules contains all installed dependencies.<br>
                • It should not be committed to Git.
                </p><br>

                <h3>npm Scripts</h3>
                <p>
                • You can define custom scripts inside package.json.
                </p><br>

                <h3>npx Command</h3>
                <p>
                •npx allows running packages without installing them globally.
                </p><br>

                <h3>Security Best Practices</h3>
                <ul>
                    <li>• Use npm audit</li>
                    <li>• Keep dependencies updated</li>
                    <li>• Avoid installing unknown global packages</li>
                </ul><br>

                <h3>Environment Variables</h3>
                <p>
                • Use .env files to store sensitive information.
                </p>
            `,
                                codeExamples: [
                                    `// Install NVM (Mac/Linux)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`,

                                    `// Use specific Node version
nvm install 18
nvm use 18`,

                                    `// Run npm audit
npm audit`,

                                    `// Example npm script in package.json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}`
                                ]
                            }
                        ]
                    },


                ]
            }

        ],

        cheatNotes: [
            "ReactJS is a JavaScript library for building user interfaces.",
            "It allows developers to create reusable UI components.",
            "React uses a virtual DOM to optimize rendering performance.",
            "React supports server-side rendering (SSR) and static site generation (SSG)."
        ],
        interviewQuestions: [
            {
                company: "Tech Company A",
                questions: [
                    "What is ReactJS and how does it differ from other JavaScript frameworks?",
                    "Explain the concept of virtual DOM in ReactJS.",
                    "How do you manage state in a React application?",
                    "What are React hooks and how do they work?"
                ]
            },
        ]
    }
]