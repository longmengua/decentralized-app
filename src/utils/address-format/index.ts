
export class AddressFormat {
  static shortCut = (address: string) => {
    const len = address.length
    return address.slice(0, 5) + '....' + address.slice(len - 4, len)
  }
}