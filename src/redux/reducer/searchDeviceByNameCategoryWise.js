//@flow
import {
  GET_DEVICE_BY_NAME_CATEGORY_WISE_STARTED,
  GET_DEVICE_BY_NAME_CATEGORY_WISE_SUCCESS,
  GET_DEVICE_BY_NAME_CATEGORY_WISE_FAILED
} from '../../common/action';

type devicecategoryState = {
  type: string,
  payload: Object
};

type defaultState = Object;

export default function reducer(
  state: defaultState = { deviceByNameCategoryWise: {} },
  action: devicecategoryState
) {
  switch (action.type) {
    case GET_DEVICE_BY_NAME_CATEGORY_WISE_STARTED: {
      return { ...state, changingStatus: 'ongoing' };
    }
    case GET_DEVICE_BY_NAME_CATEGORY_WISE_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        deviceByNameCategoryWise: action.payload
      };
    }
    case GET_DEVICE_BY_NAME_CATEGORY_WISE_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        deviceByNameCategoryWise: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
