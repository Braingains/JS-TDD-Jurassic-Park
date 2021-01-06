const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  beforeEach(function () {
    park = new Park('Mesozoic Meadow', 100)
    dino1 = new Dinosaur('T-rex', 'carnivore', 1000)
    dino2 = new Dinosaur('Velociraptor', 'carnivore', 800)
    dino3 = new Dinosaur('Triceratops', 'herbivore', 500)
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
    const actual = park.dinosaursCollection;
    assert.deepStrictEqual(actual, []);

  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dino1);
    const actual = park.dinosaursCollection;
    assert.deepStrictEqual(actual, dino1);

  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDino('raptor');
    park.addDino('t-rex');
    park.removeDino();
    const actual = park.dinosaursCollection;
    assert.deepStrictEqual(actual, ['raptor']);

  });

  it('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
