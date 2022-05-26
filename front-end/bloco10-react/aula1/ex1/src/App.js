import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <p>
      { Task(teste)}
    </p>
  );
}

export default App;
