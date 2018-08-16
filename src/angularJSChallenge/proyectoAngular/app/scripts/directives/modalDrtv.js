"use strict";


angular
      .module('proyectoAngulaApp')
      .directive('modalDirective', ['$scope', '$mdDialog', function($scope, $mdDialog) {

        return {
            restrict: "EA",
            templateUrl: function (elem,attr) {
                return '/views/' + attr.modalName + '.html';
            }
        }

      }]);