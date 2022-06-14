import * as api from '../api';
import {FETCH_ALL, CREATE, DELETE} from '../constants/actionTypes';

export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (postData) => async(dispatch) => {
    try {
        const { data } = await api.createPost(postData);
        dispatch({ type: CREATE, payload: data });
    } catch(error) {
        console.log(error);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}