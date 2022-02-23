import './index.scss'
import {SupportedChainId} from "../../../constants/chain";
import React, {useState} from "react";

// todo: later will replace <div> to be <Trans> for i18n
const ChainName: Record<number, React.ReactNode> = {
    [-1]: <div className={'i18n'}>Select Network</div>,
    [SupportedChainId.ETHEREUM]: <div className={'i18n'}>Ethereum</div>,
    [SupportedChainId.POLYGON]: <div className={'i18n'}>Polygon</div>,
    [SupportedChainId.BSC]: <div className={'i18n'}>BSC</div>,
    [SupportedChainId.ThunderCore]: <div className={'i18n'}>ThunderCore</div>,
    // Test chain
    [SupportedChainId.KOVAN]: <div className={'i18n'}>Ethereum-Test</div>,
    [SupportedChainId.POLYGON_TEST]: <div className={'i18n'}>Polygon-Test</div>,
    [SupportedChainId.BSC_TEST]: <div className={'i18n'}>BSC-Test</div>,
    [SupportedChainId.ThunderCore_TEST]: <div className={'i18n'}>ThunderCore-Test</div>,
}

export const ChainSelection = (p: { selectedChainId: number, onChange: (chainId: number) => void }) => {
    // const chains = EnvVariable.IS_PRODUCTION ? SUPPORTED_CHAIN : [...SUPPORTED_CHAIN, ...SUPPORTED_CHAIN_TEST]
    const chains = [SupportedChainId.ETHEREUM]
    const name = ChainName[p.selectedChainId]
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(prevState => !prevState)

    const onClick = (e: React.MouseEvent<HTMLDivElement>, chainId: number) => {
        e.stopPropagation()
        setIsOpen(false)
        p.onChange(chainId)
    }

    return <div className={'chainSelection'}>
        <div className={'chainSelection__selected'} onClick={toggle}>{name}</div>
        {isOpen && <div className={'chainSelection__options'}>
            {chains.map((chainId, index) => <div key={'walletOption' + index} className={'chainSelection__options__option'} onClick={(e: React.MouseEvent<HTMLDivElement>) => onClick(e, chainId)}>{ChainName[chainId]}</div>)}
        </div>}
    </div>
}