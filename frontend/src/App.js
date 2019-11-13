import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import app from './redux/reducers'

const store = createStore(app,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>  );
}

export default App;
