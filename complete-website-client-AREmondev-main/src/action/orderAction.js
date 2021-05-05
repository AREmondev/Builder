import axios from 'axios'
import {
  ORDER_REQUEST_REQUEST,
  ORDER_REQUEST_SUCCESS,
  ORDER_REQUEST_FAIL,
  USER_ORDER_REQUEST_SUCCESS,
  USER_ORDER_REQUEST_FAIL,
  USER_ORDER_REQUEST_REQUEST,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
} from '../constants/orderConstants'

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_REQUEST_REQUEST })
    const {
      userLogIn: { userInfo },
    } = getState()
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.post(
      'https://builder98.herokuapp.com/order',
      order,
      config,
    )
    dispatch({ type: ORDER_REQUEST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ORDER_REQUEST_FAIL, payload: error })
  }
}
export const getUserOrder = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_ORDER_REQUEST_REQUEST })
    const {
      userLogIn: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(
      'https://builder98.herokuapp.com/order/ownorder',
      config,
    )
    dispatch({ type: USER_ORDER_REQUEST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: USER_ORDER_REQUEST_FAIL, payload: error })
  }
}
export const getAllOrder = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ORDER_REQUEST })
    const {
      userLogIn: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(
      'https://builder98.herokuapp.com/order',
      config,
    )
    dispatch({ type: GET_ORDER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_ORDER_FAIL, payload: error })
  }
}
export const updateOneOrder = (id, status) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_ORDER_REQUEST })
    const {
      userLogIn: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(
      `https://builder98.herokuapp.com/order/${id}`,
      { status },
      config,
    )
    dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: UPDATE_ORDER_FAIL, payload: error })
  }
}
