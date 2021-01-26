//@flow
import {
  GET_TRENDING_PRODUCTS_STARTED,
  GET_TRENDING_PRODUCTS_SUCCESS,
  GET_TRENDING_PRODUCTS_FAILED
} from '../../common/action';

type trendingProductsState = {
  type: string,
  payload: Object
};

type defaultState = Object;

export default function reducer(
  state: defaultState = { trendingProducts: {} },
  action: trendingProductsState
) {
  switch (action.type) {
    case GET_TRENDING_PRODUCTS_STARTED: {
      return { ...state, changingStatus: 'ongoing' };
    }
    case GET_TRENDING_PRODUCTS_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        trendingProducts: action.payload
      };
    }
    case GET_TRENDING_PRODUCTS_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        trendingProducts: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
