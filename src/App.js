import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import API from './components/API/API';
import Header from './components/Header/Header';
import Hiro from './components/Hiro/Hiro';

const App = () => (
  <div>
    <Header />
    <Hiro />
    <API />
  </div>
);

export default App;
