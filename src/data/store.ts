import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice/userSlice';
import WorkSpacesSlice from './dataSlice/workSpacesSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    workSpaces: WorkSpacesSlice.reducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
