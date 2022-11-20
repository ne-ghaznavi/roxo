import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  mobile: "",
  email: "",
  password: "",
  login: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.login = action.payload;
    },
    register: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.mobile = action.payload.mobile;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    remember: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { login, register, remember } = userSlice.actions;
export default userSlice.reducer;
