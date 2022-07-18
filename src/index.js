import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './components/App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Notifications from './components/shared/Notifications/Notifications'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<BrowserRouter>
			<Provider store={store}>
				<App />
				<Notifications />
			</Provider>
		</BrowserRouter>
	</>,
);
