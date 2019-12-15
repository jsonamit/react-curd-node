import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import UserList from './components/UserList';
function App() {

  return (
    <div className="App">
      <User></User>
      <UserList></UserList>
    </div>
    
  )
}

export default App;
