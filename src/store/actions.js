import  * as types from "./types";
import axios from "axios";


// Устанавливаем активность (видимость) у формы авторизации
export const setActivityFormLogIn = ( payload ) => async dispatch => {
    dispatch({
        type: types.SET_ACTIVITY_FORM_LOGIN,
        payload
    });
};


// Устанавливаем активность (видимость) у формы регистрации
export const setActivityFormSignUp = ( payload ) => async dispatch => {
    dispatch({
        type: types.SET_ACTIVITY_FORM_SIGNUP,
        payload
    });
};


// Получение списка пользователей
export const getUsers = ( data ) => async dispatch => {
    const response = await axios.get("");

    dispatch({
        type: types.SET_USERS,
        payload: response.data
    });
};


// Получение токена авторизации
export const setAuth = ( data ) => async dispatch => {
    const options = {
        url: "http://emphasoft-test-assignment.herokuapp.com/api-token-auth/",
        method: "POST",
        headers: { 'content-type': 'application/json' },
        data: data
    };

    await axios( options ).then(( res ) => {
        dispatch({
            type: types.SET_AUTH,
            payload: res.data.token
        });
    }).catch((data) => {
        console.log(data);
    });
};