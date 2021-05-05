import {
  ORDER_REQUEST_REQUEST,
  ORDER_REQUEST_SUCCESS,
  ORDER_REQUEST_FAIL,
  USER_ORDER_REQUEST_REQUEST,
  USER_ORDER_REQUEST_SUCCESS,
  USER_ORDER_REQUEST_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
} from '../constants/orderConstants'

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_REQUEST_REQUEST:
      return { loading: true }

    case ORDER_REQUEST_SUCCESS:
      return { loading: false, success: true, order: action.payload }

    case ORDER_REQUEST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
export const getUserOrderReducer = (state = { order: [] }, action) => {
  switch (action.type) {
    case USER_ORDER_REQUEST_REQUEST:
      return { loading: true }

    case USER_ORDER_REQUEST_SUCCESS:
      return { loading: false, success: true, order: action.payload }

    case USER_ORDER_REQUEST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
export const getAllOrderReducer = (state = { order: [] }, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return { loading: true }

    case GET_ORDER_SUCCESS:
      return { loading: false, success: true, order: action.payload }

    case GET_ORDER_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
export const updateOrderReducer = (state = { order: '' }, action) => {
  switch (action.type) {
    case UPDATE_ORDER_REQUEST:
      return { loading: true }

    case UPDATE_ORDER_SUCCESS:
      return { loading: false, success: true, order: action.payload }

    case UPDATE_ORDER_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
