"use strict";

angular
      .module('proyectoAngularApp')
      .service('beerContainerService', function(){
        let beer;
        this.setCurrentBeer = function(beer){
            this.beer = beer;
        }
        this.getCurrentBeer = function() {
            return this.beer;
        }
      });