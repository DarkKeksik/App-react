import { SET_ACTIVITY_FORM_LOGIN, SET_ACTIVITY_FORM_SIGNUP } from "../types";
const initState = {
    formLogin: {
        visible: true,
        fields: [
            { placeholder: "Логин", type: "text", name: "username" },
            { placeholder: "Пароль", type: "password", name: "password" }
        ]
    },
    formSignUp: {
        visible: false,
        fields: [
            { placeholder: "Логин", type: "text", name: "username" },
            { placeholder: "Имя", type: "text", name: "first_name" },
            { placeholder: "Фамилия", type: "text", name: "last_name" },
            { placeholder: "Пароль", type: "password", name: "password" },
        ]
    }
};


export default (state = initState, action) => {
    switch (action.type) {
        case SET_ACTIVITY_FORM_LOGIN:
            return {
                ...state,
                ...state.formLogin.visible = action.payload
            };
        case SET_ACTIVITY_FORM_SIGNUP:
            return {
                ...state,
                ...state.formSignUp.visible = action.payload
            };
        default:
            return state;
    }
}