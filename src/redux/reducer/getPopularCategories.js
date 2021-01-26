//@flow
import {
  GET_POPULAR_CATEGORIES_STARTED,
  GET_POPULAR_CATEGORIES_SUCCESS,
  GET_POPULAR_CATEGORIES_FAILED
} from '../../common/action';

type popularCategoriesState = {
  type: string,
  payload: Object
};

type defaultState = Object;

export default function reducer(
  state: defaultState = { popularCategories: {} },
  action: popularCategoriesState
) {
  switch (action.type) {
    case GET_POPULAR_CATEGORIES_STARTED: {
      return { ...state, changingStatus: 'ongoing' };
    }
    case GET_POPULAR_CATEGORIES_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        popularCategories: action.payload
      };
    }
    case GET_POPULAR_CATEGORIES_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        popularCategories: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
