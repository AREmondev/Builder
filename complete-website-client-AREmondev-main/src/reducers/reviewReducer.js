import {
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_FAIL,
  GET_REVIEW_REQUEST,
  GET_REVIEW_SUCCESS,
  GET_REVIEW_FAIL,
} from '../constants/reviewConstant.js'

export const reviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_REVIEW_REQUEST:
      return { loading: true }

    case CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true, review: action.payload }

    case CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
export const getReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_REVIEW_REQUEST:
      return { loading: true }

    case GET_REVIEW_SUCCESS:
      return { loading: false, success: true, review: action.payload }

    case GET_REVIEW_FAIL:
      return { loading: false, success: false, error: action.payload }

    default:
      return state
  }
}
