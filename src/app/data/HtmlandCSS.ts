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

export const HtmlandCSS: Course[] = [

    {
        id: 'HTML and CSS',
        name: 'HTML & CSS',
        icon: 'Code',
        
        subTopics: [
            {

                id: 'html and css',
                name: 'HTML and CSS Topics',
                topics: [

                    // {
                    //     id: 'basics of html and css',
                    //     name: 'Basics of HTML and CSS',
                    //     beginner: [
                    //         {
                    //             content: `<h3> 1. Document Outline </h3>
                    //             < Doctypye > - Version of (X) HTML <br>
                    //             < html > - Root element <br>
                    //             < head > - Metadata container <br>
                    //             < title > - Document title <br> 
                    //             < body > - Document body <br>
                    //             `,
                    //             codeExamples: [`<!DOCTYPE html>`
                    //             ]
                    //         },
                    //         {
                    //             content: `<h3>2. Comments</h3>`,
                    //             codeExamples: [`<!-- Comment Text>`]
                    //         },
                    //         {
                    //             content: `<h3>3. Page Information</h3>
                    //             < base /> - Base URL <br>
                    //             < meta /> - meta data <br>
                    //             < title /> - Title <br>
                    //             < link /> - Relevant Resource <br>
                    //             < style /> - Style resource <br>
                    //             < script /> - script resource <br><br>
                                
                    //             <h3>4. Document Structure </h3>
                    //             < h1 [1-6] > - Heading <br>
                    //             < div > - Page Section <br>
                    //             < span > - Inline Section<br>
                    //             < p > - Paragraph<br>
                    //             < br /> - line break <br>
                    //             < hr /> - horizontal rule<br> <br>
                                 
                    //             <h3>5. Links </h3>
                    //             < a href = "" > - Page link <br>
                    //             < a href = "mail.to:" > - Email Link <br>
                    //             < a name = "name" > - Anchor <br>
                    //             < a href = "# name" > - Link to anchor <br><br>
                                 
                    //             <h3>6. Text Markup</h3>
                    //             < strong > - Strong emphasis <br>
                    //             < em > - emphasis <br>
                    //             < blockquore > - Long quotation <br>
                    //             < q > - short quotation <br>
                    //             < abbr > - Abbreviation <br>
                    //             < acronum >  - Acronum <br>
                    //             < pre > - Pre-Formatted Text <br>
                    //             < dfn > - Defination <br>
                    //             < code > - Code <br>
                    //             < cite > - citation <br>
                    //             < del > - Deleted Text <br>
                    //             < ins > - Inserted Text <br>
                    //             < sub > - Subscript <br>    
                    //             < sup > - Superscript <br>
                    //             < address > - Address <br> <br>

                    //             <h3> 7. Lists </h3>
                    //             < ol > - Ordered list <br>
                    //             < ul > - Unordered list <br>
                    //             < li > - List item <br>
                    //             < dl > - Definition list <br>
                    //             < dt > - Definition term <br>
                    //             < dd > - Term description <br><br>

                    //             <h3>8. Forms </h3>
                    //             < form > - Form <br>
                    //             < Fieldset > - Collection of field <br> 
                    //             < legend > - Form legend <br>
                    //             < label > - Input label <br>
                    //             < input /> - form input <br>
                    //             < select > - Drop-down box <br>
                    //             < optgroup > - Group of options <br>
                    //             < option > - Drop-down option <br>
                    //             < textarea > - large-text input <br>
                    //             < button > - Button <br><br>
    
                    //             <h3>9. Tables </h3>
                    //             < table > - Table <br> 
                    //             < caption > - Caption <br>
                    //             < thead > - Table header <br>
                    //             < tbody > - Table body <br>
                    //             < tfoot > - Table footer <br> 
                    //             < colgroup > - column group <br>
                    //             < col /> - column <br>  
                    //             < tr > - Table Row <br>
                    //             < td > - Table cell <br><br>

                    //             <h3>10. Image & Image Map </h3>
                    //             < img /> - Image <br>
                    //             < map > - Image Map <br>
                    //             < area /> - Area of Image Map <br><br>
                                 
                    //            <h3>11. Common char. Entites </h3>
                    //            & # 34        " - Quotation mark <br><br>
                               
                               
                    //            <h3>12. Object </h3>
                    //            < object > - Object <br>
                    //            < param /> - Parameter <br><br>
                               
                    //            <h3>13. Empty Element </h3>
                    //            < area /> - < img /> <br>
                    //            < base /> - < input /> <br>
                    //            < br /> - < link /> <br>
                    //            < col /> - < meta /> <br>
                    //            < hr /> - < param /> <br><br>
                                
                    //            <h3>14. Core Attributes </h3>
                    //             class ------> style <br>
                    //             id ---------> Title <br>
                                 
                    //             <b>Note : </b>
                    //              Core attributes may not be used in base, html, head, meta, param, script, style or title elements.<br><br>

                    //             <h3>15. Language Attribute </h3>
                    //             <b>Note : </b>Language Attributes may not be used in base, br, frame, frameset, hr,iframe, param, or script elements.<br><br>

                    //             <h3>16. Keyborad Attributes</h3>
                    //             accessKey <br>
                    //             tabindex <br><br>

                    //             <h3>17. Window Events </h3>
                    //             Onload <br>
                    //             OnUnload<br><br>

                    //             <h3>18. Form Events </h3>
                    //             OnBlur <br>
                    //             OnReset <br>
                    //             Onchange <br>
                    //             Onfocus <br>
                    //             OnSelect <br>
                    //             OnSubmit <br><br>

                    //             <h3>19. Keyborad Event</h3>
                    //             Onkeydown <br>
                    //             Onkeyup <br>
                    //             Onkeypress <br><br>

                    //             <h3>20. Mouse Event </h3>
                    //             Onclick <br>
                    //             OnDbclick <br>
                    //             OnMouseout <br>
                    //             OnMouseover <br>
                    //             OnMousedown <br>
                    //             OnMouseup <br>
                    //             OnMousemove <br><br>

                    //             <h3> Basics of HTML </h3>
                    //             1. < html > < /html > - Start and End document. <br>
                    //             2. < h1 > < /h1 > - Header Size 1-6 (Larger to small). <br>
                    //             3. < p > < /p > - Paragraph Tag. <br>
                    //             4. &nbsp - Non-Breaking space. <br>
                    //             5. < b > < /b > - Bold Text Tag. <br>
                    //             6. < strike > < /strike > - Strike Through Tag. <br>
                    //             7. < i > < /i > - Italics Tag. <br>
                    //             8. < u > < /u > - Underling Tag. <br>
                    //             9. < table > < /table > - Basic Table Tag. <br>
                    //             10. < li > < /li > - List Items Tag. <br>
                    //             11. < a href = "url" > text < /html > - Basic Link. <br>
                    //             12. < img src = "url" alt = "text" > - Basic image. <br>
                    //             13. src = "url" - Source (URL/FileName). <br>
                    //             14. alt = "text" - Alt (HOVER) Text. <br>
                    //             15. width = "number" - Line or Image width by Number or Percentage. <br>
                    //             16. height = "number" -  Line or Image height by Number or Percentage. <br>
                    //             17. border = "number" - Border Thickness. <br>
                    //             18. < br > - Line Break Tag. <br>
                    //             19. color "#number" - Color. <br>
                    //             20. < blockquote > < /blockquote > - Quote Text Block. <br> `,

                    //         },

                    //     ]
                    // },

                    {
                        id: 'introhtmlandcss',
                        name: 'Basic of HTML and CSS',
                        beginner: [
                            {
                                content: `<h3> HTML </h3>
1. HTML stands for Hypertext Markup Language. <br>
2. HTML is used to create web pages and web applications. <br>
3. HTML is widely used language on the web. <br>
4. We can create a static website by HTML only. <br>
5. Technically, HTML is a Markup language rather than a programming language. <br><br>

Example : `,

                                codeExamples: [`<html> 
<head> 
<title>Sample Page</title> 
</head> 
<body> 
<h1>First Program</h1> 
<p>First HTML Program.</p> 
</body> 
</html> 
`]
                            }, {
                                content: `<h3> CSS </h3>
1. CSS stands for Cascading Style Sheet. <br>
2. CSS is used to design HTML tags. <br>
3. CSS is a widely used language on the web. <br>
4. HTML, CSS and JavaScript are used for web designing. It helps the web designers to 
apply style on HTML tags.<br> `,
                                codeExamples: [`<html> 
<head> 
<style> 
h1{ 
color:white; 
background-color:red; 
padding:5px; 
} 
p{ 
color:blue; 
} 
</style> 
</head> 
<body> 
<h1>Write Your First CSS Example</h1> 
<p>This is Paragraph.</p> 
</body> 
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `<h3> Html Tags </h3>
                                HTML tags are like keywords which defines that how web browser will format and 
display the content. <br><br>
<b>Note - </b> HTML tags are always written in lower case letters.<br> `,
                                codeExamples: [`<html> 
<head> 
<title>Sample Page</title> 
</head> 
<body> 
<p> Paragraph Tag </p> 
<h2> Heading Tag </h2> 
<b> Bold Tag </b> 
<i> Italic Tag </i> 
<u> Underline Tag</u> 
</body> 
</html> 
`
                                ]
                            },
                            {
                                content: `<h3> HTML Attributes </h3>
Each element or tag can have attributes, which defines the behavior of that element. <br><br>

<b> Syntax -</b> < element attribute_name = "value" > conten t< /element > 
`, codeExamples: [`<html> 
<head> 
</head> 
<body> 
<h1> This is Style attribute</h1> 
<p style="height: 50px; color: blue">It will add style property in element</p> 
<p style="color: red">It will change the color of content</p> 
</body> 
</html> 
`]
                            },
                            {
                                content: `<h3>Anchor Tag </h3>
This attribute gives the link address which is specified in that link. <br><br>`,
                                codeExamples: [`<html> 
<head> 
</head> 
<body> 
 <a href=https://www.gmail.com>A link to HTML.</a> 
</body> 
</html> 
`]
                            },
                            {
                                content: `<h3> SRC Attributes </h3>
The src attribute is one of the important and required attribute of "< img >" element. <br>
It is source for the image which is required to display on browser. <br><br>
Example`, codeExamples: [`<html> 
<head> 
</head> 
<body> 
 <img src="wp2559551.jpg" height="400" width="600"> 
</body> 
</html>`]
                            },
                            {
                                content: `<h3> HTML Heading</h3>
A HTML heading or HTML h tag can be defined as a title or a subtitle which you want to display on the webpage. <br>
When you place the text within the heading tags < h1 >.........< /h1 >, it is displayed on the browser in the bold format and size of the text 
depends on the number of heading. <br><br>

`, codeExamples: [`<html> 
<head> 
<h1>Heading no. 1</h1> 
<h2>Heading no. 2</h2> 
<h3>Heading no. 3</h3> 
<h4>Heading no. 4</h4> 
<h5>Heading no. 5</h5> 
<h6>Heading no. 6</h6> 
</head> 
<body> 
</body> 
</html>`]
                            },
                            {
                                content: `<h3> HTML Table </h3>
HTML table tag is used to display data in tabular form (row * column). There can be 
many columns in a row. <br>
We can create a table to display data in tabular form, using < table > element, with the help 
of < tr > , < td >, and < th > elements. <br>
In Each table, table row is defined by < tr > tag, table header is defined by < th >, and table 
data is defined by < td > tags. 
`, codeExamples: [`<body> 
 <table> 
<tr><th>First_Name</th><th>Last_Name</th><th>Marks</th></tr> 
<tr><td>Patil</td><td>Ram</td><td>60</td></tr> 
</table> 
</body> 
</html>`]
                            },
                            {
                                content: `<h3>HTML Border </h3>
1. By border attribute of table in HTML <br>
2. By border property in CSS <br><br>
 `, codeExamples: [`<html> 
<head> 
</head> 
<body> 
<table border=”1”> 
<tr><th>First_Name</th><th>Last_Name</th><th>Marks</th></tr> 
<tr><td>Patil</td><td>Ram</td><td>60</td></tr> 
</table> 
</body> 
</html> `,
                                    `
<style> 
table, th, td { 
 border: 1px solid black; 
} 
</style>
`
                                ]
                            },
                            {
                                content: `<h3> HTML Form </h3>
An HTML form is a section of a document which contains controls such as text fields, 
password fields, checkboxes, radio buttons, submit button, menus etc.<br>
HTML form facilitates the user to enter data that is to be sent to the server for processing 
such as name, email address, password, phone number, etc. <br>
<b>Why? </b><br>
HTML forms are required if you want to collect some data from site. <br><br>
<table class="w-full border border-gray-700 border-collapse [&_th]:border [&_td]:border [&_td]:px-2  [&_th]:py-2">
  <tr>
    <th> Tags </th>
    <th> Description </th>
  </tr>

  <tr>
  <td> form </td>
  <td>It define a HTML form to enter inputs by the used side </td>
  </tr>

  <tr>
  <td>input</td>
  <td>It defines an inputcontrol</td>
  </tr>

  <tr>
  <td>textarea</td>
  <td>It defines a multi-line input control</td>
  </tr>

  <tr>
  <td>label</td>
  <td>It defines a label for an input element.</td>
  </tr>

  <tr>
  <td>select</td>
  <td>It defines a drop-down list.</td>
  </tr>

  <tr>
  <td>option</td>
  <td>It defines an option in a drop-down list.</td>
  </tr>
  
  <tr>
  <td>button</td>
  <td>It defines clickable button</td>
  </tr>
  </table><br>

  `, codeExamples: [`<html> 
<head>Sample </head> 
<body> 
 <form> 
 Enter your name <br> 
 <input type="text" name="username"> 
 </form> 
</body> 
</html> `]
                            },
                            {
                                content: `<h3>HTML TextField Control </h3>
The name attribute is optional, but it is required for the server side component such as 
JSP, ASP, PHP etc. <br>`, codeExamples: [`<html> 
<head></head> 
<body> 
<form> 
 First Name: <input type="text" name="firstname"/> <br/> 
 Last Name: <input type="text" name="lastname"/> <br/> 
 </form> 
</body> 
</html> 
`]
                            },
                            {
                                content: `<h3> TextArea tag </h3>
The < textarea > tag in HTML is used to insert multiple-line text in a form. `,
                                codeExamples: [`<html> 
<head> 
 <title>Form in HTML</title> 
</head> 
<body> 
 <form> 
 Enter your address:<br> 
 <textarea rows="2" cols="20"></textarea> 
 </form> 
</body> 
</html> `]
                            },
                            {
                                content: `<h3>Radio Button </h3>
The radio button is used to select one option from multiple options. It is used for selection 
of gender, quiz questions etc. <br>
If you use one name for all the radio buttons, only one radio button can be selected at a 
time. <br>
Using radio buttons for multiple options, you can only choose a single option at a time. <br>`,
                                codeExamples: [`<html> 
<head>Sample </head> 
<body> 
 <form> 
 <label for="gender">Gender: </label> 
 <input type="radio" id="gender" name="gender" value="male"/>Male 
 <input type="radio" id="gender" name="gender" value="female"/>Female <br/> 
</form> 
</body> 
</html>`]
                            },
                            {
                                content: `<h3>Button Table</h3>
                               Example <br>
                               <div class='bg-secondary border border-primary p-2'>
                               < input type="submit" value="submit" >
                               </div>
                                `
                            }
                        ],

                        expert: [
                            {
                                content: `<h3>HTML5 Semantic Elements</h3>
HTML5 introduced semantic elements that clearly describe their meaning to both browser and developer.<br><br>
Semantic elements improve accessibility, SEO, and code readability.<br><br>
Examples: < header >, < nav >, < section >, < article >, < aside >, < footer >`,
                                codeExamples: [`
<!DOCTYPE html>
<html>
<head>
  <title>Semantic Example</title>
</head>
<body>
  <header>
    <h1>Website Title</h1>
  </header>

  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>

  <section>
    <article>
      <h2>Article Title</h2>
      <p>This is an article content.</p>
    </article>
  </section>

  <footer>
    <p>© 2026 My Website</p>
  </footer>
</body>
</html>
`]
                            },

                            {
                                content: `<h3>HTML5 Audio and Video</h3>
HTML5 provides built-in multimedia support using < audio > and < video > elements without external plugins.<br><br>
Attributes: controls, autoplay, loop, muted, poster.`,
                                codeExamples: [`
<video width="400" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support video tag.
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
`]
                            },

                            {
                                content: `<h3>Form Validation (Advanced)</h3>
HTML5 provides built-in validation attributes.<br><br>
Attributes: required, pattern, min, max, minlength, maxlength, type="email", type="number".`,
                                codeExamples: [`
<form>
  Email:
  <input type="email" required><br><br>

  Password:
  <input type="password" minlength="6" required><br><br>

  Age:
  <input type="number" min="18" max="60"><br><br>

  <input type="submit">
</form>
`]
                            },

                            {
                                content: `<h3>CSS Flexbox (Advanced Layout)</h3>
Flexbox is used for one-dimensional layout (row or column).<br><br>
Important properties:<br>
display: flex;<br>
justify-content<br>
align-items<br>
flex-direction`,
                                codeExamples: [`
<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  border: 2px solid black;
}

.box {
  background: lightblue;
  padding: 20px;
}
</style>

<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>
`]
                            },

                            {
                                content: `<h3>CSS Grid (Two-Dimensional Layout)</h3>
CSS Grid is used for two-dimensional layout (rows and columns).<br><br>
Properties: display: grid, grid-template-columns, grid-template-rows, gap.`,
                                codeExamples: [`
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.grid-item {
  background: lightgreen;
  padding: 20px;
  text-align: center;
}
</style>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
</div>
`]
                            },

                            {
                                content: `<h3>Responsive Web Design (Media Queries)</h3>
Media queries allow different styles for different screen sizes.<br><br>
Used for mobile-first design.`,
                                codeExamples: [`
<style>
body {
  background-color: lightblue;
}

@media (max-width: 600px) {
  body {
    background-color: lightcoral;
  }
}
</style>
`]
                            },

                            {
                                content: `<h3>Accessibility (ARIA & Best Practices)</h3>
Accessibility ensures websites are usable by people with disabilities.<br><br>
Use proper semantic tags, alt attributes, labels, and ARIA roles.`,
                                codeExamples: [`
<img src="image.jpg" alt="User profile picture">

<button aria-label="Close Menu">X</button>

<label for="email">Email:</label>
<input type="email" id="email">
`]
                            },

                            {
                                content: `<h3>SEO Optimization Techniques</h3>
SEO improves website visibility on search engines.<br><br>
Best Practices:<br>
1. Use proper heading structure (h1-h6)<br>
2. Use meta tags<br>
3. Use semantic HTML<br>
4. Add alt attributes for images`,
                                codeExamples: [`
<head>
  <title>Best HTML Course</title>
  <meta name="description" content="Learn HTML, CSS with expert tutorials">
  <meta name="keywords" content="HTML, CSS, Web Development">
</head>
`]
                            }
                        ]




                    },

                    {
                        id: 'HTML',
                        name: 'Introduction of HTML',
                        beginner: [
                            {
                                content: ` <h3> What is HTML? </h3>
                                • HTML stands for Hyper Text Markup Language <br>
                                • It is used for creating a web pages, and web applications <br>
                                • It describe the structure of web pages <br>
                                • It consist of series of elements. <br>
                                • HTML can be invented by Tim Berners Lee in 1992 .<br> `,
                                codeExamples: [
                                    `<!Doctype>
<html>
<head>
<title> Page Title </title>
</head>
<body>
<h1>My first heading </h1>
<p> My first paragraph </p>
</body>
</html> `
                                ]
                            },
                            {
                                content: `Explanation:- <br>
                                < !Doctype > : It defines that this document is an HTML document.<br>

                                < html > : It is the root element of an HTML pages.<br>

                                < head > : It contains meta information about HTML page.<br>

                                < title > : It specifies a title for the HTML page [which is shown in the browser title bar or in page tag]. <br>

                                < body > : It defines the documents body and is container for all the visible contents,
                                 such as heading, paragraph, images, hyperlinks, tables, lists, etc <br>

                                < h1 > : It defines large heading <br>
                                
                                < p > : It defines paragraph. <br><br>                      

                                <h3>What is HTML element ?</h3>
                                Html elements defines by a staring tag,some content and ending tag <br>
                                Syntax :- <br>
                                < tagname > ----- content goes here ------< /tagname >

                                `
                            }
                        ],

                        intermediate: [
                            {
                                content: `<h3>HTML Attributes</h3>
    • Attributes provide additional information about HTML elements.<br>
    • They are always specified in the start tag.<br>
    • Attributes usually come in name="value" pairs.<br><br>
    Syntax:<br>
    < tagname attribute="value" > content < /tagname >`
                                ,
                                codeExamples: [
                                    `<a href="https://www.google.com">Visit Google</a>

<img src="image.jpg" alt="Sample Image" width="200">

<p style="color:blue;">This is blue text</p>`
                                ]
                            },

                            {
                                content: `<h3>HTML Lists</h3>
    • HTML provides three types of lists:<br>
    1. Ordered List (ol)<br>
    2. Unordered List (ul)<br>
    3. Description List (dl)<br>`
                                ,
                                codeExamples: [
                                    `<h4>Ordered List</h4>
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>

<h4>Unordered List</h4>
<ul>
  <li>Apple</li>
  <li>Mango</li>
</ul>`
                                ]
                            },

                            {
                                content: `<h3>HTML Forms</h3>
    • HTML forms are used to collect user input.<br>
    • Form elements include input, textarea, select, button.<br>
    • Forms send data to server using action and method attributes.<br>`
                                ,
                                codeExamples: [
                                    `<form action="/submit" method="post">
  Name: <input type="text" name="username"><br><br>
  
  Password: <input type="password" name="password"><br><br>
  
  Gender:
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female<br><br>
  
  <input type="submit" value="Submit">
</form>`
                                ]
                            },

                            {
                                content: `<h3>HTML Table</h3>
    • Tables are used to display data in rows and columns.<br>
    • Main tags: table, tr, th, td.<br>`
                                ,
                                codeExamples: [
                                    `<table border="1">
  <tr>
    <th>Name</th>
    <th>Marks</th>
  </tr>
  <tr>
    <td>Rahul</td>
    <td>85</td>
  </tr>
</table>`
                                ]
                            }
                        ],

                        expert: [
                            {
                                content: `<h3>HTML5 Semantic Elements</h3>
    • Semantic elements clearly describe their meaning.<br>
    • They improve SEO and accessibility.<br>
    • Examples: header, nav, section, article, aside, footer.<br>`
                                ,
                                codeExamples: [
                                    `<!DOCTYPE html>
<html>
<head>
  <title>Semantic Page</title>
</head>
<body>

<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>

<section>
  <article>
    <h2>Article Title</h2>
    <p>This is article content.</p>
  </article>
</section>

<footer>
  <p>© 2026 My Website</p>
</footer>

</body>
</html>`
                                ]
                            },

                            {
                                content: `<h3>HTML5 Audio & Video</h3>
    • HTML5 provides built-in multimedia support.<br>
    • No need for external plugins like Flash.<br>
    • Common attributes: controls, autoplay, loop, muted.<br>`
                                ,
                                codeExamples: [
                                    `<video width="400" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support video tag.
</video>

<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>`
                                ]
                            },

                            {
                                content: `<h3>Advanced Form Validation</h3>
    • HTML5 provides built-in validation features.<br>
    • Attributes: required, pattern, min, max, minlength, maxlength.<br>`
                                ,
                                codeExamples: [
                                    `<form>
  Email:
  <input type="email" required><br><br>

  Age:
  <input type="number" min="18" max="60"><br><br>

  Password:
  <input type="password" minlength="6" required><br><br>

  <input type="submit">
</form>`
                                ]
                            },

                            {
                                content: `<h3>Accessibility (ARIA)</h3>
    • Accessibility makes websites usable for all users.<br>
    • Use alt attributes for images.<br>
    • Use label tag properly.<br>
    • Use aria-* attributes when required.<br>`
                                ,
                                codeExamples: [
                                    `<img src="profile.jpg" alt="User Profile Picture">

<label for="email">Email:</label>
<input type="email" id="email" name="email">

<button aria-label="Close Menu">X</button>`
                                ]
                            },

                            {
                                content: `<h3>SEO Best Practices</h3>
    • Use proper heading structure (h1-h6).<br>
    • Use meta description.<br>
    • Use semantic tags.<br>
    • Optimize images using alt attribute.<br>`
                                ,
                                codeExamples: [
                                    `<head>
  <title>Learn HTML Complete Guide</title>
  <meta name="description" content="Complete HTML tutorial for beginners to experts.">
  <meta name="keywords" content="HTML, Web Development, Tutorial">
</head>`
                                ]
                            }
                        ]

                    },

                    {
                        id: 'attributes',
                        name: 'HTML Attribute',

                        beginner: [
                            {
                                content: `• HTML attributes provide additional information about HTML elements. <br>
                      • Attributes are always written inside the opening tag. <br>
                      • Attributes usually come in name="value" pairs. <br><br>

                      <h3>Basic Syntax</h3>
                      &lt;element attribute="value"&gt; Content &lt;/element&gt; <br><br>

                      <h3>href Attribute</h3>
                      The &lt;a&gt; tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to.`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>The href Attribute</h2>
<a href="https://www.google.com">Visit Google</a>

</body>
</html>`]
                            },
                            {
                                content: `<h3>src Attribute</h3>
                      The &lt;img&gt; tag is used to display an image. 
                      The src attribute specifies the image path.<br><br>

                      <h3>alt Attribute</h3>
                      The alt attribute provides alternative text if the image cannot be displayed.`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>The src Attribute</h2>
<img src="image.jpg" alt="Nature Image" width="300" height="200">

</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `• Some elements can contain multiple attributes. <br>
                      • Attributes like title, style, width, height are commonly used. <br><br>

                      <h3>title Attribute</h3>
                      Displays extra information when you hover over an element.<br>

                      <h3>style Attribute</h3>
                      Used to apply inline CSS styles.`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2 title="This is a heading">Hover over me</h2>

<p style="color:blue; font-size:18px;">
This paragraph is styled using the style attribute.
</p>

</body>
</html>`]
                            },
                            {
                                content: `<h3>Absolute vs Relative URL</h3>

                      <b>1. Absolute URL:</b> 
                      Links to an external resource hosted on another website.<br>

                      <b>2. Relative URL:</b> 
                      Links to a resource within the same website.<br><br>

                      <h3>Width and Height Attributes</h3>
                      Used to define image size in pixels.`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h3>Relative URL</h3>
<img src="flower.png" alt="Flower" width="200" height="200">

<h3>Absolute URL</h3>
<img src="https://example.com/image.jpg" alt="Example" width="200" height="200">

</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h3>Global Attributes</h3>
                      Global attributes can be used on any HTML element.<br>
                      Examples: id, class, style, title, hidden, data-* <br><br>

                      <h3>id Attribute</h3>
                      Must be unique and is used for CSS styling and JavaScript.<br>

                      <h3>class Attribute</h3>
                      Used to group multiple elements for styling.`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
.box { color: red; }
</style>
</head>
<body>

<p id="uniqueText">This is unique</p>
<p class="box">This is styled using class</p>
<p class="box">Another styled element</p>

</body>
</html>`]
                            },
                            {
                                content: `<h3>data-* Attributes</h3>
                      Custom data attributes allow storing extra information in HTML elements.
                      They are commonly used with JavaScript.<br><br>

                      <h3>Boolean Attributes</h3>
                      Some attributes do not require a value.
                      Example: disabled, readonly, checked.`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<button disabled>Disabled Button</button>

<div data-user="Ashish" data-role="admin">
Custom Data Attributes Example
</div>

</body>
</html>`]
                            }
                        ]
                    },

                    {
                        id: 'htmlstyle',
                        name: 'HTML Style',

                        beginner: [
                            {
                                content: `• HTML style is used to change the appearance of HTML elements.<br>
                      • The style attribute is written inside the opening tag.<br>
                      • Syntax: style="property:value;"<br><br>

                      <h3>Text Color</h3>
                      Use color property to change text color.<br>

                      <h3>Background Color</h3>
                      Use background-color property to change background color.`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2 style="color:red;">This is red text</h2>
<p style="background-color:yellow;">Yellow background</p>

</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `• Multiple CSS properties can be written inside one style attribute.<br>
                      • Each property must end with a semicolon (;).<br>
                      • Inline styles override external and internal CSS.<br><br>

                      <h3>Font Properties</h3>
                      • font-size – sets text size.<br>
                      • font-family – changes font type.<br>
                      • font-weight – bold or normal text.<br>
                      • font-style – italic text.<br><br>

                      <h3>Text Properties</h3>
                      • text-align – left, right, center.<br>
                      • text-transform – uppercase, lowercase, capitalize.<br>
                      • text-decoration – underline, line-through, none.<br>
                      • line-height – space between lines.<br><br>

                      <h3>Color Values</h3>
                      • color name (red, blue)<br>
                      • HEX (#ff0000)<br>
                      • RGB (rgb(255,0,0))`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2 style="color:#ff0000; font-size:30px; font-weight:bold;">
Styled Heading
</h2>

<p style="text-align:center; text-decoration:underline;">
Centered and Underlined Text
</p>

<p style="text-transform:uppercase; line-height:30px;">
this text becomes uppercase.
</p>

</body>
</html>`]
                            },
                            {
                                content: `<h3>Box Model Styling</h3>
                      • margin – space outside element.<br>
                      • padding – space inside element.<br>
                      • border – adds border around element.<br><br>

                      <h3>Background Properties</h3>
                      • background-color<br>
                      • background-image<br>
                      • background-size<br>
                      • background-repeat<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<div style="background-color:lightblue; padding:20px; margin:20px; border:2px solid black;">
This div uses margin, padding and border.
</div>

<div style="background-image:url('image.jpg'); background-repeat:no-repeat; padding:40px;">
Background Image Example
</div>

</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h3>CSS Gradients</h3>
                      • linear-gradient()<br>
                      • radial-gradient()<br>
                      • Used for smooth color transitions.<br><br>

                      <h3>Example:</h3>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<div style="height:200px; 
            background:linear-gradient(to right, red, yellow);">
Linear Gradient Background
</div>

<div style="height:200px; 
            background:radial-gradient(circle, blue, white);">
Radial Gradient Background
</div>

</body>
</html>`]
                            },

                            {
                                content: `<h3>CSS Animations</h3>
                      • @keyframes defines animation steps.<br>
                      • animation property applies animation.<br><br>

                      <h3>Animation Properties:</h3>
                      • animation-name<br>
                      • animation-duration<br>
                      • animation-iteration-count<br>
                      • animation-delay<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
@keyframes moveBox {
  from { transform: translateX(0px); }
  to { transform: translateX(300px); }
}
</style>
</head>
<body>

<div style="width:100px; height:100px; background:tomato;
            animation:moveBox 3s infinite;">
Animated Box
</div>

</body>
</html>`]
                            },

                            {
                                content: `<h3>CSS Variables (Custom Properties)</h3>
                      • Defined using --variable-name<br>
                      • Accessed using var(--variable-name)<br>
                      • Improves maintainability<br><br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
:root {
  --main-color: purple;
}
</style>
</head>
<body>

<h1 style="color:var(--main-color);">
Using CSS Variable
</h1>

</body>
</html>`]
                            },

                            {
                                content: `<h3>Media Queries (Responsive Design)</h3>
                      • Used to make website responsive.<br>
                      • Applies styles based on screen size.<br><br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
@media (max-width:600px) {
  body {
    background-color: lightblue;
  }
}
</style>
</head>
<body>

<h2>Resize the browser window</h2>

</body>
</html>`]
                            },

                            {
                                content: `<h3>Advanced Flexbox</h3>
                      • flex-direction<br>
                      • flex-wrap<br>
                      • align-content<br>
                      • gap<br><br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<div style="display:flex; flex-wrap:wrap; gap:10px;">
  <div style="background:red; width:100px; height:100px;"></div>
  <div style="background:blue; width:100px; height:100px;"></div>
  <div style="background:green; width:100px; height:100px;"></div>
</div>

</body>
</html>`]
                            },

                            {
                                content: `<h3>CSS Filters</h3>
                      • blur()<br>
                      • brightness()<br>
                      • contrast()<br>
                      • grayscale()<br><br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<img src="image.jpg" 
     style="width:300px; filter:grayscale(100%);">

</body>
</html>`]
                            },

                            {
                                content: `<h3>Glassmorphism Effect</h3>
                      • backdrop-filter<br>
                      • rgba transparency<br>
                      • blur effect<br><br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body style="background:url('image.jpg');">

<div style="width:300px; height:200px;
            background:rgba(255,255,255,0.2);
            backdrop-filter:blur(10px);
            padding:20px;">
Glass Effect Box
</div>

</body>
</html>`]
                            },

                            {
                                content: `<h3>Custom Scrollbar (Webkit)</h3>
                      • ::-webkit-scrollbar<br>
                      • ::-webkit-scrollbar-thumb<br><br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background: red;
}
</style>
</head>
<body style="height:2000px;">

Scroll to see custom scrollbar

</body>
</html>`]
                            },

                            {
                                content: `<h3>Expert Best Practices</h3>
                      • Avoid excessive inline styling.<br>
                      • Use external CSS for large projects.<br>
                      • Use CSS variables for theme management.<br>
                      • Optimize animations for performance.<br>
                      • Use media queries for responsiveness.<br>
                      • Maintain consistent spacing and layout system.<br>`
                            }
                        ]


                    },

                    {
                        id: 'htmlformatting',
                        name: 'HTML Formatting',

                        beginner: [
                            {
                                content: `• HTML formatting is used to make text look better.<br>
                      • It helps highlight important text without using CSS.<br><br>

                      <h3>Common Formatting Tags</h3>

                      &lt;b&gt; – Makes text bold.<br>
                      &lt;i&gt; – Makes text italic.<br>
                      &lt;u&gt; – Underlines text.<br>
                      &lt;mark&gt; – Highlights text.<br>
                      &lt;small&gt; – Makes text smaller.<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<p><b>This text is bold</b></p>
<p><i>This text is italic</i></p>
<p><u>This text is underlined</u></p>
<p><mark>This text is highlighted</mark></p>
<p><small>This text is small</small></p>

</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `• Formatting tags are divided into two types:<br><br>

                      <b>1. Physical Tags</b><br>
                      • These tags change the visual appearance.<br>
                      Examples: &lt;b&gt;, &lt;i&gt;, &lt;u&gt;, &lt;big&gt;, &lt;small&gt;, &lt;tt&gt;, &lt;strike&gt;<br><br>

                      <b>2. Logical (Semantic) Tags</b><br>
                      • These tags add meaning to the content.<br>
                      Examples: &lt;strong&gt;, &lt;em&gt;, &lt;del&gt;, &lt;ins&gt;, &lt;sub&gt;, &lt;sup&gt;<br><br>

                      <h3>Important Tags</h3>

                      &lt;strong&gt; – Important text (bold by default).<br>
                      &lt;em&gt; – Emphasized text (italic by default).<br>
                      &lt;sub&gt; – Subscript text.<br>
                      &lt;sup&gt; – Superscript text.<br>
                      &lt;del&gt; – Deleted text.<br>
                      &lt;ins&gt; – Inserted text.<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<p><strong>Important text</strong></p>
<p><em>Emphasized text</em></p>
<p>H<sub>2</sub>O (Water Formula)</p>
<p>10<sup>2</sup> = 100</p>
<p><del>Old Price: 500</del> New Price: 400</p>
<p><ins>Newly Added Content</ins></p>

</body>
</html>`]
                            },
                            {
                                content: `<h3>Deprecated Tags (Not Recommended)</h3>
                      • &lt;big&gt;<br>
                      • &lt;tt&gt;<br>
                      • &lt;strike&gt;<br><br>

                      These tags are removed in HTML5.
                      Use CSS instead for styling purposes.`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<p><strike>This is old style strike</strike></p>
<p style="text-decoration:line-through;">Use CSS instead</p>

</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h3>Semantic Importance vs Visual Formatting</h3>
                      • &lt;b&gt; only makes text bold (no meaning).<br>
                      • &lt;strong&gt; adds importance (SEO + accessibility benefit).<br>
                      • &lt;i&gt; is visual italic.<br>
                      • &lt;em&gt; adds emphasis meaning.<br><br>

                      Search engines and screen readers understand semantic tags better.`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<p><b>Bold text (visual only)</b></p>
<p><strong>Important text (semantic)</strong></p>

<p><i>Italic text (visual only)</i></p>
<p><em>Emphasized text (semantic)</em></p>

</body>
</html>`]
                            },
                            {
                                content: `<h3>Advanced Text-Level Semantics</h3>
                      • &lt;abbr&gt; – Abbreviation.<br>
                      • &lt;cite&gt; – Title of work.<br>
                      • &lt;code&gt; – Programming code.<br>
                      • &lt;kbd&gt; – Keyboard input.<br>
                      • &lt;var&gt; – Variable in programming.<br>
                      • &lt;s&gt; – No longer correct text.<br><br>

                      These improve accessibility and meaning.`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<p><abbr title="HyperText Markup Language">HTML</abbr></p>
<p><cite>Harry Potter</cite> is a novel.</p>
<p><code>console.log("Hello");</code></p>
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd></p>
<p><var>x</var> = 10</p>
<p><s>This product is discontinued</s></p>

</body>
</html>`]
                            },
                            {
                                content: `<h3>Accessibility & SEO Best Practices</h3>
                      • Prefer semantic tags over physical tags.<br>
                      • Avoid deprecated tags.<br>
                      • Use &lt;mark&gt; carefully (for relevance highlight).<br>
                      • Use &lt;strong&gt; for important keywords.<br>
                      • Keep formatting meaningful, not decorative only.<br><br>

                      <h3>Modern Approach</h3>
                      Use CSS for styling and HTML for structure & meaning.`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
.highlight {
  background-color: yellow;
  font-weight: bold;
}
</style>
</head>
<body>

<p class="highlight">Better styling using CSS</p>

</body>
</html>`]
                            }
                        ]
                    },

                    {
                        id: 'htmlquotation',
                        name: 'HTML Quotation',

                        beginner: [
                            {
                                content: `• HTML quotation tags are used to show quoted text.<br>
                      • They help display quotes, abbreviations, and contact information properly.<br><br>

                      <h3>&lt;blockquote&gt;</h3>
                      Used for large quotations.<br><br>

                      <h3>&lt;q&gt;</h3>
                      Used for short quotations.`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<p>Learning HTML is important.</p>

<blockquote>
HTML stands for Hyper Text Markup Language.
It is used to create web pages.
</blockquote>

<p>HTML means <q>Hyper Text Markup Language</q></p>

</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `<h3>&lt;abbr&gt; Tag</h3>
                      • Used for abbreviations.<br>
                      • The title attribute shows full form on hover.<br><br>

                      <h3>&lt;address&gt; Tag</h3>
                      • Defines contact information.<br>
                      • Usually displayed in italic.<br>
                      • Used for author/owner details.<br><br>

                      <h3>&lt;cite&gt; Tag</h3>
                      • Used for title of creative work.<br>
                      • Example: Book, movie, poem, painting.<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>

<address>
Written by John Doe<br>
Visit us at example.com<br>
Mumbai, India
</address>

<p><cite>The Mona Lisa</cite> was painted by Leonardo da Vinci.</p>

</body>
</html>`]
                            },
                            {
                                content: `<h3>&lt;bdo&gt; Tag</h3>
                      • Bi-Directional Override.<br>
                      • Used to change text direction.<br>
                      • dir="rtl" → Right to Left<br>
                      • dir="ltr" → Left to Right`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<p><bdo dir="rtl">This text will display right to left.</bdo></p>

</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h3>Semantic Importance of Quotation Tags</h3>
                      • &lt;blockquote&gt; is used for long external quotes.<br>
                      • It can include the cite attribute to reference source URL.<br>
                      • &lt;q&gt; automatically adds quotation marks.<br>
                      • Semantic tags improve SEO and accessibility.<br><br>

                      <h3>Using cite Attribute</h3>
                      The cite attribute provides the source of the quotation.`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<blockquote cite="https://www.example.com">
The greatest glory in living lies not in never falling,
but in rising every time we fall.
</blockquote>

</body>
</html>`]
                            },
                            {
                                content: `<h3>Accessibility & Best Practices</h3>
                      • Always use proper semantic tags instead of styling quotes manually.<br>
                      • Use &lt;abbr&gt; for better screen reader support.<br>
                      • Use &lt;address&gt; only for contact information.<br>
                      • Avoid using &lt;bdo&gt; unless necessary.<br><br>

                      <h3>Difference Between blockquote and q</h3>
                      • blockquote → block-level element (new line).<br>
                      • q → inline element (within sentence).<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<p>As Albert Einstein said,
<q>Imagination is more important than knowledge.</q></p>

<blockquote>
This is a long quotation example that appears on a separate line.
</blockquote>

</body>
</html>`]
                            },
                            {
                                content: `<h3>Advanced Text Direction & Internationalization</h3>
                      • Useful for Arabic, Hebrew languages.<br>
                      • Use dir attribute globally if required.<br>
                      • Combine with lang attribute for better localization.<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html lang="ar">
<body>

<p dir="rtl">هذا النص يُكتب من اليمين إلى اليسار</p>

</body>
</html>`]
                            }
                        ]
                    },

                    {
                        id: 'comments',
                        name: 'HTML Comments',

                        beginner: [
                            {
                                content: `• HTML comments are used to write notes inside the code.<br>
                      • Comments are not displayed in the browser.<br>
                      • They help developers understand the code.<br><br>

                      <h3>Syntax of Comment</h3>
                      &lt;!-- This is a comment --&gt;<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<!-- This is a comment -->
<p>This paragraph is visible.</p>

</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `• Comments can be single-line or multi-line.<br>
                      • Used to explain code or temporarily disable code.<br>
                      • Browser ignores everything inside comment tags.<br><br>

                      <h3>Single-Line Comment</h3>
                      &lt;!-- This is a single-line comment --&gt;<br><br>

                      <h3>Multi-Line Comment</h3>
                      &lt;!-- 
                      This is a multi-line comment.
                      It can span multiple lines.
                      --&gt;`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<!-- Heading Section -->
<h2>Welcome</h2>

<!--
<p>This paragraph is commented and will not display.</p>
-->

<p>This paragraph is visible.</p>

</body>
</html>`]
                            },
                            {
                                content: `<h3>Commenting Out Code</h3>
                      • Developers use comments to hide code temporarily.<br>
                      • Useful during testing and debugging.<br><br>

                      <h3>Important Rules</h3>
                      • Comments cannot be nested.<br>
                      • Do not use -- inside a comment.<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<!-- <h1>This heading is hidden</h1> -->

<p>Only this paragraph will show.</p>

</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h3>Best Practices for HTML Comments</h3>
                      • Use comments to describe sections (Header, Footer, Navbar).<br>
                      • Avoid writing sensitive information in comments.<br>
                      • Keep comments meaningful and short.<br>
                      • Use consistent formatting style.<br><br>

                      <h3>SEO & Security Considerations</h3>
                      • Comments are not visible on page but can be viewed in page source.<br>
                      • Never store passwords, API keys, or confidential data in comments.<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<!-- ================= Header Section ================= -->
<header>
  <h1>My Website</h1>
</header>

<!-- ================= Main Content ================= -->
<main>
  <p>Welcome to the website.</p>
</main>

<!-- ================= Footer Section ================= -->
<footer>
  <p>Copyright 2026</p>
</footer>

</body>
</html>`]
                            },
                            {
                                content: `<h3>Conditional Comments (Legacy - Internet Explorer)</h3>
                      • Used in older versions of Internet Explorer.<br>
                      • Not supported in modern browsers.<br><br>

                      <h3>Documentation Comments</h3>
                      • Large projects use structured comments for better readability.<br>
                      • Helps in team collaboration.<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<!--[if IE]>
<p>This content is only visible in Internet Explorer.</p>
<![endif]-->

</body>
</html>`]
                            }
                        ]
                    },

                    {
                        id: 'htmlcolors',
                        name: 'HTML Colors',

                        beginner: [
                            {
                                content: `<h3>HTML Colors</h3>
                      • HTML colors are used to give color to text, background, and borders.<br>
                      • Colors can be written using color names or color values.<br><br>

                      <h3>Color Names</h3>
                      • red<br>
                      • blue<br>
                      • green<br>
                      • yellow<br>
                      • orange<br>
                      • pink<br><br>

                      <h3>Example:</h3>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h1 style="color:red;">This is red text</h1>
<h1 style="color:blue;">This is blue text</h1>
<h1 style="background-color:yellow;">Yellow background</h1>

</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `<h3>RGB Colors</h3>
                      • RGB stands for Red, Green, Blue.<br>
                      • Each value ranges from 0 to 255.<br>
                      • Format: rgb(red, green, blue)<br><br>

                      Example:<br>
                      rgb(255,0,0) → Red<br>
                      rgb(0,255,0) → Green<br>
                      rgb(0,0,255) → Blue<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2 style="color:rgb(255,0,0);">Red</h2>
<h2 style="color:rgb(0,255,0);">Green</h2>
<h2 style="color:rgb(0,0,255);">Blue</h2>

</body>
</html>`]
                            },
                            {
                                content: `<h3>RGBA Colors</h3>
                      • RGBA adds Alpha (opacity).<br>
                      • Alpha value ranges from 0.0 to 1.0.<br>
                      • Format: rgba(red, green, blue, alpha)<br><br>

                      Example:<br>
                      rgba(255,0,0,0.5) → 50% transparent red<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2 style="background-color:rgba(255,0,0,0.5);">
Red with transparency
</h2>

</body>
</html>`]
                            },
                            {
                                content: `<h3>HEX Colors</h3>
                      • HEX stands for Hexadecimal.<br>
                      • Format: #RRGGBB<br>
                      • Uses numbers (0–9) and letters (A–F).<br><br>

                      Example:<br>
                      #FF0000 → Red<br>
                      #00FF00 → Green<br>
                      #0000FF → Blue<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2 style="color:#FF0000;">Red</h2>
<h2 style="color:#00FF00;">Green</h2>
<h2 style="color:#0000FF;">Blue</h2>

</body>
</html>`]
                            },
                            {
                                content: `<h3>HSL Colors</h3>
                      • HSL stands for Hue, Saturation, Lightness.<br>
                      • Hue: 0–360 (color wheel).<br>
                      • Saturation: 0%–100%.<br>
                      • Lightness: 0%–100%.<br><br>

                      Example:<br>
                      hsl(0,100%,50%) → Red<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2 style="color:hsl(0,100%,50%);">Red using HSL</h2>

</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h3>HSLA Colors</h3>
                      • HSLA adds Alpha (opacity) to HSL.<br>
                      • Format: hsla(hue, saturation, lightness, alpha)<br><br>

                      Example:<br>
                      hsla(240,100%,50%,0.5) → Transparent Blue<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2 style="background-color:hsla(240,100%,50%,0.5);">
Transparent Blue
</h2>

</body>
</html>`]
                            },
                            {
                                content: `<h3>Color Gradients</h3>
                      • linear-gradient()<br>
                      • radial-gradient()<br>
                      • Used for smooth color transitions.<br><br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<div style="height:150px;
background:linear-gradient(to right, red, yellow);">
Gradient Background
</div>

</body>
</html>`]
                            },
                            {
                                content: `<h3>Color Opacity & Transparency</h3>
                      • opacity property controls entire element transparency.<br>
                      • RGBA / HSLA control only background transparency.<br><br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<div style="background:red; opacity:0.5;">
Opacity applied to entire element
</div>

</body>
</html>`]
                            },
                            {
                                content: `<h3>Advanced Color Concepts</h3>
                      • Contrast ratio improves readability.<br>
                      • Use light text on dark background carefully.<br>
                      • Use consistent color palette.<br>
                      • Use CSS variables for theme colors.<br><br>

                      <h3>Example with CSS Variables</h3>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
:root {
  --primary-color: #3498db;
}
</style>
</head>
<body>

<h1 style="color:var(--primary-color);">
Using Theme Color
</h1>

</body>
</html>`]
                            }
                        ]
                    },

                    {
                        id: 'css',
                        name: 'Introduction of CSS',

                        beginner: [
                            {
                                content: `CSS stands for Cascading Style Sheets.<br>
                      • CSS is used to style HTML elements.<br>
                      • It controls colors, fonts, spacing, layout, and design.<br>
                      • CSS saves time by controlling multiple pages at once.<br>
                      • CSS files are saved with .css extension.<br><br>

                      <h3>Why Use CSS?</h3>
                      • Makes website attractive.<br>
                      • Separates content (HTML) from design (CSS).<br>
                      • Easy to maintain website design.<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;">Blue Heading</h1>
<p style="color:red;">Red Paragraph</p>

</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `<h3>Ways to Add CSS</h3>
                      CSS can be added in 3 ways:<br><br>

                      <b>1. Inline CSS</b><br>
                      • Uses style attribute inside HTML tag.<br>
                      • Applies style to single element.<br><br>

                      <b>2. Internal CSS</b><br>
                      • Written inside &lt;style&gt; tag.<br>
                      • Placed inside &lt;head&gt; section.<br>
                      • Applies to single page.<br><br>

                      <b>3. External CSS</b><br>
                      • Written in separate .css file.<br>
                      • Linked using &lt;link&gt; tag.<br>
                      • Can style multiple pages.<br>`,
                                codeExamples: [`<!-- Inline CSS -->
<h1 style="color:green;">Green Heading</h1>`,

                                    `<!-- Internal CSS -->
<!DOCTYPE html>
<html>
<head>
<style>
h1 { color:blue; }
p { color:red; }
</style>
</head>
<body>
<h1>Heading</h1>
<p>Paragraph</p>
</body>
</html>`,

                                    `<!-- External CSS -->
<!-- styles.css -->
h1 { color:purple; }

<!-- HTML File -->
<link rel="stylesheet" href="styles.css">`]
                            },
                            {
                                content: `<h3>Basic CSS Syntax</h3>
                      selector {
                          property: value;
                      }<br><br>

                      <b>Selector</b> → selects HTML element.<br>
                      <b>Property</b> → what you want to change.<br>
                      <b>Value</b> → how you want it to look.<br><br>

                      Example:<br>
                      h1 { color: blue; font-size: 30px; }`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
p {
  color: orange;
  font-size: 20px;
}
</style>
</head>
<body>
<p>This is styled using CSS</p>
</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h3>CSS Cascade & Specificity</h3>
                      • CSS follows cascading rule (priority system).<br>
                      • Inline CSS > Internal CSS > External CSS (if same specificity).<br>
                      • Specificity decides which rule applies.<br>
                      • ID selector (#id) has higher priority than class (.class).<br><br>

                      Example of Specificity Order:<br>
                      Inline > ID > Class > Element<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
#demo { color: blue; }
.text { color: green; }
p { color: red; }
</style>
</head>
<body>
<p id="demo" class="text" style="color:purple;">
This text will be purple (inline highest priority)
</p>
</body>
</html>`]
                            },
                            {
                                content: `<h3>CSS Selectors</h3>
                      • Element Selector → h1, p<br>
                      • Class Selector → .classname<br>
                      • ID Selector → #idname<br>
                      • Group Selector → h1, p<br>
                      • Universal Selector → *<br>
                      • Descendant Selector → div p<br><br>

                      <h3>CSS Box Model</h3>
                      Every element consists of:<br>
                      • Content<br>
                      • Padding<br>
                      • Border<br>
                      • Margin<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width:200px;
  padding:20px;
  border:5px solid black;
  margin:30px;
}
</style>
</head>
<body>
<div class="box">Box Model Example</div>
</body>
</html>`]
                            },
                            {
                                content: `<h3>CSS Units</h3>
                      • px (pixels)<br>
                      • % (percentage)<br>
                      • em (relative to parent)<br>
                      • rem (relative to root)<br>
                      • vw, vh (viewport units)<br><br>

                      <h3>Best Practices</h3>
                      • Use external CSS for large projects.<br>
                      • Keep CSS organized.<br>
                      • Use classes instead of inline styles.<br>
                      • Follow consistent naming conventions.<br>
                      • Minimize repeated code.<br>`,
                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
:root { font-size:16px; }

h1 { font-size:2rem; }
div { width:50vw; background:lightgray; }
</style>
</head>
<body>
<h1>Responsive Heading</h1>
<div>Viewport Width Box</div>
</body>
</html>`]
                            }
                        ]
                    },


                    {
                        id: 'htmllinks',
                        name: 'HTML Links',

                        beginner: [
                            {
                                content: `
      • HTML links are created using the &lt;a&gt; tag.<br>
      • The href attribute defines the link address.<br>
      • The text between &lt;a&gt; and &lt;/a&gt; is clickable.<br><br>

      <b>Syntax:</b><br>
      &lt;a href="URL"&gt; Link Text &lt;/a&gt;<br><br>

      • When the user clicks the link, the browser opens that page.<br>`
                                ,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>
<h2>Simple Link Example</h2>
<a href="https://www.google.com">Visit Google</a>
</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `<h3>HTML Links (Detailed)</h3>
      • Links connect one webpage to another.<br>
      • The &lt;a&gt; tag is called the anchor tag.<br>
      • The most important attribute is <b>href</b>.<br><br>

      <b>Target Attribute:</b><br>
      • _self → Opens in same tab (default)<br>
      • _blank → Opens in new tab<br>
      • _parent → Opens in parent frame<br>
      • _top → Opens in full window<br><br>

      <b>Absolute vs Relative URL:</b><br>
      • Absolute URL → Full web address (https://example.com/page.html)<br>
      • Relative URL → Path inside same website (about.html)<br><br>

      <b>Email Link:</b><br>
      Use mailto: to open email client.<br>

      <b>Bookmark Link:</b><br>
      Used to jump to a specific section of the same page using id attribute.<br>`
                                ,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>Target Example</h2>
<a href="https://www.google.com" target="_blank">Open in New Tab</a>

<h2>Email Link</h2>
<a href="mailto:example@gmail.com">Send Email</a>

<h2>Bookmark Example</h2>
<a href="#section1">Go to Section 1</a>

<h3 id="section1">Section 1</h3>
<p>This is Section 1</p>

</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h3>HTML Links (Advanced)</h3>

      <b>1. Link States (CSS Pseudo-classes)</b><br>
      • a:link → Normal link<br>
      • a:visited → Visited link<br>
      • a:hover → Mouse over<br>
      • a:active → When clicked<br><br>

      <b>2. Security Best Practice</b><br>
      When using target="_blank", always add:<br>
      rel="noopener noreferrer"<br>
      This prevents security risks.<br><br>

      <b>3. Download Attribute</b><br>
      Forces file download instead of opening it.<br><br>

      <b>4. Accessibility Best Practices</b><br>
      • Use meaningful link text (avoid "Click Here").<br>
      • Add title attribute for extra info.<br>
      • Add alt text when using image as link.<br><br>

      <b>5. Styling Links as Buttons</b><br>
      Use CSS instead of placing &lt;button&gt; inside &lt;a&gt;.<br>`
                                ,
                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: green; }

.button {
  display:inline-block;
  padding:10px 20px;
  background-color:blue;
  color:white;
  text-decoration:none;
  border-radius:5px;
}
.button:hover {
  background-color:darkblue;
}
</style>
</head>
<body>

<h2>Styled Link</h2>
<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
Secure External Link
</a>

<h2>Download Example</h2>
<a href="file.pdf" download>Download PDF</a>

<h2>Link as Button</h2>
<a href="https://www.google.com" class="button">Click Me</a>

</body>
</html>`]
                            }
                        ]
                    },

                    {
                        id: 'htmlimages',
                        name: 'HTML Images',

                        beginner: [
                            {
                                content: `
      • Images are added to a webpage using the &lt;img&gt; tag.<br>
      • The &lt;img&gt; tag is an empty tag (it does not have a closing tag).<br>
      • The <b>src</b> attribute specifies the image path.<br>
      • The <b>alt</b> attribute provides alternative text if the image cannot load.<br><br>

      <b>Syntax:</b><br>
      &lt;img src="image.jpg" alt="description"&gt;<br><br>

      • Always include the alt attribute for accessibility.<br>`
                                ,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>
<h2>Simple Image Example</h2>
<img src="flower.jpg" alt="Flower Image">
</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `<h3>HTML Images (Detailed)</h3>

      <b>1. Image Size</b><br>
      • You can set width and height using attributes.<br>
      • Size is usually defined in pixels.<br><br>

      <b>2. Absolute vs Relative Path</b><br>
      • Absolute URL → Full web address.<br>
      • Relative URL → Image inside project folder.<br><br>

      <b>3. Image as Link</b><br>
      • You can wrap an image inside an &lt;a&gt; tag.<br><br>

      <b>4. Title Attribute</b><br>
      • Displays tooltip when mouse hovers over image.<br><br>

      <b>5. Image Alignment (using CSS)</b><br>
      • Use CSS for proper alignment instead of old attributes.<br>`
                                ,
                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>Image with Width & Height</h2>
<img src="flower.jpg" alt="Flower" width="300" height="200">

<h2>Image from Internet</h2>
<img src="https://www.w3schools.com/images/w3schools_green.jpg" 
     alt="W3Schools Logo" width="200">

<h2>Image as Link</h2>
<a href="https://www.google.com">
  <img src="flower.jpg" alt="Clickable Image" width="150">
</a>

</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h3>HTML Images (Advanced)</h3>

      <b>1. Responsive Images</b><br>
      • Use CSS (max-width:100%) to make images responsive.<br>
      • Prevents overflow on smaller screens.<br><br>

      <b>2. Picture Element</b><br>
      • Used for displaying different images for different screen sizes.<br><br>

      <b>3. srcset Attribute</b><br>
      • Allows browser to choose best image based on screen resolution.<br><br>

      <b>4. Lazy Loading</b><br>
      • Use loading="lazy" to improve performance.<br><br>

      <b>5. Image Formats</b><br>
      • JPEG → Photographs<br>
      • PNG → Transparent images<br>
      • GIF → Animation<br>
      • WebP → Modern optimized format<br><br>

      <b>6. Accessibility Best Practice</b><br>
      • Always use meaningful alt text.<br>
      • Use empty alt="" if image is decorative only.<br>`
                                ,
                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
img {
  max-width: 100%;
  height: auto;
}
</style>
</head>
<body>

<h2>Responsive Image</h2>
<img src="flower.jpg" alt="Responsive Flower">

<h2>Lazy Loading</h2>
<img src="flower.jpg" alt="Lazy Image" loading="lazy">

<h2>Using Picture Element</h2>
<picture>
  <source media="(max-width:600px)" srcset="small.jpg">
  <source media="(max-width:1200px)" srcset="medium.jpg">
  <img src="large.jpg" alt="Responsive Image">
</picture>

</body>
</html>`]
                            }
                        ]
                    },

                    {
                        id: 'HTML Tables',
                        name: 'HTML Tables',

                        beginner: [
                            {
                                content: `
 A table is a collection of rows and columns used to display data in structured format. <br>
• HTML tables are defined using the < table > tag. <br>
• < tr > defines a table row. <br>
• < th > defines a table header. <br>
• < td > defines a table cell. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>HTML Table Example</h2>

<table border="1">
<tr>
<th>Name</th>
<th>Age</th>
<th>City</th>
</tr>

<tr>
<td>John</td>
<td>25</td>
<td>New York</td>
</tr>

<tr>
<td>Jane</td>
<td>30</td>
<td>London</td>
</tr>
</table>

</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `<h4>Table Styling</h4>
• Use CSS to style tables. <br>
• border-collapse is used to collapse borders. <br>
• padding adds space inside cells. <br>
• text-align aligns content. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid black;
}

th, td {
    padding: 10px;
    text-align: left;
}
</style>
</head>
<body>

<h2>Styled Table</h2>

<table>
<tr>
<th>Name</th>
<th>Age</th>
<th>City</th>
</tr>

<tr>
<td>John</td>
<td>25</td>
<td>New York</td>
</tr>

<tr>
<td>Jane</td>
<td>30</td>
<td>London</td>
</tr>
</table>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Colspan and Rowspan</h4>
• colspan is used to merge columns. <br>
• rowspan is used to merge rows. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>Colspan and Rowspan Example</h2>

<table border="1">
<tr>
<th>Name</th>
<th colspan="2">Phone</th>
</tr>

<tr>
<td>Bill Gates</td>
<td>123456</td>
<td>789012</td>
</tr>

<tr>
<th rowspan="2">Support</th>
<td>111111</td>
<td>222222</td>
</tr>

<tr>
<td>333333</td>
<td>444444</td>
</tr>
</table>

</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h4>Advanced Table Styling</h4>
• Use nth-child() for alternate row colors. <br>
• Use caption for table title. <br>
• Apply styles to specific tables using id or class. <br>
• Use responsive design for better mobile view. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
}

caption {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
}

th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
}

th {
    background-color: #333;
    color: white;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:hover {
    background-color: #ddd;
}
</style>
</head>
<body>

<table>
<caption>Employee Details</caption>

<tr>
<th>Name</th>
<th>Department</th>
<th>Salary</th>
</tr>

<tr>
<td>John</td>
<td>IT</td>
<td>$5000</td>
</tr>

<tr>
<td>Jane</td>
<td>HR</td>
<td>$4500</td>
</tr>

<tr>
<td>Mike</td>
<td>Finance</td>
<td>$6000</td>
</tr>

</table>

</body>
</html>`]
                            },

                            {
                                content: `<h4>Using thead, tbody and tfoot</h4>
• < thead > is used to group table header content. <br>
• < tbody > is used to group the main body content. <br>
• < tfoot > is used to group footer content (totals, summary). <br>
• Improves structure and accessibility. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
}
thead {
    background-color: #2c3e50;
    color: white;
}
tfoot {
    background-color: #f2f2f2;
    font-weight: bold;
}
</style>
</head>
<body>

<table>
<thead>
<tr>
<th>Product</th>
<th>Quantity</th>
<th>Price</th>
</tr>
</thead>

<tbody>
<tr>
<td>Laptop</td>
<td>2</td>
<td>50000</td>
</tr>
<tr>
<td>Mouse</td>
<td>5</td>
<td>500</td>
</tr>
</tbody>

<tfoot>
<tr>
<td colspan="2">Total</td>
<td>102500</td>
</tr>
</tfoot>
</table>

</body>
</html>`]
                            },

                            {
                                content: `<h4>Responsive Table (Mobile Friendly)</h4>
• Wrap table inside a div. <br>
• Use overflow-x: auto for horizontal scrolling. <br>
• Useful when table has many columns. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
.table-container {
    overflow-x: auto;
}

table {
    border-collapse: collapse;
    width: 100%;
    min-width: 600px;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #3498db;
    color: white;
}
</style>
</head>
<body>

<div class="table-container">
<table>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Address</th>
</tr>
<tr>
<td>1</td>
<td>John</td>
<td>john@email.com</td>
<td>9999999999</td>
<td>New York</td>
</tr>
</table>
</div>

</body>
</html>`]
                            },

                            {
                                content: `<h4>Real-World Product Report Table</h4>
• Alternate row coloring using nth-child. <br>
• Hover effect for better UX. <br>
• Clean professional UI. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
body {
    font-family: Arial, sans-serif;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

caption {
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: bold;
}

th, td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
}

th {
    background-color: #1abc9c;
    color: white;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #f1f1f1;
}
</style>
</head>
<body>

<table>
<caption>Monthly Sales Report</caption>

<thead>
<tr>
<th>Product ID</th>
<th>Product Name</th>
<th>Category</th>
<th>Quantity Sold</th>
<th>Total Revenue</th>
</tr>
</thead>

<tbody>
<tr>
<td>101</td>
<td>Laptop</td>
<td>Electronics</td>
<td>10</td>
<td>500000</td>
</tr>
<tr>
<td>102</td>
<td>Mobile</td>
<td>Electronics</td>
<td>25</td>
<td>375000</td>
</tr>
<tr>
<td>103</td>
<td>Chair</td>
<td>Furniture</td>
<td>15</td>
<td>75000</td>
</tr>
</tbody>

<tfoot>
<tr>
<td colspan="4">Grand Total</td>
<td>950000</td>
</tr>
</tfoot>

</table>

</body>
</html>`]
                            }

                        ]
                    },

                    {
                        id: 'htmllist',
                        name: 'HTML List',

                        beginner: [
                            {
                                content: `
In HTML, a list is used to create organized and structured items. <br>
There are two common types of lists: <br>
• Unordered List (Bulleted list) using < ul > and < li > tags. <br>
• Ordered List (Numbered list) using < ol > and < li > tags. <br><br>

• < li > defines each list item. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>Unordered List Example</h2>
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>

<h2>Ordered List Example</h2>
<ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
  <li>Go to school</li>
</ol>

</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `<h4>Types of HTML Lists</h4>
There are three types of lists in HTML: <br>
1. Ordered List (< ol >) <br>
2. Unordered List (< ul >) <br>
3. Description List (< dl >) <br><br>

<h4>Ordered List</h4>
• Used when sequence matters. <br>
• Supports type attribute (1, A, a, I, i). <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>Ordered List Types</h2>

<ol type="1">
  <li>HTML</li>
  <li>CSS</li>
</ol>

<ol type="A">
  <li>Java</li>
  <li>Python</li>
</ol>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Unordered List</h4>
• Used when order does not matter. <br>
• Supports type: disc, circle, square. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>Unordered List Types</h2>

<ul type="disc">
  <li>Red</li>
  <li>Blue</li>
</ul>

<ul type="square">
  <li>Car</li>
  <li>Bike</li>
</ul>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Description List</h4>
• Used for definitions. <br>
• < dl > defines description list. <br>
• < dt > defines term. <br>
• < dd > defines description. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>Description List</h2>

<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>

</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h4>Nested Lists</h4>
• A list inside another list is called a nested list. <br>
• Useful for menus and categories. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>Nested List</h2>

<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Mango</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Potato</li>
    </ul>
  </li>
</ul>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Styled Lists Using CSS</h4>
• Use list-style-type to change bullets. <br>
• Use list-style-image for custom bullet image. <br>
• Remove bullets using list-style: none. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
ul {
  list-style-type: square;
}

.custom {
  list-style: none;
  padding: 0;
}

.custom li {
  background: #3498db;
  color: white;
  padding: 8px;
  margin: 5px 0;
}
</style>
</head>
<body>

<h2>Styled List</h2>

<ul>
  <li>Item One</li>
  <li>Item Two</li>
</ul>

<h2>Custom Styled Menu</h2>
<ul class="custom">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Navigation Menu Using List</h4>
• Lists are commonly used to create navigation bars. <br>
• Use display: inline for horizontal menu. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #333;
}

ul li {
  display: inline;
}

ul li a {
  color: white;
  padding: 10px 15px;
  text-decoration: none;
}

ul li a:hover {
  background-color: #111;
}
</style>
</head>
<body>

<ul>
  <li><a href="#">Home</a></li>
  <li><a href="#">Services</a></li>
  <li><a href="#">Contact</a></li>
</ul>

</body>
</html>`]
                            }
                        ]
                    },

                    {
                        id: 'classattribute',
                        name: 'Class Attribute',

                        beginner: [
                            {
                                content: `
• The class attribute is used to specify one or more class names for an HTML element. <br>
• The class name is used to apply CSS styles to multiple elements. <br>
• Multiple elements can share the same class name. <br><br>

Syntax: <br>
< element class="classname" > <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
.box {
  color: white;
  background-color: blue;
  padding: 10px;
}
</style>
</head>
<body>

<h2 class="box">Hello World</h2>
<p class="box">This paragraph uses the same class.</p>

</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `<h4>Using Multiple Classes</h4>
• You can assign multiple classes to one element. <br>
• Separate class names with space. <br><br>

Example: class="class1 class2" <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
.text {
  color: red;
}

.big {
  font-size: 25px;
}
</style>
</head>
<body>

<p class="text big">This is styled with two classes.</p>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Class Selector in CSS</h4>
• To select a class in CSS, use dot (.) before class name. <br>
• Example: .classname { } <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
.highlight {
  background-color: yellow;
}
</style>
</head>
<body>

<p class="highlight">Highlighted text</p>

</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h4>Using Class with JavaScript</h4>
• JavaScript can select elements using class name. <br>
• Use document.getElementsByClassName() or querySelector(). <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<p class="demo">First Paragraph</p>
<p class="demo">Second Paragraph</p>

<button onclick="changeText()">Click Me</button>

<script>
function changeText() {
  var elements = document.getElementsByClassName("demo");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "green";
  }
}
</script>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Class vs ID</h4>
• class can be used on multiple elements. <br>
• id must be unique. <br>
• class is reusable, id is unique identifier. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
#unique {
  color: blue;
}

.common {
  font-weight: bold;
}
</style>
</head>
<body>

<h2 id="unique">Unique Heading</h2>

<p class="common">Paragraph 1</p>
<p class="common">Paragraph 2</p>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Real-World Example (Card Layout)</h4>
• Classes are commonly used in layouts like cards, buttons, and components. <br>
• Helps maintain reusable and clean design. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
.card {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  width: 200px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
}

.card-btn {
  background-color: green;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
}
</style>
</head>
<body>

<div class="card">
  <div class="card-title">Product 1</div>
  <p>Price: $100</p>
  <a href="#" class="card-btn">Buy Now</a>
</div>

</body>
</html>`]
                            }
                        ]
                    },

                    {
                        id: 'idattribute',
                        name: 'ID Attribute',

                        beginner: [
                            {
                                content: `
• The id attribute is used to uniquely identify an HTML element. <br>
• An id value must be unique within a page. <br>
• It is mainly used for styling (CSS) and JavaScript manipulation. <br><br>

Syntax: <br>
< element id="uniqueName" > <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
#heading {
  color: blue;
}
</style>
</head>
<body>

<h2 id="heading">This is a unique heading</h2>

</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `<h4>Using ID in CSS</h4>
• To select an id in CSS, use # before the id name. <br>
• Example: #idname { } <br>
• ID has higher priority than class selector. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
#box {
  background-color: lightgreen;
  padding: 15px;
}
</style>
</head>
<body>

<div id="box">
  This div is styled using ID selector.
</div>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Using ID for Page Navigation (Bookmark)</h4>
• ID can be used to create internal page links. <br>
• Use href="#idname" to jump to that section. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<a href="#section2">Go to Section 2</a>

<h2 id="section1">Section 1</h2>
<p>Content of Section 1</p>

<h2 id="section2">Section 2</h2>
<p>Content of Section 2</p>

</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h4>Using ID with JavaScript</h4>
• JavaScript can directly access elements using getElementById(). <br>
• Useful for DOM manipulation and event handling. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<p id="demo">Hello World</p>
<button onclick="changeText()">Click Me</button>

<script>
function changeText() {
  document.getElementById("demo").innerHTML = "Text Changed!";
  document.getElementById("demo").style.color = "red";
}
</script>

</body>
</html>`]
                            },
                            {
                                content: `<h4>ID vs Class</h4>
• id must be unique in a page. <br>
• class can be used multiple times. <br>
• ID has higher CSS specificity than class. <br>
• Use ID for unique elements and class for reusable styles. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
#unique {
  color: red;
}

.common {
  font-weight: bold;
}
</style>
</head>
<body>

<h2 id="unique">Unique Heading</h2>

<p class="common">Paragraph 1</p>
<p class="common">Paragraph 2</p>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Real-World Example (Single Page Layout)</h4>
• IDs are commonly used in navigation menus. <br>
• Helps in scrolling to sections smoothly. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
section {
  height: 300px;
  padding: 20px;
}

#home { background-color: #f1c40f; }
#about { background-color: #2ecc71; }
#contact { background-color: #3498db; }

html {
  scroll-behavior: smooth;
}
</style>
</head>
<body>

<nav>
  <a href="#home">Home</a> |
  <a href="#about">About</a> |
  <a href="#contact">Contact</a>
</nav>

<section id="home">
  <h2>Home Section</h2>
</section>

<section id="about">
  <h2>About Section</h2>
</section>

<section id="contact">
  <h2>Contact Section</h2>
</section>

</body>
</html>`]
                            }
                        ]
                    },

                    {
                        id: 'htmlform',
                        name: 'HTML Form',

                        beginner: [
                            {
                                content: `
• An HTML form is used to collect user input. <br>
• The < form > element is used to create a form. <br>
• Input fields like text, password, email are created using < input > tag. <br>
• A submit button is used to send form data. <br><br>

Basic Syntax: <br>
< form > <br>
  < input type="text" > <br>
  < input type="submit" > <br>
< /form > <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>Simple Form</h2>

<form>
  Name: <input type="text"><br><br>
  Password: <input type="password"><br><br>
  <input type="submit" value="Submit">
</form>

</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `<h4>Form Attributes</h4>
• action → Specifies where to send form data. <br>
• method → Specifies HTTP method (GET or POST). <br>
• name → Identifies form elements. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>Login Form</h2>

<form action="/login" method="POST">
  Email: <input type="email" name="email"><br><br>
  Password: <input type="password" name="password"><br><br>
  <input type="submit" value="Login">
</form>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Different Input Types</h4>
• text <br>
• password <br>
• email <br>
• number <br>
• radio <br>
• checkbox <br>
• date <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>Registration Form</h2>

<form>
  Name: <input type="text"><br><br>
  Email: <input type="email"><br><br>
  Age: <input type="number"><br><br>
  
  Gender:
  <input type="radio" name="gender"> Male
  <input type="radio" name="gender"> Female <br><br>

  Skills:
  <input type="checkbox"> HTML
  <input type="checkbox"> CSS <br><br>

  Birth Date: <input type="date"><br><br>

  <input type="submit">
</form>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Label and Placeholder</h4>
• < label > improves accessibility. <br>
• placeholder shows hint text inside input. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<form>
  <label for="username">Username:</label>
  <input type="text" id="username" placeholder="Enter your name"><br><br>

  <input type="submit">
</form>

</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h4>Form Validation</h4>
• required attribute makes field mandatory. <br>
• pattern attribute validates input format. <br>
• minlength and maxlength control input length. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>Validated Form</h2>

<form>
  Email: 
  <input type="email" required><br><br>

  Password: 
  <input type="password" minlength="6" required><br><br>

  Phone: 
  <input type="text" pattern="[0-9]{10}" placeholder="10 digit number" required><br><br>

  <input type="submit">
</form>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Select, Textarea and Fieldset</h4>
• < select > creates dropdown list. <br>
• < textarea > creates multi-line text input. <br>
• < fieldset > groups related fields. <br>
• < legend > defines title for fieldset. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<form>

<fieldset>
<legend>Contact Information</legend>

Name: <input type="text"><br><br>

Country:
<select>
  <option>India</option>
  <option>USA</option>
  <option>UK</option>
</select><br><br>

Message:<br>
<textarea rows="4" cols="30"></textarea><br><br>

<input type="submit">

</fieldset>

</form>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Real-World Styled Form</h4>
• Use CSS for better UI. <br>
• Improve spacing and layout. <br>
• Professional form design. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial;
}

.form-container {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input, select, textarea {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
}

button {
  background-color: #3498db;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>
</head>
<body>

<div class="form-container">
<h3>Contact Form</h3>

<form>
  <input type="text" placeholder="Your Name" required>
  <input type="email" placeholder="Your Email" required>
  <textarea placeholder="Your Message"></textarea>
  <button type="submit">Send</button>
</form>

</div>

</body>
</html>`]
                            }
                        ]
                    },

                    {
                        id: 'block and in line element',
                        name: 'Block and Inline Element',

                        beginner: [
                            {
                                content: `
• HTML elements are divided into two main categories: <br>
1. Block-level elements <br>
2. Inline elements <br><br>

<h4>Block Elements</h4>
• Always start on a new line. <br>
• Take full width available. <br>
• Example: < div >, < p >, < h1 > to < h6 > <br><br>

<h4>Inline Elements</h4>
• Do not start on a new line. <br>
• Take only necessary width. <br>
• Example: < span >, < a >, < b >, < img > <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<h2>Block Element Example</h2>
<div style="background-color: lightblue;">This is a block element</div>
<p>This is another block element</p>

<h2>Inline Element Example</h2>
<span style="color: red;">This is inline</span>
<a href="#">This is also inline</a>

</body>
</html>`]
                            }
                        ],

                        intermediate: [
                            {
                                content: `<h4>Difference Between Block and Inline</h4>
• Block elements take full width. <br>
• Inline elements take only required width. <br>
• Block elements can contain inline elements. <br>
• Inline elements cannot contain block elements. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<body>

<div style="border:1px solid black;">
  <span>This span is inside a div (allowed)</span>
</div>

<span>
  This is inline text
</span>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Inline-Block Element</h4>
• display: inline-block combines both behaviors. <br>
• It does not start on a new line. <br>
• But width and height can be set. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: orange;
  margin: 5px;
}
</style>
</head>
<body>

<div class="box"></div>
<div class="box"></div>
<div class="box"></div>

</body>
</html>`]
                            }
                        ],

                        expert: [
                            {
                                content: `<h4>Display Property</h4>
• display property controls element behavior. <br>
• display: block <br>
• display: inline <br>
• display: inline-block <br>
• display: none (hide element) <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
.block {
  display: block;
  background-color: lightgreen;
}

.inline {
  display: inline;
  background-color: yellow;
}

.none {
  display: none;
}
</style>
</head>
<body>

<span class="block">This span behaves like block</span>
<div class="inline">This div behaves like inline</div>

<p class="none">This paragraph is hidden</p>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Real-World Layout Example</h4>
• Block elements are used for page layout (header, footer, section). <br>
• Inline elements are used for styling text and links. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
header, footer {
  background-color: #333;
  color: white;
  padding: 10px;
}

nav a {
  display: inline-block;
  padding: 10px;
  color: white;
  text-decoration: none;
}

section {
  padding: 20px;
  background-color: #f4f4f4;
}
</style>
</head>
<body>

<header>
  <h2>Website Header</h2>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>

<section>
  <p>This is the main content area.</p>
</section>

<footer>
  <p>Website Footer</p>
</footer>

</body>
</html>`]
                            },
                            {
                                content: `<h4>Advanced: Visibility vs Display</h4>
• display: none removes element from layout. <br>
• visibility: hidden hides element but keeps space. <br><br>`,

                                codeExamples: [`<!DOCTYPE html>
<html>
<head>
<style>
.hide1 {
  display: none;
}

.hide2 {
  visibility: hidden;
}
</style>
</head>
<body>

<p class="hide1">This is removed completely</p>
<p class="hide2">This is hidden but space remains</p>

</body>
</html>`]
                            }
                        ]
                    }


                ]
            }
        ],
     
            cheatNotes: [

                // HTML
                "HTML stands for HyperText Markup Language.",
                "<!DOCTYPE html> defines HTML5 document.",
                "Block elements take full width (div, p, h1-h6).",
                "Inline elements take only required width (span, a, img).",
                "id must be unique, class can be reused.",
                "Forms use GET (visible) and POST (secure).",
                "input types: text, email, password, radio, checkbox, date.",
                "Tables use table, tr, th, td.",
                "colspan & rowspan merge cells.",
                "Semantic tags: header, footer, nav, section, article.",

                // CSS
                "CSS = Cascading Style Sheets.",
                "Selector syntax: selector { property: value; }",
                "Types of CSS: Inline, Internal, External.",
                "CSS Specificity: Inline > ID > Class > Element.",
                "Box Model: Content + Padding + Border + Margin.",
                "display: block | inline | inline-block | none.",
                "position: static | relative | absolute | fixed | sticky.",
                "Flexbox: display:flex; justify-content; align-items.",
                "Grid: display:grid; grid-template-columns.",
                "Media queries make websites responsive."
            ],

            interviewQuestions: [

                {
                    company: "TCS",
                    questions: [
                        "What is the difference between block and inline elements?",
                        "Explain id vs class.",
                        "What is the box model?",
                        "What is semantic HTML?"
                    ]
                },

                {
                    company: "Infosys",
                    questions: [
                        "Difference between GET and POST?",
                        "Explain CSS specificity.",
                        "What is display:none vs visibility:hidden?",
                        "How does Flexbox work?"
                    ]
                },

                {
                    company: "Wipro",
                    questions: [
                        "What are pseudo-classes?",
                        "Explain relative vs absolute positioning.",
                        "How to create responsive design?",
                        "Difference between Flexbox and Grid?"
                    ]
                },

                {
                    company: "Accenture",
                    questions: [
                        "Explain HTML form validation.",
                        "What is z-index?",
                        "What is CSS inheritance?",
                        "How browser renders HTML?"
                    ]
                },

                {
                    company: "Google",
                    questions: [
                        "Explain CSS cascade in detail.",
                        "How does DOM work?",
                        "How to optimize CSS performance?",
                        "Explain accessibility in HTML."
                    ]
                }

            ]
        }
]
