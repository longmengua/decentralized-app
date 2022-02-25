import {ethers} from 'ethers'

export const fetchAgentBoard = async (p: { chainId: number }): Promise<any> => {
  const { chainId } = p
  await ethers.utils.fetchJson('')
  return []
}