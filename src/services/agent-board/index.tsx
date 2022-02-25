import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import React, {useEffect} from 'react'
import {fetchAgentBoard} from '../../call-api/agent-board'
import {WalletSliceName, WalletStateI} from '../../redux/reducers/wallet'
import {AgentBoardSliceAction} from '../../redux/reducers/agent-leader-board'

export const AgentBoardService = () => {
  const dispatch = useDispatch()
  const root: RootState = useSelector((rootState: RootState) => rootState)
  const wallet: WalletStateI = root[WalletSliceName]

  // switch chain
  useEffect(() => {
    fetchAgentBoard({chainId: wallet.chainId}).then(data => {
      // todo: DTO
      dispatch(AgentBoardSliceAction.fetchData({communityData: data, productData: data}))
    })
  }, [wallet.chainId])

  return <></>
}