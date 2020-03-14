import raise from '../../code/array/3-raise-flowers';

test('raise: 100000110001,3', () => {
  expect(raise('00100100011000100', 4)).toBe(true);
});