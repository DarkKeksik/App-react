import React from "react";
import { connect } from "react-redux";
import { Form } from "../components";
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


    /*
    *  Условный рендеринг в зависимости от выбранной формы
    *  formCurrent - для компонента c выбранной формой и props
    *  formWrapClass - класс для того чтобы форма анимировалась
    *  formBeforeAfterClass - класс для анимации блоков на фоне
    */
    let formWrapClass,
        formBeforeAfterClass;

    if ( forms.formLogin.visibleOnAuthPage === true ) {
        formWrapClass = "authPage__formWrap_left";
        formBeforeAfterClass = "authPage__box_left";
    } else if ( forms.formSignUp.visibleOnAuthPage === true ) {
        formWrapClass = "authPage__formWrap_right";
        formBeforeAfterClass = "authPage__box_right";
    }


    return (
        <div className="authPage">
            <div className={`authPage__box ${ formBeforeAfterClass }`}>
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

                <div className = {`authPage__formWrap ${ formWrapClass }`}>
                    <Form
                        formCurrent={forms.formSignUp}
                        className={forms.formSignUp.visibleOnAuthPage === true ? "" : "d-none"}
                        actionName={"createNewUser"}
                    />
                    <Form
                        className={forms.formLogin.visibleOnAuthPage === true ? "" : "d-none"}
                        formCurrent={forms.formLogin}
                        actionName={"setAuth"}
                    />
                </div>
            </div>
        </div>
    )

};


const mapStateToProps = (state) => ({ forms: state.forms });
const mapDispatchToProps = { setActivityFormLogIn, setActivityFormSignUp };
export default connect(mapStateToProps, mapDispatchToProps)(Auth);