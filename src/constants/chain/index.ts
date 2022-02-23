import {Currency} from "@uniswap/sdk-core";
import {NativeToken} from "./types";

export const SupportedChainId = {
    ETHEREUM: 1,
    KOVAN: 42,
    POLYGON: 137,
    POLYGON_TEST: 80001,
    BSC: 56,
    BSC_TEST: 97,
    ThunderCore: 108,
    ThunderCore_TEST: 18,
}

export const Default_Chains = [SupportedChainId.ETHEREUM, SupportedChainId.KOVAN]

// add the chain to SUPPORTED_CHAIN for showing chains in production, stage mode.
export const SUPPORTED_CHAIN = [
    SupportedChainId.ETHEREUM,
    SupportedChainId.POLYGON,
    SupportedChainId.BSC,
    SupportedChainId.ThunderCore,
]
// add the chain to SUPPORTED_CHAIN_TEST for showing chains in sit mode.
export const SUPPORTED_CHAIN_TEST = [
    SupportedChainId.KOVAN,
    SupportedChainId.POLYGON_TEST,
    SupportedChainId.BSC_TEST,
    SupportedChainId.ThunderCore_TEST,
]

// config for metamask
export const Network_Settings: Record<
    number,
    {
        chainId: string
        chainName: string
        nativeCurrency: {
            name: string
            symbol: string
            decimals: number
        }
        rpcUrls: Array<string>
        blockExplorerUrls: Array<string>
        bridge?: Array<string>
    }
    > = {
    [SupportedChainId.ETHEREUM]: {
        chainId: `0x${SupportedChainId.ETHEREUM.toString(16)}`,
        chainName: 'Ethereum',
        nativeCurrency: {
            name: 'Ethereum Coin',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: ['https://mainnet.infura.io/v3/', 'https://main-light.eth.linkpool.io/'],
        blockExplorerUrls: ['https://etherscan.io/'],
    },
    [SupportedChainId.KOVAN]: {
        chainId: `0x${SupportedChainId.KOVAN.toString(16)}`,
        chainName: 'Kovan',
        nativeCurrency: {
            name: 'Ethereum coin',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: [`https://mainnet.infura.io/v3/`],
        blockExplorerUrls: [`https://kovan.etherscan.io/`],
    },
    // https://docs.binance.org/smart-chain/developer/rpc.html
    [SupportedChainId.BSC]: {
        chainId: `0x${SupportedChainId.BSC.toString(16)}`,
        chainName: 'BSC',
        nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18,
        },
        rpcUrls: ['https://bsc-dataseed.binance.org/'],
        blockExplorerUrls: ['https://bscscan.com/'],
    },
    // https://docs.binance.org/smart-chain/developer/rpc.html
    [SupportedChainId.BSC_TEST]: {
        chainId: `0x${SupportedChainId.BSC_TEST.toString(16)}`,
        chainName: 'BSC Testnet',
        nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18,
        },
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
        blockExplorerUrls: ['https://testnet.bscscan.com/'],
    },
    // https://docs.polygon.technology/docs/develop/network-details/network/
    [SupportedChainId.POLYGON]: {
        chainId: `0x${SupportedChainId.POLYGON.toString(16)}`,
        chainName: 'Polygon',
        nativeCurrency: {
            name: 'MATIC',
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: [
            'https://polygon-rpc.com/',
            'https://rpc-mainnet.matic.network',
            'https://matic-mainnet.chainstacklabs.com',
            'https://rpc-mainnet.maticvigil.com/',
            'https://rpc-mainnet.matic.quiknode.pro',
            'https://matic-mainnet-full-rpc.bwarelabs.com',
        ],
        blockExplorerUrls: ['https://polygonscan.com/'],
    },
    // https://docs.polygon.technology/docs/develop/network-details/network/
    [SupportedChainId.POLYGON_TEST]: {
        chainId: `0x${SupportedChainId.POLYGON_TEST.toString(16)}`,
        chainName: 'Polygon Testnet',
        nativeCurrency: {
            name: 'MATIC',
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: ['https://matic-mumbai.chainstacklabs.com/'],
        blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    },
    // https://docs.developers.thundercore.com/network-details/thundercore-mainnet
    [SupportedChainId.ThunderCore]: {
        chainId: `0x${SupportedChainId.ThunderCore.toString(16)}`,
        chainName: 'ThunderCore',
        nativeCurrency: {
            name: 'TT token',
            symbol: 'TT',
            decimals: 18,
        },
        rpcUrls: ['https://mainnet-rpc.thundercore.io/'],
        blockExplorerUrls: ['https://viewblock.io/thundercore/'],
    },
    // https://docs.developers.thundercore.com/network-details/thundercore-testnet
    [SupportedChainId.ThunderCore_TEST]: {
        chainId: `0x${SupportedChainId.ThunderCore_TEST.toString(16)}`,
        chainName: 'ThunderCore Testnet',
        nativeCurrency: {
            name: 'TST token',
            symbol: 'TST',
            decimals: 18,
        },
        rpcUrls: ['https://testnet-rpc.thundercore.com/'],
        blockExplorerUrls: ['https://explorer-testnet.thundercore.com/'],
    },
}

export const ExplorerLinks = Object.values(Network_Settings).reduce((chainToExplorerUrl: any, currentValue: any) => {
    const chain: number = parseInt(currentValue.chainId, 16)
    chainToExplorerUrl[chain] = currentValue.blockExplorerUrls
    return chainToExplorerUrl
}, {})

export const BridgeLinks = {
    [SupportedChainId.POLYGON]: 'https://wallet.polygon.technology/bridge/',
}

export const NativeTokens: Record<number, Currency> = Object.values(Network_Settings).reduce(
    (previousValue: any, currentValue: any) => {
        const chain: number = parseInt(currentValue.chainId, 16)
        previousValue[chain] = new NativeToken({
            chainId: chain,
            decimals: currentValue.nativeCurrency.decimals,
            symbol: currentValue.nativeCurrency.symbol,
            name: currentValue.nativeCurrency.name,
        })
        return previousValue
    },
    {}
)

export const InfraKeys = {
    [SupportedChainId.ETHEREUM]: '',
    [SupportedChainId.POLYGON]: '',
    [SupportedChainId.BSC]: '',
}
