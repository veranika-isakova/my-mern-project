/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import shop from './modules/Shop/ShopReducer';
import intl from './modules/Intl/IntlReducer';


// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  shop,
  intl,
});
