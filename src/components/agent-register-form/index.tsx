import React from 'react'
import './index.scss'
import {Dialog} from '../dialog'
import {Input} from '../input'
import {AgentFormStatus, AgentFormType} from '../../redux/reducers/agent/types'
import {AgentSliceAction, AgentSliceName, AgentStateI} from '../../redux/reducers/agent'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/store'

const titles: Record<string, React.ReactNode> = {
  [AgentFormType.default]: <></>,
  [AgentFormType.community]: <div className={'i18n'}>Apply Community Officer</div>,
  [AgentFormType.product]: <div className={'i18n'}>Apply Product Officer</div>,
}

const buttons: Record<string, React.ReactNode> = {
  [AgentFormStatus.signSignature]: <div className={'i18n'}>Sign Signature</div>,
  [AgentFormStatus.waitForSignSignature]: <div className={'i18n'}>Wait for Signing Signature</div>,
  [AgentFormStatus.apply]: <div className={'i18n'}>Apply</div>,
  [AgentFormStatus.onApplying]: <div className={'i18n'}>Applying</div>,
}

export const ReferralQueryParamKey = 'RFID'

export const AgentRegisterForm = () => {
  const dispatch = useDispatch()
  const root: RootState = useSelector((rootState: RootState) => rootState)
  const agent: AgentStateI = root[AgentSliceName]
  const title = titles[agent.formType]
  const button = buttons[agent.formStatus]
  const disabledButton = [AgentFormStatus.waitForSignSignature, AgentFormStatus.onApplying].includes(agent.formStatus)

  const onClose = () => {
    dispatch(AgentSliceAction.form({formIsOpen: false, formType: AgentFormType.default, formStatus: AgentFormStatus.signSignature}))
  }

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if(agent.formStatus == AgentFormStatus.signSignature) dispatch(AgentSliceAction.formStatus({formStatus: AgentFormStatus.waitForSignSignature}))
    if(agent.formStatus == AgentFormStatus.apply) dispatch(AgentSliceAction.formStatus({formStatus: AgentFormStatus.onApplying}))
  }

  if(!button || !title) {
    console.warn('Wrong Rendering in AgentRegisterForm')
    return <></>
  }

  return <Dialog onDismiss={onClose} zIndex={3} isOpen={agent.formIsOpen}>
    <div className={'agentRegisterForm'}>
      <div className={'agentRegisterForm__title'}>{title}</div>
      <div className={'agentRegisterForm__referral flex flexStart'}>
        <div className={'agentRegisterForm__label'}>
          <div className={'i18n'}>Referral</div>
        </div>
        <div className={'gap10'} />
        <Input className={'agentRegisterForm__input'} disabled={true} value={agent.formRFID}/>
      </div>
      <div className={'gap10'} />
      <div className={'agentRegisterForm__referral flex flexStart'}>
        <div className={'agentRegisterForm__label'}>
          <div className={'i18n'}>Address</div>
        </div>
        <div className={'gap10'} />
        <Input className={'agentRegisterForm__input'} />
      </div>
      <div className={'gap20'} />
      <button className={`agentRegisterForm__confirm ${disabledButton ? 'agentRegisterForm__disabled' : ''}`} onClick={onClick}>{button}</button>
    </div>
  </Dialog>
}