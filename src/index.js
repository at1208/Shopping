import React from 'react';
import ReactDOM from'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, Route} from 'react-router-dom'
import App from './components/app'
import reducers from './reducers/index'
import CheckOut from './components/checkout'

const store = createStore(reducers);
 console.log(store.getState())
ReactDOM.render(  <Provider store={store}>
                    <BrowserRouter>
                      <div>
                       <Route path='/' exact component={App} />
                       <Route path='/checkout' component ={CheckOut}/>
                      </div>
                   </BrowserRouter>

                  </Provider>,
                            document.getElementById('root'));
