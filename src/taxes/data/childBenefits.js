export const childBenefit = {
  first: 1076.4,
  subsequent: 712.4,
}

export const lossOfFirstChildBenefit = [
  {start: 0, end: 50000, rate: 0},
  {start: 50000, end: 60000, rate: 0.10764},
  {start: 60000, end: 1000000000, rate: 0},
]

export const lossOfSubsequentChildBenefit = [
  {start: 0, end: 50000, rate: 0},
  {start: 50000, end: 60000, rate: 0.07124},
  {start: 60000, end: 1000000000, rate: 0},
]
