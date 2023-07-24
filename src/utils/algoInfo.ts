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

const multiplesInfo = [
  [{
    id: 1,
    colour: 'info',
    icon: 'mdi-numeric-1',
    text: "Starts by creating an array (as large as the end number)"
  },{
    id: 2,
    colour: 'orange',
    icon: 'mdi-numeric-2',
    text: "Then runs the JS 'filter' array method with loops over the whole array. For each element a callback function runs that returns a boolean true/false. The 'true' elements are added to the new array."
  },{
    id: 3,
    colour: 'success',
    icon: 'mdi-lightbulb-outline',
    text: "'True' being those elements that return 0 when divided by either of the multipliers given."
  },
  {
    id: 4,
    colour: 'purple',
    icon: 'mdi-numeric-3',
    text: "Finally the JS 'reduce' array method is ran. This loops over the filtered array and 'reduces' every element into a sum number."
  }],
  [{
    id: 1,
    colour: 'green',
    icon: 'mdi-lightbulb-outline',
    text: "Since we know every variable needed to solve this problem we can avoid loops entirely. For simplicity this algorythm solves each mutiple sum separately."
  },{
    id: 2,
    colour: 'purple',
    icon: 'mdi-numeric-1',
    text: "We can work out the amount of numbers we will need for our sum by dividing the end number by the multiple (-1 so that we never include it in the sum). "
  },{
    id: 3,
    colour: 'info',
    icon: 'mdi-numeric-2',
    text: "We can then reduce the rest of the logic algebraically. Lets say our multiplier is 5 and our end number is 30. 29 // 5 is 5 so our 'numbers to sum' will be 5"
  },
  {
    id: 4,
    colour: 'red',
    icon: 'mdi-numeric-3',
    text: "(5 + 10 + 15 + 20 + 25) is the same as (5*1 + 5*2 + 5*3 + 5*4 + 5*5) is the same as 5 * (1+2+3+4+5) is the same as 5 * 5 * ((1+6) / 2)"
  },
  {
    id: 5,
    colour: 'yellow',
    icon: 'mdi-numeric-4',
    text: "So our formula is multiplier * numbers_to_sum * the_mid_value_of_numbers_to_sum"
  }]
]

export { primesInfo, multiplesInfo }
