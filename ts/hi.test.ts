import { getScore } from './hi';
// const { getScore } = require('./hi');

// const ret = getScore('영');
// console.log('🚀  ret:', ret);

describe('-hi-', () => {
  test('hi.getScore==>', () => {
    expect(getScore('영')).toBe('과목: 영');
  });
  test('hi.getScore==>', () => {
    expect(getScore('국')).toBe('과목: 국');
  });
});
