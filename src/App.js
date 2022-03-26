import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import API from './components/API/API';
import Header from './components/Header/Header';
import Hiro from './components/Hiro/Hiro';
import Intro from './components/Intro/Intro';
import Features from './components/Features/Features';
import Whour from './components/WhoUR/WhoUR';

const App = () => (
  <div>
    <Header />
    <Hiro />
    <Intro />
    <Features />
    <Whour />
    <API />
  </div>
);

export default App;
