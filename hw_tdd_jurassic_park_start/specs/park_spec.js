const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  beforeEach(function () {
    park = new Park('Mesozoic Meadow', 100)
  });

  it('should have a name', function() {
  const actual = park.name;
  assert.strictEqual(actual, 'Mesozoic Meadow');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(100, park.ticketPrice);

  });

  it('should have a collection of dinosaurs', function() {
    park.addDino('t-rex')
    const actual = park.dinosaursCollection;
    assert.deepStrictEqual(actual, ['t-rex']);

  });

  xit('should be able to add a dinosaur to its collection');

  xit('should be able to remove a dinosaur from its collection');

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
