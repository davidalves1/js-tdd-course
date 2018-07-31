import { union } from 'ramda';
import somaFn, { sub, multi, div } from './utils';

const a = [1, 2, 2, 3, 4, 4];
const b = [2, 3, 3, 3, 5, 6, 6];

const c = union(a, b);
console.log(c);

console.log('sum', somaFn(5, 2));
console.log('sub', sub(5, 2));
console.log('multi', multi(5, 2));
console.log('div', sub(5, 2)); // 5 / 2 = 3 ???????
