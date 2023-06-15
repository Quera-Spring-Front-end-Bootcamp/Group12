import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice/userSlice';
import WorkSpacesSlice from './dataSlice/workSpacesSlice';
import boardsSlice from './dataSlice/boardsSlice';
import themeSlice from './themeSlice/themeSlice';


const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    workSpaces: WorkSpacesSlice.reducer,
    boards:boardsSlice,
    theme: themeSlice.reducer,

  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
