import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: {
    username: "",
    email: "",
    accessToken: "",
    refreshToken: "",
  },
};

if(localStorage.getItem("user")){
  const localUser: string = localStorage.getItem("user") as string;
  initialState.user = JSON.parse(localUser);
}



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    clearUser: (state) => {
      state.user = initialState.user;
      localStorage.removeItem('user');
    },
  },
});

export default userSlice;
