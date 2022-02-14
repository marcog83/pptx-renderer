import ReactDOM from 'react-dom';
import './index.css';
import { PPTX } from "pptx-renderer";
import { App } from './app';
import { PPTComponent } from './ppt-component';

const pptx = PPTX.render(<PPTComponent/>);
 
ReactDOM.render(<App pptx={pptx}/>, document.getElementById("root"));



