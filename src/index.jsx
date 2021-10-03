import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Provider} from "react-redux";
import store from "./redux-store"
import { HashRouter } from 'react-router-dom';
ReactDOM.render(
<HashRouter>
      <Provider store={store}>
          <App/>
      </Provider>
</HashRouter>, document.getElementById('root'))


