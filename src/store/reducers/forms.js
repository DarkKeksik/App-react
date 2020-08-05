import { SET_ACTIVITY_FORM_LOGIN, SET_ACTIVITY_FORM_SIGNUP, SET_AUTH } from "../types";
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
            { placeholder: "Логин", type: "text", name: "username" },
            { placeholder: "Имя", type: "text", name: "first_name" },
            { placeholder: "Фамилия", type: "text", name: "last_name" },
            { placeholder: "Пароль", type: "password", name: "password" }
        ],
    },
    tokenAuth: ""
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
        case SET_AUTH:
            return {
                ...state,
                tokenAuth: action.payload
            };
        default:
            return state;
    }
}