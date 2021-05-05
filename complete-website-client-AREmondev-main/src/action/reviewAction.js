import axios from 'axios'
import {
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_FAIL,
  GET_REVIEW_REQUEST,
  GET_REVIEW_SUCCESS,
  GET_REVIEW_FAIL,
} from '../constants/reviewConstant.js'

export const CreateReview = (description, name, email) => async (
  dispatch,
  getState,
) => {
  try {
    dispatch({ type: CREATE_REVIEW_REQUEST })
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
      'https://builder98.herokuapp.com/review/addreview',
      { description, name, email },
      config,
    )

    dispatch({ type: CREATE_REVIEW_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: CREATE_REVIEW_FAIL, payload: error })
  }
}
export const AllReview = () => async (dispatch) => {
  try {
    dispatch({ type: GET_REVIEW_REQUEST })

    const { data } = await axios.get('https://builder98.herokuapp.com/review')

    dispatch({ type: GET_REVIEW_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_REVIEW_FAIL, payload: error })
  }
}
