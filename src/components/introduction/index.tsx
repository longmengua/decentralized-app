import React from 'react'
import './index.scss'

export const Introduction = (p: { className?: string}) => {
  const { className } = p
  return <div className={`introduction ${className}`}>
    <div className={'introduction__logo image'} />
    <div className={'introduction__description'}>
      <div className={'introduction__description__line1'}>Introducing CEXI</div>
      <div className={'introduction__description__line2'}>Welcome to CEXI</div>
      <div className={'introduction__description__line3'}>Governance & Staking</div>
    </div>
  </div>
}