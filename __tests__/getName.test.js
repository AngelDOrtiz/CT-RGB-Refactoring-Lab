import { getName } from '../getName.js';
import { copyAndPush } from '../copyAndPush.js';

describe('gets name from an object', () => {
  it('returns the name property from an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const name = getName(spot, character);
    expect(name).toEqual('spot', 'Aang');
  });

});

describe('copyAndPush function', () => {
  test('returns a new array with all the items in the original array and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];
    const newNumbers = copyAndPush(numbers, 4);
    expect(newNumbers).toEqual([1, 2, 3, 4]);
  });
});
