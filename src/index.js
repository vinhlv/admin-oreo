import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import './assets/plugins/bootstrap/css/bootstrap.min.css';
import './assets/plugins/jvectormap/jquery-jvectormap-2.0.3.min.css';
import './assets/plugins/morrisjs/morris.min.css';
import './assets/css/main.css';
import './assets/css/authentication.css';
import './assets/css/color_skins.css';

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
