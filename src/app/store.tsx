import { combineReducers, configureStore } from '@reduxjs/toolkit';
import playingReducer from '../features/playing/playingSlice';
import languageReducer from '../features/language/languageSlice';
import { thunk } from 'redux-thunk';

const allReducers = combineReducers({
  playing: playingReducer,
  language: languageReducer
});

export const store = configureStore({
  reducer: allReducers,
  middleware: [thunk]
});
