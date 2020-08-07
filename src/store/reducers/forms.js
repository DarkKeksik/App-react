import { SET_ACTIVITY_FORM_LOGIN, SET_ACTIVITY_FORM_SIGNUP } from "../types";
const initState = {
    formLogin: {
        visibleOnAuthPage: true,
        fields: [
            { placeholder: "Логин", type: "text", name: "username" },
            { placeholder: "Пароль", type: "password", name: "password" }
        ]
    },
    formSignUp: {
        visibleOnAuthPage: false,
        fields: [
            {placeholder: "Логин", type: "text", name: "username"},
            {placeholder: "Имя", type: "text", name: "first_name"},
            {placeholder: "Фамилия", type: "text", name: "last_name"},
            {placeholder: "Псевдоним", type: "text", name: "last_login"},
            {placeholder: "Пароль", type: "password", name: "password"},
            {placeholder: "Активность", type: "radio", name: "active", options: [
                {title: "Активен", value: "true"},
                {title: "Неактивен", value: "false"}
            ]},
            {placeholder: "Суперпользователь", type: "radio", name: "is_superuser", options: [
                {title: "Да", value: "true"},
                {title: "Нет", value: "false"}
            ]}
        ],
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
