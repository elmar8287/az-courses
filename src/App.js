import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import API from './components/API/API';
import Header from './components/Header/Header';
import Hiro from './components/Hiro/Hiro';
import Intro from './components/Intro/Intro';

const App = () => (
  <div>
    <Header />
    <Hiro />
    <Intro />
    <API />
  </div>
);

export default App;
