import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {WalletSliceAction, WalletSliceName, WalletStateI} from "../redux/reducers/wallet";
import {RootState} from "../redux/store";
import {WalletConnectorEnum, WalletStatusEnum} from "../constants/wallet/types";
import {Network_Settings, SupportedChainId} from "../constants/chain";

export const WalletConnect = () => {
  const dispatch = useDispatch();
  const wallet: WalletStateI = useSelector((rootState: RootState) => rootState[WalletSliceName])

  // https://docs.metamask.io/guide/getting-started.html#basic-considerations
  const metamaskConnector = useCallback(async () => {
    const ethereum = (window as any)?.ethereum

    if(!ethereum.isMetaMask) {
      // TBD
      console.log('MetaMask is not installed!')
      return
    }

    if(wallet.address) return

    await ethereum.request({ method: 'eth_requestAccounts' }).then((accounts: Array<string>) => {
      const account = accounts[0]
      // console.log('accounts', accounts, account)
      dispatch(WalletSliceAction.connect({address: account}))
    }).catch(() => {
      dispatch(WalletSliceAction.rejectConnecting())
    })

    ethereum.on('accountsChanged', function (accounts: Array<string>) {
      // TBD
      const account = accounts[0]
      // console.log('accounts', accounts, account)
      dispatch(WalletSliceAction.connect({address: account}))
    });
  }, [dispatch, wallet.address])

  // Detect wallet connect
  useEffect(() => {
    if(wallet.status !== WalletStatusEnum.connecting) return
    // Metamask
    if(wallet.walletConnector === WalletConnectorEnum.MetaMask){
      metamaskConnector().then(r => r)
    }
    // TBD: BSC Wallet
  }, [metamaskConnector, wallet.walletConnector, wallet.status]);

  // switch chain
  useEffect(() => {
    if(wallet.walletConnector === WalletConnectorEnum.MetaMask){
      const ethereum = (window as any)?.ethereum

      if(!ethereum.isMetaMask) {
        throw new Error('Should not happen')
      }

      if(!ethereum.request) return

      const p = Network_Settings[wallet.chainId]

      if(!ethereum.isConnected() || ethereum.chainId === p.chainId) return
      console.log('switchChain')

      if([SupportedChainId.ETHEREUM, SupportedChainId.KOVAN].includes(wallet.chainId)){
        ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: p.chainId }],
        }).catch((e: any) => {
          // todo: inform user that you reject switching chain
          console.log(e)
        })
      }

      ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [p],
      }).catch((e: any) => {
        // todo: inform user that you reject to add a new chain
        console.log(e)
      })
    }
  }, [dispatch, wallet.walletConnector, wallet.chainId]);

  // chain callback
  useEffect(() => {
    if(wallet.walletConnector === WalletConnectorEnum.MetaMask){
      const ethereum = (window as any)?.ethereum
      ethereum.on('connect', (c: {chainId?: string;}) => {
        if(!c.chainId) return
        // console.log('connect')
        dispatch(WalletSliceAction.switchChain({chainId: parseInt(c.chainId)}))
      })
      ethereum.on('chainChanged', (chainId?: string) => {
        if(!chainId) return
        // console.log('chainChanged')
        dispatch(WalletSliceAction.switchChain({chainId: parseInt(chainId)}))
      })
      ethereum.on('disconnect', () => {
        dispatch(WalletSliceAction.disConnect())
      })
    }
  }, [dispatch, wallet.walletConnector]);

  return <></>;
};
