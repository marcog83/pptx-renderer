import "regenerator-runtime/runtime";
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import { PPTX } from "pptx-renderer";
import { App } from './app';
 import { PPTComponent } from './ppt-component';
 
const pptx =  PPTX.render(<PPTComponent/>);
 
ReactDOM.render(<App pptx={pptx}/>, document.getElementById("root"));



