import {
  ADD_ITEM,
  REMOVE_ITEM,
  RESET_ITEM
} from "common/constants";
const initialState = {
  additems: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        additems: [...state.additems, action.payload.payload]
        // additems: action.payload.payload

      }
    }
    case REMOVE_ITEM: {

      return {
        ...state,
        //additems: [...state.additems.splice(action.payload.payload, 1)]
        additems: state.additems.filter((obj, index) => {
          return action.payload.payload !== obj.productId
        })

      }
    }
    case RESET_ITEM: {
      return {
        ...state,
        additems: []
      }
    }
    default: {
      return state;
    }
  }


}