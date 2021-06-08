import { getName } from '../getName.js';

describe('gets name from an object', () => {
  it('returns the name property from an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const name = getName(spot, character);
    expect(name).toEqual('spot', 'Aang');
  });

});
