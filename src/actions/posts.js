import axios from 'axios'
import {API_URL} from './constants'


export function getPosts() {
  return function (dispatch) {
    return axios.get(`${API_URL}posts/`)
      .then(result => {
        dispatch({type:'GET_POST_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data
      })

  }
};

export function getPostsById(id) {
  return function (dispatch) {
    return axios.get(`${API_URL}posts/${id}/`)
      .then(result => {
        dispatch({type:'GET_SINGLE_POST_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        dispatch({type:'GET_SINGLE_POST_REJECTED', payload: null});
        throw new Error('dat fetch failed')
      })

  }
};

export function getPostsByCategory(category) {
  return function (dispatch) {
    return axios.get(`${API_URL}${category}/posts/`)
      .then(result => {
        dispatch({type:'GET_POST_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data
      })

  }
};


export function createPost(data) {
  return function (dispatch) {

    return axios.post(`${API_URL}posts/`, data)
      .then(result => {
        dispatch({type:'CREATE_POST_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data 
      })

  }
};


export function votePost(postId,vote) {
  const data = {
    option: vote
  }
  return function (dispatch) {
    return axios.post(`${API_URL}posts/${postId}/`,data)
      .then(result => {
        dispatch({type:'VOTE_POST_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
      })

  }
};

export function editPost(postId,data) {

  return function (dispatch) {
    return axios.put(`${API_URL}posts/${postId}/`,data)
      .then(result => {
        dispatch({type:'EDIT_POST_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data
      })

  }
};

export function deletePost(postId) {
  return function (dispatch) {
    return axios.delete(`${API_URL}posts/${postId}/`)
      .then(result => {
        dispatch({type:'DELETE_POST_RESOLVED', payload: postId});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data
      })

  }
};
