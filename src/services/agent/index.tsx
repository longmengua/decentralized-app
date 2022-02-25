import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import {AgentSliceAction, AgentSliceName, AgentStateI} from '../../redux/reducers/agent'
import {WalletSliceName, WalletStateI} from '../../redux/reducers/wallet'
import {fetchAgent, submitAgentApplication} from '../../call-api/agent'
import {AgentFormStatus, AgentStatus} from '../../redux/reducers/agent/types'
import {ErrorCapture} from '../../errors'
import {ErrorType} from '../../errors/types'
import {SignSignature} from '../../call-contract/signSignature'

export const AgentService = () => {
  const dispatch = useDispatch()
  const root: RootState = useSelector((rootState: RootState) => rootState)
  const agent: AgentStateI = root[AgentSliceName]
  const wallet: WalletStateI = root[WalletSliceName]

  // fetch nonce from back-end
  useEffect(() => {
    if(agent.status === AgentStatus.logout || wallet.address === undefined || wallet.chainId === undefined) return
    fetchAgent({address: wallet.address, chainId: wallet.chainId}).then(r => {
      // todo: DTO
      dispatch(AgentSliceAction.login({r}))
    }).catch(e => {
      console.error(e)
    })
  }, [wallet.chainId, wallet.address, agent.status])

  // signing signature
  useEffect(() => {
    if(agent.formStatus != AgentFormStatus.waitForSignSignature)return

    if(!agent.signature) {
      ErrorCapture.error(ErrorType.MissingSignature)
      return
    }

    if(!wallet.signer){
      ErrorCapture.error(ErrorType.MissingSigner)
      return
    }

    SignSignature({signature: agent.signature, signer: wallet.signer}).then(signedData => {
      dispatch(AgentSliceAction.signedDate({signedData}))
    }).catch(e => {
      // console.log('reject sign signature',e)
      dispatch(AgentSliceAction.rejectSignedDate())
    })
  }, [agent.formStatus])

  // submit application
  useEffect(() => {
    if(agent.formStatus != AgentFormStatus.onApplying)return

    if(!agent.signature) {
      ErrorCapture.error(ErrorType.MissingSignature)
      return
    }

    submitAgentApplication().then(r => {
      // todo: DTO
      dispatch(AgentSliceAction.login({r}))
    }).catch(e => {
      console.error(e)
    })
  }, [agent.formStatus])

  return <></>
}
