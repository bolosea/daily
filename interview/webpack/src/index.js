console.log(123)
const foo = require('./foo')
console.log(foo.a);
console.log(2);
import './css/index.css'
import './css/index2.less'

class A {
  constructor(name){
    this.name = name
  }
  static toString = function(){
    return '静态属性'
  }
  say(){
    console.log('name',this.name);
  }
}
const a = new A('菠萝')
a.say()

function *gen(){
  yield 1;
  yield 2;
}
const gfn = gen()
console.log(gfn.next());
console.log(gfn.next());
console.log(gfn.next());

async function test(){
  console.log('???');
  let res = await gen().next();
  console.log('async res',res);
}
test()
// import '@babel/polyfill'
import 'core-js'
import 'regenerator-runtime/runtime'
console.log('[1,2,3].includes(1)',[1,2,3].includes(1));