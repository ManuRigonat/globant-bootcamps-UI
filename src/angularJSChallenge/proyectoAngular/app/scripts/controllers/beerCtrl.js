'use strict';

/**
 * @ngdoc function
 * @name proyectoAngularApp.controller:beerController
 * @description
 * # beerController
 * Controller of the proyectoAngularApp
 */

angular
      .module('proyectoAngularApp')
.controller('beerController',['$scope','$window','beerService',
           function($scope, $window, beerService) {
  $scope.modalView = true;
  $scope.beers = beerService.getBeers();

  $scope.hideModal = function() {
    $scope.modalView = false;
   };
  
  $scope.deleteBeer = function(beerIndex) {
     let beerToDelete = $scope.beers[beerIndex];;
     $window.confirm('Are you sure? ' + beerToDelete.name + ' will disappear');
     $scope.beers = beerService.deleteBeer(beerToDelete,$scope.beers);
     $window.alert("Beer deleted");
  }

  $scope.saveBeer = function saveBeer(beerName,beerIBU) {
     if(!beerService.existsBeer(beerName,$scope.beers)) {
       $scope.beers = beerService.saveBeer(beerName,beerIBU,$scope.beers);
       $window.alert("Beer added");
       $scope.showModal();
     } else {
         $window.alert("Beer " + beerName + " already exists");
         $scope.showModal();
     }
  };

  $scope.updateBeer = function updateBeer(beerIndex,newbeerName,newbeerIBU) {
    $scope.beers[beerIndex] = beerService.updateBeer($scope.beers[beerIndex],newbeerName,newbeerIBU);
    $window.alert("Beer modified");
    $scope.showModal();
  };
  
}]);
