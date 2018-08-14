'use strict';

angular
      .module('proyectoAngularApp')
.controller('modalCtrl', function($scope, $mdDialog) {

  //FIXME
  $scope.showAdvanced = function(beerIndex) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/modalView.html',
      parent: angular.element(document.body),

    })
  };

  $scope.showAlert = function(beer) { //working
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Beer: ' + beer.name)
        .textContent('IBU: ' + beer.IBU)
        .ariaLabel('Alert Dialog Demo')
        .ok('Cerrar')
    );
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }


});


/* trying use localStorage
if (typeof (localStorage) == 'undefined') {
    alert('Your browser does not support HTML5 localStorage. Try upgrading.');
} else {
    if (localStorage.getItem("background") != null) {
        getColour = localStorage.background;
        $('body').css('background', getColour);
    }
}

$("a").click(function () {
    setColour = 'yellow';     to more test color can change and retest
    if (setColour == "") {
        alert('You never entered anything silly!');
        return;
    }
    localStorage.removeItem('background');
    $('body').css('background', setColour);
    localStorage.setItem("background", setColour);
    alert('Background colour ' + setColour + ' saved in localStorage');
});*/
