import React, {Fragment, useEffect} from "react";
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
    let formCurrent,
        formWrapClass,
        formBeforeAfterClass;

    if ( forms.formLogin.visibleOnAuthPage === true ) {
        formCurrent = <Fragment> <Form formCurrent={forms.formLogin} /> </Fragment>;
        formWrapClass = "authPage__formWrap_left";
        formBeforeAfterClass = "authPage__box_left";
    } else if ( forms.formSignUp.visibleOnAuthPage === true ) {
        formCurrent = <Form formCurrent={forms.formSignUp} />;
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

                <div
                    className = {`
                        authPage__formWrap
                        ${ formWrapClass }
                    `}
                >
                    { formCurrent }
                </div>
            </div>
        </div>
    )

};


const mapStateToProps = (state) => ({ forms: state.forms });
const mapDispatchToProps = { setActivityFormLogIn, setActivityFormSignUp };
export default connect(mapStateToProps, mapDispatchToProps)(Auth);