import { configureStore } from "@reduxjs/toolkit";
import {WalletSliceReducer, WalletSliceName} from "./reducers/wallet";
import {Store} from "redux";

export const store: Store = configureStore({
  reducer: {
    [WalletSliceName]: WalletSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type Dispatch = typeof store.dispatch;
