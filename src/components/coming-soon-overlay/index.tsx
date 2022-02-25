import React from 'react'
import './index.scss'

export const ComingSoonOverlay = (p: { children?: React.ReactNode, className?: string }) => {
  const { className } = p
  return <div className={`comingSoonOverlay ${className}`}>
    <div className={'comingSoonOverlay__cover'}>
      <div className={'comingSoonOverlay__cover__block'}>
        <div className={'i18n'}>Coming Soon...</div>
      </div>
    </div>
    <div className={'comingSoonOverlay__filter'}>{p.children}</div>
  </div>
}