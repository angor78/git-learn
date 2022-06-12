import React from 'react';
import './App.css';
import {User} from "./User/User";
import {Test} from "./Test/Test";
import {Post} from "./Post/Post";

function App() {
  return (
    <div className="App">
    <Test/>
    <Test/>
    <User/>
    <User/>
    <Post/>
    <Post/>
       <div>Login</div>
       <div>Login</div>
    </div>
  );
}

export default App;
