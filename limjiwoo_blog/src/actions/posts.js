import * as api from '../api';
import {FETCH_ALL, CREATE, DELETE, UPDATE, SET_ID} from '../constants/actionTypes';

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

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const setCurrentId = (id) => {
    return { type: SET_ID, payload: id };
}