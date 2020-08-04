import React from "react";
import { connect } from "react-redux";
import { LogIn, SignUp } from "../components";
import { setActivityFormLogIn, setActivityFormSignUp } from "../store/actions";


const Auth = ({forms, setActivityFormLogIn, setActivityFormSignUp}) => {

    // Устанавливаем видимость для выбранной формы
    let setActivityFormLogin = () => {
        setActivityFormLogIn(true);
        setActivityFormSignUp(false);
    };
    let setActivityFormSignup = () => {
        setActivityFormLogIn(false);
        setActivityFormSignUp(true);
    };


    return (
        <div className="authPage">
            <div className="authPage__box">
                <div className="authPage__item">
                    <h3 className="authPage__title">Есть профиль</h3>
                    <span
                        className="authPage__button"
                        onClick={ setActivityFormLogin }
                    >Войти</span>
                </div>

                <div className="authPage__item">
                    <h3 className="authPage__title">Хочу профиль</h3>
                    <span
                        className="authPage__button"
                        onClick={ setActivityFormSignup }
                    >Создать</span>
                </div>

                <div
                    className = {`authPage__formWrap
                        ${ forms.formLogin.visible === true ? "authPage__formWrap_left" : "authPage__formWrap_right" }`
                    }
                >
                    <LogIn />
                    <SignUp />
                </div>
            </div>
        </div>
    )

};


const mapStateToProps = (state) => ({ forms: state.forms });
const mapDispatchToProps = { setActivityFormLogIn, setActivityFormSignUp };
export default connect(mapStateToProps, mapDispatchToProps)(Auth);