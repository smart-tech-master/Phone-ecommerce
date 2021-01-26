//@flow
import {
  GET_BIG_URL_STARTED,
  GET_BIG_URL_SUCCESS,
  GET_BIG_URL_FAILED
} from '../../common/action';

type bigUrlState = {
  type: string,
  payload: Object
};

type defaultState = Object;

export default function reducer(
  state: defaultState = { bigUrls: {} },
  action: bigUrlState
) {
  switch (action.type) {
    case GET_BIG_URL_STARTED: {
      return { ...state, changingStatus: 'ongoing' };
    }
    case GET_BIG_URL_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        bigUrls: action.payload
      };
    }
    case GET_BIG_URL_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        bigUrls: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
