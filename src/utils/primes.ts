interface iPrimesReturn {
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

const seivePrimes = (min: number, max: number): iPrimesReturn => {
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

export { brutePrimes, semiBrutePrimes, seivePrimes }
