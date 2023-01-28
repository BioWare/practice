import {multyply} from './01';

let a: number;
let b :number;

beforeEach(() => {
  a = 5;
  b = 26;
})

test('must multyply elements', () => {

  const result = multyply(a, b);

  a = 190;

  const result2 = multyply(a, b);


  expect(result).toBe(130);
  expect(result2).toBe(4940);

})
