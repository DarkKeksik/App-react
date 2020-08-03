import React from "react";
import {LogIn, SignUp} from "../components";

const Auth = () => {
    return (
        <div className="authPage">
            <div className="authPage__box">
                <div className="authPage__item">
                    <h3 className="authPage__title">Есть профиль</h3>
                </div>
                <div className="authPage__item">
                    <h3 className="authPage__title">Хочу профиль</h3>
                </div>
                <div className="authPage__formWrap">
                    <LogIn />
                    <SignUp />
                </div>
            </div>
        </div>
    )

}

export default Auth;