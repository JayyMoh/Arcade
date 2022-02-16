import React from 'react'
import Games from './Games/Games';
import NavBar from './components/NavBar';
import '../src/App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Games />
    </div>
  );
}

export default App;
