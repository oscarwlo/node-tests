const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      let res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    let res = utils.square(11);

    expect(res).toBe(121).toBeA('number');
  });

  it('should async square two numbers', (done) => {
    utils.asyncSquare(11, (product) => {
      expect(product).toBe(121).toBeA('number');
      done();
    });
  });
});

it('should verify first/last names are set', () => {
  let user = {location: 'Waterloo', age: 22};
  let res = utils.setName(user, 'Oscar Lo');

  expect(res).toInclude({
    firstName: 'Oscar',
    lastName: 'Lo'
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Oscar'}).toEqual({name: 'Oscar'});
//   // expect([2, 3, 4]).toInclude(2);
//   expect ({
//     name: 'Oscar',
//     age: 22,
//     location: 'Waterloo'
//   }).toExclude({
//     age: 23
//   })
// });
