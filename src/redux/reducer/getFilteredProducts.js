import {
  GET_CB_FILTER_PRODUCTS_STARTED,
  GET_CB_FILTER_PRODUCTS_SUCCESS,
  GET_CB_FILTER_PRODUCTS_FAILED,
  GET_CB_FILTER_PRODUCTS_RESET

} from '../../common/action'

const initFilterState = {
  cbfilterProducts: {}
}

export default function reducer(state = initFilterState, action) {

  switch (action.type) {
    case GET_CB_FILTER_PRODUCTS_STARTED: {
      return {
        ...state,
        changingStatus: 'ongoing'
      }
    }
    case GET_CB_FILTER_PRODUCTS_SUCCESS: {

      return {
        ...state,
        changingStatus: 'success',
        cbfilterProducts: action.payload
      }
    }
    case GET_CB_FILTER_PRODUCTS_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        cbfilterProducts: action.payload
      }
    }
    case GET_CB_FILTER_PRODUCTS_RESET: {
      return {
        ...state,
        changingStatus: 'reset',
        cbfilterProducts: {
          cbfilterProducts: {}
        }
      }
    }
    default: {
      return state
    }
  }


}