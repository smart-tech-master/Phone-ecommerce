//@flow
import {
  GET_BRANDS_STARTED,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAILED
} from '../../common/action';

type brandState = {
  type: string,
  payload: Object
};

type defaultState = Object;

export default function reducer(
  state: defaultState = { brands: {} },
  action: brandState
) {
  switch (action.type) {
    case GET_BRANDS_STARTED: {
      return { ...state, changingStatus: 'ongoing' };
    }
    case GET_BRANDS_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        brands: action.payload
      };
    }
    case GET_BRANDS_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        brands: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
