import React from "react";
import { connect } from "react-redux";

const LogIn = ({forms}) => {

    let formSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={formSubmit} className="form-type-1">
            <div className={"form-type-1__wrap"}>
                { forms.fields.map((field) => {
                    return (
                        <input
                            key={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            name={field.name}
                            value={field.value}
                        />
                    )
                }) }
            </div>
            <input type="submit" value={"Войти"} className="button-type-2" />
        </form>
    );
};

const mapStateToProps = ( state ) => ({ forms: state.forms.formLogin });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)( LogIn );