// ===== Interfaces =====
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

// ===== Course Data =====
export const MySQLCSS: Course[] = [
  {
    id: 'mysql',
    name: 'MySQL',
    icon: 'Database',

   subTopics: [
  {
    id: 'mysql-topics',
    name: 'MySQL Topics',
    topics: [
      {
        id: 'intro',
        name: 'Introduction & Database',
        beginner: [
  {
    content: `
<b>What is MySQL?</b><br>
- MySQL is a database management system used to store and manage data.<br>
- It is open-source and widely used in web applications.<br>
- It stores data in tables which contain rows and columns.<br>
- MySQL uses SQL (Structured Query Language) to interact with data.<br>

<b>What is a Database?</b><br>
- A database is a place where data is stored in an organized way.<br>
- It helps to store, retrieve, and manage data easily.<br>
- Example: Student records, employee details, product information.<br>
    `,
    codeExamples: [
`-- Create Database
CREATE DATABASE school;

-- Use Database
USE school;

-- Show Databases
SHOW DATABASES;`
    ]
  }
],

intermediate: [
  {
    content: `
MySQL is currently the most popular database management system software used for managing the database.<br>
- It is open-source database software supported by Oracle Company.<br>
- It is fast, scalable and easy to use database management system.<br>
- For manipulating data, queries are used such as insert, update, delete, select, create tables, drop tables, etc.<br>

<b>Database:</b><br>
- A database is an application that stores the organized collection of records.<br>
- It can be accessed and managed by the user very easily.<br>
- It allows organizing data into tables, rows, columns, and indexes to find relevant information quickly.<br>
- Each database contains distinct APIs for performing database operations.<br>
- Many databases are available like MySQL, Sybase, Oracle, MongoDB, PostgreSQL, etc.
    `,
    codeExamples: [
`-- Create Table
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT
);

-- Insert Data
INSERT INTO students VALUES (1, 'Rahul', 20);

-- Select Data
SELECT * FROM students;`
    ]
  }
],

expert: [
  {
    content: `
<b>Advanced MySQL Database Concepts</b><br>
- MySQL follows the Relational Database Management System (RDBMS) model.<br>
- It supports normalization to reduce redundancy and improve data integrity.<br>
- Indexing improves performance for large datasets.<br>
- MySQL supports transactions using ACID properties:<br>
&nbsp;&nbsp;• Atomicity<br>
&nbsp;&nbsp;• Consistency<br>
&nbsp;&nbsp;• Isolation<br>
&nbsp;&nbsp;• Durability<br>

<b>Advanced Features:</b><br>
- Stored Procedures<br>
- Triggers<br>
- Views<br>
- Transactions<br>
- Foreign Key Constraints<br>
    `,
    codeExamples: [
`-- Create Index
CREATE INDEX idx_student_name
ON students(name);

-- Create View
CREATE VIEW student_view AS
SELECT name, age FROM students;

-- Transaction Example
START TRANSACTION;

INSERT INTO students VALUES (2, 'Priya', 21);

COMMIT;`
    ]
  }
]
      },

      {
  id: 'client-server',
  name: 'Client Server Architecture',

  // ===== Beginner Level =====
  beginner: [
    {
      content: `
<b>What is Client-Server Architecture?</b><br>
- It is a communication model between two systems: Client and Server.<br>
- The client is the user device or application that requests data.<br>
- The server is a powerful system that stores and manages data.<br>
- The client sends requests, and the server sends responses.<br>

<b>Example:</b><br>
- When you open a website, your browser acts as a client.<br>
- The website database or backend acts as the server.<br>

<img src="/src/assets/mysql 1.png" alt="Client Server Architecture" class="d-block mx-auto h-40"/>
      `
    }
  ],

  // ===== Intermediate Level =====
  intermediate: [
    {
      content: `
MySQL follows Client-Server Architecture.<br>

<b>How MySQL Works?</b><br>

- This model is designed for end-users called clients to access resources from a central computer known as a server using network services.<br>
- Clients make requests through graphical user interfaces (GUI) or applications.<br>
- The server processes the request and sends the desired output.<br>
- Multiple clients can connect to a single MySQL server simultaneously.<br>

<img src="/src/assets/mysql 1.png" alt="Client Server Architecture" class="d-block mx-auto h-40"/>
      `
    }
  ],

  // ===== Expert Level =====
  expert: [
    {
      content: `
<b>Advanced Client-Server Architecture in MySQL</b><br>

- MySQL server handles authentication, query processing, optimization, and data storage.<br>
- Communication between client and server happens using MySQL protocol over TCP/IP.<br>
- MySQL supports multiple client connections using multi-threading.<br>
- Connection pooling is used to improve performance and resource management.<br>
- Load balancing and replication improve availability and scalability.<br>

<b>Architecture Components:</b><br>
- Client Layer – Applications, command-line tools, GUI tools.<br>
- Server Layer – Query parsing, optimization, caching.<br>
- Storage Engine Layer – Handles data storage (InnoDB, MyISAM).<br>

<img src="/src/assets/mysql 1.png" alt="Client Server Architecture" class="d-block mx-auto h-40"/>
      `,
      codeExamples: [
`-- Connect MySQL Server Using Command Line
mysql -u root -p

-- Show Connected Users
SHOW PROCESSLIST;

-- Check Server Status
STATUS;`
      ]
    }
  ]
},

     {
  id: 'clauses-topic',
  name: 'Data Types & Clauses',
   beginner: [
    {
      content: `
<b>What are Data Types?</b><br>
- Data types define what kind of data can be stored in a column.<br>
- They help MySQL store data efficiently and correctly.<br>

<b>Common MySQL Data Types:</b><br>
- INT → Stores whole numbers<br>
- VARCHAR → Stores text<br>
- FLOAT → Stores decimal numbers<br>
- DATE → Stores date values<br>
- BOOLEAN → Stores true/false values<br><br>

<b>Basic Clauses:</b><br>

<b>WHERE Clause</b><br>
- Used to filter records based on conditions.<br>

<b>ORDER BY Clause</b><br>
- Used to sort records in ascending or descending order.<br>
      `,
      codeExamples: [
`-- Create Table
CREATE TABLE student (
  id INT,
  name VARCHAR(50),
  city VARCHAR(50),
  salary INT
);

-- WHERE Clause Example
SELECT * FROM student WHERE city = 'Pune';

-- ORDER BY Example
SELECT * FROM student ORDER BY salary ASC;`
      ]
    }
  ],
  intermediate: [
    {
      content: `A Data Type specifies a particular type of data, like integer, floating points, Boolean, etc.<br>
-It also identifies the possible values for that type, the operations that can be performed on that type, and the way the values of that type are stored. In MySQL, each database table has many columns and contains specific data types for each column.<br><br>

<b>Clauses:</b><br>
<h2>1.WHERE</h2> clause is used with SELECT, INSERT, UPDATE and DELETE clause to filter the results. It specifies a specific position where you have to do the operation.<br><br>

<div class="bg-secondary border border-primary p-3">
<b>Syntax – WHERE conditions</b><br><br>

SELECT * FROM student WHERE condition;<br><br>

<b>Examples:</b><br>
SELECT * FROM student WHERE city = 'pune';<br>
SELECT * FROM student WHERE city = 'pune' AND id < 5;<br>
SELECT * FROM student WHERE salary >= 25000 AND salary <= 48000;
</div><br>

<h2>2.DISTINCT-</h2> clause is used to remove duplicate records from the table and fetch only 
the unique records. The DISTINCT clause is only used with the SELECT statement. <br>
<div class="bg-secondary border border-primary p-3">
<b>Syntax- </b>SELECT DISTINCT expressions FROM tables [WHERE conditions]; <br>
<b>Example- </b><br> 
SELECT DISTINCT city FROM student; </div><br> 

<h2>3.FROM-</h2> clause is used to select some records from a table. It can also be used to retrieve 
records from multiple tables using JOIN condition.<br>

<h2>4.ORDER BY-</h2> Clause is used to sort the records in ascending or descending order. 
<div class="bg-secondary border border-primary p-3">
<b>Syntax-</b><br> 
SELECT expressions FROM tables [WHERE conditions] ORDER BY expression [ ASC |
 DESC ];  <br>
 
 <b>Example- </b><br> 
SELECT * FROM student WHERE city = 'pune' ORDER BY salary;  `,
      
      codeExamples: [
`SELECT DISTINCT city FROM student;

SELECT * FROM student ORDER BY salary DESC;`
      ]
    }
  ],

    expert: [
    {
      content: `
<b>Advanced Data Types & Clause Usage</b><br>

<b>Advanced MySQL Data Types:</b><br>
- TEXT → Stores large text data<br>
- ENUM → Stores predefined values<br>
- JSON → Stores structured JSON data<br>
- BLOB → Stores binary large objects like images or files<br><br>

<b>Advanced Clause Usage:</b><br>

<b>1. WHERE with Multiple Conditions</b><br>
- Uses AND, OR, NOT, BETWEEN, IN, LIKE operators.<br>

<b>2. ORDER BY with Multiple Columns</b><br>
- Allows sorting using multiple fields.<br>

<b>3. DISTINCT with Multiple Columns</b><br>
- Removes duplicate combinations of values.<br>

<b>Performance Optimization:</b><br>
- Proper indexing improves WHERE clause performance.<br>
- Avoid unnecessary DISTINCT operations.<br>
      `,
      codeExamples: [
`-- WHERE with BETWEEN
SELECT * FROM student
WHERE salary BETWEEN 20000 AND 50000;

-- WHERE with IN
SELECT * FROM student
WHERE city IN ('Pune', 'Mumbai');

-- ORDER BY Multiple Columns
SELECT * FROM student
ORDER BY city ASC, salary DESC;

-- DISTINCT Multiple Columns
SELECT DISTINCT city, salary FROM student;`
      ]
    }
  ]
},




     {
  id: 'keys',
  name: 'Keys & Aggregate Functions',

  beginner: [
    {
      content: `<h2>1. Primary Key</h2><br>
- A Primary Key is a column or group of columns used to uniquely identify each row in a table.<br>
- It does not allow duplicate values.<br>
- It cannot contain NULL values.<br>
- Each table can have only one Primary Key.<br><br>

<b>Example:</b><br>
CREATE TABLE students (<br>
&nbsp;&nbsp;student_id INT PRIMARY KEY,<br>
&nbsp;&nbsp;student_name VARCHAR(50)<br>
);<br><br>

<h2>2. Foreign Key</h2><br>
- A Foreign Key is a column that links two tables together.<br>
- It refers to the Primary Key of another table.<br>
- It helps maintain data consistency between tables.<br><br>

<b>Example:</b><br>
CREATE TABLE orders (<br>
&nbsp;&nbsp;order_id INT PRIMARY KEY,<br>
&nbsp;&nbsp;student_id INT,<br>
&nbsp;&nbsp;FOREIGN KEY (student_id) REFERENCES students(student_id)<br>
);<br><br>

<h2>3. Aggregate Functions</h2><br>
- Aggregate functions perform calculations on multiple rows and return a single value.<br><br>

<b>Common Aggregate Functions:</b><br>
- COUNT() → Counts number of rows.<br>
- MIN() → Returns smallest value.<br>
- MAX() → Returns largest value.<br>`
      ,
      codeExamples: [
`SELECT COUNT(*) FROM students;
SELECT MIN(student_id) FROM students;
SELECT MAX(student_id) FROM students;`
      ]
    }
  ],

  intermediate: [
    {
      content: `<h2>1. Primary Key</h2><br> 
-MySQL primary key is used to identify each record in a table uniquely. <br>
- It cannot be null or empty.  <br>
- It can contain only one primary key.<br>  
- It always contains unique value into a column.<br>

<b>Rules- </b><br>
-The primary key column value must be unique. <br>
- Each table can contain only one primary key. <br>
- The primary key column cannot be null or empty.<br>

<b>2. Foreign Key </b><br>
-The foreign key is used to link one or more than one table together. It is also known as the referencing key.<br>  
-A foreign key matches the primary key field of another table. It means a foreign key field in one table refers to the primary key field of the other table.<br>

<b>3.Aggregate function-</b><br> 
- MySQL COUNT() function is used to return the count of an expression. It allows us to count all rows or only some rows of the table that matches a specified condition. <br>
- The MIN() & MAX() functions are used to return the minimum and maximum values from the table.`
      ,
      codeExamples: [
`SELECT COUNT(emp_name) FROM employees;
SELECT MIN(income) FROM employees;
SELECT MAX(income) FROM employees;`
      ]
    }
  ],

  expert: [
    {
      content: `<h2>1. Primary Key Advanced Concepts</h2><br>
- A Primary Key can be created using a single column or multiple columns (Composite Primary Key).<br>
- It automatically creates a UNIQUE index and improves query performance.<br>
- It helps in enforcing Entity Integrity.<br><br>

<b>Composite Primary Key Example:</b><br>
CREATE TABLE enrollment (<br>
&nbsp;&nbsp;student_id INT,<br>
&nbsp;&nbsp;course_id INT,<br>
&nbsp;&nbsp;PRIMARY KEY (student_id, course_id)<br>
);<br><br>

<h2>2. Foreign Key Advanced Concepts</h2><br>
- Foreign keys enforce Referential Integrity.<br>
- They prevent invalid data insertion.<br>
- They support cascading actions.<br><br>

<b>Cascade Options:</b><br>
- ON DELETE CASCADE → Deletes child records automatically.<br>
- ON UPDATE CASCADE → Updates child records automatically.<br>
- ON DELETE SET NULL → Sets foreign key value to NULL.<br><br>

<b>Example:</b><br>
FOREIGN KEY (student_id)<br>
REFERENCES students(student_id)<br>
ON DELETE CASCADE<br>
ON UPDATE CASCADE;<br><br>

<h2>3. Aggregate Functions Advanced Usage</h2><br>
- Aggregate functions are often used with GROUP BY and HAVING clauses.<br>
- GROUP BY groups rows having the same values.<br>
- HAVING filters grouped results.<br><br>

<b>Advanced Aggregate Functions:</b><br>
- SUM() → Returns total sum.<br>
- AVG() → Returns average value.<br><br>

<b>Example:</b><br>
SELECT department, COUNT(*) AS Total_Employees<br>
FROM employees<br>
GROUP BY department;<br><br>

SELECT department, AVG(salary)<br>
FROM employees<br>
GROUP BY department<br>
HAVING AVG(salary) > 30000;`
      ,
      codeExamples: [
`SELECT SUM(salary) FROM employees;

SELECT department, COUNT(*) 
FROM employees 
GROUP BY department;

SELECT department, AVG(salary) 
FROM employees 
GROUP BY department 
HAVING AVG(salary) > 30000;`
      ]
    }
  ]
},
{
  id: 'commands',
  name: 'SQL Command Types',

  beginner: [
    {
      content: `
<h2>Introduction to SQL Command Types</h2><br>
- SQL commands are used to communicate with databases.<br>
- They are divided into four main types:<br>
1. DDL (Data Definition Language)<br>
2. DML (Data Manipulation Language)<br>
3. DCL (Data Control Language)<br>
4. TCL (Transaction Control Language)<br><br>

<b>1. DDL Statements</b><br>
- Used to create and modify database structure.<br><br>

<b>Common Commands:</b><br>
- CREATE → Creates database or table.<br>
- ALTER → Modifies table structure.<br>
- DROP → Deletes database or table.<br>
- TRUNCATE → Deletes all table records.<br><br>

<b>Example:</b><br>
CREATE TABLE students (id INT, name VARCHAR(50));<br><br>

<b>2. DML Statements</b><br>
- Used to manage data inside tables.<br><br>

<b>Common Commands:</b><br>
- SELECT → Retrieves data.<br>
- INSERT → Adds new data.<br>
- UPDATE → Modifies data.<br>
- DELETE → Removes data.<br><br>

<b>Example:</b><br>
INSERT INTO students VALUES (1, 'Rahul');<br><br>

<b>3. DCL Statements</b><br>
- Used to manage user permissions.<br><br>

<b>Commands:</b><br>
- GRANT → Gives access.<br>
- REVOKE → Removes access.<br><br>

<b>4. TCL Statements</b><br>
- Used to manage transactions.<br><br>

<b>Commands:</b><br>
- COMMIT → Saves changes permanently.<br>
- ROLLBACK → Undo changes.<br>
- SAVEPOINT → Creates checkpoint.<br>
`
      ,
      codeExamples: [
`CREATE TABLE students(id INT, name VARCHAR(50));

INSERT INTO students VALUES(1,'Rahul');

SELECT * FROM students;

COMMIT;`
      ]
    }
  ],
  intermediate: [
    {
      content: `
<img src="/src/assets/mysql 2.png" alt="Online Image" class="d-block mx-auto h-90"/>

<b>1. DDL Statements</b><br>
DDL is short name of Data Definition Language, which deals with database schemas and 
descriptions of how the data should reside in the database.<br><br>

<table style="width:100%; border-collapse: collapse;" border="1" cellpadding="8">
<tr>
<th style="border:1px solid black;">Command</th>
<th style="border:1px solid black;">Description</th>
</tr>

<tr>
<td style="border:1px solid black;">CREATE</td>
<td style="border:1px solid black;">Used to create a database or table.</td>
</tr>

<tr>
<td style="border:1px solid black;">ALTER</td>
<td style="border:1px solid black;">Alters the structure of the existing database or table.</td>
</tr>

<tr>
<td style="border:1px solid black;">DROP</td>
<td style="border:1px solid black;">Deletes objects from the database.</td>
</tr>

<tr>
<td style="border:1px solid black;">TRUNCATE</td>
<td style="border:1px solid black;">Removes all records from a table and frees allocated space.</td>
</tr>

<tr>
<td style="border:1px solid black;">COMMENT</td>
<td style="border:1px solid black;">Adds comments to the data dictionary.</td>
</tr>

<tr>
<td style="border:1px solid black;">RENAME</td>
<td style="border:1px solid black;">Renames an existing database object.</td>
</tr>

</table><br>

<b>2. DML Statements </b><br>
DML is short name of Data Manipulation Language which deals with data manipulation 
and includes most common SQL statements such SELECT, INSERT, UPDATE, 
DELETE, etc., and it is used to store, modify, retrieve, delete and update data in a 
database. <br>
<table style="width:100%; border-collapse: collapse;" border="1" cellpadding="8">
<tr>
<th style="border:1px solid black;">Command</th>
<th style="border:1px solid black;">Description</th>
</tr>

<tr>
<td style="border:1px solid black;">SELECT</td>
<td style="border:1px solid black;">Retrieve data from a database.</td>
</tr>

<tr>
<td style="border:1px solid black;">INSERT</td>
<td style="border:1px solid black;">Insert data into a table.</td>
</tr>

<tr>
<td style="border:1px solid black;">UPDATE</td>
<td style="border:1px solid black;">Updates existing data within a table.</td>
</tr>

<tr>
<td style="border:1px solid black;">DELETE</td>
<td style="border:1px solid black;">Deletes records from a database table.</td>
</tr>

<tr>
<td style="border:1px solid black;">MERGE</td>
<td style="border:1px solid black;">Performs UPSERT operation (insert or update).</td>
</tr>

<tr>
<td style="border:1px solid black;">CALL</td>
<td style="border:1px solid black;">Calls a PL/SQL or Java subprogram.</td>
</tr>

<tr>
<td style="border:1px solid black;">EXPLAIN PLAN</td>
<td style="border:1px solid black;">Shows interpretation of the data access path.</td>
</tr>

<tr>
<td style="border:1px solid black;">LOCK TABLE</td>
<td style="border:1px solid black;">Used for concurrency control.</td>
</tr>
</table>
<br>
<b>3. DCL Statements </b><br>
DCL is short name of Data Control Language which includes commands such as GRANT 
and mostly concerned with rights, permissions and other controls of the database system.<br>
<table style="width:100%; border-collapse: collapse;" border="1" cellpadding="8">
<tr>
<th style="border:1px solid black;">Command</th>
<th style="border:1px solid black;">Description</th>
</tr>

<tr>
<td style="border:1px solid black;">GRANT</td>
<td style="border:1px solid black;">Allows users access privileges to the database.</td>
</tr>

<tr>
<td style="border:1px solid black;">REVOKE</td>
<td style="border:1px solid black;">Withdraws user access privileges previously granted using the GRANT command.</td>
</tr>

</table>
<br>
<b>4. TCL Statements </b><br>
TCL is short name of Transaction Control Language which deals with a transaction within 
a database.<br>
<table style="width:100%; border-collapse: collapse;" border="1" cellpadding="8">
<tr>
<th style="border:1px solid black;">Command</th>
<th style="border:1px solid black;">Description</th>
</tr>

<tr>
<td style="border:1px solid black;">COMMIT</td>
<td style="border:1px solid black;">Commits a transaction.</td>
</tr>

<tr>
<td style="border:1px solid black;">ROLLBACK</td>
<td style="border:1px solid black;">Rolls back a transaction if an error occurs.</td>
</tr>

<tr>
<td style="border:1px solid black;">SAVEPOINT</td>
<td style="border:1px solid black;">Creates rollback points within a transaction.</td>
</tr>

<tr>
<td style="border:1px solid black;">SET TRANSACTION</td>
<td style="border:1px solid black;">Specifies characteristics of a transaction.</td>
</tr>

</table>
<br>
`
    }
  ],

  expert: [
    {
      content: `
<h2>Advanced SQL Command Types</h2><br>

<b>1. DDL Advanced Concepts</b><br>
- DDL commands automatically commit transactions.<br>
- Used to define constraints, indexes, and schemas.<br>
- Supports partitioning and storage optimization.<br><br>

<b>Example:</b><br>
ALTER TABLE students ADD CONSTRAINT pk_student PRIMARY KEY(id);<br><br>

<b>2. DML Advanced Concepts</b><br>
- DML operations can be controlled using transactions.<br>
- Often combined with WHERE, GROUP BY, HAVING, and JOIN clauses.<br>
- MERGE helps synchronize two tables.<br><br>

<b>MERGE Example:</b><br>
MERGE INTO employees e<br>
USING new_employees n<br>
ON (e.id = n.id)<br>
WHEN MATCHED THEN UPDATE SET e.salary = n.salary<br>
WHEN NOT MATCHED THEN INSERT VALUES(n.id, n.name, n.salary);<br><br>

<b>3. DCL Advanced Concepts</b><br>
- Supports role-based access control.<br>
- Permissions can be assigned at database, table, or column level.<br><br>

<b>Example:</b><br>
GRANT SELECT, INSERT ON students TO user1;<br>
REVOKE INSERT ON students FROM user1;<br><br>

<b>4. TCL Advanced Concepts</b><br>
- Maintains ACID properties (Atomicity, Consistency, Isolation, Durability).<br>
- SAVEPOINT allows partial rollback.<br><br>

<b>Transaction Example:</b><br>
START TRANSACTION;<br>
INSERT INTO students VALUES(2,'Amit');<br>
SAVEPOINT sp1;<br>
UPDATE students SET name='Raj' WHERE id=2;<br>
ROLLBACK TO sp1;<br>
COMMIT;<br><br>

<b>Best Practices:</b><br>
- Always use transactions for critical operations.<br>
- Avoid TRUNCATE in production without backup.<br>
- Use EXPLAIN PLAN to optimize queries.<br>
`
      ,
      codeExamples: [
`START TRANSACTION;

INSERT INTO students VALUES(2,'Amit');

SAVEPOINT sp1;

ROLLBACK TO sp1;

COMMIT;`
      ]
    }
  ]
},



      {
        id: 'crud',
        name: 'Table Operations',
         beginner: [
    {
      content: `
<h2>Table Operations (CRUD)</h2><br>

- CRUD stands for Create, Read, Update and Delete.<br>
- These operations are used to manage table data.<br><br>

<b>1. Create Table</b><br>
- Used to create a new table in database.<br><br>

<b>Syntax:</b><br>
CREATE TABLE table_name (column_name datatype);<br><br>

<b>Example:</b><br>
CREATE TABLE Student(<br>
&nbsp;&nbsp;id INT PRIMARY KEY,<br>
&nbsp;&nbsp;name VARCHAR(50)<br>
);<br><br>

<b>2. Insert Data</b><br>
- Used to add data into table.<br><br>

<b>Syntax:</b><br>
INSERT INTO table_name VALUES(value1, value2);<br><br>

<b>Example:</b><br>
INSERT INTO Student VALUES(1,'Ravi');<br><br>

<b>3. Select Data</b><br>
- Used to retrieve data from table.<br><br>

<b>Syntax:</b><br>
SELECT * FROM table_name;<br><br>

<b>4. Update Data</b><br>
- Used to modify existing data.<br><br>

<b>Syntax:</b><br>
UPDATE table_name SET column_name=value WHERE condition;<br><br>

<b>5. Delete Data</b><br>
- Used to remove records from table.<br><br>

<b>Syntax:</b><br>
DELETE FROM table_name WHERE condition;
`
      ,
      codeExamples: [
`CREATE TABLE Student(id INT, name VARCHAR(50));

INSERT INTO Student VALUES(1,'Ravi');

SELECT * FROM Student;

UPDATE Student SET name='Amit' WHERE id=1;

DELETE FROM Student WHERE id=1;`
      ]
    }
  ],
        intermediate: [
          {
            content: `<table style="width:100%; border-collapse: collapse;" border="1" cellpadding="8">
<tr>
<th style="border:1px solid black;">Table Creation</th>
</tr>

<tr>
<td style="border:1px solid black;">

<b>Syntax</b><br>
CREATE TABLE table_name (column_name column_type);<br>
===============================================================<br><br>

<b>Example</b><br><br>

CREATE TABLE User (<br>
&nbsp;&nbsp;&nbsp;&nbsp;id INT NOT NULL AUTO_INCREMENT,<br>
&nbsp;&nbsp;&nbsp;&nbsp;LastName VARCHAR(255),<br>
&nbsp;&nbsp;&nbsp;&nbsp;FirstName VARCHAR(255),<br>
&nbsp;&nbsp;&nbsp;&nbsp;Address VARCHAR(255),<br>
&nbsp;&nbsp;&nbsp;&nbsp;City VARCHAR(255),<br>
&nbsp;&nbsp;&nbsp;&nbsp;Salary VARCHAR(255),<br>
&nbsp;&nbsp;&nbsp;&nbsp;PRIMARY KEY(id)<br>
);<br>

</td>
</tr>
</table>
<br>
<table style="width:100%; border-collapse: collapse;" border="1" cellpadding="8">
<tr>
<th style="border:1px solid black;">Table Insert</th>
</tr>

<tr>
<td style="border:1px solid black;">

<b>Syntax</b><br>
INSERT INTO table_name (column1, column2, ... columnN)<br>
VALUES (value1, value2, ... valueN);<br>
==================================================================<br><br>

<b>Example</b><br><br>

<b>For single insert record</b><br>
INSERT INTO User (lastName, firstName, Address, City, Salary)<br>
VALUES ('naik', 'jay', 'chinchwad', 'pune', 25000);<br><br>

<b>For multiple insert records</b><br>
INSERT INTO User (lastName, firstName, Address, City, Salary)<br>
VALUES ('patil', 'ashok', 'pimpri', 'pune', 45000),<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;('patil', 'ram', 'kothrud', 'pune', 35000);

</td>
</tr>
</table>
<br>
<table style="width:100%; border-collapse: collapse;" border="1" cellpadding="8">
<tr>
<th style="border:1px solid black;">Table Update</th>
</tr>

<tr>
<td style="border:1px solid black;">

<b>Syntax</b><br>
UPDATE table_name SET<br>
column_name1 = new_value1,<br>
column_name2 = new_value2 ...<br>
[WHERE condition];<br><br>

<b>Example</b><br><br>

<b>Single record or field update</b><br>
UPDATE user SET firstName = 'rohan' WHERE lastName = 'kulkarni';<br>
OR<br>
UPDATE user SET firstName = 'rohan' WHERE id = 3;<br><br>

<b>Multiple fields in same record</b><br>
UPDATE employee SET username = 'rohan', password = 'kulkarni' WHERE id = 1;<br><br>

<b>Updating multiple records</b><br>
UPDATE user SET city = 'mumbai' WHERE city = 'pune';

</td>
</tr>
</table>
<br>
<table style="width:100%; border-collapse: collapse;" border="1" cellpadding="8">
<tr>
<th style="border:1px solid black;">Table Delete</th>
</tr>

<tr>
<td style="border:1px solid black;">

<b>Syntax</b><br>
DELETE FROM table_name WHERE condition;  // Delete specific data<br><br>

SET SQL_SAFE_UPDATES = 0;<br>
DELETE FROM user;  // Deletes all table data but keeps structure<br><br>

<b>Example</b><br><br>
DELETE FROM user WHERE id = 3;

</td>
</tr>
</table>
<br>
<table style="width:100%; border-collapse: collapse;" border="1" cellpadding="8">
<tr>
<th style="border:1px solid black;">Table Select</th>
</tr>

<tr>
<td style="border:1px solid black;">

<b>Syntax</b><br>
SELECT field_name1, field_name2, ... field_nameN FROM table_name<br>
[WHERE condition];<br><br>

<b>Example</b><br>
SELECT * FROM user;<br>
SELECT * FROM user WHERE city = 'pune';

</td>
</tr>
</table>

<br>

<table style="width:100%; border-collapse: collapse;" border="1" cellpadding="8">
<tr>
<th style="border:1px solid black;">Table Alter (Add, Drop, Modify)</th>
</tr>

<tr>
<td style="border:1px solid black;">

<b>Add Column</b><br>
ALTER TABLE table_name ADD column_name datatype;<br><br>

<b>Drop Column</b><br>
ALTER TABLE table_name DROP column_name;<br><br>

<b>Modify Column</b><br>
ALTER TABLE table_name MODIFY column_name datatype;

</td>
</tr>
</table>
<br>

<b>Difference between Delete and Truncate? </b><br>
<table style="width:100%; border-collapse: collapse;" border="1" cellpadding="8">
<tr>
<th style="border:1px solid black;">Sr. No.</th>
<th style="border:1px solid black;">DELETE</th>
<th style="border:1px solid black;">TRUNCATE</th>
</tr>

<tr>
<td style="border:1px solid black;">1</td>
<td style="border:1px solid black;">DELETE command is used to delete specified rows (one or more).</td>
<td style="border:1px solid black;">TRUNCATE command deletes all rows from a table.</td>
</tr>

<tr>
<td style="border:1px solid black;">2</td>
<td style="border:1px solid black;">It is a DML (Data Manipulation Language) command.</td>
<td style="border:1px solid black;">It is a DDL (Data Definition Language) command.</td>
</tr>

<tr>
<td style="border:1px solid black;">3</td>
<td style="border:1px solid black;">DELETE command can use a WHERE clause to filter records.</td>
<td style="border:1px solid black;">TRUNCATE command cannot use a WHERE clause.</td>
</tr>

<tr>
<td style="border:1px solid black;">4</td>
<td style="border:1px solid black;">In DELETE, each row (tuple) is locked before removal.</td>
<td style="border:1px solid black;">In TRUNCATE, the data page is locked before removing table data.</td>
</tr>

</table>


`,
            codeExamples: [
`CREATE TABLE User(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100)
);

INSERT INTO User(name) VALUES('Jay');

UPDATE User SET name='Rohan' WHERE id=1;

DELETE FROM User WHERE id=1;

SELECT * FROM User;
<br>
`
            ]
          }
        ],
        expert: [
    {
      content: `
<h2>Advanced Table Operations</h2><br>

<b>1. Advanced Table Creation</b><br>
- Tables can include constraints like UNIQUE, CHECK, DEFAULT, and FOREIGN KEY.<br><br>

<b>Example:</b><br>
CREATE TABLE Employee(<br>
&nbsp;&nbsp;id INT PRIMARY KEY AUTO_INCREMENT,<br>
&nbsp;&nbsp;name VARCHAR(50) NOT NULL,<br>
&nbsp;&nbsp;salary INT CHECK (salary > 0),<br>
&nbsp;&nbsp;dept_id INT,<br>
&nbsp;&nbsp;FOREIGN KEY (dept_id) REFERENCES Department(id)<br>
);<br><br>

<b>2. Advanced Insert</b><br>
- Data can be inserted using SELECT query.<br><br>

<b>Example:</b><br>
INSERT INTO Employee(name,salary)<br>
SELECT name,salary FROM TempEmployee;<br><br>

<b>3. Advanced Update</b><br>
- Update records using JOIN.<br><br>

<b>Example:</b><br>
UPDATE Employee e<br>
JOIN Department d ON e.dept_id=d.id<br>
SET e.salary = e.salary + 5000<br>
WHERE d.name='IT';<br><br>

<b>4. Advanced Delete</b><br>
- Delete records using JOIN or Subquery.<br><br>

<b>Example:</b><br>
DELETE FROM Employee<br>
WHERE dept_id IN (SELECT id FROM Department WHERE name='HR');<br><br>

<b>5. TRUNCATE vs DELETE (Advanced)</b><br><br>

<table style="width:100%; border-collapse: collapse; border:2px solid black;" cellpadding="8">
<tr>
<th style="border:1px solid black;">Feature</th>
<th style="border:1px solid black;">DELETE</th>
<th style="border:1px solid black;">TRUNCATE</th>
</tr>

<tr>
<td style="border:1px solid black;">Command Type</td>
<td style="border:1px solid black;">DML (Data Manipulation Language)</td>
<td style="border:1px solid black;">DDL (Data Definition Language)</td>
</tr>

<tr>
<td style="border:1px solid black;">Deletes Records</td>
<td style="border:1px solid black;">Specific rows (using WHERE)</td>
<td style="border:1px solid black;">All rows from table</td>
</tr>

<tr>
<td style="border:1px solid black;">WHERE Clause</td>
<td style="border:1px solid black;">Supported</td>
<td style="border:1px solid black;">Not Supported</td>
</tr>

<tr>
<td style="border:1px solid black;">Rollback</td>
<td style="border:1px solid black;">Possible</td>
<td style="border:1px solid black;">Not Possible</td>
</tr>

<tr>
<td style="border:1px solid black;">Speed</td>
<td style="border:1px solid black;">Slower (row by row)</td>
<td style="border:1px solid black;">Faster (removes data pages)</td>
</tr>

<tr>
<td style="border:1px solid black;">Triggers</td>
<td style="border:1px solid black;">Triggers are fired</td>
<td style="border:1px solid black;">Triggers are not fired</td>
</tr>

<tr>
<td style="border:1px solid black;">Table Structure</td>
<td style="border:1px solid black;">Preserved</td>
<td style="border:1px solid black;">Preserved</td>
</tr>

<tr>
<td style="border:1px solid black;">Use Case</td>
<td style="border:1px solid black;">When conditional delete is required</td>
<td style="border:1px solid black;">When entire table data must be removed</td>
</tr>

</table>


<br>

<b>Best Practices:</b><br>
- Always use WHERE clause in UPDATE and DELETE.<br>
- Use TRUNCATE carefully because it removes all records.<br>
- Use transactions for bulk operations.<br>
`
      ,
      codeExamples: [
`UPDATE Employee 
SET salary = salary + 1000 
WHERE dept_id = 2;

DELETE FROM Employee 
WHERE salary < 20000;

TRUNCATE TABLE Employee;`
      ]
    }
  ]
},

      {
  id: 'join-types',
  name: 'Join Types',
   beginner: [
    {
      content: `

<b>Introduction to Joins</b><br><br>

- Join is used to combine data from multiple tables.<br>
- It connects tables using a common column.<br>
- Mostly used when database is normalized.<br><br>

<b>Example Scenario</b><br>
- Customers table contains customer details.<br>
- Accounts table contains bank account details.<br>
- Using Join, we can combine both tables.<br><br>

<b>Basic Join Types</b><br>
1. INNER JOIN – Returns matching records.<br>
2. LEFT JOIN – Returns all left table records.<br>
3. RIGHT JOIN – Returns all right table records.<br>

</div>
`
    }
  ],
  intermediate: [
    {
      content: `
<div style="border:2px solid #000; padding:10px; margin-bottom:10px;">
<b>MYSQL - Join Query</b><br><br>

<h3>Why Join?</h3>
- If we want to retrieve data from multiple tables, we use join queries.<br>
- Using one SELECT statement, we can retrieve data from multiple tables.<br>
- It fetches records from two or more tables.<br><br>

<b>Types of MySQL Joins:</b><br>
1. MySQL INNER JOIN<br>
2. MySQL LEFT OUTER JOIN<br>
3. MySQL RIGHT OUTER JOIN<br>
</div>

<div style="border:2px solid #000; padding:10px; margin-bottom:10px;">
<b>Inner Join</b><br>
It returns only matching rows from both tables.<br><br>

<b>Syntax:</b><br>
SELECT columns FROM table1<br>
INNER JOIN table2<br>
ON table1.column = table2.column;
</div>

<div style="border:2px solid #000; padding:10px;">
<b>Customers Table Example</b><br>
create table customers(<br>
&nbsp;&nbsp;customerid int(10) primary key auto_increment not null,<br>
&nbsp;&nbsp;customername varchar(32),<br>
&nbsp;&nbsp;email varchar(32),<br>
&nbsp;&nbsp;phone varchar(255)<br>
);<br><br>

<b>Modify Column Size</b><br>
ALTER TABLE customers<br>
MODIFY phone varchar(255);
</div>
               <img src="/src/assets/MysqlJoin 1.png" alt="Online Image"class="d-block mx-auto h-50"/>


<div style="border:2px solid #000; padding:10px;">
<b>Accounts Table Example</b><br>
create table accounts(<br>
&nbsp;&nbsp;customerid int,<br>
&nbsp;&nbsp;accountsid int primary key auto_increment not null,<br>
&nbsp;&nbsp;accountstype varchar(10),<br>
&nbsp;&nbsp;balance int(50),<br>
&nbsp;&nbsp;foreign key(customerid) references customers(customerid)<br>
);
</div>
               <img src="/src/assets/MysqlJoin 2.png" alt="Online Image"class="d-block mx-auto h-40"/>


<div style="border:2px solid #000; padding:10px;">
<b>Describe Table & Join Query</b><br><br>

describe accounts;<br><br>

Select customers.customerid,<br>
&nbsp;&nbsp;customername,<br>
&nbsp;&nbsp;email,<br>
&nbsp;&nbsp;accountsid,<br>
&nbsp;&nbsp;balance<br>
from customers<br>
INNER JOIN accounts<br>
on customers.customerid = accounts.customerid;
</div>
               <img src="/src/assets/MysqlJoin 3.png" alt="Online Image"class="d-block mx-auto h-40"/>

`,
      codeExamples: [
`SELECT c.customername, a.balance
FROM customers c
INNER JOIN accounts a
ON c.customerid = a.customerid;`
      ]
    },

    /* Next Topic: LEFT OUTER JOIN */

    {
      content: `
<div style="border:2px solid #000; padding:10px; margin-bottom:10px;">
<b>Left Outer Join</b><br><br>

The LEFT OUTER JOIN returns all rows from the left hand table
(customers) and only matching rows from the accounts table.
If no match exists, NULL values are returned.<br><br>

<b>Syntax</b><br>
SELECT columns<br>
FROM table1<br>
LEFT [OUTER] JOIN table2<br>
ON table1.column = table2.column;
</div>

<div style="border:2px solid #000; padding:10px;">
<b>Example</b><br>
select customername, email, accountsid, balance<br>
from customers<br>
left join accounts<br>
on customers.customerid = accounts.customerid;
</div>
               <img src="/src/assets/MysqlJoin 4.png" alt="Online Image"class="d-block mx-auto h-40"/>

`,
      codeExamples: [
`SELECT customername, email, accountsid, balance
FROM customers
LEFT JOIN accounts
ON customers.customerid = accounts.customerid;`
      ]
    },
    /* Next Topic: RIGHT OUTER JOIN */

{
  content: `
<div style="border:2px solid #000; padding:10px; margin-bottom:10px;">
<b>Right Outer Join</b><br><br>

The MySQL RIGHT OUTER JOIN returns all rows from the right-hand table
(accounts) and only matching rows from the customers table.
If no match exists, NULL values are returned.<br><br>

<b>Syntax</b><br>
SELECT columns<br>
FROM table1<br>
RIGHT [OUTER] JOIN table2<br>
ON table1.column = table2.column;
</div>

<div style="border:2px solid #000; padding:10px;">
<b>Example</b><br>
select customername, email, accountsid, balance<br>
from customers<br>
right join accounts<br>
on customers.customerid = accounts.customerid;
</div>
               <img src="/src/assets/MysqlJoin 5.png" alt="Online Image"class="d-block mx-auto h-40"/>

`,
  codeExamples: [
`SELECT customername, email, accountsid, balance
FROM customers
RIGHT JOIN accounts
ON customers.customerid = accounts.customerid;`
  ]
},
/* Next Topic: FULL OUTER JOIN */

{
  content: `
<div style="border:2px solid #000; padding:10px; margin-bottom:10px;">
<b>Full Outer Join</b><br><br>

In MySQL, FULL OUTER JOIN is not directly supported.
It is achieved by combining LEFT JOIN and RIGHT JOIN using UNION.<br><br>

It returns all rows from both tables.
If matching rows do not exist, NULL values are returned.<br><br>

<b>Syntax / Example</b><br>
select * from customers left join accounts<br>
on customers.customerid = accounts.customerid<br>
union<br>
select * from customers right join accounts<br>
on customers.customerid = accounts.customerid;
</div>
               <img src="/src/assets/MysqlJoin 6.png" alt="Online Image"class="d-block mx-auto h-40"/>

`,
  codeExamples: [
`SELECT *
FROM customers
LEFT JOIN accounts
ON customers.customerid = accounts.customerid

UNION

SELECT *
FROM customers
RIGHT JOIN accounts
ON customers.customerid = accounts.customerid;`
  ]
}
  ],
   expert: [
    {
      content: `
<div style="border:2px solid #000; padding:10px;">
<b>Full Outer Join (Advanced Concept)</b><br><br>

- MySQL does NOT support FULL OUTER JOIN directly.<br>
- It is achieved using UNION.<br>
- Returns all rows from both tables.<br><br>

<b>Syntax</b><br>
SELECT * FROM table1<br>
LEFT JOIN table2 ON condition<br>
UNION<br>
SELECT * FROM table1<br>
RIGHT JOIN table2 ON condition;
</div>
`,
      codeExamples: [
`SELECT *
FROM customers
LEFT JOIN accounts
ON customers.customerid = accounts.customerid

UNION

SELECT *
FROM customers
RIGHT JOIN accounts
ON customers.customerid = accounts.customerid;`
      ]
    },

    {
      content: `
<div style="border:2px solid #000; padding:10px;">
<b>Self Join</b><br><br>

- Self Join joins a table with itself.<br>
- Used when table contains hierarchical data.<br><br>

<b>Example</b><br>
Employee and Manager relationship.
</div>
`,
      codeExamples: [
`SELECT A.employee_name, B.employee_name AS Manager
FROM employees A
JOIN employees B
ON A.manager_id = B.employee_id;`
      ]
    },

    {
      content: `
<div style="border:2px solid #000; padding:10px;">
<b>Performance Optimization Tips</b><br><br>

✔ Use indexes on joining columns.<br>
✔ Avoid unnecessary joins.<br>
✔ Use proper filtering using WHERE clause.<br>
✔ Use EXPLAIN to analyze query performance.<br>
</div>
`
    }
  ]

},



      {
        id: 'nth-salary',
        name: 'Nth Highest Salary',
        
    beginner: [
      {
        content: `
<div style="border:2px solid #000; padding:10px;">

<b>What is Nth Highest Salary?</b><br><br>

- It means finding the salary which ranks at position N when salaries are sorted in descending order.<br>
- Very commonly asked SQL interview question.<br><br>

<b>Employee Table Example</b><br>

CREATE TABLE employee(
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  employee_name VARCHAR(50),
  email VARCHAR(50),
  salary INT
);<br><br>

<b>Find Highest Salary</b><br>

SELECT MAX(salary) FROM employee;

</div>
`
      }
    ],
       intermediate: [
  {
    content: `
<b>Highest Salary Calculation Query</b><br><br>

<b>Create Employee Table</b><br>

CREATE TABLE employee (
  employeeId INT PRIMARY KEY AUTO_INCREMENT,
  employeeName VARCHAR(50),
  email VARCHAR(50),
  salary INT
);<br><br>

Finding the <b>Nth highest salary</b> is one of the most commonly asked SQL interview questions.<br><br>

<h2>First Solution – Using Subquery</h2><br>

<b>1st Highest Salary</b><br>
SELECT salary 
FROM (
  SELECT salary 
  FROM employee 
  ORDER BY salary DESC 
  LIMIT 1
) AS temp
ORDER BY salary 
LIMIT 1;<br><br>

<b>2nd Highest Salary</b><br>
SELECT salary 
FROM (
  SELECT salary 
  FROM employee 
  ORDER BY salary DESC 
  LIMIT 2
) AS temp
ORDER BY salary 
LIMIT 1;<br><br>

<b>3rd Highest Salary</b><br>
SELECT salary 
FROM (
  SELECT salary 
  FROM employee 
  ORDER BY salary DESC 
  LIMIT 3
) AS temp
ORDER BY salary 
LIMIT 1;<br><br>

<h2>Description</h2>

• First, salaries are sorted in descending order.<br>
• Then, top N salaries are selected using LIMIT.<br>
• After that, the result is sorted in ascending order.<br>
• Finally, the last value is selected as the Nth highest salary.<br><br>

<h2>Second Solution – Without Using Subquery</h2><br>

<b>2nd Highest Salary</b><br>
SELECT salary 
FROM employee 
ORDER BY salary DESC 
LIMIT 1, 1;<br><br>

<b>Explanation:</b><br>
• LIMIT 1,1 → Skip first row and fetch one record.<br>
• First value (1) = Offset.<br>
• Second value (1) = Number of rows to fetch.<br>
`,
    codeExamples: [
`-- 2nd Highest Salary Without Subquery
SELECT salary 
FROM employee 
ORDER BY salary DESC 
LIMIT 1,1;`
    ]
  }
],

         expert: [
      {
        content: `
<div style="border:2px solid #000; padding:10px;">

<b>Using DENSE_RANK() Function (Best Interview Approach)</b><br><br>

✔ Handles duplicate salaries properly.<br>
✔ Modern SQL standard solution.<br>

</div>
`,
        codeExamples: [
`SELECT salary
FROM (
   SELECT salary,
          DENSE_RANK() OVER (ORDER BY salary DESC) AS ranking
   FROM employee
) AS ranked_salary
WHERE ranking = 2;`
        ]
      },

      {
        content: `
<div style="border:2px solid #000; padding:10px;">

<b>Using Correlated Subquery</b>

</div>
`,
        codeExamples: [
`SELECT DISTINCT e1.salary
FROM employee e1
WHERE 2 = (
   SELECT COUNT(DISTINCT e2.salary)
   FROM employee e2
   WHERE e2.salary > e1.salary
);`
        ]
      },

      {
        content: `
<div style="border:2px solid #000; padding:10px;">

<b>Performance Tips</b><br><br>

✔ Use indexing on salary column.<br>
✔ Prefer DENSE_RANK() for large datasets.<br>
✔ Avoid nested subqueries when performance is critical.<br>

</div>
`
      }
    ],

      }
    ]
  }
],



    cheatNotes: [
      'CREATE DATABASE dbname - Create database',
      'USE dbname - Select database',
      'CREATE TABLE - Create table',
      'INSERT INTO - Insert data',
      'SELECT * FROM - Query data',
      'UPDATE - Modify data',
      'DELETE FROM - Remove data',
      'WHERE - Filter condition',
      'JOIN - Combine tables',
      'GROUP BY - Group results'
    ],

    interviewQuestions: [
      {
        company: 'Oracle',
        questions: [
          'What are different types of joins in MySQL?',
          'Explain normalization and its types',
          'What is the difference between INNER JOIN and LEFT JOIN?',
          'How do you optimize a slow query?',
          'What are indexes and when to use them?'
        ]
      }
    ]
  }
];
