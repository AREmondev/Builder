import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
} from '../constants/userConstants.js'

export const userLogInReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}

    default:
      return state
  }
}
export const userRegisterReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }

    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }

    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
export const getAllUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_ALL_USER_REQUEST:
      return { ...state, loading: true }

    case GET_ALL_USER_SUCCESS:
      return { loading: false, users: action.payload }

    case GET_ALL_USER_FAIL:
      return { loading: false, errors: action.payload }

    default:
      return state
  }
}
export const updateUserReducer = (state = { users: '' }, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return { ...state, loading: true }

    case UPDATE_USER_SUCCESS:
      return { loading: false, users: action.payload }

    case UPDATE_USER_FAIL:
      return { loading: false, errors: action.payload }

    default:
      return state
  }
}
