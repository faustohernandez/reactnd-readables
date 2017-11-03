import axios from 'axios'
import {API_URL} from './constants'


export function getCommentsOfPost(postId) {
  return function (dispatch) {
    return axios.get(`${API_URL}posts/${postId}/comments/`)
      .then(result => {
        dispatch({type:'GET_POST_COMMENTS_RESOLVED', payload: {parentId: postId, data: result.data}});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data 
      })

  }
};

export function getCommentById(id) {
  return function (dispatch) {
    return axios.get(`${API_URL}comments/${id}/`)
      .then(result => {
        dispatch({type:'GET_SINGLE_COMMENT_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data
      })

  }
};

export function getPostsByCategory(category) {
  return function (dispatch) {
    return axios.get(`${API_URL}${category}/posts/`)
      .then(result => {
        dispatch({type:'GET_POST_BY_CATEGORY_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data 
      })

  }
};


export function createComment(data) {
  return function (dispatch) {

    return axios.post(`${API_URL}comments/`, data)
      .then(result => {
        dispatch({type:'CREATE_COMMENT_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data
      })

  }
};


export function voteComment(commentId,vote) {
  const data = {
    option: vote
  }
  return function (dispatch) {
    return axios.post(`${API_URL}comments/${commentId}/`,data)
      .then(result => {
        dispatch({type:'VOTE_COMMENT_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data
      })

  }
};

export function editComment(commentId,data) {

  return function (dispatch) {
    return axios.put(`${API_URL}comments/${commentId}/`,data)
      .then(result => {
        dispatch({type:'EDIT_COMMENT_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data
      })

  }
};

export function deleteComment(commentId) {
  return function (dispatch) {
    return axios.delete(`${API_URL}comments/${commentId}/`)
      .then(result => {
        dispatch({type:'DELETE_COMMENT_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data 
      })

  }
};
