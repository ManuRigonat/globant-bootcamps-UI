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
.controller('beerController',['$scope','$window','beerService', '$mdDialog',
           function($scope, $window, beerService, $mdDialog) {
  
  $scope.beers = beerService.getBeers();
            
  this.deleteBeer = function(beerIndex) {
     let beerToDelete = $scope.beers[beerIndex];;
     this.confirmDeleteDialog(beerToDelete.name).then(function(){
       $scope.beers = beerService.deleteBeer(beerToDelete,$scope.beers);
       $window.alert("Beer deleted");
     })
  };
  this.confirmDeleteDialog = function(beerName){
    $mdDialog.show( 
      $mdDialog.confirm()
      .title('Would you like to delete ' + beerName + "?")
      .textContent('It will disappear from the table')
      .ariaLabel('Lucky day')
      .ok('Delete')
      .cancel('Cancel'));
    }
  this.saveBeer = function saveBeer(beerName,beerIBU) {
    if(beerName && beerIBU) {
      if(!beerService.existsBeer(beerName,$scope.beers)) {
       $scope.beers = beerService.saveBeer(beerName,beerIBU,$scope.beers);
       $window.alert("Beer " + beerName + " added");
       $mdDialog.hide();
       } else {
          $window.alert("Beer " + beerName + " already exists");
       }
    } else{$window.alert("Complete all the fields!");

    }
  };

  this.updateBeer = function updateBeer(beerIndex,newbeerName,newbeerIBU) {
    if(beerIndex && newbeerName){
      if(newbeerName !== "" && newbeerIBU !== ""){
        $scope.beers[beerIndex] = beerService.updateBeer($scope.beers[beerIndex],newbeerName,newbeerIBU);
        $window.alert("Beer modified");
        $mdDialog.hide();
      }
    }
  };

}]);
