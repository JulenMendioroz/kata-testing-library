import { describe, expect, it } from './test-lib'
import { average, sum } from './stats'
import * as statsAsync from './stats-async'

describe('Stats should', () => {
  it('calculate the sum of all elements of the array', () => {
    const result = sum([1, 2, 3])
    const expected = 6
    expect(expected).toBe(result)
  })

  it('calculate the average of all elements of the array', () => {
    const expected = average([1, 2, 3])
    const result = 2
    expect(expected).toBe(result)
  })
})

describe('Stats Async should', () => {
  it('calculate the sum of all elements of the array (async)', async () => {
    const result = await statsAsync.sum([1, 2, 3])
    const expected = 6
    expect(expected).toBe(result)
  })

  it('calculate the average of all elements of the array (async)', async () => {
    const expected = await statsAsync.average([1, 2, 3])
    const result = 2
    expect(expected).toBe(result)
  })
})
