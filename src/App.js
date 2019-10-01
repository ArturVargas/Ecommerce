import React from 'react';
import './App.css';
// Components
import Navbar from './Components/Navbar';

// Pages
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
