"use strict";

/**
 * @ngdoc function
 * @name proyectoAngularApp.service:beerService
 * @description
 * # beerService
 * Service of the proyectoAngularApp
 */

angular
    .module('proyectoAngularApp')
    .service('beerService', function() {
       const beers = [
            {
              name: 'Ipa',
              IBU: 2007
            },
            {
              name: 'Honey',
              IBU: 1800
            },
            {
              name: 'Scotch',
              IBU: 1943
            },
            {
              name: 'Amber',
              IBU: 1995
            }
          ];
       
      this.getBeers = function getBeers() {
        return beers;
      };

      this.equalBeers = function(aBeer,anotherBeer) {
        return (aBeer === anotherBeer);
      };

     this.compareBeerNames = function compareBeerNames(aBeerName, anotherBeerName) {
       return (aBeerName === anotherBeerName);
      };

     //returns true if aBeer exists in beersArray
     this.existsBeer = function existsBeer(aBeer,beersArray) {
       for(let indexBeer in beersArray){
         if(this.compareBeerNames(aBeer,beersArray[indexBeer].name)){
           return true;
         }
       }
       return false;
     }; 
      
     //returns a new array without aBeer
     this.deleteBeer = function deleteBeer (aBeer,beersArray) { 
       let arrayCopy = [];
       for(let indexBeer in beersArray){
         if(!this.equalBeers(beersArray[indexBeer],aBeer)){
           arrayCopy.push(beersArray[indexBeer]);
         }
       }
       return arrayCopy;
     };

    this.saveBeer = function saveBeer(beerName,beerIBU,beersArray) {
      beersArray.push({name: beerName, IBU: beerIBU});
      return beersArray;
    };

      this.updateBeer = function updateBeer(oldBeer, newBeerName, newBeerIBU){
        oldBeer.name = newBeerName;
        oldBeer.IBU = newBeerIBU;
        return oldBeer;
      };
     
  });
