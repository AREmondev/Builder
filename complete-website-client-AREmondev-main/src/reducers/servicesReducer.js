import {
  SERVICES_LIST_REQUEST,
  SERVICES_LIST_SUCCESS,
  SERVICES_LIST_FAIL,
  SINGLE_SERVICES_LIST_REQUEST,
  SINGLE_SERVICES_LIST_SUCCESS,
  SINGLE_SERVICES_LIST_FAIL,
  ADD_SERVICES_REQUEST,
  ADD_SERVICES_SUCCESS,
  ADD_SERVICES_FAIL,
  DLT_SERVICES_FAIL,
  DLT_SERVICES_SUCCESS,
  DLT_SERVICES_REQUEST,
} from '../constants/servicesConstant'

export const servicesListReducer = (state = { services: [] }, action) => {
  switch (action.type) {
    case SERVICES_LIST_REQUEST:
      return { loading: true, services: [] }

    case SERVICES_LIST_SUCCESS:
      return { loading: false, services: action.payload }

    case SERVICES_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
export const SingleServicesListReducer = (state = { service: {} }, action) => {
  switch (action.type) {
    case SINGLE_SERVICES_LIST_REQUEST:
      return { loading: true, services: [] }

    case SINGLE_SERVICES_LIST_SUCCESS:
      return { loading: false, service: action.payload }

    case SINGLE_SERVICES_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
export const addServicesListReducer = (state = { service: {} }, action) => {
  switch (action.type) {
    case ADD_SERVICES_REQUEST:
      return { loading: true, services: [] }

    case ADD_SERVICES_SUCCESS:
      return { loading: false, service: action.payload }

    case ADD_SERVICES_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
export const dltServicesListReducer = (state = { service: {} }, action) => {
  switch (action.type) {
    case DLT_SERVICES_REQUEST:
      return { loading: true, services: [] }

    case DLT_SERVICES_SUCCESS:
      return { loading: false, service: action.payload }

    case DLT_SERVICES_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
