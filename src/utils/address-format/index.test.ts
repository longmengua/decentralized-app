import {AddressFormat} from './index'

describe('AddressFormat', () => {
  test('address short cut format', () => {
    const shorCut = AddressFormat.shortCut('0x379B3efA648eBfaC165CB966f0AF4f81d4861534')
    expect(shorCut).toBe('0x379....1534')
  })
})