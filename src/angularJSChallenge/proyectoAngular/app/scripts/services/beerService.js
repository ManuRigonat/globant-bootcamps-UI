"use strict";

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
      
      this.getBeers = function getBeers(){
        return beers;
      }
      this.equalBeers = function(aBeer,anotherBeer){
        return (aBeer === anotherBeer);
      }
      
      this.deleteBeer = function deleteBeer (beer,beersArray) { 
         let arrayCopy = [];
         for(let indexBeer in beersArray){
             if(!this.equalBeers(beersArray[indexBeer],beer)){
               arrayCopy.push(beersArray[indexBeer]);
             }
         }
         //beerysArray = angular.copy(arrayCopy);
         //return beersArray
         return arrayCopy;
         }
     
  });
