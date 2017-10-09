import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from 'containers/App/app';
import store from 'store';

const render = Component =>
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<Component />
			</Provider>
		</AppContainer>,
		document.getElementById('app')
	);

render(App);
if (module.hot) module.hot.accept('./containers/App/app', () => render(App));
