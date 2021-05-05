import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  orderCreateReducer,
  getUserOrderReducer,
  getAllOrderReducer,
  updateOrderReducer,
} from '../reducers/orderReducer'
import {
  userLogInReducers,
  userRegisterReducers,
  getAllUserReducer,
  updateUserReducer,
} from '../reducers/userReducers.js'
import {
  servicesListReducer,
  SingleServicesListReducer,
  addServicesListReducer,
  dltServicesListReducer,
} from '../reducers/servicesReducer.js'
import {
  reviewCreateReducer,
  getReviewReducer,
} from '../reducers/reviewReducer.js'

const reducer = combineReducers({
  userLogIn: userLogInReducers,
  userRegister: userRegisterReducers,
  getAllUser: getAllUserReducer,
  allServices: servicesListReducer,
  updateUser: updateUserReducer,
  singleService: SingleServicesListReducer,
  dltService: dltServicesListReducer,
  addServices: addServicesListReducer,
  creatOrder: orderCreateReducer,
  userOrder: getUserOrderReducer,
  getOrder: getAllOrderReducer,
  updateOrder: updateOrderReducer,
  createReviews: reviewCreateReducer,
  getAllReview: getReviewReducer,
})
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
const orderFromLocalStorage = localStorage.getItem('order')
  ? JSON.parse(localStorage.getItem('order'))
  : null

const initialState = {
  userLogIn: { userInfo: userInfoFromLocalStorage },
  singleService: { service: orderFromLocalStorage },
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)
export default store
