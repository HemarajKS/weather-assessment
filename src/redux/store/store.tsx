import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import searchSlice from '../reducers/currentData';
import locationSlice from '../reducers/locationAuto';
import recentSlice from '../reducers/recentSlice';
import weatherSlice from '../reducers/weatherSlice';

export const store = configureStore({
  reducer: {
    location: locationSlice.reducer,
    weather: weatherSlice.reducer,
    search: searchSlice.reducer,
    recent: recentSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
