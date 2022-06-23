import {FETCH_ALL, CREATE, DELETE, UPDATE, SET_ID} from '../constants/actionTypes';

    export default (state={ posts: [], id: null }, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return { ...state, posts: action.payload };
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload] };
        case DELETE:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        case UPDATE:
            return { ...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post) };
        case SET_ID:
            return { ...state, id: action.payload };
        default:
            return state;
    }
}