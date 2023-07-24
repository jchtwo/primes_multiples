import { describe, it, expect } from 'vitest'
import { brutePrimes, sievePrimes, semiBrutePrimes } from '../primes'

describe('Sum of primes (brute force)', () => {
  it('returns the correct sum with a lower bound (inclusive) of 3 and upper bound (excluded) of 20', () => {
    const primes = brutePrimes(3, 20)
    expect(primes.sum).toBe(75)
    expect(primes.primes.length).toBe(7)
  }),
    it('the should only start sum from the first prime number (2) not 1', () => {
      const primes = brutePrimes(0, 20)
      expect(primes.sum).toBe(77)
      expect(primes.primes.length).toBe(8)
    })
  // ***My laptop was not happy with the below test => use with caution***
  // it('works with larger numbers', () => {
  //     const primes = brutePrimes(0,2000000)
  //     console.log(primes)
  //     expect(primes.sum).toBe(142913828922)
  //   })
})

describe('Sum of primes (semi brute force)', () => {
    it('returns the correct sum with a lower bound (inclusive) of 3 and upper bound (excluded) of 20', () => {
      const primes = semiBrutePrimes(3, 20)
      expect(primes.sum).toBe(75)
      expect(primes.primes.length).toBe(7)
    }),
      it('the should only start sum from the first prime number (2) not 1', () => {
        const primes = semiBrutePrimes(0, 20)
        expect(primes.sum).toBe(77)
        expect(primes.primes.length).toBe(8)
      }),
    it('works with larger numbers', () => {
        const primes = semiBrutePrimes(0,2000000)
        expect(primes.sum).toBe(142913828922)
      })
  })

  describe('Sum of primes (Seive of Eratosthenes)', () => {
    it('returns the correct sum with a lower bound (inclusive) of 3 and upper bound (excluded) of 20', () => {
        const primes = sievePrimes(3, 20)
        console.log(primes)
        expect(primes.sum).toBe(75)
        expect(primes.primes.length).toBe(7)
      }),
        it('the should only start sum from the first prime number (2) not 1', () => {
          const primes = sievePrimes(0, 20)
          expect(primes.sum).toBe(77)
          expect(primes.primes.length).toBe(8)
        }),
      it('works with larger numbers', () => {
          const primes = sievePrimes(0,2000000)
          expect(primes.sum).toBe(142913828922)
        })
  })
