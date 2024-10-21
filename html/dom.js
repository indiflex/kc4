const head = document.head;
const body = document.body;
const eles = body.children;
console.log('🚀  children:', eles, eles[0]);
const nodes = body.childNodes;
console.log('🚀  childNodes:', nodes, nodes[0]);
// const div = document.div;
const divs = document.getElementsByTagName('div');
console.log('🚀  base:', head, body, [...divs]);

body.append('APP');
const ele = document.createElement('strong');
ele.innerHTML = '<p><i>Italic</i></p>';
ele.style.color = 'purple';
// ele.style.padding = '30px';
// ele.innerText = '<p><i>Italic</i></p>';
// ele.textContent = '<p><i>Italic</i></p>';
console.log('>>', ele.innerHTML);
console.log('>>', ele.innerText);
console.log('>>', ele.textContent);
body.appendChild(ele);

const xxx = document.getElementById('xx');
console.log('🚀  xxx:', xxx);
xxx.style.color = 'blue';
xxx.style.fontWeight = '900';
xxx.style.backgroundColor = 'yellow';
xxx.dataset.x = 'x';
xxx.dataset.y = 'y';

console.log('xxx-x>>', { ...xxx.dataset });

const yyy = document.getElementsByClassName('y')[0];
console.log('🚀  yyy:', yyy, yyy.textContent);
// yyy[0].remove();
yyy.setAttribute('style', 'color:red;font-weight:900');

const sp = document.getElementById('sp');
sp.style.backgroundColor = 'green';

document.getElementById('frm').addEventListener('submit', f);

function f(e) {
  e.preventDefault();
  console.log('form.submit>>>', e);
}

function ff() {
  console.log('ff>>', ...arguments);
}
function nm() {
  console.log('name>>', ...arguments);
  console.log('name.this>>', this);
}

function chg(inp) {
  console.log('chg>>', ...arguments, inp.value);
}
