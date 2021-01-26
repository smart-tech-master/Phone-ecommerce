//@flow
import {
  GET_RELATED_PRODUCTS_STARTED,
  GET_RELATED_PRODUCTS_SUCCESS,
  GET_RELATED_PRODUCTS_FAILED
} from '../../common/action';

type relatedProductsState = {
  type: string,
  payload: Object
};

type defaultState = Object;

export default function reducer(
  state: defaultState = {
    relatedProducts: {}
  },
  action: relatedProductsState
) {
  switch (action.type) {
    case GET_RELATED_PRODUCTS_STARTED: {
      return {
        ...state,
        changingStatus: 'ongoing'
      };
    }
    case GET_RELATED_PRODUCTS_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        relatedProducts: action.payload
      };
    }
    case GET_RELATED_PRODUCTS_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        relatedProducts: action.payload
      };
    }
    default: {
      return state;
    }
  }
}