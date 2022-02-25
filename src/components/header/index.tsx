import './index.scss'
import {useLocation, useNavigate} from 'react-router-dom'
import {EnvVariable, RouterEnum} from '../../index'
import {RootState} from '../../redux/store'
import {useDispatch, useSelector} from 'react-redux'
import {WalletSliceAction, WalletSliceName, WalletStateI} from '../../redux/reducers/wallet'
import {ChainSelection} from './chain-selection'
import React, {useState} from 'react'
import {WalletDialog} from '../wallet-dialog'
import {Loader} from '../loader'
import {AddressFormat} from '../../utils/address-format'

export const Header = (p: { className?: string}) => {
  const { className = '' } = p
  const [uiState, setUiState] = useState({
    isOpen: false
  })
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const root: RootState = useSelector((rootState: RootState) => rootState)
  const wallet: WalletStateI = root[WalletSliceName]

  const isActive = (path: string) => pathname === path ? 'active' : ''

  const goToExternalLink = (url: string | undefined) => url && window.open(url, '_blank')

  const navigatePath = (r: RouterEnum) => pathname !== r && navigate(r)

  const onChange = (chainId: number) => dispatch(WalletSliceAction.switchChain({chainId}))

  const onClose = () => setUiState(prevState => ({...prevState, isOpen: false}))

  const onOpen = () => setUiState(prevState => ({...prevState, isOpen: true}))

  const disConnectWallet = () => {
    setUiState(prevState => ({...prevState, isOpen: false}))
    dispatch(WalletSliceAction.disConnect())
  }

  const connectWallet = () => dispatch(WalletSliceAction.connecting())

  return <div className={`header ${className}`}>
    <div>
      <div className={'header__logo image'} />
    </div>
    <div className={'header__menu'}>
      <div className={'header__menu__selection'} onClick={() => goToExternalLink(EnvVariable.LANDING_END_POINT)}>
        <div className={'header__menu__selection__title'}>Home</div>
        <sup className={'header__menu__selection__link'}>↗</sup>
      </div>
      <div className={'header__menu__selection'} onClick={() => goToExternalLink(EnvVariable.SWAP_END_POINT)}>
        <div className={'header__menu__selection__title'}>Swap</div>
        <sup className={'header__menu__selection__link'}>↗</sup>
      </div>
      <div className={'header__menu__selection'} onClick={() => goToExternalLink(EnvVariable.SWAP_END_POINT)}>
        <div className={'header__menu__selection__title'}>Pool</div>
        <sup className={'header__menu__selection__link'}>↗</sup>
      </div>
      <div className={'header__menu__selection'} onClick={() => goToExternalLink(EnvVariable.SWAP_END_POINT)}>
        <div className={'header__menu__selection__title'}>Staking</div>
        <sup className={'header__menu__selection__link'}>↗</sup>
      </div>
      <div className={'header__menu__selection ' + isActive(RouterEnum.Dashboard)} onClick={() => navigatePath(RouterEnum.Dashboard)}>
        <div className={'header__menu__selection__title'}>Dashboard</div>
      </div>
    </div>
    <div className={'header__walletInfo'}>
      <div className={'header__walletInfo__currency'}>
        <div className={'header__walletInfo__currency__balance'}>
          <Loader size={7}/>
          {/*123*/}
        </div>
        <div className={'header__walletInfo__currency__symbol'}>MATIC</div>
      </div>
      <div className={'flex'}>
        <div className={'header__walletInfo__chain'}>
          <ChainSelection selectedChainId={wallet.chainId} onChange={onChange}/>
        </div>
        <div className={'gap10'}/>
        {
          wallet.address ? <div className={'header__walletInfo__address'} onClick={onOpen}>{AddressFormat.shortCut(wallet.address)}</div> :
            <div className={'header__walletInfo__connect'} onClick={connectWallet}>
              <div className={'i18n'}>Connect to a wallet</div>
            </div>
        }
      </div>
    </div>
    <WalletDialog address={wallet.address} onDismiss={onClose} isOpen={uiState.isOpen} onDisconnect={disConnectWallet}/>
  </div>
}