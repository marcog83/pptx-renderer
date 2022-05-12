import ReactDOM from 'react-dom';
import { PPTX, registerClassNames } from 'pptx-renderer';
import { App } from './app';
import { PPTComponent } from './ppt-component';
import { Style } from './class-names';

import './index.css';

async function main() {
  registerClassNames(Style);
  const pptx = await PPTX.render(<PPTComponent />);

  ReactDOM.render(<App pptx={ pptx } />, document.getElementById('root'));
}
main();

