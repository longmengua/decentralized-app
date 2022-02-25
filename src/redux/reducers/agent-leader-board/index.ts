import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AgentBoardCommunityData, AgentBoardProductData} from './types'

export interface AgentBoardStateI {
  communityData: Array<AgentBoardCommunityData>
  productData: Array<AgentBoardProductData>
}

const initialState: AgentBoardStateI = {
  communityData: [],
  productData: [],
}

export const AgentBoardSliceName = 'AgentBoard'

const AgentBoardSlice = createSlice({
  name: AgentBoardSliceName,
  initialState,
  reducers: {
    fetchData: (
      state: AgentBoardStateI,
      action: PayloadAction<{ communityData: Array<AgentBoardCommunityData>, productData: Array<AgentBoardCommunityData> }>
    ) => {
      const { productData, communityData } = action.payload
      state.communityData = communityData
      state.productData = productData
      return state
    },
  },
})

// Action creators are generated for each case reducer function
export const AgentBoardSliceAction = AgentBoardSlice.actions
export const AgentBoardSliceReducer = AgentBoardSlice.reducer