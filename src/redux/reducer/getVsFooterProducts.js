//@flow
import {
  GET_VS_FOOTER_PRODUCTS_STARTED,
  GET_VS_FOOTER_PRODUCTS_SUCCESS,
  GET_VS_FOOTER_PRODUCTS_FAILED
} from '../../common/action'

type vsFooterProductionState = {
  type: string,
  payload: Object
}

type defaultState = Object

export default function reducer(
  state: defaultState = {
    vsFooterProducts: {}
  },
  action: vsFooterProductionState
) {
  switch (action.type) {
    case GET_VS_FOOTER_PRODUCTS_STARTED: {
      return {
        ...state,
        vsFooterProducts: 'ongoing'
      }
    }
    case GET_VS_FOOTER_PRODUCTS_SUCCESS: {

      return {
        ...state,
        changingStatus: 'success',
        vsFooterProducts: action.payload
      }
    }
    case GET_VS_FOOTER_PRODUCTS_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        vsFooterProducts: action.payload
      }
    }
    default: {
      return state
    }
  }
}