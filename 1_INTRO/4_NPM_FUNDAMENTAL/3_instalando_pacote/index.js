const _ = require('lodash') 

const a = [1,2,3,4,5,6]

const b = [1,5,6,9,7,5]

const diff = _.difference(a,b);

console.log(diff) // Output: [2, 3, 4]

