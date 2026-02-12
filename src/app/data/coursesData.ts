// Course data structure for JavaSchoolLab

import { CollectionFramework } from "./CollectionFramework";
import { coreJava } from "./coreJava";
import { designPattern } from "./designPattern";
import { HtmlandCSS } from "./HtmlandCSS";
import { JSPServlets } from "./JSPServlet";
import { MySQLCSS } from "./MySQLCSS";


export const coursesData = [ ...HtmlandCSS,...coreJava, ...JSPServlets, ...CollectionFramework, 
    ...designPattern, ...MySQLCSS,
    
]



