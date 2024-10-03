const assert = require('assert');

const hrTeam = { id: 1, dname: '인사팀' };
const devTeam = { id: 2, dname: '개발팀' };
const depts = [hrTeam, devTeam];
const hong = { id: 1, name: 'Hong', dept: 1 }; // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim = { id: 2, name: 'Kim', dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: 'Park', dept: 2 },
  { id: 4, name: 'Choi', dept: 2 },
];

const deptMap = new Map();
for (const d of depts) deptMap.set(d.id, d);
console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)

// best!
const deptMap2 = new Map(depts.map(d => [d.id, d]));
console.log('🚀  deptMap2:', deptMap2);

const empMap = new Map();
for (const e of emps) empMap.set(e.id, e);
console.log('empMap>>', empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }

const empDept = new Map();
for (const e of emps) {
  // pure method...
  // const { dept, ...emp } = e;
  // empDept.set(emp, deptMap.get(dept));

  // non-pure
  const dept = deptMap.get(e.dept);
  delete e.dept;
  empDept.set(e, dept);
}
console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

// console.log(empDept.get(kim).dname); // '개발팀'
console.log([...empDept.keys()]);
console.log(emps.map(({ id, name }) => ({ id, name })));
assert.deepStrictEqual(
  [...empDept.keys()],
  emps.map(({ id, name }) => ({ id, name }))
);
assert.strictEqual(empDept.get(kim)?.dname, devTeam.dname);
