//@flow
import {
  GET_SMARTPHONE_DETAILS_STARTED,
  GET_SMARTPHONE_DETAILS_SUCCESS,
  GET_SMARTPHONE_DETAILS_FAILED
} from '../../common/action';

type smartPhoneState = {
  type: string,
  payload: Object
};

type defaultState = Object;

export default function reducer(
  state: defaultState = { smartPhoneDetails: {} },
  action: smartPhoneState
) {
  switch (action.type) {
    case GET_SMARTPHONE_DETAILS_STARTED: {
      return { ...state, changingStatus: 'ongoing' };
    }
    case GET_SMARTPHONE_DETAILS_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        smartPhoneDetails: action.payload
      };
    }
    case GET_SMARTPHONE_DETAILS_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        smartPhoneDetails: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
