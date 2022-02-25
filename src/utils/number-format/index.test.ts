import {NumberFormat} from './index'

describe('NumberFormat', () => {
  test('validate balance string', () => {
    const case1 = NumberFormat.isValidNumber('123.456')
    const case2 = NumberFormat.isValidNumber('123')
    const case3 = NumberFormat.isValidNumber('123,456.789')
    const case4 = NumberFormat.isValidNumber('@123456.789')
    const case5 = NumberFormat.isValidNumber(' ')
    const case6 = NumberFormat.isValidNumber('0.000,123 ')

    expect(case1).toBe(true)
    expect(case2).toBe(true)
    expect(case3).toBe(false)
    expect(case4).toBe(false)
    expect(case5).toBe(false)
    expect(case6).toBe(false)
  })

  test('add prefix to number string', () => {
    expect(NumberFormat.dollarPrefix('123.456')).toBe('$ 123.456')
    expect(NumberFormat.dollarPrefix('123')).toBe('$ 123')
    expect(() => NumberFormat.dollarPrefix('123,456.789')).toThrow(TypeError)
  })

  test('add prefix and comma to number string', () => {
    expect(NumberFormat.dollarPrefixWithComma('1234.56')).toBe('$ 1,234.56')
    expect(NumberFormat.dollarPrefixWithComma('123456.789')).toBe('$ 123,456.789')
  })

  test('add prefix or suffix or comma to number string', () => {
    expect(NumberFormat.addPrefixOrSuffixOrComma('1234.56')).toBe('1234.56')
    expect(NumberFormat.addPrefixOrSuffixOrComma('123456.789', {comma: true})).toBe('123,456.789')
    expect(NumberFormat.addPrefixOrSuffixOrComma('123456.789', {prefix: '$ ', comma: true})).toBe('$ 123,456.789')
    expect(NumberFormat.addPrefixOrSuffixOrComma('123456.789', {suffix: ' %', comma: true})).toBe('123,456.789 %')
  })
})