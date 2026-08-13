export interface ContentBlock {
  content: string;
  codeExamples?: string[];
}

export interface Topic {
  id?: string;
  name?: string;
  beginner?: ContentBlock[];
  intermediate?: ContentBlock[];
  expert?: ContentBlock[];
}

export interface SubTopic {
  id: string;
  name: string;
  topics?: Topic[];
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

export const JDBC: Course[] = [
  {
    id: 'jdbc',
    name: 'JDBC',
    icon: 'Database',

    subTopics: [
      {
        id: 'basics',
        name: 'JDBC Basics',

        topics: [

          // ================= INTRODUCTION =================
          {
            id: 'jdbc-intro',
            name: 'JDBC Introduction',

            beginner: [
              {
                content: `
<b>JDBC (Java Database Connectivity)</b> is a standard Java API that allows Java applications to communicate with relational databases.<br><br>

<b>Purpose of JDBC:</b><br>
• Connect Java programs with databases.<br>
• Execute SQL queries.<br>
• Retrieve and manipulate database records.<br><br>

<b>Key Features:</b><br>
• Database independent API.<br>
• Supports CRUD operations.<br>
• Provides secure data handling.<br>
• Part of <b>java.sql</b> and <b>javax.sql</b> packages.<br><br>

<b>JDBC Workflow:</b><br>
Java Application ➝ JDBC API ➝ JDBC Driver ➝ Database
                `
              }
            ],
             intermediate: [
    {
      content: `
<b>⭐ JDBC Architecture</b><br><br>

JDBC architecture defines how Java applications interact with databases using drivers.<br><br>

<b>📌 Types of JDBC Drivers:</b><br><br>

<b>1️⃣ Type 1 – JDBC-ODBC Bridge Driver</b><br>
• Converts JDBC calls into ODBC calls.<br>
• Requires ODBC driver installed.<br>
• Slow performance.<br>
• Deprecated in modern Java.<br><br>

<b>2️⃣ Type 2 – Native API Driver</b><br>
• Converts JDBC calls into database-specific native API.<br>
• Requires database vendor libraries.<br>
• Faster than Type 1.<br><br>

<b>3️⃣ Type 3 – Network Protocol Driver</b><br>
• Uses middleware server to communicate with database.<br>
• Converts JDBC calls into database-independent protocol.<br>
• Provides flexibility.<br><br>

<b>4️⃣ Type 4 – Thin Driver</b><br>
• Directly converts JDBC calls into database protocol.<br>
• Pure Java driver.<br>
• Best performance and most commonly used.<br><br>

<b>⭐ Important JDBC Interfaces & Classes</b><br><br>

<b>Connection:</b><br>
• Represents connection between Java program and database.<br><br>

<b>Statement:</b><br>
• Used to execute simple SQL queries.<br><br>

<b>PreparedStatement:</b><br>
• Used to execute parameterized queries.<br>
• Improves performance and security.<br><br>

<b>CallableStatement:</b><br>
• Used to execute stored procedures.<br><br>

<b>ResultSet:</b><br>
• Stores data retrieved from database.<br><br>

<b>⭐ Advantages of JDBC</b><br>
• Platform independent.<br>
• Supports multiple databases.<br>
• Improves application performance.<br>
• Provides transaction management.<br><br>

<b>⭐ Limitations of JDBC</b><br>
• Requires manual coding.<br>
• Error handling can be complex.<br>
• Not suitable for very large enterprise applications without frameworks.
      `
    }
  ],

expert: [
  {
    content: `
<b>⭐ Advanced JDBC Concepts (Expert Level)</b><br><br>

<b>📌 JDBC Transaction Management</b><br><br>

Transaction management ensures that database operations follow ACID properties.<br><br>

<b>ACID Properties:</b><br>
• <b>Atomicity:</b> All operations succeed or none are executed.<br>
• <b>Consistency:</b> Database remains in valid state after transaction.<br>
• <b>Isolation:</b> Transactions do not affect each other.<br>
• <b>Durability:</b> Changes remain permanent after commit.<br><br>

<b>Example:</b><br>
• Money transfer between accounts must complete fully or rollback.<br><br>

<b>Key Methods:</b><br>
• <b>setAutoCommit(false)</b> – Disable auto commit.<br>
• <b>commit()</b> – Save changes permanently.<br>
• <b>rollback()</b> – Undo changes.<br><br>

<hr>

<b>📌 Batch Processing in JDBC</b><br><br>

Batch processing allows executing multiple SQL statements together to improve performance.<br><br>

<b>Advantages:</b><br>
• Reduces database calls.<br>
• Improves execution speed.<br>
• Useful for bulk data operations.<br><br>

<b>Methods Used:</b><br>
• addBatch()<br>
• executeBatch()<br>
• clearBatch()<br><br>

<b>Use Case:</b><br>
• Inserting thousands of employee records efficiently.<br><br>

<hr>

<b>📌 Connection Pooling</b><br><br>

Connection pooling improves performance by reusing database connections instead of creating new ones every time.<br><br>

<b>Advantages:</b><br>
• Reduces connection creation overhead.<br>
• Improves application scalability.<br>
• Enhances performance in enterprise applications.<br><br>

<b>Popular Connection Pool Libraries:</b><br>
• HikariCP (Most Popular)<br>
• Apache DBCP<br>
• C3P0<br><br>

<hr>

<b>📌 JDBC RowSet</b><br><br>

RowSet is an advanced wrapper over ResultSet providing enhanced functionality.<br><br>

<b>Types of RowSet:</b><br>

<b>1️⃣ JdbcRowSet</b><br>
• Connected RowSet.<br>
• Works like ResultSet.<br><br>

<b>2️⃣ CachedRowSet</b><br>
• Disconnected RowSet.<br>
• Can operate without database connection.<br><br>

<b>3️⃣ WebRowSet</b><br>
• XML based data representation.<br><br>

<b>4️⃣ FilteredRowSet</b><br>
• Filters data based on criteria.<br><br>

<b>5️⃣ JoinRowSet</b><br>
• Supports joining multiple RowSets.<br><br>

<hr>

<b>📌 Scrollable & Updatable ResultSet</b><br><br>

JDBC supports advanced ResultSet types.<br><br>

<b>Scrollable ResultSet:</b><br>
• Move forward and backward.<br>
• Supports cursor positioning methods.<br><br>

<b>Methods:</b><br>
• next()<br>
• previous()<br>
• first()<br>
• last()<br>
• absolute()<br><br>

<b>Updatable ResultSet:</b><br>
• Allows updating database records directly.<br><br>

<hr>

<b>📌 Metadata in JDBC</b><br><br>

Metadata provides information about database structure.<br><br>

<b>DatabaseMetaData:</b><br>
• Provides information about database.<br>
• Database name, version, tables etc.<br><br>

<b>ResultSetMetaData:</b><br>
• Provides information about query result.<br>
• Column name, data type, column count etc.<br><br>

<hr>

<b>📌 Stored Procedures and CallableStatement</b><br><br>

Stored procedures are precompiled SQL queries stored inside database.<br><br>

<b>Advantages:</b><br>
• Improves performance.<br>
• Enhances security.<br>
• Reduces network traffic.<br><br>

<b>CallableStatement Features:</b><br>
• Supports IN, OUT, INOUT parameters.<br>
• Executes stored procedures efficiently.<br><br>

<hr>

<b>📌 Performance Optimization Techniques</b><br><br>

<b>✔ Use PreparedStatement instead of Statement</b><br>
• Prevents SQL Injection.<br>
• Improves performance through query precompilation.<br><br>

<b>✔ Use Batch Processing</b><br>
• Reduces network calls.<br><br>

<b>✔ Use Connection Pooling</b><br>
• Improves scalability.<br><br>

<b>✔ Close Resources Properly</b><br>
• Prevents memory leaks.<br><br>

<b>✔ Use Indexing in Database</b><br>
• Improves query performance.<br><br>

<hr>

<b>📌 Security Best Practices in JDBC</b><br><br>

• Always use PreparedStatement.<br>
• Validate user inputs.<br>
• Avoid hardcoding database credentials.<br>
• Use encrypted connections.<br>
• Implement proper exception handling.<br><br>

<hr>

<b>📌 Modern Alternatives to JDBC</b><br><br>

JDBC is low-level API. Modern frameworks simplify database operations.<br><br>

<b>Common Frameworks:</b><br>
• Hibernate (ORM Framework)<br>
• Spring Data JPA<br>
• MyBatis<br><br>

These frameworks reduce manual coding and improve maintainability.<br><br>

<hr>

<b>⭐ Real-World JDBC Use Cases</b><br><br>

• Banking Applications<br>
• E-commerce Systems<br>
• Inventory Management Systems<br>
• Enterprise ERP Applications<br>
• Reporting and Data Analytics Systems
    `
  }
]
          },
      

          // ================= DRIVERS =================
        {
  id: 'jdbc-drivers',
  name: 'JDBC Drivers',

  beginner: [
    {
      content: `
<b>What is JDBC Driver?</b><br>

A <b>JDBC Driver</b> is a software program that helps Java applications connect and communicate with databases like MySQL, Oracle, and PostgreSQL.<br><br>

It works as a bridge between Java programs and database systems.<br><br>

<b>Why JDBC Driver is Important?</b><br>

• Helps Java application connect to database.<br>
• Allows sending SQL queries to database.<br>
• Retrieves data from database.<br>
• Performs operations like Insert, Update, Delete, and Select.<br><br>

<b>How JDBC Driver Works?</b><br>

1️⃣ Java program sends request using JDBC API.<br>
2️⃣ JDBC API sends request to JDBC Driver.<br>
3️⃣ JDBC Driver communicates with database.<br>
4️⃣ Database sends result back to Java program.<br><br>

<b>Types of JDBC Drivers (Basic Overview)</b><br>

• Type 1 – JDBC ODBC Bridge Driver<br>
• Type 2 – Native Driver<br>
• Type 3 – Network Protocol Driver<br>
• Type 4 – Thin Driver<br><br>

<b>Example MySQL Driver Class:</b><br>
com.mysql.cj.jdbc.Driver<br><br>

<b>Connection URL Example:</b><br>
jdbc:mysql://localhost:3306/studentdb
      `
    }
  ],

  intermediate: [
    {
      content: `
<b>JDBC Driver</b> is a software component that enables Java applications to interact with databases.<br>
It acts as a bridge between Java programs and database systems by translating Java commands into database-specific commands.<br><br>

<b>Responsibilities of JDBC Driver:</b><br>
• Establish database connection.<br>
• Send SQL queries to database.<br>
• Receive results from database.<br>
• Convert database response into Java objects.<br><br>

<b>Types of JDBC Drivers:</b><br><br>

1️⃣ <b>Type 1 – JDBC ODBC Bridge Driver</b><br>
• Converts JDBC calls into ODBC calls.<br>
• Requires ODBC driver installed in system.<br>
• Performance is slow because it uses two layers.<br>
• Removed from Java 8 and later versions.<br><br>

2️⃣ <b>Type 2 – Native Driver</b><br>
• Uses database native libraries.<br>
• Faster than Type 1 driver.<br>
• Requires native database library installation.<br>
• Platform dependent.<br>
• Example: Oracle OCI Driver.<br><br>

3️⃣ <b>Type 3 – Network Protocol Driver</b><br>
• Uses middleware server to communicate with database.<br>
• Platform independent.<br>
• Allows multiple database connections using one driver.<br>
• Slower due to network communication.<br><br>

4️⃣ <b>Type 4 – Thin Driver (Most Used)</b><br>
• Pure Java driver.<br>
• Direct communication with database server.<br>
• Platform independent.<br>
• High performance and lightweight.<br>
• Most modern applications use this driver.<br><br>

<b>Advantages of Type 4 Driver:</b><br>
• No need for native libraries.<br>
• Better performance.<br>
• Easy to deploy.<br>
• Supports distributed applications.<br><br>

<b>MySQL JDBC Driver</b><br>

Driver Class Name:<br>
com.mysql.cj.jdbc.Driver <br><br>

<b>Loading Driver Example:</b><br>
Class.forName("com.mysql.cj.jdbc.Driver");<br><br>

<b>Connection URL Format:</b><br>
jdbc:mysql://localhost:3306/database_name<br><br>

<b>Example Connection URL:</b><br>
jdbc:mysql://localhost:3306/studentdb<br><br>

<b>Basic Steps to Use JDBC Driver:</b><br>
1️⃣ Load the driver.<br>
2️⃣ Establish connection.<br>
3️⃣ Create statement.<br>
4️⃣ Execute query.<br>
5️⃣ Process result.<br>
6️⃣ Close connection.<br>
      `
    }
  ],
  expert: [
  {
    content: `
<b>⭐ Advanced JDBC Driver Concepts (Expert Level)</b><br><br>

<b>📌 Internal Working of JDBC Drivers</b><br><br>

JDBC Drivers act as translators between Java applications and database protocols.<br><br>

<b>Working Flow:</b><br>
• Java Application sends SQL request using JDBC API.<br>
• JDBC Driver converts SQL request into database specific protocol.<br>
• Database executes query and returns result.<br>
• JDBC Driver converts database result into Java objects.<br><br>

<hr>

<b>📌 DriverManager vs DataSource</b><br><br>

<b>DriverManager:</b><br>
• Traditional way to establish database connection.<br>
• Creates new connection every time.<br>
• Not suitable for large enterprise applications.<br><br>

<b>DataSource:</b><br>
• Advanced alternative to DriverManager.<br>
• Supports connection pooling.<br>
• Improves performance and scalability.<br>
• Used in enterprise applications and frameworks like Spring Boot.<br><br>

<b>Example Benefits of DataSource:</b><br>
• Better resource management.<br>
• Faster database access.<br>
• Supports distributed transactions.<br><br>

<hr>

<b>📌 Driver Loading Mechanism (Modern JDBC)</b><br><br>

Earlier JDBC versions required manual driver loading using:<br>
Class.forName("com.mysql.cj.jdbc.Driver");<br><br>

Modern JDBC (4.0 and above) supports <b>Automatic Driver Loading</b>.<br>
• Driver loads automatically if driver JAR is present in classpath.<br>
• Reduces manual configuration.<br><br>

<hr>

<b>📌 JDBC Driver Performance Comparison</b><br><br>

<b>Type 1 Driver:</b><br>
• Very slow performance.<br>
• Uses ODBC layer.<br>
• Deprecated.<br><br>

<b>Type 2 Driver:</b><br>
• Moderate performance.<br>
• Requires native libraries.<br><br>

<b>Type 3 Driver:</b><br>
• Network overhead present.<br>
• Provides flexibility.<br><br>

<b>Type 4 Driver:</b><br>
• Highest performance.<br>
• Direct communication with database.<br>
• Widely used in modern applications.<br><br>

<hr>

<b>📌 Multi-Database Driver Support</b><br><br>

Enterprise applications often support multiple databases.<br>

Examples:<br>
• MySQL – com.mysql.cj.jdbc.Driver<br>
• Oracle – oracle.jdbc.driver.OracleDriver<br>
• PostgreSQL – org.postgresql.Driver<br>
• SQL Server – com.microsoft.sqlserver.jdbc.SQLServerDriver<br><br>

Applications dynamically load driver based on configuration.<br><br>

<hr>

<b>📌 JDBC Driver Configuration Properties</b><br><br>

JDBC Drivers support various configuration parameters.<br><br>

<b>Common Parameters:</b><br>
• Username and Password<br>
• Connection Timeout<br>
• SSL Configuration<br>
• Auto Reconnect<br>
• Character Encoding<br><br>

<b>Example:</b><br>
jdbc:mysql://localhost:3306/studentdb?useSSL=false&serverTimezone=UTC<br><br>

<hr>

<b>📌 Security Considerations in JDBC Drivers</b><br><br>

• Avoid hardcoding credentials in source code.<br>
• Use environment variables or configuration files.<br>
• Use SSL/TLS encrypted database connections.<br>
• Use parameterized queries to prevent SQL Injection.<br>
• Restrict database access permissions.<br><br>

<hr>

<b>📌 JDBC Driver in Enterprise Architecture</b><br><br>

In enterprise systems, JDBC Drivers work with:<br>

• Application Servers (Tomcat, JBoss, WebLogic)<br>
• ORM Frameworks (Hibernate, JPA)<br>
• Connection Pools (HikariCP, DBCP, C3P0)<br>
• Microservices Architecture<br><br>

Drivers are configured in application configuration files instead of direct coding.<br><br>

<hr>

<b>📌 Troubleshooting JDBC Driver Issues</b><br><br>

<b>Common Problems:</b><br>

<b>Driver Class Not Found Exception</b><br>
• Driver JAR missing in classpath.<br><br>

<b>Connection Refused Error</b><br>
• Database server not running.<br>
• Incorrect URL or port number.<br><br>

<b>Authentication Failure</b><br>
• Wrong username or password.<br><br>

<b>Performance Issues</b><br>
• Not using connection pooling.<br>
• Inefficient query design.<br><br>

<hr>

<b>📌 Best Practices for JDBC Driver Usage</b><br><br>

✔ Always use Type 4 Driver.<br>
✔ Use connection pooling instead of DriverManager.<br>
✔ Externalize database configuration.<br>
✔ Use prepared statements.<br>
✔ Close connections properly using try-with-resources.<br>
✔ Monitor database connection usage.<br><br>

<hr>

<b>⭐ Real-World JDBC Driver Use Cases</b><br><br>

• Banking Transaction Systems<br>
• E-commerce Payment Processing<br>
• Enterprise Resource Planning (ERP)<br>
• Hospital Management Systems<br>
• Cloud-Based Microservices Applications
    `
  }
]
        },

          // ================= CONNECTION STEPS =================
          {
  id: 'jdbc-steps',
  name: 'Steps to Connect JDBC',

  beginner: [
    {
      content: `
<b>Steps to Connect Java Application with Database</b><br><br>

To connect a Java program with a database, JDBC follows some basic steps.<br><br>

1️⃣ <b>Load JDBC Driver</b><br>
This step loads the database driver into memory so Java can communicate with database.<br>
Example:<br>
Class.forName("com.mysql.cj.jdbc.Driver");<br><br>

2️⃣ <b>Create Database Connection</b><br>
This step creates connection between Java application and database.<br>
Example:<br>
DriverManager.getConnection()<br><br>

3️⃣ <b>Create Statement</b><br>
Statement object is used to send SQL queries to database.<br><br>

4️⃣ <b>Execute Query</b><br>
SQL query is executed to perform database operations like Insert, Update, Delete or Select.<br><br>

5️⃣ <b>Process Result</b><br>
If data is retrieved from database, it is stored inside ResultSet object.<br><br>

6️⃣ <b>Close Connection</b><br>
All resources must be closed to avoid memory and connection issues.<br>
      `
    }
  ],

  intermediate: [
    {
      content: `
<b>Steps to Connect Java with Database using JDBC:</b><br><br>

1️⃣ <b>Load Driver</b><br>
• Loads JDBC driver class dynamically.<br>
• Registers driver with DriverManager.<br>
Example:<br>
Class.forName("com.mysql.cj.jdbc.Driver");<br><br>

2️⃣ <b>Establish Connection</b><br>
• Creates connection between Java application and database.<br>
• Requires URL, username and password.<br><br>

Example:<br>
Connection con = DriverManager.getConnection(
"jdbc:mysql://localhost:3306/studentdb",
"root",
"password"
);<br><br>

3️⃣ <b>Create Statement</b><br>
Used to execute SQL queries.<br><br>

Types of Statements:<br>
• Statement → Executes simple SQL queries.<br>
• PreparedStatement → Executes parameterized queries.<br>
• CallableStatement → Executes stored procedures.<br><br>

Example:<br>
Statement stmt = con.createStatement();<br><br>

4️⃣ <b>Execute SQL Query</b><br>

• executeQuery() → Used for SELECT queries.<br>
• executeUpdate() → Used for INSERT, UPDATE, DELETE queries.<br>
• execute() → Used for general SQL execution.<br><br>

Example:<br>
ResultSet rs = stmt.executeQuery("SELECT * FROM student");<br><br>

5️⃣ <b>Process Result</b><br>
• Retrieves data from ResultSet object.<br>
• Uses loop to access records.<br><br>

Example:<br>
while(rs.next())<br>
{<br>
&nbsp;&nbsp;System.out.println(rs.getInt(1));<br>
&nbsp;&nbsp;System.out.println(rs.getString(2));<br>
}<br><br>

6️⃣ <b>Close Resources</b><br>
• Always close database resources.<br>
• Prevents memory leakage and improves performance.<br><br>

Example:<br>
rs.close();<br>
stmt.close();<br>
con.close();
      `
    }
  ],
  expert: [
  {
    content: `
<b>⭐ Advanced JDBC Connection Workflow (Expert Level)</b><br><br>

JDBC connection process in enterprise applications involves optimized resource management, security, and performance tuning.<br><br>

<hr>

<b>📌 Modern JDBC Connection Flow</b><br><br>

1️⃣ Load Driver (Automatic in JDBC 4.0+)<br>
2️⃣ Obtain Connection using DriverManager or DataSource<br>
3️⃣ Create Statement / PreparedStatement / CallableStatement<br>
4️⃣ Execute SQL Operations<br>
5️⃣ Handle ResultSet Efficiently<br>
6️⃣ Manage Transactions<br>
7️⃣ Close Resources using try-with-resources<br><br>

<hr>

<b>📌 Step 1 – Driver Loading (Modern Approach)</b><br><br>

Earlier versions required manual loading:<br>
Class.forName("com.mysql.cj.jdbc.Driver");<br><br>

In JDBC 4.0 and above:<br>
• Driver loads automatically when JAR is added to classpath.<br>
• Reduces configuration complexity.<br>
• Improves maintainability.<br><br>

<hr>

<b>📌 Step 2 – Establish Connection (Enterprise Approach)</b><br><br>

<b>Using DriverManager:</b><br>
• Suitable for small applications.<br>
• Creates new connection every time.<br><br>

<b>Using DataSource (Recommended):</b><br>
• Supports connection pooling.<br>
• Improves performance.<br>
• Used in Spring Boot and enterprise frameworks.<br><br>

<b>Example:</b><br>
DataSource ds = new HikariDataSource();<br>
Connection con = ds.getConnection();<br><br>

<hr>

<b>📌 Step 3 – Statement Selection Strategy</b><br><br>

<b>Statement:</b><br>
• Used for static queries.<br>
• Less secure and slower.<br><br>

<b>PreparedStatement (Most Recommended):</b><br>
• Prevents SQL Injection.<br>
• Precompiled SQL improves performance.<br>
• Supports dynamic parameters.<br><br>

<b>CallableStatement:</b><br>
• Used for stored procedures.<br>
• Supports IN, OUT, INOUT parameters.<br><br>

<hr>

<b>📌 Step 4 – Query Execution Optimization</b><br><br>

<b>Best Practices:</b><br>
• Use batch processing for bulk operations.<br>
• Use indexes in database tables.<br>
• Avoid unnecessary queries.<br>
• Use pagination for large datasets.<br><br>

<b>Execution Methods:</b><br>
• executeQuery() – For SELECT operations.<br>
• executeUpdate() – For INSERT, UPDATE, DELETE.<br>
• executeBatch() – For bulk operations.<br><br>

<hr>

<b>📌 Step 5 – Advanced ResultSet Handling</b><br><br>

<b>ResultSet Types:</b><br>

• TYPE_FORWARD_ONLY → Default cursor movement.<br>
• TYPE_SCROLL_INSENSITIVE → Scrollable without reflecting database changes.<br>
• TYPE_SCROLL_SENSITIVE → Reflects database changes.<br><br>

<b>Concurrency Modes:</b><br>

• CONCUR_READ_ONLY<br>
• CONCUR_UPDATABLE<br><br>

<b>Performance Tip:</b><br>
• Retrieve only required columns.<br>
• Avoid loading unnecessary data.<br><br>

<hr>

<b>📌 Step 6 – Transaction Management</b><br><br>

<b>Auto Commit Mode:</b><br>
• Default mode commits every SQL statement automatically.<br><br>

<b>Manual Transaction Control:</b><br>
con.setAutoCommit(false);<br>
con.commit();<br>
con.rollback();<br><br>

<b>Used In:</b><br>
• Banking transactions.<br>
• Payment processing.<br>
• Multi-step database operations.<br><br>

<hr>

<b>📌 Step 7 – Resource Management (Best Practice)</b><br><br>

<b>Traditional Closing:</b><br>
• Explicit close() method required.<br><br>

<b>Modern Approach – Try With Resources:</b><br>
• Automatically closes resources.<br>
• Prevents memory leaks.<br>
• Improves code readability.<br><br>

<b>Example:</b><br>
try(Connection con = DriverManager.getConnection(url,user,pass);<br>
    PreparedStatement ps = con.prepareStatement(query))<br>
{<br>
&nbsp;&nbsp;// Execute query<br>
}<br><br>

<hr>

<b>📌 Exception Handling Strategy</b><br><br>

• Always catch SQLException.<br>
• Log error messages and SQL state.<br>
• Avoid exposing database errors to users.<br>
• Use centralized exception handling in enterprise applications.<br><br>

<hr>

<b>📌 Performance Optimization Techniques</b><br><br>

✔ Use Connection Pooling (HikariCP Recommended)<br>
✔ Use PreparedStatement<br>
✔ Use Batch Processing<br>
✔ Use Proper Indexing<br>
✔ Minimize Database Round Trips<br>
✔ Close Resources Quickly<br><br>

<hr>

<b>📌 Security Best Practices</b><br><br>

• Never store credentials in source code.<br>
• Use encrypted connections (SSL/TLS).<br>
• Validate user inputs.<br>
• Use parameterized queries.<br>
• Restrict database privileges.<br><br>

<hr>

<b>📌 JDBC Connection in Real Enterprise Applications</b><br><br>

JDBC connection steps are usually handled by frameworks like:<br>

• Spring Boot<br>
• Hibernate ORM<br>
• Spring Data JPA<br><br>

Frameworks automate connection management, transaction handling, and resource optimization.<br><br>

<hr>

<b>⭐ Real-World Example Scenarios</b><br><br>

• Banking Money Transfer Systems<br>
• Online Shopping Platforms<br>
• Hospital Management Systems<br>
• Inventory and ERP Systems<br>
• Cloud-Based Microservices Applications
    `
  }
]
          },

          // ================= STATEMENTS =================
       {
  id: 'jdbc-statements',
  name: 'JDBC Statements',
  beginner: [
    {
      content: `
<b>What are JDBC Statements?</b><br><br>

JDBC Statements are interfaces used to send SQL queries from Java application to database.<br>
They help execute database operations like Insert, Update, Delete and Select.<br><br>

JDBC provides three types of statement interfaces:<br><br>

1️⃣ Statement<br>
2️⃣ PreparedStatement<br>
3️⃣ CallableStatement<br><br>

<b>Why JDBC Statements are Used?</b><br>

• To execute SQL queries.<br>
• To retrieve data from database.<br>
• To insert, update and delete records.<br>
• To call stored procedures.<br><br>

<b>Basic Working Flow:</b><br>

1️⃣ Create database connection.<br>
2️⃣ Create statement object.<br>
3️⃣ Execute SQL query.<br>
4️⃣ Process result.<br>
5️⃣ Close connection.<br>
      `
    }
  ],

  intermediate: [
    {
      content: `
<b>JDBC Statements</b><br><br>

JDBC provides different types of statement interfaces to execute SQL queries. These interfaces are part of the <b>java.sql</b> package.<br><br>

============================<br>
<b>1. Statement</b><br>
============================<br>

• Statement is used to execute simple SQL queries.<br>
• Query compiles every time.<br>
• Less secure (SQL Injection risk).<br><br>

<b>Methods:</b><br>
• executeQuery(String sql)<br>
• executeUpdate(String sql)<br>
• execute(String sql)<br><br>

<b>Example:</b>
      `,

      codeExamples: [
`Connection con = DriverManager.getConnection(
"jdbc:mysql://localhost:3306/test","root","root");

Statement st = con.createStatement();

ResultSet rs = st.executeQuery("select * from employee");

while(rs.next()){
 System.out.println(rs.getString("username"));
}

rs.close();
st.close();
con.close();`
      ]
    },

    // ================= PREPARED STATEMENT =================
    {
      content: `
============================<br>
<b>2. PreparedStatement</b><br>
============================<br>

• Extends Statement interface.<br>
• Query is precompiled.<br>
• Supports parameterized queries.<br>
• Prevents SQL Injection.<br><br>

<b>Methods:</b><br>
• executeQuery()<br>
• executeUpdate()<br>
• execute()<br>
• setString(), setInt(), etc.<br><br>

<b>Example:</b>
      `,

      codeExamples: [
`Connection con = DriverManager.getConnection(
"jdbc:mysql://localhost:3306/test","root","root");

PreparedStatement ps = con.prepareStatement(
"insert into employee(username,password) values(?,?)");

ps.setString(1,"admin");
ps.setString(2,"123");

ps.executeUpdate();

ps.close();
con.close();`
      ]
    },

    // ================= CALLABLE STATEMENT =================
    {
      content: `
============================<br>
<b>3. CallableStatement</b><br>
============================<br>

• Used to execute stored procedures.<br>
• Supports IN, OUT and INOUT parameters.<br>
• Used for complex database logic.<br><br>

<b>Methods:</b><br>
• executeQuery()<br>
• executeUpdate()<br>
• execute()<br>
• registerOutParameter()<br><br>

<b>Example:</b>
      `,

      codeExamples: [
`Connection con = DriverManager.getConnection(
"jdbc:mysql://localhost:3306/test","root","root");

CallableStatement cs = con.prepareCall("{call getEmployee()}");

ResultSet rs = cs.executeQuery();

while(rs.next()){
 System.out.println(rs.getString(1));
}

rs.close();
cs.close();
con.close();`
      ]
    }
  ],
  expert: [
  {
    content: `
<b>⭐ Advanced JDBC Statement Concepts (Expert Level)</b><br><br>

JDBC Statement interfaces are critical components for executing SQL operations efficiently, securely, and with optimized performance in enterprise applications.<br><br>

<hr>

<b>📌 Statement vs PreparedStatement vs CallableStatement (Deep Comparison)</b><br><br>

<b>Statement:</b><br>
• Used for static SQL queries.<br>
• Query compiled every time.<br>
• Higher risk of SQL Injection.<br>
• Slower performance.<br><br>

<b>PreparedStatement:</b><br>
• Precompiled SQL query.<br>
• Supports parameterized inputs.<br>
• Prevents SQL Injection attacks.<br>
• Improves performance for repeated queries.<br>
• Most recommended in modern applications.<br><br>

<b>CallableStatement:</b><br>
• Used to execute stored procedures.<br>
• Supports IN, OUT and INOUT parameters.<br>
• Improves database-side processing.<br>
• Reduces network traffic.<br><br>

<hr>

<b>📌 Query Precompilation Mechanism</b><br><br>

PreparedStatement queries are precompiled and stored in database cache.<br><br>

<b>Benefits:</b><br>
• Faster execution for repeated queries.<br>
• Reduced query parsing time.<br>
• Improved application scalability.<br><br>

<hr>

<b>📌 SQL Injection Prevention Strategy</b><br><br>

PreparedStatement uses parameter placeholders (?) which separate SQL logic from data input.<br><br>

<b>Example Risk in Statement:</b><br>
User Input: ' OR '1'='1<br>
Can manipulate SQL query and access unauthorized data.<br><br>

<b>PreparedStatement Protection:</b><br>
Automatically escapes user input and prevents malicious SQL injection.<br><br>

<hr>

<b>📌 Batch Processing Using PreparedStatement</b><br><br>

PreparedStatement supports batch execution for bulk operations.<br><br>

<b>Methods:</b><br>
• addBatch()<br>
• executeBatch()<br>
• clearBatch()<br><br>

<b>Advantages:</b><br>
• Reduces database round trips.<br>
• Improves performance in bulk data insertion.<br>
• Used in enterprise data migration and ETL processes.<br><br>

<hr>

<b>📌 Advanced CallableStatement Features</b><br><br>

CallableStatement supports complex stored procedure execution.<br><br>

<b>Parameter Types:</b><br>

• IN Parameter → Input value passed to procedure.<br>
• OUT Parameter → Output value returned from procedure.<br>
• INOUT Parameter → Both input and output.<br><br>

<b>Enterprise Use Cases:</b><br>
• Financial calculations.<br>
• Complex reporting logic.<br>
• Business rule implementation at database level.<br><br>

<hr>

<b>📌 Statement Execution Methods Deep Understanding</b><br><br>

<b>executeQuery()</b><br>
• Used only for SELECT queries.<br>
• Returns ResultSet.<br><br>

<b>executeUpdate()</b><br>
• Used for INSERT, UPDATE, DELETE.<br>
• Returns number of affected rows.<br><br>

<b>execute()</b><br>
• Used when query type is unknown.<br>
• Returns boolean value.<br><br>

<hr>

<b>📌 Performance Optimization Techniques</b><br><br>

✔ Prefer PreparedStatement over Statement.<br>
✔ Use batch processing for large datasets.<br>
✔ Avoid executing queries inside loops unnecessarily.<br>
✔ Use stored procedures for complex operations.<br>
✔ Retrieve only required columns.<br><br>

<hr>

<b>📌 Resource Management Best Practices</b><br><br>

<b>Use Try-With-Resources:</b><br>
• Automatically closes Statement and Connection objects.<br>
• Prevents memory leaks.<br><br>

<b>Example:</b><br>
try(Connection con = DriverManager.getConnection(url,user,pass);<br>
    PreparedStatement ps = con.prepareStatement(query))<br>
{<br>
&nbsp;&nbsp;// Execute query safely<br>
}<br><br>

<hr>

<b>📌 Concurrency and Thread Safety</b><br><br>

• Statement objects are not thread-safe.<br>
• Each thread should create its own statement object.<br>
• Avoid sharing Statement across multiple threads.<br><br>

<hr>

<b>📌 Metadata Support in Statements</b><br><br>

Statements can access metadata information.<br><br>

<b>ResultSetMetaData:</b><br>
• Provides column details.<br>
• Helps dynamic query processing.<br><br>

<b>ParameterMetaData:</b><br>
• Provides parameter information for PreparedStatement.<br><br>

<hr>

<b>📌 Statement Usage in Modern Frameworks</b><br><br>

In enterprise applications, direct statement usage is replaced by frameworks:<br>

• Spring JDBC Template<br>
• Hibernate ORM<br>
• Spring Data JPA<br><br>

These frameworks internally use PreparedStatement for performance and security.<br><br>

<hr>

<b>📌 Common Statement-Related Exceptions</b><br><br>

• SQLException → General database error.<br>
• SQLSyntaxErrorException → Invalid SQL query.<br>
• SQLTimeoutException → Query execution timeout.<br><br>

<hr>

<b>📌 Security Best Practices</b><br><br>

• Never concatenate user input in SQL queries.<br>
• Always use PreparedStatement.<br>
• Validate input data.<br>
• Use database role-based access.<br><br>

<hr>

<b>⭐ Real-World Usage Scenarios</b><br><br>

• User Authentication Systems<br>
• Banking Transaction Processing<br>
• Order Management Systems<br>
• Data Migration and Batch Processing<br>
• Reporting and Analytics Applications
    `
  }
]
       },

          // ================= INSERT =================
        {
  id: 'jdbc-insert',
  name: 'Insert Using PreparedStatement',
   beginner: [
    {
      content: `
<b>Insert Data Using PreparedStatement</b><br><br>

PreparedStatement is used in JDBC to insert data into a database table safely.<br>
It allows passing values dynamically instead of writing SQL values directly.<br><br>

<b>Why Use PreparedStatement?</b><br>
• It is safer than Statement.<br>
• It avoids SQL Injection.<br>
• It improves performance.<br>
• It is easy to reuse.<br><br>

<b>Basic Steps:</b><br>
1️⃣ Connect Java application to database.<br>
2️⃣ Write SQL INSERT query with placeholders (?).<br>
3️⃣ Set values using setter methods.<br>
4️⃣ Execute the query.<br>
5️⃣ Close the connection.<br><br>

<b>Example Query:</b><br>
insert into employee(username,password) values(?,?)<br><br>

<b>Method Used:</b><br>
executeUpdate() – used to insert records.
      `
    }
  ],

  intermediate: [
    {
      content: `
<b>Insert Using PreparedStatement</b><br><br>

PreparedStatement is a JDBC interface used to execute parameterized SQL queries. 
It is mainly used to insert records into a database securely and efficiently.<br><br>

<b>⭐ Why PreparedStatement is Used?</b><br>
• Precompiled SQL query improves performance.<br>
• Prevents SQL Injection attacks.<br>
• Allows dynamic value insertion.<br>
• Easy to maintain and reuse.<br><br>

<b>📌 Steps to Insert Record Using PreparedStatement:</b><br>
1️⃣ Load JDBC Driver.<br>
2️⃣ Establish Database Connection.<br>
3️⃣ Create PreparedStatement Object.<br>
4️⃣ Set Parameter Values.<br>
5️⃣ Execute Query.<br>
6️⃣ Close Database Resources.<br><br>

<b>🔍 Method Used:</b><br>
<b>executeUpdate()</b> ➝ Used for INSERT, UPDATE, DELETE operations.<br><br>

<b>📊 Example:</b><br>
The below program inserts username and password into employee table.
      `,
      codeExamples: [
`import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class InsertEmployee {

    public static void main(String[] args) {

        try {

            // Step 1: Load JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Step 2: Establish Connection
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/test", "root", "root");

            // Step 3: Create PreparedStatement
            PreparedStatement ps = con.prepareStatement(
                    "insert into employee(username,password) values(?,?)");

            // Step 4: Set Values
            ps.setString(1, "admin");
            ps.setString(2, "guest");

            // Step 5: Execute Query
            int rows = ps.executeUpdate();

            // Display Result
            if (rows > 0) {
                System.out.println("Record Inserted Successfully");
            }

            // Step 6: Close Resources
            ps.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
      ]
    }
  ],
  expert: [
  {
    content: `
<b>⭐ Advanced Insert Operation Using PreparedStatement (Expert Level)</b><br><br>

PreparedStatement is the most recommended approach for inserting records in enterprise applications because it provides better security, performance optimization, and scalability.<br><br>

<hr>

<b>📌 Internal Working of PreparedStatement Insert</b><br><br>

When PreparedStatement is used:<br>

• SQL query is precompiled by database.<br>
• Database stores execution plan in cache.<br>
• Only parameter values change during execution.<br>
• Reduces query parsing overhead.<br>
• Improves performance for repeated insert operations.<br><br>

<hr>

<b>📌 Insert Operation Using Batch Processing</b><br><br>

Batch processing allows inserting multiple records in a single database call.<br><br>

<b>Advantages:</b><br>
• Reduces database network round trips.<br>
• Improves bulk data insertion performance.<br>
• Used in ETL and data migration systems.<br><br>

<b>Example:</b><br>
PreparedStatement ps = con.prepareStatement(
"insert into employee(username,password) values(?,?)");<br><br>

ps.setString(1,"user1");<br>
ps.setString(2,"pass1");<br>
ps.addBatch();<br><br>

ps.setString(1,"user2");<br>
ps.setString(2,"pass2");<br>
ps.addBatch();<br><br>

ps.executeBatch();<br><br>

<hr>

<b>📌 Transaction Management in Insert Operations</b><br><br>

Insert operations often require transaction control to maintain data consistency.<br><br>

<b>Manual Transaction Example:</b><br>
con.setAutoCommit(false);<br><br>

ps.executeUpdate();<br>
con.commit();<br><br>

<b>If Error Occurs:</b><br>
con.rollback();<br><br>

<b>Used In:</b><br>
• Banking Systems<br>
• Payment Gateways<br>
• Multi-table insert operations<br><br>

<hr>

<b>📌 Retrieving Auto Generated Keys</b><br><br>

Sometimes database generates primary keys automatically.<br><br>

<b>Example:</b><br>
PreparedStatement ps = con.prepareStatement(
"insert into employee(username,password) values(?,?)",
Statement.RETURN_GENERATED_KEYS);<br><br>

ps.executeUpdate();<br>
ResultSet rs = ps.getGeneratedKeys();<br><br>

while(rs.next())<br>
{<br>
&nbsp;&nbsp;System.out.println("Generated ID: " + rs.getInt(1));<br>
}<br><br>

<hr>

<b>📌 Handling Different Data Types</b><br><br>

PreparedStatement provides multiple setter methods.<br><br>

<b>Common Methods:</b><br>

• setString()<br>
• setInt()<br>
• setDouble()<br>
• setDate()<br>
• setBoolean()<br>
• setBlob()<br>
• setClob()<br><br>

Correct setter usage ensures type safety and prevents runtime errors.<br><br>

<hr>

<b>📌 Performance Optimization Techniques</b><br><br>

✔ Use batch insertion for large data sets.<br>
✔ Use connection pooling (HikariCP recommended).<br>
✔ Avoid creating PreparedStatement repeatedly.<br>
✔ Use indexes on frequently inserted columns.<br>
✔ Disable auto commit during bulk insertion.<br><br>

<hr>

<b>📌 Security Best Practices</b><br><br>

• Never concatenate user input in SQL queries.<br>
• Always use parameter placeholders (?).<br>
• Validate user input before insertion.<br>
• Encrypt sensitive data before storing.<br>
• Use restricted database privileges.<br><br>

<hr>

<b>📌 Error Handling Strategy</b><br><br>

Always handle SQLException properly.<br><br>

<b>Best Practices:</b><br>

• Log SQL error codes and messages.<br>
• Use rollback mechanism.<br>
• Avoid exposing database errors to users.<br><br>

<hr>

<b>📌 Resource Management (Modern Approach)</b><br><br>

Use try-with-resources to automatically close connections.<br><br>

<b>Example:</b><br>
try(Connection con = DriverManager.getConnection(url,user,pass);<br>
    PreparedStatement ps = con.prepareStatement(query))<br>
{<br>
&nbsp;&nbsp;ps.executeUpdate();<br>
}<br><br>

<hr>

<b>📌 Insert Operation in Enterprise Frameworks</b><br><br>

In modern applications, insert operations are handled by frameworks like:<br>

• Spring JDBC Template<br>
• Hibernate ORM<br>
• Spring Data JPA<br><br>

These frameworks internally use PreparedStatement for secure and optimized insert operations.<br><br>

<hr>

<b>⭐ Real-World Use Cases</b><br><br>

• User Registration Systems<br>
• Online Order Placement Systems<br>
• Banking Transaction Logs<br>
• Hospital Patient Records<br>
• Inventory Management Systems
    `
  }
]
        },

          // ================= UPDATE =================
         {
  id: 'jdbc-update',
  name: 'Update Using PreparedStatement',
   beginner: [
    {
      content: `
<b>Update Data Using PreparedStatement</b><br><br>

PreparedStatement is used to modify or update existing data in a database table.<br>
It allows passing values dynamically using placeholders (?).<br><br>

<b>Why PreparedStatement is Used for Update?</b><br>
• Safer than Statement.<br>
• Prevents SQL Injection.<br>
• Improves performance.<br>
• Makes query reusable.<br><br>

<b>Basic Steps:</b><br>
1️⃣ Connect Java application to database.<br>
2️⃣ Write SQL UPDATE query with placeholders (?).<br>
3️⃣ Set values using setter methods.<br>
4️⃣ Execute update query.<br>
5️⃣ Close connection.<br><br>

<b>Example Query:</b><br>
update employee set username=? where id=?<br><br>

<b>Method Used:</b><br>
executeUpdate() – used to update records and returns number of affected rows.
      `
    }
  ],

  intermediate: [
    {
      content: `
<b>Update Using PreparedStatement</b><br><br>

PreparedStatement is used to update existing records in a database table. 
It allows dynamic value passing using parameter placeholders (?).<br><br>

<b>⭐ Why Use PreparedStatement for Update?</b><br>
• Provides better performance (query precompiled).<br>
• Prevents SQL Injection.<br>
• Makes query reusable.<br>
• Safer and easier to maintain.<br><br>

<b>📌 Steps to Update Record Using PreparedStatement:</b><br>
1️⃣ Load JDBC Driver.<br>
2️⃣ Establish Database Connection.<br>
3️⃣ Create PreparedStatement Object.<br>
4️⃣ Set Parameter Values.<br>
5️⃣ Execute Update Query.<br>
6️⃣ Close Database Resources.<br><br>

<b>🔍 Method Used:</b><br>
<b>executeUpdate()</b> ➝ Used for UPDATE, INSERT, DELETE operations and returns number of affected rows.<br><br>

<b>📊 Example:</b><br>
The below program updates employee username based on employee id.
      `,
      codeExamples: [
`import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class UpdateEmployee {

    public static void main(String[] args) {

        try {

            // Step 1: Load JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Step 2: Establish Connection
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/test", "root", "root");

            // Step 3: Create PreparedStatement
            PreparedStatement ps = con.prepareStatement(
                    "update employee set username=? where id=?");

            // Step 4: Set Values
            ps.setString(1, "pankaj");
            ps.setInt(2, 1);

            // Step 5: Execute Update
            int rows = ps.executeUpdate();

            // Display Result
            if (rows > 0) {
                System.out.println("Record Updated Successfully");
            } else {
                System.out.println("Record Not Found");
            }

            // Step 6: Close Resources
            ps.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
      ]
    }
  ],
  expert: [
  {
    content: `
<b>⭐ Advanced Update Operation Using PreparedStatement (Expert Level)</b><br><br>

PreparedStatement is widely used in enterprise applications for updating database records securely, efficiently, and with transaction safety.<br><br>

<hr>

<b>📌 Internal Working of Update Using PreparedStatement</b><br><br>

• SQL UPDATE query is precompiled by database.<br>
• Execution plan is cached for reuse.<br>
• Only parameter values change during execution.<br>
• Reduces query parsing overhead.<br>
• Improves performance in repeated update operations.<br><br>

<hr>

<b>📌 Dynamic Update Query Handling</b><br><br>

PreparedStatement allows dynamic value substitution using placeholders (?).<br><br>

<b>Example:</b><br>
update employee set username=?, password=? where id=?<br><br>

This approach ensures:<br>
✔ Better readability<br>
✔ Better maintainability<br>
✔ Strong security<br><br>

<hr>

<b>📌 Batch Update Processing</b><br><br>

Batch processing allows updating multiple records in one database interaction.<br><br>

<b>Advantages:</b><br>
• Improves bulk update performance.<br>
• Reduces network overhead.<br>
• Used in enterprise data synchronization.<br><br>

<b>Example:</b><br>
PreparedStatement ps = con.prepareStatement(
"update employee set username=? where id=?");<br><br>

ps.setString(1,"user1");<br>
ps.setInt(2,1);<br>
ps.addBatch();<br><br>

ps.setString(1,"user2");<br>
ps.setInt(2,2);<br>
ps.addBatch();<br><br>

ps.executeBatch();<br><br>

<hr>

<b>📌 Transaction Management in Update Operations</b><br><br>

Update operations often require transaction consistency.<br><br>

<b>Manual Transaction Control:</b><br>
con.setAutoCommit(false);<br><br>

ps.executeUpdate();<br>
con.commit();<br><br>

<b>If Update Fails:</b><br>
con.rollback();<br><br>

<b>Used In:</b><br>
• Banking Account Updates<br>
• Payment Status Updates<br>
• Inventory Stock Updates<br><br>

<hr>

<b>📌 Optimistic and Pessimistic Locking Concepts</b><br><br>

<b>Optimistic Locking:</b><br>
• Uses version or timestamp column.<br>
• Prevents data overwriting in concurrent updates.<br><br>

<b>Pessimistic Locking:</b><br>
• Locks database row before update.<br>
• Prevents simultaneous modification.<br><br>

Used in high concurrency enterprise applications.<br><br>

<hr>

<b>📌 Handling Different Data Types in Update</b><br><br>

PreparedStatement provides setter methods for safe data handling.<br><br>

<b>Common Methods:</b><br>

• setString()<br>
• setInt()<br>
• setDouble()<br>
• setDate()<br>
• setBoolean()<br>
• setBlob()<br>
• setClob()<br><br>

Correct setter usage ensures data integrity.<br><br>

<hr>

<b>📌 Performance Optimization Techniques</b><br><br>

✔ Use batch updates for bulk data modification.<br>
✔ Use indexed columns in WHERE clause.<br>
✔ Avoid unnecessary update queries.<br>
✔ Disable auto commit for bulk update operations.<br>
✔ Reuse PreparedStatement object.<br><br>

<hr>

<b>📌 Security Best Practices</b><br><br>

• Avoid string concatenation in SQL queries.<br>
• Always use parameterized queries.<br>
• Validate input values before updating database.<br>
• Restrict update privileges in database roles.<br><br>

<hr>

<b>📌 Error Handling Strategy</b><br><br>

Always handle SQLException properly.<br><br>

<b>Best Practices:</b><br>

• Log SQL error code and message.<br>
• Use rollback to maintain data consistency.<br>
• Provide user-friendly error messages.<br><br>

<hr>

<b>📌 Resource Management Using Try-With-Resources</b><br><br>

Modern Java applications use automatic resource management.<br><br>

<b>Example:</b><br>
try(Connection con = DriverManager.getConnection(url,user,pass);<br>
    PreparedStatement ps = con.prepareStatement(query))<br>
{<br>
&nbsp;&nbsp;ps.executeUpdate();<br>
}<br><br>

<hr>

<b>📌 Update Operations in Enterprise Frameworks</b><br><br>

In modern applications, update operations are managed by frameworks:<br>

• Spring JDBC Template<br>
• Hibernate ORM<br>
• Spring Data JPA<br><br>

These frameworks internally use PreparedStatement for secure and optimized updates.<br><br>

<hr>

<b>⭐ Real-World Use Cases</b><br><br>

• Updating User Profile Information<br>
• Updating Payment Transaction Status<br>
• Updating Inventory Stock Levels<br>
• Updating Patient Medical Records<br>
• Updating Order Processing Status
    `
  }
]
         },

          // ================= DELETE =================
         {
  id: 'jdbc-delete',
  name: 'Delete Using PreparedStatement',
   beginner: [
    {
      content: `
<b>Delete Data Using PreparedStatement</b><br><br>

PreparedStatement is used to remove or delete records from a database table safely.<br>
It allows passing values dynamically using placeholders (?).<br><br>

<b>Why PreparedStatement is Used for Delete?</b><br>
• Provides secure query execution.<br>
• Prevents SQL Injection.<br>
• Improves performance.<br>
• Makes query reusable.<br><br>

<b>Basic Steps:</b><br>
1️⃣ Connect Java application to database.<br>
2️⃣ Write SQL DELETE query with placeholders (?).<br>
3️⃣ Set values using setter methods.<br>
4️⃣ Execute delete query.<br>
5️⃣ Close database connection.<br><br>

<b>Example Query:</b><br>
delete from employee where id=?<br><br>

<b>Method Used:</b><br>
executeUpdate() – used to delete records and returns number of affected rows.
      `
    }
  ],


  intermediate: [
    {
      content: `
<b>Delete Using PreparedStatement</b><br><br>

PreparedStatement is used to delete records from a database table. 
It allows passing dynamic values using parameter placeholders (?).<br><br>

<b>⭐ Why Use PreparedStatement for Delete?</b><br>
• Improves performance (Query is precompiled).<br>
• Prevents SQL Injection.<br>
• Provides secure and reusable query execution.<br>
• Easy to maintain and modify.<br><br>

<b>📌 Steps to Delete Record Using PreparedStatement:</b><br>
1️⃣ Load JDBC Driver.<br>
2️⃣ Establish Database Connection.<br>
3️⃣ Create PreparedStatement Object.<br>
4️⃣ Set Parameter Values.<br>
5️⃣ Execute Delete Query.<br>
6️⃣ Close Database Resources.<br><br>

<b>🔍 Method Used:</b><br>
<b>executeUpdate()</b> ➝ Used for DELETE, INSERT, UPDATE operations and returns number of affected rows.<br><br>

<b>📊 Example:</b><br>
The below program deletes employee record based on employee id.
      `,
      codeExamples: [
`import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class DeleteEmployee {

    public static void main(String[] args) {

        try {

            // Step 1: Load JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Step 2: Establish Connection
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/test", "root", "root");

            // Step 3: Create PreparedStatement
            PreparedStatement ps = con.prepareStatement(
                    "delete from employee where id=?");

            // Step 4: Set Value
            ps.setInt(1, 2);

            // Step 5: Execute Delete
            int rows = ps.executeUpdate();

            // Display Result
            if (rows > 0) {
                System.out.println("Record Deleted Successfully");
            } else {
                System.out.println("Record Not Found");
            }

            // Step 6: Close Resources
            ps.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
      ]
    }
  ],
  expert: [
  {
    content: `
<b>⭐ Advanced Delete Operation Using PreparedStatement (Expert Level)</b><br><br>

PreparedStatement is extensively used in enterprise applications for secure, optimized, and transaction-safe delete operations. 
Deleting records is a sensitive operation because it permanently removes data from database tables.<br><br>

<hr>

<b>📌 Internal Working of Delete Using PreparedStatement</b><br><br>

• SQL DELETE query is precompiled by the database.<br>
• Execution plan is cached and reused.<br>
• Parameter values are passed dynamically.<br>
• Reduces SQL parsing overhead.<br>
• Improves execution efficiency.<br><br>

<hr>

<b>📌 Dynamic Delete Query Handling</b><br><br>

PreparedStatement allows dynamic condition passing using placeholders (?).<br><br>

<b>Example:</b><br>
delete from employee where id=?<br><br>

Or multiple condition delete:<br>
delete from employee where username=? and status=?<br><br>

<b>Benefits:</b><br>
✔ Safer query execution<br>
✔ Reusable queries<br>
✔ Better readability and maintainability<br><br>

<hr>

<b>📌 Batch Delete Processing</b><br><br>

Batch processing allows deletion of multiple records using a single database interaction.<br><br>

<b>Advantages:</b><br>
• Improves bulk delete performance.<br>
• Reduces network calls.<br>
• Used in data cleanup and archival systems.<br><br>

<b>Example:</b><br>
PreparedStatement ps = con.prepareStatement(
"delete from employee where id=?");<br><br>

ps.setInt(1, 5);<br>
ps.addBatch();<br><br>

ps.setInt(1, 6);<br>
ps.addBatch();<br><br>

ps.executeBatch();<br><br>

<hr>

<b>📌 Transaction Management in Delete Operations</b><br><br>

Delete operations should be executed carefully to maintain database consistency.<br><br>

<b>Manual Transaction Control:</b><br>
con.setAutoCommit(false);<br><br>

ps.executeUpdate();<br>
con.commit();<br><br>

<b>If Delete Fails:</b><br>
con.rollback();<br><br>

<b>Used In:</b><br>
• Banking Transaction Reversal<br>
• Removing Invalid Records<br>
• Order Cancellation Systems<br>
• Data Cleanup Processes<br><br>

<hr>

<b>📌 Logical Delete vs Physical Delete</b><br><br>

<b>Physical Delete:</b><br>
• Permanently removes record from database.<br>
• Example: delete from employee where id=?<br><br>

<b>Logical Delete (Soft Delete):</b><br>
• Record is marked as deleted using flag or status column.<br>
• Example:<br>
update employee set status='DELETED' where id=?<br><br>

<b>Logical Delete Advantages:</b><br>
✔ Data recovery possible<br>
✔ Maintains audit history<br>
✔ Used in enterprise applications<br><br>

<hr>

<b>📌 Foreign Key Constraint Handling</b><br><br>

Delete operations must consider relational dependencies.<br><br>

<b>Common Strategies:</b><br>

• ON DELETE CASCADE ➝ Automatically deletes child records.<br>
• ON DELETE SET NULL ➝ Sets foreign key to NULL.<br>
• Manual validation before delete.<br><br>

<hr>

<b>📌 Performance Optimization Techniques</b><br><br>

✔ Use indexed columns in WHERE clause.<br>
✔ Use batch delete for large data removal.<br>
✔ Avoid deleting records without WHERE condition.<br>
✔ Disable auto commit during bulk delete operations.<br>
✔ Use LIMIT clause when deleting huge datasets.<br><br>

<hr>

<b>📌 Security Best Practices</b><br><br>

• Always use parameterized queries.<br>
• Validate delete conditions before execution.<br>
• Restrict delete privileges using database roles.<br>
• Maintain audit logs for delete operations.<br><br>

<hr>

<b>📌 Error Handling Strategy</b><br><br>

Always handle SQLException carefully.<br><br>

<b>Best Practices:</b><br>

• Log SQL error codes and messages.<br>
• Rollback transaction on failure.<br>
• Avoid exposing database errors to users.<br><br>

<hr>

<b>📌 Resource Management Using Try-With-Resources</b><br><br>

Modern Java applications use automatic resource management.<br><br>

<b>Example:</b><br>
try(Connection con = DriverManager.getConnection(url,user,pass);<br>
    PreparedStatement ps = con.prepareStatement(query))<br>
{<br>
&nbsp;&nbsp;ps.executeUpdate();<br>
}<br><br>

<hr>

<b>📌 Delete Operations in Enterprise Frameworks</b><br><br>

Modern Java frameworks internally use PreparedStatement for delete operations:<br>

• Spring JDBC Template<br>
• Hibernate ORM<br>
• Spring Data JPA<br><br>

These frameworks provide additional transaction and auditing support.<br><br>

<hr>

<b>⭐ Real-World Use Cases</b><br><br>

• Deleting Cancelled Orders<br>
• Removing Expired User Accounts<br>
• Clearing Old Log Records<br>
• Removing Duplicate Data Entries<br>
• Archiving Historical Data
    `
  }
]
         },

          // ================= SELECT =================
         {
  id: 'jdbc-select',
  name: 'Select Using ResultSet',
  
  beginner: [
    {
      content: `
<b>Select Data Using ResultSet</b><br><br>

ResultSet is used in JDBC to retrieve data from a database table when SELECT query is executed.<br>
It stores records returned from database and allows Java program to read them.<br><br>

<b>Why ResultSet is Used?</b><br>
• To read data from database.<br>
• To access table records row by row.<br>
• To retrieve values using column name or column index.<br><br>

<b>Basic Steps:</b><br>
1️⃣ Connect Java application to database.<br>
2️⃣ Write SELECT SQL query.<br>
3️⃣ Execute query using PreparedStatement.<br>
4️⃣ Store result inside ResultSet object.<br>
5️⃣ Read records using while loop.<br>
6️⃣ Close database connection.<br><br>

<b>Common Methods:</b><br>
• next() → Moves to next record.<br>
• getString() → Retrieves string data.<br>
• getInt() → Retrieves integer data.<br><br>

<b>Example Query:</b><br>
select * from employee
      `
    }
  ],

  intermediate: [
    {
      content: `
<b>Select Using ResultSet</b><br><br>

ResultSet is used to retrieve and process data returned from SELECT SQL queries. 
It stores the data returned from database in tabular form.<br><br>

<b>⭐ What is ResultSet?</b><br>
• ResultSet is an interface present in the <b>java.sql</b> package.<br>
• It represents the result of SELECT query execution.<br>
• It allows iteration through database records.<br>
• Data is accessed column-wise or index-wise.<br><br>

<b>📌 Why Use PreparedStatement with ResultSet?</b><br>
• Provides better performance.<br>
• Prevents SQL Injection.<br>
• Allows dynamic and reusable queries.<br><br>

<b>📌 Steps to Retrieve Data Using ResultSet:</b><br>
1️⃣ Load JDBC Driver.<br>
2️⃣ Establish Database Connection.<br>
3️⃣ Create PreparedStatement Object.<br>
4️⃣ Execute SELECT Query.<br>
5️⃣ Store Result in ResultSet.<br>
6️⃣ Iterate Records Using while Loop.<br>
7️⃣ Close Database Resources.<br><br>

<b>🔍 Important ResultSet Methods:</b><br>
• next() ➝ Moves cursor to next record.<br>
• getInt(columnName/index) ➝ Retrieves integer value.<br>
• getString(columnName/index) ➝ Retrieves string value.<br>
• getDouble() ➝ Retrieves double value.<br>
• close() ➝ Closes ResultSet object.<br><br>

<b>📊 Example:</b><br>
The below program retrieves employee records from database and displays them.
      `,
      codeExamples: [
`import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class SelectEmployee {

    public static void main(String[] args) {

        try {

            // Step 1: Load JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Step 2: Establish Connection
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/test", "root", "root");

            // Step 3: Create PreparedStatement
            PreparedStatement ps = con.prepareStatement(
                    "select * from employee");

            // Step 4: Execute Query
            ResultSet rs = ps.executeQuery();

            // Step 5: Process ResultSet
            while (rs.next()) {

                System.out.println("ID : " + rs.getInt("id"));
                System.out.println("Username : " + rs.getString("username"));
                System.out.println("-------------------------");
            }

            // Step 6: Close Resources
            rs.close();
            ps.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
      ]
    }
  ],
  expert: [
    {
      content: `
<b>Select Using ResultSet – Expert Level</b><br><br>

At expert level, ResultSet is not only used for reading database records, but also for handling advanced data navigation, performance optimization, concurrency control, and updatable result sets.<br><br>

<b>⭐ Types of ResultSet</b><br>

ResultSet can be created with different navigation and concurrency modes.<br><br>

<b>1️⃣ ResultSet Types (Cursor Movement)</b><br>
• TYPE_FORWARD_ONLY ➝ Cursor moves only forward (Default & fastest).<br>
• TYPE_SCROLL_INSENSITIVE ➝ Allows forward & backward movement, does not reflect database changes.<br>
• TYPE_SCROLL_SENSITIVE ➝ Allows navigation and reflects database changes dynamically.<br><br>

<b>2️⃣ Concurrency Modes</b><br>
• CONCUR_READ_ONLY ➝ Only reading data allowed.<br>
• CONCUR_UPDATABLE ➝ Allows updating data directly using ResultSet.<br><br>

<b>📌 Creating Advanced ResultSet</b><br>
PreparedStatement ps = con.prepareStatement(
"select * from employee",
ResultSet.TYPE_SCROLL_INSENSITIVE,
ResultSet.CONCUR_READ_ONLY
);<br><br>

<b>⭐ Advanced Navigation Methods</b><br>
• first() ➝ Moves cursor to first record.<br>
• last() ➝ Moves cursor to last record.<br>
• previous() ➝ Moves cursor backward.<br>
• absolute(int row) ➝ Moves cursor to specific row number.<br>
• relative(int rows) ➝ Moves cursor forward/backward relative to current position.<br>
• beforeFirst() ➝ Moves cursor before first record.<br>
• afterLast() ➝ Moves cursor after last record.<br><br>

<b>⭐ Performance Optimization Techniques</b><br>
• Fetch Size Control ➝ Improves memory performance.<br>
• Column Index Access ➝ Faster than column name access.<br>
• Limiting ResultSet Columns ➝ Improves query efficiency.<br>
• Using Connection Pooling ➝ Enhances performance in large applications.<br><br>

<b>⭐ Updatable ResultSet</b><br>
Expert developers can update database records directly using ResultSet methods without writing UPDATE query.<br><br>

<b>Common Update Methods:</b><br>
• updateString()<br>
• updateInt()<br>
• updateRow()<br><br>

<b>⭐ Best Practices</b><br>
• Always close ResultSet, Statement, and Connection.<br>
• Use try-with-resources to prevent memory leaks.<br>
• Avoid using 'select *' in production.<br>
• Use pagination for large datasets.<br>
• Prefer PreparedStatement over Statement.<br><br>

<b>📊 Real World Usage</b><br>
ResultSet is widely used in:
• Enterprise Applications<br>
• ORM Framework internal operations<br>
• Reporting Systems<br>
• Banking & Financial Systems<br>
• Data Migration Tools
      `,
      codeExamples: [
`import java.sql.*;

public class AdvancedResultSetExample {

    public static void main(String[] args) {

        try (
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/test", "root", "root");

            PreparedStatement ps = con.prepareStatement(
                    "select * from employee",
                    ResultSet.TYPE_SCROLL_INSENSITIVE,
                    ResultSet.CONCUR_READ_ONLY);

            ResultSet rs = ps.executeQuery();
        ) {

            // Move to last record
            rs.last();
            System.out.println("Last Employee: " + rs.getString("username"));

            // Move to first record
            rs.first();
            System.out.println("First Employee: " + rs.getString("username"));

            // Move to specific row
            rs.absolute(2);
            System.out.println("Second Employee: " + rs.getString("username"));

            // Iterate forward again
            rs.beforeFirst();
            while (rs.next()) {
                System.out.println(rs.getInt(1) + " - " + rs.getString(2));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
      ]
    }
  ]
},
  

          // ================= CALLABLE =================
       {
  id: 'jdbc-callable',
  name: 'CallableStatement',
  beginner: [
    {
      content: `
<b>CallableStatement in JDBC</b><br><br>

CallableStatement is used to call stored procedures from Java program.<br>
It allows Java applications to execute database stored procedures easily.<br><br>

<b>What is Stored Procedure?</b><br>
• A stored procedure is a set of SQL statements saved inside database.<br>
• It performs specific tasks like retrieving or updating data.<br>
• It improves performance because it is precompiled.<br><br>

<b>Why Use CallableStatement?</b><br>
• Executes stored procedures easily.<br>
• Improves database performance.<br>
• Supports input and output parameters.<br>
• Helps manage complex database operations.<br><br>

<b>Basic Steps:</b><br>
1️⃣ Connect Java application to database.<br>
2️⃣ Create stored procedure inside database.<br>
3️⃣ Create CallableStatement object.<br>
4️⃣ Execute stored procedure.<br>
5️⃣ Retrieve result if available.<br>
6️⃣ Close database resources.<br>
      `
    }
  ],

  intermediate: [
    {
      content: `
<b>CallableStatement</b><br><br>

CallableStatement is used to execute stored procedures from database. 
It is part of the <b>java.sql</b> package and extends PreparedStatement interface.<br><br>

<b>⭐ What is Stored Procedure?</b><br>
• A stored procedure is a precompiled SQL program stored inside database.<br>
• Improves performance.<br><br>

<b>📌 Steps:</b><br>
1️⃣ Load Driver<br>
2️⃣ Create Connection<br>
3️⃣ Create CallableStatement<br>
4️⃣ Execute Procedure<br>
5️⃣ Process Result<br>
6️⃣ Close Resources
      `,
      codeExamples: [

`// MySQL Stored Procedure
DELIMITER //

CREATE PROCEDURE getEmployee()
BEGIN
   SELECT * FROM employee;
END //

DELIMITER ;`,


`// Java CallableStatement Example
import java.sql.*;

public class CallableExample {

    public static void main(String[] args) {

        try {

            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/test","root","root");

            CallableStatement cs = con.prepareCall("{call getEmployee()}");

            ResultSet rs = cs.executeQuery();

            while(rs.next()){
                System.out.println(rs.getInt("id"));
                System.out.println(rs.getString("username"));
            }

            rs.close();
            cs.close();
            con.close();

        } catch(Exception e){
            e.printStackTrace();
        }
    }
}`
      ]
    }
  ],
   expert: [
    {
      content: `
<b>CallableStatement – Expert Level</b><br><br>

CallableStatement is used in enterprise applications to execute complex stored procedures 
that include multiple input/output parameters, transaction handling, and performance optimization.<br><br>

<b>⭐ Advanced Stored Procedure Capabilities</b><br>
• Supports IN parameters (input values).<br>
• Supports OUT parameters (return values from procedure).<br>
• Supports INOUT parameters (both input and output).<br>
• Allows execution of complex business logic inside database.<br>
• Reduces network traffic by executing logic at database level.<br><br>

<b>📌 CallableStatement Syntax</b><br>
CallableStatement cs = con.prepareCall("{call procedureName(?, ?, ?)}");<br><br>

<b>⭐ Parameter Types</b><br>
• IN ➝ Pass values from Java to stored procedure.<br>
• OUT ➝ Retrieve values from stored procedure.<br>
• INOUT ➝ Send and receive values from procedure.<br><br>

<b>⭐ Handling OUT Parameters</b><br>
• registerOutParameter() ➝ Registers output parameter.<br>
• getInt(), getString(), getDouble() ➝ Retrieves output values.<br><br>

<b>📌 Example Flow</b><br>
1️⃣ Create Stored Procedure with IN & OUT parameters.<br>
2️⃣ Create CallableStatement object.<br>
3️⃣ Set IN parameter values.<br>
4️⃣ Register OUT parameters.<br>
5️⃣ Execute procedure.<br>
6️⃣ Retrieve output values.<br>
7️⃣ Close resources.<br><br>

<b>⭐ Performance Optimization</b><br>
• Stored procedures are precompiled.<br>
• Reduces SQL parsing overhead.<br>
• Minimizes network communication.<br>
• Improves security by hiding SQL logic.<br><br>

<b>⭐ Transaction Handling with CallableStatement</b><br>
• Used in banking & financial systems.<br>
• Supports commit() and rollback() operations.<br>
• Ensures data consistency.<br><br>

<b>⭐ Best Practices</b><br>
• Always close CallableStatement and Connection.<br>
• Use try-with-resources to avoid memory leaks.<br>
• Validate input parameters before execution.<br>
• Handle SQL exceptions properly.<br>
• Use stored procedures for complex business logic only.<br><br>

<b>📊 Real World Usage</b><br>
• Banking Transaction Processing<br>
• Payroll Systems<br>
• Reporting Systems<br>
• Inventory & Order Management<br>
• Financial Calculations
      `,
      codeExamples: [

`// MySQL Stored Procedure with IN and OUT Parameter
DELIMITER //

CREATE PROCEDURE getEmployeeCount(
    IN deptName VARCHAR(50),
    OUT totalEmployees INT
)
BEGIN
   SELECT COUNT(*) INTO totalEmployees 
   FROM employee 
   WHERE department = deptName;
END //

DELIMITER ;`,


`// Java CallableStatement Expert Example
import java.sql.*;

public class CallableExpertExample {

    public static void main(String[] args) {

        try (
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/test", "root", "root");

            CallableStatement cs = con.prepareCall(
                    "{call getEmployeeCount(?, ?)}");
        ) {

            // Set IN parameter
            cs.setString(1, "IT");

            // Register OUT parameter
            cs.registerOutParameter(2, Types.INTEGER);

            // Execute procedure
            cs.execute();

            // Retrieve OUT parameter value
            int count = cs.getInt(2);

            System.out.println("Total Employees in IT Department: " + count);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
      ]
    }
  ]
}
        ]
      }
    ],

    // ================= CHEAT NOTES =================
    cheatNotes: [
      "JDBC connects Java with relational databases.",
      "Type 4 driver is most widely used.",
      "PreparedStatement prevents SQL Injection.",
      "executeQuery() is used for SELECT statements.",
      "executeUpdate() is used for INSERT, UPDATE, DELETE.",
      "Always close ResultSet, Statement and Connection.",
      "CallableStatement is used for Stored Procedures."
    ],

    // ================= INTERVIEW QUESTIONS =================
    interviewQuestions: [
      {
        company: 'TCS',
        questions: [
          "What is JDBC?",
          "Difference between Statement and PreparedStatement?",
          "What is ResultSet?",
          "Explain JDBC connection steps."
        ]
      },
      {
        company: 'Infosys',
        questions: [
          "Explain JDBC architecture.",
          "What are JDBC driver types?",
          "What is CallableStatement?",
          "What is SQL Injection?"
        ]
      }
    ]
  }
];
