class Triple {
  constructor() {}
  static triple(n) {
    n = n || 1;
    console.log('🚀  n:', n);
    return n * 3;
  }

  triple(n) {
    console.log('*********', n);
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    console.log('11>>', super.constructor, super.constructor.triple);
    return super.triple(n) * super.triple(n);
  }
}

BiggerTriple.triple();
// console.log(Triple.triple()); // 3
// console.log(Triple.triple(6)); // 18
// console.log(BiggerTriple.triple(3)); // 81
// var tp = new Triple();
// console.log(BiggerTriple.triple(3)); // 81
// // console.log(tp.triple()); // Error!!
// console.log(tp.constructor.triple(4)); // 12
console.log('---------------------');
class BiggerTripleX extends Triple {
  triple(n) {
    console.log(
      '22>>',
      super.constructor,
      super.triple,
      super.constructor.triple
    );

    return super.triple(n) * Triple.triple(n);
  }
}

const btx = new BiggerTripleX();
btx.triple(9);
