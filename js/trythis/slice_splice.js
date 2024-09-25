const arr2 = [1, 2, 3, 4, 5];
// ex1) [2,3]을 추출
const r1 = arr2.slice(1, 3);
console.log('🚀  r1:', r1);

// ex2) [3]부터 모두 다 추출
const r2 = arr2.slice(2);
console.log('🚀  r2:', r2);

// ex3) [2,3,4] 제거하기
const r3 = arr2.splice(1, 3);
console.log('🚀  r3:', r3, arr2);

// ex4) 복원하기
const r4 = arr2.splice(1, 0, ...r3);
console.log('🚀  r4:', r4, arr2);

// ex5) [3] 부터 끝까지 제거하기
const r5 = arr2.splice(2);
console.log('🚀  r5:', r5, arr2);

// ex6) 복원하기
const r6 = arr2.splice(2, 0, ...r5);
console.log('🚀  r6:', r6, arr2);

// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
// - 방법1) 3부터 모두 지우고 'X', 'Y', 'Z', 4, 5 추가
// - 방법2) 3만 지우고 'X', 'Y', 'Z' 추가
const r7 = arr2.splice(2, 1, ...'XYZ');
console.log('🚀  r7:', r7, arr2);

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
const r8_1 = arr2.splice(2, 3, 3);
console.log('🚀  r8_1:', r8_1, arr2);
const r8 = [...arr2.slice(0, 2), ...'XYZ', ...arr2.slice(3)];
console.log('🚀  r8:', r8);

arr2.shift();
