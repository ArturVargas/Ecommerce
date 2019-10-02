import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar';

// Pages
import Home from './Pages/Home';


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
