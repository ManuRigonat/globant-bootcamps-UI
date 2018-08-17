'use strict';

/**
 * @ngdoc function
 * @name proyectoAngularApp.controller:modalController
 * @description
 * # modalController
 * Controller of the proyectoAngularApp
 */

angular
      .module('proyectoAngularApp')
.controller('modalController',['$scope', '$mdDialog', function($scope, $mdDialog) {
  
   this.modalCreate = function() {
     $mdDialog.show({
        templateUrl: 'views/modalView.html',
        parent: angular.element(document.body)
     });
   };

   this.modalEdit = function(beerIndex) {
      $scope.actualBeer = $scope.beers[beerIndex];
      $scope.beerIndex = beerIndex;
      $mdDialog.show({
        scope: $scope,
        templateUrl: 'views/modalEditView.html',
        parent: angular.element(document.body)
     });
    };

   //alert with detail
   this.modalDetails = function(beer) {
     $mdDialog.show(
       $mdDialog.alert()
         .parent(angular.element(document.querySelector('#popupContainer')))
         .clickOutsideToClose(true)
         .title('Beer: ' + beer.name)
         .textContent('IBU: ' + beer.IBU)
         .ariaLabel('Alert Dialog')
         .ok('Cerrar')
     );
   };
   
   this.cancel = function() {
     $mdDialog.cancel();
     $mdDialog.hide();
   };

   this.hide = function() {
     $mdDialog.hide();
   };
   
}]);
