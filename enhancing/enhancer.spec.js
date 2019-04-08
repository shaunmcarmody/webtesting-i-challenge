const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
  const item = {
    durability: 0,
    enhancement: 14,
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
    it("should be undefined when argument isn't an object", () => {
      expect(enhancer.succeed(1)).toBeUndefined();
    });
    it('should be defined when argument is an object', () => {
      expect(enhancer.succeed(item)).toBeDefined();
    });
    it('should be undefined when object does not include enhancement', () => {
      expect(enhancer.succeed({ durability: 10 })).toBeUndefined();
    });
    it('should return object with enhancement increased by 1 when less than 20', () => {
      expect(enhancer.succeed({ enhancement: 19 })).toEqual(
        expect.objectContaining({
          enhancement: 20
        })
      );
    })
    it('should return object with enhancement the same when equal to 20', () => {
      expect(enhancer.succeed({ enhancement: 20 })).toEqual(
        expect.objectContaining({
          enhancement: 20
        })
      );
    })
  });

  describe('fail method', () => {
    it("should be undefined when argument isn't an object", () => {
      expect(enhancer.fail("Hello world")).toBeUndefined();
    });
    it('should be defined when argument is an object', () => {
      expect(enhancer.fail(item)).toBeDefined();
    });
    it('should be undefined when object does not include enhancement or durability', () => {
      expect(enhancer.fail({ name: 'Player 1' })).toBeUndefined();
    });
    it('should return durability minus 5 if enhancement is less than 15', () => {
      expect(enhancer.fail({ enhancement: 14, durability: 5})).toEqual(
        expect.objectContaining({
          durability: 0
        })
      )
    });
    it('should return durability minus 10 if enhancement is equal to 15 or more', () => {
      expect(enhancer.fail({ enhancement: 16, durability: 20})).toEqual(
        expect.objectContaining({
          durability: 10
        })
      )
    });
    it('should return durability minus 10 and enhancement minus 1 if enhancement is more than 16', () => {
      expect(enhancer.fail({ enhancement: 17, durability: 20})).toEqual(
        expect.objectContaining({
          durability: 10,
          enhancement: 16
        })
      )
    });
  });


});



