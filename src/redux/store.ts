import { configureStore } from '@reduxjs/toolkit'
import {WalletSliceReducer, WalletSliceName} from './reducers/wallet'
import {Store} from 'redux'
import {AgentSliceName, AgentSliceReducer} from './reducers/agent'
import {AgentBoardSliceName, AgentBoardSliceReducer} from './reducers/agent-leader-board'

export const store: Store = configureStore({
  reducer: {
    [WalletSliceName]: WalletSliceReducer,
    [AgentSliceName]: AgentSliceReducer,
    [AgentBoardSliceName]: AgentBoardSliceReducer,
  },
  // https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using
  // https://stackoverflow.com/questions/68479631/getting-warning-message-getdefaultmiddleware-is-deprecated
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type Dispatch = typeof store.dispatch;
