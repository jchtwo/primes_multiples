import { describe, it, expect } from 'vitest'

import { bruteMultiples, fastMultiples } from '../multiples'

describe('Sum of 2 multiples (brute force)', () => {
  it('returns the correct number if given mutiples of 3 & 5 with a target total of 1000', () => {
    const nums = bruteMultiples(3, 5, 1000)
    expect(nums.sum).toBe(233168)
  }),
    it('should not take into account the target number (goal is to return sum of nums below target)', () => {
      const nums = bruteMultiples(3, 5, 1000)
      expect(nums.multiples[nums.multiples.length - 1]).toBe(999)
    }),
    it('should work if one multiple is also a multiple of the other multiple', () => {
      const nums = bruteMultiples(2, 8, 10)
      expect(nums.sum).toBe(20)
    }),
    it('should work with 3 random numbers', () => {
      const nums = bruteMultiples(2, 8, 10)
      expect(nums.multiples[nums.multiples.length - 1]).toBe(8)
      expect(nums.sum).toBe(20)
    })
})

describe('Sum of 2 multiples (fast no loops)', () => {
  it('returns the correct number if given mutiples of 3 & 5 with a target total of 1000', () => {
    const nums = fastMultiples(3, 5, 1000)
    expect(nums).toBe(233168)
  }),
    it('should work if one multiple is also a multiple of the other multiple', () => {
      const nums = fastMultiples(2, 8, 10)
      expect(nums).toBe(20)
    }),
    it('should work with 3 random numbers', () => {
      const nums = fastMultiples(3, 7, 20)
      expect(nums).toBe(84)
    }),
    it('the order of the multiple parameters should not matter (either can be the higher value)', () => {
      const nums = fastMultiples(8, 2, 10)
      expect(nums).toBe(20)
    })
})
