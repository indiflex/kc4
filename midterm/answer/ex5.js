const ㄱㄴㄷ = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const 가나다 = '가까나다따라마바빠사싸아자짜차카타파하';

// ㄱ1ㄷ ==> "/[ㄱ가-깋][1][ㄷ다-딯]/"
module.exports = {
  searchByKoreanInitialSound: (data, firstSounds) => {
    const r = [...firstSounds].map(a => {
      const idx = ㄱㄴㄷ.indexOf(a);
      if (idx === -1) return a;
      const S = 가나다.at(idx);
      const E = 가나다.at(idx + 1).charCodeAt(0) - 1;
      return `[${a}${S}-${String.fromCharCode(E)}]`;
    });

    // console.log('rrr>>', r.join(''));
    const regex = new RegExp(r.join(''));
    return data.filter(d => regex.test(d));
  },
};
