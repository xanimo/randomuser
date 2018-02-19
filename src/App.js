import React, { Component } from 'react';
import Header from './components/Header/Header';
import { UserList } from './components/UserList/UserList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Random User API</h1>
        <Header tagline="This is my Header" />
        <UserList />
      </div>
    )
  }
}

export default App;
