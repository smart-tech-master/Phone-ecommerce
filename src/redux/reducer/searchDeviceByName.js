//@flow
import {
  GET_DEVICE_BY_NAME_STARTED,
  GET_DEVICE_BY_NAME_SUCCESS,
  GET_DEVICE_BY_NAME_FAILED,
  GET_DEVICE_BY_NAME_RESET
} from '../../common/action'

type deviceState = {
  type: string,
  payload: {
    name: string
  }
}

type defaultState = Object

export default function reducer(
  state: defaultState = {
    deviceByName: {}
  },
  action: deviceState
) {
  switch (action.type) {
    case GET_DEVICE_BY_NAME_STARTED: {
      return {
        ...state,
        changingStatus: 'ongoing'
      }
    }
    case GET_DEVICE_BY_NAME_SUCCESS: {

      return {
        ...state,
        changingStatus: 'success',
        deviceByName: action.payload
      }
    }
    case GET_DEVICE_BY_NAME_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        deviceByName: action.payload
      }
    }
    case GET_DEVICE_BY_NAME_RESET: {
      return {
        ...state,
        changingStatus: 'reset',
        deviceByName: {
          deviceByName: {}
        }
      }
    }
    default: {
      return state
    }
  }
}