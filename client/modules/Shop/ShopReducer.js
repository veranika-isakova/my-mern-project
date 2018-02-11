// Import Actions
import { ADD_PRODUCTS  } from './ShopActions';

// Initial State
const initialState = {
  data: [],
  initialLoadComplete: false,
};

const ShopReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCTS :
        return Object.assign({}, state, {
          data: action.products,
          initialLoadComplete: true,
        })
      default:
        return state;
  }
};

export default ShopReducer;
