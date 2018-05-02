import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routers from './route/index.js'

ReactDOM.render(<div>
  <Routers />
</div>, document.getElementById('root'));
registerServiceWorker();
