import {JsonRpcSigner} from '@ethersproject/providers/lib/json-rpc-provider'
import {SignatureI} from '../../redux/reducers/agent/types'

export const SignSignature = (p: {signature: SignatureI, signer: JsonRpcSigner}): Promise<string> => {
  const { signature, signer } = p
  return signer?._signTypedData(signature?.domain, signature?.types, signature?.value)
}