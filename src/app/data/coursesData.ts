// Course data structure for JavaSchoolLab

import { CollectionFramework } from "./CollectionFramework";
import { coreJava } from "./coreJava";
import { designPattern } from "./designPattern";
import { Hibernate } from "./Hibernate";
import { HtmlandCSS } from "./HtmlandCSS";
import { JSPServlets } from "./JSPServlet";
import { MySQLCSS } from "./MySQLCSS";
import { Reactjs } from "./Reactjs";


export const coursesData = [ ...HtmlandCSS,...coreJava, ...JSPServlets, ...CollectionFramework, 
    ...designPattern, ...MySQLCSS, ...Hibernate,...Reactjs
    
]



