import React, {useEffect} from 'react'

import './index.scss'

export const Overlay = (p: { children?: React.ReactNode, zIndex: number, onClose?: (e?: React.MouseEvent) => void }) => {
  const { children, onClose, zIndex } = p

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClose && onClose(e)
  }

  useEffect(() => {
    document.body.style.overflow = 'hide'
    document.body.style.height = '100vh'
    document.body.style.width = '100vw'
    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.height = 'auto'
      document.body.style.width = 'auto'
    }
  })

  return <div style={{zIndex: zIndex}} className={'overlay'} onClick={onClick}>{children}</div>
}