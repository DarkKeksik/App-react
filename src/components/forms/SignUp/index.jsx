import React from "react";
import { connect } from "react-redux";

const SignUp = ({forms}) => {
    return (
        <form className="form-type-1">
            <div className={"form-type-1__wrap"}>
                { forms.fields.map((field) => {
                    return (
                        <input
                            key={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            name={field.name}
                        />
                    )
                }) }
            </div>
            <input type="submit" value={"Регистрация"} className="button-type-2" />
        </form>
    );
};

const mapStateToProps = ( state ) => ({ forms: state.forms.formSignUp });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)( SignUp );