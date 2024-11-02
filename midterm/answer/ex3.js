Array.prototype.sortBy = function (sortProp = '') {
  const sortProps = sortProp.split(',');
  // console.log('🚀  sortProps:', sortProps);
  return [...this].sort((a, b) => {
    for (const prop of sortProps) {
      const [key, direction = 'asc'] = prop?.split(':');
      const dir = direction.toLowerCase() === 'desc' ? -1 : 1;
      // console.log('🚀  key:', key, dir, a.name, b.name, a[key], b[key]);
      if (a[key] != b[key]) return a[key] > b[key] ? dir : -dir;
    }
    // console.log('--------------');
  });
};
