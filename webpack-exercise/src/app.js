import * as R from 'ramda';

const a = [1, 2, 2, 3, 4, 4];
const b = [2, 3, 3, 3, 5, 6, 6];

const c = R.union(a, b);

console.warn(c);
