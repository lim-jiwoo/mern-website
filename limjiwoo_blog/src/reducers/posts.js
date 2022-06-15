import {FETCH_ALL, CREATE, DELETE, UPDATE} from '../constants/actionTypes';

export default (state=[], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...state, action.payload];
        case DELETE:
            return state.filter((post) => post._id !== action.payload);
        case UPDATE:
            return state.map((post) => post._id === action.payload._id ? action.payload : post);
        default:
            return state;
    }
}