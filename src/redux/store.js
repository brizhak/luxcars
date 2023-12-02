import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import filterReducer from './filtersSlice';
// import favoritesReducer from './favoritesSlice';
import { carsReducer } from './carsSlice';

const persistConfig = {
  key: 'main',
  storage,
};

const mainReducer = combineReducers({
  cars: carsReducer,
  // filter: filterReducer,
  // favorites: favoritesReducer,
});

const persistedMainReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedMainReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
