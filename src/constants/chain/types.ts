import { Currency, NativeCurrency, Token } from '@uniswap/sdk-core'

export class NativeToken extends NativeCurrency {
    constructor(p: { chainId: number; symbol: string; name: string; decimals: number }) {
        super(p.chainId, p.decimals, p.symbol, p.name)
    }

    equals(other: Currency): boolean {
        return other.isNative
    }

    get wrapped(): Token {
        return new Token(this.chainId, '0x0000000000000000000000000000000000000000', this.decimals, this.symbol, this.name)
    }
}