import React from "react";
import {Header} from "../../components/header";
import {Introduction} from "../../components/introduction";
import './index.scss'
import {TokenInformation} from "../../components/token-information";
import {Identity} from "../../components/Identity";
import {AgentLeaderBoard} from "../../components/agent-leader-board";

const testData = [
  {
    rank: 1,
    name: 'test',
  },
  {
    rank: 2,
    name: 'test',
  },
  {
    rank: 3,
    name: 'test',
  }
]

export const Home = () => {
  return <>
    <Header />
    <div className={"home"}>
      <div style={{display: 'flex'}}>
        <Introduction />
        <div style={{flex: 1}}/>
        <TokenInformation circulate={81821304} totalSupply={1000000000} percentage={8.18} distributed={5013698.26} />
      </div>
      <div style={{padding: '10px'}}/>
      <Identity name={'007'} date={'2022.02.01'} role={'co, po'} lastWeek={150} lastEpoch={150} coAccumulated={1500} poAccumulated={1500} lastWeekMissionPercentage={27.25}/>
      <div style={{padding: '10px'}}/>
      <AgentLeaderBoard communityData={testData} productData={testData}/>
    </div>
  </>;
};
