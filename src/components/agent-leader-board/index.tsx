import './index.scss'
import React from "react";

export const AgentLeaderBoard = (p: { communityData: Array<{ rank: number, name: string }>; productData: Array<{ rank: number, name: string }> }) => {
    const {communityData, productData} = p
    return <div className={'agentLeaderBoard'}>
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
                        <tr>
                            <th>
                                <div className={'i18n'}>Ranking</div>
                            </th>
                            <th>
                                <div className={'i18n'}>Code Name</div>
                            </th>
                        </tr>
                        {communityData.map((value, index) => {
                            return <tr key={`communityData-${index}`}>
                                <td>{value.rank}</td>
                                <td>{value.name}</td>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
            <div className={'agentLeaderBoard__container__product'}>
                <div className={'agentLeaderBoard__container__product__title'}>
                    <div className={'i18n'}>Product Mission: Last Epoch</div>
                </div>
                <div className={'agentLeaderBoard__container__product__table'}>
                    <table>
                        <tr>
                            <th>
                                <div className={'i18n'}>Ranking</div>
                            </th>
                            <th>
                                <div className={'i18n'}>Code Name</div>
                            </th>
                        </tr>
                        {productData.map((value, index) => {
                            return <tr key={`productData-${index}`}>
                                <td>{value.rank}</td>
                                <td>{value.name}</td>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
        </div>
    </div>
}