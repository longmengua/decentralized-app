import React from 'react'
import './index.scss'
import {Dialog} from '../dialog'
import {AgentSliceAction, AgentSliceName, AgentStateI} from '../../redux/reducers/agent'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import QRCode from 'react-qr-code'
import {Copy} from '../copy'

export const AgentReferralLink = () => {
  const dispatch = useDispatch()
  const root: RootState = useSelector((rootState: RootState) => rootState)
  const agent: AgentStateI = root[AgentSliceName]
  const href = 'http://facebook.github.io/react/'

  const onClose = () => {
    dispatch(AgentSliceAction.QRLink({QRLinkIsOpen: false}))
  }

  return <Dialog onDismiss={onClose} zIndex={3} isOpen={agent.QRLinkIsOpen}>
    <div className={'agentReferralLink flex'}>
      <QRCode value={href} />
      <div className={'gap20'} />
      <Copy toCopy={href}>{href}</Copy>
    </div>
  </Dialog>
}