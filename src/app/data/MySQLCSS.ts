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
        intermediate: [
          {
            content: ` MySQL is currently the most popular database management system software used for 
managing the database.  <br>
-It is open-source database software which is supported by Oracle Company.<br>  
-It is fast, scalable and easy to use database management system. <br>
-For manipulating data, these queries are: insert records, update records, delete<br> 
records, select records, create tables, drop tables, etc.  <br>

<b>Database:</b><br>
-A database is an application that stores the organized collection of records.<br>  
-It can be accessed and manage by the user very easily.  <br>
-It allows us to organize data into tables, rows, columns, and indexes to find the 
relevant information very quickly.  <br>
-Each database contains distinct API for performing database operations such as 
creating, managing, accessing, and searching the data it stores. <br>
-There are many databases available like MySQL, Sybase, Oracle, MongoDB, 
PostgreSQL, etc. `
          }
        ]
      },

      {
        id: 'client-server',
        name: 'Client Server Architecture',
        intermediate: [
          {
            content: `MySQL follows Client-Server Architecture.<br>
            <b>How MySQL Works?</b><br>

  
-This model is designed for the end-users called clients to access the resources from a 
central computer known as a server using network services.<br>  
-Here, the clients make requests through a graphical user interface (GUI), and the 
server will give the desired output as soon as the instructions are matched.
               <img src="/src/assets/mysql 1.png" alt="Online Image"class="d-block mx-auto h-40"/>
 `

          }
        ]
      },

     {
  id: 'clauses-topic',
  name: 'Data Types & Clauses',
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
  ]
},


      {
        id: 'keys',
        name: 'Keys & Aggregate Functions',
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
-The foreign key is used to link one or more than one table together. It is also known as 
the referencing key.<br>  
-A foreign key matches the primary key field of another table. It means a foreign key 
field in one table refers to the primary key field of the other table.<br>

<b>3.Aggregate function-</b><br> 
- MySQL count() function is used to returns the count of an expression. It allows us to 
count all rows or only some rows of the table that matches a specified condition. <br>
mysql> SELECT COUNT(emp_name) FROM employees;<br> 
-The MIN() & MAX() function in MySQL is used to return the minimum value and 
maximum in a set of values from the table. <br> 
mysql> SELECT MIN(income) AS Minimum_Income FROM employees; <br>
`,
            codeExamples: [
`SELECT COUNT(emp_name) FROM employees;
SELECT MIN(income) FROM employees;`
            ]
          }
        ]
      },

     {
  id: 'commands',
  name: 'SQL Command Types',
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
  ]
},



      {
        id: 'crud',
        name: 'Table Operations',
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
        ]
      },

      {
  id: 'join-types',
  name: 'Join Types',
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



  ]
},



      {
        id: 'nth-salary',
        name: 'Nth Highest Salary',
        intermediate: [
          {
            content: `<b>Highest Salary Calculate Query </b><br>
 
create table employee( customerid int(10)primary key auto_increment not null, 
customername varchar(32), email varchar(32), salary varchar(255));<br> 
 
Finding Nth highest salary in a table is the most common question asked in interviews.<br>

<b>First solution- with using sub- query. </b><br>
 
<h1>1st Highest salary</h1> 
SELECT salary FROM (SELECT salary FROM student ORDER BY salary DESC LIMIT<br> 
1) AS s ORDER BY salary LIMIT 1; <br>
 
<h1>2nd Highest salary </h1><br>
SELECT salary FROM (SELECT salary FROM student ORDER BY salary DESC LIMIT <br>
2) AS s ORDER BY salary LIMIT 1;<br>

<h1>Description </h1>
 
In this solution, we have first sorted all salaries form Employee table in descending order, 
so that 2 highest salaries come at top of the result set. <br>
After that we took just two records by using LIMIT 2.<br>  
Again we did the same thing but this time we sort the result set on ascending order,  
so that second highest salary comes at top. <br> 
Now we print that salary by using LIMIT.<br> 
 
<h1>3rd Highest salary </h1><br>
SELECT salary FROM (SELECT salary FROM student ORDER BY salary DESC LIMIT <br>
3) AS s ORDER BY salary LIMIT 1;<br>

<b>Second solution- without using sub- query</b><br> 
  
<h1>2nd Highest Salary calculates </h1><br>
 
SELECT salary FROM student ORDER BY salary DESC LIMIT 1,1; <br>
 
Here (1, 1) -> second 1 is used for to fetch only one row or record. 
First 1 is used to calculate the 2nd highest salary. 
098ug 
`,
            codeExamples: [
`SELECT salary
FROM student
ORDER BY salary DESC
LIMIT 1,1;`
            ]
          }
        ]
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
