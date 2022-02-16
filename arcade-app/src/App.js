import React from 'react'
import NavBar from './components/navbar/NavBar';
import '../src/App.css'
import {Route, Routes } from 'react-router-dom'
import Jeopardy from './Pages/Jeopardy';
import Home from './Pages/Home';
import Hangman from './Pages/Hangman';
import BlackJack from './Pages/BlackJack'
import ConnectFour from './Pages/ConnectFour'
import Memory from './Pages/Memory'
import RPS from './Pages/RPS'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/jeopardy' element={ <Jeopardy /> } />
        <Route path='/hangman' element={ <Hangman /> } />
        <Route path='/connectfour' element={ <ConnectFour /> } />
        <Route path='/blackjack' element={ <BlackJack /> } />
        <Route path='/memory' element={ <Memory /> } />
        <Route path='/rps' element={ <RPS /> } />
      </Routes>
    </div>
  );
}

export default App;
