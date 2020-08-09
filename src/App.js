import React, {useEffect} from 'react';
import './style/common.css';
import Auth from "./pages/Auth";
import { checkOnAuth } from "./store/actions";
import {connect} from "react-redux";


function App({ token, checkOnAuth }) {
    useEffect(()=>{
        checkOnAuth();
    });

    return (
      <div className="authBg">
          <Auth />
      </div>
    );
}


let mapStateToProps = state => ({token: state.token});
let mapDispatchToProps = { checkOnAuth };
export default connect( mapStateToProps, mapDispatchToProps )(App);