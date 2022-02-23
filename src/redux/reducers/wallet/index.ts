import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Web3Provider} from "@ethersproject/providers";
import {SupportedChainId} from "../../../constants/chain";
import {WalletConnectorEnum, WalletStatusEnum} from "../../../constants/wallet/types";

export interface WalletStateI {
  chainId: number; // network: -1, select chain
  walletConnector: WalletConnectorEnum
  address: string | undefined;
  web3Provider: Web3Provider | undefined
  status: WalletStatusEnum
}

const initialState: WalletStateI = {
  chainId: SupportedChainId.ETHEREUM,
  walletConnector: WalletConnectorEnum.MetaMask,
  address: undefined,
  web3Provider: undefined,
  status: WalletStatusEnum.connecting
};

export const WalletSliceName = 'Wallet'

const WalletSlice = createSlice({
  name: WalletSliceName,
  initialState,
  reducers: {
    connecting: (
        state: WalletStateI,
    ) => {
      state.status = WalletStatusEnum.connecting
      return state
    },
    rejectConnecting: (
        state: WalletStateI,
    ) => {
      state.status = WalletStatusEnum.disconnect
      return state
    },
    connect: (
      state: WalletStateI,
      action: PayloadAction<{ address: string }>
    ) => {
      state.address = action.payload.address;
      state.status = WalletStatusEnum.connected
      return state
    },
    disConnect: (state: WalletStateI) => {
      state = {...initialState, status: WalletStatusEnum.disconnect};
      return state
    },
    switchChain: (
        state: WalletStateI,
        action: PayloadAction<{ chainId: number }>
    ) => {
      state.chainId = action.payload.chainId;
      return state
    },
  },
});

// Action creators are generated for each case reducer function
export const WalletSliceAction = WalletSlice.actions;
export const WalletSliceReducer = WalletSlice.reducer;
