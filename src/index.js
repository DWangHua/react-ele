import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './base.css';
import './icon.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}
