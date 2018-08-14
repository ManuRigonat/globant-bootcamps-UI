'use strict';

angular
      .module('proyectoAngularApp')
.controller('beerController',['$scope','$window','beerService', function($scope, $window, beerService) {

  $scope.beers = beerService.getBeers();

  //working
  $scope.deleteBeer = function(beerIndex){
     let beerToDelete = $scope.beers[beerIndex];;
     $window.confirm('Are you sure? ' + beerToDelete.name + ' will disappear');
     $scope.beers = beerService.deleteBeer(beerToDelete,$scope.beers);
     $window.alert("Beer deleted");
     
  }

  $scope.saveBeer = function saveBeer(beerName,beerIBU){ 
    if($scope.beers.indexOf(beerName) === -1){
      $scope.beers.push({name: beerName, IBU: beerIBU});
      $window.alert("Beer added");
    }
  };

}]);
