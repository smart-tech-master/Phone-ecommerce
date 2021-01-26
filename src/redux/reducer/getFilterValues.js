//@flow
import {
  GET_FILTERED_VALUES_STARTED,
  GET_FILTERED_VALUES_SUCCESS,
  GET_FILTERED_VALUES_FAILED
} from '../../common/action';

type filteredValueState = {
  type: string,
  payload: Object
};

type defaultState = Object;

export default function reducer(
  state: defaultState = { filteredValues: {} },
  action: filteredValueState
) {
  switch (action.type) {
    case GET_FILTERED_VALUES_STARTED: {
      return { ...state, changingStatus: 'ongoing' };
    }
    case GET_FILTERED_VALUES_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        filteredValues: action.payload
      };
    }
    case GET_FILTERED_VALUES_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        filteredValues: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
