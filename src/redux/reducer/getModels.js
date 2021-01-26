//@flow
import {
  GET_MODELS_STARTED,
  GET_MODELS_SUCCESS,
  GET_MODELS_FAILED
} from '../../common/action';

type modelsState = {
  type: string,
  payload: Object
};

type defaultState = Object;

export default function reducer(
  state: defaultState = { models: {} },
  action: modelsState
) {
  switch (action.type) {
    case GET_MODELS_STARTED: {
      return { ...state, changingStatus: 'ongoing' };
    }
    case GET_MODELS_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        models: action.payload
      };
    }
    case GET_MODELS_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        models: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
