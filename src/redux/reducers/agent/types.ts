import {TypedDataDomain, TypedDataField} from '@ethersproject/abstract-signer'

export enum AgentStatus {
    logout = 'logout',
    login = 'login',
    logging = 'logging',
}

export enum AgentFormStatus {
    signSignature = 'signSignature',
    waitForSignSignature = 'waitForSignSignature',
    apply = 'apply',
    onApplying = 'onApplying',
}

export enum AgentFormType {
    default = 'default',
    community = 'community',
    product = 'product',
}

export interface SignatureI {
    domain: TypedDataDomain,
    types: Record<string, Array<TypedDataField>>,
    value: Record<string, unknown>,
}