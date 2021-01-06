const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}

// Dinosaur.prototype.findMostPopular = function(dinoArray) {
//   let mostPopular = 0;
//   for (var arrayIndex = 0; arrayIndex < dinoArray.length; arrayIndex++) {
//     for(var subArrayIndex = 0; subArrayIndex < dinoArray[arrayIndex].length; subArrayIndex++){
//       if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
    
//    }
//   }
// }

module.exports = Dinosaur;
