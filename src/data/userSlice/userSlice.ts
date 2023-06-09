import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "",
    accessToken: "",
    refreshToken: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export default userSlice;
