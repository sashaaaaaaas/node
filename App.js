import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Sitebar from "./Components/sitebar";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Sitebar/>
      <Footer/>
    </div>
  );
}

export default App;
