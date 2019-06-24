import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import './App.css';
import BoxContainer from './containers/Box-container';

let store = createStore(reducers, applyMiddleware(thunk));

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Provider store={store}>
					<BoxContainer />
				</Provider>
			</header>
		</div>
	);
}

export default App;
