const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaursCollection = [];
}

Park.prototype.addDino = function(dinosaur) {
    this.dinosaursCollection.push(dinosaur);
}

module.exports = Park;