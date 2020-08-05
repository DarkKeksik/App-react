import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { setAuth } from "../../../store/actions";

const LogIn = ({forms, setAuth}) => (
    <Formik
        initialValues={{}}
        onSubmit={ values => {
            setAuth( values );
        }}
    >
        <Form className="form-type-1">
            <div className={"form-type-1__wrap"}>
                { forms.fields.map((field) => {
                    return (
                        <Field
                            key={field.name}
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
);


const mapStateToProps = ( state ) => ({ forms: state.forms.formLogin });
const mapDispatchToProps = { setAuth };

export default connect(mapStateToProps, mapDispatchToProps)( LogIn );