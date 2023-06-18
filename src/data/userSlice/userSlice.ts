import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    _id: '',
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    accessToken: '',
    refreshToken: '',
    profile_url: ''
  }
};
let stateFromLocalStorage = initialState;
if (localStorage.getItem('user')) {
  const localUser: string = localStorage.getItem('user') as string;
  stateFromLocalStorage.user = JSON.parse(localUser);
}

const userSlice = createSlice({
  name: 'user',
  initialState: stateFromLocalStorage,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    clearUser: (state) => {
      localStorage.removeItem('user');
      state.user = {
        _id: '',
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        accessToken: '',
        refreshToken: '',
        profile_url: ''
      };
    }
  }
});

export default userSlice;
