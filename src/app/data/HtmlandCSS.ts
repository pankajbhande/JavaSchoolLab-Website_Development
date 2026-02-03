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
                name: 'HTML & CSS',
                topics: [

                    {
                        id: 'basics of html and css',
                        name: 'Basics of HTML and CSS',
                        beginner: [
                            {
                                content: `<h3> 1. Document Outline </h3>
                                < Doctypye > - Version of (X) HTML <br>
                                < html > - Root element <br>
                                < head > - Metadata container <br>
                                < title > - Document title <br> 
                                < body > - Document body <br>
                                `,
                                codeExamples: [`<!DOCTYPE html>`
                                ]
                            },
                            {
                                content:`<h3>2. Comments</h3>`,
                                codeExamples:[`<!-- Comment Text>`]
                            },
                            {
                                content:`<h3>3. Page Information</h3>
                                < base /> - Base URL <br>
                                < meta /> - meta data <br>
                                < title /> - Title <br>
                                < link /> - Relevant Resource <br>
                                < style /> - Style resource <br>
                                < script /> - script resource <br><br>
                                
                                <h3>4. Document Structure </h3>
                                < h1 [1-6] > - Heading <br>
                                < div > - Page Section <br>
                                < span > - Inline Section<br>
                                < p > - Paragraph<br>
                                < br /> - line break <br>
                                < hr /> - horizontal rule<br> <br>
                                 
                                <h3>5. Links </h3>
                                < a href = "" > - Page link <br>
                                < a href = "mail.to:" > - Email Link <br>
                                < a name = "name" > - Anchor <br>
                                < a href = "# name" > - Link to anchor <br><br>
                                 
                                <h3>6. Text Markup</h3>
                                < strong > - Strong emphasis <br>
                                < em > - emphasis <br>
                                < blockquore > - Long quotation <br>
                                < q > - short quotation <br>
                                < abbr > - Abbreviation <br>
                                < acronum >  - Acronum <br>
                                < pre > - Pre-Formatted Text <br>
                                < dfn > - Defination <br>
                                < code > - Code <br>
                                < cite > - citation <br>
                                < del > - Deleted Text <br>
                                < ins > - Inserted Text <br>
                                < sub > - Subscript <br>    
                                < sup > - Superscript <br>
                                < address > - Address <br> <br>

                                <h3> 7. Lists </h3>
                                < ol > - Ordered list <br>
                                < ul > - Unordered list <br>
                                < li > - List item <br>
                                < dl > - Definition list <br>
                                < dt > - Definition term <br>
                                < dd > - Term description <br><br>

                                <h3>8. Forms </h3>
                                < form > - Form <br>
                                < Fieldset > - Collection of field <br> 
                                < legend > - Form legend <br>
                                < label > - Input label <br>
                                < input /> - form input <br>
                                < select > - Drop-down box <br>
                                < optgroup > - Group of options <br>
                                < option > - Drop-down option <br>
                                < textarea > - large-text input <br>
                                < button > - Button <br><br>
    
                                <h3>9. Tables </h3>
                                < table > - Table <br> 
                                < caption > - Caption <br>
                                < thead > - Table header <br>
                                < tbody > - Table body <br>
                                < tfoot > - Table footer <br> 
                                < colgroup > - column group <br>
                                < col /> - column <br>  
                                < tr > - Table Row <br>
                                < td > - Table cell <br><br>

                                <h3>10. Image & Image Map </h3>
                                < img /> - Image <br>
                                < map > - Image Map <br>
                                < area /> - Area of Image Map <br><br>
                                 
                               <h3>11. Common char. Entites </h3>
                               & # 34        " - Quotation mark <br><br>
                               
                               
                               <h3>12. Object </h3>
                               < object > - Object <br>
                               < param /> - Parameter <br><br>
                               
                               <h3>13. Empty Element </h3>
                               < area /> - < img /> <br>
                               < base /> - < input /> <br>
                               < br /> - < link /> <br>
                               < col /> - < meta /> <br>
                               < hr /> - < param /> <br><br>
                                
                               <h3>14. Core Attributes </h3>
                                class ------> style <br>
                                id ---------> Title <br>
                                 
                                <b>Note : </b>
                                 Core attributes may not be used in base, html, head, meta, param, script, style or title elements.<br><br>

                                <h3>15. Language Attribute </h3>
                                <b>Note : </b>Language Attributes may not be used in base, br, frame, frameset, hr,iframe, param, or script elements.<br><br>

                                <h3>16. Keyborad Attributes</h3>
                                accessKey <br>
                                tabindex <br><br>

                                <h3>17. Window Events </h3>
                                Onload <br>
                                OnUnload<br><br>

                                <h3>18. Form Events </h3>
                                OnBlur <br>
                                OnReset <br>
                                Onchange <br>
                                Onfocus <br>
                                OnSelect <br>
                                OnSubmit <br><br>

                                <h3>19. Keyborad Event</h3>
                                Onkeydown <br>
                                Onkeyup <br>
                                Onkeypress <br><br>

                                <h3>20. Mouse Event </h3>
                                Onclick <br>
                                OnDbclick <br>
                                OnMouseout <br>
                                OnMouseover <br>
                                OnMousedown <br>
                                OnMouseup <br>
                                OnMousemove <br><br>

                                <h3> Basics of HTML </h3>
                                1. < html > < /html > - Start and End document. <br>
                                2. < h1 > < /h1 > - Header Size 1-6 (Larger to small). <br>
                                3. < p > < /p > - Paragraph Tag. <br>
                                4. &nbsp - Non-Breaking space. <br>
                                5. < b > < /b > - Bold Text Tag. <br>
                                6. < strike > < /strike > - Strike Through Tag. <br>
                                7. < i > < /i > - Italics Tag. <br>
                                8. < u > < /u > - Underling Tag. <br>
                                9. < table > < /table > - Basic Table Tag. <br>
                                10. < li > < /li > - List Items Tag. <br>
                                11. < a href = "url" > text < /html > - Basic Link. <br>
                                12. < img src = "url" alt = "text" > - Basic image. <br>
                                13. src = "url" - Source (URL/FileName). <br>
                                14. alt = "text" - Alt (HOVER) Text. <br>
                                15. width = "number" - Line or Image width by Number or Percentage. <br>
                                16. height = "number" -  Line or Image height by Number or Percentage. <br>
                                17. border = "number" - Border Thickness. <br>
                                18. < br > - Line Break Tag. <br>
                                19. color "#number" - Color. <br>
                                20. < blockquote > < /blockquote > - Quote Text Block. <br> `,
                                 
                            },
                            
                        ]    
                    },

                    {
                        id: 'intro html and css',
                        name: 'HTML and CSS',
                        beginner: [
                            {
                                content: `<h3> HTML </h3>
1. HTML stands for Hypertext Markup Language. <br>
2. HTML is used to create web pages and web applications. <br>
3. HTML is widely used language on the web. <br>
4. We can create a static website by HTML only. <br>
5. Technically, HTML is a Markup language rather than a programming language. <br><br>

Example : 
`,
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
                        ]
                    }
                    
                ]
            }

        ],
        cheatNotes: [],
        interviewQuestions: []

    }
]
