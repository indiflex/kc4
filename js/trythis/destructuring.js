const user = { id: 1, name: 'Hong', passwd: 'xyz', addr: 'Seoul' };

const { passwd, ...userInfo } = user;
console.log('🚀  userInfo:', userInfo);

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
console.log(id1, id2, id3);

function getValueExceptInitial(k) {
  const { [k]: val } = user;
  const [, ...ret] = [...val];
  let result = '';
  for (let i = 0; i < ret.length; i += 1) result += ret[i];

  return result;
  // return ret.join('');
}
console.log(getValueExceptInitial('name')); // 'ong'
console.log(getValueExceptInitial('passwd')); // 'yz'
console.log(getValueExceptInitial('addr')); // 'eoul'
