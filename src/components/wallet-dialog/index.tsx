import React from 'react'
import './index.scss'
import {Copy} from '../copy'
import {Dialog} from '../dialog'
import {AddressFormat} from '../../utils/address-format'

export const WalletDialog = (p: { address?: string, isOpen?: boolean, onDismiss?: (e?: React.MouseEvent) => void, onDisconnect?: () => void }) => {
  const { address, isOpen, onDismiss, onDisconnect } = p

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onDisconnect && onDisconnect()
  }

  return <Dialog isOpen={isOpen} onDismiss={onDismiss}>
    <div className={'walletDialog'}>
      <div className={'walletDialog__title'}>Account</div>
      <div className={'walletDialog__detail'}>
        <div className={'flex'}>
          <div className={'walletDialog__detail__connector'}>Connected with MetaMask</div>
          <div className={'walletDialog__detail__disConnect'}>
            <div className={'i18n'} onClick={onClick}>Disconnect</div>
          </div>
        </div>
        <div className={'flex'}>
          <div className={'walletDialog__detail__address'}>{AddressFormat.shortCut(address || '')}</div>
          <Copy toCopy={address}>
            <div className={'i18n'}>Copy</div>
          </Copy>
        </div>
      </div>
      <div className={'walletDialog__transactions'}>
        <div className={'i18n'}>Your transactions will appear here...</div>
      </div>
    </div>
  </Dialog>
}