//@flow
import {
  ADVANCE_SEARCH_DEVICE_STARTED,
  ADVANCE_SEARCH_DEVICE_SUCCESS,
  ADVANCE_SEARCH_DEVICE_FAILED
} from '../../common/action';

type smartPhoneState = {
  type: string,
  payload: Object
};

type defaultState = Object;

export default function reducer(
  state: defaultState = { advanceSearchDevice: {} },
  action: smartPhoneState
) {
  switch (action.type) {
    case ADVANCE_SEARCH_DEVICE_STARTED: {
      return { ...state, changingStatus: 'ongoing' };
    }
    case ADVANCE_SEARCH_DEVICE_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        advanceSearchDevice: action.payload
      };
    }
    case ADVANCE_SEARCH_DEVICE_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        advanceSearchDevice: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
