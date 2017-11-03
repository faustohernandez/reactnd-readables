import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store'
import './App.css';

import 'react-select/dist/react-select.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import routes from './router'

class App extends Component {
  render(){
    return (
    <Provider store={store}>

      <div className="App">
        {routes()}
      </div>
    </Provider>
    )
  }
}

export default App;
