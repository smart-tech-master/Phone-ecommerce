//@flow
import {
  GET_SHORT_URL_STARTED,
  GET_SHORT_URL_SUCCESS,
  GET_SHORT_URL_FAILED
} from '../../common/action';

type shortUrlsState = {
  type: string,
  payload: Object
};

type defaultState = Object;

export default function reducer(
  state: defaultState = { shortUrl: {} },
  action: shortUrlsState
) {
  switch (action.type) {
    case GET_SHORT_URL_STARTED: {
      return { ...state, changingStatus: 'ongoing' };
    }
    case GET_SHORT_URL_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        shortUrl: action.payload
      };
    }
    case GET_SHORT_URL_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        shortUrl: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
