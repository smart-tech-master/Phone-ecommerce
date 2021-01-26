//@flow
import {
  GET_VERSION_SPECIALFICATION_STARTED,
  GET_VERSION_SPECIALFICATION_SUCESS,
  GET_VERSION_SPECIALFICATION_FAILED
} from '../../common/action'

type versionDetailState = {
  type: string,
  payload: Object
}

type defaultState = Object

export default function reducer(
  state: defaultState = {
    versionDetailState: {}
  },
  action: versionDetailState
) {
  switch (action.type) {
    case GET_VERSION_SPECIALFICATION_STARTED: {
      return {
        ...state,
        versionDetailState: 'ongoing'
      }
    }
    case GET_VERSION_SPECIALFICATION_SUCESS: {

      return {
        ...state,
        changingStatus: 'success',
        versionDetailState: action.payload
      }
    }
    case GET_VERSION_SPECIALFICATION_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        versionDetailState: action.payload
      }
    }
    default: {
      return state
    }
  }
}