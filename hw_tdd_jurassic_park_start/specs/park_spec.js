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
    assert.deepStrictEqual(actual, [dino1]);

  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDino(dino1);
    park.addDino(dino2);
    park.removeDino();
    const actual = park.dinosaursCollection;
    assert.deepStrictEqual(actual, [dino1]);

  });

  xit('should be able to find the dinosaur that attracts the most visitors');

  //loop through array of dinos
  //compare dinosaur.guestsAttractedPerDay of each to find highest
  //save highest in variable

  it('should be able to find all dinosaurs of a particular species', function (){
  park.addDino(dino1);
  park.addDino(dino2);
  park.addDino(dino3);
  park.findSameSpecies(park.dinosaursCollection, 'T-rex')
  const actual = park.dinosaursCollection;
  assert.deepStrictEqual(actual, [dino1])

  });

  //take species as argument
  //loop through array of dinos
  //if species = dinosaur.species add to array
  //return array

  xit('should be able to calculate the total number of visitors per day');

  //loop through array of dinos
  //add guestsAttractedPerDay of each dino to variable
  //return variable

  xit('should be able to calculate the total number of visitors per year');

  //..as above * 365?
  xit('should be able to calculate total revenue for one year');

  //as above * park ticket price
});
