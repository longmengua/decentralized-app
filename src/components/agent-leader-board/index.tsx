import './index.scss'
import React from 'react'
import {RootState} from '../../redux/store'
import {useSelector} from 'react-redux'
import {AgentBoardSliceName, AgentBoardStateI} from '../../redux/reducers/agent-leader-board'

export const AgentLeaderBoard = (p: { className?: string}) => {
  const { className } = p
  const root: RootState = useSelector((rootState: RootState) => rootState)
  const agentBoard: AgentBoardStateI = root[AgentBoardSliceName]

  return <div className={`agentLeaderBoard ${className}`}>
    <div className={'agentLeaderBoard__title'}>
      <div className={'i18n'}>CEXI Agent Leader Board</div>
    </div>
    <div className={'agentLeaderBoard__container'}>
      <div className={'agentLeaderBoard__container__community'}>
        <div className={'agentLeaderBoard__container__community__title'}>
          <div className={'i18n'}>Community Mission: Last Week</div>
        </div>
        <div className={'agentLeaderBoard__container__community__table'}>
          <table>
            <thead>
              <tr>
                <th>
                  <div className={'i18n'}>Ranking</div>
                </th>
                <th>
                  <div className={'i18n'}>Code Name</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {agentBoard.communityData.map((value, index) => {
                return <tr key={`communityData-${index}`}>
                  <td>{value.rank}</td>
                  <td>{value.name}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className={'agentLeaderBoard__container__product'}>
        <div className={'agentLeaderBoard__container__product__title'}>
          <div className={'i18n'}>Product Mission: Last Epoch</div>
        </div>
        <div className={'agentLeaderBoard__container__product__table'}>
          <table>
            <thead>
              <tr>
                <th>
                  <div className={'i18n'}>Ranking</div>
                </th>
                <th>
                  <div className={'i18n'}>Code Name</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {agentBoard.productData.map((value, index) => {
                return <tr key={`productData-${index}`}>
                  <td>{value.rank}</td>
                  <td>{value.name}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
}