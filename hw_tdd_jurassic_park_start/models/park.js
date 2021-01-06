const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaursCollection = [];
}

Park.prototype.addDino = function(dinosaur) {
    this.dinosaursCollection.push(dinosaur);
}

Park.prototype.removeDino = function() {
    this.dinosaursCollection.pop();
}

Park.prototype.findSameSpecies = function(dinoArray, species) {
    dinos = [];
    for (let dino in dinoArray){
      if (dino.species == species) {
        dinoArray.push(dino);
      }
    }
  }

module.exports = Park;