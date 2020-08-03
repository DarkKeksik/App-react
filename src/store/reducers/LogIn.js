import { SET_ACTIVITY_FORM_LOGIN } from "../types";
const initState = true;


export default (state = initState, action) => {
    switch (action.type) {
        case SET_ACTIVITY_FORM_LOGIN:
            return action.payload
        default:
            return state;
    }
}