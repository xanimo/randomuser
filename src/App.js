import React, { Component } from 'react';
import Header from './components/Header/Header';
import { UserList } from './components/UserList/UserList';
// import Filter from './components/Filter/Filter';
import './App.css';

class App extends Component {
  render() {

    return (
      <div>
        <h1>Lonely Hearts</h1>

        <UserList />
      </div>
    )
  }
}

export default App;
