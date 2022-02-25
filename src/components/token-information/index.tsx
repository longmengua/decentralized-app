import React from 'react'
import './index.scss'

export const TokenInformation = (p : {
  circulate?: number,
  totalSupply?: number,
  percentage?: number,
  distributed?: number,
  vote?: number,
  proposal?: number,
  className?: string,
}) => {
  const { className } = p
  return <div className={`tokenInformation ${className}`}>
    <div className={'tokenInformation__frame tokenInformation__circulate'}>
      <div className={'tokenInformation__title'}>
        <div className={'i18n'}>Circulating Supply</div>
      </div>
      <div>
        <div className={'tokenInformation__flex'}>
          <div>{p.circulate}</div>
          <div className={'tokenInformation__icon image'} />
          <div className={'flex1'} />
          <div className={'tokenInformation__circulate__gray'}>{p.totalSupply}</div>
        </div>
        <progress className={'tokenInformation__circulate__percentage'} value={p.circulate} max={p.totalSupply}> 32% </progress>
        <div>{p.percentage} %</div>
      </div>
    </div>
    <div className={'tokenInformation__frame tokenInformation__distributed'}>
      <div className={'tokenInformation__title'}>
        <div className={'i18n'}>Distributed Today</div>
      </div>
      <div>
        <div className={'tokenInformation__flex'}>
          <div>{p.distributed}</div>
          <div className={'tokenInformation__icon image'} />
        </div>
      </div>
    </div>
    {p.proposal && <div className={'tokenInformation__frame tokenInformation__proposal'}>
      <div className={'tokenInformation__title'}>
        <div className={'i18n'}>Proposal</div>
      </div>
      <div>
        <div className={'tokenInformation__flex'}>
          <div>{p.proposal}</div>
          <div className={'tokenInformation__icon image'}/>
        </div>
      </div>
    </div>}
    {p.vote && <div className={'tokenInformation__frame tokenInformation__vote'}>
      <div className={'tokenInformation__title'}>
        <div className={'i18n'}>Vote</div>
      </div>
      <div>
        <div className={'tokenInformation__flex'}>
          <div>{p.vote}</div>
          <div className={'tokenInformation__icon image'}/>
        </div>
      </div>
    </div>}
  </div>
}