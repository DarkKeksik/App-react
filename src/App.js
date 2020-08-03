import React from 'react';
import './style/common.css';
import { UsersList, LogIn, SignUp } from "./components";


function App() {
  return (
      <div>
        <UsersList />
        <LogIn />
        <SignUp />
      </div>
  );
}


export default App;