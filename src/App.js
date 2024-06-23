import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Welcome to My React Page</h1>
      </header>
      <main className="App-main">
        <p>This is a simple React one-page application with some basic styling.</p>
        <button className="App-button">Click Me</button>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 My React App</p>
      </footer>
    </div>
  );
}

export default App;
