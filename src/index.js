import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './components/reducers/index'

const store = createStore(reducers);
console.log(store.getState())
ReactDOM.render(<Provider store={store}>
                   <App />
                </Provider>
                 ,document.getElementById('root'));
