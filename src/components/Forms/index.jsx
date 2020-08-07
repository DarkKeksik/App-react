/*
* Не стал использовать глобальный store для полей формы
* тк на каждое поле приходилось бы делать отдельное состояние
* и событие изменения состояния, что усложнило бы код
*/

import React, {Fragment} from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { setAuth } from "../../store/actions";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .min(1, 'Слишком короткий логин')
        .max(50, 'Логин не более 50 символов')
        .required('Логин обязателен'),
    password: Yup.string()
        .min(1, 'Слишком короткий пароль')
        .max(128, 'Слишком длинный пароль')
        .matches(
            /^(?=.*[A-Z])(?=.*\d).{8,}$/,
            "Используйте буквы верхнего регистра и цифры, например niceDayJonny1"
        )
        .required('Пароль обязателен'),
    first_name: Yup.string()
        .min(2, 'Слишком короткое имя')
        .max(50, 'У вас отличное имя, но мы не можем его обработать')
        .required('Пароль обязателен'),
    last_name: Yup.string()
        .min(2, 'Слишком короткое имя')
        .max(150, 'У вас отличная фамилия, но мы не можем ее обработать')
});

const Forms = (props) => {
    // Парсим начальное состояние для Formik из store
    const getStateForFormik = () => {
        let stateFields = {};
        props.formCurrent.fields.forEach((field) => stateFields[field.name] = "");
        return stateFields;
    };

    console.log("Проверка токена ", props.auth.token);

    return (
        <Formik
            initialValues={ getStateForFormik() }
            validationSchema={ LoginSchema }
            onSubmit={(values) => {
                props.setAuth(values); alert(values);}
            }
        >

            {({ errors, touched }) => (
                <Form className="form-type-1">
                    <div className={"form-type-1__wrap"}>

                        {/* Для input type radio отдельный шаблон */}
                        {props.formCurrent.fields.map((field) => {
                            if ( field.type === "radio" ) {
                                return (
                                    <div>
                                        <p> { field.placeholder } </p>
                                        { field.options.map((option)=>{
                                            return (
                                                <label>
                                                    <Field
                                                        key={field.name}
                                                        type={field.type}
                                                        name={field.name}
                                                        value={option.value}
                                                    />
                                                    { option.title }
                                                </label>
                                            )
                                        }) }
                                        {errors[field.name] && touched[field.name] ? (
                                            <div>{errors[field.name]}</div>
                                        ) : null}
                                    </div>
                                )
                            }

                            return (
                                <Fragment>
                                    <Field
                                        key={field.name}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        name={field.name}
                                        value={field.value}
                                    />
                                    {errors[field.name] && touched[field.name] ? (
                                        <div>{errors[field.name]}</div>
                                    ) : null}
                                </Fragment>
                            )
                        }) }

                    </div>
                    <input type="submit" value={"Войти"} className="button-type-2" />
                </Form>
            )}
        </Formik>
    )
};


const mapStateToProps = ( state ) => ({ forms: state.forms, auth: state.auth });
const mapDispatchToProps = { setAuth };
export default connect(mapStateToProps, mapDispatchToProps)( Forms );
