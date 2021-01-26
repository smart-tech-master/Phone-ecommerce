//@flow
import {
  GET_POPULAR_PRODUCTS_STARTED,
  GET_POPULAR_PRODUCTS_SUCCESS,
  GET_POPULAR_PRODUCTS_FAILED
} from '../../common/action';

type popularProductsState = {
  type: string,
  payload: Object
};

type defaultState = Object;

export default function reducer(
  state: defaultState = { popularProducts: {} },
  action: popularProductsState
) {
  switch (action.type) {
    case GET_POPULAR_PRODUCTS_STARTED: {
      return { ...state, changingStatus: 'ongoing' };
    }
    case GET_POPULAR_PRODUCTS_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        popularProducts: action.payload
      };
    }
    case GET_POPULAR_PRODUCTS_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        popularProducts: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
