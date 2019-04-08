const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
  const item = {
    durability: 0,
    enhacement: 50,
    name: 'Player 1'
  }
  describe('repair method', () => {
    it("should be undefined when argument isn't an object", () => {
      expect(enhancer.repair(null)).toBeUndefined();
    });
    it('should be defined when argument is an object', () => {
      expect(enhancer.repair(item)).toBeDefined();
    });
    it('should return an object with durability restored to 100', () => {
      expect(enhancer.repair(item)).toEqual(
        expect.objectContaining({
          durability: 100
        })
      );
    });
  });

  describe('succeed method', () => {

  });


});



