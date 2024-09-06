const user = {
  '': 1,
  ' ': 1, // 'id': 1, '0y': 2 모두 OK!
  123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
  [12345n.toString()]: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
  true: 1, // OK  user[true]  user.true
  id: 2,
  [`name`]: 'Hong', // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
  [Symbol()]: 'Hong', // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
  'my-friends': ['Han', 'Kim'],
  getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
  getInfo() {
    return `${this.id}-${this.name}`;
  }, // OK! getInfo의 최종 <f.o>
};

user.addr = 'Seoul';
delete user[''];
delete user[123]; // arr[1] arr['1'] arr.1
console.log('🚀  user:', user);
console.log('id' in user, user.hasOwnProperty('id'));
console.log('---------------------');
const keys = Object.keys(user);
console.log('🚀  keys:', keys);
console.log('🚀  ownKeys:', Reflect.ownKeys(user));

console.log('🚀  values:', Object.values(user));
console.log('🚀  entries:', Object.entries(user));

function entriesWithSymbol(obj) {
  const rets = [];
  if (!obj || typeof obj !== 'object') return [];
  for (const k of Reflect.ownKeys(obj)) {
    console.log('k=', k);
    rets.push([k, obj[k]]);
  }
  return rets;
}
console.log('ref.entries>>', entriesWithSymbol(user));

console.log('===================');
console.log(Object.getOwnPropertyDescriptor(user, 'id'));
console.log('----------------');
Object.defineProperty(user, 'id', {
  enumerable: false,
  get() {
    return 100;
  },
});
user.id = 3;
console.log(Object.getOwnPropertyDescriptor(user, 'id'));
console.log(Object.keys(user), user.id);

// console.log(Object.assign({ x: 100 }, user));
Object.assign(user, {
  getName() {
    return this.name;
  },
});

console.log(user.getName());
