import { combineReducers} from 'redux';

import { userReducer }  from './user/user.reducer.js';
import { cartReducer } from './cart/cart.reducer.js';
import { directoryReducer } from './directory/directory.reducer.js';
import { persistReducer } from 'redux-persist';

import  storage  from 'redux-persist/lib/storage';

const config = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

export default persistReducer(config, combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
}));
