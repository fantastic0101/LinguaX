import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './redux/navigationSlice';

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});

export default store;