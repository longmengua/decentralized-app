import './index.scss'
import React from "react";

export const Identity = (p: { name: string, date: string, role: string, lastWeek: number, coAccumulated: number, lastEpoch: number, poAccumulated: number, lastWeekMissionPercentage: number, }) => {
    const { name, date, role, lastEpoch, lastWeek, poAccumulated, coAccumulated, lastWeekMissionPercentage } = p;
    return <div className={'identity'}>
        <div className={'identity__user flex1'}>
            <div className={'flex'}>
                <div className={'identity__user__avatar image'} />
                <div className={'identity__user__info'}>
                    <div className={'identity__user__info__name flex flexBetween'}>
                        <div className={'i18n'}>Code Name&nbsp;&nbsp;&nbsp;:&nbsp;</div>
                        {name}
                    </div>
                    <div className={'identity__user__info__date flex flexBetween'}>
                        <div className={'i18n'}>Service Date&nbsp;&nbsp;:&nbsp;</div>
                        {date}
                    </div>
                    <div className={'identity__user__info__role flex flexBetween'}>
                        <div className={'i18n'}>Code Name&nbsp;&nbsp;&nbsp;:&nbsp;</div>
                        {role}
                    </div>
                </div>
            </div>
        </div>
        <div className={'identity__communityOfficer flex1'}>
            <div className={'flex'}>
                <div className={'i18n'}>Community Mission Reward</div>
                <div className={'button'}>
                    <div className={'i18n'}>Apply</div>
                </div>
            </div>
            <div className={'flex'}>
                <div className={'identity__communityOfficer__lastWeek'}>
                    <div className={'block'}>
                        <div className={'i18n'}>Last Week</div>
                        <div>$ {lastWeek}</div>
                    </div>
                    <div>
                        <div className={'flex'}>
                            <div className={'i18n'}>Mission Completed&nbsp;:&nbsp;</div>
                            <div>{lastWeekMissionPercentage} %</div>
                        </div>
                    </div>
                </div>
                <div className={'identity__communityOfficer__accumulated'}>
                    <div className={'block'}>
                        <div className={'i18n'}>Accumulated</div>
                        <div>$ {coAccumulated}</div>
                    </div>
                    <div>
                        <div className={'flex'}>
                            <div className={'i18n'}>Mission Completed&nbsp;:&nbsp;</div>
                            <div>{lastWeekMissionPercentage} %</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={'identity__productOfficer flex1'}>
            <div className={'flex'}>
                <div className={'i18n'}>Product Mission Reward</div>
                <div className={'button'}>
                    <div className={'i18n'}>Apply</div>
                </div>
            </div>
            <div className={'flex'}>
                <div className={'identity__productOfficer__lastEpoch'}>
                    <div className={'block'}>
                        <div className={'i18n'}>Last Epoch</div>
                        <div>$ {lastEpoch}</div>
                    </div>
                    <div>
                        <div className={'flex'}>
                            <div className={'i18n'}>Trading Vol(Direct)</div>
                            <div>{lastWeekMissionPercentage} %</div>
                        </div>
                        <div className={'flex'}>
                            <div className={'i18n'}>Trading Vol(Referral);</div>
                            <div>{lastWeekMissionPercentage} %</div>
                        </div>
                    </div>
                </div>
                <div className={'identity__productOfficer__accumulated'}>
                    <div className={'block'}>
                        <div className={'i18n'}>Accumulated</div>
                        <div>$ {poAccumulated}</div>
                    </div>
                    <div>
                        <div className={'flex'}>
                            <div className={'i18n'}>Trading Vol(Direct)</div>
                            <div>{lastWeekMissionPercentage} %</div>
                        </div>
                        <div className={'flex'}>
                            <div className={'i18n'}>Trading Vol(Referral);</div>
                            <div>{lastWeekMissionPercentage} %</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}