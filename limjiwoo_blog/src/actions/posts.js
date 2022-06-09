import * as api from '../api';

export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (postData) => async(dispatch) => {
    try {
        const { data } = await api.createPost(postData);
        console.log(data);
        dispatch({ type:'CREATE', payload: data });
    } catch(error) {
        console.log(error);
    }
}