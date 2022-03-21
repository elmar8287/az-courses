import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import API from './components/API/API';
import Header from './components/Header/Header';

const App = () => (
  <div>
    <Header />
    <API />
  </div>
);

export default App;
