import React from 'react'
import {Header} from '../../components/header'
import {Introduction} from '../../components/introduction'
import './index.scss'
import {TokenInformation} from '../../components/token-information'
import {Agent} from '../../components/agent'
import {AgentLeaderBoard} from '../../components/agent-leader-board'
import {ComingSoonOverlay} from '../../components/coming-soon-overlay'

export const Home = () => {
  return <>
    <Header />
    <div className={'home'}>
      <div className={'gap20'} />
      <div className={'home__first'}>
        <Introduction className={'flex1'}/>
        <ComingSoonOverlay className={'flex1'} >
          <TokenInformation circulate={81821304} totalSupply={1000000000} percentage={8.18} distributed={5013698.26} />
        </ComingSoonOverlay>
      </div>
      <div className={'gap40'} />
      <div className={'home__second'}>
        <Agent className={'flex1'}/>
        <AgentLeaderBoard className={'flex1'}/>
      </div>
    </div>
  </>
}
