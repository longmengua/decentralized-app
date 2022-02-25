
export class NumberFormat {
  static isValidNumber = (str: string) => new RegExp('^[0-9]*[.]?[0-9]*$').test(str)

  static dollarPrefix = (str: string) => {
    if(!this.isValidNumber(str)) throw new TypeError()
    return `$ ${str}`
  }

  static dollarPrefixWithComma = (str: string, ) => {
    if(!this.isValidNumber(str)) throw new TypeError()
    const [number, decimal] = str.split('.')
    const numberComma = number.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return `$ ${[numberComma, decimal].join('.')}`
  }

  static addPrefixOrSuffixOrComma = (str: string, sign?: { prefix?: string, suffix?: string, comma?: boolean }) => {
    if(!this.isValidNumber(str)) throw new TypeError()

    const s = sign || {}
    const { prefix = '', suffix = '', comma = true } = s

    if(!comma) return prefix + str + suffix

    const [number, decimal] = str.split('.')
    const numberComma = number.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    return prefix + [numberComma, decimal].join('.') + suffix
  }
}