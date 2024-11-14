import { getScore, isValid } from './hi';
// const { getScore } = require('./hi');

// const ret = getScore('영');
// console.log('🚀  ret:', ret);

describe('-hi-', () => {
  describe('-hi-getScore', () => {
    test('hi.getScore==>', () => {
      expect(getScore('영')).toBe('과목: 영');
    });
    test('hi.getScore==>', () => {
      expect(getScore('국')).toBe('과목: 국');
    });
  });

  describe('hi-valid', () => {
    test('-isValid-', () => {
      expect(isValid()).not.toBe(false);
      expect(isValid()).toBeTruthy();
      // expect(isValid()).toBeFalsy();
    });
  });
});
