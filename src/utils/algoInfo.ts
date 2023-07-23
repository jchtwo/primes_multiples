const primesInfo = [
  [
    {
      id: 1,
      colour: 'info',
      icon: 'mdi-numeric-1',
      text: 'Create an outer loop from the starting number to the goal.'
    },
    {
      id: 2,
      colour: 'error',
      icon: 'mdi-numeric-2',
      text: 'For each element in the outer loop, an inner loop is initialised. The inner loop runs through every number lower than the outler loop number that triggered it. If the outer loop number is divisible by any of these numbers then it is not a prime number.'
    },
    {
      id: 3,
      colour: 'warning',
      icon: 'mdi-alert-circle',
      text: 'As you can imagine this is going to be very slow for large numbers.'
    }
  ],
  [
    {
      id: 1,
      colour: 'info',
      icon: 'mdi-numeric-1',
      text: 'Create an outer loop from the starting number to the goal.'
    },
    {
      id: 2,
      colour: 'error',
      icon: 'mdi-numeric-2',
      text: 'For each element in the outer loop, an inner loop is initialised.'
    },
    {
      id: 3,
      colour: 'purple',
      icon: 'mdi-numeric-3',
      text: 'However, with this algo the inner loop will only run up until the square root of the outer loop number that triggered it.'
    },
    {
      id: 4,
      colour: 'success',
      icon: 'mdi-lightbulb-outline',
      text: "This is because any number greater than a numbers square root cannot be a factor of that number (if you mutiply any number greater than a numbers square root by itself you'll get a number greater than the number in question)"
    }
  ],
  [
    {
      id: 1,
      colour: 'info',
      icon: 'mdi-numeric-1',
      text: "Starts by creating a 'sieve' array filled with boolean 'true' values. The array should contain as many values as the end goal. Also creates an empty 'results' array."
    },
    {
      id: 2,
      colour: 'purple',
      icon: 'mdi-numeric-2',
      text: "Then creates an 'upper limit' variable which will be the square root of the end goal number. This will cover every possible factor of every number (index) of the 'sieve' array."
    },
    {
      id: 3,
      colour: 'pink',
      icon: 'mdi-numeric-3',
      text: 'Then creates a first loop which will run over all of the numbers between 2 and the upper limit.'
    },
    {
      id: 4,
      colour: 'teal',
      icon: 'mdi-numeric-4',
      text: "For each number in the loop an inner loop runs. The job of this loop is to mark 'false' any numbers which are a multiple of the chosen value in the outer loop."
    },
    {
      id: 5,
      colour: 'green',
      icon: 'mdi-numeric-5',
      text: "After the outer loop has finished running every element that remains marked 'true' will be a prime number"
    }
  ]
]

export { primesInfo }
