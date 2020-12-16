import React, { Component } from 'react'
import Footer from './Components/Footer'
import Bio from './Components/Bio'
import Header from './Components/Header'

import './App.css';
import './Components/Header.css';

import bio1 from './Components/Assets/bio1.jpg'


class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <br></br>
        <br></br>

        <Bio />
        

        <img src={bio1} alt="Bio ermello" height={300} width={100}></img>

        <br></br>

        <Footer />
      </div>
    )
  }
}

export default App