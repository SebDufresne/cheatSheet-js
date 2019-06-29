const repeat = (str, times) => str.repeat(times);

const createBox = string => {
  const margin = repeat('-', string.length + 6);
  console.log(`\n${margin}\n-- ${string} --\n${margin}\n`);
};

createBox('Number');

const a = 1;
console.log('a = 1');
console.log(`a instance of Number? ${a instanceof Number}`);
console.log(`typeof a? ${typeof a}`);
console.log(`length of a is: ${a.length}`);

createBox('String');

const b = 'b';
console.log("b = 'b'");
console.log(`b instance of String? ${b instanceof String}`);
console.log(`typeof b? ${typeof b}`);
console.log(`length of b is: ${b.length}`);

createBox('Array');

const c = [1,2];
console.log('c = [1,2]');
console.log(`c instance of Array? ${c instanceof Array}`);
console.log(`c instance of Object? ${c instanceof Object}`);
console.log(`typeof c? ${typeof c}`);
console.log(`length of c is: ${c.length}`);
console.log(`Object.keys(c) are: ${Object.keys(c)}`);

createBox('Object');

const d = { a: 1, b:2 };
console.log('d = { a: 1, b:2 }')
console.log(`d instance of Array? ${d instanceof Array}`);
console.log(`d instance of Object? ${d instanceof Object}`);
console.log(`typeof d? ${typeof d}`);
console.log(`length of d is: ${d.length}`);
console.log(`Object.keys(d) are: ${Object.keys(d)}`);

createBox('NaN');

const e = NaN;
console.log('e = NaN');
console.log(`typeof e? ${typeof e}`);
console.log(`length of e is: ${e.length}`);
console.log(`isNaN(e) is: ${isNaN(e)}`);
console.log(`Does e == NaN ? ${e == NaN}`);
console.log(`Does e === NaN ? ${e === NaN}`);

createBox('Null');

const f = null;
console.log('f = null');
console.log(`typeof f? ${typeof f}`);
console.log(`length of f gives an ERROR`);
console.log(`Does f === null ? ${f === null}`);

createBox('Undefined');

const g = undefined;
console.log('g = undefined');
console.log(`typeof g? ${typeof g}`);
console.log(`length of g gives an ERROR`);
console.log(`Does g === undefined ? ${g === undefined}`);

createBox('Function');

const h = x => ++x;
const i = x => ++x;
console.log('h = x => ++x, i = x => ++x;');
console.log(`typeof h? ${typeof h}`);
console.log(`h instance of Object? ${d instanceof Object}`);
console.log(`length of h is: ${h.length}`);
console.log(`Does h === i ? ${h === i}`);
console.log(`Does JSON.stringify(h) === JSON.stringify(i) ? ${JSON.stringify(h) === JSON.stringify(i)}`);

