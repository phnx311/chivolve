import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import rootReducer from './root.reducer';
import  persistStore  from 'redux-persist/lib/persistStore';

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

const persistor = persistStore(store)

export { store, persistor };