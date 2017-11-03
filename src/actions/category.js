import axios from 'axios'
import {API_URL} from './constants'

 
export function getCategories(email, pass) {
  return function (dispatch) {
    return axios.get(`${API_URL}categories/`)
      .then(result => {
        dispatch({type:'GET_CATEGORY_RESOLVED', payload: result.data.categories});
        return result.data.categories
      })
      .catch(e => {
        return e.response.data
      })

  }
};