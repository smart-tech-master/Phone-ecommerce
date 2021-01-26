//@flow
import {
  GET_VS_MULTI_PRODUCTS_STARTED,
  GET_VS_MULTI_PRODUCTS_SUCCESS,
  GET_VS_MULTI_PRODUCTS_FAILED
} from '../../common/action';
import {
  REMOVE_ITEM,
} from "common/constants"
type mulitvsproductState = {
  type: string,
  payload: Array < Object >
};

type defaultState = Object;

const initialState = {
  multivsProducts: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VS_MULTI_PRODUCTS_STARTED: {
      return {
        ...state,
        changingStatus: 'ongoing'
      };
    }
    case GET_VS_MULTI_PRODUCTS_SUCCESS: {
      return {
        ...state,
        changingStatus: 'success',
        multivsProducts: action.payload
      };
    }
    case GET_VS_MULTI_PRODUCTS_FAILED: {
      return {
        ...state,
        changingStatus: 'failed',
        multivsProducts: action.payload
      };
    }
    case REMOVE_ITEM: {
      console.log("blaxxxxxxx")
      console.log(state.multivsProducts)
      return {
        ...state,
        multivsProducts: state.multivsProducts.filter((obj, index) => {

          return action.payload.payload !== obj.result.product_id
        })
      }
    }
    default: {
      return state;
    }
  }
}