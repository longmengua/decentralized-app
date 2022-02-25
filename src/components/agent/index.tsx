import './index.scss'
import React, {useEffect} from 'react'
import {AgentRegisterForm, ReferralQueryParamKey} from '../agent-register-form'
import {useSearchParams} from 'react-router-dom'
import {AgentSliceAction, AgentSliceName, AgentStateI} from '../../redux/reducers/agent'
import {useDispatch, useSelector} from 'react-redux'
import {AgentFormType} from '../../redux/reducers/agent/types'
import {RootState} from '../../redux/store'
import {AgentReferralLink} from '../agent-referral-link'
import {NumberFormat} from '../../utils/number-format'

const buttons = (isOfficer: boolean) => isOfficer ? <div className={'i18n'}>Referral Link</div> :  <div className={'i18n'}>Apply</div>

const role = (isProductOfficer: boolean, isCommunityOfficer: boolean) =>
  `${isProductOfficer ? 'PO': ''}${isProductOfficer && isCommunityOfficer ? ', ': ''}${isCommunityOfficer ? 'CO': ''}`

export const Agent = (p: { className?: string }) => {
  const { className } = p
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const root: RootState = useSelector((rootState: RootState) => rootState)
  const agent: AgentStateI = root[AgentSliceName]

  const onOpen = (type: AgentFormType, isOfficer: boolean) => {
    if(isOfficer) {
      dispatch(AgentSliceAction.QRLink({QRLinkIsOpen: true}))
      return
    }
    dispatch(AgentSliceAction.form({formIsOpen: true, formType: type}))
  }

  useEffect(() => {
    const RFID = searchParams.get(ReferralQueryParamKey)
    if(RFID == null) return
    dispatch(AgentSliceAction.form({formIsOpen: true, formType: AgentFormType.product, formRFID: RFID}))
  }, [searchParams])

  return <div className={`agent ${className}`}>
    <div className={'agent__user'}>
      <div className={'agent__user__block'}>
        <div className={'agent__user__block__avatar image'} />
        <div className={'agent__user__block__info'}>
          <div className={'agent__user__block__info__name flex flexBetween'}>
            <div className={'i18n'}>Code Name :</div>
            {agent.identity.name}
          </div>
          <div className={'agent__user__block__info__date flex flexBetween'}>
            <div className={'i18n'}>Service Date :</div>
            {agent.identity.date}
          </div>
          <div className={'agent__user__block__info__role flex flexBetween'}>
            <div className={'i18n'}>Code Name :</div>
            {role(agent.identity.isProductOfficer, agent.identity.isCommunityOfficer)}
          </div>
        </div>
      </div>
    </div>
    <div className={'agent__communityOfficer'}>
      <div className={'agent__communityOfficer__header'}>
        <div className={'i18n'}>Community Mission Reward</div>
        <div className={'button'} onClick={() => onOpen(AgentFormType.community, agent.identity.isCommunityOfficer)}>
          {buttons(agent.identity.isCommunityOfficer)}
        </div>
      </div>
      <div className={'agent__communityOfficer__block'}>
        <div className={'agent__communityOfficer__block__lastWeek'}>
          <div className={'block'}>
            <div className={'i18n'}>Last Week</div>
            <div>{!agent.identity.lastWeek ? '-' : NumberFormat.dollarPrefixWithComma(agent.identity.lastWeek.toString())}</div>
          </div>
          <div>
            <div className={'flex'}>
              <div className={'i18n'}>Mission Completed </div>
              <div className={'gap10'}/>
              <div>{!agent.identity.lastWeekMissionPercentage ? '-' : NumberFormat.addPrefixOrSuffixOrComma(agent.identity.lastWeekMissionPercentage.toString(), {suffix: ' %'})}</div>
            </div>
          </div>
        </div>
        <div className={'agent__communityOfficer__block__accumulated'}>
          <div className={'block'}>
            <div className={'i18n'}>Accumulated</div>
            <div>{!agent.identity.coAccumulated ? '-' : NumberFormat.dollarPrefixWithComma(agent.identity.coAccumulated.toString())}</div>
          </div>
          <div>
            <div className={'flex'}>
              <div className={'i18n'}>Mission Completed </div>
              <div className={'gap10'}/>
              <div>{!agent.identity.accumulatedMissionPercentage ? '-' : NumberFormat.addPrefixOrSuffixOrComma(agent.identity.accumulatedMissionPercentage.toString(), {suffix: ' %'})}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={'agent__productOfficer'}>
      <div className={'agent__productOfficer__header'}>
        <div className={'i18n'}>Product Mission Reward</div>
        <div className={'gap10'}/>
        <div className={'button'} onClick={() => onOpen(AgentFormType.product, agent.identity.isProductOfficer)}>
          {buttons(agent.identity.isProductOfficer)}
        </div>
      </div>
      <div className={'agent__productOfficer__block'}>
        <div className={'agent__productOfficer__block__lastEpoch'}>
          <div className={'block'}>
            <div className={'i18n'}>Last Epoch</div>
            <div>{!agent.identity.lastEpoch ? '-' : NumberFormat.dollarPrefixWithComma(agent.identity.lastEpoch.toString())}</div>
          </div>
          <div>
            <div className={'flex'}>
              <div className={'i18n'}>Trading Vol(Direct)</div>
              <div className={'gap10'}/>
              <div>{!agent.identity.lastEpochDirectVol ? '-' : NumberFormat.addPrefixOrSuffixOrComma(agent.identity.lastEpochDirectVol.toString(), {suffix: ' %'})}</div>
            </div>
            <div className={'flex'}>
              <div className={'i18n'}>Trading Vol(Referral)</div>
              <div className={'gap10'}/>
              <div>{!agent.identity.lastEpochReferralVol ? '-' : NumberFormat.addPrefixOrSuffixOrComma(agent.identity.lastEpochReferralVol.toString(), {suffix: ' %'})}</div>
            </div>
          </div>
        </div>
        <div className={'agent__productOfficer__block__accumulated'}>
          <div className={'block'}>
            <div className={'i18n'}>Accumulated</div>
            <div>{!agent.identity.poAccumulated ? '-' : NumberFormat.dollarPrefixWithComma(agent.identity.poAccumulated.toString())}</div>
          </div>
          <div>
            <div className={'flex'}>
              <div className={'i18n'}>Trading Vol(Direct)</div>
              <div className={'gap10'}/>
              <div>{!agent.identity.accumulatedDirectVol ? '-' : NumberFormat.addPrefixOrSuffixOrComma(agent.identity.accumulatedDirectVol.toString(), {suffix: ' %'})}</div>
            </div>
            <div className={'flex'}>
              <div className={'i18n'}>Trading Vol(Referral)</div>
              <div className={'gap10'}/>
              <div>{!agent.identity.accumulatedReferralVol ? '-' : NumberFormat.addPrefixOrSuffixOrComma(agent.identity.accumulatedReferralVol.toString(), {suffix: ' %'})}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AgentRegisterForm />
    <AgentReferralLink />
  </div>
}