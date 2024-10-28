class Parent {
  constructor() {
    console.log('Parent.const.target=', new.target, new.target.name);
    this.xx = new.target;
  }
}
class Child extends Parent {
  printTarget() {
    console.log('target=', new.target, this.xx);
  }
}

const c = new Child();
c.printTarget();

console.log('--------------');

function Pf() {
  console.log('Pf>>', new.target);
}
function Cf() {
  console.log('Cf>>', new.target, Cf.constructor.name);
}
Cf.prototype = Object.create(Pf.prototype);

const ccc = new Cf();
