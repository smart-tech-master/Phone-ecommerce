//@flow
import {
  GET_CATEGORIES_FILTER_STARTED,
  GET_CATEGORIES_FILTER_SUCCESS,
  GET_CATEGORIES_FILTER_FAILED
} from '../../common/action';

type categoryFilterState = {
  type: string,
  payload: Object
};

type defaultState = Object;

export default function reducer(
  state: defaultState = { categoriesfilter: {} },
  action: categoryFilterState
) {
  switch (action.type) {
    case GET_CATEGORIES_FILTER_STARTED: {
      return { ...state, changingStatus: 'ongoing' };
    }
    case GET_CATEGORIES_FILTER_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        categoriesfilter: action.payload
      };
    }
    case GET_CATEGORIES_FILTER_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        categoriesfilter: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
