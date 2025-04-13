// store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import blogsReducer from './slices/blogsSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    blogs: blogsReducer,
  },
});

export default store;
