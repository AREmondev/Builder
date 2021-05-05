import axios from 'axios'
import {
  SERVICES_LIST_REQUEST,
  SERVICES_LIST_SUCCESS,
  SERVICES_LIST_FAIL,
  SINGLE_SERVICES_LIST_REQUEST,
  SINGLE_SERVICES_LIST_SUCCESS,
  SINGLE_SERVICES_LIST_FAIL,
  DLT_SERVICES_REQUEST,
  DLT_SERVICES_SUCCESS,
  DLT_SERVICES_FAIL,
  ADD_SERVICES_SUCCESS,
  ADD_SERVICES_REQUEST,
  ADD_SERVICES_FAIL,
} from '../constants/servicesConstant'

export const ServicesList = () => async (dispatch) => {
  try {
    dispatch({ type: SERVICES_LIST_REQUEST })
    const { data } = await axios.get('https://builder98.herokuapp.com/services')
    dispatch({ type: SERVICES_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: SERVICES_LIST_FAIL, payload: error })
  }
}
export const SingleServicesList = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_SERVICES_LIST_REQUEST })
    const { data } = await axios.get(
      `https://builder98.herokuapp.com/services/${id}`,
    )
    dispatch({ type: SINGLE_SERVICES_LIST_SUCCESS, payload: data })
    localStorage.setItem('order', JSON.stringify(data))
  } catch (error) {
    dispatch({ type: SINGLE_SERVICES_LIST_FAIL, payload: error })
  }
}
export const dltServicesList = (id) => async (dispatch) => {
  try {
    dispatch({ type: DLT_SERVICES_REQUEST })
    const { data } = await axios.delete(
      `https://builder98.herokuapp.com/services/${id}`,
    )
    dispatch({ type: DLT_SERVICES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: DLT_SERVICES_FAIL, payload: error })
  }
}
export const AddServicesList = (service) => async (dispatch, getState) => {
  const {
    userLogIn: { userInfo },
  } = getState()
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  }

  try {
    dispatch({ type: ADD_SERVICES_REQUEST })
    const { data } = await axios.post(
      `https://builder98.herokuapp.com/services/addService`,
      service,
      config,
    )
    dispatch({ type: ADD_SERVICES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ADD_SERVICES_FAIL, payload: error })
  }
}
