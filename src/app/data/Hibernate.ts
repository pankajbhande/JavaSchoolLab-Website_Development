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

export const Hibernate: Course[] = [
    {

        id: 'hibernate',
        name: 'Hibernate',
        icon: 'Database',
        subTopics: [
            {
                id: 'hibernate',
                name: 'Hibernate Topics',
                topics: [
                    {
                        id: 'introductiontohibernate',
                        name: 'Introduction to Hibernate',
                        beginner: [
                            {
                                content: `Hibernate is an Object-Relational Mapping (ORM) framework for Java. It simplifies database operations by mapping Java objects to database tables.<br> 
<br>
Key Concepts:<br>
• ORM: Object-Relational Mapping <br>
• SessionFactory: Factory for Session objects <br>
• Session: Interface between application and database <br>
• Transaction: Unit of work <br>
• HQL: Hibernate Query Language <br><br>

Advantages:<br>
• Eliminates boilerplate JDBC code <br>
• Database independence <br>
• Automatic table creation <br>
• Caching support <br>
• Lazy loading`,
                                codeExamples: [
                                    `// Entity Class
@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private int age;

    // Getters and setters
}

// Hibernate Configuration
public class HibernateUtil {
    private static SessionFactory sessionFactory;

    static {
        try {
            Configuration configuration = new Configuration();
            configuration.configure("hibernate.cfg.xml");
            sessionFactory = configuration.buildSessionFactory();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
}`
                                ]
                            }
                        ],
                        intermediate: [
                            {
                                content: `Intermediate Hibernate focuses on advanced mapping, associations, and caching mechanisms.<br>
<br>
Key Concepts:<br>
• Associations: OneToOne, OneToMany, ManyToOne, ManyToMany <br>
• Fetch Types: EAGER vs LAZY <br>
• Caching: First-level (Session) and Second-level (SessionFactory) <br>
• Criteria API: Programmatic query building <br>
• Named Queries: Predefined HQL queries`,
                                codeExamples: [
                                    `// One-to-Many Mapping
@Entity
@Table(name = "department")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Employee> employees;

    // Getters and setters
}

@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    // Getters and setters
}`
                                ]
                            }
                        ],
                        expert: [
                            {
                                content: `Expert Hibernate covers performance tuning, advanced HQL, and integration patterns.<br>
<br>
Key Concepts:<br>
• Advanced HQL: Joins, Subqueries, Aggregate functions <br>
• Batch Processing: Efficient inserts/updates <br>
• Locking Strategies: Optimistic and Pessimistic <br>
• Interceptors & Event Listeners <br>
• Integration with Spring and JPA <br>
• Performance tuning: Second-level cache, query optimization`,
                                codeExamples: [
                                    `// Batch Processing Example
Session session = HibernateUtil.getSessionFactory().openSession();
Transaction tx = session.beginTransaction();

for (int i = 0; i < 1000; i++) {
    Student student = new Student();
    student.setName("Student " + i);
    student.setAge(18 + (i % 5));
    session.save(student);

    if (i % 50 == 0) {
        session.flush();
        session.clear();
    }
}

tx.commit();
session.close();`
                                ]
                            }
                        ]
                    },

                    {
                        id: "hibernate-env-setup",
                        name: "Hibernate Environment Setup",
                        beginner: [
                            {
                                content: `
                <h2>Introduction</h2>
                <p>Hibernate is a popular Java ORM framework that simplifies database operations by mapping Java objects to database tables. 
                Before using Hibernate, you need to set up the environment.</p>
                
                <h2>Prerequisites</h2>
                <ul>
                    <li>Java JDK installed (JDK 8 or higher recommended)</li>
                    <li>An IDE (Eclipse, IntelliJ IDEA, or NetBeans)</li>
                    <li>Database (MySQL, PostgreSQL, etc.)</li>
                    <li>Maven or Gradle for dependency management</li>
                </ul>
            `
                            },
                            {
                                content: `
                <h2>Steps to Set Up Hibernate Environment</h2>
                <ol>
                    <li>Create a Java project in your IDE.</li>
                    <li>Add Hibernate and database driver dependencies (via Maven or manually).</li>
                    <li>Create a Hibernate configuration file (<code>hibernate.cfg.xml</code>).</li>
                    <li>Create Java classes annotated as entities to map database tables.</li>
                    <li>Write a main class to test database connectivity.</li>
                </ol>
            `
                            },
                            {
                                content: `
                <h2>Hibernate Dependencies (Maven Example)</h2>
                <p>In <code>pom.xml</code>, add:</p>
            `,
                                codeExamples: [
                                    `
<dependencies>
    <dependency>
        <groupId>org.hibernate.orm</groupId>
        <artifactId>hibernate-core</artifactId>
        <version>6.3.0.Final</version>
    </dependency>
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.1.0</version>
    </dependency>
</dependencies>
                `
                                ]
                            },
                            {
                                content: `
                <h2>Hibernate Configuration File</h2>
                <p>Create <code>hibernate.cfg.xml</code> under <code>src/main/resources</code>:</p>
            `,
                                codeExamples: [
                                    `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hibernate-configuration PUBLIC
        "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
        "http://hibernate.sourceforge.net/hibernate-configuration-3.0.dtd">
<hibernate-configuration>
    <session-factory>
        <property name="hibernate.connection.driver_class">com.mysql.cj.jdbc.Driver</property>
        <property name="hibernate.connection.url">jdbc:mysql://localhost:3306/testdb</property>
        <property name="hibernate.connection.username">root</property>
        <property name="hibernate.connection.password">password</property>
        <property name="hibernate.dialect">org.hibernate.dialect.MySQLDialect</property>
        <property name="hibernate.show_sql">true</property>
        <property name="hibernate.hbm2ddl.auto">update</property>
    </session-factory>
</hibernate-configuration>
                `
                                ]
                            }
                        ],
                        intermediate: [
                            {
                                content: `
                <h2>Creating Entity Classes</h2>
                <p>Use JPA annotations to map Java classes to database tables:</p>
            `,
                                codeExamples: [
                                    `
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "student")
public class Student {
    @Id
    private int id;
    private String name;
    private int age;

    // getters and setters
}
                `
                                ]
                            },
                            {
                                content: `
                <h2>Testing Hibernate Session</h2>
                <p>Create a utility class to get the SessionFactory and test saving an entity:</p>
            `,
                                codeExamples: [
                                    `
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateTest {
    public static void main(String[] args) {
        SessionFactory factory = new Configuration()
                                 .configure("hibernate.cfg.xml")
                                 .addAnnotatedClass(Student.class)
                                 .buildSessionFactory();

        Session session = factory.getCurrentSession();
        try {
            Student student = new Student();
            student.setId(1);
            student.setName("Ashish");
            student.setAge(25);

            session.beginTransaction();
            session.save(student);
            session.getTransaction().commit();
        } finally {
            factory.close();
        }
    }
}
                `
                                ]
                            }
                        ],
                        expert: [
                            {
                                content: `
                <h2>Advanced Configuration</h2>
                <p>You can fine-tune Hibernate with:</p>
                <ul>
                    <li>Connection pooling (e.g., HikariCP)</li>
                    <li>Second-level caching (EhCache, Infinispan)</li>
                    <li>Custom naming strategies</li>
                    <li>Logging & performance tuning</li>
                </ul>
            `
                            },
                            {
                                content: `
                <h2>Programmatic Configuration</h2>
                <p>Instead of XML, Hibernate can be configured entirely in Java:</p>
            `,
                                codeExamples: [
                                    `
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
    .applySetting("hibernate.connection.driver_class", "com.mysql.cj.jdbc.Driver")
    .applySetting("hibernate.connection.url", "jdbc:mysql://localhost:3306/testdb")
    .applySetting("hibernate.connection.username", "root")
    .applySetting("hibernate.connection.password", "password")
    .applySetting("hibernate.dialect", "org.hibernate.dialect.MySQLDialect")
    .build();

SessionFactory sessionFactory = new MetadataSources(registry)
    .addAnnotatedClass(Student.class)
    .buildMetadata()
    .buildSessionFactory();
                `
                                ]
                            }
                        ]
                    },

                    {
                        id: "hibernate-basics",
                        name: "Hibernate Basics",
                        beginner: [
                            {
                                content: `
                <h2>What is Hibernate?</h2>
                <p>Hibernate is a Java-based ORM (Object Relational Mapping) framework that allows you to map Java objects to database tables.
                It eliminates most of the boilerplate JDBC code, making database operations simpler and easier to maintain.</p>
            `
                            },
                            {
                                content: `
                <h2>Key Features</h2>
                <ul>
                    <li>ORM Framework for Java</li>
                    <li>Automatically generates SQL queries</li>
                    <li>Supports HQL (Hibernate Query Language)</li>
                    <li>Handles transactions and caching</li>
                    <li>Database-independent (supports MySQL, Oracle, PostgreSQL, etc.)</li>
                </ul>
            `
                            },
                            {
                                content: `
                <h2>Basic Workflow</h2>
                <ol>
                    <li>Configure Hibernate with database details</li>
                    <li>Create entity classes using annotations</li>
                    <li>Build a SessionFactory</li>
                    <li>Open a Session and perform CRUD operations</li>
                    <li>Commit the transaction and close the session</li>
                </ol>
            `
                            }
                        ],
                        intermediate: [
                            {
                                content: `
                <h2>Hibernate Annotations</h2>
                <p>Hibernate uses JPA annotations to map classes and fields to database tables and columns.</p>
            `,
                                codeExamples: [
                                    `
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "employee")
public class Employee {
    @Id
    private int id;

    @Column(name = "emp_name")
    private String name;

    private double salary;

    // getters and setters
}
                `
                                ]
                            },
                            {
                                content: `
                <h2>HQL - Hibernate Query Language</h2>
                <p>HQL is similar to SQL but works with Java objects instead of database tables.</p>
            `,
                                codeExamples: [
                                    `
import org.hibernate.Session;
import org.hibernate.query.Query;

Session session = sessionFactory.openSession();
session.beginTransaction();

// Fetch all employees
Query<Employee> query = session.createQuery("from Employee", Employee.class);
List<Employee> employees = query.getResultList();

session.getTransaction().commit();
session.close();
                `
                                ]
                            },
                            {
                                content: `
                <h2>Session and Transaction</h2>
                <p>Session is the main interface between Java application and Hibernate. Every database operation should be wrapped in a transaction.</p>
            `,
                                codeExamples: [
                                    `
Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();

Employee emp = new Employee();
emp.setId(101);
emp.setName("Ashish");
emp.setSalary(50000);

session.save(emp);

tx.commit();
session.close();
                `
                                ]
                            }
                        ],
                        expert: [
                            {
                                content: `
                <h2>Advanced Mapping</h2>
                <p>Hibernate supports advanced mappings like:</p>
                <ul>
                    <li>One-to-One</li>
                    <li>One-to-Many</li>
                    <li>Many-to-One</li>
                    <li>Many-to-Many</li>
                </ul>
            `
                            },
                            {
                                content: `
                <h2>Second-Level Cache</h2>
                <p>Hibernate provides caching to improve performance. The second-level cache stores entity data across sessions.</p>
            `,
                                codeExamples: [
                                    `
<property name="hibernate.cache.use_second_level_cache">true</property>
<property name="hibernate.cache.region.factory_class">org.hibernate.cache.jcache.JCacheRegionFactory</property>
                `
                                ]
                            },
                            {
                                content: `
                <h2>Criteria API</h2>
                <p>Criteria API allows building type-safe, dynamic queries instead of HQL.</p>
            `,
                                codeExamples: [
                                    `
import org.hibernate.Session;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;

Session session = sessionFactory.openSession();
Criteria criteria = session.createCriteria(Employee.class);
criteria.add(Restrictions.gt("salary", 40000));

List<Employee> employees = criteria.list();
session.close();
                `
                                ]
                            }
                        ]
                    },

                    {
                        id: "hibernate-crud-operations",
                        name: "Hibernate CRUD Operations",
                        beginner: [
                            {
                                content: `
                <h2>Introduction to CRUD</h2>
                <p>CRUD stands for Create, Read, Update, and Delete. These are the basic operations you perform on a database table.</p>
                <p>Hibernate simplifies CRUD operations by using ORM (Object Relational Mapping) to map Java objects to database tables.</p>
            `
                            },
                            {
                                content: `
                <h2>Prerequisites</h2>
                <ul>
                    <li>Hibernate environment setup completed</li>
                    <li>Database configured</li>
                    <li>Entity class created (e.g., <code>Student</code>)</li>
                </ul>
            `
                            },
                            {
                                content: `
                <h2>Basic Entity Class</h2>
                <p>This is the entity we'll use for CRUD operations:</p>
            `,
                                codeExamples: [
                                    `
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "student")
public class Student {
    @Id
    private int id;
    private String name;
    private int age;

    // getters and setters
}
                `
                                ]
                            }
                        ],
                        intermediate: [
                            {
                                content: `
                <h2>Create Operation (Insert Data)</h2>
                <p>Use <code>session.save()</code> to insert a new record into the database.</p>
            `,
                                codeExamples: [
                                    `
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class CreateStudent {
    public static void main(String[] args) {
        SessionFactory factory = new Configuration()
            .configure("hibernate.cfg.xml")
            .addAnnotatedClass(Student.class)
            .buildSessionFactory();

        Session session = factory.getCurrentSession();

        try {
            Student student = new Student();
            student.setId(1);
            student.setName("Ashish");
            student.setAge(25);

            session.beginTransaction();
            session.save(student);
            session.getTransaction().commit();
        } finally {
            factory.close();
        }
    }
}
                `
                                ]
                            },
                            {
                                content: `
                <h2>Read Operation (Fetch Data)</h2>
                <p>Use <code>session.get()</code> or <code>session.load()</code> to retrieve a record by its primary key. You can also use HQL for queries.</p>
            `,
                                codeExamples: [
                                    `
// Fetch by ID
Session session = factory.getCurrentSession();
session.beginTransaction();
Student student = session.get(Student.class, 1);
System.out.println(student.getName());
session.getTransaction().commit();

// Fetch all students using HQL
List<Student> students = session.createQuery("from Student", Student.class).getResultList();
for (Student s : students) {
    System.out.println(s.getName());
}
                `
                                ]
                            },
                            {
                                content: `
                <h2>Update Operation</h2>
                <p>Use <code>session.update()</code> to update an existing entity, or modify the object inside a transaction.</p>
            `,
                                codeExamples: [
                                    `
Session session = factory.getCurrentSession();
session.beginTransaction();

Student student = session.get(Student.class, 1);
student.setName("Ashish More"); // update property
student.setAge(26);

session.update(student); // optional if object is attached
session.getTransaction().commit();
                `
                                ]
                            },
                            {
                                content: `
                <h2>Delete Operation</h2>
                <p>Use <code>session.delete()</code> to remove an entity from the database.</p>
            `,
                                codeExamples: [
                                    `
Session session = factory.getCurrentSession();
session.beginTransaction();

Student student = session.get(Student.class, 1);
if(student != null) {
    session.delete(student);
}

session.getTransaction().commit();
                `
                                ]
                            }
                        ],
                        expert: [
                            {
                                content: `
                <h2>Batch Operations</h2>
                <p>Hibernate supports batch insert/update/delete to improve performance:</p>
            `,
                                codeExamples: [
                                    `
Session session = factory.getCurrentSession();
session.beginTransaction();

for(int i = 1; i <= 50; i++) {
    Student student = new Student();
    student.setId(i);
    student.setName("Student " + i);
    student.setAge(20 + i % 10);

    session.save(student);

    if(i % 20 == 0) { // batch flush every 20
        session.flush();
        session.clear();
    }
}

session.getTransaction().commit();
                `
                                ]
                            },
                            {
                                content: `
                <h2>Using HQL for CRUD</h2>
                <p>HQL allows you to perform operations without directly using Session methods:</p>
            `,
                                codeExamples: [
                                    `
// Update with HQL
String hql = "update Student set age = :age where id = :id";
session.createQuery(hql)
       .setParameter("age", 30)
       .setParameter("id", 5)
       .executeUpdate();

// Delete with HQL
String hqlDelete = "delete from Student where id = :id";
session.createQuery(hqlDelete)
       .setParameter("id", 5)
       .executeUpdate();
                `
                                ]
                            },
                            {
                                content: `
                <h2>Transaction Management & Exception Handling</h2>
                <p>Always wrap CRUD operations in transactions and handle exceptions properly:</p>
            `,
                                codeExamples: [
                                    `
Session session = factory.getCurrentSession();
Transaction tx = null;

try {
    tx = session.beginTransaction();
    Student student = session.get(Student.class, 10);
    if(student != null) {
        session.delete(student);
    }
    tx.commit();
} catch (Exception e) {
    if(tx != null) tx.rollback();
    e.printStackTrace();
} finally {
    session.close();
}
                `
                                ]
                            }
                        ]
                    },

                    {
                        id: "hibernate-querying",
                        name: "Hibernate Querying",
                        beginner: [
                            {
                                content: `
                <h2>Introduction to Hibernate Querying</h2>
                <p>Hibernate provides multiple ways to query the database:</p>
                <ul>
                    <li>HQL (Hibernate Query Language)</li>
                    <li>Criteria API</li>
                    <li>Native SQL</li>
                    <li>JPQL (Java Persistence Query Language)</li>
                </ul>
                <p>Queries allow you to fetch, update, or delete records based on conditions.</p>
            `
                            },
                            {
                                content: `
                <h2>HQL Basics</h2>
                <p>HQL is object-oriented, working with Java entities instead of database tables.</p>
            `,
                                codeExamples: [
                                    `
Session session = sessionFactory.openSession();
session.beginTransaction();

// Fetch all students
List<Student> students = session.createQuery("from Student", Student.class).getResultList();

for(Student s : students){
    System.out.println(s.getName());
}

session.getTransaction().commit();
session.close();
                `
                                ]
                            }
                        ],
                        intermediate: [
                            {
                                content: `
                <h2>HQL with Conditions</h2>
                <p>You can filter results using WHERE, AND, OR, LIKE, and other operators:</p>
            `,
                                codeExamples: [
                                    `
String hql = "from Student where age > :minAge and name like :namePattern";
List<Student> students = session.createQuery(hql, Student.class)
    .setParameter("minAge", 20)
    .setParameter("namePattern", "A%")
    .getResultList();
                `
                                ]
                            },
                            {
                                content: `
                <h2>HQL Update and Delete Queries</h2>
                <p>You can update or delete records directly using HQL:</p>
            `,
                                codeExamples: [
                                    `
// Update student salary
String hqlUpdate = "update Student set age = :age where id = :id";
int updated = session.createQuery(hqlUpdate)
    .setParameter("age", 26)
    .setParameter("id", 1)
    .executeUpdate();

// Delete student by ID
String hqlDelete = "delete from Student where id = :id";
int deleted = session.createQuery(hqlDelete)
    .setParameter("id", 2)
    .executeUpdate();
                `
                                ]
                            },
                            {
                                content: `
                <h2>Using Named Queries</h2>
                <p>HQL queries can be defined with @NamedQuery in entity classes for reusability:</p>
            `,
                                codeExamples: [
                                    `
@Entity
@NamedQuery(name = "Student.findByName", query = "from Student where name = :name")
public class Student {
    @Id
    private int id;
    private String name;
    private int age;
}

// Using the named query
List<Student> students = session.createNamedQuery("Student.findByName", Student.class)
    .setParameter("name", "Ashish")
    .getResultList();
                `
                                ]
                            }
                        ],
                        expert: [
                            {
                                content: `
                <h2>Criteria API</h2>
                <p>Criteria API allows building dynamic, type-safe queries programmatically:</p>
            `,
                                codeExamples: [
                                    `
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;

Criteria criteria = session.createCriteria(Student.class);
criteria.add(Restrictions.gt("age", 20));
criteria.add(Restrictions.like("name", "A%"));
List<Student> students = criteria.list();
                `
                                ]
                            },
                            {
                                content: `
                <h2>Projections & Aggregations</h2>
                <p>Criteria API can be used for selecting specific fields, counts, or aggregations:</p>
            `,
                                codeExamples: [
                                    `
import org.hibernate.criterion.Projections;

Criteria criteria = session.createCriteria(Student.class);
criteria.setProjection(Projections.rowCount());
Long totalStudents = (Long) criteria.uniqueResult();
                `
                                ]
                            },
                            {
                                content: `
                <h2>Native SQL Queries</h2>
                <p>Sometimes you may need database-specific SQL. Hibernate allows native queries:</p>
            `,
                                codeExamples: [
                                    `
String sql = "SELECT * FROM student WHERE age > :age";
List<Student> students = session.createNativeQuery(sql, Student.class)
    .setParameter("age", 20)
    .getResultList();
                `
                                ]
                            },
                            {
                                content: `
                <h2>Pagination with Queries</h2>
                <p>Use setFirstResult() and setMaxResults() for paging:</p>
            `,
                                codeExamples: [
                                    `
List<Student> students = session.createQuery("from Student order by name", Student.class)
    .setFirstResult(0) // offset
    .setMaxResults(10) // limit
    .getResultList();
                `
                                ]
                            }
                        ]
                    },

                    {
                        id: "hibernate-associations-expanded",
                        name: "Hibernate Associations",
                        beginner: [
                            {
                                content: `
                <h2>Introduction to Hibernate Associations</h2>
                <p>Hibernate allows mapping relationships between entities. The main association types are:</p>
                <ul>
                    <li>One-to-One</li>
                    <li>One-to-Many</li>
                    <li>Many-to-One</li>
                    <li>Many-to-Many</li>
                </ul>
                <p>These relationships help model real-world relationships in the database.</p>
            `
                            },
                            {
                                content: `
                <h2>One-to-One Mapping</h2>
                <p>One entity is associated with exactly one other entity.</p>
            `,
                                codeExamples: [
                                    `
@Entity
public class Person {
    @Id
    private int id;
    private String name;

    @OneToOne
    @JoinColumn(name = "passport_id")
    private Passport passport;
}

@Entity
public class Passport {
    @Id
    private int id;
    private String passportNumber;
}
                `
                                ]
                            }
                        ],
                        intermediate: [
                            {
                                content: `
                <h2>One-to-Many Mapping</h2>
                <p>One entity can be associated with multiple entities. For example, a Department can have many Employees.</p>
            `,
                                codeExamples: [
                                    `
@Entity
public class Department {
    @Id
    private int id;
    private String name;

    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Employee> employees;
}

@Entity
public class Employee {
    @Id
    private int id;
    private String name;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "department_id")
    private Department department;
}
                `
                                ]
                            },
                            {
                                content: `
                <h2>Many-to-One Mapping</h2>
                <p>Many entities are associated with a single entity. Essentially, this is the inverse of One-to-Many.</p>
            `,
                                codeExamples: [
                                    `
@Entity
public class Employee {
    @Id
    private int id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
}
                `
                                ]
                            },
                            {
                                content: `
                <h2>Many-to-Many Mapping</h2>
                <p>Multiple entities of one type can be associated with multiple entities of another type. Typically implemented with a join table.</p>
            `,
                                codeExamples: [
                                    `
@Entity
public class Student {
    @Id
    private int id;
    private String name;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private List<Course> courses;
}

@Entity
public class Course {
    @Id
    private int id;
    private String title;

    @ManyToMany(mappedBy = "courses")
    private List<Student> students;
}
                `
                                ]
                            }
                        ],
                        expert: [
                            {
                                content: `
                <h2>Bidirectional vs Unidirectional Associations</h2>
                <p>
                    <strong>Unidirectional:</strong> Only one entity knows about the other. Simple but limited for queries.<br>
                    <strong>Bidirectional:</strong> Both entities are aware of the relationship. More flexible for navigation but needs careful mapping.
                </p>
            `,
                                codeExamples: [
                                    `
// Bidirectional One-to-Many / Many-to-One example
@Entity
public class Department {
    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
    private List<Employee> employees;
}

@Entity
public class Employee {
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
}
                `
                                ]
                            },
                            {
                                content: `
                <h2>Cascade Types</h2>
                <p>Cascade types allow operations to propagate from parent to child entities:</p>
                <ul>
                    <li><strong>ALL:</strong> Propagates all operations (save, update, delete)</li>
                    <li><strong>PERSIST:</strong> Propagate save operation</li>
                    <li><strong>MERGE:</strong> Propagate update operation</li>
                    <li><strong>REMOVE:</strong> Propagate delete operation</li>
                    <li><strong>REFRESH:</strong> Propagate refresh operation</li>
                </ul>
            `
                            },
                            {
                                content: `
                <h2>Fetch Types: LAZY vs EAGER</h2>
                <p>Controls how associated entities are loaded:</p>
                <ul>
                    <li><strong>LAZY:</strong> Loads associations only when accessed. Default for One-to-Many and Many-to-Many.</li>
                    <li><strong>EAGER:</strong> Loads associations immediately. Default for One-to-One and Many-to-One.</li>
                </ul>
            `
                            },
                            {
                                content: `
                <h2>Best Practices</h2>
                <ul>
                    <li>Prefer LAZY fetching for collections to improve performance.</li>
                    <li>Use CascadeType.ALL only when appropriate to avoid accidental deletions.</li>
                    <li>Bidirectional mappings improve query flexibility but need proper ownership setup.</li>
                    <li>Always define mappedBy on the inverse side of One-to-Many or Many-to-Many relationships.</li>
                </ul>
            `
                            },
                            {
                                content: `
                <h2>Advanced Example: Bidirectional Many-to-Many with Cascade</h2>
            `,
                                codeExamples: [
                                    `
@Entity
public class Student {
    @Id
    private int id;
    private String name;

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private List<Course> courses;
}

@Entity
public class Course {
    @Id
    private int id;
    private String title;

    @ManyToMany(mappedBy = "courses", cascade = CascadeType.PERSIST)
    private List<Student> students;
}
                `
                                ]
                            }
                        ]
                    },

                    {
                        id: "hibernate-advanced-concepts",
                        name: "Advanced Hibernate Concepts",
                        beginner: [
                            {
                                content: `
                <h2>Introduction</h2>
                <p>Advanced Hibernate concepts help optimize performance, handle complex mappings, and manage transactions efficiently. These include inheritance, component mapping, collections, caching, concurrency control, and more.</p>
            `
                            },
                            {
                                content: `
                <h2>Lazy vs Eager Fetching</h2>
                <p>
                    <strong>LAZY:</strong> Loads associations only when accessed. Saves memory and improves performance.<br>
                    <strong>EAGER:</strong> Loads associations immediately. Can increase memory usage. Choosing the correct fetch strategy is important for performance optimization.
                </p>
            `
                            }
                        ],
                        intermediate: [
                            {
                                content: `
                <h2>Inheritance Mapping Strategies</h2>
                <p>Hibernate supports mapping Java inheritance to database tables using three strategies:</p>
                <ul>
                    <li><strong>Single Table:</strong> One table for all classes in hierarchy.</li>
                    <li><strong>Joined:</strong> One table per class with joins for subclasses.</li>
                    <li><strong>Table Per Class:</strong> One table per concrete class, no join.</li>
                </ul>
            `,
                                codeExamples: [
                                    `
// Single Table Example
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="vehicle_type")
public class Vehicle {
    @Id
    private int id;
    private String name;
}

@Entity
@DiscriminatorValue("Car")
public class Car extends Vehicle {
    private int seats;
}

@Entity
@DiscriminatorValue("Bike")
public class Bike extends Vehicle {
    private boolean hasCarrier;
}
                `
                                ]
                            },
                            {
                                content: `
                <h2>Component Mapping (Embedded Objects)</h2>
                <p>Component mapping allows embedding value objects into entities. Useful for reusable value objects like Address or ContactInfo.</p>
            `,
                                codeExamples: [
                                    `
@Embeddable
public class Address {
    private String street;
    private String city;
    private String zip;
}

@Entity
public class Employee {
    @Id
    private int id;
    private String name;

    @Embedded
    private Address address;
}
                `
                                ]
                            },
                            {
                                content: `
                <h2>Collection Mapping</h2>
                <p>Hibernate supports mapping collections: List, Set, Map for associated entities.</p>
            `,
                                codeExamples: [
                                    `
// List example
@OneToMany
@JoinColumn(name = "employee_id")
private List<Phone> phones;

// Set example
@OneToMany
@JoinColumn(name = "department_id")
private Set<Employee> employees;

// Map example
@ElementCollection
@CollectionTable(name = "employee_contacts", joinColumns = @JoinColumn(name="employee_id"))
@MapKeyColumn(name="contact_type")
@Column(name="contact_number")
private Map<String, String> contacts;
                `
                                ]
                            },
                            {
                                content: `
                <h2>Named Queries</h2>
                <p>Predefined HQL queries for reusability and cleaner code:</p>
            `,
                                codeExamples: [
                                    `
@Entity
@NamedQueries({
    @NamedQuery(name = "Employee.findByName", query = "from Employee where name = :name"),
    @NamedQuery(name = "Employee.findAll", query = "from Employee")
})
public class Employee {
    @Id
    private int id;
    private String name;
}
                `
                                ]
                            },
                            {
                                content: `
                <h2>Batch Processing</h2>
                <p>Efficiently insert, update, or delete multiple records in a single transaction.</p>
            `,
                                codeExamples: [
                                    `
Session session = sessionFactory.openSession();
session.beginTransaction();

for(int i = 1; i <= 100; i++) {
    Employee emp = new Employee();
    emp.setId(i);
    emp.setName("Employee " + i);
    session.save(emp);

    if(i % 20 == 0) {
        session.flush();
        session.clear();
    }
}

session.getTransaction().commit();
session.close();
                `
                                ]
                            }
                        ],
                        expert: [
                            {
                                content: `
                <h2>Caching in Hibernate</h2>
                <p>Hibernate caching improves performance by reducing database access:</p>
                <ul>
                    <li><strong>First-Level Cache:</strong> Session-scoped cache, enabled by default.</li>
                    <li><strong>Second-Level Cache:</strong> SessionFactory-scoped, shared across sessions.</li>
                    <li><strong>Query Cache:</strong> Caches results of HQL or Criteria queries.</li>
                </ul>
            `
                            },
                            {
                                content: `
                <h2>Transactions and Concurrency</h2>
                <p>Hibernate supports both optimistic and pessimistic locking:</p>
                <ul>
                    <li>Optimistic locking with <code>@Version</code></li>
                    <li>Pessimistic locking with <code>LockMode</code></li>
                    <li>Always wrap database operations in transactions using <code>session.beginTransaction()</code> and <code>tx.commit()</code></li>
                </ul>
            `,
                                codeExamples: [
                                    `
@Entity
public class Product {
    @Id
    private int id;
    private String name;

    @Version
    private int version; // optimistic locking
}
                `
                                ]
                            },
                            {
                                content: `
                <h2>Hibernate Interceptors and Listeners</h2>
                <p>Intercept and handle entity events globally or for specific events:</p>
                <ul>
                    <li><strong>Interceptors:</strong> Implement <code>org.hibernate.Interceptor</code> to hook into CRUD operations.</li>
                    <li><strong>Event Listeners:</strong> Register for lifecycle events like pre-insert, post-insert, pre-update, post-delete.</li>
                </ul>
            `,
                                codeExamples: [
                                    `
// Custom Interceptor Example
public class AuditInterceptor implements Interceptor {
    @Override
    public boolean onSave(Object entity, Serializable id, Object[] state, String[] propertyNames, Type[] types) {
        System.out.println("Saving entity: " + entity);
        return false;
    }
}

// Registering interceptor
Session session = sessionFactory.withOptions()
    .interceptor(new AuditInterceptor())
    .openSession();
                `
                                ]
                            },
                            {
                                content: `
                <h2>Entity Graphs (JPA 2.1)</h2>
                <p>Control which associations are fetched dynamically:</p>
            `,
                                codeExamples: [
                                    `
EntityGraph<Employee> graph = session.createEntityGraph(Employee.class);
graph.addAttributeNodes("address", "department");
Map<String, Object> hints = new HashMap<>();
hints.put("javax.persistence.loadgraph", graph);
Employee emp = session.find(Employee.class, 1, hints);
                `
                                ]
                            },
                            {
                                content: `
                <h2>Stored Procedure Calls</h2>
                <p>Hibernate allows calling database stored procedures:</p>
            `,
                                codeExamples: [
                                    `
StoredProcedureQuery query = session.createStoredProcedureQuery("getEmployeeById", Employee.class);
query.registerStoredProcedureParameter("idParam", Integer.class, ParameterMode.IN);
query.setParameter("idParam", 1);
Employee emp = (Employee) query.getSingleResult();
                `
                                ]
                            },
                            {
                                content: `
                <h2>Best Practices</h2>
                <ul>
                    <li>Use lazy fetching for collections to optimize performance.</li>
                    <li>Enable second-level cache selectively for frequently used entities.</li>
                    <li>Use batch processing for large inserts/updates.</li>
                    <li>Prefer Named Queries for reusable and maintainable code.</li>
                    <li>Always handle transactions properly to avoid data inconsistencies.</li>
                </ul>
            `
                            }
                        ]
                    },

                    {
                        id: "hibernate-with-jpa",
                        name: "Hibernate with JPA",
                        beginner: [
                            {
                                content: `
                <h2>Introduction</h2>
                <p>JPA (Java Persistence API) is a standard specification for ORM in Java. Hibernate is a popular implementation of JPA.</p>
                <p>Using Hibernate with JPA allows you to write vendor-independent persistence code.</p>
            `
                            },
                            {
                                content: `
                <h2>JPA Annotations</h2>
                <p>Some core JPA annotations used with Hibernate:</p>
                <ul>
                    <li><code>@Entity</code> – marks a class as a persistent entity</li>
                    <li><code>@Table</code> – specifies table mapping</li>
                    <li><code>@Id</code> – primary key</li>
                    <li><code>@GeneratedValue</code> – auto-generation strategy for IDs</li>
                    <li><code>@Column</code> – column mapping</li>
                </ul>
            `,
                                codeExamples: [
                                    `
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "emp_name")
    private String name;

    private double salary;

    // getters and setters
}
                `
                                ]
                            }
                        ],
                        intermediate: [
                            {
                                content: `
                <h2>JPA EntityManager</h2>
                <p>Instead of Hibernate Session, JPA uses <code>EntityManager</code> to manage entities.</p>
            `,
                                codeExamples: [
                                    `
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

EntityManagerFactory emf = Persistence.createEntityManagerFactory("my-persistence-unit");
EntityManager em = emf.createEntityManager();

em.getTransaction().begin();

Employee emp = new Employee();
emp.setName("Ashish");
emp.setSalary(50000);
em.persist(emp);

em.getTransaction().commit();
em.close();
emf.close();
                `
                                ]
                            },
                            {
                                content: `
                <h2>JPQL (Java Persistence Query Language)</h2>
                <p>JPQL is similar to HQL and works with entity objects:</p>
            `,
                                codeExamples: [
                                    `
String jpql = "SELECT e FROM Employee e WHERE e.salary > :minSalary";
List<Employee> employees = em.createQuery(jpql, Employee.class)
    .setParameter("minSalary", 40000)
    .getResultList();

for(Employee e : employees) {
    System.out.println(e.getName());
}
                `
                                ]
                            },
                            {
                                content: `
                <h2>JPA Relationships</h2>
                <p>JPA annotations are used for entity relationships, which Hibernate will implement:</p>
                <ul>
                    <li>@OneToOne, @OneToMany, @ManyToOne, @ManyToMany</li>
                    <li>@JoinColumn, @JoinTable for mapping foreign keys and join tables</li>
                </ul>
            `,
                                codeExamples: [
                                    `
// One-to-Many Example
@Entity
public class Department {
    @Id
    private int id;
    private String name;

    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
    private List<Employee> employees;
}

@Entity
public class Employee {
    @Id
    private int id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
}
                `
                                ]
                            }
                        ],
                        expert: [
                            {
                                content: `
                <h2>Named Queries in JPA</h2>
                <p>Define reusable JPQL queries at entity level using <code>@NamedQuery</code>:</p>
            `,
                                codeExamples: [
                                    `
@Entity
@NamedQuery(name = "Employee.findByName", query = "SELECT e FROM Employee e WHERE e.name = :name")
public class Employee {
    @Id
    private int id;
    private String name;
}
                
// Usage
List<Employee> result = em.createNamedQuery("Employee.findByName", Employee.class)
    .setParameter("name", "Ashish")
    .getResultList();
                `
                                ]
                            },
                            {
                                content: `
                <h2>Criteria API in JPA</h2>
                <p>Build type-safe dynamic queries programmatically:</p>
            `,
                                codeExamples: [
                                    `
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

CriteriaBuilder cb = em.getCriteriaBuilder();
CriteriaQuery<Employee> cq = cb.createQuery(Employee.class);
Root<Employee> root = cq.from(Employee.class);
cq.select(root).where(cb.gt(root.get("salary"), 40000));

List<Employee> employees = em.createQuery(cq).getResultList();
                `
                                ]
                            },
                            {
                                content: `
                <h2>Transaction Management</h2>
                <p>JPA manages transactions via EntityManager:</p>
            `,
                                codeExamples: [
                                    `
em.getTransaction().begin();
Employee emp = em.find(Employee.class, 1);
emp.setSalary(emp.getSalary() + 5000);
em.getTransaction().commit();
                `
                                ]
                            },
                            {
                                content: `
                <h2>Advanced Features</h2>
                <ul>
                    <li>Second-level caching with JPA annotations (<code>@Cacheable</code>)</li>
                    <li>Batch operations using <code>EntityManager.flush()</code> and <code>clear()</code></li>
                    <li>Stored procedures using <code>StoredProcedureQuery</code></li>
                    <li>Entity graphs for dynamic fetching</li>
                    <li>Integration with Spring Data JPA or Jakarta EE for enterprise apps</li>
                </ul>
            `
                            }
                        ]
                    },

                    {
                        id: "hibernate-best-practices",
                        name: "Hibernate Best Practices",
                        beginner: [
                            {
                                content: `
                <h2>Introduction</h2>
                <p>Hibernate Best Practices help write efficient, maintainable, and performant applications. Following these ensures optimal use of resources and avoids common pitfalls.</p>
            `
                            },
                            {
                                content: `
                <h2>Proper Session and Transaction Management</h2>
                <p>Always manage sessions and transactions carefully to avoid memory leaks or inconsistent data:</p>
            `,
                                codeExamples: [
                                    `
Session session = sessionFactory.openSession();
Transaction tx = null;

try {
    tx = session.beginTransaction();

    Employee emp = session.get(Employee.class, 1);
    emp.setSalary(emp.getSalary() + 5000);

    tx.commit();
} catch(Exception e) {
    if(tx != null) tx.rollback();
    e.printStackTrace();
} finally {
    session.close();
}
                `
                                ]
                            }
                        ],
                        intermediate: [
                            {
                                content: `
                <h2>Avoiding N+1 Problem</h2>
                <p>N+1 problem occurs when lazy-loaded associations are fetched repeatedly, causing many SQL queries. Solve it using <strong>JOIN FETCH</strong> or entity graphs:</p>
            `,
                                codeExamples: [
                                    `
// Using JOIN FETCH in HQL
List<Department> depts = session.createQuery(
    "SELECT d FROM Department d JOIN FETCH d.employees", Department.class
).getResultList();

// Using Entity Graph in JPA
EntityGraph<Department> graph = session.createEntityGraph(Department.class);
graph.addAttributeNodes("employees");
Department dept = em.find(Department.class, 1, Collections.singletonMap("javax.persistence.loadgraph", graph));
                `
                                ]
                            },
                            {
                                content: `
                <h2>Batch Processing</h2>
                <p>For bulk inserts/updates, use batching to reduce database round-trips:</p>
            `,
                                codeExamples: [
                                    `
Session session = sessionFactory.openSession();
session.beginTransaction();

for(int i=1; i<=1000; i++) {
    Employee emp = new Employee();
    emp.setName("Employee " + i);
    session.save(emp);

    if(i % 50 == 0) {
        session.flush();
        session.clear(); // avoid memory overflow
    }
}

session.getTransaction().commit();
session.close();
                `
                                ]
                            },
                            {
                                content: `
                <h2>Performance Tuning</h2>
                <p>Improve Hibernate performance with:</p>
                <ul>
                    <li>Use LAZY fetching for collections</li>
                    <li>Enable second-level cache for frequently accessed entities</li>
                    <li>Use projections instead of fetching full entities when only some columns are needed</li>
                    <li>Use batch fetching and pagination for large datasets</li>
                </ul>
            `
                            }
                        ],
                        expert: [
                            {
                                content: `
                <h2>Error Handling</h2>
                <p>Always handle exceptions properly to maintain data integrity and consistent application state:</p>
            `,
                                codeExamples: [
                                    `
try {
    session.getTransaction().begin();
    Employee emp = session.get(Employee.class, 100);
    emp.setSalary(emp.getSalary() + 5000);
    session.getTransaction().commit();
} catch (HibernateException e) {
    session.getTransaction().rollback();
    // Log and handle exception
    e.printStackTrace();
} finally {
    session.close();
}
                `
                                ]
                            },
                            {
                                content: `
                <h2>Advanced Tips</h2>
                <ul>
                    <li>Prefer HQL or Criteria API over native SQL for database independence.</li>
                    <li>Use @BatchSize or Hibernate-specific annotations to optimize collection fetching.</li>
                    <li>Monitor SQL generated by Hibernate to spot inefficient queries.</li>
                    <li>Use stateless sessions for very large batch operations without first-level caching overhead.</li>
                    <li>Consider read-only sessions for reporting queries to improve performance.</li>
                </ul>
            `
                            }
                        ]
                    },

                ]
            }
        ],
        cheatNotes: [
            '@Entity - Mark class as entity',
            '@Table - Specify table name',
            '@Id - Mark primary key',
            '@GeneratedValue - Auto-generate key',
            '@Column - Map to column',
            'session.save() - Insert record',
            'session.update() - Update record',
            'session.delete() - Delete record',
            'session.get() - Retrieve by ID',
            'HQL - Hibernate Query Language'
        ],
        interviewQuestions: [
            {
                company: 'Accenture',
                questions: [
                    'What is Hibernate and its advantages?',
                    'Explain Hibernate architecture',
                    'What is the difference between get() and load()?',
                    'What are different types of associations in Hibernate?',
                    'Explain Hibernate caching mechanisms'
                ]
            }
        ]
    },
]