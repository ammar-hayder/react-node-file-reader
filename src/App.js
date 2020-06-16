
import React from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { initStore } from './store';

import { ToastContainer } from 'react-toastify';

const store = initStore();

const FileParserApp = () => {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <FileParserApp />
    </Provider>
  );
}

export default App;