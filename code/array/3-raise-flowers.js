export default function (val, n) {
  if (typeof val === 'number') val = '' + val;
  let array = val.split('').map(item => +item);
  let num = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0 && !array[i + 1] && !array[i - 1]) { //
      array[i] = 1;
      num++;
    }
  }
  return n <= num;
}