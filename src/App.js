import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import API from './components/API/API';
import Header from "./components/Header/Header";
import Hiro from "./components/Hiro/Hiro";
import Intro from "./components/Intro/Intro";
import Program from "./components/Program/Program";
import Features from "./components/Features/Features";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"

function App () {

    return (<div>
    <Header />
    <Hiro />
    <Intro />
    <Program />
    <Features />
    <Contact />
    <Footer />
  </div>)

}

export default App;
