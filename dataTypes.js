const output = console.log;

const repeat = (str, times) => str.repeat(times);

const createBox = string => {
  const margin = repeat('-', string.length + 6);
  output(`\n${margin}\n-- ${string} --\n${margin}\n`);
};

createBox('Number');

const a = 1;
output('a = 1');
output(`a instance of Number? ${a instanceof Number}`);
output(`typeof a? ${typeof a}`);
output(`length of a is: ${a.length}`);

createBox('String');

const b = 'b';
output("b = 'b'");
output(`b instance of String? ${b instanceof String}`);
output(`typeof b? ${typeof b}`);
output(`length of b is: ${b.length}`);

createBox('Array');

const c = [1,2];
output('c = [1,2]');
output(`c instance of Array? ${c instanceof Array}`);
output(`c instance of Object? ${c instanceof Object}`);
output(`typeof c? ${typeof c}`);
output(`length of c is: ${c.length}`);
output(`Object.keys(c) are: ${Object.keys(c)}`);

createBox('Object');

const d = { a: 1, b:2 };
output('d = { a: 1, b:2 }')
output(`d instance of Array? ${d instanceof Array}`);
output(`d instance of Object? ${d instanceof Object}`);
output(`typeof d? ${typeof d}`);
output(`length of d is: ${d.length}`);
output(`Object.keys(d) are: ${Object.keys(d)}`);

createBox('NaN');

const e = NaN;
output('e = NaN');
output(`typeof e? ${typeof e}`);
output(`length of e is: ${e.length}`);
output(`isNaN(e) is: ${isNaN(e)}`);
output(`Does e == NaN ? ${e == NaN}`);
output(`Does e === NaN ? ${e === NaN}`);

createBox('Null');

const f = null;
output('f = null');
output(`typeof f? ${typeof f}`);
output(`length of f gives an ERROR`);
output(`Does f === null ? ${f === null}`);

createBox('Undefined');

const g = undefined;
output('g = undefined');
output(`typeof g? ${typeof g}`);
output(`length of g gives an ERROR`);
output(`Does g === undefined ? ${g === undefined}`);

createBox('Function');

const h = x => ++x;
const i = x => ++x;
output('h = x => ++x, i = x => ++x;');
output(`typeof h? ${typeof h}`);
output(`h instance of Object? ${d instanceof Object}`);
output(`length of h is: ${h.length}`);
output(`Does h === i ? ${h === i}`);
output(`Does JSON.stringify(h) === JSON.stringify(i) ? ${JSON.stringify(h) === JSON.stringify(i)}`);

createBox('Boolean');

const j = true;
output('j = true;');
output(`typeof j? ${typeof j}`);
output(`length of j is: ${j.length}`);