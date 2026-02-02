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
          {
            id: 'introduction',
            name: 'Introduction to JDBC',
            beginner: [
              {
                content: `Java Database Connectivity (JDBC) is an API that allows Java applications to interact with
databases.<br>
-It provides a standard method for querying and updating data in a database, regardless of the
underlying Database Management System (DBMS).<br>
-JDBC is part of the Java Standard Edition platform and is included in the java.sql package.<br>

JDBC Components:<br>
• DriverManager: Manages database drivers
• Connection: Establishes connection to database
• Statement: Executes SQL queries
• ResultSet: Holds query results
• SQLException: Handles database errors`,
                codeExamples: [
                  `import java.sql.*;

public class JDBCExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/school";
        String user = "root";
        String password = "password";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(url, user, password);
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            while (rs.next()) {
                System.out.println(
                    rs.getInt("id") + " " + rs.getString("name")
                );
            }

            rs.close();
            stmt.close();
            con.close();
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
    cheatNotes: [
      'Class.forName() - Load driver',
      'DriverManager.getConnection() - Connect to DB',
      'createStatement() - Create statement',
      'executeQuery() - Execute SELECT',
      'executeUpdate() - Execute INSERT/UPDATE/DELETE',
      'PreparedStatement - Parameterized queries',
      'CallableStatement - Stored procedures',
      'ResultSet - Query results',
      'setAutoCommit(false) - Transaction control',
      'commit() / rollback() - Commit or rollback'
    ],
    interviewQuestions: [
      {
        company: 'Infosys',
        questions: [
          'What is JDBC and explain its architecture?',
          'What is the difference between Statement and PreparedStatement?',
          'How do you handle transactions in JDBC?',
          'What are different types of JDBC drivers?',
          'Explain connection pooling'
        ]
      }
    ]
  }
];
