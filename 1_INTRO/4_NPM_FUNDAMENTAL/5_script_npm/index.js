import chalk from "chalk";

import _ from "lodash";

const a = [1, 2, 3, 4, 5, 6];
 
const b = [1, 5, 6, 9, 7, 5];

const diff = _.difference(a, b);

console.log(chalk.blue(diff)); // Output: [2, 3, 4]

console.log(chalk.blue("olá mundo"))

