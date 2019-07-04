import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a react App</h1>
        <Person name='Elias' age='30'> hobbie: Futbol</Person>
        <Person name='Vale' age='27' />
        <Person name='Luis' age='34' />
      </div>
    );
  }
}

export default App;
