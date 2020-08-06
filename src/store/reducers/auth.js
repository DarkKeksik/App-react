import { SET_AUTH } from "../types";
const initState = {
    token: ""
};

export default (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {token: action.payload}
        default:
            return state
    }
}