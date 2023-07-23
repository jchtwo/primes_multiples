export interface iPrimesReturn {
  sum: number
  primes: number[]
}

const brutePrimes = (min: number, max: number): iPrimesReturn => {
  const primes = []
  if (min < 2) {
    min = 2
  }
  for (let i = min; i < max; i++) {
    if (bruteIsPrime(i)) {
      primes.push(i)
    }
  }

  return {
    sum: primes.reduce((acc, c) => acc + c),
    primes
  }
}

const bruteIsPrime = (num: number): boolean => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const semiBrutePrimes = (min: number, max: number): iPrimesReturn => {
    const primes = []
    if (min < 2) {
      min = 2
    }
    for (let i = min; i < max; i++) {
      if (semiBruteIsPrime(i)) {
        primes.push(i)
      }
    }
  
    return {
      sum: primes.reduce((acc, c) => acc + c),
      primes
    }
  }

const semiBruteIsPrime = (num:number): boolean => {
    const square = Math.floor(Math.sqrt(num))
    for(let i = 2; i < square + 1; i ++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}

// This is more efficient than the above. We are essentially doing the same thing, just with less loops.
// step1 => We create an array of 'true' values.
// step2 => we create an empty array (this will store the primes)
// step3 => we set an upper limit for the numbers we will need to validate (as multiples)
// This works because any number after a numbers square root cannot be a new factor
// of the number (because it would end up greater than the number!!)
// step4 => we create a loop of all the potential prime factors, 2 to the square root of our max
// step5 => we find the first potential prime factor (always 2)
// step6 => we create another loop running from our number (e.g 2), until our max value.
// The loop is incremented so that it will check every multiple of that number and mark it 'false'
// which in 2's case would be (2,4,6,8....etc).
// This repeats until we hit the square root of our max. At this point we should have found every
// potential prime!!
// step7 => we then loop through the seived array and push any values that remain 'true' into our
// primes array since these will be the primes
// step8 => we use filter to remove numbers below the min value if this has been set and reduce to
// sum all the primes, these are then returned.
const sievePrimes = (min: number, max: number): iPrimesReturn => {
    const seiveArray = Array.from({ length: max }, () => true)
    const primesArray = []
    const upperLimit = Math.sqrt(max)

    for(let i = 2; i <= upperLimit; i++) {
        if(seiveArray[i]) {
            for(let j = i * i; j < max; j += i) {
                seiveArray[j] = false
            }
        }
    }

    for(let i = 2; i < max; i ++) {
        if(seiveArray[i]) {
            primesArray.push(i)
        }
    }

    const primes = primesArray.filter(num => num >= min)

    return {
        sum: primes.reduce((acc, c) => acc + c),
        primes
    }
}

export { brutePrimes, semiBrutePrimes, sievePrimes }
