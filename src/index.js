import React from "react";
import Reactdom from "react-dom";
import Student from "./student";

import App from "./App";
/*//import { createRoot } from 'react-dom/client';

//const container=document.getElementById("root");
const root=createRoot(container);
root.render( 
            <Student name={1234} rollno="100" />
);*/
// Reactdom.render(<Student rollno={100} />,document.getElementById("root"));
Reactdom.render(<App keyy={101} />,document.getElementById("root"));