import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./_reducers/profile.reducer";

const store = configureStore({ reducer: { profile: profileReducer } });

export default store;
