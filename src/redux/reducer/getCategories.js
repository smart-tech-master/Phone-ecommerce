//@flow
import {
  GET_CATEGORIES_STARTED,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED
} from '../../common/action';

type categoryState = {
  type: string,
  payload: Object
};

type defaultState = Object;

export default function reducer(
  state: defaultState = { categories: {} },
  action: categoryState
) {
  switch (action.type) {
    case GET_CATEGORIES_STARTED: {
      return { ...state, changingStatus: 'ongoing' };
    }
    case GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        categories: action.payload
      };
    }
    case GET_CATEGORIES_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        categories: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
