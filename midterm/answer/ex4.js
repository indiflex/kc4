function isObject(obj) {
  return obj && typeof obj === 'object';
}

const isWeak = obj => obj instanceof WeakMap || obj instanceof WeakSet;

function deepCopy(obj) {
  if (!isObject(obj) || isWeak(obj)) return obj;

  // const value = obj.valueOf();
  // console.log('🚀  value:', value, obj.constructor.name);

  if (obj instanceof Map) {
    return new Map(
      [...obj.entries()].map(([k, v]) => [deepCopy(k), deepCopy(v)])
    );
  } else if (obj instanceof Set) {
    return new Set([...obj].map(a => deepCopy(a)));
  } else if (obj instanceof String) {
    return new String(value);
  }

  // const newer = {};
  const newer = Array.isArray(obj) ? Array.from({ length: obj.length }) : {};
  for (const k of Reflect.ownKeys(obj)) {
    newer[k] = deepCopy(obj[k]);
  }

  return newer;
}

module.exports = { deepCopy };
