import React from 'react';
import './style/common.css';
import { UsersList, LogIn, SignUp } from "./components";
import Auth from "./pages/Auth";


function App() {
  return (
      <div className="authBg">
          <Auth />
      </div>
  );
}


export default App;