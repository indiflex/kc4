import assert from 'assert';

const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

const intersect1 = (a1, a2) => [...new Set(a1).filter(a => a2.includes(a))];
const intersect = (a1, a2) => [...new Set(a1)].filter(a => a2.includes(a));
const diff = (a1, a2) => [...new Set(a1)].filter(a => !a2.includes(a));

const union = (a1, a2) => [...new Set([...a1, ...a2])];
assert.deepStrictEqual(intersect(A, B), [1, 3, 5]);
assert.deepStrictEqual(intersect(A, C), [3, 4]);
assert.deepStrictEqual(diff(A, B), [2, 4]);
assert.deepStrictEqual(diff(B, A), [22, 44]);
assert.deepStrictEqual(diff(A, C), [1, 2, 5]);
assert.deepStrictEqual(diff(B, C), [1, 22, 44, 5]);
assert.deepStrictEqual(union(A, B), [1, 2, 3, 4, 5, 22, 44]);
assert.deepStrictEqual(union(A, C), [1, 2, 3, 4, 5, 11, 222, 555]);
