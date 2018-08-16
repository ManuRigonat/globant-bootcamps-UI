"use strict";

angular
      .module('proyectoAngularApp')
.controller('modalController',['$scope', '$mdDialog', function($scope, $mdDialog,) {
  $scope.showAdvancedEdit = function(beerIndex) {
    $scope.showModal();
    $scope.actualBeer = $scope.beers[beerIndex];
    $scope.beerIndex = beerIndex;
    $mdDialog.show({
      scope: $scope,
      controller: DialogController,
      templateUrl: 'views/modalEditView.html',
      parent: angular.element(document.body)
    });
  };
  
  $scope.showAlert = function(beer) {
    $scope.showModal(); 
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
   
  function DialogController($scope, $mdDialog) {
        
  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.hide = function() {
    $mdDialog.hide();
  };
        
      }

}]);