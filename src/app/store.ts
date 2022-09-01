import {
  configureStore,
  ThunkAction,
  Action,
  applyMiddleware,
} from '@reduxjs/toolkit';
import postsReducers from './postsReducers';
import usersReducer from './usersReducer';

export const store = configureStore({
  reducer: {
    posts: postsReducers,
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
