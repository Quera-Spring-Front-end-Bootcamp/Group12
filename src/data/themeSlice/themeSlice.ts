import { createSlice } from '@reduxjs/toolkit';

let theme: string = 'brand';

if (localStorage.getItem('theme')) {
  theme = localStorage.getItem('theme') as string;
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: { themeColor: theme },
  reducers: {
    setTheme: (state, action) => {
      state.themeColor = action.payload;
      localStorage.setItem('theme', state.themeColor);
    }
  }
});

export default themeSlice;
