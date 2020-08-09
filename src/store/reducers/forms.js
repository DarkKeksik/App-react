import { SET_ACTIVITY_FORM_LOGIN, SET_ACTIVITY_FORM_SIGNUP } from "../types";


const initState = {
    formLogin: {
        visibleOnAuthPage: true,
        fields: [
            { placeholder: "Логин*", type: "text", name: "username" },
            { placeholder: "Пароль*", type: "password", name: "password" }
        ],
        submit: {
            placeholder: "Войти",
            actionName: "setAuth"
        }
    },
    formSignUp: {
        visibleOnAuthPage: false,
        fields: [
            {placeholder: "Логин*", type: "text", name: "username"},
            {placeholder: "Пароль*", type: "password", name: "password"},
            {placeholder: "Имя", type: "text", name: "first_name"},
            {placeholder: "Фамилия", type: "text", name: "last_name"},
            {placeholder: "Дата последнего входа", type: "text", name: "last_login"},
            {placeholder: "Активность*", type: "checkbox", name: "is_active"},
            {placeholder: "Администратор", type: "checkbox", name: "is_superuser"}
        ],
        submit: {
            placeholder: "Создать",
            actionName: "createNewUser"
        }
    }
};


export default (state = initState, action) => {
    switch (action.type) {
        case SET_ACTIVITY_FORM_LOGIN:
            return {
                ...state,
                ...state.formLogin.visibleOnAuthPage = action.payload
            };
        case SET_ACTIVITY_FORM_SIGNUP:
            return {
                ...state,
                ...state.formSignUp.visibleOnAuthPage = action.payload
            };
        default:
            return state;
    }
}
