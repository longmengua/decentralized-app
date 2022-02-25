import {ethers} from 'ethers'

export const fetchAgent = async (p: { chainId: number, address: string }) => {
  const { chainId, address } = p
  await ethers.utils.fetchJson('')
  return {}
}

export const submitAgentApplication = async () => {
  return {}
}