import { RECEIVE_BLEATS } from "../actions/bleat_actions";

const usersReducer = (state ={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BLEATS:
            return action.users;
        default:
            return state;
    }
};

export default usersReducer;