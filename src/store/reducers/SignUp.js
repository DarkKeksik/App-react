import { SET_ACTIVITY_FORM_SIGNUP } from "../types";
const initState = false;


export default (state = initState, action) => {
    switch (action.type) {
        case SET_ACTIVITY_FORM_SIGNUP:
            return action.payload
        default:
            return state;
    }
}