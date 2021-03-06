import React from 'react'
import useCopyClipboard from '../../hooks/useCopyClipboard'

import './index.scss'

export const Copy = (p: { toCopy: string | undefined; children?: React.ReactNode }) => {
  const [isCopied, setCopied] = useCopyClipboard()

  return (
    <div className={'copy'}>
      <div className={'copy__container'} onClick={() => p.toCopy && setCopied(p.toCopy)}>
        {isCopied ? (
          <>
            <div className={'i18n'}>Copied</div>
            <div className={'copy__container__gap'} />
            <div className={'copy__container__checkedIcon image'} />
          </>
        ) : (
          <>
            <div>{p.children}</div>
            <div className={'copy__container__gap'} />
            <div className={'copy__container__copyIcon image'} />
          </>
        )}
      </div>
    </div>
  )
}
