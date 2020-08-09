/*
* Не стал использовать глобальный store для полей формы
* тк на каждое поле приходилось бы делать отдельное состояние
* и событие изменения состояния, что усложнило бы код
*/

import React, {Fragment} from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { setAuth, createNewUser } from "../../store/actions";
import styles from "./forms.module.css";
import LoginSchema from "./validationSchema";


const getDataTime = () => {
    let today = new Date();
    let dateNow = {
        date: today.getDate() < 10 ? `0${ today.getDate() }` : today.getDate(),
        mounth: today.getMonth() < 10 ? `0${ today.getMonth() + 1 }` : today.getMonth() + 1,
        year: today.getFullYear() < 10 ? `0${ today.getFullYear() }` : today.getFullYear()
    }
    let timeNow = {
        hours: today.getHours() < 10 ? `0${ today.getHours() }` : today.getHours(),
        minutes: today.getMinutes() < 10 ? `0${ today.getMinutes() }` : today.getMinutes(),
        seconds: today.getSeconds() < 10 ? `0${ today.getSeconds() }` : today.getSeconds()
    }

    return `${dateNow.date}.${dateNow.mounth}.${dateNow.year}-${timeNow.hours}:${timeNow.minutes}:${timeNow.seconds}`;
}


const Forms = (props) => {
    // Парсим начальное состояние для Formik из store
    const getStateForFormik = (fields) => {
        let stateFields = {};
        fields.forEach((field) => {
            if ( field.name === "last_login" ) {
                stateFields[field.name] = getDataTime();
            }
            else if ( field.name === "is_active" || field.name === "is_superuser" ) {
                stateFields[field.name] = true;
            } else {
                stateFields[field.name] = "";
            }
        });
        return stateFields;
    };

    return (
        <Formik
            initialValues={ getStateForFormik( props.formCurrent.fields ) }
            validationSchema={ LoginSchema }
            onSubmit={(values) => props[props.actionName](values)}
        >

            {({values, errors, touched }) => (
                <Form className={`form-type-1 ${props.className}`}>
                    <div className={"form-type-1__wrap"}>

                        {/* Для input type checkbox отдельный шаблон */}
                        {props.formCurrent.fields.map((field) => {

                            if ( field.type === "checkbox" ) {
                                return (
                                    <Fragment key={field.name}>
                                        <div className={styles.checkboxWrap}>
                                            <>
                                                <label>
                                                    { field.placeholder }
                                                    <Field
                                                        key={field.name}
                                                        type={field.type}
                                                        name={field.name}
                                                        className={styles.checkboxWrap__input}
                                                    />
                                                </label>
                                            </>
                                        </div>
                                        {errors[field.name] && touched[field.name] ? (
                                            <p className={styles.inputError__text}>{errors[field.name]}</p>
                                        ) : null}
                                    </Fragment>
                                )
                            }

                            return (
                                <div
                                    className={`
                                        form-type-1__item
                                        ${ field.name === "last_login" ? "d-none" : null}
                                    `}
                                     key={field.name}>
                                    <Field
                                        key={field.name}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        name={field.name}
                                        className={errors[field.name] && touched[field.name] ? styles.inputError : null}
                                    />
                                    {errors[field.name] && touched[field.name] ? (
                                        <p className={styles.inputError__text}>{errors[field.name]}</p>
                                    ) : null}
                                </div>
                            )

                        }) }
                    </div>
                    <input
                        type="submit"
                        value={props.formCurrent.submit.placeholder}
                        className="button-type-2"
                    />
                </Form>
            )}
        </Formik>
    )
};


const mapStateToProps = ( state ) => ({ forms: state.forms, auth: state.auth });
const mapDispatchToProps = { setAuth, createNewUser };
export default connect(mapStateToProps, mapDispatchToProps)( Forms );
