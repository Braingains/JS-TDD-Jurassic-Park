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

module.exports = Park;