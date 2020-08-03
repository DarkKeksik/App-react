import axios from "axios";
import {
    SET_ACTIVITY_FORM_LOGIN,
    SET_ACTIVITY_FORM_SIGNUP,
    SET_AUTH, SET_USERS
} from "./types";


// Устанавливаем активность (видимость) у формы авторизации
export const setActivityFormLogIn = ( value ) => {
    dispatch({
        type: SET_ACTIVITY_FORM_LOGIN,
        payload: value
    });
}


// Устанавливаем активность (видимость) у формы регистрации
export const setActivityFormSignUp = ( value ) => {
    dispatch({
        type: SET_ACTIVITY_FORM_SIGNUP,
        payload: value
    });
}


// Получение списка пользователей
export const getUsers = () => async dispatch => {
    const response = await axios.get("");

    dispatch({
        type: SET_USERS,
        payload: response.data
    });
};


// Получение токена авторизации
export const setAuth = ( data ) => async dispatch => {
    const response = await axios.get("");

    dispatch({
        type: SET_AUTH,
        payload: response.data
    });
};
