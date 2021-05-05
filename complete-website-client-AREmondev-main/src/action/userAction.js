import axios from 'axios'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
} from '../constants/userConstants.js'

export const logIn = (email, password, redirectAuth, from) => async (
  dispatch,
) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const config = { headers: { 'content-type': 'application/json' } }
    const { data } = await axios.post(
      'https://builder98.herokuapp.com/user/login',
      { email, password },
      config,
    )
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    localStorage.setItem('userInfo', JSON.stringify(data))
    redirectAuth(from)
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error })
  }
}
export const logOut = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT })
    localStorage.removeItem('userInfo')
  } catch (error) {}
}

export const register = (name, email, password, redirectAuth, from) => async (
  dispatch,
) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST })
    const config = { headers: { 'content-type': 'application/json' } }
    const { data } = await axios.post(
      'https://builder98.herokuapp.com/user/signup',
      { name, email, password },
      config,
    )
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

    localStorage.setItem('userInfo', JSON.stringify(data))
    redirectAuth(from)
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error })
  }
}

export const getUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ALL_USER_REQUEST })
    const {
      userLogIn: { userInfo },
    } = getState()
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(
      'https://builder98.herokuapp.com/user/allusers',
      config,
    )
    dispatch({ type: GET_ALL_USER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_ALL_USER_FAIL, payload: error })
  }
}

export const UpdateOneUser = (id, isAdmin) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST })
    const {
      userLogIn: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(
      `https://builder98.herokuapp.com/user/${id}`,
      { isAdmin },
      config,
    )
    dispatch({ type: UPDATE_USER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAIL, payload: error })
  }
}
