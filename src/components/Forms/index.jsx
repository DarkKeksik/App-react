/*
* Не стал использовать глобальный store для полей формы
* тк на каждое поле приходилось бы делать отдельное состояние
* и событие изменения состояния, что усложнило бы код
*/

import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { setAuth } from "../../store/actions";


const Forms = (props) => {
    // Парсим начальное состояние для Formik из store
    const getStateForFormik = () => {
        let stateFields = {};
        props.formCurrent.fields.forEach((field) => stateFields[field.name] = "");
        return stateFields;
    };

    return (
        <Formik
            initialValues={ getStateForFormik() }
            onSubmit={values => props.setAuth(values) }
        >
            <Form className="form-type-1">
                <div className={"form-type-1__wrap"}>
                    {props.formCurrent.fields.map((field) => {
                        return (
                            <Field
                                key={`${field.name}`}
                                type={field.type}
                                placeholder={field.placeholder}
                                name={field.name}
                            />
                        )
                    }) }
                </div>
                <input type="submit" value={"Войти"} className="button-type-2" />
            </Form>
        </Formik>
    )
};


const mapStateToProps = ( state ) => ({ forms: state.forms });
const mapDispatchToProps = { setAuth };
export default connect(mapStateToProps, mapDispatchToProps)( Forms );
